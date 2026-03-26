/* eslint-disable security/detect-object-injection */
/**
 * Static seed for country_code_by_locale with te-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * country names for the te-IN locale.
 *
 * This seed depends on:
 * - 001-country-codes-seed.cjs (populates country_code_master)
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 003-country-codes-by-locale-seed-te-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM country_code_by_locale WHERE locale_id = 'te-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for te-IN locale
	const rows = [
		{ iso_code: 'AND', locale_id: 'te-IN', country_name: 'ఆండోరా' },
		{
			iso_code: 'ARE',
			locale_id: 'te-IN',
			country_name: 'యునైటెడ్ అరబ్ ఎమిరేట్స్'
		},
		{ iso_code: 'AFG', locale_id: 'te-IN', country_name: 'ఆఫ్ఘనిస్తాన్' },
		{
			iso_code: 'ATG',
			locale_id: 'te-IN',
			country_name: 'ఆంటిగ్వా & బార్బుడా'
		},
		{ iso_code: 'AIA', locale_id: 'te-IN', country_name: 'ఆంగ్విల్లా' },
		{ iso_code: 'ALB', locale_id: 'te-IN', country_name: 'అల్బేనియా' },
		{ iso_code: 'ARM', locale_id: 'te-IN', country_name: 'ఆర్మేనియా' },
		{ iso_code: 'AGO', locale_id: 'te-IN', country_name: 'అంగోలా' },
		{ iso_code: 'ATA', locale_id: 'te-IN', country_name: 'అంటార్కిటికా' },
		{ iso_code: 'ARG', locale_id: 'te-IN', country_name: 'అర్జెంటీనా' },
		{ iso_code: 'ASM', locale_id: 'te-IN', country_name: 'అమెరికన్ సమోవా' },
		{ iso_code: 'AUT', locale_id: 'te-IN', country_name: 'ఆస్ట్రియా' },
		{ iso_code: 'AUS', locale_id: 'te-IN', country_name: 'ఆస్ట్రేలియా' },
		{ iso_code: 'ABW', locale_id: 'te-IN', country_name: 'అరుబా' },
		{ iso_code: 'ALA', locale_id: 'te-IN', country_name: 'ఆలాండ్ దీవులు' },
		{ iso_code: 'AZE', locale_id: 'te-IN', country_name: 'అజర్బైజాన్' },
		{
			iso_code: 'BIH',
			locale_id: 'te-IN',
			country_name: 'బోస్నియా & హెర్జిగోవినా'
		},
		{ iso_code: 'BRB', locale_id: 'te-IN', country_name: 'బార్బడోస్' },
		{ iso_code: 'BGD', locale_id: 'te-IN', country_name: 'బంగ్లాదేశ్' },
		{ iso_code: 'BEL', locale_id: 'te-IN', country_name: 'బెల్జియం' },
		{ iso_code: 'BFA', locale_id: 'te-IN', country_name: 'బుర్కినా ఫాసో' },
		{ iso_code: 'BGR', locale_id: 'te-IN', country_name: 'బల్గేరియా' },
		{ iso_code: 'BHR', locale_id: 'te-IN', country_name: 'బహ్రెయిన్' },
		{ iso_code: 'BDI', locale_id: 'te-IN', country_name: 'బురుండి' },
		{ iso_code: 'BEN', locale_id: 'te-IN', country_name: 'బెనిన్' },
		{
			iso_code: 'BLM',
			locale_id: 'te-IN',
			country_name: 'సెయింట్ బర్థెలిమి'
		},
		{ iso_code: 'BMU', locale_id: 'te-IN', country_name: 'బెర్ముడా' },
		{ iso_code: 'BRN', locale_id: 'te-IN', country_name: 'బ్రూనే' },
		{ iso_code: 'BOL', locale_id: 'te-IN', country_name: 'బొలీవియా' },
		{
			iso_code: 'BES',
			locale_id: 'te-IN',
			country_name: 'కరీబియన్ నెదర్లాండ్స్'
		},
		{ iso_code: 'BRA', locale_id: 'te-IN', country_name: 'బ్రెజిల్' },
		{ iso_code: 'BHS', locale_id: 'te-IN', country_name: 'బహామాస్' },
		{ iso_code: 'BTN', locale_id: 'te-IN', country_name: 'భూటాన్' },
		{ iso_code: 'BVT', locale_id: 'te-IN', country_name: 'బువై దీవి' },
		{ iso_code: 'BWA', locale_id: 'te-IN', country_name: 'బోట్స్వానా' },
		{ iso_code: 'BLR', locale_id: 'te-IN', country_name: 'బెలారస్' },
		{ iso_code: 'BLZ', locale_id: 'te-IN', country_name: 'బెలిజ్' },
		{ iso_code: 'CAN', locale_id: 'te-IN', country_name: 'కెనడా' },
		{
			iso_code: 'CCK',
			locale_id: 'te-IN',
			country_name: 'కోకోస్ (కీలింగ్) దీవులు'
		},
		{
			iso_code: 'ZAR',
			locale_id: 'te-IN',
			country_name: 'కాంగో- కిన్షాసా'
		},
		{
			iso_code: 'CAF',
			locale_id: 'te-IN',
			country_name: 'సెంట్రల్ ఆఫ్రికన్ రిపబ్లిక్'
		},
		{
			iso_code: 'COG',
			locale_id: 'te-IN',
			country_name: 'కాంగో- బ్రాజావిల్లి'
		},
		{ iso_code: 'CHE', locale_id: 'te-IN', country_name: 'స్విట్జర్లాండ్' },
		{ iso_code: 'CIV', locale_id: 'te-IN', country_name: 'కోట్ డి ఐవోర్' },
		{ iso_code: 'COK', locale_id: 'te-IN', country_name: 'కుక్ దీవులు' },
		{ iso_code: 'CHL', locale_id: 'te-IN', country_name: 'చిలీ' },
		{ iso_code: 'CMR', locale_id: 'te-IN', country_name: 'కామెరూన్' },
		{ iso_code: 'CHN', locale_id: 'te-IN', country_name: 'చైనా' },
		{ iso_code: 'COL', locale_id: 'te-IN', country_name: 'కొలంబియా' },
		{ iso_code: 'CRI', locale_id: 'te-IN', country_name: 'కోస్టా రికా' },
		{ iso_code: 'CUB', locale_id: 'te-IN', country_name: 'క్యూబా' },
		{ iso_code: 'CPV', locale_id: 'te-IN', country_name: 'కేప్ వెర్డె' },
		{ iso_code: 'CUW', locale_id: 'te-IN', country_name: 'క్యూరసో' },
		{ iso_code: 'CXR', locale_id: 'te-IN', country_name: 'క్రిస్మస్ దీవి' },
		{ iso_code: 'CYP', locale_id: 'te-IN', country_name: 'సైప్రస్' },
		{ iso_code: 'CZE', locale_id: 'te-IN', country_name: 'చెకియా' },
		{ iso_code: 'DEU', locale_id: 'te-IN', country_name: 'జర్మనీ' },
		{ iso_code: 'DJI', locale_id: 'te-IN', country_name: 'జిబౌటి' },
		{ iso_code: 'DNK', locale_id: 'te-IN', country_name: 'డెన్మార్క్' },
		{ iso_code: 'DMA', locale_id: 'te-IN', country_name: 'డొమినికా' },
		{
			iso_code: 'DOM',
			locale_id: 'te-IN',
			country_name: 'డొమినికన్ రిపబ్లిక్'
		},
		{ iso_code: 'DZA', locale_id: 'te-IN', country_name: 'అల్జీరియా' },
		{ iso_code: 'ECU', locale_id: 'te-IN', country_name: 'ఈక్వడార్' },
		{ iso_code: 'EST', locale_id: 'te-IN', country_name: 'ఎస్టోనియా' },
		{ iso_code: 'EGY', locale_id: 'te-IN', country_name: 'ఈజిప్ట్' },
		{ iso_code: 'ESH', locale_id: 'te-IN', country_name: 'పడమటి సహారా' },
		{ iso_code: 'ERI', locale_id: 'te-IN', country_name: 'ఎరిట్రియా' },
		{ iso_code: 'ESP', locale_id: 'te-IN', country_name: 'స్పెయిన్' },
		{ iso_code: 'ETH', locale_id: 'te-IN', country_name: 'ఇథియోపియా' },
		{ iso_code: 'FIN', locale_id: 'te-IN', country_name: 'ఫిన్లాండ్' },
		{ iso_code: 'FJI', locale_id: 'te-IN', country_name: 'ఫిజీ' },
		{
			iso_code: 'FLK',
			locale_id: 'te-IN',
			country_name: 'ఫాక్‌ల్యాండ్ దీవులు'
		},
		{ iso_code: 'FSM', locale_id: 'te-IN', country_name: 'మైక్రోనేషియా' },
		{ iso_code: 'FRO', locale_id: 'te-IN', country_name: 'ఫారో దీవులు' },
		{ iso_code: 'FRA', locale_id: 'te-IN', country_name: 'ఫ్రాన్స్‌' },
		{ iso_code: 'GAB', locale_id: 'te-IN', country_name: 'గేబన్' },
		{
			iso_code: 'GBR',
			locale_id: 'te-IN',
			country_name: 'యునైటెడ్ కింగ్‌డమ్'
		},
		{ iso_code: 'GRD', locale_id: 'te-IN', country_name: 'గ్రెనడా' },
		{ iso_code: 'GEO', locale_id: 'te-IN', country_name: 'జార్జియా' },
		{ iso_code: 'GUF', locale_id: 'te-IN', country_name: 'ఫ్రెంచ్ గియానా' },
		{ iso_code: 'GGY', locale_id: 'te-IN', country_name: 'గర్న్‌సీ' },
		{ iso_code: 'GHA', locale_id: 'te-IN', country_name: 'ఘనా' },
		{ iso_code: 'GIB', locale_id: 'te-IN', country_name: 'జిబ్రాల్టర్' },
		{ iso_code: 'GRL', locale_id: 'te-IN', country_name: 'గ్రీన్‌ల్యాండ్' },
		{ iso_code: 'GMB', locale_id: 'te-IN', country_name: 'గాంబియా' },
		{ iso_code: 'GIN', locale_id: 'te-IN', country_name: 'గినియా' },
		{ iso_code: 'GLP', locale_id: 'te-IN', country_name: 'గ్వాడెలోప్' },
		{
			iso_code: 'GNQ',
			locale_id: 'te-IN',
			country_name: 'ఈక్వటోరియల్ గినియా'
		},
		{ iso_code: 'GRC', locale_id: 'te-IN', country_name: 'గ్రీస్' },
		{
			iso_code: 'SGS',
			locale_id: 'te-IN',
			country_name: 'దక్షిణ జార్జియా మరియు దక్షిణ శాండ్విచ్ దీవులు'
		},
		{ iso_code: 'GTM', locale_id: 'te-IN', country_name: 'గ్వాటిమాలా' },
		{ iso_code: 'GUM', locale_id: 'te-IN', country_name: 'గ్వామ్' },
		{
			iso_code: 'GNB',
			locale_id: 'te-IN',
			country_name: 'గినియా-బిస్సావ్'
		},
		{ iso_code: 'GUY', locale_id: 'te-IN', country_name: 'గయానా' },
		{
			iso_code: 'HKG',
			locale_id: 'te-IN',
			country_name: 'హాంకాంగ్ SAR చైనా'
		},
		{
			iso_code: 'HMD',
			locale_id: 'te-IN',
			country_name: 'హెర్డ్ దీవి మరియు మెక్‌డొనాల్డ్ దీవులు'
		},
		{ iso_code: 'HND', locale_id: 'te-IN', country_name: 'హోండురాస్' },
		{ iso_code: 'HRV', locale_id: 'te-IN', country_name: 'క్రొయేషియా' },
		{ iso_code: 'HTI', locale_id: 'te-IN', country_name: 'హైతీ' },
		{ iso_code: 'HUN', locale_id: 'te-IN', country_name: 'హంగేరీ' },
		{ iso_code: 'IDN', locale_id: 'te-IN', country_name: 'ఇండోనేషియా' },
		{ iso_code: 'IRL', locale_id: 'te-IN', country_name: 'ఐర్లాండ్' },
		{ iso_code: 'ISR', locale_id: 'te-IN', country_name: 'ఇజ్రాయెల్' },
		{ iso_code: 'IMN', locale_id: 'te-IN', country_name: 'ఐల్ ఆఫ్ మాన్' },
		{ iso_code: 'IND', locale_id: 'te-IN', country_name: 'భారతదేశం' },
		{
			iso_code: 'IOT',
			locale_id: 'te-IN',
			country_name: 'బ్రిటిష్ హిందూ మహాసముద్ర ప్రాంతం'
		},
		{ iso_code: 'IRQ', locale_id: 'te-IN', country_name: 'ఇరాక్' },
		{ iso_code: 'IRN', locale_id: 'te-IN', country_name: 'ఇరాన్' },
		{ iso_code: 'ISL', locale_id: 'te-IN', country_name: 'ఐస్లాండ్' },
		{ iso_code: 'ITA', locale_id: 'te-IN', country_name: 'ఇటలీ' },
		{ iso_code: 'JEY', locale_id: 'te-IN', country_name: 'జెర్సీ' },
		{ iso_code: 'JAM', locale_id: 'te-IN', country_name: 'జమైకా' },
		{ iso_code: 'JOR', locale_id: 'te-IN', country_name: 'జోర్డాన్' },
		{ iso_code: 'JPN', locale_id: 'te-IN', country_name: 'జపాన్' },
		{ iso_code: 'KEN', locale_id: 'te-IN', country_name: 'కెన్యా' },
		{ iso_code: 'KGZ', locale_id: 'te-IN', country_name: 'కిర్గిజిస్తాన్' },
		{ iso_code: 'KHM', locale_id: 'te-IN', country_name: 'కంబోడియా' },
		{ iso_code: 'KIR', locale_id: 'te-IN', country_name: 'కిరిబాటి' },
		{ iso_code: 'COM', locale_id: 'te-IN', country_name: 'కొమొరోస్' },
		{
			iso_code: 'KNA',
			locale_id: 'te-IN',
			country_name: 'సెయింట్ కిట్స్ & నెవిస్'
		},
		{ iso_code: 'PRK', locale_id: 'te-IN', country_name: 'ఉత్తర కొరియా' },
		{ iso_code: 'KOR', locale_id: 'te-IN', country_name: 'దక్షిణ కొరియా' },
		{ iso_code: 'KWT', locale_id: 'te-IN', country_name: 'కువైట్' },
		{ iso_code: 'CYM', locale_id: 'te-IN', country_name: 'కేమాన్ దీవులు' },
		{ iso_code: 'KAZ', locale_id: 'te-IN', country_name: 'కజకిస్తాన్' },
		{ iso_code: 'LAO', locale_id: 'te-IN', country_name: 'లావోస్' },
		{ iso_code: 'LBN', locale_id: 'te-IN', country_name: 'లెబనాన్' },
		{ iso_code: 'LCA', locale_id: 'te-IN', country_name: 'సెయింట్ లూసియా' },
		{
			iso_code: 'LIE',
			locale_id: 'te-IN',
			country_name: 'లిక్టెన్‌స్టెయిన్'
		},
		{ iso_code: 'LKA', locale_id: 'te-IN', country_name: 'శ్రీలంక' },
		{ iso_code: 'LBR', locale_id: 'te-IN', country_name: 'లైబీరియా' },
		{ iso_code: 'LSO', locale_id: 'te-IN', country_name: 'లెసోతో' },
		{ iso_code: 'LTU', locale_id: 'te-IN', country_name: 'లిథువేనియా' },
		{ iso_code: 'LUX', locale_id: 'te-IN', country_name: 'లక్సెంబర్గ్' },
		{ iso_code: 'LVA', locale_id: 'te-IN', country_name: 'లాత్వియా' },
		{ iso_code: 'LBY', locale_id: 'te-IN', country_name: 'లిబియా' },
		{ iso_code: 'MAR', locale_id: 'te-IN', country_name: 'మొరాకో' },
		{ iso_code: 'MCO', locale_id: 'te-IN', country_name: 'మొనాకో' },
		{ iso_code: 'MDA', locale_id: 'te-IN', country_name: 'మోల్డోవా' },
		{ iso_code: 'MNE', locale_id: 'te-IN', country_name: 'మాంటెనెగ్రో' },
		{
			iso_code: 'MAF',
			locale_id: 'te-IN',
			country_name: 'సెయింట్ మార్టిన్'
		},
		{ iso_code: 'MDG', locale_id: 'te-IN', country_name: 'మడగాస్కర్' },
		{ iso_code: 'MHL', locale_id: 'te-IN', country_name: 'మార్షల్ దీవులు' },
		{
			iso_code: 'MKD',
			locale_id: 'te-IN',
			country_name: 'ఉత్తర మాసిడోనియా'
		},
		{ iso_code: 'MLI', locale_id: 'te-IN', country_name: 'మాలి' },
		{ iso_code: 'MMR', locale_id: 'te-IN', country_name: 'మయన్మార్' },
		{ iso_code: 'MNG', locale_id: 'te-IN', country_name: 'మంగోలియా' },
		{ iso_code: 'MAC', locale_id: 'te-IN', country_name: 'మకావ్ SAR చైనా' },
		{
			iso_code: 'MNP',
			locale_id: 'te-IN',
			country_name: 'ఉత్తర మరియానా దీవులు'
		},
		{ iso_code: 'MTQ', locale_id: 'te-IN', country_name: 'మార్టినీక్' },
		{ iso_code: 'MRT', locale_id: 'te-IN', country_name: 'మారిటేనియా' },
		{ iso_code: 'MSR', locale_id: 'te-IN', country_name: 'మాంట్సెరాట్' },
		{ iso_code: 'MLT', locale_id: 'te-IN', country_name: 'మాల్టా' },
		{ iso_code: 'MUS', locale_id: 'te-IN', country_name: 'మారిషస్' },
		{ iso_code: 'MDV', locale_id: 'te-IN', country_name: 'మాల్దీవులు' },
		{ iso_code: 'MWI', locale_id: 'te-IN', country_name: 'మలావీ' },
		{ iso_code: 'MEX', locale_id: 'te-IN', country_name: 'మెక్సికో' },
		{ iso_code: 'MYS', locale_id: 'te-IN', country_name: 'మలేషియా' },
		{ iso_code: 'MOZ', locale_id: 'te-IN', country_name: 'మొజాంబిక్' },
		{ iso_code: 'NAM', locale_id: 'te-IN', country_name: 'నమీబియా' },
		{
			iso_code: 'NCL',
			locale_id: 'te-IN',
			country_name: 'కొత్త కాలెడోనియా'
		},
		{ iso_code: 'NER', locale_id: 'te-IN', country_name: 'నైజర్' },
		{ iso_code: 'NFK', locale_id: 'te-IN', country_name: 'నార్ఫోక్ దీవి' },
		{ iso_code: 'NGA', locale_id: 'te-IN', country_name: 'నైజీరియా' },
		{ iso_code: 'NIC', locale_id: 'te-IN', country_name: 'నికరాగువా' },
		{ iso_code: 'NLD', locale_id: 'te-IN', country_name: 'నెదర్లాండ్స్' },
		{ iso_code: 'NOR', locale_id: 'te-IN', country_name: 'నార్వే' },
		{ iso_code: 'NPL', locale_id: 'te-IN', country_name: 'నేపాల్' },
		{ iso_code: 'NRU', locale_id: 'te-IN', country_name: 'నౌరు' },
		{ iso_code: 'NIU', locale_id: 'te-IN', country_name: 'నియూ' },
		{ iso_code: 'NZL', locale_id: 'te-IN', country_name: 'న్యూజిలాండ్' },
		{ iso_code: 'OMN', locale_id: 'te-IN', country_name: 'ఓమన్' },
		{ iso_code: 'PAN', locale_id: 'te-IN', country_name: 'పనామా' },
		{ iso_code: 'PER', locale_id: 'te-IN', country_name: 'పెరూ' },
		{
			iso_code: 'PYF',
			locale_id: 'te-IN',
			country_name: 'ఫ్రెంచ్ పోలినీషియా'
		},
		{
			iso_code: 'PNG',
			locale_id: 'te-IN',
			country_name: 'పాపువా న్యూ గినియా'
		},
		{ iso_code: 'PHL', locale_id: 'te-IN', country_name: 'ఫిలిప్పైన్స్' },
		{ iso_code: 'PAK', locale_id: 'te-IN', country_name: 'పాకిస్తాన్' },
		{ iso_code: 'POL', locale_id: 'te-IN', country_name: 'పోలాండ్' },
		{
			iso_code: 'SPM',
			locale_id: 'te-IN',
			country_name: 'సెయింట్ పియెర్ మరియు మికెలాన్'
		},
		{
			iso_code: 'PCN',
			locale_id: 'te-IN',
			country_name: 'పిట్‌కెయిర్న్ దీవులు'
		},
		{ iso_code: 'PRI', locale_id: 'te-IN', country_name: 'ప్యూర్టో రికో' },
		{
			iso_code: 'PSE',
			locale_id: 'te-IN',
			country_name: 'పాలస్తీనియన్ ప్రాంతాలు'
		},
		{ iso_code: 'PRT', locale_id: 'te-IN', country_name: 'పోర్చుగల్' },
		{ iso_code: 'PLW', locale_id: 'te-IN', country_name: 'పాలావ్' },
		{ iso_code: 'PRY', locale_id: 'te-IN', country_name: 'పరాగ్వే' },
		{ iso_code: 'QAT', locale_id: 'te-IN', country_name: 'ఖతార్' },
		{ iso_code: 'REU', locale_id: 'te-IN', country_name: 'రీయూనియన్' },
		{ iso_code: 'ROU', locale_id: 'te-IN', country_name: 'రోమేనియా' },
		{ iso_code: 'SRB', locale_id: 'te-IN', country_name: 'సెర్బియా' },
		{ iso_code: 'RUS', locale_id: 'te-IN', country_name: 'రష్యా' },
		{ iso_code: 'RWA', locale_id: 'te-IN', country_name: 'రువాండా' },
		{ iso_code: 'SAU', locale_id: 'te-IN', country_name: 'సౌదీ అరేబియా' },
		{ iso_code: 'SLB', locale_id: 'te-IN', country_name: 'సోలమన్ దీవులు' },
		{ iso_code: 'SYC', locale_id: 'te-IN', country_name: 'సీషెల్స్' },
		{ iso_code: 'SDN', locale_id: 'te-IN', country_name: 'సూడాన్' },
		{ iso_code: 'SWE', locale_id: 'te-IN', country_name: 'స్వీడన్' },
		{ iso_code: 'SGP', locale_id: 'te-IN', country_name: 'సింగపూర్' },
		{ iso_code: 'SHN', locale_id: 'te-IN', country_name: 'సెయింట్ హెలెనా' },
		{ iso_code: 'SVN', locale_id: 'te-IN', country_name: 'స్లోవేనియా' },
		{
			iso_code: 'SJM',
			locale_id: 'te-IN',
			country_name: 'స్వాల్‌బార్డ్ మరియు జాన్ మాయెన్'
		},
		{ iso_code: 'SVK', locale_id: 'te-IN', country_name: 'స్లొవేకియా' },
		{
			iso_code: 'SLE',
			locale_id: 'te-IN',
			country_name: 'సియెర్రా లియాన్'
		},
		{ iso_code: 'SMR', locale_id: 'te-IN', country_name: 'శాన్ మారినో' },
		{ iso_code: 'SEN', locale_id: 'te-IN', country_name: 'సెనెగల్' },
		{ iso_code: 'SOM', locale_id: 'te-IN', country_name: 'సోమాలియా' },
		{ iso_code: 'SUR', locale_id: 'te-IN', country_name: 'సూరినామ్' },
		{ iso_code: 'SSD', locale_id: 'te-IN', country_name: 'దక్షిణ సూడాన్' },
		{
			iso_code: 'STP',
			locale_id: 'te-IN',
			country_name: 'సావో టోమ్ మరియు ప్రిన్సిపి'
		},
		{ iso_code: 'SLV', locale_id: 'te-IN', country_name: 'ఎల్ సాల్వడోర్' },
		{ iso_code: 'SXM', locale_id: 'te-IN', country_name: 'సింట్ మార్టెన్' },
		{ iso_code: 'SYR', locale_id: 'te-IN', country_name: 'సిరియా' },
		{ iso_code: 'SWZ', locale_id: 'te-IN', country_name: 'ఈస్వాటిని' },
		{
			iso_code: 'TCA',
			locale_id: 'te-IN',
			country_name: 'టర్క్స్ & కైకోస్ దీవులు'
		},
		{ iso_code: 'TCD', locale_id: 'te-IN', country_name: 'చాద్' },
		{
			iso_code: 'ATF',
			locale_id: 'te-IN',
			country_name: 'ఫ్రెంచ్ దక్షిణ ప్రాంతాలు'
		},
		{ iso_code: 'TGO', locale_id: 'te-IN', country_name: 'టోగో' },
		{ iso_code: 'THA', locale_id: 'te-IN', country_name: 'థాయిలాండ్' },
		{ iso_code: 'TJK', locale_id: 'te-IN', country_name: 'తజికిస్తాన్' },
		{ iso_code: 'TKL', locale_id: 'te-IN', country_name: 'టోకెలావ్' },
		{ iso_code: 'TLS', locale_id: 'te-IN', country_name: 'టిమోర్-లెస్టె' },
		{
			iso_code: 'TKM',
			locale_id: 'te-IN',
			country_name: 'టర్క్‌మెనిస్తాన్'
		},
		{ iso_code: 'TUN', locale_id: 'te-IN', country_name: 'ట్యునీషియా' },
		{ iso_code: 'TON', locale_id: 'te-IN', country_name: 'టోంగా' },
		{ iso_code: 'TUR', locale_id: 'te-IN', country_name: 'తుర్కియె' },
		{
			iso_code: 'TTO',
			locale_id: 'te-IN',
			country_name: 'ట్రినిడాడ్ మరియు టొబాగో'
		},
		{ iso_code: 'TUV', locale_id: 'te-IN', country_name: 'టువాలు' },
		{ iso_code: 'TWN', locale_id: 'te-IN', country_name: 'తైవాన్' },
		{ iso_code: 'TZA', locale_id: 'te-IN', country_name: 'టాంజానియా' },
		{ iso_code: 'UKR', locale_id: 'te-IN', country_name: 'ఉక్రెయిన్' },
		{ iso_code: 'UGA', locale_id: 'te-IN', country_name: 'ఉగాండా' },
		{
			iso_code: 'UMI',
			locale_id: 'te-IN',
			country_name: 'U.S. బయట ఉన్న దీవులు'
		},
		{
			iso_code: 'USA',
			locale_id: 'te-IN',
			country_name: 'యునైటెడ్ స్టేట్స్'
		},
		{ iso_code: 'URY', locale_id: 'te-IN', country_name: 'ఉరుగ్వే' },
		{ iso_code: 'UZB', locale_id: 'te-IN', country_name: 'ఉజ్బెకిస్తాన్' },
		{ iso_code: 'VAT', locale_id: 'te-IN', country_name: 'వాటికన్ నగరం' },
		{
			iso_code: 'VCT',
			locale_id: 'te-IN',
			country_name: 'సెయింట్ విన్సెంట్ మరియు గ్రెనడీన్స్'
		},
		{ iso_code: 'VEN', locale_id: 'te-IN', country_name: 'వెనిజులా' },
		{
			iso_code: 'VGB',
			locale_id: 'te-IN',
			country_name: 'బ్రిటిష్ వర్జిన్ దీవులు'
		},
		{
			iso_code: 'VIR',
			locale_id: 'te-IN',
			country_name: 'యు.ఎస్. వర్జిన్ దీవులు'
		},
		{ iso_code: 'VNM', locale_id: 'te-IN', country_name: 'వియత్నాం' },
		{ iso_code: 'VUT', locale_id: 'te-IN', country_name: 'వనాటు' },
		{
			iso_code: 'WLF',
			locale_id: 'te-IN',
			country_name: 'వాల్లిస్ మరియు ఫుటునా'
		},
		{ iso_code: 'WSM', locale_id: 'te-IN', country_name: 'సమోవా' },
		{ iso_code: 'YEM', locale_id: 'te-IN', country_name: 'యెమెన్' },
		{ iso_code: 'MYT', locale_id: 'te-IN', country_name: 'మాయొట్' },
		{ iso_code: 'ZAF', locale_id: 'te-IN', country_name: 'దక్షిణ ఆఫ్రికా' },
		{ iso_code: 'ZMB', locale_id: 'te-IN', country_name: 'జాంబియా' },
		{ iso_code: 'ZWE', locale_id: 'te-IN', country_name: 'జింబాబ్వే' }
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
