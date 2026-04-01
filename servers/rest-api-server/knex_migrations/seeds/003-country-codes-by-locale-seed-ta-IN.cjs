/* eslint-disable security/detect-object-injection */
/**
 * Static seed for country_code_by_locale with ta-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * country names for the ta-IN locale.
			country_name: 'மியான்மர்'
 * This seed depends on:
 * - 001-country-codes-seed.cjs (populates country_code_master)
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 003-country-codes-by-locale-seed-ta-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM country_code_by_locale WHERE locale_id = 'ta-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for ta-IN locale
	const rows = [
		{ iso_code: 'AND', locale_id: 'ta-IN', country_name: 'அன்டோரா' },
		{
			iso_code: 'ARE',
			locale_id: 'ta-IN',
			country_name: 'ஐக்கிய அரபு அமீரகம்'
		},
		{ iso_code: 'AFG', locale_id: 'ta-IN', country_name: 'ஆஃப்கானிஸ்தான்' },
		{
			iso_code: 'ATG',
			locale_id: 'ta-IN',
			country_name: 'ஆண்டிகுவா மற்றும் பார்புடா'
		},
		{ iso_code: 'AIA', locale_id: 'ta-IN', country_name: 'அங்கியுலா' },
		{ iso_code: 'ALB', locale_id: 'ta-IN', country_name: 'அல்பேனியா' },
		{ iso_code: 'ARM', locale_id: 'ta-IN', country_name: 'அர்மேனியா' },
		{ iso_code: 'AGO', locale_id: 'ta-IN', country_name: 'அங்கோலா' },
		{ iso_code: 'ATA', locale_id: 'ta-IN', country_name: 'அண்டார்டிகா' },
		{ iso_code: 'ARG', locale_id: 'ta-IN', country_name: 'அர்ஜென்டினா' },
		{ iso_code: 'ASM', locale_id: 'ta-IN', country_name: 'அமெரிக்க சமோவா' },
		{ iso_code: 'AUT', locale_id: 'ta-IN', country_name: 'ஆஸ்திரியா' },
		{ iso_code: 'AUS', locale_id: 'ta-IN', country_name: 'ஆஸ்திரேலியா' },
		{ iso_code: 'ABW', locale_id: 'ta-IN', country_name: 'அரூபா' },
		{ iso_code: 'ALA', locale_id: 'ta-IN', country_name: 'ஆலந்து தீவுகள்' },
		{ iso_code: 'AZE', locale_id: 'ta-IN', country_name: 'அசர்பைஜான்' },
		{
			iso_code: 'BIH',
			locale_id: 'ta-IN',
			country_name: 'போஸ்னியா & ஹெர்ஸகோவினா'
		},
		{ iso_code: 'BRB', locale_id: 'ta-IN', country_name: 'பார்படாஸ்' },
		{ iso_code: 'BGD', locale_id: 'ta-IN', country_name: 'பங்களாதேஷ்' },
		{ iso_code: 'BEL', locale_id: 'ta-IN', country_name: 'பெல்ஜியம்' },
		{ iso_code: 'BFA', locale_id: 'ta-IN', country_name: 'புர்கினா ஃபாஸோ' },
		{ iso_code: 'BGR', locale_id: 'ta-IN', country_name: 'பல்கேரியா' },
		{ iso_code: 'BHR', locale_id: 'ta-IN', country_name: 'பஹ்ரைன்' },
		{ iso_code: 'BDI', locale_id: 'ta-IN', country_name: 'புருண்டி' },
		{ iso_code: 'BEN', locale_id: 'ta-IN', country_name: 'பெனின்' },
		{
			iso_code: 'BLM',
			locale_id: 'ta-IN',
			country_name: 'செயின்ட் பார்தேலெமி'
		},
		{ iso_code: 'BMU', locale_id: 'ta-IN', country_name: 'பெர்முடா' },
		{ iso_code: 'BRN', locale_id: 'ta-IN', country_name: 'புருனே' },
		{ iso_code: 'BOL', locale_id: 'ta-IN', country_name: 'பொலிவியா' },
		{
			iso_code: 'BES',
			locale_id: 'ta-IN',
			country_name: 'கரீபியன் நெதர்லாந்து'
		},
		{ iso_code: 'BRA', locale_id: 'ta-IN', country_name: 'பிரேசில்' },
		{ iso_code: 'BHS', locale_id: 'ta-IN', country_name: 'பஹாமாஸ்' },
		{ iso_code: 'BTN', locale_id: 'ta-IN', country_name: 'பூடான்' },
		{ iso_code: 'BVT', locale_id: 'ta-IN', country_name: 'பொவேட் தீவு' },
		{ iso_code: 'BWA', locale_id: 'ta-IN', country_name: 'போட்ஸ்வானா' },
		{ iso_code: 'BLR', locale_id: 'ta-IN', country_name: 'பெலாரஸ்' },
		{ iso_code: 'BLZ', locale_id: 'ta-IN', country_name: 'பெலிஸ்' },
		{ iso_code: 'CAN', locale_id: 'ta-IN', country_name: 'கனடா' },
		{
			iso_code: 'CCK',
			locale_id: 'ta-IN',
			country_name: 'கோகோஸ் (கீலிங்) தீவுகள்'
		},
		{
			iso_code: 'ZAR',
			locale_id: 'ta-IN',
			country_name: 'காங்கோ - கின்ஷாசா'
		},
		{
			iso_code: 'CAF',
			locale_id: 'ta-IN',
			country_name: 'மத்திய ஆப்ரிக்கக் குடியரசு'
		},
		{
			iso_code: 'COG',
			locale_id: 'ta-IN',
			country_name: 'காங்கோ - ப்ராஸாவில்லே'
		},
		{
			iso_code: 'CHE',
			locale_id: 'ta-IN',
			country_name: 'ஸ்விட்சர்லாந்து'
		},
		{ iso_code: 'CIV', locale_id: 'ta-IN', country_name: 'கோட் தி’வாயர்' },
		{ iso_code: 'COK', locale_id: 'ta-IN', country_name: 'குக் தீவுகள்' },
		{ iso_code: 'CHL', locale_id: 'ta-IN', country_name: 'சிலி' },
		{ iso_code: 'CMR', locale_id: 'ta-IN', country_name: 'கேமரூன்' },
		{ iso_code: 'CHN', locale_id: 'ta-IN', country_name: 'சீனா' },
		{ iso_code: 'COL', locale_id: 'ta-IN', country_name: 'கொலம்பியா' },
		{ iso_code: 'CRI', locale_id: 'ta-IN', country_name: 'கோஸ்டாரிகா' },
		{ iso_code: 'CUB', locale_id: 'ta-IN', country_name: 'கியூபா' },
		{ iso_code: 'CPV', locale_id: 'ta-IN', country_name: 'கேப் வெர்டே' },
		{ iso_code: 'CUW', locale_id: 'ta-IN', country_name: 'குராகவ்' },
		{
			iso_code: 'CXR',
			locale_id: 'ta-IN',
			country_name: 'கிறிஸ்துமஸ் தீவு'
		},
		{ iso_code: 'CYP', locale_id: 'ta-IN', country_name: 'சைப்ரஸ்' },
		{ iso_code: 'CZE', locale_id: 'ta-IN', country_name: 'செசியா' },
		{ iso_code: 'DEU', locale_id: 'ta-IN', country_name: 'ஜெர்மனி' },
		{ iso_code: 'DJI', locale_id: 'ta-IN', country_name: 'ஜிபௌட்டி' },
		{ iso_code: 'DNK', locale_id: 'ta-IN', country_name: 'டென்மார்க்' },
		{ iso_code: 'DMA', locale_id: 'ta-IN', country_name: 'டொமினிகா' },
		{
			iso_code: 'DOM',
			locale_id: 'ta-IN',
			country_name: 'டொமினிகன் குடியரசு'
		},
		{ iso_code: 'DZA', locale_id: 'ta-IN', country_name: 'அல்ஜீரியா' },
		{ iso_code: 'ECU', locale_id: 'ta-IN', country_name: 'ஈக்வடார்' },
		{ iso_code: 'EST', locale_id: 'ta-IN', country_name: 'எஸ்டோனியா' },
		{ iso_code: 'EGY', locale_id: 'ta-IN', country_name: 'எகிப்து' },
		{ iso_code: 'ESH', locale_id: 'ta-IN', country_name: 'மேற்கு சஹாரா' },
		{ iso_code: 'ERI', locale_id: 'ta-IN', country_name: 'எரிட்ரியா' },
		{ iso_code: 'ESP', locale_id: 'ta-IN', country_name: 'ஸ்பெயின்' },
		{ iso_code: 'ETH', locale_id: 'ta-IN', country_name: 'எத்தியோப்பியா' },
		{ iso_code: 'FIN', locale_id: 'ta-IN', country_name: 'பின்லாந்து' },
		{ iso_code: 'FJI', locale_id: 'ta-IN', country_name: 'ஃபிஜி' },
		{
			iso_code: 'FLK',
			locale_id: 'ta-IN',
			country_name: 'ஃபாக்லாந்து தீவுகள்'
		},
		{ iso_code: 'FSM', locale_id: 'ta-IN', country_name: 'மைக்ரோனேஷியா' },
		{ iso_code: 'FRO', locale_id: 'ta-IN', country_name: 'ஃபாரோ தீவுகள்' },
		{ iso_code: 'FRA', locale_id: 'ta-IN', country_name: 'பிரான்ஸ்' },
		{ iso_code: 'GAB', locale_id: 'ta-IN', country_name: 'கேபான்' },
		{
			iso_code: 'GBR',
			locale_id: 'ta-IN',
			country_name: 'யுனைடெட் கிங்டம்'
		},
		{ iso_code: 'GRD', locale_id: 'ta-IN', country_name: 'கிரனெடா' },
		{ iso_code: 'GEO', locale_id: 'ta-IN', country_name: 'ஜார்ஜியா' },
		{ iso_code: 'GUF', locale_id: 'ta-IN', country_name: 'பிரெஞ்சு கயானா' },
		{ iso_code: 'GGY', locale_id: 'ta-IN', country_name: 'கெர்ன்சி' },
		{ iso_code: 'GHA', locale_id: 'ta-IN', country_name: 'கானா' },
		{ iso_code: 'GIB', locale_id: 'ta-IN', country_name: 'ஜிப்ரால்டர்' },
		{ iso_code: 'GRL', locale_id: 'ta-IN', country_name: 'கிரீன்லாந்து' },
		{ iso_code: 'GMB', locale_id: 'ta-IN', country_name: 'காம்பியா' },
		{ iso_code: 'GIN', locale_id: 'ta-IN', country_name: 'கினியா' },
		{ iso_code: 'GLP', locale_id: 'ta-IN', country_name: 'க்வாதேலோப்' },
		{
			iso_code: 'GNQ',
			locale_id: 'ta-IN',
			country_name: 'ஈக்வடோரியல் கினியா'
		},
		{ iso_code: 'GRC', locale_id: 'ta-IN', country_name: 'கிரீஸ்' },
		{
			iso_code: 'SGS',
			locale_id: 'ta-IN',
			country_name: 'தெற்கு ஜார்ஜியா மற்றும் தெற்கு சாண்ட்விச் தீவுகள்'
		},
		{ iso_code: 'GTM', locale_id: 'ta-IN', country_name: 'கவுதமாலா' },
		{ iso_code: 'GUM', locale_id: 'ta-IN', country_name: 'குவாம்' },
		{
			iso_code: 'GNB',
			locale_id: 'ta-IN',
			country_name: 'கினியா-பிஸ்ஸாவ்'
		},
		{ iso_code: 'GUY', locale_id: 'ta-IN', country_name: 'கயானா' },
		{
			iso_code: 'HKG',
			locale_id: 'ta-IN',
			country_name: 'ஹாங்காங் எஸ்ஏஆர் சீனா'
		},
		{
			iso_code: 'HMD',
			locale_id: 'ta-IN',
			country_name: 'ஹேர்ட் மற்றும் மெக்டொனால்டு தீவுகள்'
		},
		{ iso_code: 'HND', locale_id: 'ta-IN', country_name: 'ஹோண்டூராஸ்' },
		{ iso_code: 'HRV', locale_id: 'ta-IN', country_name: 'குரோஷியா' },
		{ iso_code: 'HTI', locale_id: 'ta-IN', country_name: 'ஹைட்டி' },
		{ iso_code: 'HUN', locale_id: 'ta-IN', country_name: 'ஹங்கேரி' },
		{ iso_code: 'IDN', locale_id: 'ta-IN', country_name: 'இந்தோனேசியா' },
		{ iso_code: 'IRL', locale_id: 'ta-IN', country_name: 'அயர்லாந்து' },
		{ iso_code: 'ISR', locale_id: 'ta-IN', country_name: 'இஸ்ரேல்' },
		{ iso_code: 'IMN', locale_id: 'ta-IN', country_name: 'ஐல் ஆஃப் மேன்' },
		{ iso_code: 'IND', locale_id: 'ta-IN', country_name: 'இந்தியா' },
		{
			iso_code: 'IOT',
			locale_id: 'ta-IN',
			country_name: 'பிரிட்டிஷ் இந்தியப் பெருங்கடல் பிரதேசம்'
		},
		{ iso_code: 'IRQ', locale_id: 'ta-IN', country_name: 'ஈராக்' },
		{ iso_code: 'IRN', locale_id: 'ta-IN', country_name: 'ஈரான்' },
		{ iso_code: 'ISL', locale_id: 'ta-IN', country_name: 'ஐஸ்லாந்து' },
		{ iso_code: 'ITA', locale_id: 'ta-IN', country_name: 'இத்தாலி' },
		{ iso_code: 'JEY', locale_id: 'ta-IN', country_name: 'ஜெர்சி' },
		{ iso_code: 'JAM', locale_id: 'ta-IN', country_name: 'ஜமைக்கா' },
		{ iso_code: 'JOR', locale_id: 'ta-IN', country_name: 'ஜோர்டான்' },
		{ iso_code: 'JPN', locale_id: 'ta-IN', country_name: 'ஜப்பான்' },
		{ iso_code: 'KEN', locale_id: 'ta-IN', country_name: 'கென்யா' },
		{ iso_code: 'KGZ', locale_id: 'ta-IN', country_name: 'கிர்கிஸ்தான்' },
		{ iso_code: 'KHM', locale_id: 'ta-IN', country_name: 'கம்போடியா' },
		{ iso_code: 'KIR', locale_id: 'ta-IN', country_name: 'கிரிபாட்டி' },
		{ iso_code: 'COM', locale_id: 'ta-IN', country_name: 'கோமரோஸ்' },
		{
			iso_code: 'KNA',
			locale_id: 'ta-IN',
			country_name: 'செயின்ட் கிட்ஸ் & நெவிஸ்'
		},
		{ iso_code: 'PRK', locale_id: 'ta-IN', country_name: 'வட கொரியா' },
		{ iso_code: 'KOR', locale_id: 'ta-IN', country_name: 'தென் கொரியா' },
		{ iso_code: 'KWT', locale_id: 'ta-IN', country_name: 'குவைத்' },
		{
			iso_code: 'CYM',
			locale_id: 'ta-IN',
			country_name: 'கெய்மென் தீவுகள்'
		},
		{ iso_code: 'KAZ', locale_id: 'ta-IN', country_name: 'கஸகஸ்தான்' },
		{ iso_code: 'LAO', locale_id: 'ta-IN', country_name: 'லாவோஸ்' },
		{ iso_code: 'LBN', locale_id: 'ta-IN', country_name: 'லெபனான்' },
		{
			iso_code: 'LCA',
			locale_id: 'ta-IN',
			country_name: 'செயின்ட் லூசியா'
		},
		{
			iso_code: 'LIE',
			locale_id: 'ta-IN',
			country_name: 'லிச்செண்ஸ்டெய்ன்'
		},
		{ iso_code: 'LKA', locale_id: 'ta-IN', country_name: 'இலங்கை' },
		{ iso_code: 'LBR', locale_id: 'ta-IN', country_name: 'லைபீரியா' },
		{ iso_code: 'LSO', locale_id: 'ta-IN', country_name: 'லெசோதோ' },
		{ iso_code: 'LTU', locale_id: 'ta-IN', country_name: 'லிதுவேனியா' },
		{ iso_code: 'LUX', locale_id: 'ta-IN', country_name: 'லக்ஸ்சம்பர்க்' },
		{ iso_code: 'LVA', locale_id: 'ta-IN', country_name: 'லாட்வியா' },
		{ iso_code: 'LBY', locale_id: 'ta-IN', country_name: 'லிபியா' },
		{ iso_code: 'MAR', locale_id: 'ta-IN', country_name: 'மொராக்கோ' },
		{ iso_code: 'MCO', locale_id: 'ta-IN', country_name: 'மொனாக்கோ' },
		{ iso_code: 'MDA', locale_id: 'ta-IN', country_name: 'மால்டோவா' },
		{ iso_code: 'MNE', locale_id: 'ta-IN', country_name: 'மான்டேனெக்ரோ' },
		{
			iso_code: 'MAF',
			locale_id: 'ta-IN',
			country_name: 'செயின்ட் மார்ட்டீன்'
		},
		{ iso_code: 'MDG', locale_id: 'ta-IN', country_name: 'மடகாஸ்கர்' },
		{
			iso_code: 'MHL',
			locale_id: 'ta-IN',
			country_name: 'மார்ஷல் தீவுகள்'
		},
		{
			iso_code: 'MKD',
			locale_id: 'ta-IN',
			country_name: 'வடக்கு மாசிடோனியா'
		},
		{ iso_code: 'MLI', locale_id: 'ta-IN', country_name: 'மாலி' },
		{
			iso_code: 'MMR',
			locale_id: 'ta-IN',
			country_name: 'மியான்மர்'
		},
		{ iso_code: 'MNG', locale_id: 'ta-IN', country_name: 'மங்கோலியா' },
		{
			iso_code: 'MAC',
			locale_id: 'ta-IN',
			country_name: 'மகாவ் எஸ்ஏஆர் சீனா'
		},
		{
			iso_code: 'MNP',
			locale_id: 'ta-IN',
			country_name: 'வடக்கு மரியானா தீவுகள்'
		},
		{ iso_code: 'MTQ', locale_id: 'ta-IN', country_name: 'மார்டினிக்' },
		{ iso_code: 'MRT', locale_id: 'ta-IN', country_name: 'மௌரிடானியா' },
		{ iso_code: 'MSR', locale_id: 'ta-IN', country_name: 'மாண்ட்செராட்' },
		{ iso_code: 'MLT', locale_id: 'ta-IN', country_name: 'மால்டா' },
		{ iso_code: 'MUS', locale_id: 'ta-IN', country_name: 'மொரிசியஸ்' },
		{ iso_code: 'MDV', locale_id: 'ta-IN', country_name: 'மாலத்தீவு' },
		{ iso_code: 'MWI', locale_id: 'ta-IN', country_name: 'மலாவி' },
		{ iso_code: 'MEX', locale_id: 'ta-IN', country_name: 'மெக்சிகோ' },
		{ iso_code: 'MYS', locale_id: 'ta-IN', country_name: 'மலேசியா' },
		{ iso_code: 'MOZ', locale_id: 'ta-IN', country_name: 'மொசாம்பிக்' },
		{ iso_code: 'NAM', locale_id: 'ta-IN', country_name: 'நமீபியா' },
		{
			iso_code: 'NCL',
			locale_id: 'ta-IN',
			country_name: 'நியூ கேலிடோனியா'
		},
		{ iso_code: 'NER', locale_id: 'ta-IN', country_name: 'நைஜர்' },
		{ iso_code: 'NFK', locale_id: 'ta-IN', country_name: 'நார்ஃபோக் தீவு' },
		{ iso_code: 'NGA', locale_id: 'ta-IN', country_name: 'நைஜீரியா' },
		{ iso_code: 'NIC', locale_id: 'ta-IN', country_name: 'நிகரகுவா' },
		{ iso_code: 'NLD', locale_id: 'ta-IN', country_name: 'நெதர்லாந்து' },
		{ iso_code: 'NOR', locale_id: 'ta-IN', country_name: 'நார்வே' },
		{ iso_code: 'NPL', locale_id: 'ta-IN', country_name: 'நேபாளம்' },
		{ iso_code: 'NRU', locale_id: 'ta-IN', country_name: 'நௌரு' },
		{ iso_code: 'NIU', locale_id: 'ta-IN', country_name: 'நியுவே' },
		{ iso_code: 'NZL', locale_id: 'ta-IN', country_name: 'நியூசிலாந்து' },
		{ iso_code: 'OMN', locale_id: 'ta-IN', country_name: 'ஓமன்' },
		{ iso_code: 'PAN', locale_id: 'ta-IN', country_name: 'பனாமா' },
		{ iso_code: 'PER', locale_id: 'ta-IN', country_name: 'பெரு' },
		{
			iso_code: 'PYF',
			locale_id: 'ta-IN',
			country_name: 'பிரெஞ்சு பாலினேஷியா'
		},
		{
			iso_code: 'PNG',
			locale_id: 'ta-IN',
			country_name: 'பப்புவா நியூ கினியா'
		},
		{ iso_code: 'PHL', locale_id: 'ta-IN', country_name: 'பிலிப்பைன்ஸ்' },
		{ iso_code: 'PAK', locale_id: 'ta-IN', country_name: 'பாகிஸ்தான்' },
		{ iso_code: 'POL', locale_id: 'ta-IN', country_name: 'போலந்து' },
		{
			iso_code: 'SPM',
			locale_id: 'ta-IN',
			country_name: 'செயின்ட் பியர் & மிக்வேலான்'
		},
		{
			iso_code: 'PCN',
			locale_id: 'ta-IN',
			country_name: 'பிட்கெய்ர்ன் தீவுகள்'
		},
		{ iso_code: 'PRI', locale_id: 'ta-IN', country_name: 'பியூர்டோ ரிகோ' },
		{
			iso_code: 'PSE',
			locale_id: 'ta-IN',
			country_name: 'பாலஸ்தீனிய பிரதேசங்கள்'
		},
		{ iso_code: 'PRT', locale_id: 'ta-IN', country_name: 'போர்ச்சுக்கல்' },
		{ iso_code: 'PLW', locale_id: 'ta-IN', country_name: 'பாலோ' },
		{ iso_code: 'PRY', locale_id: 'ta-IN', country_name: 'பராகுவே' },
		{ iso_code: 'QAT', locale_id: 'ta-IN', country_name: 'கத்தார்' },
		{ iso_code: 'REU', locale_id: 'ta-IN', country_name: 'ரீயூனியன்' },
		{ iso_code: 'ROU', locale_id: 'ta-IN', country_name: 'ருமேனியா' },
		{ iso_code: 'SRB', locale_id: 'ta-IN', country_name: 'செர்பியா' },
		{ iso_code: 'RUS', locale_id: 'ta-IN', country_name: 'ரஷ்யா' },
		{ iso_code: 'RWA', locale_id: 'ta-IN', country_name: 'ருவாண்டா' },
		{ iso_code: 'SAU', locale_id: 'ta-IN', country_name: 'சவுதி அரேபியா' },
		{ iso_code: 'SLB', locale_id: 'ta-IN', country_name: 'சாலமன் தீவுகள்' },
		{ iso_code: 'SYC', locale_id: 'ta-IN', country_name: 'சீஷெல்ஸ்' },
		{ iso_code: 'SDN', locale_id: 'ta-IN', country_name: 'சூடான்' },
		{ iso_code: 'SWE', locale_id: 'ta-IN', country_name: 'ஸ்வீடன்' },
		{ iso_code: 'SGP', locale_id: 'ta-IN', country_name: 'சிங்கப்பூர்' },
		{
			iso_code: 'SHN',
			locale_id: 'ta-IN',
			country_name: 'செயின்ட் ஹெலெனா'
		},
		{ iso_code: 'SVN', locale_id: 'ta-IN', country_name: 'ஸ்லோவேனியா' },
		{
			iso_code: 'SJM',
			locale_id: 'ta-IN',
			country_name: 'ஸ்வல்பார்டு & ஜான் மேயன்'
		},
		{ iso_code: 'SVK', locale_id: 'ta-IN', country_name: 'ஸ்லோவாகியா' },
		{ iso_code: 'SLE', locale_id: 'ta-IN', country_name: 'சியாரா லியோன்' },
		{ iso_code: 'SMR', locale_id: 'ta-IN', country_name: 'சான் மரினோ' },
		{ iso_code: 'SEN', locale_id: 'ta-IN', country_name: 'செனெகல்' },
		{ iso_code: 'SOM', locale_id: 'ta-IN', country_name: 'சோமாலியா' },
		{ iso_code: 'SUR', locale_id: 'ta-IN', country_name: 'சுரினாம்' },
		{ iso_code: 'SSD', locale_id: 'ta-IN', country_name: 'தெற்கு சூடான்' },
		{
			iso_code: 'STP',
			locale_id: 'ta-IN',
			country_name: 'சாவ் தோம் & ப்ரின்சிபி'
		},
		{ iso_code: 'SLV', locale_id: 'ta-IN', country_name: 'எல் சால்வடார்' },
		{
			iso_code: 'SXM',
			locale_id: 'ta-IN',
			country_name: 'சின்ட் மார்டென்'
		},
		{ iso_code: 'SYR', locale_id: 'ta-IN', country_name: 'சிரியா' },
		{ iso_code: 'SWZ', locale_id: 'ta-IN', country_name: 'எஸ்வாட்டீனி' },
		{
			iso_code: 'TCA',
			locale_id: 'ta-IN',
			country_name: 'டர்க்ஸ் & கைகோஸ் தீவுகள்'
		},
		{ iso_code: 'TCD', locale_id: 'ta-IN', country_name: 'சாட்' },
		{
			iso_code: 'ATF',
			locale_id: 'ta-IN',
			country_name: 'பிரெஞ்சு தெற்கு பிரதேசங்கள்'
		},
		{ iso_code: 'TGO', locale_id: 'ta-IN', country_name: 'டோகோ' },
		{ iso_code: 'THA', locale_id: 'ta-IN', country_name: 'தாய்லாந்து' },
		{ iso_code: 'TJK', locale_id: 'ta-IN', country_name: 'தஜிகிஸ்தான்' },
		{ iso_code: 'TKL', locale_id: 'ta-IN', country_name: 'டோகேலோ' },
		{ iso_code: 'TLS', locale_id: 'ta-IN', country_name: 'திமோர்-லெஸ்தே' },
		{
			iso_code: 'TKM',
			locale_id: 'ta-IN',
			country_name: 'துர்க்மெனிஸ்தான்'
		},
		{ iso_code: 'TUN', locale_id: 'ta-IN', country_name: 'டுனிசியா' },
		{ iso_code: 'TON', locale_id: 'ta-IN', country_name: 'டோங்கா' },
		{ iso_code: 'TUR', locale_id: 'ta-IN', country_name: 'துருக்கியே' },
		{
			iso_code: 'TTO',
			locale_id: 'ta-IN',
			country_name: 'டிரினிடாட் & டொபாகோ'
		},
		{ iso_code: 'TUV', locale_id: 'ta-IN', country_name: 'துவாலு' },
		{ iso_code: 'TWN', locale_id: 'ta-IN', country_name: 'தைவான்' },
		{ iso_code: 'TZA', locale_id: 'ta-IN', country_name: 'தான்சானியா' },
		{ iso_code: 'UKR', locale_id: 'ta-IN', country_name: 'உக்ரைன்' },
		{ iso_code: 'UGA', locale_id: 'ta-IN', country_name: 'உகாண்டா' },
		{
			iso_code: 'UMI',
			locale_id: 'ta-IN',
			country_name: 'யூ.எஸ். வெளிப்புறத் தீவுகள்'
		},
		{ iso_code: 'USA', locale_id: 'ta-IN', country_name: 'அமெரிக்கா' },
		{ iso_code: 'URY', locale_id: 'ta-IN', country_name: 'உருகுவே' },
		{ iso_code: 'UZB', locale_id: 'ta-IN', country_name: 'உஸ்பெகிஸ்தான்' },
		{ iso_code: 'VAT', locale_id: 'ta-IN', country_name: 'வாடிகன் நகரம்' },
		{
			iso_code: 'VCT',
			locale_id: 'ta-IN',
			country_name: 'செயின்ட் வின்சென்ட் & கிரெனடைன்ஸ்'
		},
		{ iso_code: 'VEN', locale_id: 'ta-IN', country_name: 'வெனிசுலா' },
		{
			iso_code: 'VGB',
			locale_id: 'ta-IN',
			country_name: 'பிரிட்டீஷ் கன்னித் தீவுகள்'
		},
		{
			iso_code: 'VIR',
			locale_id: 'ta-IN',
			country_name: 'யூ.எஸ். கன்னித் தீவுகள்'
		},
		{ iso_code: 'VNM', locale_id: 'ta-IN', country_name: 'வியட்நாம்' },
		{ iso_code: 'VUT', locale_id: 'ta-IN', country_name: 'வனுவாட்டு' },
		{
			iso_code: 'WLF',
			locale_id: 'ta-IN',
			country_name: 'வாலிஸ் மற்றும் ஃபுடுனா'
		},
		{ iso_code: 'WSM', locale_id: 'ta-IN', country_name: 'சமோவா' },
		{ iso_code: 'YEM', locale_id: 'ta-IN', country_name: 'ஏமன்' },
		{ iso_code: 'MYT', locale_id: 'ta-IN', country_name: 'மயோட்' },
		{
			iso_code: 'ZAF',
			locale_id: 'ta-IN',
			country_name: 'தென் ஆப்பிரிக்கா'
		},
		{ iso_code: 'ZMB', locale_id: 'ta-IN', country_name: 'ஜாம்பியா' },
		{ iso_code: 'ZWE', locale_id: 'ta-IN', country_name: 'ஜிம்பாப்வே' }
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
