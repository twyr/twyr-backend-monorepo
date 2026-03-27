const fs = require('node:fs');
const path = require('node:path');

const betterDocsPath = path.join(
	__dirname,
	'..',
	'node_modules',
	'better-docs'
);

const templatePath = path.join(betterDocsPath, 'tmpl', 'container.tmpl');
const publishPath = path.join(betterDocsPath, 'publish.js');

if (!fs.existsSync(betterDocsPath)) {
	console.warn(
		`[better-docs-patch] Skipped: Better Docs not found at ${betterDocsPath}`
	);
	// eslint-disable-next-line n/no-process-exit
	process.exit(0);
}

function lines(parts) {
	return `${parts.join('\n')}\n`;
}

function replaceOnce(contents, searchValue, replacementValue, label) {
	if (contents.includes(searchValue)) {
		return {
			contents: contents.replace(searchValue, replacementValue),
			changed: true
		};
	}

	const alreadyAppliedValues = arguments[4] || [];

	if (replacementValue && contents.includes(replacementValue)) {
		return {
			contents,
			changed: false
		};
	}

	if (
		alreadyAppliedValues.length &&
		alreadyAppliedValues.some((value) => value && contents.includes(value))
	) {
		return {
			contents,
			changed: false
		};
	}

	if (!replacementValue) {
		return {
			contents,
			changed: false
		};
	}

	if (!contents.includes(searchValue)) {
		throw new Error(
			`[better-docs-patch] Failed: expected snippet not found for ${label}.`
		);
	}
}

function patchFile(filePath, replacements) {
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	if (!fs.existsSync(filePath)) {
		throw new Error(
			`[better-docs-patch] Failed: file not found at ${filePath}`
		);
	}

	// eslint-disable-next-line security/detect-non-literal-fs-filename
	let contents = fs.readFileSync(filePath, 'utf8');
	let changed = false;

	for (const replacement of replacements) {
		const result = replaceOnce(
			contents,
			replacement.searchValue,
			replacement.replacementValue,
			replacement.label,
			replacement.alreadyAppliedValues
		);

		contents = result.contents;
		changed = changed || result.changed;
	}

	if (changed) {
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		fs.writeFileSync(filePath, contents, 'utf8');
	}

	return changed;
}

const templateReplacements = [
	{
		label: 'private method filter removal',
		searchValue:
			"                if(method.access === 'private') return acc\n",
		replacementValue: ''
	},
	{
		label: 'class display name header',
		searchValue: '        ?><?js= doc.name ?><?js\n',
		replacementValue: '        ?><?js= doc.displayName || doc.name ?><?js\n'
	},
	{
		label: 'class links use display names',
		searchValue:
			'            <dt><?js= self.linkto(c.longname, c.name) ?></dt>\n',
		replacementValue:
			'            <dt><?js= self.linkto(c.longname, c.displayName || c.name) ?></dt>\n'
	},
	{
		label: 'class page members use attached collections',
		searchValue:
			"        var members = self.find({kind: 'member', memberof: isGlobalPage ? {isUndefined: true} : doc.longname});\n",
		replacementValue:
			"        var members = doc.pageMembers || self.find({kind: 'member', memberof: isGlobalPage ? {isUndefined: true} : doc.longname});\n"
	},
	{
		label: 'class page methods use attached collections',
		searchValue:
			"        var methods = self.find({kind: 'function', memberof: isGlobalPage ? {isUndefined: true} : doc.longname});\n",
		replacementValue:
			"        var methods = doc.pageMethods || self.find({kind: 'function', memberof: isGlobalPage ? {isUndefined: true} : doc.longname});\n"
	},
	{
		label: 'class page typedefs use attached collections',
		searchValue:
			"        var typedefs = self.find({kind: 'typedef', memberof: isGlobalPage ? {isUndefined: true} : doc.longname});\n",
		replacementValue:
			"        var typedefs = doc.pageTypedefs || self.find({kind: 'typedef', memberof: isGlobalPage ? {isUndefined: true} : doc.longname});\n"
	},
	{
		label: 'class page events use attached collections',
		searchValue:
			"        var events = self.find({kind: 'event', memberof: isGlobalPage ? {isUndefined: true} : doc.longname});\n",
		replacementValue:
			"        var events = doc.pageEvents || self.find({kind: 'event', memberof: isGlobalPage ? {isUndefined: true} : doc.longname});\n"
	}
];

const publishReplacements = [
	{
		label: 'namespace caches removal',
		searchValue: lines([
			'var regionCache = new Map()',
			'var namespaceDoclets = null',
			'var namespaceLongnameCache = new Map()'
		]),
		replacementValue: lines(['var regionCache = new Map()'])
	},
	{
		label: 'class file name cache',
		searchValue: lines(['var regionCache = new Map()']),
		replacementValue: lines([
			'var regionCache = new Map()',
			'var classFileNameCache = new Map()'
		])
	},
	{
		label: 'region grouping and class naming helpers',
		alreadyAppliedValues: [
			'function compareDocletsBySource(left, right) {',
			'function getCategoryPath(doclet) {',
			'function getClassDocletName(doclet) {'
		],
		searchValue: lines([
			'function groupMethodsByRegion(methods) {',
			'\tvar groups = []',
			'\tvar groupsByTitle = Object.create(null)',
			'',
			'\tmethods.forEach(function(method) {',
			"\t\tvar title = findRegionForDoclet(method) || ''",
			'',
			'\t\tif (!groupsByTitle[title]) {',
			'\t\t\tgroupsByTitle[title] = {',
			'\t\t\t\ttitle: title,',
			'\t\t\t\tmethods: []',
			'\t\t\t}',
			'',
			'\t\t\tgroups.push(groupsByTitle[title])',
			'\t\t}',
			'',
			'\t\tgroupsByTitle[title].methods.push(method)',
			'\t})',
			'',
			'\treturn groups',
			'}',
			'',
			'function getNamespaceDoclets() {',
			'\tif (!namespaceDoclets) {',
			"\t\tnamespaceDoclets = helper.find(data, {kind: 'namespace'}) || []",
			'\t}',
			'',
			'\treturn namespaceDoclets',
			'}',
			'',
			'function getDocletDirectory(doclet) {',
			'\tif (!doclet || !doclet.meta) {',
			'\t\treturn null',
			'\t}',
			'',
			'\tvar sourcePath = getPathFromDoclet(doclet)',
			'',
			'\tif (!sourcePath) {',
			'\t\treturn null',
			'\t}',
			'',
			'\treturn path.dirname(sourcePath)',
			'}',
			'',
			'function getNamespaceLongnameForDoclet(doclet) {',
			'\tvar docletDirectory = getDocletDirectory(doclet)',
			'',
			'\tif (!docletDirectory) {',
			'\t\treturn null',
			'\t}',
			'',
			'\tif (!namespaceLongnameCache.has(docletDirectory)) {',
			'\t\tvar namespaceLongname = null',
			"\t\tvar shortDirectory = doclet.meta.shortpath ? path.dirname(doclet.meta.shortpath) : ''",
			'',
			"\t\tif (shortDirectory && shortDirectory !== '.') {",
			'\t\t\tvar namespaceSuffix = shortDirectory',
			'',
			"\t\t\tif (path.sep !== '/') {",
			"\t\t\t\tnamespaceSuffix = namespaceSuffix.split(path.sep).join('/')",
			'\t\t\t}',
			'',
			"\t\t\tnamespaceSuffix = namespaceSuffix.split('/').join('.')",
			'\t\t\tvar suffixMatches = getNamespaceDoclets().filter(function(namespaceDoclet) {',
			'\t\t\t\treturn namespaceDoclet.longname && namespaceDoclet.longname.endsWith(namespaceSuffix)',
			'\t\t\t})',
			'',
			'\t\t\tsuffixMatches.sort(function(left, right) {',
			'\t\t\t\treturn left.longname.length - right.longname.length',
			'\t\t\t})',
			'',
			'\t\t\tnamespaceLongname = suffixMatches[0] ? suffixMatches[0].longname : null',
			'\t\t}',
			'',
			'\t\tif (!namespaceLongname) {',
			'\t\t\tvar directoryMatches = getNamespaceDoclets().filter(function(namespaceDoclet) {',
			'\t\t\t\treturn getDocletDirectory(namespaceDoclet) === docletDirectory',
			'\t\t\t})',
			'',
			'\t\t\tdirectoryMatches.sort(function(left, right) {',
			'\t\t\t\treturn right.longname.length - left.longname.length',
			'\t\t\t})',
			'',
			'\t\t\tnamespaceLongname = directoryMatches[0] ? directoryMatches[0].longname : null',
			'\t\t}',
			'',
			'\t\tnamespaceLongnameCache.set(docletDirectory, namespaceLongname)',
			'\t}',
			'',
			'\treturn namespaceLongnameCache.get(docletDirectory)',
			'}',
			'',
			'function getNavDisplayName(doclet) {',
			'\tif (!doclet) {',
			"\t\treturn ''",
			'\t}',
			'',
			'\tif (!env.conf.templates.default.useLongnameInNav) {',
			"\t\treturn doclet.name || doclet.longname || ''",
			'\t}',
			'',
			'\tif (doclet.longname && doclet.longname !== doclet.name) {',
			'\t\treturn doclet.longname',
			'\t}',
			'',
			'\tvar namespaceLongname = getNamespaceLongnameForDoclet(doclet)',
			'',
			'\tif (namespaceLongname && doclet.name) {',
			"\t\treturn namespaceLongname + '.' + doclet.name",
			'\t}',
			'',
			'\tif (doclet.memberof && doclet.name) {',
			"\t\treturn doclet.memberof + '.' + doclet.name",
			'\t}',
			'',
			"\treturn doclet.longname || doclet.name || ''",
			'}'
		]),
		replacementValue: lines([
			'function compareDocletsBySource(left, right) {',
			"\tvar leftPath = getPathFromDoclet(left) || ''",
			"\tvar rightPath = getPathFromDoclet(right) || ''",
			'',
			'\tif (leftPath !== rightPath) {',
			'\t\treturn leftPath.localeCompare(rightPath)',
			'\t}',
			'',
			'\tvar leftLine = left && left.meta && typeof left.meta.lineno === "number"',
			'\t\t? left.meta.lineno',
			'\t\t: Number.MAX_SAFE_INTEGER',
			'\tvar rightLine = right && right.meta && typeof right.meta.lineno === "number"',
			'\t\t? right.meta.lineno',
			'\t\t: Number.MAX_SAFE_INTEGER',
			'',
			'\tif (leftLine !== rightLine) {',
			'\t\treturn leftLine - rightLine',
			'\t}',
			'',
			'\tvar leftColumn = left && left.meta && typeof left.meta.columnno === "number"',
			'\t\t? left.meta.columnno',
			'\t\t: Number.MAX_SAFE_INTEGER',
			'\tvar rightColumn = right && right.meta && typeof right.meta.columnno === "number"',
			'\t\t? right.meta.columnno',
			'\t\t: Number.MAX_SAFE_INTEGER',
			'',
			'\tif (leftColumn !== rightColumn) {',
			'\t\treturn leftColumn - rightColumn',
			'\t}',
			'',
			"\tvar leftName = left.longname || left.name || ''",
			"\tvar rightName = right.longname || right.name || ''",
			'',
			'\treturn leftName.localeCompare(rightName)',
			'}',
			'',
			'function groupMethodsByRegion(methods) {',
			'\tvar groups = []',
			'\tvar groupsByTitle = Object.create(null)',
			'',
			'\tmethods.slice().sort(compareDocletsBySource).forEach(function(method) {',
			"\t\tvar title = findRegionForDoclet(method) || ''",
			'',
			'\t\tif (!groupsByTitle[title]) {',
			'\t\t\tgroupsByTitle[title] = {',
			'\t\t\t\ttitle: title,',
			'\t\t\t\tmethods: []',
			'\t\t\t}',
			'',
			'\t\t\tgroups.push(groupsByTitle[title])',
			'\t\t}',
			'',
			'\t\tgroupsByTitle[title].methods.push(method)',
			'\t})',
			'',
			'\treturn groups',
			'}',
			'',
			'function getCategoryPath(doclet) {',
			'\tif (!doclet) {',
			"\t\treturn ''",
			'\t}',
			'',
			'\tvar segments = []',
			'',
			'\tif (doclet.category) {',
			'\t\tsegments.push(doclet.category)',
			'\t}',
			'',
			'\tif (doclet.subCategory) {',
			'\t\tsegments.push(doclet.subCategory)',
			'\t}',
			'',
			"\treturn segments.join('/')",
			'}',
			'',
			'function getClassDocletName(doclet) {',
			'\tif (!doclet) {',
			"\t\treturn ''",
			'\t}',
			'',
			'\tvar categoryPath = getCategoryPath(doclet)',
			"\tvar className = doclet.name || doclet.longname || ''",
			'',
			'\tif (!categoryPath) {',
			'\t\treturn className',
			'\t}',
			'',
			"\treturn categoryPath + '/' + className",
			'}',
			'',
			'function getNavDisplayName(doclet) {',
			'\tif (!doclet) {',
			"\t\treturn ''",
			'\t}',
			'',
			"\tif (doclet.kind === 'class') {",
			'\t\treturn getClassDocletName(doclet)',
			'\t}',
			'',
			'\tif (!env.conf.templates.default.useLongnameInNav) {',
			"\t\treturn doclet.name || doclet.longname || ''",
			'\t}',
			'',
			'\tif (doclet.longname && doclet.longname !== doclet.name) {',
			'\t\treturn doclet.longname',
			'\t}',
			'',
			'\tif (doclet.memberof && doclet.name) {',
			"\t\treturn doclet.memberof + '.' + doclet.name",
			'\t}',
			'',
			"\treturn doclet.longname || doclet.name || ''",
			'}'
		])
	},
	{
		label: 'class doclet link helpers',
		alreadyAppliedValues: [
			'function getClassLookupLongname(doclet) {',
			'function normalizeClassDoclets() {'
		],
		searchValue: lines([
			'function getClassDocletName(doclet) {',
			'\tif (!doclet) {',
			"\t\treturn ''",
			'\t}',
			'',
			'\tvar categoryPath = getCategoryPath(doclet)',
			"\tvar className = doclet.name || doclet.longname || ''",
			'',
			'\tif (!categoryPath) {',
			'\t\treturn className',
			'\t}',
			'',
			"\treturn categoryPath + '/' + className",
			'}'
		]),
		replacementValue: lines([
			'function getClassDocletName(doclet) {',
			'\tif (!doclet) {',
			"\t\treturn ''",
			'\t}',
			'',
			'\tvar categoryPath = getCategoryPath(doclet)',
			"\tvar className = doclet.name || doclet.longname || ''",
			'',
			'\tif (!categoryPath) {',
			'\t\treturn className',
			'\t}',
			'',
			"\treturn categoryPath + '/' + className",
			'}',
			'',
			'function getDocletSourceKey(doclet) {',
			'\tvar sourcePath = getPathFromDoclet(doclet)',
			'',
			'\tif (!sourcePath) {',
			"\t\treturn ''",
			'\t}',
			'',
			"\tif (path.sep !== '/') {",
			"\t\treturn sourcePath.split(path.sep).join('/')",
			'\t}',
			'',
			'\treturn sourcePath',
			'}',
			'',
			'function getClassLookupLongname(doclet) {',
			'\tif (!doclet) {',
			"\t\treturn ''",
			'\t}',
			'',
			'\tvar sourceKey = getDocletSourceKey(doclet)',
			"\tvar className = doclet.name || doclet.originalLongname || doclet.longname || ''",
			'',
			'\tif (!sourceKey) {',
			'\t\treturn className',
			'\t}',
			'',
			"\tvar sourceToken = sourceKey.replace(/[^a-zA-Z0-9]+/g, '_')",
			"\tvar classToken = className.replace(/[^a-zA-Z0-9]+/g, '_')",
			'',
			"\treturn ['class', sourceToken, classToken].join('_')",
			'}',
			'',
			'function getClassDoclet(doclet) {',
			'\tif (!doclet) {',
			'\t\treturn null',
			'\t}',
			'',
			"\tif (doclet.kind === 'class') {",
			'\t\treturn doclet',
			'\t}',
			'',
			'\tif (!doclet.memberof) {',
			'\t\treturn null',
			'\t}',
			'',
			"\tvar classDoclets = helper.find(data, {kind: 'class'}) || []",
			'\tvar docletSourceKey = getDocletSourceKey(doclet)',
			'',
			'\tclassDoclets = classDoclets.filter(function(classDoclet) {',
			'\t\treturn (',
			'\t\t\tclassDoclet.lookupLongname === doclet.memberof ||',
			'\t\t\tclassDoclet.longname === doclet.memberof ||',
			'\t\t\tclassDoclet.originalLongname === doclet.memberof ||',
			'\t\t\tclassDoclet.name === doclet.memberof',
			'\t\t)',
			'\t})',
			'',
			'\tif (docletSourceKey) {',
			'\t\tvar sourceMatches = classDoclets.filter(function(classDoclet) {',
			'\t\t\treturn getDocletSourceKey(classDoclet) === docletSourceKey',
			'\t\t})',
			'',
			'\t\tif (sourceMatches[0]) {',
			'\t\t\treturn sourceMatches[0]',
			'\t\t}',
			'\t}',
			'',
			'\treturn classDoclets[0] || null',
			'}',
			'',
			'function normalizeClassDoclets() {',
			'\tdata().each(function(doclet) {',
			"\t\tif (doclet.kind !== 'class') {",
			'\t\t\treturn',
			'\t\t}',
			'',
			'\t\tdoclet.originalLongname = doclet.originalLongname || doclet.longname',
			'\t\tdoclet.lookupLongname = doclet.lookupLongname || getClassLookupLongname(doclet)',
			'\t\tdoclet.longname = doclet.lookupLongname',
			'\t})',
			'',
			'\tdata().each(function(doclet) {',
			'\t\tif (!doclet.memberof) {',
			'\t\t\treturn',
			'\t\t}',
			'',
			'\t\tdoclet.originalMemberof = doclet.originalMemberof || doclet.memberof',
			'\t\tdoclet.originalLongname = doclet.originalLongname || doclet.longname',
			'',
			'\t\tvar classDoclet = getClassDoclet(doclet)',
			'',
			'\t\tif (!classDoclet) {',
			'\t\t\treturn',
			'\t\t}',
			'',
			'\t\tdoclet.memberof = classDoclet.lookupLongname || classDoclet.longname',
			'',
			'\t\tif (doclet.longname && doclet.originalMemberof && doclet.longname.indexOf(doclet.originalMemberof) === 0) {',
			'\t\t\tdoclet.longname = doclet.longname.replace(doclet.originalMemberof, doclet.memberof)',
			'\t\t}',
			'\t})',
			'}',
			'',
			'function getClassDocletFileName(doclet) {',
			'\tvar classDoclet = getClassDoclet(doclet)',
			'',
			'\tif (!classDoclet) {',
			"\t\treturn ''",
			'\t}',
			'',
			'\tvar cacheKey = classDoclet.longname || classDoclet.name',
			'',
			'\tif (!classFileNameCache.has(cacheKey)) {',
			'\t\tvar fileNameSegments = []',
			'',
			'\t\tif (classDoclet.category) {',
			'\t\t\tfileNameSegments.push(classDoclet.category)',
			'\t\t}',
			'',
			'\t\tif (classDoclet.subCategory) {',
			'\t\t\tfileNameSegments.push(classDoclet.subCategory)',
			'\t\t}',
			'',
			"\t\tfileNameSegments.push(classDoclet.name || classDoclet.longname || '')",
			'',
			"\t\tvar fileName = helper.getUniqueFilename(fileNameSegments.join('.'))",
			'\t\tclassFileNameCache.set(cacheKey, fileName)',
			'\t}',
			'',
			'\treturn classFileNameCache.get(cacheKey)',
			'}',
			'',
			'function createDocletLink(doclet) {',
			'\tif (!doclet) {',
			"\t\treturn ''",
			'\t}',
			'',
			'\tvar defaultUrl = helper.createLink(doclet)',
			'\tvar classFileName = getClassDocletFileName(doclet)',
			'',
			'\tif (!classFileName) {',
			'\t\treturn defaultUrl',
			'\t}',
			'',
			"\tif (doclet.kind === 'class') {",
			'\t\treturn classFileName',
			'\t}',
			'',
			'\treturn defaultUrl.replace(/^[^#]+/, classFileName)',
			'}',
			'',
			'function isPrimaryClassDoclet(doclet) {',
			'\tif (!doclet || doclet.kind !== "class") {',
			'\t\treturn false',
			'\t}',
			'',
			'\treturn !doclet.memberof && doclet.name === (doclet.originalLongname || doclet.name)',
			'}',
			'',
			'function getPrimaryClassDoclet(classDoclets) {',
			'\tif (!classDoclets || !classDoclets.length) {',
			'\t\treturn null',
			'\t}',
			'',
			'\tvar primaryClassDoclets = classDoclets.filter(isPrimaryClassDoclet)',
			'',
			'\treturn primaryClassDoclets[0] || classDoclets[0]',
			'}',
			'',
			'function findDocletsForClassPage(doclet, kind) {',
			'\tvar classDoclet = getPrimaryClassDoclet([doclet]) || getClassDoclet(doclet)',
			'',
			'\tif (!classDoclet) {',
			'\t\treturn []',
			'\t}',
			'',
			'\tvar classSourceKey = getDocletSourceKey(classDoclet)',
			'\tvar ownerNames = [classDoclet.longname, classDoclet.lookupLongname, classDoclet.originalLongname, classDoclet.name].filter(Boolean)',
			'',
			'\treturn data().get().filter(function(candidateDoclet) {',
			'\t\tif (!candidateDoclet || candidateDoclet.kind !== kind) {',
			'\t\t\treturn false',
			'\t\t}',
			'',
			'\t\tif (getDocletSourceKey(candidateDoclet) !== classSourceKey) {',
			'\t\t\treturn false',
			'\t\t}',
			'',
			'\t\treturn ownerNames.includes(candidateDoclet.memberof) || ownerNames.includes(candidateDoclet.originalMemberof)',
			'\t})',
			'}',
			'',
			'function createClassPageDoclet(doclet) {',
			'\tvar classDoclet = getPrimaryClassDoclet([doclet]) || doclet',
			'\tvar pageDoclet = doop(classDoclet)',
			'',
			'\tpageDoclet.pageMembers = findDocletsForClassPage(classDoclet, "member")',
			'\tpageDoclet.pageMethods = findDocletsForClassPage(classDoclet, "function")',
			'\tpageDoclet.pageTypedefs = findDocletsForClassPage(classDoclet, "typedef")',
			'\tpageDoclet.pageEvents = findDocletsForClassPage(classDoclet, "event")',
			'',
			'\treturn pageDoclet',
			'}'
		])
	},
	{
		label: 'hash links use custom doclet links',
		searchValue: '  url = helper.createLink(doclet)\n',
		replacementValue: '  url = createDocletLink(doclet)\n'
	},
	{
		label: 'class display names on doclets',
		searchValue: lines([
			"    doclet.attribs = ''",
			'',
			'    if (doclet.examples) {'
		]),
		replacementValue: lines([
			"    doclet.attribs = ''",
			'',
			"    if (doclet.kind === 'class') {",
			'      doclet.displayName = getClassDocletName(doclet)',
			'    }',
			'',
			'    if (doclet.examples) {'
		])
	},
	{
		label: 'remove namespaces from group nav',
		searchValue:
			"  nav += buildMemberNav(members.namespaces || [], 'Namespaces', seen, linkto)\n",
		replacementValue: ''
	},
	{
		label: 'class page titles use display names',
		searchValue:
			"      generate(myClasses[0].name, 'Class', myClasses, helper.longnameToUrl[longname])\n",
		replacementValue:
			"      generate(getClassDocletName(myClasses[0]), 'Class', myClasses, helper.longnameToUrl[longname])\n"
	},
	{
		label: 'class page generation uses page doclet',
		searchValue:
			"      generate(getClassDocletName(myClasses[0]), 'Class', myClasses, helper.longnameToUrl[longname])\n",
		replacementValue:
			"      var primaryClassDoclet = getPrimaryClassDoclet(myClasses)\n      generate(getClassDocletName(primaryClassDoclet), 'Class', [createClassPageDoclet(primaryClassDoclet)], helper.longnameToUrl[longname])\n"
	},
	{
		label: 'doclet registration upgrade uses normalized links',
		searchValue: lines([
			'  data().each(function(doclet) {',
			'    var docletPath',
			'    var url = createDocletLink(doclet)',
			'',
			'    helper.registerLink(doclet.longname, url)'
		]),
		replacementValue: lines([
			'  normalizeClassDoclets()',
			'  data = taffy(data().get())',
			'',
			'  data().each(function(doclet) {',
			'    var docletPath',
			'    var url = createDocletLink(doclet)',
			'',
			'    helper.registerLink(doclet.longname, url)'
		])
	},
	{
		label: 'doclet registration uses custom links',
		alreadyAppliedValues: ['  normalizeClassDoclets()'],
		searchValue: lines([
			'  data().each(function(doclet) {',
			'    var docletPath',
			'    var url = helper.createLink(doclet)',
			'',
			'    helper.registerLink(doclet.longname, url)'
		]),
		replacementValue: lines([
			'  normalizeClassDoclets()',
			'  data = taffy(data().get())',
			'',
			'  data().each(function(doclet) {',
			'    var docletPath',
			'    var url = createDocletLink(doclet)',
			'',
			'    helper.registerLink(doclet.longname, url)'
		])
	}
];

const patchedFiles = [];

if (patchFile(templatePath, templateReplacements)) {
	patchedFiles.push(path.relative(process.cwd(), templatePath));
}

if (patchFile(publishPath, publishReplacements)) {
	patchedFiles.push(path.relative(process.cwd(), publishPath));
}

if (!patchedFiles.length) {
	console.log('[better-docs-patch] Already applied.');
	// eslint-disable-next-line n/no-process-exit
	process.exit(0);
}

console.log(
	`[better-docs-patch] Applied Better Docs patch to: ${patchedFiles.join(', ')}`
);
