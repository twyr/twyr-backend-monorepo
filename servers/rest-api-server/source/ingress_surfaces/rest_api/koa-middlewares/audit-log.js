/**
 * Imports for this file
 *
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API/Koa Middlewares
 *
 * @ignore
 */
import http from 'node:http';

import convertHrtime from 'convert-hrtime';
import safeJsonStringify from 'safe-json-stringify';

import { errorSerializer } from '@twyr/error-serializer';

const AUDIT_LOG_IGNORE_PATHS = [
	'/api/v1/health',
	'/api/v1/users/session-manager/validate-session'
];

/**
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API/Koa Middlewares
 *
 * @memberof RestApi
 * @static
 * @public
 * @function
 * @name createAuditLogMiddleware
 *
 * @param {object} dependencies - Dependencies for request audit logging.
 * @param {object} dependencies.iocContainer - Container exposing Logger and Audit repositories.
 *
 * @returns {Function} Async Koa middleware that records request and response metadata.
 *
 * @description
 * Creates Koa middleware that measures request duration, captures errors and
 * request/response metadata, and publishes an audit record. Successful health
 * and user session probes are excluded from publication.
 */
export function createAuditLogMiddleware(dependencies) {
	const { iocContainer } = dependencies ?? {};

	/**
	 * @category REST API Server/Ingress Surfaces
	 * @subcategory REST API/Koa Middlewares
	 *
	 * @memberof createAuditLogMiddleware
	 * @async
	 * @inner
	 * @private
	 * @function
	 * @name auditLog
	 *
	 * @param {object} ctxt - Koa request context.
	 * @param {Function} next - Next Koa middleware.
	 *
	 * @returns {Promise<void>} Resolves after the request is handled and its audit record is published or skipped.
	 *
	 * @description
	 * Runs downstream middleware, captures timing and response details, and
	 * publishes an audit record unless the request is an excluded successful probe.
	 */
	return async function auditLog(ctxt, next) {
		// Step 1: Initialize the request audit record
		const logMessageMeta = {
			id: ctxt.state.id,

			start_time: undefined,
			end_time: undefined,
			duration_in_ms: 0,

			user: {
				id: ctxt?.state?.user?.id,
				name: `${ctxt?.state?.user?.['first_name']} ${ctxt?.state?.user?.['last_name']}`,
				role: ctxt?.session?.passport?.user?.['role'] ?? '???'
			},

			device: {
				type: ctxt?.state?.device?.type,
				model: ctxt?.state?.device?.model
			},

			'request-meta': {
				method: ctxt.request.method,
				url: ctxt.request.url,
				ip: ctxt.request.ip,
				ips: JSON.parse(safeJsonStringify(ctxt.request.ips ?? []))
			},

			'response-meta': {},

			data: {
				query: undefined,
				params: undefined,
				body: undefined,
				payload: undefined
			},

			error: undefined
		};

		// Step 2: Start the console audit block
		if (process.stdout.isTTY) {
			const logger = await iocContainer.resolve('Logger');
			logger.debug(`\n${'='.repeat(process.stdout.columns)}`);
		}

		// Step 3: Execute the request while capturing any failure
		const startTime = process.hrtime.bigint();
		logMessageMeta['start_time'] = new Date().valueOf();
		try {
			await next();
		} catch (error) {
			logMessageMeta['error'] = error;
			ctxt.status = error.status ?? 422;
		}

		// Step 4: Record the request completion time and duration
		logMessageMeta['end_time'] = new Date().valueOf();
		const endTime = process.hrtime.bigint();

		logMessageMeta['duration_in_ms'] = convertHrtime(
			endTime - startTime
		).milliseconds;

		// Step 5: Refresh user details after authentication and request handling
		logMessageMeta['user'] = {
			id: ctxt?.state?.user?.['id'] ?? '???',
			name: `${ctxt?.state?.user?.['first_name'] ?? '???'} ${
				ctxt?.state?.user?.['last_name'] ?? '???'
			}`,
			role:
				ctxt?.session?.passport?.user?.['role'] ??
				ctxt?.state?.user?.['role'] ??
				'???'
		};

		// Step 6: Capture the request and response headers
		logMessageMeta['request-meta']['headers'] = JSON.parse(
			safeJsonStringify(ctxt.request.headers)
		);

		logMessageMeta['response-meta']['headers'] = JSON.parse(
			safeJsonStringify(ctxt.response.headers)
		);

		// Step 7: Capture the request parameters and response payload
		logMessageMeta['data']['query'] = JSON.parse(
			safeJsonStringify(ctxt.query ?? {})
		);
		logMessageMeta['data']['params'] = JSON.parse(
			safeJsonStringify(ctxt.params ?? {})
		);
		logMessageMeta['data']['body'] = JSON.parse(
			safeJsonStringify(ctxt.request.body ?? {})
		);
		logMessageMeta['data']['payload'] = Buffer.isBuffer(ctxt.body)
			? 'BUFFER'
			: JSON.parse(safeJsonStringify(ctxt.body || {}));

		// Step 8: Mark responses with a failure status
		logMessageMeta['error'] ??= ctxt.status >= 400;

		// Step 9: Serialize captured errors for audit logging
		if (logMessageMeta['error'] instanceof Error) {
			logMessageMeta['error'] = errorSerializer(logMessageMeta['error']);
		}

		// Step 10: Record the final response status and error description
		const statusCodes = http['STATUS_CODES'];
		logMessageMeta['response-meta']['status'] = {
			code: logMessageMeta['error'].status ?? ctxt.status,
			message:
				logMessageMeta['error'].message ?? statusCodes[ctxt.status],
			responseMessage:
				statusCodes[logMessageMeta['error'].status ?? ctxt.status]
		};

		// Step 11: Skip successful health and session probes to reduce audit noise.
		if (
			AUDIT_LOG_IGNORE_PATHS.includes(ctxt.path) &&
			!logMessageMeta['error']
		)
			return;

		// Step 12: Publish the completed audit record
		const auditRepository = await iocContainer.resolve('Audit');
		auditRepository.publish(logMessageMeta);
	};
}
