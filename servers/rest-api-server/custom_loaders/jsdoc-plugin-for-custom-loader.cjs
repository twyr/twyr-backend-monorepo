const fs = require('node:fs');
const path = require('node:path');

exports.handlers = {
	beforeParse: function (e) {
		// Replicate your loader's "baseclass:" resolution logic
		const baseclassFolder = './base_classes';

		// Find all "import ... from 'baseclass:name'" patterns
		e.source = e.source.replace(
			/from\s+['"]baseclass:([^'"]+)['"]/g,
			(match, className) => {
				let baseclassFilePath = '';
				let currentDir = path.dirname(e.filename);
				const serverRoot = process.cwd(); // Or your specific root logic

				// Traverse up to find the file, similar to your loader's while loop
				while (currentDir.length >= serverRoot.length) {
					const testPath = path.join(
						currentDir,
						baseclassFolder,
						`${className}.js`
					);
					// eslint-disable-next-line security/detect-non-literal-fs-filename
					if (fs.existsSync(testPath)) {
						baseclassFilePath = testPath;
						break;
					}
					const parentDir = path.dirname(currentDir);
					if (parentDir === currentDir) break;
					currentDir = parentDir;
				}

				if (baseclassFilePath) {
					// Return a standard relative or absolute path JSDoc can follow
					const relativePath = path.relative(
						path.dirname(e.filename),
						baseclassFilePath
					);

					// console.log(
					// 	`Resolved baseclass:${className} to ${relativePath}`
					// );
					return `from './${relativePath}'`;
				}

				// console.log(
				// 	`Could not resolve baseclass:${className}: Returning ${match}`
				// );
				return match; // Keep original if not found
			}
		);

		// Find all "?.(" patterns
		e.source = e.source.replaceAll('?.(', '(');

		// Find all "?.[" patterns
		e.source = e.source.replaceAll('?.[', '[');

		// Find all "?." patterns
		e.source = e.source.replaceAll('?.', '.');

		// Find all "await import" patterns
		e.source = e.source.replaceAll('await import', 'require');
	}
};
