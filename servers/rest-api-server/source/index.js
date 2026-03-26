/**
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @license MITNFA
 * @version 0.2.0
 * @file Main Entry point of Entity Value Aggregate Server by Twyr
 * @author {@link mailto:vish.desai@twyr.ai|Vish Desai}
 * @name index.js
 * @copyright &copy; {@link https://twyr.in|Twyr} 2025
 */

/**
 * Imports for custom loader
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
import { pathToFileURL } from 'node:url';
import { register } from 'node:module';

// Register the loader
const loaderUrl = pathToFileURL('./custom_loaders/baseclass-loader.js');
register(loaderUrl, {
	parentURL: import.meta.url
});

/**
 * Imports for this file
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
import safeJsonStringify from 'safe-json-stringify';

import { dirname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

import * as dotenv from 'dotenv';
import convertHrtime from 'convert-hrtime';
import pleaseUpgradeNode from 'please-upgrade-node';

import { errorSerializer } from '@twyr/error-serializer';
import ApplicationServerFactory from './application-server.js';

/**
 * Step 1: Sanity check for node versions
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
const packageJson = JSON?.parse?.(await readFile?.('./package.json'));
pleaseUpgradeNode?.(Object?.assign?.({}, packageJson));

/**
 * Step 2: Setup global variables (ugh!) to make life simpler across the rest of the codebase
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
const __filename = fileURLToPath?.(import.meta?.url);
const __dirname = dirname?.(__filename);

const serverEnvironment = process?.env?.NODE_ENV || 'development';
global.serverEnvironment = serverEnvironment?.toLocaleLowerCase?.();
global.serverFilePath = normalize?.(__filename);

/**
 * Step 3: Load the environment variables from the .env.${environment} file
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
let environmentFilePath = join?.(__dirname, './../.env');
if (serverEnvironment !== 'production') {
	environmentFilePath = `${environmentFilePath}.${serverEnvironment}`;
}
dotenv?.config?.({
	path: environmentFilePath,
	quiet: true
});

/**
 * Step 4: Set the process name in the OS process table
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
const SERVER_NAME = process?.env?.SERVER_NAME ?? 'REST API Server';
process.title = SERVER_NAME;

/**
 * Step 5: Define the startup / bootup process
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
let bootingUp = false;
const startupHandler = async () => {
	if (bootingUp) return;
	bootingUp = true;

	const bootupStartTime = process?.hrtime?.bigint?.();
	let bootupError = null;

	try {
		await ApplicationServerFactory?.createInstances?.(
			__dirname,
			SERVER_NAME
		);
	} catch (error) {
		bootupError = error;
	}

	const bootupEndTime = process?.hrtime?.bigint?.();

	const bootupDuration = bootupEndTime - bootupStartTime;
	const bootupHrtime = convertHrtime?.(bootupDuration)?.milliseconds;

	if (!bootupError) {
		console?.info?.(
			`${SERVER_NAME} started in: ${bootupHrtime?.toFixed?.(4)}ms`
		);

		return;
	}

	console?.error?.(
		`${SERVER_NAME} bootup sequence errored out in: ${bootupHrtime?.toFixed?.(4)}ms with error:\n${safeJsonStringify?.(errorSerializer?.(bootupError), undefined, 2)}\n\n`
	);

	throw new Error(`Entity Value Aggregate Server Bootup Error`);
};

/**
 * Step 6: Define the clean shutdown process
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
let shuttingDown = false;
const terminationHandler = async () => {
	if (shuttingDown) return;
	shuttingDown = true;

	let terminationStartTime = process?.hrtime?.bigint?.();
	let terminationError = null;

	try {
		await ApplicationServerFactory?.destroyInstances?.();
		process?.removeAllListeners?.();
	} catch (error) {
		terminationError = error;
	}

	const terminationEndTime = process?.hrtime?.bigint?.();

	const terminationDuration = terminationEndTime - terminationStartTime;
	const terminationHrtime =
		convertHrtime?.(terminationDuration)?.milliseconds;

	if (!terminationError) {
		console?.info?.(
			`\n${SERVER_NAME} stopped in: ${terminationHrtime?.toFixed?.(4)}ms`
		);

		return;
	}

	console?.error?.(
		`\n${SERVER_NAME} termination sequence errored out in: ${terminationHrtime?.toFixed?.(4)}ms with error:\n${safeJsonStringify?.(errorSerializer?.(terminationError), undefined, 2)}\n\n`
	);

	throw new Error(`Entity Value Aggregate Server Termination Error`);
};

/**
 * Step 7: Trap signals to catch multiple SIGKILL, etc. from hijacking a clean shutdown process
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
process?.on?.('SIGINT', terminationHandler);
process?.on?.('SIGTERM', terminationHandler);

process.on('uncaughtException', async (err) => {
	console?.error?.(
		`\n${SERVER_NAME} terminating due to uncaught exception:\n${safeJsonStringify?.(errorSerializer?.(err), undefined, 2)}\n\n`
	);

	await terminationHandler();
});

process.on('unhandledRejection', async (reason, location) => {
	console?.error?.(
		`\n${SERVER_NAME} terminating due to uncaught rejection:\n${reason} @ ${location}\n\n`
	);

	await terminationHandler();
});

/**
 * Finally.... start the server, and get going
 *
 * @category REST API Server/Bootstrap
 * @subcategory Startup
 *
 * @ignore
 */
await startupHandler?.();
