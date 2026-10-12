describe('Explicit access and call regression cases', function () {
	let assert;
	let errorSerializer;
	let createErrorForPropagation;
	let APIRegistry;
	let IocContainer;

	before(async function () {
		({ default: assert } = await import('node:assert/strict'));
		({ errorSerializer, createErrorForPropagation } =
			await import('@twyr/error-serializer'));
		({ APIRegistry } = await import('@twyr/api-registry'));
		({ IocContainer } = await import('@twyr/server-dependency-manager'));
	});

	async function withServerEnvironment(run) {
		const previous = Object.getOwnPropertyDescriptor(
			globalThis,
			'serverEnvironment'
		);
		globalThis.serverEnvironment = 'production';
		try {
			await run();
		} finally {
			if (previous) {
				Object.defineProperty(
					globalThis,
					'serverEnvironment',
					previous
				);
			} else {
				delete globalThis.serverEnvironment;
			}
		}
	}

	it('serializes absent errors and errors without usable stack frames', function () {
		for (const error of [
			undefined,
			null,
			{},
			{ message: 'plain object' }
		]) {
			const serialized = errorSerializer(error);
			assert.equal(serialized.location, undefined);
			assert.equal(serialized.stack, undefined);
		}

		const error = new Error('single line');
		error.stack = 'Error: single line';
		assert.equal(errorSerializer(error).location, undefined);
		assert.deepEqual(errorSerializer(error).stack, []);
	});

	it('retains nested error details and trimmed stack frames', function () {
		const cause = new Error('underlying failure');
		cause.stack =
			'Error: underlying failure\n    at inner (example.js:1:1)';
		const error = createErrorForPropagation('OUTER', [cause]);
		const serialized = errorSerializer(error);
		assert.equal(serialized.code, 'OUTER');
		assert.equal(serialized.cause.message, 'underlying failure');
		assert.equal(serialized.cause.location, 'at inner (example.js:1:1)');
		assert.deepEqual(serialized.cause.stack, ['at inner (example.js:1:1)']);
		assert.equal(Object.hasOwn(serialized, 'stack'), false);

		const aggregate = createErrorForPropagation('MULTIPLE', [
			cause,
			new Error('second')
		]);
		assert.equal(errorSerializer(aggregate).errors.length, 2);
		assert.equal(createErrorForPropagation('EMPTY', []).message, 'EMPTY');
	});

	it('resolves root, child, and parent APIs and returns null for missing APIs', async function () {
		await withServerEnvironment(async () => {
			const root = new APIRegistry('ROOT');
			const child = new APIRegistry('USERS', root);
			await root.register('PING', async (value) => value);
			await child.register('READ', async () => 'child result');

			assert.equal(await root.execute('PING', 42), 42);
			assert.equal(await child.execute('ROOT::PING', 43), 43);
			assert.equal(
				await root.execute('ROOT::USERS::READ'),
				'child result'
			);
			assert.equal(await root.execute('UNKNOWN'), null);
			assert.equal(await root.execute('ROOT::UNKNOWN'), null);
		});
	});

	it('executes all registered APIs and propagates handler failures', async function () {
		await withServerEnvironment(async () => {
			const root = new APIRegistry('ROOT');
			await root.register('READ', async () => 'first');
			await root.register('READ', async () => 'second');
			assert.deepEqual(await root.execute('READ'), ['first', 'second']);

			const failure = new Error('handler failed');
			await root.register('FAIL', async () => {
				throw failure;
			});
			await assert.rejects(
				root.execute('FAIL'),
				(error) => error === failure
			);
		});
	});

	it('reports a missing root repository and resolves repositories through a parent', async function () {
		await withServerEnvironment(async () => {
			const root = new IocContainer('ROOT');
			await assert.rejects(root.resolve('Missing'), (error) => {
				assert.match(error.cause.message, /Factory not found/);
				return true;
			});

			const child = new IocContainer('USERS', root);
			const configuration = { scope: 'example' };
			const repository = { name: 'example' };
			await root.register('Example', {
				async createInstances(receivedConfiguration, container) {
					assert.equal(receivedConfiguration, configuration);
					assert.equal(container, child);
					return repository;
				}
			});
			assert.equal(
				await child.resolve('Example', configuration),
				repository
			);
		});
	});

	for (const role of ['user', 'system-admin']) {
		it(`loads a ${role} session without a primary locale or contact`, async function () {
			const { default: loadSession } = await import(
				`../source/repositories/runtime/auth/helpers/${role}-session-cache.js`
			);
			const calls = [];
			const responses = [
				{ rows: [{ id: 'example-user', gender_id: 'example-gender' }] },
				...Array.from({ length: 5 }, () => ({ rows: [] }))
			];
			const database = {
				async raw() {
					return responses.shift();
				}
			};
			const cache = {
				async get() {
					return null;
				},
				async multi() {
					return {
						set(key, value) {
							calls.push({ key, value });
						},
						expire() {},
						async exec() {}
					};
				}
			};

			const user = await loadSession('example-user', cache, database);
			assert.equal(user.id, 'example-user');
			assert.equal(user.primary_locale, undefined);
			assert.equal(user.primary_contact, undefined);
			assert.deepEqual(user.locales, []);
			assert.equal(calls.length, 1);
			assert.equal(JSON.parse(calls[0].value).id, 'example-user');
		});

		it(`returns the domain error for an absent ${role} session record`, async function () {
			const { default: loadSession } = await import(
				`../source/repositories/runtime/auth/helpers/${role}-session-cache.js`
			);
			await assert.rejects(
				loadSession(
					'missing',
					{
						async get() {
							return null;
						}
					},
					{
						async raw() {
							return { rows: [] };
						}
					}
				),
				(error) => {
					assert.equal(error.status, 404);
					assert.match(error.code, /NOT_FOUND_IN_DB$/);
					return true;
				}
			);
		});
	}

	it('localizes an ordinary error without a code or nested errors', async function () {
		const { createErrorLogMiddleware } =
			await import('../source/ingress_surfaces/rest_api/koa-middlewares/error-log.js');
		const middleware = createErrorLogMiddleware({
			iocContainer: {
				async resolve() {
					return {
						async translate(code) {
							return `translated:${code}`;
						}
					};
				}
			}
		});
		const headers = new Map();
		const ctxt = {
			query: {},
			state: {},
			status: 500,
			set(name, value) {
				headers.set(name, value);
			}
		};
		const failure = new Error('unexpected failure');
		await assert.rejects(
			middleware(ctxt, async () => {
				throw failure;
			}),
			(error) => error === failure
		);
		assert.equal(ctxt.body.message, 'translated:UNKNOWN_ERROR');
		assert.equal(ctxt.body.statusCode, 500);
		assert.equal(headers.get('Content-Language'), 'en-IN');
	});

	it('localizes aggregate errors with and without custom field metadata', async function () {
		const { createErrorLogMiddleware } =
			await import('../source/ingress_surfaces/rest_api/koa-middlewares/error-log.js');
		const middleware = createErrorLogMiddleware({
			iocContainer: {
				async resolve() {
					return {
						async translate(code) {
							return `translated:${code}`;
						}
					};
				}
			}
		});
		const first = new Error('invalid name');
		first.code = 'EVASERVER::INVALID_NAME';
		first.customInfo = { label: 'name' };
		const second = new Error('invalid input');
		const failure = new AggregateError([first, second], 'validation');
		failure.code = 'EVASERVER::VALIDATION';
		const ctxt = { query: {}, state: {}, status: 422, set() {} };
		await assert.rejects(
			middleware(ctxt, async () => {
				throw failure;
			}),
			(error) => error === failure
		);
		assert.deepEqual(JSON.parse(ctxt.body.errors), [
			{ field: 'name', message: 'translated:INVALID_NAME' },
			{ field: 'unknown', message: 'translated:UNKNOWN_ERROR' }
		]);
	});

	it('supports repeated renderer cleanup and recreation', async function () {
		await withServerEnvironment(async () => {
			const { default: RendererFactory } =
				await import('../source/repositories/runtime/renderer/index.js');
			await RendererFactory.destroyInstances();
			const renderer = await RendererFactory.createInstances();
			const rendered = await renderer.render([
				{ template: 'Hello <%= name %>', data: { name: 'World' } }
			]);
			assert.equal(rendered[0].document, 'Hello World');
			await RendererFactory.destroyInstances();
			await RendererFactory.destroyInstances();
			const recreated = await RendererFactory.createInstances();
			assert.notEqual(recreated, renderer);
			await RendererFactory.destroyInstances();
		});
	});

	it('allows configuration cleanup before initialization', async function () {
		const { default: ConfigurationFactory } =
			await import('../source/repositories/init/configuration/index.js');
		await ConfigurationFactory.destroyInstances();
		await ConfigurationFactory.destroyInstances();
	});
});
