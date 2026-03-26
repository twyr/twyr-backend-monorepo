/* eslint-disable security/detect-object-injection */
/**
 * Seed locale_master (base locale table) with CLDR locales
 *
 * Sources:
 * - cldr-localenames-full
 * - cldr-core
 * - cldr-misc-full
 *
 * Note: This seeds only base locale data (code, language_code, country_code, is_rtl, is_enabled).
 * Localized display names (language_name, country_name) are seeded separately in
 * 004-locales-by-locale-seed.cjs.
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

// CLDR data
const languageNames = require('cldr-localenames-full/main/en/languages.json');
const territoryNames = require('cldr-localenames-full/main/en/territories.json');
const likelySubtags = require('cldr-core/supplemental/likelySubtags.json');

exports.seed = async function (knex) {
	console.log('Processing 002-locales-seed.cjs');
	const now = knex.fn.now();

	const languages = languageNames.main.en.localeDisplayNames.languages;
	const territories = territoryNames.main.en.localeDisplayNames.territories;
	const subtags = likelySubtags.supplemental.likelySubtags;

	const territoryToCountryISOCodeMap = new Map();

	// CLDR territory (ISO 3166-1 alpha-2) to ISO code (ISO 3166-1 alpha-3) mapping
	territoryToCountryISOCodeMap.set('AD', 'AND');
	territoryToCountryISOCodeMap.set('AE', 'ARE');
	territoryToCountryISOCodeMap.set('AF', 'AFG');
	territoryToCountryISOCodeMap.set('AG', 'ATG');
	territoryToCountryISOCodeMap.set('AI', 'AIA');
	territoryToCountryISOCodeMap.set('AL', 'ALB');
	territoryToCountryISOCodeMap.set('AM', 'ARM');
	territoryToCountryISOCodeMap.set('AO', 'AGO');
	territoryToCountryISOCodeMap.set('AQ', 'ATA');
	territoryToCountryISOCodeMap.set('AR', 'ARG');
	territoryToCountryISOCodeMap.set('AS', 'ASM');
	territoryToCountryISOCodeMap.set('AT', 'AUT');
	territoryToCountryISOCodeMap.set('AU', 'AUS');
	territoryToCountryISOCodeMap.set('AW', 'ABW');
	territoryToCountryISOCodeMap.set('AX', 'ALA');
	territoryToCountryISOCodeMap.set('AZ', 'AZE');
	territoryToCountryISOCodeMap.set('BA', 'BIH');
	territoryToCountryISOCodeMap.set('BB', 'BRB');
	territoryToCountryISOCodeMap.set('BD', 'BGD');
	territoryToCountryISOCodeMap.set('BE', 'BEL');
	territoryToCountryISOCodeMap.set('BF', 'BFA');
	territoryToCountryISOCodeMap.set('BG', 'BGR');
	territoryToCountryISOCodeMap.set('BH', 'BHR');
	territoryToCountryISOCodeMap.set('BI', 'BDI');
	territoryToCountryISOCodeMap.set('BJ', 'BEN');
	territoryToCountryISOCodeMap.set('BL', 'BLM');
	territoryToCountryISOCodeMap.set('BM', 'BMU');
	territoryToCountryISOCodeMap.set('BN', 'BRN');
	territoryToCountryISOCodeMap.set('BO', 'BOL');
	territoryToCountryISOCodeMap.set('BQ', 'BES');
	territoryToCountryISOCodeMap.set('BR', 'BRA');
	territoryToCountryISOCodeMap.set('BS', 'BHS');
	territoryToCountryISOCodeMap.set('BT', 'BTN');
	territoryToCountryISOCodeMap.set('BV', 'BVT');
	territoryToCountryISOCodeMap.set('BW', 'BWA');
	territoryToCountryISOCodeMap.set('BY', 'BLR');
	territoryToCountryISOCodeMap.set('BZ', 'BLZ');
	territoryToCountryISOCodeMap.set('CA', 'CAN');
	territoryToCountryISOCodeMap.set('CC', 'CCK');
	territoryToCountryISOCodeMap.set('CD', 'ZAR');
	territoryToCountryISOCodeMap.set('CF', 'CAF');
	territoryToCountryISOCodeMap.set('CG', 'COG');
	territoryToCountryISOCodeMap.set('CH', 'CHE');
	territoryToCountryISOCodeMap.set('CI', 'CIV');
	territoryToCountryISOCodeMap.set('CK', 'COK');
	territoryToCountryISOCodeMap.set('CL', 'CHL');
	territoryToCountryISOCodeMap.set('CM', 'CMR');
	territoryToCountryISOCodeMap.set('CN', 'CHN');
	territoryToCountryISOCodeMap.set('CO', 'COL');
	territoryToCountryISOCodeMap.set('CR', 'CRI');
	territoryToCountryISOCodeMap.set('CU', 'CUB');
	territoryToCountryISOCodeMap.set('CV', 'CPV');
	territoryToCountryISOCodeMap.set('CW', 'CUW');
	territoryToCountryISOCodeMap.set('CX', 'CXR');
	territoryToCountryISOCodeMap.set('CY', 'CYP');
	territoryToCountryISOCodeMap.set('CZ', 'CZE');
	territoryToCountryISOCodeMap.set('DE', 'DEU');
	territoryToCountryISOCodeMap.set('DJ', 'DJI');
	territoryToCountryISOCodeMap.set('DK', 'DNK');
	territoryToCountryISOCodeMap.set('DM', 'DMA');
	territoryToCountryISOCodeMap.set('DO', 'DOM');
	territoryToCountryISOCodeMap.set('DZ', 'DZA');
	territoryToCountryISOCodeMap.set('EC', 'ECU');
	territoryToCountryISOCodeMap.set('EE', 'EST');
	territoryToCountryISOCodeMap.set('EG', 'EGY');
	territoryToCountryISOCodeMap.set('EH', 'ESH');
	territoryToCountryISOCodeMap.set('ER', 'ERI');
	territoryToCountryISOCodeMap.set('ES', 'ESP');
	territoryToCountryISOCodeMap.set('ET', 'ETH');
	territoryToCountryISOCodeMap.set('FI', 'FIN');
	territoryToCountryISOCodeMap.set('FJ', 'FJI');
	territoryToCountryISOCodeMap.set('FK', 'FLK');
	territoryToCountryISOCodeMap.set('FM', 'FSM');
	territoryToCountryISOCodeMap.set('FO', 'FRO');
	territoryToCountryISOCodeMap.set('FR', 'FRA');
	territoryToCountryISOCodeMap.set('GA', 'GAB');
	territoryToCountryISOCodeMap.set('GB', 'GBR');
	territoryToCountryISOCodeMap.set('GD', 'GRD');
	territoryToCountryISOCodeMap.set('GE', 'GEO');
	territoryToCountryISOCodeMap.set('GF', 'GUF');
	territoryToCountryISOCodeMap.set('GG', 'GGY');
	territoryToCountryISOCodeMap.set('GH', 'GHA');
	territoryToCountryISOCodeMap.set('GI', 'GIB');
	territoryToCountryISOCodeMap.set('GL', 'GRL');
	territoryToCountryISOCodeMap.set('GM', 'GMB');
	territoryToCountryISOCodeMap.set('GN', 'GIN');
	territoryToCountryISOCodeMap.set('GP', 'GLP');
	territoryToCountryISOCodeMap.set('GQ', 'GNQ');
	territoryToCountryISOCodeMap.set('GR', 'GRC');
	territoryToCountryISOCodeMap.set('GS', 'SGS');
	territoryToCountryISOCodeMap.set('GT', 'GTM');
	territoryToCountryISOCodeMap.set('GU', 'GUM');
	territoryToCountryISOCodeMap.set('GW', 'GNB');
	territoryToCountryISOCodeMap.set('GY', 'GUY');
	territoryToCountryISOCodeMap.set('HK', 'HKG');
	territoryToCountryISOCodeMap.set('HM', 'HMD');
	territoryToCountryISOCodeMap.set('HN', 'HND');
	territoryToCountryISOCodeMap.set('HR', 'HRV');
	territoryToCountryISOCodeMap.set('HT', 'HTI');
	territoryToCountryISOCodeMap.set('HU', 'HUN');
	territoryToCountryISOCodeMap.set('ID', 'IDN');
	territoryToCountryISOCodeMap.set('IE', 'IRL');
	territoryToCountryISOCodeMap.set('IL', 'ISR');
	territoryToCountryISOCodeMap.set('IM', 'IMN');
	territoryToCountryISOCodeMap.set('IN', 'IND');
	territoryToCountryISOCodeMap.set('IO', 'IOT');
	territoryToCountryISOCodeMap.set('IQ', 'IRQ');
	territoryToCountryISOCodeMap.set('IR', 'IRN');
	territoryToCountryISOCodeMap.set('IS', 'ISL');
	territoryToCountryISOCodeMap.set('IT', 'ITA');
	territoryToCountryISOCodeMap.set('JE', 'JEY');
	territoryToCountryISOCodeMap.set('JM', 'JAM');
	territoryToCountryISOCodeMap.set('JO', 'JOR');
	territoryToCountryISOCodeMap.set('JP', 'JPN');
	territoryToCountryISOCodeMap.set('KE', 'KEN');
	territoryToCountryISOCodeMap.set('KG', 'KGZ');
	territoryToCountryISOCodeMap.set('KH', 'KHM');
	territoryToCountryISOCodeMap.set('KI', 'KIR');
	territoryToCountryISOCodeMap.set('KM', 'COM');
	territoryToCountryISOCodeMap.set('KN', 'KNA');
	territoryToCountryISOCodeMap.set('KP', 'PRK');
	territoryToCountryISOCodeMap.set('KR', 'KOR');
	territoryToCountryISOCodeMap.set('KW', 'KWT');
	territoryToCountryISOCodeMap.set('KY', 'CYM');
	territoryToCountryISOCodeMap.set('KZ', 'KAZ');
	territoryToCountryISOCodeMap.set('LA', 'LAO');
	territoryToCountryISOCodeMap.set('LB', 'LBN');
	territoryToCountryISOCodeMap.set('LC', 'LCA');
	territoryToCountryISOCodeMap.set('LI', 'LIE');
	territoryToCountryISOCodeMap.set('LK', 'LKA');
	territoryToCountryISOCodeMap.set('LR', 'LBR');
	territoryToCountryISOCodeMap.set('LS', 'LSO');
	territoryToCountryISOCodeMap.set('LT', 'LTU');
	territoryToCountryISOCodeMap.set('LU', 'LUX');
	territoryToCountryISOCodeMap.set('LV', 'LVA');
	territoryToCountryISOCodeMap.set('LY', 'LBY');
	territoryToCountryISOCodeMap.set('MA', 'MAR');
	territoryToCountryISOCodeMap.set('MC', 'MCO');
	territoryToCountryISOCodeMap.set('MD', 'MDA');
	territoryToCountryISOCodeMap.set('ME', 'MNE');
	territoryToCountryISOCodeMap.set('MF', 'MAF');
	territoryToCountryISOCodeMap.set('MG', 'MDG');
	territoryToCountryISOCodeMap.set('MH', 'MHL');
	territoryToCountryISOCodeMap.set('MK', 'MKD');
	territoryToCountryISOCodeMap.set('ML', 'MLI');
	territoryToCountryISOCodeMap.set('MM', 'MMR');
	territoryToCountryISOCodeMap.set('MN', 'MNG');
	territoryToCountryISOCodeMap.set('MO', 'MAC');
	territoryToCountryISOCodeMap.set('MP', 'MNP');
	territoryToCountryISOCodeMap.set('MQ', 'MTQ');
	territoryToCountryISOCodeMap.set('MR', 'MRT');
	territoryToCountryISOCodeMap.set('MS', 'MSR');
	territoryToCountryISOCodeMap.set('MT', 'MLT');
	territoryToCountryISOCodeMap.set('MU', 'MUS');
	territoryToCountryISOCodeMap.set('MV', 'MDV');
	territoryToCountryISOCodeMap.set('MW', 'MWI');
	territoryToCountryISOCodeMap.set('MX', 'MEX');
	territoryToCountryISOCodeMap.set('MY', 'MYS');
	territoryToCountryISOCodeMap.set('MZ', 'MOZ');
	territoryToCountryISOCodeMap.set('NA', 'NAM');
	territoryToCountryISOCodeMap.set('NC', 'NCL');
	territoryToCountryISOCodeMap.set('NE', 'NER');
	territoryToCountryISOCodeMap.set('NF', 'NFK');
	territoryToCountryISOCodeMap.set('NG', 'NGA');
	territoryToCountryISOCodeMap.set('NI', 'NIC');
	territoryToCountryISOCodeMap.set('NL', 'NLD');
	territoryToCountryISOCodeMap.set('NO', 'NOR');
	territoryToCountryISOCodeMap.set('NP', 'NPL');
	territoryToCountryISOCodeMap.set('NR', 'NRU');
	territoryToCountryISOCodeMap.set('NU', 'NIU');
	territoryToCountryISOCodeMap.set('NZ', 'NZL');
	territoryToCountryISOCodeMap.set('OM', 'OMN');
	territoryToCountryISOCodeMap.set('PA', 'PAN');
	territoryToCountryISOCodeMap.set('PE', 'PER');
	territoryToCountryISOCodeMap.set('PF', 'PYF');
	territoryToCountryISOCodeMap.set('PG', 'PNG');
	territoryToCountryISOCodeMap.set('PH', 'PHL');
	territoryToCountryISOCodeMap.set('PK', 'PAK');
	territoryToCountryISOCodeMap.set('PL', 'POL');
	territoryToCountryISOCodeMap.set('PM', 'SPM');
	territoryToCountryISOCodeMap.set('PN', 'PCN');
	territoryToCountryISOCodeMap.set('PR', 'PRI');
	territoryToCountryISOCodeMap.set('PS', 'PSE');
	territoryToCountryISOCodeMap.set('PT', 'PRT');
	territoryToCountryISOCodeMap.set('PW', 'PLW');
	territoryToCountryISOCodeMap.set('PY', 'PRY');
	territoryToCountryISOCodeMap.set('QA', 'QAT');
	territoryToCountryISOCodeMap.set('RE', 'REU');
	territoryToCountryISOCodeMap.set('RO', 'ROU');
	territoryToCountryISOCodeMap.set('RS', 'SRB');
	territoryToCountryISOCodeMap.set('RU', 'RUS');
	territoryToCountryISOCodeMap.set('RW', 'RWA');
	territoryToCountryISOCodeMap.set('SA', 'SAU');
	territoryToCountryISOCodeMap.set('SB', 'SLB');
	territoryToCountryISOCodeMap.set('SC', 'SYC');
	territoryToCountryISOCodeMap.set('SD', 'SDN');
	territoryToCountryISOCodeMap.set('SE', 'SWE');
	territoryToCountryISOCodeMap.set('SG', 'SGP');
	territoryToCountryISOCodeMap.set('SH', 'SHN');
	territoryToCountryISOCodeMap.set('SI', 'SVN');
	territoryToCountryISOCodeMap.set('SJ', 'SJM');
	territoryToCountryISOCodeMap.set('SK', 'SVK');
	territoryToCountryISOCodeMap.set('SL', 'SLE');
	territoryToCountryISOCodeMap.set('SM', 'SMR');
	territoryToCountryISOCodeMap.set('SN', 'SEN');
	territoryToCountryISOCodeMap.set('SO', 'SOM');
	territoryToCountryISOCodeMap.set('SR', 'SUR');
	territoryToCountryISOCodeMap.set('SS', 'SSD');
	territoryToCountryISOCodeMap.set('ST', 'STP');
	territoryToCountryISOCodeMap.set('SV', 'SLV');
	territoryToCountryISOCodeMap.set('SX', 'SXM');
	territoryToCountryISOCodeMap.set('SY', 'SYR');
	territoryToCountryISOCodeMap.set('SZ', 'SWZ');
	territoryToCountryISOCodeMap.set('TC', 'TCA');
	territoryToCountryISOCodeMap.set('TD', 'TCD');
	territoryToCountryISOCodeMap.set('TF', 'ATF');
	territoryToCountryISOCodeMap.set('TG', 'TGO');
	territoryToCountryISOCodeMap.set('TH', 'THA');
	territoryToCountryISOCodeMap.set('TJ', 'TJK');
	territoryToCountryISOCodeMap.set('TK', 'TKL');
	territoryToCountryISOCodeMap.set('TL', 'TLS');
	territoryToCountryISOCodeMap.set('TM', 'TKM');
	territoryToCountryISOCodeMap.set('TN', 'TUN');
	territoryToCountryISOCodeMap.set('TO', 'TON');
	territoryToCountryISOCodeMap.set('TR', 'TUR');
	territoryToCountryISOCodeMap.set('TT', 'TTO');
	territoryToCountryISOCodeMap.set('TV', 'TUV');
	territoryToCountryISOCodeMap.set('TW', 'TWN');
	territoryToCountryISOCodeMap.set('TZ', 'TZA');
	territoryToCountryISOCodeMap.set('UA', 'UKR');
	territoryToCountryISOCodeMap.set('UG', 'UGA');
	territoryToCountryISOCodeMap.set('UM', 'UMI');
	territoryToCountryISOCodeMap.set('US', 'USA');
	territoryToCountryISOCodeMap.set('UY', 'URY');
	territoryToCountryISOCodeMap.set('UZ', 'UZB');
	territoryToCountryISOCodeMap.set('VA', 'VAT');
	territoryToCountryISOCodeMap.set('VC', 'VCT');
	territoryToCountryISOCodeMap.set('VE', 'VEN');
	territoryToCountryISOCodeMap.set('VG', 'VGB');
	territoryToCountryISOCodeMap.set('VI', 'VIR');
	territoryToCountryISOCodeMap.set('VN', 'VNM');
	territoryToCountryISOCodeMap.set('VU', 'VUT');
	territoryToCountryISOCodeMap.set('WF', 'WLF');
	territoryToCountryISOCodeMap.set('WS', 'WSM');
	territoryToCountryISOCodeMap.set('YE', 'YEM');
	territoryToCountryISOCodeMap.set('YT', 'MYT');
	territoryToCountryISOCodeMap.set('ZA', 'ZAF');
	territoryToCountryISOCodeMap.set('ZM', 'ZMB');
	territoryToCountryISOCodeMap.set('ZW', 'ZWE');

	// const territoryToCountryISONameMap = new Map();
	// territoryToCountryISONameMap.set(
	// 	'Bosnia & Herzegovina',
	// 	'Bosnia and Herzegovina'
	// );
	// territoryToCountryISONameMap.set('Côte d’Ivoire', "Cote d'Ivoire");
	// territoryToCountryISONameMap.set('Czechia', 'Czech Republic');
	// territoryToCountryISONameMap.set('Egypt', 'Egypt, Arab Rep.');
	// territoryToCountryISONameMap.set('Ethiopia', 'Ethiopia (includes Eritrea)');
	// territoryToCountryISONameMap.set('Faroe Islands', 'Faeroe Islands');
	// territoryToCountryISONameMap.set('Gambia', 'Gambia, The');
	// territoryToCountryISONameMap.set('Hong Kong SAR China', 'Hong Kong, China');
	// territoryToCountryISONameMap.set('Iran', 'Iran, Islamic Rep.');
	// territoryToCountryISONameMap.set('Kyrgyzstan', 'Kyrgyz Republic');
	// territoryToCountryISONameMap.set('Laos', 'Lao PDR');
	// territoryToCountryISONameMap.set('Macao SAR China', 'Macao');
	// territoryToCountryISONameMap.set('Micronesia', 'Micronesia, Fed. Sts.');
	// territoryToCountryISONameMap.set(
	// 	'Montenegro',
	// 	'Yugoslavia, FR (Serbia/Montenegro)'
	// );
	// territoryToCountryISONameMap.set('Myanmar (Burma)', 'Myanmar');
	// territoryToCountryISONameMap.set('North Korea', 'Korea, Dem. Rep.');
	// territoryToCountryISONameMap.set('North Macedonia', 'Macedonia, FYR');
	// territoryToCountryISONameMap.set('Russia', 'Russian Federation');
	// territoryToCountryISONameMap.set(
	// 	'Serbia',
	// 	'Yugoslavia, FR (Serbia/Montenegro)'
	// );
	// territoryToCountryISONameMap.set('Slovakia', 'Slovak Republic');
	// territoryToCountryISONameMap.set('South Korea', 'Korea, Rep.');
	// territoryToCountryISONameMap.set('South Sudan', 'Sudan');
	// territoryToCountryISONameMap.set('Syria', 'Syrian Arab Republic');
	// territoryToCountryISONameMap.set('Türkiye', 'Turkey');
	// territoryToCountryISONameMap.set('Vatican City', 'Holy See');
	// territoryToCountryISONameMap.set('Yemen', 'Yemen, Rep.');

	/**
	 * Build locales from likelySubtags
	 * Example:
	 * en → en-Latn-US
	 * hi → hi-Deva-IN
	 *
	 * @category REST API Server/Data
	 * @subcategory Seed Data
	 */
	const rows = [];
	// eslint-disable-next-line no-unused-vars
	for (const [tag, expanded] of Object.entries(subtags)) {
		const parts = expanded?.split?.('-');
		if (parts.length < 3) continue;

		const [language, , territory] = parts;
		if (!languages[language] || !territories[territory]) continue;

		const localeCode = `${language}-${territory}`;

		let characterOrder = undefined;
		try {
			characterOrder = require(
				`cldr-misc-full/main/${localeCode}/layout.json`
			);
		} catch (error) {
			error;
		}

		if (!characterOrder) {
			// Fallback to language only layout if locale specific not found
			try {
				characterOrder = require(
					`cldr-misc-full/main/${language}/layout.json`
				);
			} catch {}
		}

		characterOrder =
			characterOrder?.main?.[localeCode]?.layout?.orientation
				?.characterOrder;

		const countryCode = territoryToCountryISOCodeMap?.get?.(territory);
		if (!countryCode) {
			console.log(`No country code found for territory: ${territory}`);
			continue;
		}

		rows.push({
			code: localeCode,
			language_code: language,
			country_code: countryCode,
			is_rtl: characterOrder === 'right-to-left',
			is_enabled: false,
			created_at: now,
			updated_at: now
			// localized names (language_name, country_name) are seeded separately in 004-locales-by-locale-seed.cjs
			// _language_name: languages[language],
			// _country_name: territories[territory]
		});
	}

	/**
	 * Deduplicate locales (CLDR can produce repeats)
	 *
	 * @category REST API Server/Data
	 * @subcategory Seed Data
	 */
	const uniqueRows = Object.values(
		rows.reduce((acc, row) => {
			acc[row.code] = row;
			return acc;
		}, {})
	);

	await knex('locale_master')
		.insert(uniqueRows)
		.onConflict('code')
		.merge({
			language_code: knex.raw('EXCLUDED.language_code'),
			is_rtl: knex.raw('EXCLUDED.is_rtl'),
			is_enabled: knex.raw('EXCLUDED.is_enabled')
		});

	await knex('locale_master')
		.whereIn('code', [
			'en-IN',
			'hi-IN',
			'kn-IN',
			'ml-IN',
			'mr-IN',
			'ta-IN',
			'te-IN'
		])
		.update({
			is_enabled: true,
			updated_at: now
		});
};
