/**
 * Imports for this file
 *
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API/Koa Middlewares
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

/**
 * HTTP Error constants
 *
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API/Koa Middlewares
 *
 * @ignore
 */
const HTTP_ERROR_SERVICE_UNAVAILABLE = 503;
const HTTP_ERROR_UNAUTHORIZED = 401;

const DEFAULT_SESSION_KEY = 'twyr.entity.aggregate.server';

/**
 * Creates the global error middleware for Koa.
 *
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API/Koa Middlewares
 *
 * @param {object} dependencies - Required dependencies.
 * @param {object} dependencies.iocContainer - IoC container instance.
 * @param {Function} dependencies.getConfiguration - Config resolver callback.
 *
 * @returns {Function} - Koa middleware
 */
export function createErrorLogMiddleware(dependencies) {
	const { iocContainer, configuration } = dependencies ?? {};

	/**
	 * Localizes an application error and its nested child errors for the active request locale.
	 *
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API/Koa Middlewares
	 *
	 * @param {object} ctxt - Koa request context.
	 * @param {Error} error - Error to translate.
	 * @returns {Promise<Error>} The translated error object.
	 */
	async function translateError(ctxt, error) {
		const i18nRepository = await iocContainer?.resolve?.('MessageI18N');

		const localeId =
			ctxt?.query?.lang ??
			ctxt?.state?.user?.['primary_locale'] ??
			'en-IN';

		if (error?.code?.startsWith('EVASERVER')) {
			error.code = error?.code?.replace('EVASERVER::', '');
			error.message = error?.code;
		} else {
			error.code = 'UNKNOWN_ERROR';
		}

		const translatedMessage = await i18nRepository?.translate?.(
			error?.code,
			localeId,
			{
				user: ctxt?.state?.user ?? {},
				body: ctxt?.body?.data?.attributes ?? {},
				customInfo: error?.customInfo ?? {}
			}
		);

		error.message = translatedMessage;
		delete error.customInfo;

		for (let idx = 0; idx < (error?.errors?.length ?? 0); idx++) {
			// eslint-disable-next-line security/detect-object-injection
			const err = error?.errors?.[idx];

			if (err?.code?.startsWith('EVASERVER')) {
				err.code = err?.code?.replace('EVASERVER::', '');
				err.message = err?.code;
			} else {
				err.code = 'UNKNOWN_ERROR';
			}

			const translatedErrorMessage = await i18nRepository?.translate?.(
				err?.code,
				localeId,
				{
					user: ctxt?.state?.user ?? {},
					body: ctxt?.body?.data?.attributes ?? {},
					customInfo: err?.customInfo ?? {}
				}
			);

			err.message = translatedErrorMessage;
			err.label = err?.customInfo?.label ?? err?.field ?? 'unknown';

			delete err.customInfo;
		}

		return error;
	}

	return async function errorLog(ctxt, next) {
		let throwableError = undefined;

		try {
			await next();
		} catch (error) {
			throwableError = await translateError(ctxt, error);
		}

		if (!throwableError) return;

		ctxt.type = 'application/problem+json; charset=utf-8';
		ctxt.status = throwableError?.status ?? ctxt?.status;

		ctxt?.set?.('Cache-Control', 'no-store');
		ctxt?.set?.('Pragma', 'no-cache');
		ctxt?.set?.('Content-Language', ctxt?.locale);
		ctxt?.set?.('Access-Control-Allow-Origin', '*');

		if (ctxt?.status === HTTP_ERROR_UNAUTHORIZED) {
			ctxt?.set?.(
				'WWW-Authenticate',
				`cookie; cookie-name=${configuration?.['SESSION_KEY'] ?? DEFAULT_SESSION_KEY}`
			);
		}

		if (ctxt?.status === HTTP_ERROR_SERVICE_UNAVAILABLE) {
			ctxt?.set?.('Retry-After', 60); // Retry after 60 seconds
		}

		ctxt.body = {
			message: throwableError?.message,
			statusCode: ctxt?.status,
			errors: safeJsonStringify?.(
				throwableError?.errors?.map?.((err) => {
					return {
						field: err?.label,
						message: err?.message
					};
				})
			)
		};

		throw throwableError;
	};
}
