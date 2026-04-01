/* eslint-disable security/detect-object-injection */
/**
 * Static seed for country_code_by_locale with en-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * country names for the en-IN locale.
			country_name: 'Myanmar'
 * This seed depends on:
 * - 001-country-codes-seed.cjs (populates country_code_master)
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 003-country-codes-by-locale-seed-en-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM country_code_by_locale WHERE locale_id = 'en-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for en-IN locale
	const rows = [
		{ iso_code: 'AND', locale_id: 'en-IN', country_name: 'Andorra' },
		{
			iso_code: 'ARE',
			locale_id: 'en-IN',
			country_name: 'United Arab Emirates'
		},
		{ iso_code: 'AFG', locale_id: 'en-IN', country_name: 'Afghanistan' },
		{
			iso_code: 'ATG',
			locale_id: 'en-IN',
			country_name: 'Antigua & Barbuda'
		},
		{ iso_code: 'AIA', locale_id: 'en-IN', country_name: 'Anguilla' },
		{ iso_code: 'ALB', locale_id: 'en-IN', country_name: 'Albania' },
		{ iso_code: 'ARM', locale_id: 'en-IN', country_name: 'Armenia' },
		{ iso_code: 'AGO', locale_id: 'en-IN', country_name: 'Angola' },
		{ iso_code: 'ATA', locale_id: 'en-IN', country_name: 'Antarctica' },
		{ iso_code: 'ARG', locale_id: 'en-IN', country_name: 'Argentina' },
		{ iso_code: 'ASM', locale_id: 'en-IN', country_name: 'American Samoa' },
		{ iso_code: 'AUT', locale_id: 'en-IN', country_name: 'Austria' },
		{ iso_code: 'AUS', locale_id: 'en-IN', country_name: 'Australia' },
		{ iso_code: 'ABW', locale_id: 'en-IN', country_name: 'Aruba' },
		{ iso_code: 'ALA', locale_id: 'en-IN', country_name: 'Åland Islands' },
		{ iso_code: 'AZE', locale_id: 'en-IN', country_name: 'Azerbaijan' },
		{
			iso_code: 'BIH',
			locale_id: 'en-IN',
			country_name: 'Bosnia & Herzegovina'
		},
		{ iso_code: 'BRB', locale_id: 'en-IN', country_name: 'Barbados' },
		{ iso_code: 'BGD', locale_id: 'en-IN', country_name: 'Bangladesh' },
		{ iso_code: 'BEL', locale_id: 'en-IN', country_name: 'Belgium' },
		{ iso_code: 'BFA', locale_id: 'en-IN', country_name: 'Burkina Faso' },
		{ iso_code: 'BGR', locale_id: 'en-IN', country_name: 'Bulgaria' },
		{ iso_code: 'BHR', locale_id: 'en-IN', country_name: 'Bahrain' },
		{ iso_code: 'BDI', locale_id: 'en-IN', country_name: 'Burundi' },
		{ iso_code: 'BEN', locale_id: 'en-IN', country_name: 'Benin' },
		{ iso_code: 'BLM', locale_id: 'en-IN', country_name: 'St. Barthélemy' },
		{ iso_code: 'BMU', locale_id: 'en-IN', country_name: 'Bermuda' },
		{ iso_code: 'BRN', locale_id: 'en-IN', country_name: 'Brunei' },
		{ iso_code: 'BOL', locale_id: 'en-IN', country_name: 'Bolivia' },
		{
			iso_code: 'BES',
			locale_id: 'en-IN',
			country_name: 'Caribbean Netherlands'
		},
		{ iso_code: 'BRA', locale_id: 'en-IN', country_name: 'Brazil' },
		{ iso_code: 'BHS', locale_id: 'en-IN', country_name: 'Bahamas' },
		{ iso_code: 'BTN', locale_id: 'en-IN', country_name: 'Bhutan' },
		{ iso_code: 'BVT', locale_id: 'en-IN', country_name: 'Bouvet Island' },
		{ iso_code: 'BWA', locale_id: 'en-IN', country_name: 'Botswana' },
		{ iso_code: 'BLR', locale_id: 'en-IN', country_name: 'Belarus' },
		{ iso_code: 'BLZ', locale_id: 'en-IN', country_name: 'Belize' },
		{ iso_code: 'CAN', locale_id: 'en-IN', country_name: 'Canada' },
		{
			iso_code: 'CCK',
			locale_id: 'en-IN',
			country_name: 'Cocos (Keeling) Islands'
		},
		{
			iso_code: 'ZAR',
			locale_id: 'en-IN',
			country_name: 'Congo - Kinshasa'
		},
		{
			iso_code: 'CAF',
			locale_id: 'en-IN',
			country_name: 'Central African Republic'
		},
		{
			iso_code: 'COG',
			locale_id: 'en-IN',
			country_name: 'Congo - Brazzaville'
		},
		{ iso_code: 'CHE', locale_id: 'en-IN', country_name: 'Switzerland' },
		{ iso_code: 'CIV', locale_id: 'en-IN', country_name: "Côte d'Ivoire" },
		{ iso_code: 'COK', locale_id: 'en-IN', country_name: 'Cook Islands' },
		{ iso_code: 'CHL', locale_id: 'en-IN', country_name: 'Chile' },
		{ iso_code: 'CMR', locale_id: 'en-IN', country_name: 'Cameroon' },
		{ iso_code: 'CHN', locale_id: 'en-IN', country_name: 'China' },
		{ iso_code: 'COL', locale_id: 'en-IN', country_name: 'Colombia' },
		{ iso_code: 'CRI', locale_id: 'en-IN', country_name: 'Costa Rica' },
		{ iso_code: 'CUB', locale_id: 'en-IN', country_name: 'Cuba' },
		{ iso_code: 'CPV', locale_id: 'en-IN', country_name: 'Cape Verde' },
		{ iso_code: 'CUW', locale_id: 'en-IN', country_name: 'Curaçao' },
		{
			iso_code: 'CXR',
			locale_id: 'en-IN',
			country_name: 'Christmas Island'
		},
		{ iso_code: 'CYP', locale_id: 'en-IN', country_name: 'Cyprus' },
		{ iso_code: 'CZE', locale_id: 'en-IN', country_name: 'Czechia' },
		{ iso_code: 'DEU', locale_id: 'en-IN', country_name: 'Germany' },
		{ iso_code: 'DJI', locale_id: 'en-IN', country_name: 'Djibouti' },
		{ iso_code: 'DNK', locale_id: 'en-IN', country_name: 'Denmark' },
		{ iso_code: 'DMA', locale_id: 'en-IN', country_name: 'Dominica' },
		{
			iso_code: 'DOM',
			locale_id: 'en-IN',
			country_name: 'Dominican Republic'
		},
		{ iso_code: 'DZA', locale_id: 'en-IN', country_name: 'Algeria' },
		{ iso_code: 'ECU', locale_id: 'en-IN', country_name: 'Ecuador' },
		{ iso_code: 'EST', locale_id: 'en-IN', country_name: 'Estonia' },
		{ iso_code: 'EGY', locale_id: 'en-IN', country_name: 'Egypt' },
		{ iso_code: 'ESH', locale_id: 'en-IN', country_name: 'Western Sahara' },
		{ iso_code: 'ERI', locale_id: 'en-IN', country_name: 'Eritrea' },
		{ iso_code: 'ESP', locale_id: 'en-IN', country_name: 'Spain' },
		{ iso_code: 'ETH', locale_id: 'en-IN', country_name: 'Ethiopia' },
		{ iso_code: 'FIN', locale_id: 'en-IN', country_name: 'Finland' },
		{ iso_code: 'FJI', locale_id: 'en-IN', country_name: 'Fiji' },
		{
			iso_code: 'FLK',
			locale_id: 'en-IN',
			country_name: 'Falkland Islands'
		},
		{ iso_code: 'FSM', locale_id: 'en-IN', country_name: 'Micronesia' },
		{ iso_code: 'FRO', locale_id: 'en-IN', country_name: 'Faroe Islands' },
		{ iso_code: 'FRA', locale_id: 'en-IN', country_name: 'France' },
		{ iso_code: 'GAB', locale_id: 'en-IN', country_name: 'Gabon' },
		{ iso_code: 'GBR', locale_id: 'en-IN', country_name: 'United Kingdom' },
		{ iso_code: 'GRD', locale_id: 'en-IN', country_name: 'Grenada' },
		{ iso_code: 'GEO', locale_id: 'en-IN', country_name: 'Georgia' },
		{ iso_code: 'GUF', locale_id: 'en-IN', country_name: 'French Guiana' },
		{ iso_code: 'GGY', locale_id: 'en-IN', country_name: 'Guernsey' },
		{ iso_code: 'GHA', locale_id: 'en-IN', country_name: 'Ghana' },
		{ iso_code: 'GIB', locale_id: 'en-IN', country_name: 'Gibraltar' },
		{ iso_code: 'GRL', locale_id: 'en-IN', country_name: 'Greenland' },
		{ iso_code: 'GMB', locale_id: 'en-IN', country_name: 'Gambia' },
		{ iso_code: 'GIN', locale_id: 'en-IN', country_name: 'Guinea' },
		{ iso_code: 'GLP', locale_id: 'en-IN', country_name: 'Guadeloupe' },
		{
			iso_code: 'GNQ',
			locale_id: 'en-IN',
			country_name: 'Equatorial Guinea'
		},
		{ iso_code: 'GRC', locale_id: 'en-IN', country_name: 'Greece' },
		{
			iso_code: 'SGS',
			locale_id: 'en-IN',
			country_name: 'South Georgia & South Sandwich Islands'
		},
		{ iso_code: 'GTM', locale_id: 'en-IN', country_name: 'Guatemala' },
		{ iso_code: 'GUM', locale_id: 'en-IN', country_name: 'Guam' },
		{ iso_code: 'GNB', locale_id: 'en-IN', country_name: 'Guinea-Bissau' },
		{ iso_code: 'GUY', locale_id: 'en-IN', country_name: 'Guyana' },
		{
			iso_code: 'HKG',
			locale_id: 'en-IN',
			country_name: 'Hong Kong SAR China'
		},
		{
			iso_code: 'HMD',
			locale_id: 'en-IN',
			country_name: 'Heard & McDonald Islands'
		},
		{ iso_code: 'HND', locale_id: 'en-IN', country_name: 'Honduras' },
		{ iso_code: 'HRV', locale_id: 'en-IN', country_name: 'Croatia' },
		{ iso_code: 'HTI', locale_id: 'en-IN', country_name: 'Haiti' },
		{ iso_code: 'HUN', locale_id: 'en-IN', country_name: 'Hungary' },
		{ iso_code: 'IDN', locale_id: 'en-IN', country_name: 'Indonesia' },
		{ iso_code: 'IRL', locale_id: 'en-IN', country_name: 'Ireland' },
		{ iso_code: 'ISR', locale_id: 'en-IN', country_name: 'Israel' },
		{ iso_code: 'IMN', locale_id: 'en-IN', country_name: 'Isle of Man' },
		{ iso_code: 'IND', locale_id: 'en-IN', country_name: 'India' },
		{
			iso_code: 'IOT',
			locale_id: 'en-IN',
			country_name: 'British Indian Ocean Territory'
		},
		{ iso_code: 'IRQ', locale_id: 'en-IN', country_name: 'Iraq' },
		{ iso_code: 'IRN', locale_id: 'en-IN', country_name: 'Iran' },
		{ iso_code: 'ISL', locale_id: 'en-IN', country_name: 'Iceland' },
		{ iso_code: 'ITA', locale_id: 'en-IN', country_name: 'Italy' },
		{ iso_code: 'JEY', locale_id: 'en-IN', country_name: 'Jersey' },
		{ iso_code: 'JAM', locale_id: 'en-IN', country_name: 'Jamaica' },
		{ iso_code: 'JOR', locale_id: 'en-IN', country_name: 'Jordan' },
		{ iso_code: 'JPN', locale_id: 'en-IN', country_name: 'Japan' },
		{ iso_code: 'KEN', locale_id: 'en-IN', country_name: 'Kenya' },
		{ iso_code: 'KGZ', locale_id: 'en-IN', country_name: 'Kyrgyzstan' },
		{ iso_code: 'KHM', locale_id: 'en-IN', country_name: 'Cambodia' },
		{ iso_code: 'KIR', locale_id: 'en-IN', country_name: 'Kiribati' },
		{ iso_code: 'COM', locale_id: 'en-IN', country_name: 'Comoros' },
		{
			iso_code: 'KNA',
			locale_id: 'en-IN',
			country_name: 'St. Kitts & Nevis'
		},
		{ iso_code: 'PRK', locale_id: 'en-IN', country_name: 'North Korea' },
		{ iso_code: 'KOR', locale_id: 'en-IN', country_name: 'South Korea' },
		{ iso_code: 'KWT', locale_id: 'en-IN', country_name: 'Kuwait' },
		{ iso_code: 'CYM', locale_id: 'en-IN', country_name: 'Cayman Islands' },
		{ iso_code: 'KAZ', locale_id: 'en-IN', country_name: 'Kazakhstan' },
		{ iso_code: 'LAO', locale_id: 'en-IN', country_name: 'Laos' },
		{ iso_code: 'LBN', locale_id: 'en-IN', country_name: 'Lebanon' },
		{ iso_code: 'LCA', locale_id: 'en-IN', country_name: 'St. Lucia' },
		{ iso_code: 'LIE', locale_id: 'en-IN', country_name: 'Liechtenstein' },
		{ iso_code: 'LKA', locale_id: 'en-IN', country_name: 'Sri Lanka' },
		{ iso_code: 'LBR', locale_id: 'en-IN', country_name: 'Liberia' },
		{ iso_code: 'LSO', locale_id: 'en-IN', country_name: 'Lesotho' },
		{ iso_code: 'LTU', locale_id: 'en-IN', country_name: 'Lithuania' },
		{ iso_code: 'LUX', locale_id: 'en-IN', country_name: 'Luxembourg' },
		{ iso_code: 'LVA', locale_id: 'en-IN', country_name: 'Latvia' },
		{ iso_code: 'LBY', locale_id: 'en-IN', country_name: 'Libya' },
		{ iso_code: 'MAR', locale_id: 'en-IN', country_name: 'Morocco' },
		{ iso_code: 'MCO', locale_id: 'en-IN', country_name: 'Monaco' },
		{ iso_code: 'MDA', locale_id: 'en-IN', country_name: 'Moldova' },
		{ iso_code: 'MNE', locale_id: 'en-IN', country_name: 'Montenegro' },
		{ iso_code: 'MAF', locale_id: 'en-IN', country_name: 'St. Martin' },
		{ iso_code: 'MDG', locale_id: 'en-IN', country_name: 'Madagascar' },
		{
			iso_code: 'MHL',
			locale_id: 'en-IN',
			country_name: 'Marshall Islands'
		},
		{
			iso_code: 'MKD',
			locale_id: 'en-IN',
			country_name: 'North Macedonia'
		},
		{ iso_code: 'MLI', locale_id: 'en-IN', country_name: 'Mali' },
		{
			iso_code: 'MMR',
			locale_id: 'en-IN',
			country_name: 'Myanmar'
		},
		{ iso_code: 'MNG', locale_id: 'en-IN', country_name: 'Mongolia' },
		{
			iso_code: 'MAC',
			locale_id: 'en-IN',
			country_name: 'Macao SAR China'
		},
		{
			iso_code: 'MNP',
			locale_id: 'en-IN',
			country_name: 'Northern Mariana Islands'
		},
		{ iso_code: 'MTQ', locale_id: 'en-IN', country_name: 'Martinique' },
		{ iso_code: 'MRT', locale_id: 'en-IN', country_name: 'Mauritania' },
		{ iso_code: 'MSR', locale_id: 'en-IN', country_name: 'Montserrat' },
		{ iso_code: 'MLT', locale_id: 'en-IN', country_name: 'Malta' },
		{ iso_code: 'MUS', locale_id: 'en-IN', country_name: 'Mauritius' },
		{ iso_code: 'MDV', locale_id: 'en-IN', country_name: 'Maldives' },
		{ iso_code: 'MWI', locale_id: 'en-IN', country_name: 'Malawi' },
		{ iso_code: 'MEX', locale_id: 'en-IN', country_name: 'Mexico' },
		{ iso_code: 'MYS', locale_id: 'en-IN', country_name: 'Malaysia' },
		{ iso_code: 'MOZ', locale_id: 'en-IN', country_name: 'Mozambique' },
		{ iso_code: 'NAM', locale_id: 'en-IN', country_name: 'Namibia' },
		{ iso_code: 'NCL', locale_id: 'en-IN', country_name: 'New Caledonia' },
		{ iso_code: 'NER', locale_id: 'en-IN', country_name: 'Niger' },
		{ iso_code: 'NFK', locale_id: 'en-IN', country_name: 'Norfolk Island' },
		{ iso_code: 'NGA', locale_id: 'en-IN', country_name: 'Nigeria' },
		{ iso_code: 'NIC', locale_id: 'en-IN', country_name: 'Nicaragua' },
		{ iso_code: 'NLD', locale_id: 'en-IN', country_name: 'Netherlands' },
		{ iso_code: 'NOR', locale_id: 'en-IN', country_name: 'Norway' },
		{ iso_code: 'NPL', locale_id: 'en-IN', country_name: 'Nepal' },
		{ iso_code: 'NRU', locale_id: 'en-IN', country_name: 'Nauru' },
		{ iso_code: 'NIU', locale_id: 'en-IN', country_name: 'Niue' },
		{ iso_code: 'NZL', locale_id: 'en-IN', country_name: 'New Zealand' },
		{ iso_code: 'OMN', locale_id: 'en-IN', country_name: 'Oman' },
		{ iso_code: 'PAN', locale_id: 'en-IN', country_name: 'Panama' },
		{ iso_code: 'PER', locale_id: 'en-IN', country_name: 'Peru' },
		{
			iso_code: 'PYF',
			locale_id: 'en-IN',
			country_name: 'French Polynesia'
		},
		{
			iso_code: 'PNG',
			locale_id: 'en-IN',
			country_name: 'Papua New Guinea'
		},
		{ iso_code: 'PHL', locale_id: 'en-IN', country_name: 'Philippines' },
		{ iso_code: 'PAK', locale_id: 'en-IN', country_name: 'Pakistan' },
		{ iso_code: 'POL', locale_id: 'en-IN', country_name: 'Poland' },
		{
			iso_code: 'SPM',
			locale_id: 'en-IN',
			country_name: 'St. Pierre & Miquelon'
		},
		{
			iso_code: 'PCN',
			locale_id: 'en-IN',
			country_name: 'Pitcairn Islands'
		},
		{ iso_code: 'PRI', locale_id: 'en-IN', country_name: 'Puerto Rico' },
		{
			iso_code: 'PSE',
			locale_id: 'en-IN',
			country_name: 'Palestinian Territories'
		},
		{ iso_code: 'PRT', locale_id: 'en-IN', country_name: 'Portugal' },
		{ iso_code: 'PLW', locale_id: 'en-IN', country_name: 'Palau' },
		{ iso_code: 'PRY', locale_id: 'en-IN', country_name: 'Paraguay' },
		{ iso_code: 'QAT', locale_id: 'en-IN', country_name: 'Qatar' },
		{ iso_code: 'REU', locale_id: 'en-IN', country_name: 'Réunion' },
		{ iso_code: 'ROU', locale_id: 'en-IN', country_name: 'Romania' },
		{ iso_code: 'SRB', locale_id: 'en-IN', country_name: 'Serbia' },
		{ iso_code: 'RUS', locale_id: 'en-IN', country_name: 'Russia' },
		{ iso_code: 'RWA', locale_id: 'en-IN', country_name: 'Rwanda' },
		{ iso_code: 'SAU', locale_id: 'en-IN', country_name: 'Saudi Arabia' },
		{
			iso_code: 'SLB',
			locale_id: 'en-IN',
			country_name: 'Solomon Islands'
		},
		{ iso_code: 'SYC', locale_id: 'en-IN', country_name: 'Seychelles' },
		{ iso_code: 'SDN', locale_id: 'en-IN', country_name: 'Sudan' },
		{ iso_code: 'SWE', locale_id: 'en-IN', country_name: 'Sweden' },
		{ iso_code: 'SGP', locale_id: 'en-IN', country_name: 'Singapore' },
		{ iso_code: 'SHN', locale_id: 'en-IN', country_name: 'St. Helena' },
		{ iso_code: 'SVN', locale_id: 'en-IN', country_name: 'Slovenia' },
		{
			iso_code: 'SJM',
			locale_id: 'en-IN',
			country_name: 'Svalbard & Jan Mayen'
		},
		{ iso_code: 'SVK', locale_id: 'en-IN', country_name: 'Slovakia' },
		{ iso_code: 'SLE', locale_id: 'en-IN', country_name: 'Sierra Leone' },
		{ iso_code: 'SMR', locale_id: 'en-IN', country_name: 'San Marino' },
		{ iso_code: 'SEN', locale_id: 'en-IN', country_name: 'Senegal' },
		{ iso_code: 'SOM', locale_id: 'en-IN', country_name: 'Somalia' },
		{ iso_code: 'SUR', locale_id: 'en-IN', country_name: 'Suriname' },
		{ iso_code: 'SSD', locale_id: 'en-IN', country_name: 'South Sudan' },
		{
			iso_code: 'STP',
			locale_id: 'en-IN',
			country_name: 'São Tomé & Príncipe'
		},
		{ iso_code: 'SLV', locale_id: 'en-IN', country_name: 'El Salvador' },
		{ iso_code: 'SXM', locale_id: 'en-IN', country_name: 'Sint Maarten' },
		{ iso_code: 'SYR', locale_id: 'en-IN', country_name: 'Syria' },
		{ iso_code: 'SWZ', locale_id: 'en-IN', country_name: 'Eswatini' },
		{
			iso_code: 'TCA',
			locale_id: 'en-IN',
			country_name: 'Turks & Caicos Islands'
		},
		{ iso_code: 'TCD', locale_id: 'en-IN', country_name: 'Chad' },
		{
			iso_code: 'ATF',
			locale_id: 'en-IN',
			country_name: 'French Southern Territories'
		},
		{ iso_code: 'TGO', locale_id: 'en-IN', country_name: 'Togo' },
		{ iso_code: 'THA', locale_id: 'en-IN', country_name: 'Thailand' },
		{ iso_code: 'TJK', locale_id: 'en-IN', country_name: 'Tajikistan' },
		{ iso_code: 'TKL', locale_id: 'en-IN', country_name: 'Tokelau' },
		{ iso_code: 'TLS', locale_id: 'en-IN', country_name: 'Timor-Leste' },
		{ iso_code: 'TKM', locale_id: 'en-IN', country_name: 'Turkmenistan' },
		{ iso_code: 'TUN', locale_id: 'en-IN', country_name: 'Tunisia' },
		{ iso_code: 'TON', locale_id: 'en-IN', country_name: 'Tonga' },
		{ iso_code: 'TUR', locale_id: 'en-IN', country_name: 'Türkiye' },
		{
			iso_code: 'TTO',
			locale_id: 'en-IN',
			country_name: 'Trinidad & Tobago'
		},
		{ iso_code: 'TUV', locale_id: 'en-IN', country_name: 'Tuvalu' },
		{ iso_code: 'TWN', locale_id: 'en-IN', country_name: 'Taiwan' },
		{ iso_code: 'TZA', locale_id: 'en-IN', country_name: 'Tanzania' },
		{ iso_code: 'UKR', locale_id: 'en-IN', country_name: 'Ukraine' },
		{ iso_code: 'UGA', locale_id: 'en-IN', country_name: 'Uganda' },
		{
			iso_code: 'UMI',
			locale_id: 'en-IN',
			country_name: 'U.S. Outlying Islands'
		},
		{ iso_code: 'USA', locale_id: 'en-IN', country_name: 'United States' },
		{ iso_code: 'URY', locale_id: 'en-IN', country_name: 'Uruguay' },
		{ iso_code: 'UZB', locale_id: 'en-IN', country_name: 'Uzbekistan' },
		{ iso_code: 'VAT', locale_id: 'en-IN', country_name: 'Vatican City' },
		{
			iso_code: 'VCT',
			locale_id: 'en-IN',
			country_name: 'St. Vincent & Grenadines'
		},
		{ iso_code: 'VEN', locale_id: 'en-IN', country_name: 'Venezuela' },
		{
			iso_code: 'VGB',
			locale_id: 'en-IN',
			country_name: 'British Virgin Islands'
		},
		{
			iso_code: 'VIR',
			locale_id: 'en-IN',
			country_name: 'U.S. Virgin Islands'
		},
		{ iso_code: 'VNM', locale_id: 'en-IN', country_name: 'Vietnam' },
		{ iso_code: 'VUT', locale_id: 'en-IN', country_name: 'Vanuatu' },
		{
			iso_code: 'WLF',
			locale_id: 'en-IN',
			country_name: 'Wallis & Futuna'
		},
		{ iso_code: 'WSM', locale_id: 'en-IN', country_name: 'Samoa' },
		{ iso_code: 'YEM', locale_id: 'en-IN', country_name: 'Yemen' },
		{ iso_code: 'MYT', locale_id: 'en-IN', country_name: 'Mayotte' },
		{ iso_code: 'ZAF', locale_id: 'en-IN', country_name: 'South Africa' },
		{ iso_code: 'ZMB', locale_id: 'en-IN', country_name: 'Zambia' },
		{ iso_code: 'ZWE', locale_id: 'en-IN', country_name: 'Zimbabwe' }
	];

	// Add timestamps to all rows
	const rowsWithTimestamps = rows.map((row) => ({
		...row,
		created_at: now,
		updated_at: now
	}));

	// Deduplicate by iso_code to avoid ON CONFLICT multi-hit
	const uniqueRows = Object.values(
		rowsWithTimestamps.reduce((acc, r) => {
			acc[r.iso_code] = r;
			return acc;
		}, {})
	);

	// Insert rows into country_code_by_locale
	await knex('country_code_by_locale')
		.insert(uniqueRows)
		.onConflict(['iso_code', 'locale_id'])
		.merge({
			country_name: knex.raw('EXCLUDED.country_name'),
			updated_at: now
		});
};
