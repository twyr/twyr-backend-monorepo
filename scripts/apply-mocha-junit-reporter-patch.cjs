const fs = require('node:fs');
const path = require('node:path');

const reporterPath = path.join(
	__dirname,
	'..',
	'node_modules',
	'mocha-junit-reporter',
	'index.js'
);
const original = '  Base.call(this, runner);';
// Mocha 12 exports Base as a class. Construct it so its event listeners and
// statistics are initialized, then expose its state on the JUnit reporter.
const replacement =
	'  Object.assign(this, Reflect.construct(Base, [runner, options]));';

if (!fs.existsSync(reporterPath)) {
	console.log(
		'[mocha-junit-reporter-patch] Skipped: reporter not installed.'
	);
} else {
	const contents = fs.readFileSync(reporterPath, 'utf8');
	if (contents.includes(replacement)) {
		console.log('[mocha-junit-reporter-patch] Already applied.');
	} else if (contents.includes(original)) {
		fs.writeFileSync(reporterPath, contents.replace(original, replacement));
		console.log('[mocha-junit-reporter-patch] Applied.');
	} else {
		throw new Error(
			'[mocha-junit-reporter-patch] Expected Base initialization not found.'
		);
	}
}
