/* eslint-disable security/detect-object-injection */
/**
 * Static seed for country_code_by_locale with mr-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * country names for the mr-IN locale.
			country_name: 'म्यानमार'
 * This seed depends on:
 * - 001-country-codes-seed.cjs (populates country_code_master)
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 003-country-codes-by-locale-seed-mr-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM country_code_by_locale WHERE locale_id = 'mr-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for mr-IN locale
	const rows = [
		{ iso_code: 'AND', locale_id: 'mr-IN', country_name: 'अँडोरा' },
		{
			iso_code: 'ARE',
			locale_id: 'mr-IN',
			country_name: 'संयुक्त अरब अमिराती'
		},
		{ iso_code: 'AFG', locale_id: 'mr-IN', country_name: 'अफगाणिस्तान' },
		{
			iso_code: 'ATG',
			locale_id: 'mr-IN',
			country_name: 'अँटिग्वा आणि बर्बुडा'
		},
		{ iso_code: 'AIA', locale_id: 'mr-IN', country_name: 'अँग्विला' },
		{ iso_code: 'ALB', locale_id: 'mr-IN', country_name: 'अल्बानिया' },
		{ iso_code: 'ARM', locale_id: 'mr-IN', country_name: 'अर्मेनिया' },
		{ iso_code: 'AGO', locale_id: 'mr-IN', country_name: 'अंगोला' },
		{ iso_code: 'ATA', locale_id: 'mr-IN', country_name: 'अंटार्क्टिका' },
		{ iso_code: 'ARG', locale_id: 'mr-IN', country_name: 'अर्जेंटिना' },
		{ iso_code: 'ASM', locale_id: 'mr-IN', country_name: 'अमेरिकन सामोआ' },
		{ iso_code: 'AUT', locale_id: 'mr-IN', country_name: 'ऑस्ट्रिया' },
		{ iso_code: 'AUS', locale_id: 'mr-IN', country_name: 'ऑस्ट्रेलिया' },
		{ iso_code: 'ABW', locale_id: 'mr-IN', country_name: 'अरुबा' },
		{ iso_code: 'ALA', locale_id: 'mr-IN', country_name: 'अ‍ॅलँड बेटे' },
		{ iso_code: 'AZE', locale_id: 'mr-IN', country_name: 'अझरबैजान' },
		{
			iso_code: 'BIH',
			locale_id: 'mr-IN',
			country_name: 'बोस्निया अणि हर्जेगोविना'
		},
		{ iso_code: 'BRB', locale_id: 'mr-IN', country_name: 'बार्बाडोस' },
		{ iso_code: 'BGD', locale_id: 'mr-IN', country_name: 'बांगलादेश' },
		{ iso_code: 'BEL', locale_id: 'mr-IN', country_name: 'बेल्जियम' },
		{ iso_code: 'BFA', locale_id: 'mr-IN', country_name: 'बुर्किना फासो' },
		{ iso_code: 'BGR', locale_id: 'mr-IN', country_name: 'बल्गेरिया' },
		{ iso_code: 'BHR', locale_id: 'mr-IN', country_name: 'बहारीन' },
		{ iso_code: 'BDI', locale_id: 'mr-IN', country_name: 'बुरुंडी' },
		{ iso_code: 'BEN', locale_id: 'mr-IN', country_name: 'बेनिन' },
		{
			iso_code: 'BLM',
			locale_id: 'mr-IN',
			country_name: 'सेंट बार्थेलेमी'
		},
		{ iso_code: 'BMU', locale_id: 'mr-IN', country_name: 'बर्मुडा' },
		{ iso_code: 'BRN', locale_id: 'mr-IN', country_name: 'ब्रुनेई' },
		{ iso_code: 'BOL', locale_id: 'mr-IN', country_name: 'बोलिव्हिया' },
		{
			iso_code: 'BES',
			locale_id: 'mr-IN',
			country_name: 'कॅरिबियन नेदरलँड्स'
		},
		{ iso_code: 'BRA', locale_id: 'mr-IN', country_name: 'ब्राझिल' },
		{ iso_code: 'BHS', locale_id: 'mr-IN', country_name: 'बहामाज' },
		{ iso_code: 'BTN', locale_id: 'mr-IN', country_name: 'भूतान' },
		{ iso_code: 'BVT', locale_id: 'mr-IN', country_name: 'बोउवेट बेट' },
		{ iso_code: 'BWA', locale_id: 'mr-IN', country_name: 'बोट्सवाना' },
		{ iso_code: 'BLR', locale_id: 'mr-IN', country_name: 'बेलारूस' },
		{ iso_code: 'BLZ', locale_id: 'mr-IN', country_name: 'बेलिझे' },
		{ iso_code: 'CAN', locale_id: 'mr-IN', country_name: 'कॅनडा' },
		{
			iso_code: 'CCK',
			locale_id: 'mr-IN',
			country_name: 'कोकोस (कीलिंग) बेटे'
		},
		{
			iso_code: 'ZAR',
			locale_id: 'mr-IN',
			country_name: 'काँगो - किंशासा'
		},
		{
			iso_code: 'CAF',
			locale_id: 'mr-IN',
			country_name: 'केंद्रीय अफ्रिकी प्रजासत्ताक'
		},
		{
			iso_code: 'COG',
			locale_id: 'mr-IN',
			country_name: 'काँगो - ब्राझाविले'
		},
		{ iso_code: 'CHE', locale_id: 'mr-IN', country_name: 'स्वित्झर्लंड' },
		{ iso_code: 'CIV', locale_id: 'mr-IN', country_name: 'कोत द’ईवोआर' },
		{ iso_code: 'COK', locale_id: 'mr-IN', country_name: 'कुक बेटे' },
		{ iso_code: 'CHL', locale_id: 'mr-IN', country_name: 'चिली' },
		{ iso_code: 'CMR', locale_id: 'mr-IN', country_name: 'कॅमेरून' },
		{ iso_code: 'CHN', locale_id: 'mr-IN', country_name: 'चीन' },
		{ iso_code: 'COL', locale_id: 'mr-IN', country_name: 'कोलम्बिया' },
		{ iso_code: 'CRI', locale_id: 'mr-IN', country_name: 'कोस्टा रिका' },
		{ iso_code: 'CUB', locale_id: 'mr-IN', country_name: 'क्यूबा' },
		{ iso_code: 'CPV', locale_id: 'mr-IN', country_name: 'केप व्हर्डे' },
		{ iso_code: 'CUW', locale_id: 'mr-IN', country_name: 'क्युरासाओ' },
		{ iso_code: 'CXR', locale_id: 'mr-IN', country_name: 'ख्रिसमस बेट' },
		{ iso_code: 'CYP', locale_id: 'mr-IN', country_name: 'सायप्रस' },
		{ iso_code: 'CZE', locale_id: 'mr-IN', country_name: 'झेकिया' },
		{ iso_code: 'DEU', locale_id: 'mr-IN', country_name: 'जर्मनी' },
		{ iso_code: 'DJI', locale_id: 'mr-IN', country_name: 'जिबौटी' },
		{ iso_code: 'DNK', locale_id: 'mr-IN', country_name: 'डेन्मार्क' },
		{ iso_code: 'DMA', locale_id: 'mr-IN', country_name: 'डोमिनिका' },
		{
			iso_code: 'DOM',
			locale_id: 'mr-IN',
			country_name: 'डोमिनिकन प्रजासत्ताक'
		},
		{ iso_code: 'DZA', locale_id: 'mr-IN', country_name: 'अल्जीरिया' },
		{ iso_code: 'ECU', locale_id: 'mr-IN', country_name: 'इक्वाडोर' },
		{ iso_code: 'EST', locale_id: 'mr-IN', country_name: 'एस्टोनिया' },
		{ iso_code: 'EGY', locale_id: 'mr-IN', country_name: 'इजिप्त' },
		{ iso_code: 'ESH', locale_id: 'mr-IN', country_name: 'पश्चिम सहारा' },
		{ iso_code: 'ERI', locale_id: 'mr-IN', country_name: 'एरिट्रिया' },
		{ iso_code: 'ESP', locale_id: 'mr-IN', country_name: 'स्पेन' },
		{ iso_code: 'ETH', locale_id: 'mr-IN', country_name: 'इथिओपिया' },
		{ iso_code: 'FIN', locale_id: 'mr-IN', country_name: 'फिनलंड' },
		{ iso_code: 'FJI', locale_id: 'mr-IN', country_name: 'फिजी' },
		{ iso_code: 'FLK', locale_id: 'mr-IN', country_name: 'फॉकलंड बेटे' },
		{ iso_code: 'FSM', locale_id: 'mr-IN', country_name: 'मायक्रोनेशिया' },
		{ iso_code: 'FRO', locale_id: 'mr-IN', country_name: 'फेरो बेटे' },
		{ iso_code: 'FRA', locale_id: 'mr-IN', country_name: 'फ्रान्स' },
		{ iso_code: 'GAB', locale_id: 'mr-IN', country_name: 'गॅबॉन' },
		{
			iso_code: 'GBR',
			locale_id: 'mr-IN',
			country_name: 'युनायटेड किंगडम'
		},
		{ iso_code: 'GRD', locale_id: 'mr-IN', country_name: 'ग्रेनेडा' },
		{ iso_code: 'GEO', locale_id: 'mr-IN', country_name: 'जॉर्जिया' },
		{ iso_code: 'GUF', locale_id: 'mr-IN', country_name: 'फ्रेंच गयाना' },
		{ iso_code: 'GGY', locale_id: 'mr-IN', country_name: 'ग्वेर्नसे' },
		{ iso_code: 'GHA', locale_id: 'mr-IN', country_name: 'घाना' },
		{ iso_code: 'GIB', locale_id: 'mr-IN', country_name: 'जिब्राल्टर' },
		{ iso_code: 'GRL', locale_id: 'mr-IN', country_name: 'ग्रीनलंड' },
		{ iso_code: 'GMB', locale_id: 'mr-IN', country_name: 'गाम्बिया' },
		{ iso_code: 'GIN', locale_id: 'mr-IN', country_name: 'गिनी' },
		{ iso_code: 'GLP', locale_id: 'mr-IN', country_name: 'ग्वाडेलोउपे' },
		{
			iso_code: 'GNQ',
			locale_id: 'mr-IN',
			country_name: 'इक्वेटोरियल गिनी'
		},
		{ iso_code: 'GRC', locale_id: 'mr-IN', country_name: 'ग्रीस' },
		{
			iso_code: 'SGS',
			locale_id: 'mr-IN',
			country_name: 'दक्षिण जॉर्जिया आणि दक्षिण सँडविच बेटे'
		},
		{ iso_code: 'GTM', locale_id: 'mr-IN', country_name: 'ग्वाटेमाला' },
		{ iso_code: 'GUM', locale_id: 'mr-IN', country_name: 'गुआम' },
		{ iso_code: 'GNB', locale_id: 'mr-IN', country_name: 'गिनी-बिसाउ' },
		{ iso_code: 'GUY', locale_id: 'mr-IN', country_name: 'गयाना' },
		{
			iso_code: 'HKG',
			locale_id: 'mr-IN',
			country_name: 'हाँगकाँग एसएआर चीन'
		},
		{
			iso_code: 'HMD',
			locale_id: 'mr-IN',
			country_name: 'हर्ड आणि मॅक्डोनाल्ड बेटे'
		},
		{ iso_code: 'HND', locale_id: 'mr-IN', country_name: 'होंडुरास' },
		{ iso_code: 'HRV', locale_id: 'mr-IN', country_name: 'क्रोएशिया' },
		{ iso_code: 'HTI', locale_id: 'mr-IN', country_name: 'हैती' },
		{ iso_code: 'HUN', locale_id: 'mr-IN', country_name: 'हंगेरी' },
		{ iso_code: 'IDN', locale_id: 'mr-IN', country_name: 'इंडोनेशिया' },
		{ iso_code: 'IRL', locale_id: 'mr-IN', country_name: 'आयर्लंड' },
		{ iso_code: 'ISR', locale_id: 'mr-IN', country_name: 'इस्त्राइल' },
		{ iso_code: 'IMN', locale_id: 'mr-IN', country_name: 'आयल ऑफ मॅन' },
		{ iso_code: 'IND', locale_id: 'mr-IN', country_name: 'भारत' },
		{
			iso_code: 'IOT',
			locale_id: 'mr-IN',
			country_name: 'ब्रिटिश हिंद महासागर प्रदेश'
		},
		{ iso_code: 'IRQ', locale_id: 'mr-IN', country_name: 'इराक' },
		{ iso_code: 'IRN', locale_id: 'mr-IN', country_name: 'इराण' },
		{ iso_code: 'ISL', locale_id: 'mr-IN', country_name: 'आइसलँड' },
		{ iso_code: 'ITA', locale_id: 'mr-IN', country_name: 'इटली' },
		{ iso_code: 'JEY', locale_id: 'mr-IN', country_name: 'जर्सी' },
		{ iso_code: 'JAM', locale_id: 'mr-IN', country_name: 'जमैका' },
		{ iso_code: 'JOR', locale_id: 'mr-IN', country_name: 'जॉर्डन' },
		{ iso_code: 'JPN', locale_id: 'mr-IN', country_name: 'जपान' },
		{ iso_code: 'KEN', locale_id: 'mr-IN', country_name: 'केनिया' },
		{ iso_code: 'KGZ', locale_id: 'mr-IN', country_name: 'किरगिझस्तान' },
		{ iso_code: 'KHM', locale_id: 'mr-IN', country_name: 'कंबोडिया' },
		{ iso_code: 'KIR', locale_id: 'mr-IN', country_name: 'किरीबाटी' },
		{ iso_code: 'COM', locale_id: 'mr-IN', country_name: 'कोमोरोज' },
		{
			iso_code: 'KNA',
			locale_id: 'mr-IN',
			country_name: 'सेंट किट्स आणि नेव्हिस'
		},
		{ iso_code: 'PRK', locale_id: 'mr-IN', country_name: 'उत्तर कोरिया' },
		{ iso_code: 'KOR', locale_id: 'mr-IN', country_name: 'दक्षिण कोरिया' },
		{ iso_code: 'KWT', locale_id: 'mr-IN', country_name: 'कुवेत' },
		{ iso_code: 'CYM', locale_id: 'mr-IN', country_name: 'केमन बेटे' },
		{ iso_code: 'KAZ', locale_id: 'mr-IN', country_name: 'कझाकस्तान' },
		{ iso_code: 'LAO', locale_id: 'mr-IN', country_name: 'लाओस' },
		{ iso_code: 'LBN', locale_id: 'mr-IN', country_name: 'लेबनॉन' },
		{ iso_code: 'LCA', locale_id: 'mr-IN', country_name: 'सेंट ल्यूसिया' },
		{ iso_code: 'LIE', locale_id: 'mr-IN', country_name: 'लिक्टेनस्टाइन' },
		{ iso_code: 'LKA', locale_id: 'mr-IN', country_name: 'श्रीलंका' },
		{ iso_code: 'LBR', locale_id: 'mr-IN', country_name: 'लायबेरिया' },
		{ iso_code: 'LSO', locale_id: 'mr-IN', country_name: 'लेसोथो' },
		{ iso_code: 'LTU', locale_id: 'mr-IN', country_name: 'लिथुआनिया' },
		{ iso_code: 'LUX', locale_id: 'mr-IN', country_name: 'लक्झेंबर्ग' },
		{ iso_code: 'LVA', locale_id: 'mr-IN', country_name: 'लाटव्हिया' },
		{ iso_code: 'LBY', locale_id: 'mr-IN', country_name: 'लिबिया' },
		{ iso_code: 'MAR', locale_id: 'mr-IN', country_name: 'मोरोक्को' },
		{ iso_code: 'MCO', locale_id: 'mr-IN', country_name: 'मोनॅको' },
		{ iso_code: 'MDA', locale_id: 'mr-IN', country_name: 'मोल्डोव्हा' },
		{ iso_code: 'MNE', locale_id: 'mr-IN', country_name: 'मोंटेनेग्रो' },
		{ iso_code: 'MAF', locale_id: 'mr-IN', country_name: 'सेंट मार्टिन' },
		{ iso_code: 'MDG', locale_id: 'mr-IN', country_name: 'मादागास्कर' },
		{ iso_code: 'MHL', locale_id: 'mr-IN', country_name: 'मार्शल बेटे' },
		{
			iso_code: 'MKD',
			locale_id: 'mr-IN',
			country_name: 'उत्तर मॅसेडोनिया'
		},
		{ iso_code: 'MLI', locale_id: 'mr-IN', country_name: 'माली' },
		{
			iso_code: 'MMR',
			locale_id: 'mr-IN',
			country_name: 'म्यानमार'
		},
		{ iso_code: 'MNG', locale_id: 'mr-IN', country_name: 'मंगोलिया' },
		{ iso_code: 'MAC', locale_id: 'mr-IN', country_name: 'मकाओ एसएआर चीन' },
		{
			iso_code: 'MNP',
			locale_id: 'mr-IN',
			country_name: 'उत्तरी मारियाना बेटे'
		},
		{ iso_code: 'MTQ', locale_id: 'mr-IN', country_name: 'मार्टिनिक' },
		{ iso_code: 'MRT', locale_id: 'mr-IN', country_name: 'मॉरिटानिया' },
		{ iso_code: 'MSR', locale_id: 'mr-IN', country_name: 'मॉन्ट्सेराट' },
		{ iso_code: 'MLT', locale_id: 'mr-IN', country_name: 'माल्टा' },
		{ iso_code: 'MUS', locale_id: 'mr-IN', country_name: 'मॉरिशस' },
		{ iso_code: 'MDV', locale_id: 'mr-IN', country_name: 'मालदीव' },
		{ iso_code: 'MWI', locale_id: 'mr-IN', country_name: 'मलावी' },
		{ iso_code: 'MEX', locale_id: 'mr-IN', country_name: 'मेक्सिको' },
		{ iso_code: 'MYS', locale_id: 'mr-IN', country_name: 'मलेशिया' },
		{ iso_code: 'MOZ', locale_id: 'mr-IN', country_name: 'मोझाम्बिक' },
		{ iso_code: 'NAM', locale_id: 'mr-IN', country_name: 'नामिबिया' },
		{
			iso_code: 'NCL',
			locale_id: 'mr-IN',
			country_name: 'न्यू कॅलेडोनिया'
		},
		{ iso_code: 'NER', locale_id: 'mr-IN', country_name: 'नाइजर' },
		{ iso_code: 'NFK', locale_id: 'mr-IN', country_name: 'नॉरफॉक बेट' },
		{ iso_code: 'NGA', locale_id: 'mr-IN', country_name: 'नायजेरिया' },
		{ iso_code: 'NIC', locale_id: 'mr-IN', country_name: 'निकाराग्वा' },
		{ iso_code: 'NLD', locale_id: 'mr-IN', country_name: 'नेदरलँड' },
		{ iso_code: 'NOR', locale_id: 'mr-IN', country_name: 'नॉर्वे' },
		{ iso_code: 'NPL', locale_id: 'mr-IN', country_name: 'नेपाळ' },
		{ iso_code: 'NRU', locale_id: 'mr-IN', country_name: 'नाउरू' },
		{ iso_code: 'NIU', locale_id: 'mr-IN', country_name: 'नीयू' },
		{ iso_code: 'NZL', locale_id: 'mr-IN', country_name: 'न्यूझीलंड' },
		{ iso_code: 'OMN', locale_id: 'mr-IN', country_name: 'ओमान' },
		{ iso_code: 'PAN', locale_id: 'mr-IN', country_name: 'पनामा' },
		{ iso_code: 'PER', locale_id: 'mr-IN', country_name: 'पेरू' },
		{
			iso_code: 'PYF',
			locale_id: 'mr-IN',
			country_name: 'फ्रेंच पॉलिनेशिया'
		},
		{
			iso_code: 'PNG',
			locale_id: 'mr-IN',
			country_name: 'पापुआ न्यू गिनी'
		},
		{ iso_code: 'PHL', locale_id: 'mr-IN', country_name: 'फिलिपिन्स' },
		{ iso_code: 'PAK', locale_id: 'mr-IN', country_name: 'पाकिस्तान' },
		{ iso_code: 'POL', locale_id: 'mr-IN', country_name: 'पोलंड' },
		{
			iso_code: 'SPM',
			locale_id: 'mr-IN',
			country_name: 'सेंट पियरे आणि मिक्वेलोन'
		},
		{ iso_code: 'PCN', locale_id: 'mr-IN', country_name: 'पिटकैर्न बेटे' },
		{ iso_code: 'PRI', locale_id: 'mr-IN', country_name: 'प्युएर्तो रिको' },
		{
			iso_code: 'PSE',
			locale_id: 'mr-IN',
			country_name: 'पॅलेस्टिनियन प्रदेश'
		},
		{ iso_code: 'PRT', locale_id: 'mr-IN', country_name: 'पोर्तुगाल' },
		{ iso_code: 'PLW', locale_id: 'mr-IN', country_name: 'पलाऊ' },
		{ iso_code: 'PRY', locale_id: 'mr-IN', country_name: 'पराग्वे' },
		{ iso_code: 'QAT', locale_id: 'mr-IN', country_name: 'कतार' },
		{ iso_code: 'REU', locale_id: 'mr-IN', country_name: 'रियुनियन' },
		{ iso_code: 'ROU', locale_id: 'mr-IN', country_name: 'रोमानिया' },
		{ iso_code: 'SRB', locale_id: 'mr-IN', country_name: 'सर्बिया' },
		{ iso_code: 'RUS', locale_id: 'mr-IN', country_name: 'रशिया' },
		{ iso_code: 'RWA', locale_id: 'mr-IN', country_name: 'रवांडा' },
		{ iso_code: 'SAU', locale_id: 'mr-IN', country_name: 'सौदी अरब' },
		{ iso_code: 'SLB', locale_id: 'mr-IN', country_name: 'सोलोमन बेटे' },
		{ iso_code: 'SYC', locale_id: 'mr-IN', country_name: 'सेशेल्स' },
		{ iso_code: 'SDN', locale_id: 'mr-IN', country_name: 'सुदान' },
		{ iso_code: 'SWE', locale_id: 'mr-IN', country_name: 'स्वीडन' },
		{ iso_code: 'SGP', locale_id: 'mr-IN', country_name: 'सिंगापूर' },
		{ iso_code: 'SHN', locale_id: 'mr-IN', country_name: 'सेंट हेलेना' },
		{ iso_code: 'SVN', locale_id: 'mr-IN', country_name: 'स्लोव्हेनिया' },
		{
			iso_code: 'SJM',
			locale_id: 'mr-IN',
			country_name: 'स्वालबर्ड आणि जान मायेन'
		},
		{ iso_code: 'SVK', locale_id: 'mr-IN', country_name: 'स्लोव्हाकिया' },
		{ iso_code: 'SLE', locale_id: 'mr-IN', country_name: 'सिएरा लिओन' },
		{ iso_code: 'SMR', locale_id: 'mr-IN', country_name: 'सॅन मरीनो' },
		{ iso_code: 'SEN', locale_id: 'mr-IN', country_name: 'सेनेगल' },
		{ iso_code: 'SOM', locale_id: 'mr-IN', country_name: 'सोमालिया' },
		{ iso_code: 'SUR', locale_id: 'mr-IN', country_name: 'सुरिनाम' },
		{ iso_code: 'SSD', locale_id: 'mr-IN', country_name: 'दक्षिण सुदान' },
		{
			iso_code: 'STP',
			locale_id: 'mr-IN',
			country_name: 'साओ टोम आणि प्रिंसिपे'
		},
		{ iso_code: 'SLV', locale_id: 'mr-IN', country_name: 'अल साल्वाडोर' },
		{ iso_code: 'SXM', locale_id: 'mr-IN', country_name: 'सिंट मार्टेन' },
		{ iso_code: 'SYR', locale_id: 'mr-IN', country_name: 'सीरिया' },
		{ iso_code: 'SWZ', locale_id: 'mr-IN', country_name: 'इस्वातिनी' },
		{
			iso_code: 'TCA',
			locale_id: 'mr-IN',
			country_name: 'टर्क्स आणि कैकोस बेटे'
		},
		{ iso_code: 'TCD', locale_id: 'mr-IN', country_name: 'चाड' },
		{
			iso_code: 'ATF',
			locale_id: 'mr-IN',
			country_name: 'फ्रेंच दाक्षिणात्य प्रदेश'
		},
		{ iso_code: 'TGO', locale_id: 'mr-IN', country_name: 'टोगो' },
		{ iso_code: 'THA', locale_id: 'mr-IN', country_name: 'थायलंड' },
		{ iso_code: 'TJK', locale_id: 'mr-IN', country_name: 'ताजिकिस्तान' },
		{ iso_code: 'TKL', locale_id: 'mr-IN', country_name: 'तोकेलाउ' },
		{ iso_code: 'TLS', locale_id: 'mr-IN', country_name: 'तिमोर-लेस्ते' },
		{ iso_code: 'TKM', locale_id: 'mr-IN', country_name: 'तुर्कमेनिस्तान' },
		{ iso_code: 'TUN', locale_id: 'mr-IN', country_name: 'ट्यूनिशिया' },
		{ iso_code: 'TON', locale_id: 'mr-IN', country_name: 'टोंगा' },
		{ iso_code: 'TUR', locale_id: 'mr-IN', country_name: 'तुर्किये' },
		{
			iso_code: 'TTO',
			locale_id: 'mr-IN',
			country_name: 'त्रिनिदाद आणि टोबॅगो'
		},
		{ iso_code: 'TUV', locale_id: 'mr-IN', country_name: 'टुवालु' },
		{ iso_code: 'TWN', locale_id: 'mr-IN', country_name: 'तैवान' },
		{ iso_code: 'TZA', locale_id: 'mr-IN', country_name: 'टांझानिया' },
		{ iso_code: 'UKR', locale_id: 'mr-IN', country_name: 'युक्रेन' },
		{ iso_code: 'UGA', locale_id: 'mr-IN', country_name: 'युगांडा' },
		{
			iso_code: 'UMI',
			locale_id: 'mr-IN',
			country_name: 'यू.एस. आउटलाइंग बेटे'
		},
		{
			iso_code: 'USA',
			locale_id: 'mr-IN',
			country_name: 'युनायटेड स्टेट्स'
		},
		{ iso_code: 'URY', locale_id: 'mr-IN', country_name: 'उरुग्वे' },
		{ iso_code: 'UZB', locale_id: 'mr-IN', country_name: 'उझबेकिस्तान' },
		{ iso_code: 'VAT', locale_id: 'mr-IN', country_name: 'व्हॅटिकन सिटी' },
		{
			iso_code: 'VCT',
			locale_id: 'mr-IN',
			country_name: 'सेंट व्हिन्सेंट आणि ग्रेनडाइन्स'
		},
		{ iso_code: 'VEN', locale_id: 'mr-IN', country_name: 'व्हेनेझुएला' },
		{
			iso_code: 'VGB',
			locale_id: 'mr-IN',
			country_name: 'ब्रिटिश व्हर्जिन बेटे'
		},
		{
			iso_code: 'VIR',
			locale_id: 'mr-IN',
			country_name: 'यू.एस. व्हर्जिन बेटे'
		},
		{ iso_code: 'VNM', locale_id: 'mr-IN', country_name: 'व्हिएतनाम' },
		{ iso_code: 'VUT', locale_id: 'mr-IN', country_name: 'वानुआतु' },
		{
			iso_code: 'WLF',
			locale_id: 'mr-IN',
			country_name: 'वालिस आणि फ्यूचूना'
		},
		{ iso_code: 'WSM', locale_id: 'mr-IN', country_name: 'सामोआ' },
		{ iso_code: 'YEM', locale_id: 'mr-IN', country_name: 'येमेन' },
		{ iso_code: 'MYT', locale_id: 'mr-IN', country_name: 'मायोट्टे' },
		{ iso_code: 'ZAF', locale_id: 'mr-IN', country_name: 'दक्षिण आफ्रिका' },
		{ iso_code: 'ZMB', locale_id: 'mr-IN', country_name: 'झाम्बिया' },
		{ iso_code: 'ZWE', locale_id: 'mr-IN', country_name: 'झिम्बाब्वे' }
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
