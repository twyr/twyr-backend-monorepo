describe('JSON:API surface boundaries', function () {
	let assert;
	let JSONAPISerializer;
	let loaderHooks;
	const domains = [
		{ name: 'users', type: 'user', domainClass: 'Users', owner: 'user_id' },
		{
			name: 'system_admin',
			type: 'system_admin',
			domainClass: 'SystemAdmin',
			owner: 'system_admin_id'
		}
	];
	const userId = '01900000-0000-7000-8000-000000000001';
	const entityId = '01900000-0000-7000-8000-000000000002';
	const contactTypeId = '01900000-0000-7000-8000-000000000003';

	before(async function () {
		({ default: assert } = await import('node:assert/strict'));
		const { registerHooks } = await import('node:module');
		const { load, resolve } =
			await import('../custom_loaders/baseclass-loader.js');
		loaderHooks = registerHooks({ load, resolve });
		({ default: JSONAPISerializer } = await import('json-api-serializer'));
		for (const domain of domains) {
			const classes = await import(
				`../source/domains/${domain.name}/index.js`
			);
			domain.instance = artifactFor(classes[domain.domainClass], {});
		}
	});

	after(function () {
		loaderHooks?.deregister();
	});

	function artifactFor(Artifact, domainInterface) {
		const previous = Object.getOwnPropertyDescriptor(
			globalThis,
			'serverEnvironment'
		);
		globalThis.serverEnvironment = 'production';
		try {
			return new Artifact(__dirname, domainInterface);
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

	function serializerFor(domain, calls) {
		const serializer = new JSONAPISerializer({
			'convert-case': 'kebab-case'
		});
		domain.instance._registerSerializerTypes(serializer);
		return {
			async deserializeAsync(type, document) {
				calls.push('deserialize');
				return serializer.deserializeAsync(type, document);
			},
			async serializeAsync(type, entity) {
				calls.push('serialize');
				return serializer.serializeAsync(type, entity);
			}
		};
	}

	async function surfaceFor(
		domain,
		kind,
		mode,
		domainInterface,
		context = 'profile'
	) {
		const module = await import(
			`../source/domains/${domain.name}/bounded_contexts/${context}/surfaces/${mode}/${kind}.js`
		);
		const Surface = module.Main ?? module.Contact ?? module.Locale;
		const surface = artifactFor(Surface, domainInterface);
		await surface._setupValidationSchemas();
		return surface._registerSurface();
	}

	function contextFor(body) {
		return {
			request: { body },
			state: { user: { id: userId } },
			params: {},
			locale: 'en-IN'
		};
	}

	function documentFor(domain, kind, operation) {
		const type = kind === 'main' ? domain.type : `${domain.type}_${kind}`;
		let attributes;
		switch (kind) {
			case 'main':
				attributes = {
					mobile_no: '+919876543210',
					first_name: 'Example',
					last_name: 'Person',
					locale_id: 'en-IN',
					...(domain.name === 'users' &&
						operation === 'create' && { otp: '1234' })
				};
				break;
			case 'contact':
				attributes = {
					contact_type_id: contactTypeId,
					contact: '+919876543210'
				};
				break;
			case 'locale':
				attributes = { locale_id: 'en-IN', is_primary: true };
				break;
		}
		return {
			data: {
				type,
				...(operation === 'update' && { id: entityId }),
				attributes
			}
		};
	}

	async function middlewareFor(domain, kind, domainInterface) {
		const module = await import(
			`../source/domains/${domain.name}/bounded_contexts/profile/middlewares/${kind}.js`
		);
		const Middleware = module.Basics ?? module.Contacts ?? module.Locales;
		const handlers = new Map();
		domainInterface.apiRegistry = {
			async register(pattern, handler) {
				handlers.set(pattern, handler);
			}
		};
		const middleware = artifactFor(Middleware, domainInterface);
		middleware._executeWithBackOff = async (run) => run();
		await middleware._registerApi();
		return { middleware, handlers };
	}

	// Model doubles keep these tests independent of the database while running
	// the actual middleware handlers, surface handlers, Joi and serializer.
	function modelFor(result, firstResults = []) {
		const writes = [];
		const query = {
			where() {
				return this;
			},
			andWhere() {
				return this;
			},
			count() {
				return this;
			},
			async first() {
				return firstResults.shift();
			},
			async select() {
				return [];
			},
			withGraphFetched() {
				return this;
			},
			insertAndFetch(data) {
				writes.push(data);
				return this;
			},
			patchAndFetchById(id, data) {
				writes.push(data);
				return this;
			},
			async insert(data) {
				writes.push(data);
			},
			then(resolve) {
				resolve(result);
			}
		};
		return {
			writes,
			query() {
				return query;
			},
			async startTransaction() {
				return {
					async raw() {},
					async commit() {},
					async rollback() {}
				};
			}
		};
	}

	for (const domain of domains) {
		for (const kind of ['main', 'contact', 'locale']) {
			const type =
				kind === 'main' ? domain.type : `${domain.type}_${kind}`;
			for (const operation of ['create', 'update']) {
				it(`${domain.name} ${kind} ${operation} deserializes validated input and serializes its response`, async function () {
					const calls = [];
					const document = documentFor(domain, kind, operation);
					const original = structuredClone(document);
					const raw = {
						id: entityId,
						first_name: 'Example',
						created_at: 'hidden'
					};
					const routes = await surfaceFor(domain, kind, 'command', {
						serializer: serializerFor(domain, calls),
						apiRegistry: {
							async execute(pattern, payload) {
								calls.push('execute');
								const expectedPattern =
									operation.toUpperCase() +
									(kind === 'main'
										? ''
										: `_${kind.toUpperCase()}`);
								assert.equal(pattern, expectedPattern);
								assert.deepEqual(payload.data, {
									...document.data.attributes,
									...(operation === 'update' && {
										id: entityId
									}),
									...(kind !== 'main' && {
										[domain.owner]: userId
									})
								});
								return { status: 201, body: raw };
							}
						}
					});
					const ctxt = contextFor(document);
					await routes
						.find((route) => route.path === `/${operation}`)
						.handler(ctxt);
					assert.deepEqual(calls, [
						'deserialize',
						'execute',
						'serialize'
					]);
					assert.equal(ctxt.status, 201);
					assert.deepEqual(JSON.parse(JSON.stringify(ctxt.body)), {
						jsonapi: { version: '1.0' },
						data: {
							type,
							id: entityId,
							attributes: { first_name: 'Example' }
						}
					});
					assert.deepEqual(document, original);
				});

				it(`${domain.name} ${kind} ${operation} rejects invalid input before conversion or dispatch`, async function () {
					const calls = [];
					const routes = await surfaceFor(domain, kind, 'command', {
						serializer: serializerFor(domain, calls),
						apiRegistry: {
							async execute() {
								calls.push('execute');
							}
						}
					});
					const document = documentFor(domain, kind, operation);
					document.data.type = 'invalid_type';
					await assert.rejects(
						routes
							.find((route) => route.path === `/${operation}`)
							.handler(contextFor(document)),
						(error) =>
							error.status === 422 &&
							error.code === 'EVASERVER::INPUT_VALIDATION_ERROR'
					);
					assert.deepEqual(calls, []);
				});
			}

			it(`${domain.name} ${kind} propagates deserialization failures without dispatching`, async function () {
				const failure = new Error('conversion failed');
				const routes = await surfaceFor(domain, kind, 'command', {
					serializer: {
						async deserializeAsync() {
							throw failure;
						}
					},
					apiRegistry: {
						async execute() {
							assert.fail('middleware must not run');
						}
					}
				});
				await assert.rejects(
					routes
						.find((route) => route.path === '/create')
						.handler(
							contextFor(documentFor(domain, kind, 'create'))
						),
					(error) => error === failure && error.status === undefined
				);
			});

			for (const mode of ['command', 'query']) {
				it(`${domain.name} ${kind} ${mode} leaves the response unset when serialization fails`, async function () {
					const failure = new Error('serialization failed');
					const serializer = serializerFor(domain, []);
					serializer.serializeAsync = async () => {
						throw failure;
					};
					const routes = await surfaceFor(domain, kind, mode, {
						serializer,
						apiRegistry: {
							async execute() {
								return { status: 201, body: { id: entityId } };
							}
						}
					});
					const ctxt = contextFor(
						documentFor(domain, kind, 'create')
					);
					ctxt.status = 500;
					const route =
						mode === 'command'
							? routes.find((route) => route.path === '/create')
							: routes[0];
					await assert.rejects(
						route.handler(ctxt),
						(error) => error === failure
					);
					assert.equal(ctxt.status, 500);
					assert.equal(ctxt.body, undefined);
				});
			}

			it(`${domain.name} ${kind} delete keeps its bodyless response`, async function () {
				const calls = [];
				const routes = await surfaceFor(domain, kind, 'command', {
					serializer: serializerFor(domain, calls),
					apiRegistry: {
						async execute() {
							return { status: 204 };
						}
					}
				});
				const ctxt = contextFor(undefined);
				await routes
					.find((route) => route.httpMethod === 'DELETE')
					.handler(ctxt);
				assert.equal(ctxt.status, 204);
				assert.equal(ctxt.body, undefined);
				assert.deepEqual(calls, []);
			});

			it(`${domain.name} ${kind} query serializes raw middleware results including relationships`, async function () {
				const calls = [];
				const raw = {
					id: entityId,
					first_name: 'Example',
					created_at: 'hidden',
					...(kind === 'main'
						? {
								contacts: [
									{
										id: contactTypeId,
										contact: 'example',
										updated_at: 'hidden'
									}
								],
								names: [],
								locales: []
							}
						: {
								user: {
									id: userId,
									first_name: 'Owner',
									is_deleted: false
								}
							})
				};
				const result = kind === 'main' ? raw : [raw];
				const model = modelFor(result, [raw]);
				const { middleware, handlers } = await middlewareFor(
					domain,
					kind === 'main' ? 'basics' : `${kind}s`,
					{}
				);
				middleware._getModelsFromDomain = async () => model;
				const pattern =
					kind === 'main' ? 'READ' : `READ_${kind.toUpperCase()}`;
				const response = await handlers.get(pattern)({
					user: { id: userId },
					locale: 'en-IN'
				});
				assert.equal(response.body, result);
				const routes = await surfaceFor(domain, kind, 'query', {
					serializer: serializerFor(domain, calls),
					apiRegistry: {
						async execute() {
							calls.push('execute');
							return response;
						}
					}
				});
				const ctxt = contextFor(undefined);
				await routes[0].handler(ctxt);
				assert.deepEqual(calls, ['execute', 'serialize']);
				assert.equal(ctxt.status, 200);
				const resource =
					kind === 'main' ? ctxt.body.data : ctxt.body.data[0];
				assert.equal(resource.type, type);
				assert.equal(resource.attributes.first_name, 'Example');
				assert.equal(
					Object.hasOwn(resource.attributes, 'created_at'),
					false
				);
				assert.equal(ctxt.body.included.length, 1);
				assert.equal(
					ctxt.body.included[0].id,
					kind === 'main' ? contactTypeId : userId
				);
				assert.equal(
					Object.hasOwn(
						ctxt.body.included[0].attributes,
						'updated_at'
					),
					false
				);
			});
		}

		for (const operation of ['create', 'update']) {
			it(`${domain.name} basics middleware consumes plain ${operation} data and returns a raw profile`, async function () {
				const raw = {
					id: userId,
					mobile_no: '+919876543210',
					names: [],
					locales: []
				};
				const model = modelFor(
					raw,
					operation === 'create'
						? [undefined, { id: contactTypeId }, raw]
						: [raw]
				);
				const data = {
					id: entityId,
					mobile_no: raw.mobile_no,
					created_at: 'hidden',
					updated_at: 'hidden',
					...(domain.name === 'users' && { otp: '1234' })
				};
				const original = structuredClone(data);
				const events = [];
				const { middleware, handlers } = await middlewareFor(
					domain,
					'basics',
					{
						iocContainer: {
							async resolve() {
								return {
									async get() {
										return '1234';
									}
								};
							}
						},
						eventEmitter: {
							emit(...args) {
								events.push(args);
							}
						}
					}
				);
				middleware._getModelsFromDomain = async (models) =>
					models.length === 1 ? model : models.map(() => model);
				const response = await handlers.get(operation.toUpperCase())({
					user: { id: userId },
					data,
					locale: 'en-IN'
				});
				assert.equal(response.body, raw);
				assert.equal(
					response.status,
					operation === 'create' ? 201 : 200
				);
				assert.deepEqual(model.writes[0], { mobile_no: raw.mobile_no });
				assert.deepEqual(data, original);
				assert.deepEqual(events, [
					[
						domain.name === 'users'
							? 'USER::INVALIDATE_CACHE'
							: 'SYSTEM_ADMIN::INVALIDATE_CACHE',
						{ userId }
					]
				]);
			});
		}

		for (const kind of ['contacts', 'locales']) {
			for (const operation of ['create', 'update']) {
				it(`${domain.name} ${kind} middleware accepts plain ${operation} data without mutating the caller`, async function () {
					const raw = { id: entityId, contact: 'saved' };
					const model = modelFor(raw, [
						operation === 'create'
							? { count: '1' }
							: { id: entityId }
					]);
					const events = [];
					const { middleware, handlers } = await middlewareFor(
						domain,
						kind,
						{
							eventEmitter: {
								emit(...args) {
									events.push(args);
								}
							}
						}
					);
					middleware._getModelsFromDomain = async () => model;
					const data = {
						id: entityId,
						contact: 'saved',
						created_at: 'hidden',
						updated_at: 'hidden',
						[domain.owner]: 'untrusted'
					};
					const original = structuredClone(data);
					const response = await handlers.get(
						`${operation.toUpperCase()}_${kind.slice(0, -1).toUpperCase()}`
					)({ user: { id: userId }, data });
					assert.equal(response.body, raw);
					assert.equal(response.status, 201);
					assert.deepEqual(model.writes, [
						{
							contact: 'saved',
							[domain.owner]: userId,
							...(operation === 'update' && { id: entityId })
						}
					]);
					assert.deepEqual(data, original);
					assert.deepEqual(events, [
						[
							domain.name === 'users'
								? 'USER::INVALIDATE_CACHE'
								: 'SYSTEM_ADMIN::INVALIDATE_CACHE',
							{ userId }
						]
					]);
				});
			}
		}

		it(`${domain.name} login serializes the nested profile while preserving the session and response wrapper`, async function () {
			const calls = [];
			const raw = {
				id: userId,
				first_name: 'Example',
				is_deleted: false
			};
			const sessionModule = await import(
				`../source/domains/${domain.name}/bounded_contexts/session_manager/middlewares/session.js`
			);
			const handlers = new Map();
			const session = artifactFor(sessionModule.Session, {
				apiRegistry: {
					async register(pattern, handler) {
						handlers.set(pattern, handler);
					},
					async execute(pattern) {
						assert.equal(
							pattern,
							domain.name === 'users'
								? 'USERS::PROFILE::READ'
								: 'SYSTEMADMIN::PROFILE::READ'
						);
						return { status: 200, body: raw };
					}
				},
				eventEmitter: { emit() {} }
			});
			await session._registerApi();
			const postLogin = await handlers.get('LOGIN')({
				user: { id: userId }
			});
			assert.equal(postLogin.body.body, raw);
			const routes = await surfaceFor(
				domain,
				'main',
				'command',
				{
					serializer: serializerFor(domain, calls),
					apiRegistry: {
						async execute() {
							calls.push('execute');
							return postLogin;
						}
					},
					iocContainer: {
						async resolve() {
							return {
								authenticate() {
									return async () => {
										calls.push('authenticate');
									};
								}
							};
						}
					}
				},
				'session_manager'
			);
			const ctxt = {
				...contextFor({ username: '+919876543210', password: '1234' }),
				isAuthenticated() {
					return false;
				},
				session: { passport: {} }
			};
			await routes.find((route) => route.path === '/login').handler(ctxt);
			assert.deepEqual(calls, ['authenticate', 'execute', 'serialize']);
			assert.deepEqual(JSON.parse(JSON.stringify(ctxt.body)), {
				status: 200,
				body: {
					jsonapi: { version: '1.0' },
					data: {
						type: domain.type,
						id: userId,
						attributes: { first_name: 'Example' }
					}
				}
			});
			assert.equal(ctxt.session.passport.user, postLogin.sessionData);
			assert.equal(postLogin.body.body, raw);
		});
	}
});
