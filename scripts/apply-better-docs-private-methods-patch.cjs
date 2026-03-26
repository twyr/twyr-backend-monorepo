const fs = require('node:fs');
const path = require('node:path');

const templatePath = path.join(
	__dirname,
	'..',
	'node_modules',
	'better-docs',
	'tmpl',
	'container.tmpl'
);

const privateMethodFilter =
	"                if(method.access === 'private') return acc\n";

if (!fs.existsSync(templatePath)) {
	console.warn(
		`[better-docs-patch] Skipped: template not found at ${templatePath}`
	);
	process.exit(0);
}

const templateContents = fs.readFileSync(templatePath, 'utf8');

if (!templateContents.includes(privateMethodFilter)) {
	console.log('[better-docs-patch] Already applied.');
	process.exit(0);
}

const patchedContents = templateContents.replace(privateMethodFilter, '');

if (patchedContents === templateContents) {
	console.error(
		'[better-docs-patch] Failed: expected Better Docs private-method filter was not removed.'
	);
	process.exit(1);
}

fs.writeFileSync(templatePath, patchedContents, 'utf8');
console.log('[better-docs-patch] Applied Better Docs private-methods patch.');
