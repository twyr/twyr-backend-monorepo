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
	//   is_enabled: whether the code is enabled in your application (all false by default)
	// Localized country names are seeded separately in 003-country-codes-by-locale-seed.cjs
	await knex('country_code_master').insert([
		{
			iso_code: 'AFG',
			unsd_code: '004',
			is_enabled: false
		},
		{
			iso_code: 'ALB',
			unsd_code: '008',
			is_enabled: false
		},
		{
			iso_code: 'DZA',
			unsd_code: '012',
			is_enabled: false
		},
		{
			iso_code: 'ASM',
			unsd_code: '016',
			is_enabled: false
		},
		{
			iso_code: 'ATA',
			unsd_code: '010',
			is_enabled: false
		},
		{
			iso_code: 'AND',
			unsd_code: '020',
			is_enabled: false
		},
		{
			iso_code: 'AGO',
			unsd_code: '024',
			is_enabled: false
		},
		{
			iso_code: 'AIA',
			unsd_code: '660',
			is_enabled: false
		},
		{
			iso_code: 'ATG',
			unsd_code: '028',
			is_enabled: false
		},
		{
			iso_code: 'ARG',
			unsd_code: '032',
			is_enabled: false
		},
		{
			iso_code: 'ARM',
			unsd_code: '051',
			is_enabled: false
		},
		{
			iso_code: 'ABW',
			unsd_code: '533',
			is_enabled: false
		},
		{
			iso_code: 'ALA',
			unsd_code: '248',
			is_enabled: false
		},
		{
			iso_code: 'AUS',
			unsd_code: '036',
			is_enabled: false
		},
		{
			iso_code: 'AUT',
			unsd_code: '040',
			is_enabled: false
		},
		{
			iso_code: 'AZE',
			unsd_code: '031',
			is_enabled: false
		},
		{
			iso_code: 'BHS',
			unsd_code: '044',
			is_enabled: false
		},
		{
			iso_code: 'BHR',
			unsd_code: '048',
			is_enabled: false
		},
		{
			iso_code: 'BGD',
			unsd_code: '050',
			is_enabled: false
		},
		{
			iso_code: 'BRB',
			unsd_code: '052',
			is_enabled: false
		},
		{
			iso_code: 'BLR',
			unsd_code: '112',
			is_enabled: false
		},
		{
			iso_code: 'BEL',
			unsd_code: '056',
			is_enabled: false
		},
		{
			iso_code: 'BLX',
			unsd_code: '058',
			is_enabled: false
		},
		{
			iso_code: 'BLZ',
			unsd_code: '084',
			is_enabled: false
		},
		{
			iso_code: 'BEN',
			unsd_code: '204',
			is_enabled: false
		},
		{
			iso_code: 'BES',
			unsd_code: '535',
			is_enabled: false
		},
		{
			iso_code: 'BLM',
			unsd_code: '652',
			is_enabled: false
		},
		{
			iso_code: 'BMU',
			unsd_code: '060',
			is_enabled: false
		},
		{
			iso_code: 'BTN',
			unsd_code: '064',
			is_enabled: false
		},
		{
			iso_code: 'BVT',
			unsd_code: '074',
			is_enabled: false
		},
		{
			iso_code: 'BOL',
			unsd_code: '068',
			is_enabled: false
		},
		{
			iso_code: 'BIH',
			unsd_code: '070',
			is_enabled: false
		},
		{
			iso_code: 'BWA',
			unsd_code: '072',
			is_enabled: false
		},
		{
			iso_code: 'BAT',
			unsd_code: '080',
			is_enabled: false
		},
		{
			iso_code: 'BRA',
			unsd_code: '076',
			is_enabled: false
		},
		{
			iso_code: 'IOT',
			unsd_code: '086',
			is_enabled: false
		},
		{
			iso_code: 'VGB',
			unsd_code: '092',
			is_enabled: false
		},
		{
			iso_code: 'BRN',
			unsd_code: '096',
			is_enabled: false
		},
		{
			iso_code: 'BGR',
			unsd_code: '100',
			is_enabled: false
		},
		{
			iso_code: 'BFA',
			unsd_code: '854',
			is_enabled: false
		},
		{
			iso_code: 'BDI',
			unsd_code: '108',
			is_enabled: false
		},
		{
			iso_code: 'KHM',
			unsd_code: '116',
			is_enabled: false
		},
		{
			iso_code: 'CMR',
			unsd_code: '120',
			is_enabled: false
		},
		{
			iso_code: 'CAN',
			unsd_code: '124',
			is_enabled: false
		},
		{
			iso_code: 'CPV',
			unsd_code: '132',
			is_enabled: false
		},
		{
			iso_code: 'CYM',
			unsd_code: '136',
			is_enabled: false
		},
		{
			iso_code: 'CAF',
			unsd_code: '140',
			is_enabled: false
		},
		{
			iso_code: 'TCD',
			unsd_code: '148',
			is_enabled: false
		},
		{
			iso_code: 'CHL',
			unsd_code: '152',
			is_enabled: false
		},
		{
			iso_code: 'CHN',
			unsd_code: '156',
			is_enabled: false
		},
		{
			iso_code: 'CXR',
			unsd_code: '162',
			is_enabled: false
		},
		{
			iso_code: 'CCK',
			unsd_code: '166',
			is_enabled: false
		},
		{
			iso_code: 'COL',
			unsd_code: '170',
			is_enabled: false
		},
		{
			iso_code: 'COM',
			unsd_code: '174',
			is_enabled: false
		},
		{
			iso_code: 'ZAR',
			unsd_code: '180',
			is_enabled: false
		},
		{
			iso_code: 'COG',
			unsd_code: '178',
			is_enabled: false
		},
		{
			iso_code: 'COK',
			unsd_code: '184',
			is_enabled: false
		},
		{
			iso_code: 'CRI',
			unsd_code: '188',
			is_enabled: false
		},
		{
			iso_code: 'CIV',
			unsd_code: '384',
			is_enabled: false
		},
		{
			iso_code: 'HRV',
			unsd_code: '191',
			is_enabled: false
		},
		{
			iso_code: 'CUB',
			unsd_code: '192',
			is_enabled: false
		},
		{
			iso_code: 'CUW',
			unsd_code: '531',
			is_enabled: false
		},
		{
			iso_code: 'CYP',
			unsd_code: '196',
			is_enabled: false
		},
		{
			iso_code: 'CZE',
			unsd_code: '203',
			is_enabled: false
		},
		{
			iso_code: 'CSK',
			unsd_code: '200',
			is_enabled: false
		},
		{
			iso_code: 'DNK',
			unsd_code: '208',
			is_enabled: false
		},
		{
			iso_code: 'DJI',
			unsd_code: '262',
			is_enabled: false
		},
		{
			iso_code: 'DMA',
			unsd_code: '212',
			is_enabled: false
		},
		{
			iso_code: 'DOM',
			unsd_code: '214',
			is_enabled: false
		},
		{
			iso_code: 'TMP',
			unsd_code: '626',
			is_enabled: false
		},
		{
			iso_code: 'ECU',
			unsd_code: '218',
			is_enabled: false
		},
		{
			iso_code: 'EGY',
			unsd_code: '818',
			is_enabled: false
		},
		{
			iso_code: 'SLV',
			unsd_code: '222',
			is_enabled: false
		},
		{
			iso_code: 'GNQ',
			unsd_code: '226',
			is_enabled: false
		},
		{
			iso_code: 'ERI',
			unsd_code: '232',
			is_enabled: false
		},
		{
			iso_code: 'EST',
			unsd_code: '233',
			is_enabled: false
		},
		{
			iso_code: 'ETH',
			unsd_code: '231',
			is_enabled: false
		},
		{
			iso_code: 'ETF',
			unsd_code: '230',
			is_enabled: false
		},
		{
			iso_code: 'EUN',
			unsd_code: '918',
			is_enabled: false
		},
		{
			iso_code: 'FRO',
			unsd_code: '234',
			is_enabled: false
		},
		{
			iso_code: 'FLK',
			unsd_code: '238',
			is_enabled: false
		},
		{
			iso_code: 'FJI',
			unsd_code: '242',
			is_enabled: false
		},
		{
			iso_code: 'FIN',
			unsd_code: '246',
			is_enabled: false
		},
		{
			iso_code: 'PCZ',
			unsd_code: '592',
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
			is_enabled: false
		},
		{
			iso_code: 'VDR',
			unsd_code: '868',
			is_enabled: false
		},
		{
			iso_code: 'SVR',
			unsd_code: '866',
			is_enabled: false
		},
		{
			iso_code: 'ZPM',
			unsd_code: '836',
			is_enabled: false
		},
		{
			iso_code: 'ATF',
			unsd_code: '260',
			is_enabled: false
		},
		{
			iso_code: 'FRA',
			unsd_code: '250',
			is_enabled: false
		},
		{
			iso_code: 'FRE',
			unsd_code: '838',
			is_enabled: false
		},
		{
			iso_code: 'GUF',
			unsd_code: '254',
			is_enabled: false
		},
		{
			iso_code: 'PYF',
			unsd_code: '258',
			is_enabled: false
		},
		{
			iso_code: 'GAB',
			unsd_code: '266',
			is_enabled: false
		},
		{
			iso_code: 'GMB',
			unsd_code: '270',
			is_enabled: false
		},
		{
			iso_code: 'GAZ',
			unsd_code: '274',
			is_enabled: false
		},
		{
			iso_code: 'GEO',
			unsd_code: '268',
			is_enabled: false
		},
		{
			iso_code: 'DDR',
			unsd_code: '278',
			is_enabled: false
		},
		{
			iso_code: 'DEU',
			unsd_code: '276',
			is_enabled: false
		},
		{
			iso_code: 'GHA',
			unsd_code: '288',
			is_enabled: false
		},
		{
			iso_code: 'GIB',
			unsd_code: '292',
			is_enabled: false
		},
		{
			iso_code: 'GRC',
			unsd_code: '300',
			is_enabled: false
		},
		{
			iso_code: 'GRL',
			unsd_code: '304',
			is_enabled: false
		},
		{
			iso_code: 'GRD',
			unsd_code: '308',
			is_enabled: false
		},
		{
			iso_code: 'GLP',
			unsd_code: '312',
			is_enabled: false
		},
		{
			iso_code: 'GUM',
			unsd_code: '316',
			is_enabled: false
		},
		{
			iso_code: 'GTM',
			unsd_code: '320',
			is_enabled: false
		},
		{
			iso_code: 'GIN',
			unsd_code: '324',
			is_enabled: false
		},
		{
			iso_code: 'GNB',
			unsd_code: '624',
			is_enabled: false
		},
		{
			iso_code: 'GUY',
			unsd_code: '328',
			is_enabled: false
		},
		{
			iso_code: 'HTI',
			unsd_code: '332',
			is_enabled: false
		},
		{
			iso_code: 'VAT',
			unsd_code: '336',
			is_enabled: false
		},
		{
			iso_code: 'HND',
			unsd_code: '340',
			is_enabled: false
		},
		{
			iso_code: 'HKG',
			unsd_code: '344',
			is_enabled: false
		},
		{
			iso_code: 'HMD',
			unsd_code: '334',
			is_enabled: false
		},
		{
			iso_code: 'HUN',
			unsd_code: '348',
			is_enabled: false
		},
		{
			iso_code: 'ISL',
			unsd_code: '352',
			is_enabled: false
		},
		{
			iso_code: 'IND',
			unsd_code: '356',
			is_enabled: true
		},
		{
			iso_code: 'IDN',
			unsd_code: '360',
			is_enabled: false
		},
		{
			iso_code: 'IRN',
			unsd_code: '364',
			is_enabled: false
		},
		{
			iso_code: 'IRQ',
			unsd_code: '368',
			is_enabled: false
		},
		{
			iso_code: 'IRL',
			unsd_code: '372',
			is_enabled: false
		},
		{
			iso_code: 'IMN',
			unsd_code: '833',
			is_enabled: false
		},
		{
			iso_code: 'ISR',
			unsd_code: '376',
			is_enabled: false
		},
		{
			iso_code: 'ITA',
			unsd_code: '380',
			is_enabled: false
		},
		{
			iso_code: 'JAM',
			unsd_code: '388',
			is_enabled: false
		},
		{
			iso_code: 'JEY',
			unsd_code: '832',
			is_enabled: false
		},
		{
			iso_code: 'JPN',
			unsd_code: '392',
			is_enabled: false
		},
		{
			iso_code: 'JTN',
			unsd_code: '396',
			is_enabled: false
		},
		{
			iso_code: 'JOR',
			unsd_code: '400',
			is_enabled: false
		},
		{
			iso_code: 'KAZ',
			unsd_code: '398',
			is_enabled: false
		},
		{
			iso_code: 'KEN',
			unsd_code: '404',
			is_enabled: false
		},
		{
			iso_code: 'KIR',
			unsd_code: '296',
			is_enabled: false
		},
		{
			iso_code: 'PRK',
			unsd_code: '408',
			is_enabled: false
		},
		{
			iso_code: 'KOR',
			unsd_code: '410',
			is_enabled: false
		},
		{
			iso_code: 'KWT',
			unsd_code: '414',
			is_enabled: false
		},
		{
			iso_code: 'KGZ',
			unsd_code: '417',
			is_enabled: false
		},
		{
			iso_code: 'LAO',
			unsd_code: '418',
			is_enabled: false
		},
		{
			iso_code: 'LVA',
			unsd_code: '428',
			is_enabled: false
		},
		{
			iso_code: 'LBN',
			unsd_code: '422',
			is_enabled: false
		},
		{
			iso_code: 'LSO',
			unsd_code: '426',
			is_enabled: false
		},
		{
			iso_code: 'LBR',
			unsd_code: '430',
			is_enabled: false
		},
		{
			iso_code: 'LBY',
			unsd_code: '434',
			is_enabled: false
		},
		{
			iso_code: 'LIE',
			unsd_code: '438',
			is_enabled: false
		},
		{
			iso_code: 'LTU',
			unsd_code: '440',
			is_enabled: false
		},
		{
			iso_code: 'LUX',
			unsd_code: '442',
			is_enabled: false
		},
		{
			iso_code: 'MAC',
			unsd_code: '446',
			is_enabled: false
		},
		{
			iso_code: 'MKD',
			unsd_code: '807',
			is_enabled: false
		},
		{
			iso_code: 'MDG',
			unsd_code: '450',
			is_enabled: false
		},
		{
			iso_code: 'MWI',
			unsd_code: '454',
			is_enabled: false
		},
		{
			iso_code: 'MYS',
			unsd_code: '458',
			is_enabled: false
		},
		{
			iso_code: 'MDV',
			unsd_code: '462',
			is_enabled: false
		},
		{
			iso_code: 'MLI',
			unsd_code: '466',
			is_enabled: false
		},
		{
			iso_code: 'MLT',
			unsd_code: '470',
			is_enabled: false
		},
		{
			iso_code: 'MHL',
			unsd_code: '584',
			is_enabled: false
		},
		{
			iso_code: 'MTQ',
			unsd_code: '474',
			is_enabled: false
		},
		{
			iso_code: 'MRT',
			unsd_code: '478',
			is_enabled: false
		},
		{
			iso_code: 'MUS',
			unsd_code: '480',
			is_enabled: false
		},
		{
			iso_code: 'MEX',
			unsd_code: '484',
			is_enabled: false
		},
		{
			iso_code: 'FSM',
			unsd_code: '583',
			is_enabled: false
		},
		{
			iso_code: 'MID',
			unsd_code: '488',
			is_enabled: false
		},
		{
			iso_code: 'MDA',
			unsd_code: '498',
			is_enabled: false
		},
		{
			iso_code: 'MAF',
			unsd_code: '663',
			is_enabled: false
		},
		{
			iso_code: 'MCO',
			unsd_code: '492',
			is_enabled: false
		},
		{
			iso_code: 'MNE',
			unsd_code: '499',
			is_enabled: false
		},
		{
			iso_code: 'MNG',
			unsd_code: '496',
			is_enabled: false
		},
		{
			iso_code: 'MSR',
			unsd_code: '500',
			is_enabled: false
		},
		{
			iso_code: 'MAR',
			unsd_code: '504',
			is_enabled: false
		},
		{
			iso_code: 'MOZ',
			unsd_code: '508',
			is_enabled: false
		},
		{
			iso_code: 'MMR',
			unsd_code: '104',
			is_enabled: false
		},
		{
			iso_code: 'MYT',
			unsd_code: '175',
			is_enabled: false
		},
		{
			iso_code: 'NAM',
			unsd_code: '516',
			is_enabled: false
		},
		{
			iso_code: 'NRU',
			unsd_code: '520',
			is_enabled: false
		},
		{
			iso_code: 'NPL',
			unsd_code: '524',
			is_enabled: false
		},
		{
			iso_code: 'NLD',
			unsd_code: '528',
			is_enabled: false
		},
		{
			iso_code: 'ANT',
			unsd_code: '530',
			is_enabled: false
		},
		{
			iso_code: 'NZE',
			unsd_code: '536',
			is_enabled: false
		},
		{
			iso_code: 'NCL',
			unsd_code: '540',
			is_enabled: false
		},
		{
			iso_code: 'NZL',
			unsd_code: '554',
			is_enabled: false
		},
		{
			iso_code: 'NIC',
			unsd_code: '558',
			is_enabled: false
		},
		{
			iso_code: 'NER',
			unsd_code: '562',
			is_enabled: false
		},
		{
			iso_code: 'NGA',
			unsd_code: '566',
			is_enabled: false
		},
		{
			iso_code: 'NIU',
			unsd_code: '570',
			is_enabled: false
		},
		{
			iso_code: 'NFK',
			unsd_code: '574',
			is_enabled: false
		},
		{
			iso_code: 'MNP',
			unsd_code: '580',
			is_enabled: false
		},
		{
			iso_code: 'NOR',
			unsd_code: '578',
			is_enabled: false
		},
		{
			iso_code: 'OMN',
			unsd_code: '512',
			is_enabled: false
		},
		{
			iso_code: 'PCE',
			unsd_code: '582',
			is_enabled: false
		},
		{
			iso_code: 'PAK',
			unsd_code: '586',
			is_enabled: false
		},
		{
			iso_code: 'PLW',
			unsd_code: '585',
			is_enabled: false
		},
		{
			iso_code: 'PAN',
			unsd_code: '591',
			is_enabled: false
		},
		{
			iso_code: 'PNG',
			unsd_code: '598',
			is_enabled: false
		},
		{
			iso_code: 'PRY',
			unsd_code: '600',
			is_enabled: false
		},
		{
			iso_code: 'PSE',
			unsd_code: '275',
			is_enabled: false
		},
		{
			iso_code: 'PMY',
			unsd_code: '459',
			is_enabled: false
		},
		{
			iso_code: 'PER',
			unsd_code: '604',
			is_enabled: false
		},
		{
			iso_code: 'PHL',
			unsd_code: '608',
			is_enabled: false
		},
		{
			iso_code: 'PCN',
			unsd_code: '612',
			is_enabled: false
		},
		{
			iso_code: 'POL',
			unsd_code: '616',
			is_enabled: false
		},
		{
			iso_code: 'PRT',
			unsd_code: '620',
			is_enabled: false
		},
		{
			iso_code: 'PRI',
			unsd_code: '630',
			is_enabled: false
		},
		{
			iso_code: 'QAT',
			unsd_code: '634',
			is_enabled: false
		},
		{
			iso_code: 'REU',
			unsd_code: '638',
			is_enabled: false
		},
		{
			iso_code: 'ROM',
			unsd_code: '642',
			is_enabled: false
		},
		{
			iso_code: 'ROU',
			unsd_code: '642',
			is_enabled: false
		},
		{
			iso_code: 'RUS',
			unsd_code: '643',
			is_enabled: false
		},
		{
			iso_code: 'RWA',
			unsd_code: '646',
			is_enabled: false
		},
		{
			iso_code: 'RYU',
			unsd_code: '647',
			is_enabled: false
		},
		{
			iso_code: 'SBH',
			unsd_code: '461',
			is_enabled: false
		},
		{
			iso_code: 'SHN',
			unsd_code: '654',
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
			is_enabled: false
		},
		{
			iso_code: 'WSM',
			unsd_code: '882',
			is_enabled: false
		},
		{
			iso_code: 'SMR',
			unsd_code: '674',
			is_enabled: false
		},
		{
			iso_code: 'STP',
			unsd_code: '678',
			is_enabled: false
		},
		{
			iso_code: 'SWK',
			unsd_code: '457',
			is_enabled: false
		},
		{
			iso_code: 'SAU',
			unsd_code: '682',
			is_enabled: false
		},
		{
			iso_code: 'SEN',
			unsd_code: '686',
			is_enabled: false
		},
		{
			iso_code: 'SGS',
			unsd_code: '239',
			is_enabled: false
		},
		{
			iso_code: 'SYC',
			unsd_code: '690',
			is_enabled: false
		},
		{
			iso_code: 'SLE',
			unsd_code: '694',
			is_enabled: false
		},
		{
			iso_code: 'SIK',
			unsd_code: '698',
			is_enabled: false
		},
		{
			iso_code: 'SGP',
			unsd_code: '702',
			is_enabled: false
		},
		{
			iso_code: 'SVK',
			unsd_code: '703',
			is_enabled: false
		},
		{
			iso_code: 'SVN',
			unsd_code: '705',
			is_enabled: false
		},
		{
			iso_code: 'SLB',
			unsd_code: '090',
			is_enabled: false
		},
		{
			iso_code: 'SOM',
			unsd_code: '706',
			is_enabled: false
		},
		{
			iso_code: 'SRB',
			unsd_code: '688',
			is_enabled: false
		},
		{
			iso_code: 'SSD',
			unsd_code: '728',
			is_enabled: false
		},
		{
			iso_code: 'ZAF',
			unsd_code: '710',
			is_enabled: false
		},
		{
			iso_code: 'SVU',
			unsd_code: '810',
			is_enabled: false
		},
		{
			iso_code: 'ESP',
			unsd_code: '724',
			is_enabled: false
		},
		{
			iso_code: 'SPE',
			unsd_code: '839',
			is_enabled: false
		},
		{
			iso_code: 'LKA',
			unsd_code: '144',
			is_enabled: false
		},
		{
			iso_code: 'KNA',
			unsd_code: '659',
			is_enabled: false
		},
		{
			iso_code: 'LCA',
			unsd_code: '662',
			is_enabled: false
		},
		{
			iso_code: 'VCT',
			unsd_code: '670',
			is_enabled: false
		},
		{
			iso_code: 'SDN',
			unsd_code: '736',
			is_enabled: false
		},
		{
			iso_code: 'SUR',
			unsd_code: '740',
			is_enabled: false
		},
		{
			iso_code: 'SJM',
			unsd_code: '744',
			is_enabled: false
		},
		{
			iso_code: 'SWZ',
			unsd_code: '748',
			is_enabled: false
		},
		{
			iso_code: 'SXM',
			unsd_code: '534',
			is_enabled: false
		},
		{
			iso_code: 'SWE',
			unsd_code: '752',
			is_enabled: false
		},
		{
			iso_code: 'CHE',
			unsd_code: '756',
			is_enabled: false
		},
		{
			iso_code: 'SYR',
			unsd_code: '760',
			is_enabled: false
		},
		{
			iso_code: 'TWN',
			unsd_code: '158',
			is_enabled: false
		},
		{
			iso_code: 'TJK',
			unsd_code: '762',
			is_enabled: false
		},
		{
			iso_code: 'TZA',
			unsd_code: '834',
			is_enabled: false
		},
		{
			iso_code: 'THA',
			unsd_code: '764',
			is_enabled: false
		},
		{
			iso_code: 'TGO',
			unsd_code: '768',
			is_enabled: false
		},
		{
			iso_code: 'TKL',
			unsd_code: '772',
			is_enabled: false
		},
		{
			iso_code: 'TON',
			unsd_code: '776',
			is_enabled: false
		},
		{
			iso_code: 'TTO',
			unsd_code: '780',
			is_enabled: false
		},
		{
			iso_code: 'TUN',
			unsd_code: '788',
			is_enabled: false
		},
		{
			iso_code: 'TUR',
			unsd_code: '792',
			is_enabled: false
		},
		{
			iso_code: 'TKM',
			unsd_code: '795',
			is_enabled: false
		},
		{
			iso_code: 'TLS',
			unsd_code: '626',
			is_enabled: false
		},
		{
			iso_code: 'TCA',
			unsd_code: '796',
			is_enabled: false
		},
		{
			iso_code: 'TUV',
			unsd_code: '798',
			is_enabled: false
		},
		{
			iso_code: 'UGA',
			unsd_code: '800',
			is_enabled: false
		},
		{
			iso_code: 'UKR',
			unsd_code: '804',
			is_enabled: false
		},
		{
			iso_code: 'UMI',
			unsd_code: '581',
			is_enabled: false
		},
		{
			iso_code: 'ARE',
			unsd_code: '784',
			is_enabled: false
		},
		{
			iso_code: 'GBR',
			unsd_code: '826',
			is_enabled: false
		},
		{
			iso_code: 'GGY',
			unsd_code: '831',
			is_enabled: false
		},
		{
			iso_code: 'USA',
			unsd_code: '840',
			is_enabled: false
		},
		{
			iso_code: 'UNS',
			unsd_code: '898',
			is_enabled: false
		},
		{
			iso_code: 'URY',
			unsd_code: '858',
			is_enabled: false
		},
		{
			iso_code: 'USP',
			unsd_code: '849',
			is_enabled: false
		},
		{
			iso_code: 'UZB',
			unsd_code: '860',
			is_enabled: false
		},
		{
			iso_code: 'VUT',
			unsd_code: '548',
			is_enabled: false
		},
		{
			iso_code: 'VEN',
			unsd_code: '862',
			is_enabled: false
		},
		{
			iso_code: 'VNM',
			unsd_code: '704',
			is_enabled: false
		},
		{
			iso_code: 'VIR',
			unsd_code: '850',
			is_enabled: false
		},
		{
			iso_code: 'WAK',
			unsd_code: '872',
			is_enabled: false
		},
		{
			iso_code: 'WLF',
			unsd_code: '876',
			is_enabled: false
		},
		{
			iso_code: 'ESH',
			unsd_code: '732',
			is_enabled: false
		},
		{
			iso_code: 'WLD',
			unsd_code: '000',
			is_enabled: false
		},
		{
			iso_code: 'YDR',
			unsd_code: '720',
			is_enabled: false
		},
		{
			iso_code: 'YEM',
			unsd_code: '887',
			is_enabled: false
		},
		{
			iso_code: 'SER',
			unsd_code: '891',
			is_enabled: false
		},
		// WITS truncates this name in its table; expand the abbreviation for clarity
		{
			iso_code: 'YUG',
			unsd_code: '890',
			is_enabled: false
		},
		{
			iso_code: 'ZMB',
			unsd_code: '894',
			is_enabled: false
		},
		{
			iso_code: 'ZWE',
			unsd_code: '716',
			is_enabled: false
		}
	]);
};
