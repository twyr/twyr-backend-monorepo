const assert = require('node:assert/strict');
const http = require('node:http');
const { EventEmitter } = require('node:events');

// Load koa-redis's global runtime before Mocha snapshots globals for leak checks.
require('koa-redis');

const localhostOrigin = 'http://localhost:8083';
const localhostCors = { CORS_ALLOWED_ORIGINS: [localhostOrigin] };

async function withApi(configuration, verify) {
	const previousEnvironment = global.serverEnvironment;
	const createServer = http.createServer;
	let server;
	let factory;
	let authenticationCalls = 0;
	global.serverEnvironment = 'production';

	try {
		factory = (await import('../source/ingress_surfaces/rest_api/index.js'))
			.default;
		const passthrough = async (ctxt, next) => {
			authenticationCalls++;
			await next();
		};
		const repositories = {
			Cache: new EventEmitter(),
			Auth: {
				initialize: () => passthrough,
				session: () => passthrough
			},
			MessageI18N: {
				supportedLocales: ['en-IN'],
				async translate(code) {
					return code;
				}
			},
			Audit: { publish() {} },
			Logger: { debug() {}, error() {} }
		};
		const api = await factory.createInstances(
			{ SERVER_PORT: 0, ...configuration },
			{
				async resolve(name) {
					// eslint-disable-next-line security/detect-object-injection
					return repositories[name];
				}
			}
		);
		api.routers.get('v1').get('/cors-check', (ctxt) => {
			ctxt.body = { ok: true };
		});
		api.routers.get('v1').get('/cors-error', () => {
			const error = new Error('Unauthorized');
			error.status = 401;
			throw error;
		});
		http.createServer = (...args) => {
			server = createServer(...args);
			return server;
		};
		await api.start();
		http.createServer = createServer;
		await verify({
			url: `http://127.0.0.1:${server.address().port}/api/v1`,
			authenticationCalls: () => authenticationCalls
		});
	} finally {
		http.createServer = createServer;
		await factory?.destroyInstances();
		if (previousEnvironment === undefined) {
			delete global.serverEnvironment;
		} else {
			global.serverEnvironment = previousEnvironment;
		}
	}
}

describe('REST API CORS', function () {
	it('answers localhost preflights before authentication with requested headers and methods', async function () {
		await withApi(localhostCors, async ({ url, authenticationCalls }) => {
			const response = await fetch(`${url}/cors-check`, {
				method: 'OPTIONS',
				headers: {
					Origin: localhostOrigin,
					'Access-Control-Request-Method': 'POST',
					'Access-Control-Request-Headers':
						'content-type,authorization,x-request-id'
				}
			});
			assert.equal(response.status, 204);
			assert.equal(
				response.headers.get('access-control-allow-origin'),
				localhostOrigin
			);
			assert.equal(
				response.headers.get('access-control-allow-credentials'),
				'true'
			);
			assert.match(
				response.headers.get('access-control-allow-methods'),
				/POST/
			);
			assert.equal(
				response.headers.get('access-control-allow-headers'),
				'content-type,authorization,x-request-id'
			);
			assert.equal(authenticationCalls(), 0);
		});
	});

	it('allows credentialed localhost responses and exposes the request id', async function () {
		await withApi(localhostCors, async ({ url }) => {
			const response = await fetch(`${url}/cors-check`, {
				headers: { Origin: localhostOrigin }
			});
			assert.equal(response.status, 200);
			assert.equal(
				response.headers.get('access-control-allow-origin'),
				localhostOrigin
			);
			assert.equal(
				response.headers.get('access-control-allow-credentials'),
				'true'
			);
			assert.match(response.headers.get('vary'), /Origin/i);
			assert.match(
				response.headers.get('access-control-expose-headers'),
				/X-Request-Id/i
			);
			assert.ok(response.headers.get('x-request-id'));
			assert.deepEqual(await response.json(), { ok: true });
		});
	});

	it('preserves credentialed CORS headers on localized authentication errors', async function () {
		await withApi(localhostCors, async ({ url }) => {
			const response = await fetch(`${url}/cors-error`, {
				headers: { Origin: localhostOrigin }
			});
			assert.equal(response.status, 401);
			assert.equal(
				response.headers.get('access-control-allow-origin'),
				localhostOrigin
			);
			assert.equal(
				response.headers.get('access-control-allow-credentials'),
				'true'
			);
			assert.equal((await response.json()).statusCode, 401);
		});
	});

	for (const origin of [
		'https://untrusted.example',
		'http://localhost:8084',
		'http://localhost.evil.example:8083',
		'null'
	]) {
		it(`does not grant CORS access to ${origin} on preflights, successes or errors`, async function () {
			await withApi(localhostCors, async ({ url }) => {
				for (const path of ['cors-check', 'cors-error']) {
					const response = await fetch(`${url}/${path}`, {
						headers: { Origin: origin }
					});
					assert.equal(
						response.headers.get('access-control-allow-origin'),
						null
					);
					assert.equal(
						response.headers.get(
							'access-control-allow-credentials'
						),
						null
					);
					await response.arrayBuffer();
				}
				const response = await fetch(`${url}/cors-check`, {
					method: 'OPTIONS',
					headers: {
						Origin: origin,
						'Access-Control-Request-Method': 'POST'
					}
				});
				assert.equal(
					response.headers.get('access-control-allow-origin'),
					null
				);
				await response.arrayBuffer();
			});
		});
	}

	it('allows only origins in the configured allowlist', async function () {
		const origin = 'https://frontend.example';
		await withApi({ CORS_ALLOWED_ORIGINS: [origin] }, async ({ url }) => {
			const response = await fetch(`${url}/cors-check`, {
				headers: { Origin: origin }
			});
			assert.equal(response.status, 200);
			assert.equal(
				response.headers.get('access-control-allow-origin'),
				origin
			);
			await response.arrayBuffer();
			const localhostResponse = await fetch(`${url}/cors-check`, {
				headers: { Origin: localhostOrigin }
			});
			assert.equal(
				localhostResponse.headers.get('access-control-allow-origin'),
				null
			);
			await localhostResponse.arrayBuffer();
		});
	});

	for (const [label, configuration] of [
		['missing', {}],
		['empty', { CORS_ALLOWED_ORIGINS: [] }]
	]) {
		it(`does not grant CORS access when the allowlist is ${label}`, async function () {
			await withApi(configuration, async ({ url }) => {
				for (const origin of [
					localhostOrigin,
					'https://untrusted.example'
				]) {
					for (const path of ['cors-check', 'cors-error']) {
						const response = await fetch(`${url}/${path}`, {
							headers: { Origin: origin }
						});
						assert.equal(
							response.status,
							path === 'cors-check' ? 200 : 401
						);
						assert.equal(
							response.headers.get('access-control-allow-origin'),
							null
						);
						assert.equal(
							response.headers.get(
								'access-control-allow-credentials'
							),
							null
						);
						await response.arrayBuffer();
					}
					const response = await fetch(`${url}/cors-check`, {
						method: 'OPTIONS',
						headers: {
							Origin: origin,
							'Access-Control-Request-Method': 'POST'
						}
					});
					assert.equal(
						response.headers.get('access-control-allow-origin'),
						null
					);
					assert.equal(
						response.headers.get(
							'access-control-allow-credentials'
						),
						null
					);
					await response.arrayBuffer();
				}
			});
		});
	}

	it('leaves requests without an Origin header working without CORS headers', async function () {
		await withApi(localhostCors, async ({ url }) => {
			const response = await fetch(`${url}/cors-check`);
			assert.equal(response.status, 200);
			assert.equal(
				response.headers.get('access-control-allow-origin'),
				null
			);
			assert.deepEqual(await response.json(), { ok: true });
		});
	});
});
