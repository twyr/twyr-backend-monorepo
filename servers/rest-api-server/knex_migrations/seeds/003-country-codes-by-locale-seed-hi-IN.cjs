/* eslint-disable security/detect-object-injection */
/**
 * Static seed for country_code_by_locale with hi-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * country names for the hi-IN locale.
			country_name: 'हाँग काँग'
 * This seed depends on:
 * - 001-country-codes-seed.cjs (populates country_code_master)
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 003-country-codes-by-locale-seed-hi-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM country_code_by_locale WHERE locale_id = 'hi-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for hi-IN locale
	const rows = [
		{ iso_code: 'AND', locale_id: 'hi-IN', country_name: 'एंडोरा' },
		{
			iso_code: 'ARE',
			locale_id: 'hi-IN',
			country_name: 'संयुक्त अरब अमीरात'
		},
		{ iso_code: 'AFG', locale_id: 'hi-IN', country_name: 'अफ़गानिस्तान' },
		{
			iso_code: 'ATG',
			locale_id: 'hi-IN',
			country_name: 'एंटिगुआ और बरबुडा'
		},
		{ iso_code: 'AIA', locale_id: 'hi-IN', country_name: 'एंग्विला' },
		{ iso_code: 'ALB', locale_id: 'hi-IN', country_name: 'अल्बानिया' },
		{ iso_code: 'ARM', locale_id: 'hi-IN', country_name: 'आर्मेनिया' },
		{ iso_code: 'AGO', locale_id: 'hi-IN', country_name: 'अंगोला' },
		{ iso_code: 'ATA', locale_id: 'hi-IN', country_name: 'अंटार्कटिका' },
		{ iso_code: 'ARG', locale_id: 'hi-IN', country_name: 'अर्जेंटीना' },
		{ iso_code: 'ASM', locale_id: 'hi-IN', country_name: 'अमेरिकी समोआ' },
		{ iso_code: 'AUT', locale_id: 'hi-IN', country_name: 'ऑस्ट्रिया' },
		{ iso_code: 'AUS', locale_id: 'hi-IN', country_name: 'ऑस्ट्रेलिया' },
		{ iso_code: 'ABW', locale_id: 'hi-IN', country_name: 'अरूबा' },
		{
			iso_code: 'ALA',
			locale_id: 'hi-IN',
			country_name: 'एलैंड द्वीपसमूह'
		},
		{ iso_code: 'AZE', locale_id: 'hi-IN', country_name: 'अज़रबैजान' },
		{
			iso_code: 'BIH',
			locale_id: 'hi-IN',
			country_name: 'बोस्निया और हर्ज़ेगोविना'
		},
		{ iso_code: 'BRB', locale_id: 'hi-IN', country_name: 'बारबाडोस' },
		{ iso_code: 'BGD', locale_id: 'hi-IN', country_name: 'बांग्लादेश' },
		{ iso_code: 'BEL', locale_id: 'hi-IN', country_name: 'बेल्जियम' },
		{ iso_code: 'BFA', locale_id: 'hi-IN', country_name: 'बुर्किना फ़ासो' },
		{ iso_code: 'BGR', locale_id: 'hi-IN', country_name: 'बुल्गारिया' },
		{ iso_code: 'BHR', locale_id: 'hi-IN', country_name: 'बहरीन' },
		{ iso_code: 'BDI', locale_id: 'hi-IN', country_name: 'बुरुंडी' },
		{ iso_code: 'BEN', locale_id: 'hi-IN', country_name: 'बेनिन' },
		{
			iso_code: 'BLM',
			locale_id: 'hi-IN',
			country_name: 'सेंट बार्थेलेमी'
		},
		{ iso_code: 'BMU', locale_id: 'hi-IN', country_name: 'बरमूडा' },
		{ iso_code: 'BRN', locale_id: 'hi-IN', country_name: 'ब्रूनेई' },
		{ iso_code: 'BOL', locale_id: 'hi-IN', country_name: 'बोलीविया' },
		{
			iso_code: 'BES',
			locale_id: 'hi-IN',
			country_name: 'कैरिबियन नीदरलैंड'
		},
		{ iso_code: 'BRA', locale_id: 'hi-IN', country_name: 'ब्राज़ील' },
		{ iso_code: 'BHS', locale_id: 'hi-IN', country_name: 'बहामास' },
		{ iso_code: 'BTN', locale_id: 'hi-IN', country_name: 'भूटान' },
		{ iso_code: 'BVT', locale_id: 'hi-IN', country_name: 'बोवेत द्वीप' },
		{ iso_code: 'BWA', locale_id: 'hi-IN', country_name: 'बोत्स्वाना' },
		{ iso_code: 'BLR', locale_id: 'hi-IN', country_name: 'बेलारूस' },
		{ iso_code: 'BLZ', locale_id: 'hi-IN', country_name: 'बेलीज़' },
		{ iso_code: 'CAN', locale_id: 'hi-IN', country_name: 'कनाडा' },
		{
			iso_code: 'CCK',
			locale_id: 'hi-IN',
			country_name: 'कोकोस (कीलिंग) द्वीपसमूह'
		},
		{
			iso_code: 'ZAR',
			locale_id: 'hi-IN',
			country_name: 'कांगो - किंशासा'
		},
		{
			iso_code: 'CAF',
			locale_id: 'hi-IN',
			country_name: 'मध्य अफ़्रीकी गणराज्य'
		},
		{
			iso_code: 'COG',
			locale_id: 'hi-IN',
			country_name: 'कांगो – ब्राज़ाविल'
		},
		{ iso_code: 'CHE', locale_id: 'hi-IN', country_name: 'स्विट्ज़रलैंड' },
		{ iso_code: 'CIV', locale_id: 'hi-IN', country_name: 'कोत दिवुआर' },
		{ iso_code: 'COK', locale_id: 'hi-IN', country_name: 'कुक द्वीपसमूह' },
		{ iso_code: 'CHL', locale_id: 'hi-IN', country_name: 'चिली' },
		{ iso_code: 'CMR', locale_id: 'hi-IN', country_name: 'कैमरून' },
		{ iso_code: 'CHN', locale_id: 'hi-IN', country_name: 'चीन' },
		{ iso_code: 'COL', locale_id: 'hi-IN', country_name: 'कोलंबिया' },
		{ iso_code: 'CRI', locale_id: 'hi-IN', country_name: 'कोस्टारिका' },
		{ iso_code: 'CUB', locale_id: 'hi-IN', country_name: 'क्यूबा' },
		{ iso_code: 'CPV', locale_id: 'hi-IN', country_name: 'केप वर्ड' },
		{ iso_code: 'CUW', locale_id: 'hi-IN', country_name: 'कुरासाओ' },
		{ iso_code: 'CXR', locale_id: 'hi-IN', country_name: 'क्रिसमस द्वीप' },
		{ iso_code: 'CYP', locale_id: 'hi-IN', country_name: 'साइप्रस' },
		{ iso_code: 'CZE', locale_id: 'hi-IN', country_name: 'चेकिया' },
		{ iso_code: 'DEU', locale_id: 'hi-IN', country_name: 'जर्मनी' },
		{ iso_code: 'DJI', locale_id: 'hi-IN', country_name: 'जिबूती' },
		{ iso_code: 'DNK', locale_id: 'hi-IN', country_name: 'डेनमार्क' },
		{ iso_code: 'DMA', locale_id: 'hi-IN', country_name: 'डोमिनिका' },
		{
			iso_code: 'DOM',
			locale_id: 'hi-IN',
			country_name: 'डोमिनिकन गणराज्य'
		},
		{ iso_code: 'DZA', locale_id: 'hi-IN', country_name: 'अल्जीरिया' },
		{ iso_code: 'ECU', locale_id: 'hi-IN', country_name: 'इक्वाडोर' },
		{ iso_code: 'EST', locale_id: 'hi-IN', country_name: 'एस्टोनिया' },
		{ iso_code: 'EGY', locale_id: 'hi-IN', country_name: 'मिस्र' },
		{ iso_code: 'ESH', locale_id: 'hi-IN', country_name: 'पश्चिमी सहारा' },
		{ iso_code: 'ERI', locale_id: 'hi-IN', country_name: 'इरिट्रिया' },
		{ iso_code: 'ESP', locale_id: 'hi-IN', country_name: 'स्पेन' },
		{ iso_code: 'ETH', locale_id: 'hi-IN', country_name: 'इथियोपिया' },
		{ iso_code: 'FIN', locale_id: 'hi-IN', country_name: 'फ़िनलैंड' },
		{ iso_code: 'FJI', locale_id: 'hi-IN', country_name: 'फ़िजी' },
		{
			iso_code: 'FLK',
			locale_id: 'hi-IN',
			country_name: 'फ़ॉकलैंड द्वीपसमूह'
		},
		{ iso_code: 'FSM', locale_id: 'hi-IN', country_name: 'माइक्रोनेशिया' },
		{
			iso_code: 'FRO',
			locale_id: 'hi-IN',
			country_name: 'फ़ेरो द्वीपसमूह'
		},
		{ iso_code: 'FRA', locale_id: 'hi-IN', country_name: 'फ़्रांस' },
		{ iso_code: 'GAB', locale_id: 'hi-IN', country_name: 'गैबॉन' },
		{
			iso_code: 'GBR',
			locale_id: 'hi-IN',
			country_name: 'यूनाइटेड किंगडम'
		},
		{ iso_code: 'GRD', locale_id: 'hi-IN', country_name: 'ग्रेनाडा' },
		{ iso_code: 'GEO', locale_id: 'hi-IN', country_name: 'जॉर्जिया' },
		{ iso_code: 'GUF', locale_id: 'hi-IN', country_name: 'फ़्रेंच गुयाना' },
		{ iso_code: 'GGY', locale_id: 'hi-IN', country_name: 'गर्नसी' },
		{ iso_code: 'GHA', locale_id: 'hi-IN', country_name: 'घाना' },
		{ iso_code: 'GIB', locale_id: 'hi-IN', country_name: 'जिब्राल्टर' },
		{ iso_code: 'GRL', locale_id: 'hi-IN', country_name: 'ग्रीनलैंड' },
		{ iso_code: 'GMB', locale_id: 'hi-IN', country_name: 'गाम्बिया' },
		{ iso_code: 'GIN', locale_id: 'hi-IN', country_name: 'गिनी' },
		{ iso_code: 'GLP', locale_id: 'hi-IN', country_name: 'ग्वाडेलूप' },
		{
			iso_code: 'GNQ',
			locale_id: 'hi-IN',
			country_name: 'इक्वेटोरियल गिनी'
		},
		{ iso_code: 'GRC', locale_id: 'hi-IN', country_name: 'यूनान' },
		{
			iso_code: 'SGS',
			locale_id: 'hi-IN',
			country_name: 'दक्षिण जॉर्जिया और दक्षिण सैंडविच द्वीपसमूह'
		},
		{ iso_code: 'GTM', locale_id: 'hi-IN', country_name: 'ग्वाटेमाला' },
		{ iso_code: 'GUM', locale_id: 'hi-IN', country_name: 'गुआम' },
		{ iso_code: 'GNB', locale_id: 'hi-IN', country_name: 'गिनी-बिसाउ' },
		{ iso_code: 'GUY', locale_id: 'hi-IN', country_name: 'गुयाना' },
		{
			iso_code: 'HKG',
			locale_id: 'hi-IN',
			country_name: 'हाँग काँग'
		},
		{
			iso_code: 'HMD',
			locale_id: 'hi-IN',
			country_name: 'हर्ड द्वीप और मैकडोनॉल्ड द्वीपसमूह'
		},
		{ iso_code: 'HND', locale_id: 'hi-IN', country_name: 'होंडूरास' },
		{ iso_code: 'HRV', locale_id: 'hi-IN', country_name: 'क्रोएशिया' },
		{ iso_code: 'HTI', locale_id: 'hi-IN', country_name: 'हैती' },
		{ iso_code: 'HUN', locale_id: 'hi-IN', country_name: 'हंगरी' },
		{ iso_code: 'IDN', locale_id: 'hi-IN', country_name: 'इंडोनेशिया' },
		{ iso_code: 'IRL', locale_id: 'hi-IN', country_name: 'आयरलैंड' },
		{ iso_code: 'ISR', locale_id: 'hi-IN', country_name: 'इज़राइल' },
		{ iso_code: 'IMN', locale_id: 'hi-IN', country_name: 'आइल ऑफ़ मैन' },
		{ iso_code: 'IND', locale_id: 'hi-IN', country_name: 'भारत' },
		{
			iso_code: 'IOT',
			locale_id: 'hi-IN',
			country_name: 'ब्रिटिश हिंद महासागरीय क्षेत्र'
		},
		{ iso_code: 'IRQ', locale_id: 'hi-IN', country_name: 'इराक' },
		{ iso_code: 'IRN', locale_id: 'hi-IN', country_name: 'ईरान' },
		{ iso_code: 'ISL', locale_id: 'hi-IN', country_name: 'आइसलैंड' },
		{ iso_code: 'ITA', locale_id: 'hi-IN', country_name: 'इटली' },
		{ iso_code: 'JEY', locale_id: 'hi-IN', country_name: 'जर्सी' },
		{ iso_code: 'JAM', locale_id: 'hi-IN', country_name: 'जमैका' },
		{ iso_code: 'JOR', locale_id: 'hi-IN', country_name: 'जॉर्डन' },
		{ iso_code: 'JPN', locale_id: 'hi-IN', country_name: 'जापान' },
		{ iso_code: 'KEN', locale_id: 'hi-IN', country_name: 'केन्या' },
		{ iso_code: 'KGZ', locale_id: 'hi-IN', country_name: 'किर्गिज़स्तान' },
		{ iso_code: 'KHM', locale_id: 'hi-IN', country_name: 'कंबोडिया' },
		{ iso_code: 'KIR', locale_id: 'hi-IN', country_name: 'किरिबाती' },
		{ iso_code: 'COM', locale_id: 'hi-IN', country_name: 'कोमोरोस' },
		{
			iso_code: 'KNA',
			locale_id: 'hi-IN',
			country_name: 'सेंट किट्स और नेविस'
		},
		{ iso_code: 'PRK', locale_id: 'hi-IN', country_name: 'उत्तर कोरिया' },
		{ iso_code: 'KOR', locale_id: 'hi-IN', country_name: 'दक्षिण कोरिया' },
		{ iso_code: 'KWT', locale_id: 'hi-IN', country_name: 'कुवैत' },
		{
			iso_code: 'CYM',
			locale_id: 'hi-IN',
			country_name: 'कैमेन द्वीपसमूह'
		},
		{ iso_code: 'KAZ', locale_id: 'hi-IN', country_name: 'कज़ाखस्तान' },
		{ iso_code: 'LAO', locale_id: 'hi-IN', country_name: 'लाओस' },
		{ iso_code: 'LBN', locale_id: 'hi-IN', country_name: 'लेबनान' },
		{ iso_code: 'LCA', locale_id: 'hi-IN', country_name: 'सेंट लूसिया' },
		{ iso_code: 'LIE', locale_id: 'hi-IN', country_name: 'लिचेंस्टीन' },
		{ iso_code: 'LKA', locale_id: 'hi-IN', country_name: 'श्रीलंका' },
		{ iso_code: 'LBR', locale_id: 'hi-IN', country_name: 'लाइबेरिया' },
		{ iso_code: 'LSO', locale_id: 'hi-IN', country_name: 'लेसोथो' },
		{ iso_code: 'LTU', locale_id: 'hi-IN', country_name: 'लिथुआनिया' },
		{ iso_code: 'LUX', locale_id: 'hi-IN', country_name: 'लग्ज़मबर्ग' },
		{ iso_code: 'LVA', locale_id: 'hi-IN', country_name: 'लातविया' },
		{ iso_code: 'LBY', locale_id: 'hi-IN', country_name: 'लीबिया' },
		{ iso_code: 'MAR', locale_id: 'hi-IN', country_name: 'मोरक्को' },
		{ iso_code: 'MCO', locale_id: 'hi-IN', country_name: 'मोनाको' },
		{ iso_code: 'MDA', locale_id: 'hi-IN', country_name: 'मॉल्डोवा' },
		{ iso_code: 'MNE', locale_id: 'hi-IN', country_name: 'मोंटेनेग्रो' },
		{ iso_code: 'MAF', locale_id: 'hi-IN', country_name: 'सेंट मार्टिन' },
		{ iso_code: 'MDG', locale_id: 'hi-IN', country_name: 'मेडागास्कर' },
		{
			iso_code: 'MHL',
			locale_id: 'hi-IN',
			country_name: 'मार्शल द्वीपसमूह'
		},
		{
			iso_code: 'MKD',
			locale_id: 'hi-IN',
			country_name: 'उत्तरी मकदूनिया'
		},
		{ iso_code: 'MLI', locale_id: 'hi-IN', country_name: 'माली' },
		{
			iso_code: 'MMR',
			locale_id: 'hi-IN',
			country_name: 'म्यांमार'
		},
		{ iso_code: 'MNG', locale_id: 'hi-IN', country_name: 'मंगोलिया' },
		{
			iso_code: 'MAC',
			locale_id: 'hi-IN',
			country_name: 'मकाऊ'
		},
		{
			iso_code: 'MNP',
			locale_id: 'hi-IN',
			country_name: 'उत्तरी मारियाना द्वीपसमूह'
		},
		{ iso_code: 'MTQ', locale_id: 'hi-IN', country_name: 'मार्टीनिक' },
		{ iso_code: 'MRT', locale_id: 'hi-IN', country_name: 'मॉरिटानिया' },
		{ iso_code: 'MSR', locale_id: 'hi-IN', country_name: 'मोंटसेरात' },
		{ iso_code: 'MLT', locale_id: 'hi-IN', country_name: 'माल्टा' },
		{ iso_code: 'MUS', locale_id: 'hi-IN', country_name: 'मॉरीशस' },
		{ iso_code: 'MDV', locale_id: 'hi-IN', country_name: 'मालदीव' },
		{ iso_code: 'MWI', locale_id: 'hi-IN', country_name: 'मलावी' },
		{ iso_code: 'MEX', locale_id: 'hi-IN', country_name: 'मैक्सिको' },
		{ iso_code: 'MYS', locale_id: 'hi-IN', country_name: 'मलेशिया' },
		{ iso_code: 'MOZ', locale_id: 'hi-IN', country_name: 'मोज़ांबिक' },
		{ iso_code: 'NAM', locale_id: 'hi-IN', country_name: 'नामीबिया' },
		{
			iso_code: 'NCL',
			locale_id: 'hi-IN',
			country_name: 'न्यू कैलेडोनिया'
		},
		{ iso_code: 'NER', locale_id: 'hi-IN', country_name: 'नाइजर' },
		{ iso_code: 'NFK', locale_id: 'hi-IN', country_name: 'नॉरफ़ॉक द्वीप' },
		{ iso_code: 'NGA', locale_id: 'hi-IN', country_name: 'नाइजीरिया' },
		{ iso_code: 'NIC', locale_id: 'hi-IN', country_name: 'निकारागुआ' },
		{ iso_code: 'NLD', locale_id: 'hi-IN', country_name: 'नीदरलैंड' },
		{ iso_code: 'NOR', locale_id: 'hi-IN', country_name: 'नॉर्वे' },
		{ iso_code: 'NPL', locale_id: 'hi-IN', country_name: 'नेपाल' },
		{ iso_code: 'NRU', locale_id: 'hi-IN', country_name: 'नाउरु' },
		{ iso_code: 'NIU', locale_id: 'hi-IN', country_name: 'नीयू' },
		{ iso_code: 'NZL', locale_id: 'hi-IN', country_name: 'न्यूज़ीलैंड' },
		{ iso_code: 'OMN', locale_id: 'hi-IN', country_name: 'ओमान' },
		{ iso_code: 'PAN', locale_id: 'hi-IN', country_name: 'पनामा' },
		{ iso_code: 'PER', locale_id: 'hi-IN', country_name: 'पेरू' },
		{
			iso_code: 'PYF',
			locale_id: 'hi-IN',
			country_name: 'फ़्रेंच पोलिनेशिया'
		},
		{
			iso_code: 'PNG',
			locale_id: 'hi-IN',
			country_name: 'पापुआ न्यू गिनी'
		},
		{ iso_code: 'PHL', locale_id: 'hi-IN', country_name: 'फ़िलिपींस' },
		{ iso_code: 'PAK', locale_id: 'hi-IN', country_name: 'पाकिस्तान' },
		{ iso_code: 'POL', locale_id: 'hi-IN', country_name: 'पोलैंड' },
		{
			iso_code: 'SPM',
			locale_id: 'hi-IN',
			country_name: 'सेंट पिएरे और मिक्वेलान'
		},
		{
			iso_code: 'PCN',
			locale_id: 'hi-IN',
			country_name: 'पिटकैर्न द्वीपसमूह'
		},
		{ iso_code: 'PRI', locale_id: 'hi-IN', country_name: 'पोर्टो रिको' },
		{
			iso_code: 'PSE',
			locale_id: 'hi-IN',
			country_name: 'फ़िलिस्तीनी क्षेत्र'
		},
		{ iso_code: 'PRT', locale_id: 'hi-IN', country_name: 'पुर्तगाल' },
		{ iso_code: 'PLW', locale_id: 'hi-IN', country_name: 'पलाऊ' },
		{ iso_code: 'PRY', locale_id: 'hi-IN', country_name: 'पराग्वे' },
		{ iso_code: 'QAT', locale_id: 'hi-IN', country_name: 'क़तर' },
		{ iso_code: 'REU', locale_id: 'hi-IN', country_name: 'रियूनियन' },
		{ iso_code: 'ROU', locale_id: 'hi-IN', country_name: 'रोमानिया' },
		{ iso_code: 'SRB', locale_id: 'hi-IN', country_name: 'सर्बिया' },
		{ iso_code: 'RUS', locale_id: 'hi-IN', country_name: 'रूस' },
		{ iso_code: 'RWA', locale_id: 'hi-IN', country_name: 'रवांडा' },
		{ iso_code: 'SAU', locale_id: 'hi-IN', country_name: 'सऊदी अरब' },
		{
			iso_code: 'SLB',
			locale_id: 'hi-IN',
			country_name: 'सोलोमन द्वीपसमूह'
		},
		{ iso_code: 'SYC', locale_id: 'hi-IN', country_name: 'सेशेल्स' },
		{ iso_code: 'SDN', locale_id: 'hi-IN', country_name: 'सूडान' },
		{ iso_code: 'SWE', locale_id: 'hi-IN', country_name: 'स्वीडन' },
		{ iso_code: 'SGP', locale_id: 'hi-IN', country_name: 'सिंगापुर' },
		{ iso_code: 'SHN', locale_id: 'hi-IN', country_name: 'सेंट हेलेना' },
		{ iso_code: 'SVN', locale_id: 'hi-IN', country_name: 'स्लोवेनिया' },
		{
			iso_code: 'SJM',
			locale_id: 'hi-IN',
			country_name: 'स्वालबार्ड और जान मायेन'
		},
		{ iso_code: 'SVK', locale_id: 'hi-IN', country_name: 'स्लोवाकिया' },
		{ iso_code: 'SLE', locale_id: 'hi-IN', country_name: 'सिएरा लियोन' },
		{ iso_code: 'SMR', locale_id: 'hi-IN', country_name: 'सैन मेरीनो' },
		{ iso_code: 'SEN', locale_id: 'hi-IN', country_name: 'सेनेगल' },
		{ iso_code: 'SOM', locale_id: 'hi-IN', country_name: 'सोमालिया' },
		{ iso_code: 'SUR', locale_id: 'hi-IN', country_name: 'सूरीनाम' },
		{ iso_code: 'SSD', locale_id: 'hi-IN', country_name: 'दक्षिण सूडान' },
		{
			iso_code: 'STP',
			locale_id: 'hi-IN',
			country_name: 'साओ टोम और प्रिंसिपे'
		},
		{ iso_code: 'SLV', locale_id: 'hi-IN', country_name: 'अल सल्वाडोर' },
		{ iso_code: 'SXM', locale_id: 'hi-IN', country_name: 'सिंट मार्टिन' },
		{ iso_code: 'SYR', locale_id: 'hi-IN', country_name: 'सीरिया' },
		{ iso_code: 'SWZ', locale_id: 'hi-IN', country_name: 'एस्वाटिनी' },
		{
			iso_code: 'TCA',
			locale_id: 'hi-IN',
			country_name: 'तुर्क और कैकोज़ द्वीपसमूह'
		},
		{ iso_code: 'TCD', locale_id: 'hi-IN', country_name: 'चाड' },
		{
			iso_code: 'ATF',
			locale_id: 'hi-IN',
			country_name: 'फ़्रांसीसी दक्षिणी क्षेत्र'
		},
		{ iso_code: 'TGO', locale_id: 'hi-IN', country_name: 'टोगो' },
		{ iso_code: 'THA', locale_id: 'hi-IN', country_name: 'थाईलैंड' },
		{ iso_code: 'TJK', locale_id: 'hi-IN', country_name: 'ताजिकिस्तान' },
		{ iso_code: 'TKL', locale_id: 'hi-IN', country_name: 'तोकेलाउ' },
		{ iso_code: 'TLS', locale_id: 'hi-IN', country_name: 'तिमोर-लेस्त' },
		{ iso_code: 'TKM', locale_id: 'hi-IN', country_name: 'तुर्कमेनिस्तान' },
		{ iso_code: 'TUN', locale_id: 'hi-IN', country_name: 'ट्यूनीशिया' },
		{ iso_code: 'TON', locale_id: 'hi-IN', country_name: 'टोंगा' },
		{ iso_code: 'TUR', locale_id: 'hi-IN', country_name: 'तुर्किये' },
		{
			iso_code: 'TTO',
			locale_id: 'hi-IN',
			country_name: 'त्रिनिदाद और टोबैगो'
		},
		{ iso_code: 'TUV', locale_id: 'hi-IN', country_name: 'तुवालू' },
		{ iso_code: 'TWN', locale_id: 'hi-IN', country_name: 'ताइवान' },
		{ iso_code: 'TZA', locale_id: 'hi-IN', country_name: 'तंज़ानिया' },
		{ iso_code: 'UKR', locale_id: 'hi-IN', country_name: 'यूक्रेन' },
		{ iso_code: 'UGA', locale_id: 'hi-IN', country_name: 'युगांडा' },
		{
			iso_code: 'UMI',
			locale_id: 'hi-IN',
			country_name: 'यू॰एस॰ आउटलाइंग द्वीपसमूह'
		},
		{ iso_code: 'USA', locale_id: 'hi-IN', country_name: 'संयुक्त राज्य' },
		{ iso_code: 'URY', locale_id: 'hi-IN', country_name: 'उरूग्वे' },
		{ iso_code: 'UZB', locale_id: 'hi-IN', country_name: 'उज़्बेकिस्तान' },
		{ iso_code: 'VAT', locale_id: 'hi-IN', country_name: 'वेटिकन सिटी' },
		{
			iso_code: 'VCT',
			locale_id: 'hi-IN',
			country_name: 'सेंट विंसेंट और ग्रेनाडाइंस'
		},
		{ iso_code: 'VEN', locale_id: 'hi-IN', country_name: 'वेनेज़ुएला' },
		{
			iso_code: 'VGB',
			locale_id: 'hi-IN',
			country_name: 'ब्रिटिश वर्जिन द्वीपसमूह'
		},
		{
			iso_code: 'VIR',
			locale_id: 'hi-IN',
			country_name: 'यू॰एस॰ वर्जिन द्वीपसमूह'
		},
		{ iso_code: 'VNM', locale_id: 'hi-IN', country_name: 'वियतनाम' },
		{ iso_code: 'VUT', locale_id: 'hi-IN', country_name: 'वनुआतू' },
		{
			iso_code: 'WLF',
			locale_id: 'hi-IN',
			country_name: 'वालिस और फ़्यूचूना'
		},
		{ iso_code: 'WSM', locale_id: 'hi-IN', country_name: 'समोआ' },
		{ iso_code: 'YEM', locale_id: 'hi-IN', country_name: 'यमन' },
		{ iso_code: 'MYT', locale_id: 'hi-IN', country_name: 'मायोते' },
		{
			iso_code: 'ZAF',
			locale_id: 'hi-IN',
			country_name: 'दक्षिण अफ़्रीका'
		},
		{ iso_code: 'ZMB', locale_id: 'hi-IN', country_name: 'ज़ाम्बिया' },
		{ iso_code: 'ZWE', locale_id: 'hi-IN', country_name: 'ज़िम्बाब्वे' }
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

	country_name: 'म्यांमार';
	await knex('country_code_by_locale')
		.insert(uniqueRows)
		.onConflict(['iso_code', 'locale_id'])
		.merge({
			country_name: knex.raw('EXCLUDED.country_name'),
			updated_at: now
		});
};

country_name: 'मकाऊ';
