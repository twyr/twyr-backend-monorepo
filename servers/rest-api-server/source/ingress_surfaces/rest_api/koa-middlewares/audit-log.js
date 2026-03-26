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
 * Creates the audit log middleware for Koa.
 *
 * @category REST API Server/Ingress Surfaces
 * @subcategory REST API/Koa Middlewares
 *
 * @param {object} dependencies - Required dependencies.
 * @param {object} dependencies.iocContainer - IoC container instance.
 *
 * @returns {Function} - Koa middleware
 */
export function createAuditLogMiddleware(dependencies) {
	const { iocContainer } = dependencies ?? {};

	return async function auditLog(ctxt, next) {
		// Step 1: Define the audit log data structure, and populate
		// the basics
		const logMessageMeta = {
			id: ctxt?.state?.id,

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
				method: ctxt?.request?.method,
				url: ctxt?.request?.url,
				ip: ctxt?.request?.ip,
				ips: JSON?.parse?.(
					safeJsonStringify?.(ctxt?.request?.ips ?? [])
				)
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
			const logger = await iocContainer?.resolve?.('Logger');
			logger?.debug?.(`\n${'='.repeat(process.stdout.columns)}`);
		}

		// Step 3: Now, execute the request, and log the time taken
		const startTime = process?.hrtime?.bigint?.();
		logMessageMeta['start_time'] = new Date()?.valueOf?.();
		try {
			await next?.();
		} catch (error) {
			logMessageMeta['error'] = error;
			ctxt.status = error?.status ?? 422;
		}
		logMessageMeta['end_time'] = new Date()?.valueOf?.();
		const endTime = process?.hrtime?.bigint?.();

		logMessageMeta['duration_in_ms'] = convertHrtime?.(
			endTime - startTime
		)?.milliseconds;

		// Step 4: Fill in the user details, etc...
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

		// Step 5: Fill in the request header details
		logMessageMeta['request-meta']['headers'] = JSON?.parse?.(
			safeJsonStringify?.(ctxt?.request?.headers)
		);

		// Step 6: Fill in the response header details
		logMessageMeta['response-meta']['headers'] = JSON?.parse?.(
			safeJsonStringify?.(ctxt?.response?.headers)
		);

		// Step 7: Fill in the request / response data payload
		logMessageMeta['data']['query'] = JSON?.parse?.(
			safeJsonStringify?.(ctxt?.query ?? {})
		);
		logMessageMeta['data']['params'] = JSON?.parse?.(
			safeJsonStringify?.(ctxt?.params ?? {})
		);
		logMessageMeta['data']['body'] = JSON?.parse?.(
			safeJsonStringify?.(ctxt?.request?.body ?? {})
		);
		logMessageMeta['data']['payload'] = Buffer?.isBuffer?.(ctxt?.body)
			? 'BUFFER'
			: JSON?.parse?.(safeJsonStringify?.(ctxt?.body || {}));

		// Step 7: If there was an error, serialize it for logging
		logMessageMeta['error'] ??= ctxt?.status >= 400;
		if (logMessageMeta?.['error'] instanceof Error) {
			logMessageMeta['error'] = errorSerializer?.(
				logMessageMeta?.['error']
			);
		}

		// Step 8: Fill in the response status / error details
		const statusCodes = http?.['STATUS_CODES'];
		logMessageMeta['response-meta']['status'] = {
			code: logMessageMeta?.['error']?.status ?? ctxt?.status,
			message:
				logMessageMeta?.['error']?.message ??
				statusCodes?.[ctxt?.status],
			responseMessage:
				statusCodes?.[logMessageMeta?.['error']?.status ?? ctxt?.status]
		};

		// Step 9: Don't Audit Log health check calls, etc., to reduce noise.
		if (
			AUDIT_LOG_IGNORE_PATHS.includes(ctxt?.path) &&
			!logMessageMeta['error']
		)
			return;

		// Finally, publish the audit log and throw error if any
		const auditRepository = await iocContainer?.resolve?.('Audit');
		auditRepository?.publish?.(logMessageMeta);
	};
}
