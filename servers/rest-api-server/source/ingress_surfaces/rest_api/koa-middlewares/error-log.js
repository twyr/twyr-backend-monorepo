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
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API/Koa Middlewares
 *
 * @memberof RestApi
 * @static
 * @public
 * @function
 * @name createErrorLogMiddleware
 *
 * @param {object} dependencies - Dependencies for localized error responses.
 * @param {object} dependencies.iocContainer - Container exposing the MessageI18N repository.
 * @param {object} [dependencies.configuration] - Ingress configuration including the optional SESSION_KEY.
 *
 * @returns {Function} Async Koa middleware that translates errors and writes problem responses.
 *
 * @description
 * Creates Koa middleware that translates downstream errors, writes the
 * localized problem response and applicable authentication or retry headers,
 * and rethrows the translated error for the outer audit middleware.
 */
export function createErrorLogMiddleware(dependencies) {
	const { iocContainer, configuration } = dependencies ?? {};

	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API/Koa Middlewares
	 *
	 * @memberof createErrorLogMiddleware
	 * @async
	 * @inner
	 * @private
	 * @function
	 * @name translateError
	 *
	 * @param {object} ctxt - Koa request context.
	 * @param {Error} error - Error to translate.
	 *
	 * @returns {Promise<Error>} The translated error object.
	 *
	 * @description
	 * Localizes an application error and its nested child errors for the active request locale.
	 */
	async function translateError(ctxt, error) {
		// Step 1: Choose the locale for the error response.
		const i18nRepository = await iocContainer.resolve('MessageI18N');

		const localeId =
			ctxt.query.lang ?? ctxt?.state?.user?.['primary_locale'] ?? 'en-IN';

		// Step 2: Normalize the error code for message translation.
		if (error.code?.startsWith('EVASERVER')) {
			error.code = error.code.replace('EVASERVER::', '');
			error.message = error.code;
		} else {
			error.code = 'UNKNOWN_ERROR';
		}

		// Step 3: Translate the main error message and remove its interpolation metadata.
		const translatedMessage = await i18nRepository.translate(
			error.code,
			localeId,
			{
				user: ctxt.state.user ?? {},
				body: ctxt?.body?.data?.attributes ?? {},
				customInfo: error.customInfo ?? {}
			}
		);

		error.message = translatedMessage;
		delete error.customInfo;

		// Step 4: Translate nested errors and retain their field labels for the response.
		for (let idx = 0; idx < (error.errors?.length ?? 0); idx++) {
			// eslint-disable-next-line security/detect-object-injection
			const err = error.errors[idx];

			if (err.code?.startsWith('EVASERVER')) {
				err.code = err.code.replace('EVASERVER::', '');
				err.message = err.code;
			} else {
				err.code = 'UNKNOWN_ERROR';
			}

			const translatedErrorMessage = await i18nRepository.translate(
				err.code,
				localeId,
				{
					user: ctxt.state.user ?? {},
					body: ctxt?.body?.data?.attributes ?? {},
					customInfo: err.customInfo ?? {}
				}
			);

			err.message = translatedErrorMessage;
			err.label = err.customInfo?.label ?? err.field ?? 'unknown';

			delete err.customInfo;
		}

		return error;
	}

	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API/Koa Middlewares
	 *
	 * @memberof createErrorLogMiddleware
	 * @async
	 * @inner
	 * @private
	 * @function
	 * @name errorLog
	 *
	 * @param {object} ctxt - Koa request context.
	 * @param {Function} next - Next Koa middleware.
	 *
	 * @returns {Promise<void>} Resolves when downstream middleware completes successfully.
	 *
	 * @description
	 * Handles errors from downstream middleware by translating their messages,
	 * writing a problem response, and rethrowing the translated error.
	 */
	return async function errorLog(ctxt, next) {
		// Step 1: Run the downstream middleware and translate any thrown error.
		let throwableError = undefined;

		try {
			await next();
		} catch (error) {
			throwableError = await translateError(ctxt, error);
		}

		if (!throwableError) return;

		// Step 2: Set the error response locale, status, and cache-control headers.
		const responseLocale =
			ctxt.locale ??
			ctxt.query.lang ??
			ctxt?.state?.user?.['primary_locale'] ??
			'en-IN';

		ctxt.type = 'application/problem+json; charset=utf-8';
		ctxt.status = throwableError.status ?? ctxt.status;

		ctxt.set('Cache-Control', 'no-store');
		ctxt.set('Pragma', 'no-cache');
		ctxt.set('Content-Language', responseLocale);
		// Preserve the origin and credentials headers set by the CORS middleware.

		// Step 3: Add authentication or retry headers for the corresponding HTTP status.
		if (ctxt.status === HTTP_ERROR_UNAUTHORIZED) {
			ctxt.set(
				'WWW-Authenticate',
				`cookie; cookie-name=${configuration?.['SESSION_KEY'] ?? DEFAULT_SESSION_KEY}`
			);
		}

		if (ctxt.status === HTTP_ERROR_SERVICE_UNAVAILABLE) {
			ctxt.set('Retry-After', 60); // Retry after 60 seconds
		}

		// Step 4: Build the error response from the translated message.
		ctxt.body = {
			message: throwableError.message,
			statusCode: ctxt.status,
			errors: safeJsonStringify(
				throwableError.errors?.map((err) => {
					return {
						field: err.label,
						message: err.message
					};
				})
			)
		};

		// Step 5: Rethrow the translated error for the outer handlers.
		throw throwableError;
	};
}
