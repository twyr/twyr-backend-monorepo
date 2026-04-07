export default {
	development: {
		client: 'pg',
		debug: false,

		connection: {
			host: '127.0.0.1',
			database: 'twyr',
			user: 'twyr',
			password: 'twyr'
		},

		migrations: {
			tableName: 'rest_api_server_migrations'
		}
	},

	stage: {
		client: 'pg',
		debug: false,

		connection: {
			host: '127.0.0.1',
			database: 'twyr',
			user: 'twyr',
			password: 'twyr'
		},

		migrations: {
			tableName: 'rest_api_server_migrations'
		}
	},

	test: {
		client: 'pg',
		debug: false,

		connection: {
			host: '127.0.0.1',
			database: 'twyr',
			user: 'twyr',
			password: 'twyr'
		},

		migrations: {
			tableName: 'rest_api_server_migrations'
		}
	},

	production: {
		client: 'pg',
		debug: false,

		connection: {
			host: 'twyr-db-serverless-instance-1.cvcykw8em23m.ap-south-1.rds.amazonaws.com',
			port: 5432,
			database: 'twyr',
			user: 'twyr',
			password: 'HBpiDtWA2BzWEpG',
			ssl: { rejectUnauthorized: false }
		},

		migrations: {
			tableName: 'rest_api_server_migrations'
		}
	}
};
