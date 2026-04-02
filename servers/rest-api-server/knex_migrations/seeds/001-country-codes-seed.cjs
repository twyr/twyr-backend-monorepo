exports.seed = async function seedCountryCodes(knex) {
	console.log('Processing 001-country-codes-seed.cjs');
	// Step 0: If the data is already in there, skip...
	const countryCount = await knex?.raw?.(
		`SELECT count(iso_code) AS country_count FROM country_code_master`
	);
	if (Number?.(countryCount?.rows?.[0]['country_count'])) return;

	// Insert all country/region codes (base table). Each entry has
	//   iso_code: ISO 3166-1 alpha-3 code
	//   unsd_code: UN M49/UNSD numeric code as a string
	//   country_calling_code: E.164 calling code (for example, +91); null for unresolved legacy/obsolete ISO3 entries
	//   is_enabled: whether the code is enabled in your application (all false by default)
	// Localized country names are seeded separately in 003-country-codes-by-locale-seed.cjs
	await knex('country_code_master').insert([
		{
			iso_code: 'AFG',
			unsd_code: '004',
			country_calling_code: '+93',
			is_enabled: false
		},
		{
			iso_code: 'ALB',
			unsd_code: '008',
			country_calling_code: '+355',
			is_enabled: false
		},
		{
			iso_code: 'DZA',
			unsd_code: '012',
			country_calling_code: '+213',
			is_enabled: false
		},
		{
			iso_code: 'ASM',
			unsd_code: '016',
			country_calling_code: '+1684',
			is_enabled: false
		},
		{
			iso_code: 'ATA',
			unsd_code: '010',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'AND',
			unsd_code: '020',
			country_calling_code: '+376',
			is_enabled: false
		},
		{
			iso_code: 'AGO',
			unsd_code: '024',
			country_calling_code: '+244',
			is_enabled: false
		},
		{
			iso_code: 'AIA',
			unsd_code: '660',
			country_calling_code: '+1264',
			is_enabled: false
		},
		{
			iso_code: 'ATG',
			unsd_code: '028',
			country_calling_code: '+1268',
			is_enabled: false
		},
		{
			iso_code: 'ARG',
			unsd_code: '032',
			country_calling_code: '+54',
			is_enabled: false
		},
		{
			iso_code: 'ARM',
			unsd_code: '051',
			country_calling_code: '+374',
			is_enabled: false
		},
		{
			iso_code: 'ABW',
			unsd_code: '533',
			country_calling_code: '+297',
			is_enabled: false
		},
		{
			iso_code: 'ALA',
			unsd_code: '248',
			country_calling_code: '+35818',
			is_enabled: false
		},
		{
			iso_code: 'AUS',
			unsd_code: '036',
			country_calling_code: '+61',
			is_enabled: false
		},
		{
			iso_code: 'AUT',
			unsd_code: '040',
			country_calling_code: '+43',
			is_enabled: false
		},
		{
			iso_code: 'AZE',
			unsd_code: '031',
			country_calling_code: '+994',
			is_enabled: false
		},
		{
			iso_code: 'BHS',
			unsd_code: '044',
			country_calling_code: '+1242',
			is_enabled: false
		},
		{
			iso_code: 'BHR',
			unsd_code: '048',
			country_calling_code: '+973',
			is_enabled: false
		},
		{
			iso_code: 'BGD',
			unsd_code: '050',
			country_calling_code: '+880',
			is_enabled: false
		},
		{
			iso_code: 'BRB',
			unsd_code: '052',
			country_calling_code: '+1246',
			is_enabled: false
		},
		{
			iso_code: 'BLR',
			unsd_code: '112',
			country_calling_code: '+375',
			is_enabled: false
		},
		{
			iso_code: 'BEL',
			unsd_code: '056',
			country_calling_code: '+32',
			is_enabled: false
		},
		{
			iso_code: 'BLX',
			unsd_code: '058',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'BLZ',
			unsd_code: '084',
			country_calling_code: '+501',
			is_enabled: false
		},
		{
			iso_code: 'BEN',
			unsd_code: '204',
			country_calling_code: '+229',
			is_enabled: false
		},
		{
			iso_code: 'BES',
			unsd_code: '535',
			country_calling_code: '+599',
			is_enabled: false
		},
		{
			iso_code: 'BLM',
			unsd_code: '652',
			country_calling_code: '+590',
			is_enabled: false
		},
		{
			iso_code: 'BMU',
			unsd_code: '060',
			country_calling_code: '+1441',
			is_enabled: false
		},
		{
			iso_code: 'BTN',
			unsd_code: '064',
			country_calling_code: '+975',
			is_enabled: false
		},
		{
			iso_code: 'BVT',
			unsd_code: '074',
			country_calling_code: '+47',
			is_enabled: false
		},
		{
			iso_code: 'BOL',
			unsd_code: '068',
			country_calling_code: '+591',
			is_enabled: false
		},
		{
			iso_code: 'BIH',
			unsd_code: '070',
			country_calling_code: '+387',
			is_enabled: false
		},
		{
			iso_code: 'BWA',
			unsd_code: '072',
			country_calling_code: '+267',
			is_enabled: false
		},
		{
			iso_code: 'BAT',
			unsd_code: '080',
			country_calling_code: '+672',
			is_enabled: false
		},
		{
			iso_code: 'BRA',
			unsd_code: '076',
			country_calling_code: '+55',
			is_enabled: false
		},
		{
			iso_code: 'IOT',
			unsd_code: '086',
			country_calling_code: '+246',
			is_enabled: false
		},
		{
			iso_code: 'VGB',
			unsd_code: '092',
			country_calling_code: '+1284',
			is_enabled: false
		},
		{
			iso_code: 'BRN',
			unsd_code: '096',
			country_calling_code: '+673',
			is_enabled: false
		},
		{
			iso_code: 'BGR',
			unsd_code: '100',
			country_calling_code: '+359',
			is_enabled: false
		},
		{
			iso_code: 'BFA',
			unsd_code: '854',
			country_calling_code: '+226',
			is_enabled: false
		},
		{
			iso_code: 'BDI',
			unsd_code: '108',
			country_calling_code: '+257',
			is_enabled: false
		},
		{
			iso_code: 'KHM',
			unsd_code: '116',
			country_calling_code: '+855',
			is_enabled: false
		},
		{
			iso_code: 'CMR',
			unsd_code: '120',
			country_calling_code: '+237',
			is_enabled: false
		},
		{
			iso_code: 'CAN',
			unsd_code: '124',
			country_calling_code: '+1',
			is_enabled: false
		},
		{
			iso_code: 'CPV',
			unsd_code: '132',
			country_calling_code: '+238',
			is_enabled: false
		},
		{
			iso_code: 'CYM',
			unsd_code: '136',
			country_calling_code: '+1345',
			is_enabled: false
		},
		{
			iso_code: 'CAF',
			unsd_code: '140',
			country_calling_code: '+236',
			is_enabled: false
		},
		{
			iso_code: 'TCD',
			unsd_code: '148',
			country_calling_code: '+235',
			is_enabled: false
		},
		{
			iso_code: 'CHL',
			unsd_code: '152',
			country_calling_code: '+56',
			is_enabled: false
		},
		{
			iso_code: 'CHN',
			unsd_code: '156',
			country_calling_code: '+86',
			is_enabled: false
		},
		{
			iso_code: 'CXR',
			unsd_code: '162',
			country_calling_code: '+61',
			is_enabled: false
		},
		{
			iso_code: 'CCK',
			unsd_code: '166',
			country_calling_code: '+61',
			is_enabled: false
		},
		{
			iso_code: 'COL',
			unsd_code: '170',
			country_calling_code: '+57',
			is_enabled: false
		},
		{
			iso_code: 'COM',
			unsd_code: '174',
			country_calling_code: '+269',
			is_enabled: false
		},
		{
			iso_code: 'ZAR',
			unsd_code: '180',
			country_calling_code: '+243',
			is_enabled: false
		},
		{
			iso_code: 'COG',
			unsd_code: '178',
			country_calling_code: '+242',
			is_enabled: false
		},
		{
			iso_code: 'COK',
			unsd_code: '184',
			country_calling_code: '+682',
			is_enabled: false
		},
		{
			iso_code: 'CRI',
			unsd_code: '188',
			country_calling_code: '+506',
			is_enabled: false
		},
		{
			iso_code: 'CIV',
			unsd_code: '384',
			country_calling_code: '+225',
			is_enabled: false
		},
		{
			iso_code: 'HRV',
			unsd_code: '191',
			country_calling_code: '+385',
			is_enabled: false
		},
		{
			iso_code: 'CUB',
			unsd_code: '192',
			country_calling_code: '+53',
			is_enabled: false
		},
		{
			iso_code: 'CUW',
			unsd_code: '531',
			country_calling_code: '+599',
			is_enabled: false
		},
		{
			iso_code: 'CYP',
			unsd_code: '196',
			country_calling_code: '+357',
			is_enabled: false
		},
		{
			iso_code: 'CZE',
			unsd_code: '203',
			country_calling_code: '+420',
			is_enabled: false
		},
		{
			iso_code: 'CSK',
			unsd_code: '200',
			country_calling_code: '+42',
			is_enabled: false
		},
		{
			iso_code: 'DNK',
			unsd_code: '208',
			country_calling_code: '+45',
			is_enabled: false
		},
		{
			iso_code: 'DJI',
			unsd_code: '262',
			country_calling_code: '+253',
			is_enabled: false
		},
		{
			iso_code: 'DMA',
			unsd_code: '212',
			country_calling_code: '+1767',
			is_enabled: false
		},
		{
			iso_code: 'DOM',
			unsd_code: '214',
			country_calling_code: '+1',
			is_enabled: false
		},
		{
			iso_code: 'TMP',
			unsd_code: '626',
			country_calling_code: '+670',
			is_enabled: false
		},
		{
			iso_code: 'ECU',
			unsd_code: '218',
			country_calling_code: '+593',
			is_enabled: false
		},
		{
			iso_code: 'EGY',
			unsd_code: '818',
			country_calling_code: '+20',
			is_enabled: false
		},
		{
			iso_code: 'SLV',
			unsd_code: '222',
			country_calling_code: '+503',
			is_enabled: false
		},
		{
			iso_code: 'GNQ',
			unsd_code: '226',
			country_calling_code: '+240',
			is_enabled: false
		},
		{
			iso_code: 'ERI',
			unsd_code: '232',
			country_calling_code: '+291',
			is_enabled: false
		},
		{
			iso_code: 'EST',
			unsd_code: '233',
			country_calling_code: '+372',
			is_enabled: false
		},
		{
			iso_code: 'ETH',
			unsd_code: '231',
			country_calling_code: '+251',
			is_enabled: false
		},
		{
			iso_code: 'ETF',
			unsd_code: '230',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'EUN',
			unsd_code: '918',
			country_calling_code: '+7',
			is_enabled: false
		},
		{
			iso_code: 'FRO',
			unsd_code: '234',
			country_calling_code: '+298',
			is_enabled: false
		},
		{
			iso_code: 'FLK',
			unsd_code: '238',
			country_calling_code: '+500',
			is_enabled: false
		},
		{
			iso_code: 'FJI',
			unsd_code: '242',
			country_calling_code: '+679',
			is_enabled: false
		},
		{
			iso_code: 'FIN',
			unsd_code: '246',
			country_calling_code: '+358',
			is_enabled: false
		},
		{
			iso_code: 'PCZ',
			unsd_code: '592',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'ZW1',
			unsd_code: '717',
			is_enabled: false
		},
		{
			iso_code: 'TAN',
			unsd_code: '835',
			country_calling_code: '+255',
			is_enabled: false
		},
		{
			iso_code: 'VDR',
			unsd_code: '868',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'SVR',
			unsd_code: '866',
			country_calling_code: '+7',
			is_enabled: false
		},
		{
			iso_code: 'ZPM',
			unsd_code: '836',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'ATF',
			unsd_code: '260',
			country_calling_code: '+262',
			is_enabled: false
		},
		{
			iso_code: 'FRA',
			unsd_code: '250',
			country_calling_code: '+33',
			is_enabled: false
		},
		{
			iso_code: 'FRE',
			unsd_code: '838',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'GUF',
			unsd_code: '254',
			country_calling_code: '+594',
			is_enabled: false
		},
		{
			iso_code: 'PYF',
			unsd_code: '258',
			country_calling_code: '+689',
			is_enabled: false
		},
		{
			iso_code: 'GAB',
			unsd_code: '266',
			country_calling_code: '+241',
			is_enabled: false
		},
		{
			iso_code: 'GMB',
			unsd_code: '270',
			country_calling_code: '+220',
			is_enabled: false
		},
		{
			iso_code: 'GAZ',
			unsd_code: '274',
			country_calling_code: '+970',
			is_enabled: false
		},
		{
			iso_code: 'GEO',
			unsd_code: '268',
			country_calling_code: '+995',
			is_enabled: false
		},
		{
			iso_code: 'DDR',
			unsd_code: '278',
			country_calling_code: '+49',
			is_enabled: false
		},
		{
			iso_code: 'DEU',
			unsd_code: '276',
			country_calling_code: '+49',
			is_enabled: false
		},
		{
			iso_code: 'GHA',
			unsd_code: '288',
			country_calling_code: '+233',
			is_enabled: false
		},
		{
			iso_code: 'GIB',
			unsd_code: '292',
			country_calling_code: '+350',
			is_enabled: false
		},
		{
			iso_code: 'GRC',
			unsd_code: '300',
			country_calling_code: '+30',
			is_enabled: false
		},
		{
			iso_code: 'GRL',
			unsd_code: '304',
			country_calling_code: '+299',
			is_enabled: false
		},
		{
			iso_code: 'GRD',
			unsd_code: '308',
			country_calling_code: '+1473',
			is_enabled: false
		},
		{
			iso_code: 'GLP',
			unsd_code: '312',
			country_calling_code: '+590',
			is_enabled: false
		},
		{
			iso_code: 'GUM',
			unsd_code: '316',
			country_calling_code: '+1671',
			is_enabled: false
		},
		{
			iso_code: 'GTM',
			unsd_code: '320',
			country_calling_code: '+502',
			is_enabled: false
		},
		{
			iso_code: 'GIN',
			unsd_code: '324',
			country_calling_code: '+224',
			is_enabled: false
		},
		{
			iso_code: 'GNB',
			unsd_code: '624',
			country_calling_code: '+245',
			is_enabled: false
		},
		{
			iso_code: 'GUY',
			unsd_code: '328',
			country_calling_code: '+592',
			is_enabled: false
		},
		{
			iso_code: 'HTI',
			unsd_code: '332',
			country_calling_code: '+509',
			is_enabled: false
		},
		{
			iso_code: 'VAT',
			unsd_code: '336',
			country_calling_code: '+379',
			is_enabled: false
		},
		{
			iso_code: 'HND',
			unsd_code: '340',
			country_calling_code: '+504',
			is_enabled: false
		},
		{
			iso_code: 'HKG',
			unsd_code: '344',
			country_calling_code: '+852',
			is_enabled: false
		},
		{
			iso_code: 'HMD',
			unsd_code: '334',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'HUN',
			unsd_code: '348',
			country_calling_code: '+36',
			is_enabled: false
		},
		{
			iso_code: 'ISL',
			unsd_code: '352',
			country_calling_code: '+354',
			is_enabled: false
		},
		{
			iso_code: 'IND',
			unsd_code: '356',
			country_calling_code: '+91',
			is_enabled: true
		},
		{
			iso_code: 'IDN',
			unsd_code: '360',
			country_calling_code: '+62',
			is_enabled: false
		},
		{
			iso_code: 'IRN',
			unsd_code: '364',
			country_calling_code: '+98',
			is_enabled: false
		},
		{
			iso_code: 'IRQ',
			unsd_code: '368',
			country_calling_code: '+964',
			is_enabled: false
		},
		{
			iso_code: 'IRL',
			unsd_code: '372',
			country_calling_code: '+353',
			is_enabled: false
		},
		{
			iso_code: 'IMN',
			unsd_code: '833',
			country_calling_code: '+44',
			is_enabled: false
		},
		{
			iso_code: 'ISR',
			unsd_code: '376',
			country_calling_code: '+972',
			is_enabled: false
		},
		{
			iso_code: 'ITA',
			unsd_code: '380',
			country_calling_code: '+39',
			is_enabled: false
		},
		{
			iso_code: 'JAM',
			unsd_code: '388',
			country_calling_code: '+1',
			is_enabled: false
		},
		{
			iso_code: 'JEY',
			unsd_code: '832',
			country_calling_code: '+44',
			is_enabled: false
		},
		{
			iso_code: 'JPN',
			unsd_code: '392',
			country_calling_code: '+81',
			is_enabled: false
		},
		{
			iso_code: 'JTN',
			unsd_code: '396',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'JOR',
			unsd_code: '400',
			country_calling_code: '+962',
			is_enabled: false
		},
		{
			iso_code: 'KAZ',
			unsd_code: '398',
			country_calling_code: '+7',
			is_enabled: false
		},
		{
			iso_code: 'KEN',
			unsd_code: '404',
			country_calling_code: '+254',
			is_enabled: false
		},
		{
			iso_code: 'KIR',
			unsd_code: '296',
			country_calling_code: '+686',
			is_enabled: false
		},
		{
			iso_code: 'PRK',
			unsd_code: '408',
			country_calling_code: '+850',
			is_enabled: false
		},
		{
			iso_code: 'KOR',
			unsd_code: '410',
			country_calling_code: '+82',
			is_enabled: false
		},
		{
			iso_code: 'KWT',
			unsd_code: '414',
			country_calling_code: '+965',
			is_enabled: false
		},
		{
			iso_code: 'KGZ',
			unsd_code: '417',
			country_calling_code: '+996',
			is_enabled: false
		},
		{
			iso_code: 'LAO',
			unsd_code: '418',
			country_calling_code: '+856',
			is_enabled: false
		},
		{
			iso_code: 'LVA',
			unsd_code: '428',
			country_calling_code: '+371',
			is_enabled: false
		},
		{
			iso_code: 'LBN',
			unsd_code: '422',
			country_calling_code: '+961',
			is_enabled: false
		},
		{
			iso_code: 'LSO',
			unsd_code: '426',
			country_calling_code: '+266',
			is_enabled: false
		},
		{
			iso_code: 'LBR',
			unsd_code: '430',
			country_calling_code: '+231',
			is_enabled: false
		},
		{
			iso_code: 'LBY',
			unsd_code: '434',
			country_calling_code: '+218',
			is_enabled: false
		},
		{
			iso_code: 'LIE',
			unsd_code: '438',
			country_calling_code: '+423',
			is_enabled: false
		},
		{
			iso_code: 'LTU',
			unsd_code: '440',
			country_calling_code: '+370',
			is_enabled: false
		},
		{
			iso_code: 'LUX',
			unsd_code: '442',
			country_calling_code: '+352',
			is_enabled: false
		},
		{
			iso_code: 'MAC',
			unsd_code: '446',
			country_calling_code: '+853',
			is_enabled: false
		},
		{
			iso_code: 'MKD',
			unsd_code: '807',
			country_calling_code: '+389',
			is_enabled: false
		},
		{
			iso_code: 'MDG',
			unsd_code: '450',
			country_calling_code: '+261',
			is_enabled: false
		},
		{
			iso_code: 'MWI',
			unsd_code: '454',
			country_calling_code: '+265',
			is_enabled: false
		},
		{
			iso_code: 'MYS',
			unsd_code: '458',
			country_calling_code: '+60',
			is_enabled: false
		},
		{
			iso_code: 'MDV',
			unsd_code: '462',
			country_calling_code: '+960',
			is_enabled: false
		},
		{
			iso_code: 'MLI',
			unsd_code: '466',
			country_calling_code: '+223',
			is_enabled: false
		},
		{
			iso_code: 'MLT',
			unsd_code: '470',
			country_calling_code: '+356',
			is_enabled: false
		},
		{
			iso_code: 'MHL',
			unsd_code: '584',
			country_calling_code: '+692',
			is_enabled: false
		},
		{
			iso_code: 'MTQ',
			unsd_code: '474',
			country_calling_code: '+596',
			is_enabled: false
		},
		{
			iso_code: 'MRT',
			unsd_code: '478',
			country_calling_code: '+222',
			is_enabled: false
		},
		{
			iso_code: 'MUS',
			unsd_code: '480',
			country_calling_code: '+230',
			is_enabled: false
		},
		{
			iso_code: 'MEX',
			unsd_code: '484',
			country_calling_code: '+52',
			is_enabled: false
		},
		{
			iso_code: 'FSM',
			unsd_code: '583',
			country_calling_code: '+691',
			is_enabled: false
		},
		{
			iso_code: 'MID',
			unsd_code: '488',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'MDA',
			unsd_code: '498',
			country_calling_code: '+373',
			is_enabled: false
		},
		{
			iso_code: 'MAF',
			unsd_code: '663',
			country_calling_code: '+590',
			is_enabled: false
		},
		{
			iso_code: 'MCO',
			unsd_code: '492',
			country_calling_code: '+377',
			is_enabled: false
		},
		{
			iso_code: 'MNE',
			unsd_code: '499',
			country_calling_code: '+382',
			is_enabled: false
		},
		{
			iso_code: 'MNG',
			unsd_code: '496',
			country_calling_code: '+976',
			is_enabled: false
		},
		{
			iso_code: 'MSR',
			unsd_code: '500',
			country_calling_code: '+1664',
			is_enabled: false
		},
		{
			iso_code: 'MAR',
			unsd_code: '504',
			country_calling_code: '+212',
			is_enabled: false
		},
		{
			iso_code: 'MOZ',
			unsd_code: '508',
			country_calling_code: '+258',
			is_enabled: false
		},
		{
			iso_code: 'MMR',
			unsd_code: '104',
			country_calling_code: '+95',
			is_enabled: false
		},
		{
			iso_code: 'MYT',
			unsd_code: '175',
			country_calling_code: '+262',
			is_enabled: false
		},
		{
			iso_code: 'NAM',
			unsd_code: '516',
			country_calling_code: '+264',
			is_enabled: false
		},
		{
			iso_code: 'NRU',
			unsd_code: '520',
			country_calling_code: '+674',
			is_enabled: false
		},
		{
			iso_code: 'NPL',
			unsd_code: '524',
			country_calling_code: '+977',
			is_enabled: false
		},
		{
			iso_code: 'NLD',
			unsd_code: '528',
			country_calling_code: '+31',
			is_enabled: false
		},
		{
			iso_code: 'ANT',
			unsd_code: '530',
			country_calling_code: '+599',
			is_enabled: false
		},
		{
			iso_code: 'NZE',
			unsd_code: '536',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'NCL',
			unsd_code: '540',
			country_calling_code: '+687',
			is_enabled: false
		},
		{
			iso_code: 'NZL',
			unsd_code: '554',
			country_calling_code: '+64',
			is_enabled: false
		},
		{
			iso_code: 'NIC',
			unsd_code: '558',
			country_calling_code: '+505',
			is_enabled: false
		},
		{
			iso_code: 'NER',
			unsd_code: '562',
			country_calling_code: '+227',
			is_enabled: false
		},
		{
			iso_code: 'NGA',
			unsd_code: '566',
			country_calling_code: '+234',
			is_enabled: false
		},
		{
			iso_code: 'NIU',
			unsd_code: '570',
			country_calling_code: '+683',
			is_enabled: false
		},
		{
			iso_code: 'NFK',
			unsd_code: '574',
			country_calling_code: '+672',
			is_enabled: false
		},
		{
			iso_code: 'MNP',
			unsd_code: '580',
			country_calling_code: '+1670',
			is_enabled: false
		},
		{
			iso_code: 'NOR',
			unsd_code: '578',
			country_calling_code: '+47',
			is_enabled: false
		},
		{
			iso_code: 'OMN',
			unsd_code: '512',
			country_calling_code: '+968',
			is_enabled: false
		},
		{
			iso_code: 'PCE',
			unsd_code: '582',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'PAK',
			unsd_code: '586',
			country_calling_code: '+92',
			is_enabled: false
		},
		{
			iso_code: 'PLW',
			unsd_code: '585',
			country_calling_code: '+680',
			is_enabled: false
		},
		{
			iso_code: 'PAN',
			unsd_code: '591',
			country_calling_code: '+507',
			is_enabled: false
		},
		{
			iso_code: 'PNG',
			unsd_code: '598',
			country_calling_code: '+675',
			is_enabled: false
		},
		{
			iso_code: 'PRY',
			unsd_code: '600',
			country_calling_code: '+595',
			is_enabled: false
		},
		{
			iso_code: 'PSE',
			unsd_code: '275',
			country_calling_code: '+970',
			is_enabled: false
		},
		{
			iso_code: 'PMY',
			unsd_code: '459',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'PER',
			unsd_code: '604',
			country_calling_code: '+51',
			is_enabled: false
		},
		{
			iso_code: 'PHL',
			unsd_code: '608',
			country_calling_code: '+63',
			is_enabled: false
		},
		{
			iso_code: 'PCN',
			unsd_code: '612',
			country_calling_code: '+64',
			is_enabled: false
		},
		{
			iso_code: 'POL',
			unsd_code: '616',
			country_calling_code: '+48',
			is_enabled: false
		},
		{
			iso_code: 'PRT',
			unsd_code: '620',
			country_calling_code: '+351',
			is_enabled: false
		},
		{
			iso_code: 'PRI',
			unsd_code: '630',
			country_calling_code: '+1',
			is_enabled: false
		},
		{
			iso_code: 'QAT',
			unsd_code: '634',
			country_calling_code: '+974',
			is_enabled: false
		},
		{
			iso_code: 'REU',
			unsd_code: '638',
			country_calling_code: '+262',
			is_enabled: false
		},
		{
			iso_code: 'ROM',
			unsd_code: '642',
			country_calling_code: '+40',
			is_enabled: false
		},
		{
			iso_code: 'ROU',
			unsd_code: '642',
			country_calling_code: '+40',
			is_enabled: false
		},
		{
			iso_code: 'RUS',
			unsd_code: '643',
			country_calling_code: '+7',
			is_enabled: false
		},
		{
			iso_code: 'RWA',
			unsd_code: '646',
			country_calling_code: '+250',
			is_enabled: false
		},
		{
			iso_code: 'RYU',
			unsd_code: '647',
			country_calling_code: '+81',
			is_enabled: false
		},
		{
			iso_code: 'SBH',
			unsd_code: '461',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'SHN',
			unsd_code: '654',
			country_calling_code: '+2',
			is_enabled: false
		},
		{
			iso_code: 'KN1',
			unsd_code: '658',
			is_enabled: false
		},
		{
			iso_code: 'SPM',
			unsd_code: '666',
			country_calling_code: '+508',
			is_enabled: false
		},
		{
			iso_code: 'WSM',
			unsd_code: '882',
			country_calling_code: '+685',
			is_enabled: false
		},
		{
			iso_code: 'SMR',
			unsd_code: '674',
			country_calling_code: '+378',
			is_enabled: false
		},
		{
			iso_code: 'STP',
			unsd_code: '678',
			country_calling_code: '+239',
			is_enabled: false
		},
		{
			iso_code: 'SWK',
			unsd_code: '457',
			country_calling_code: '+60',
			is_enabled: false
		},
		{
			iso_code: 'SAU',
			unsd_code: '682',
			country_calling_code: '+966',
			is_enabled: false
		},
		{
			iso_code: 'SEN',
			unsd_code: '686',
			country_calling_code: '+221',
			is_enabled: false
		},
		{
			iso_code: 'SGS',
			unsd_code: '239',
			country_calling_code: '+500',
			is_enabled: false
		},
		{
			iso_code: 'SYC',
			unsd_code: '690',
			country_calling_code: '+248',
			is_enabled: false
		},
		{
			iso_code: 'SLE',
			unsd_code: '694',
			country_calling_code: '+232',
			is_enabled: false
		},
		{
			iso_code: 'SIK',
			unsd_code: '698',
			country_calling_code: '+91',
			is_enabled: false
		},
		{
			iso_code: 'SGP',
			unsd_code: '702',
			country_calling_code: '+65',
			is_enabled: false
		},
		{
			iso_code: 'SVK',
			unsd_code: '703',
			country_calling_code: '+421',
			is_enabled: false
		},
		{
			iso_code: 'SVN',
			unsd_code: '705',
			country_calling_code: '+386',
			is_enabled: false
		},
		{
			iso_code: 'SLB',
			unsd_code: '090',
			country_calling_code: '+677',
			is_enabled: false
		},
		{
			iso_code: 'SOM',
			unsd_code: '706',
			country_calling_code: '+252',
			is_enabled: false
		},
		{
			iso_code: 'SRB',
			unsd_code: '688',
			country_calling_code: '+381',
			is_enabled: false
		},
		{
			iso_code: 'SSD',
			unsd_code: '728',
			country_calling_code: '+211',
			is_enabled: false
		},
		{
			iso_code: 'ZAF',
			unsd_code: '710',
			country_calling_code: '+27',
			is_enabled: false
		},
		{
			iso_code: 'SVU',
			unsd_code: '810',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'ESP',
			unsd_code: '724',
			country_calling_code: '+34',
			is_enabled: false
		},
		{
			iso_code: 'SPE',
			unsd_code: '839',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'LKA',
			unsd_code: '144',
			country_calling_code: '+94',
			is_enabled: false
		},
		{
			iso_code: 'KNA',
			unsd_code: '659',
			country_calling_code: '+1869',
			is_enabled: false
		},
		{
			iso_code: 'LCA',
			unsd_code: '662',
			country_calling_code: '+1758',
			is_enabled: false
		},
		{
			iso_code: 'VCT',
			unsd_code: '670',
			country_calling_code: '+1784',
			is_enabled: false
		},
		{
			iso_code: 'SDN',
			unsd_code: '736',
			country_calling_code: '+249',
			is_enabled: false
		},
		{
			iso_code: 'SUR',
			unsd_code: '740',
			country_calling_code: '+597',
			is_enabled: false
		},
		{
			iso_code: 'SJM',
			unsd_code: '744',
			country_calling_code: '+4779',
			is_enabled: false
		},
		{
			iso_code: 'SWZ',
			unsd_code: '748',
			country_calling_code: '+268',
			is_enabled: false
		},
		{
			iso_code: 'SXM',
			unsd_code: '534',
			country_calling_code: '+1721',
			is_enabled: false
		},
		{
			iso_code: 'SWE',
			unsd_code: '752',
			country_calling_code: '+46',
			is_enabled: false
		},
		{
			iso_code: 'CHE',
			unsd_code: '756',
			country_calling_code: '+41',
			is_enabled: false
		},
		{
			iso_code: 'SYR',
			unsd_code: '760',
			country_calling_code: '+963',
			is_enabled: false
		},
		{
			iso_code: 'TWN',
			unsd_code: '158',
			country_calling_code: '+886',
			is_enabled: false
		},
		{
			iso_code: 'TJK',
			unsd_code: '762',
			country_calling_code: '+992',
			is_enabled: false
		},
		{
			iso_code: 'TZA',
			unsd_code: '834',
			country_calling_code: '+255',
			is_enabled: false
		},
		{
			iso_code: 'THA',
			unsd_code: '764',
			country_calling_code: '+66',
			is_enabled: false
		},
		{
			iso_code: 'TGO',
			unsd_code: '768',
			country_calling_code: '+228',
			is_enabled: false
		},
		{
			iso_code: 'TKL',
			unsd_code: '772',
			country_calling_code: '+690',
			is_enabled: false
		},
		{
			iso_code: 'TON',
			unsd_code: '776',
			country_calling_code: '+676',
			is_enabled: false
		},
		{
			iso_code: 'TTO',
			unsd_code: '780',
			country_calling_code: '+1868',
			is_enabled: false
		},
		{
			iso_code: 'TUN',
			unsd_code: '788',
			country_calling_code: '+216',
			is_enabled: false
		},
		{
			iso_code: 'TUR',
			unsd_code: '792',
			country_calling_code: '+90',
			is_enabled: false
		},
		{
			iso_code: 'TKM',
			unsd_code: '795',
			country_calling_code: '+993',
			is_enabled: false
		},
		{
			iso_code: 'TLS',
			unsd_code: '626',
			country_calling_code: '+670',
			is_enabled: false
		},
		{
			iso_code: 'TCA',
			unsd_code: '796',
			country_calling_code: '+1649',
			is_enabled: false
		},
		{
			iso_code: 'TUV',
			unsd_code: '798',
			country_calling_code: '+688',
			is_enabled: false
		},
		{
			iso_code: 'UGA',
			unsd_code: '800',
			country_calling_code: '+256',
			is_enabled: false
		},
		{
			iso_code: 'UKR',
			unsd_code: '804',
			country_calling_code: '+380',
			is_enabled: false
		},
		{
			iso_code: 'UMI',
			unsd_code: '581',
			country_calling_code: '+268',
			is_enabled: false
		},
		{
			iso_code: 'ARE',
			unsd_code: '784',
			country_calling_code: '+971',
			is_enabled: false
		},
		{
			iso_code: 'GBR',
			unsd_code: '826',
			country_calling_code: '+44',
			is_enabled: false
		},
		{
			iso_code: 'GGY',
			unsd_code: '831',
			country_calling_code: '+44',
			is_enabled: false
		},
		{
			iso_code: 'USA',
			unsd_code: '840',
			country_calling_code: '+1',
			is_enabled: false
		},
		{
			iso_code: 'UNS',
			unsd_code: '898',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'URY',
			unsd_code: '858',
			country_calling_code: '+598',
			is_enabled: false
		},
		{
			iso_code: 'USP',
			unsd_code: '849',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'UZB',
			unsd_code: '860',
			country_calling_code: '+998',
			is_enabled: false
		},
		{
			iso_code: 'VUT',
			unsd_code: '548',
			country_calling_code: '+678',
			is_enabled: false
		},
		{
			iso_code: 'VEN',
			unsd_code: '862',
			country_calling_code: '+58',
			is_enabled: false
		},
		{
			iso_code: 'VNM',
			unsd_code: '704',
			country_calling_code: '+84',
			is_enabled: false
		},
		{
			iso_code: 'VIR',
			unsd_code: '850',
			country_calling_code: '+1340',
			is_enabled: false
		},
		{
			iso_code: 'WAK',
			unsd_code: '872',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'WLF',
			unsd_code: '876',
			country_calling_code: '+681',
			is_enabled: false
		},
		{
			iso_code: 'ESH',
			unsd_code: '732',
			country_calling_code: '+2',
			is_enabled: false
		},
		{
			iso_code: 'WLD',
			unsd_code: '000',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'YDR',
			unsd_code: '720',
			country_calling_code: null,
			is_enabled: false
		},
		{
			iso_code: 'YEM',
			unsd_code: '887',
			country_calling_code: '+967',
			is_enabled: false
		},
		{
			iso_code: 'SER',
			unsd_code: '891',
			country_calling_code: '+381',
			is_enabled: false
		},
		// WITS truncates this name in its table; expand the abbreviation for clarity
		{
			iso_code: 'YUG',
			unsd_code: '890',
			country_calling_code: '+381',
			is_enabled: false
		},
		{
			iso_code: 'ZMB',
			unsd_code: '894',
			country_calling_code: '+260',
			is_enabled: false
		},
		{
			iso_code: 'ZWE',
			unsd_code: '716',
			country_calling_code: '+263',
			is_enabled: false
		}
	]);
};
