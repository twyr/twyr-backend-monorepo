/**
 * Imports for this file
 *
 * @category REST API Server/Infrastructure
 * @subcategory Custom Loaders
 *
 * @ignore
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

import { errorSerializer } from '@twyr/error-serializer';

/**
 * @category REST API Server/Infrastructure
 * @subcategory Custom Loaders
 *
 * @async
 * @function
 * @name resolve
 *
 * @param {string} [specifier] - the url to be resolved
 * @param {object} [context] - random stuff
 * @param {Function} [nextResolve] - callback
 *
 * @returns {object} - containing details of the resolved base class file.
 *
 * @description
 * Resolves to the file path of the requested base class.
 * It starts from the folder where the file requesting the load resides,
 * then works its way all the way up the folder structure till it finds
 * the file.
 *
 * If it reaches all the way to the top of the folder hierarchy - basically,
 * the location of the server's index file - and it still doesn't find the
 * requested file, it throws.
 *
 * This functionality will help in case each domain wants to have its own
 * base classes - with domain specific specializations - but the codebase
 * can still use "import from baseclass:..."
 */
export async function resolve(specifier, context, nextResolve) {
	if (!specifier.startsWith('baseclass:')) {
		return nextResolve(specifier, context);
	}

	const baseclassFolder = './base_classes';
	const baseclassFile = specifier?.replace?.('baseclass:', '')?.trim?.();

	const serverRootParent = dirname?.(
		dirname?.(fileURLToPath?.(import.meta.url))
	);
	const requesterSource = fileURLToPath?.(context?.parentURL);
	const requesterDirname = dirname?.(requesterSource);

	let baseclassFilePath = undefined;
	let currentSearchDirname = requesterDirname;

	while (!baseclassFilePath) {
		baseclassFilePath = join?.(
			currentSearchDirname,
			baseclassFolder,
			`${baseclassFile}.js`
		);

		// eslint-disable-next-line security/detect-non-literal-fs-filename
		if (existsSync(baseclassFilePath)) break;

		baseclassFilePath = undefined;
		currentSearchDirname = dirname?.(currentSearchDirname);

		if (join?.(currentSearchDirname, baseclassFolder) === requesterDirname)
			currentSearchDirname = dirname?.(currentSearchDirname);

		if (currentSearchDirname === dirname?.(serverRootParent)) break;
	}

	if (!baseclassFilePath) {
		throw new Error(
			`${baseclassFile} not found: import from ${requesterSource}`
		);
	}

	return {
		format: 'module',
		shortCircuit: true,
		url: `file://${baseclassFilePath}`
	};
}

/**
 * @category REST API Server/Infrastructure
 * @subcategory Custom Loaders
 *
 * @async
 * @function
 * @name load
 *
 * @param {string} [url] - the url to be resolved
 * @param {object} [context] - random stuff
 * @param {Function} [nextLoad] - callback
 *
 * @returns {object} - containing the base class.
 *
 * @description Reads the requested base class file and returns its content.
 */
export async function load(url, context, nextLoad) {
	if (!url.startsWith('baseclass:')) {
		const loadedResult = await nextLoad(url, context);
		return loadedResult;
	}

	try {
		const baseclassUrl = url?.replace?.('baseclass:', 'file:')?.trim?.();
		const baseclassFilePath = fileURLToPath?.(baseclassUrl);

		// eslint-disable-next-line security/detect-non-literal-fs-filename
		const baseClass = await readFile?.(baseclassFilePath);
		return {
			format: 'module',
			responseURL: baseclassUrl,
			shortCircuit: true,
			source: baseClass
		};
	} catch (error) {
		const serializedError = errorSerializer?.(error);

		console?.error?.(
			`Error Loading Base Class File::${url}: ${serializedError}`
		);

		throw error;
	}
}
