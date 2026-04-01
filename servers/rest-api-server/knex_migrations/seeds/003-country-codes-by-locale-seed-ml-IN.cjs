/* eslint-disable security/detect-object-injection */
/**
 * Static seed for country_code_by_locale with ml-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * country names for the ml-IN locale.
			country_name: 'മ്യാൻമാർ'
 * This seed depends on:
 * - 001-country-codes-seed.cjs (populates country_code_master)
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 003-country-codes-by-locale-seed-ml-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM country_code_by_locale WHERE locale_id = 'ml-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for ml-IN locale
	const rows = [
		{ iso_code: 'AND', locale_id: 'ml-IN', country_name: 'അൻഡോറ' },
		{
			iso_code: 'ARE',
			locale_id: 'ml-IN',
			country_name: 'യുണൈറ്റഡ് അറബ് എമിറൈറ്റ്‌സ്'
		},
		{ iso_code: 'AFG', locale_id: 'ml-IN', country_name: 'അഫ്‌ഗാനിസ്ഥാൻ' },
		{
			iso_code: 'ATG',
			locale_id: 'ml-IN',
			country_name: 'ആൻറിഗ്വയും ബർബുഡയും'
		},
		{ iso_code: 'AIA', locale_id: 'ml-IN', country_name: 'ആൻഗ്വില്ല' },
		{ iso_code: 'ALB', locale_id: 'ml-IN', country_name: 'അൽബേനിയ' },
		{ iso_code: 'ARM', locale_id: 'ml-IN', country_name: 'അർമേനിയ' },
		{ iso_code: 'AGO', locale_id: 'ml-IN', country_name: 'അംഗോള' },
		{ iso_code: 'ATA', locale_id: 'ml-IN', country_name: 'അന്റാർട്ടിക്ക' },
		{ iso_code: 'ARG', locale_id: 'ml-IN', country_name: 'അർജന്റീന' },
		{ iso_code: 'ASM', locale_id: 'ml-IN', country_name: 'അമേരിക്കൻ സമോവ' },
		{ iso_code: 'AUT', locale_id: 'ml-IN', country_name: 'ഓസ്ട്രിയ' },
		{ iso_code: 'AUS', locale_id: 'ml-IN', country_name: 'ഓസ്‌ട്രേലിയ' },
		{ iso_code: 'ABW', locale_id: 'ml-IN', country_name: 'അറൂബ' },
		{ iso_code: 'ALA', locale_id: 'ml-IN', country_name: 'അലൻഡ് ദ്വീപുകൾ' },
		{ iso_code: 'AZE', locale_id: 'ml-IN', country_name: 'അസർബൈജാൻ' },
		{
			iso_code: 'BIH',
			locale_id: 'ml-IN',
			country_name: 'ബോസ്നിയയും ഹെർസഗോവിനയും'
		},
		{ iso_code: 'BRB', locale_id: 'ml-IN', country_name: 'ബാർബഡോസ്' },
		{ iso_code: 'BGD', locale_id: 'ml-IN', country_name: 'ബംഗ്ലാദേശ്' },
		{ iso_code: 'BEL', locale_id: 'ml-IN', country_name: 'ബെൽജിയം' },
		{ iso_code: 'BFA', locale_id: 'ml-IN', country_name: 'ബർക്കിന ഫാസോ' },
		{ iso_code: 'BGR', locale_id: 'ml-IN', country_name: 'ബൾഗേറിയ' },
		{ iso_code: 'BHR', locale_id: 'ml-IN', country_name: 'ബഹ്റിൻ' },
		{ iso_code: 'BDI', locale_id: 'ml-IN', country_name: 'ബറുണ്ടി' },
		{ iso_code: 'BEN', locale_id: 'ml-IN', country_name: 'ബെനിൻ' },
		{
			iso_code: 'BLM',
			locale_id: 'ml-IN',
			country_name: 'സെന്റ് ബാർത്തലമി'
		},
		{ iso_code: 'BMU', locale_id: 'ml-IN', country_name: 'ബർമുഡ' },
		{ iso_code: 'BRN', locale_id: 'ml-IN', country_name: 'ബ്രൂണൈ' },
		{ iso_code: 'BOL', locale_id: 'ml-IN', country_name: 'ബൊളീവിയ' },
		{
			iso_code: 'BES',
			locale_id: 'ml-IN',
			country_name: 'കരീബിയൻ നെതർലാൻഡ്സ്'
		},
		{ iso_code: 'BRA', locale_id: 'ml-IN', country_name: 'ബ്രസീൽ' },
		{ iso_code: 'BHS', locale_id: 'ml-IN', country_name: 'ബഹാമാസ്' },
		{ iso_code: 'BTN', locale_id: 'ml-IN', country_name: 'ഭൂട്ടാൻ' },
		{
			iso_code: 'BVT',
			locale_id: 'ml-IN',
			country_name: 'ബൗവെട്ട് ദ്വീപ്'
		},
		{ iso_code: 'BWA', locale_id: 'ml-IN', country_name: 'ബോട്സ്വാന' },
		{ iso_code: 'BLR', locale_id: 'ml-IN', country_name: 'ബെലറൂസ്' },
		{ iso_code: 'BLZ', locale_id: 'ml-IN', country_name: 'ബെലീസ്' },
		{ iso_code: 'CAN', locale_id: 'ml-IN', country_name: 'കാനഡ' },
		{
			iso_code: 'CCK',
			locale_id: 'ml-IN',
			country_name: 'കോക്കസ് (കീലിംഗ്) ദ്വീപുകൾ'
		},
		{ iso_code: 'ZAR', locale_id: 'ml-IN', country_name: 'കോംഗോ - കിൻഷാസ' },
		{
			iso_code: 'CAF',
			locale_id: 'ml-IN',
			country_name: 'സെൻട്രൽ ആഫ്രിക്കൻ റിപ്പബ്ലിക്ക്'
		},
		{
			iso_code: 'COG',
			locale_id: 'ml-IN',
			country_name: 'കോംഗോ - ബ്രാസവില്ലി'
		},
		{
			iso_code: 'CHE',
			locale_id: 'ml-IN',
			country_name: 'സ്വിറ്റ്സർലാൻഡ്'
		},
		{ iso_code: 'CIV', locale_id: 'ml-IN', country_name: 'കോട്ട് ഡി വാർ' },
		{
			iso_code: 'COK',
			locale_id: 'ml-IN',
			country_name: 'കുക്ക് ദ്വീപുകൾ'
		},
		{ iso_code: 'CHL', locale_id: 'ml-IN', country_name: 'ചിലി' },
		{ iso_code: 'CMR', locale_id: 'ml-IN', country_name: 'കാമറൂൺ' },
		{ iso_code: 'CHN', locale_id: 'ml-IN', country_name: 'ചൈന' },
		{ iso_code: 'COL', locale_id: 'ml-IN', country_name: 'കൊളംബിയ' },
		{ iso_code: 'CRI', locale_id: 'ml-IN', country_name: 'കോസ്റ്ററിക്ക' },
		{ iso_code: 'CUB', locale_id: 'ml-IN', country_name: 'ക്യൂബ' },
		{ iso_code: 'CPV', locale_id: 'ml-IN', country_name: 'കേപ്പ് വേർഡ്' },
		{ iso_code: 'CUW', locale_id: 'ml-IN', country_name: 'കുറാകാവോ' },
		{
			iso_code: 'CXR',
			locale_id: 'ml-IN',
			country_name: 'ക്രിസ്മസ് ദ്വീപ്'
		},
		{ iso_code: 'CYP', locale_id: 'ml-IN', country_name: 'സൈപ്രസ്' },
		{ iso_code: 'CZE', locale_id: 'ml-IN', country_name: 'ചെക്കിയ' },
		{ iso_code: 'DEU', locale_id: 'ml-IN', country_name: 'ജർമ്മനി' },
		{ iso_code: 'DJI', locale_id: 'ml-IN', country_name: 'ജിബൂത്തി' },
		{ iso_code: 'DNK', locale_id: 'ml-IN', country_name: 'ഡെൻമാർക്ക്' },
		{ iso_code: 'DMA', locale_id: 'ml-IN', country_name: 'ഡൊമിനിക്ക' },
		{
			iso_code: 'DOM',
			locale_id: 'ml-IN',
			country_name: 'ഡൊമിനിക്കൻ റിപ്പബ്ലിക്ക്'
		},
		{ iso_code: 'DZA', locale_id: 'ml-IN', country_name: 'അൾജീരിയ' },
		{ iso_code: 'ECU', locale_id: 'ml-IN', country_name: 'ഇക്വഡോർ' },
		{ iso_code: 'EST', locale_id: 'ml-IN', country_name: 'എസ്റ്റോണിയ‍' },
		{ iso_code: 'EGY', locale_id: 'ml-IN', country_name: 'ഈജിപ്ത്' },
		{ iso_code: 'ESH', locale_id: 'ml-IN', country_name: 'പശ്ചിമ സഹാറ' },
		{ iso_code: 'ERI', locale_id: 'ml-IN', country_name: 'എറിത്രിയ' },
		{ iso_code: 'ESP', locale_id: 'ml-IN', country_name: 'സ്‌പെയിൻ' },
		{ iso_code: 'ETH', locale_id: 'ml-IN', country_name: 'എത്യോപ്യ' },
		{ iso_code: 'FIN', locale_id: 'ml-IN', country_name: 'ഫിൻലാൻഡ്' },
		{ iso_code: 'FJI', locale_id: 'ml-IN', country_name: 'ഫിജി' },
		{
			iso_code: 'FLK',
			locale_id: 'ml-IN',
			country_name: 'ഫാക്ക്‌ലാന്റ് ദ്വീപുകൾ'
		},
		{ iso_code: 'FSM', locale_id: 'ml-IN', country_name: 'മൈക്രോനേഷ്യ' },
		{ iso_code: 'FRO', locale_id: 'ml-IN', country_name: 'ഫറോ ദ്വീപുകൾ' },
		{ iso_code: 'FRA', locale_id: 'ml-IN', country_name: 'ഫ്രാൻസ്' },
		{ iso_code: 'GAB', locale_id: 'ml-IN', country_name: 'ഗാബൺ' },
		{
			iso_code: 'GBR',
			locale_id: 'ml-IN',
			country_name: 'യുണൈറ്റഡ് കിംഗ്ഡം'
		},
		{ iso_code: 'GRD', locale_id: 'ml-IN', country_name: 'ഗ്രനേഡ' },
		{ iso_code: 'GEO', locale_id: 'ml-IN', country_name: 'ജോർജ്ജിയ' },
		{ iso_code: 'GUF', locale_id: 'ml-IN', country_name: 'ഫ്രഞ്ച് ഗയാന' },
		{ iso_code: 'GGY', locale_id: 'ml-IN', country_name: 'ഗേൺസി' },
		{ iso_code: 'GHA', locale_id: 'ml-IN', country_name: 'ഘാന' },
		{ iso_code: 'GIB', locale_id: 'ml-IN', country_name: 'ജിബ്രാൾട്ടർ' },
		{ iso_code: 'GRL', locale_id: 'ml-IN', country_name: 'ഗ്രീൻലൻഡ്' },
		{ iso_code: 'GMB', locale_id: 'ml-IN', country_name: 'ഗാംബിയ' },
		{ iso_code: 'GIN', locale_id: 'ml-IN', country_name: 'ഗിനിയ' },
		{ iso_code: 'GLP', locale_id: 'ml-IN', country_name: 'ഗ്വാഡലൂപ്പ്' },
		{
			iso_code: 'GNQ',
			locale_id: 'ml-IN',
			country_name: 'ഇക്വറ്റോറിയൽ ഗിനിയ'
		},
		{ iso_code: 'GRC', locale_id: 'ml-IN', country_name: 'ഗ്രീസ്' },
		{
			iso_code: 'SGS',
			locale_id: 'ml-IN',
			country_name: 'ദക്ഷിണ ജോർജ്ജിയയും ദക്ഷിണ സാൻഡ്‌വിച്ച് ദ്വീപുകളും'
		},
		{ iso_code: 'GTM', locale_id: 'ml-IN', country_name: 'ഗ്വാട്ടിമാല' },
		{ iso_code: 'GUM', locale_id: 'ml-IN', country_name: 'ഗ്വാം' },
		{ iso_code: 'GNB', locale_id: 'ml-IN', country_name: 'ഗിനിയ-ബിസൗ' },
		{ iso_code: 'GUY', locale_id: 'ml-IN', country_name: 'ഗയാന' },
		{
			iso_code: 'HKG',
			locale_id: 'ml-IN',
			country_name: 'ഹോങ്കോങ് (SAR) ചൈന'
		},
		{
			iso_code: 'HMD',
			locale_id: 'ml-IN',
			country_name: 'ഹേർഡ്, മക്ഡോണൾഡ് ദ്വീപുകൾ'
		},
		{ iso_code: 'HND', locale_id: 'ml-IN', country_name: 'ഹോണ്ടുറാസ്' },
		{ iso_code: 'HRV', locale_id: 'ml-IN', country_name: 'ക്രൊയേഷ്യ' },
		{ iso_code: 'HTI', locale_id: 'ml-IN', country_name: 'ഹെയ്തി' },
		{ iso_code: 'HUN', locale_id: 'ml-IN', country_name: 'ഹംഗറി' },
		{ iso_code: 'IDN', locale_id: 'ml-IN', country_name: 'ഇന്തോനേഷ്യ' },
		{ iso_code: 'IRL', locale_id: 'ml-IN', country_name: 'അയർലൻഡ്' },
		{ iso_code: 'ISR', locale_id: 'ml-IN', country_name: 'ഇസ്രായേൽ' },
		{ iso_code: 'IMN', locale_id: 'ml-IN', country_name: 'ഐൽ ഓഫ് മാൻ' },
		{ iso_code: 'IND', locale_id: 'ml-IN', country_name: 'ഇന്ത്യ' },
		{
			iso_code: 'IOT',
			locale_id: 'ml-IN',
			country_name: 'ബ്രിട്ടീഷ് ഇന്ത്യൻ ഓഷ്യൻ ടെറിട്ടറി'
		},
		{ iso_code: 'IRQ', locale_id: 'ml-IN', country_name: 'ഇറാഖ്' },
		{ iso_code: 'IRN', locale_id: 'ml-IN', country_name: 'ഇറാൻ' },
		{ iso_code: 'ISL', locale_id: 'ml-IN', country_name: 'ഐസ്‌ലാന്റ്' },
		{ iso_code: 'ITA', locale_id: 'ml-IN', country_name: 'ഇറ്റലി' },
		{ iso_code: 'JEY', locale_id: 'ml-IN', country_name: 'ജേഴ്സി' },
		{ iso_code: 'JAM', locale_id: 'ml-IN', country_name: 'ജമൈക്ക' },
		{ iso_code: 'JOR', locale_id: 'ml-IN', country_name: 'ജോർദ്ദാൻ' },
		{ iso_code: 'JPN', locale_id: 'ml-IN', country_name: 'ജപ്പാൻ' },
		{ iso_code: 'KEN', locale_id: 'ml-IN', country_name: 'കെനിയ' },
		{ iso_code: 'KGZ', locale_id: 'ml-IN', country_name: 'കിർഗിസ്ഥാൻ' },
		{ iso_code: 'KHM', locale_id: 'ml-IN', country_name: 'കംബോഡിയ' },
		{ iso_code: 'KIR', locale_id: 'ml-IN', country_name: 'കിരിബാട്ടി' },
		{ iso_code: 'COM', locale_id: 'ml-IN', country_name: 'കോമൊറോസ്' },
		{
			iso_code: 'KNA',
			locale_id: 'ml-IN',
			country_name: 'സെന്റ് കിറ്റ്‌സും നെവിസും'
		},
		{ iso_code: 'PRK', locale_id: 'ml-IN', country_name: 'ഉത്തരകൊറിയ' },
		{ iso_code: 'KOR', locale_id: 'ml-IN', country_name: 'ദക്ഷിണകൊറിയ' },
		{ iso_code: 'KWT', locale_id: 'ml-IN', country_name: 'കുവൈറ്റ്' },
		{
			iso_code: 'CYM',
			locale_id: 'ml-IN',
			country_name: 'കേയ്മാൻ ദ്വീപുകൾ'
		},
		{ iso_code: 'KAZ', locale_id: 'ml-IN', country_name: 'കസാഖിസ്ഥാൻ' },
		{ iso_code: 'LAO', locale_id: 'ml-IN', country_name: 'ലാവോസ്' },
		{ iso_code: 'LBN', locale_id: 'ml-IN', country_name: 'ലെബനൻ' },
		{ iso_code: 'LCA', locale_id: 'ml-IN', country_name: 'സെന്റ് ലൂസിയ' },
		{ iso_code: 'LIE', locale_id: 'ml-IN', country_name: 'ലിച്ചൺസ്റ്റൈൻ' },
		{ iso_code: 'LKA', locale_id: 'ml-IN', country_name: 'ശ്രീലങ്ക' },
		{ iso_code: 'LBR', locale_id: 'ml-IN', country_name: 'ലൈബീരിയ' },
		{ iso_code: 'LSO', locale_id: 'ml-IN', country_name: 'ലെസോതോ' },
		{ iso_code: 'LTU', locale_id: 'ml-IN', country_name: 'ലിത്വാനിയ' },
		{ iso_code: 'LUX', locale_id: 'ml-IN', country_name: 'ലക്സംബർഗ്' },
		{ iso_code: 'LVA', locale_id: 'ml-IN', country_name: 'ലാറ്റ്വിയ' },
		{ iso_code: 'LBY', locale_id: 'ml-IN', country_name: 'ലിബിയ' },
		{ iso_code: 'MAR', locale_id: 'ml-IN', country_name: 'മൊറോക്കൊ' },
		{ iso_code: 'MCO', locale_id: 'ml-IN', country_name: 'മൊണാക്കോ' },
		{ iso_code: 'MDA', locale_id: 'ml-IN', country_name: 'മൾഡോവ' },
		{ iso_code: 'MNE', locale_id: 'ml-IN', country_name: 'മോണ്ടെനെഗ്രോ' },
		{
			iso_code: 'MAF',
			locale_id: 'ml-IN',
			country_name: 'സെന്റ് മാർട്ടിൻ'
		},
		{ iso_code: 'MDG', locale_id: 'ml-IN', country_name: 'മഡഗാസ്കർ' },
		{ iso_code: 'MHL', locale_id: 'ml-IN', country_name: 'മാർഷൽ ദ്വീപുകൾ' },
		{
			iso_code: 'MKD',
			locale_id: 'ml-IN',
			country_name: 'നോർത്ത് മാസിഡോണിയ'
		},
		{ iso_code: 'MLI', locale_id: 'ml-IN', country_name: 'മാലി' },
		{
			iso_code: 'MMR',
			locale_id: 'ml-IN',
			country_name: 'മ്യാൻമാർ'
		},
		{ iso_code: 'MNG', locale_id: 'ml-IN', country_name: 'മംഗോളിയ' },
		{
			iso_code: 'MAC',
			locale_id: 'ml-IN',
			country_name: 'മക്കാവു എസ്.എ.ആർ. ചൈന'
		},
		{
			iso_code: 'MNP',
			locale_id: 'ml-IN',
			country_name: 'ഉത്തര മറിയാനാ ദ്വീപുകൾ'
		},
		{ iso_code: 'MTQ', locale_id: 'ml-IN', country_name: 'മാർട്ടിനിക്ക്' },
		{ iso_code: 'MRT', locale_id: 'ml-IN', country_name: 'മൗറിറ്റാനിയ' },
		{ iso_code: 'MSR', locale_id: 'ml-IN', country_name: 'മൊണ്ടെസരത്ത്' },
		{ iso_code: 'MLT', locale_id: 'ml-IN', country_name: 'മാൾട്ട' },
		{ iso_code: 'MUS', locale_id: 'ml-IN', country_name: 'മൗറീഷ്യസ്' },
		{ iso_code: 'MDV', locale_id: 'ml-IN', country_name: 'മാലിദ്വീപ്' },
		{ iso_code: 'MWI', locale_id: 'ml-IN', country_name: 'മലാവി' },
		{ iso_code: 'MEX', locale_id: 'ml-IN', country_name: 'മെക്സിക്കോ' },
		{ iso_code: 'MYS', locale_id: 'ml-IN', country_name: 'മലേഷ്യ' },
		{ iso_code: 'MOZ', locale_id: 'ml-IN', country_name: 'മൊസാംബിക്ക്' },
		{ iso_code: 'NAM', locale_id: 'ml-IN', country_name: 'നമീബിയ' },
		{ iso_code: 'NCL', locale_id: 'ml-IN', country_name: 'ന്യൂ കാലിഡോണിയ' },
		{ iso_code: 'NER', locale_id: 'ml-IN', country_name: 'നൈജർ' },
		{ iso_code: 'NFK', locale_id: 'ml-IN', country_name: 'നോർഫോക് ദ്വീപ്' },
		{ iso_code: 'NGA', locale_id: 'ml-IN', country_name: 'നൈജീരിയ' },
		{ iso_code: 'NIC', locale_id: 'ml-IN', country_name: 'നിക്കരാഗ്വ' },
		{ iso_code: 'NLD', locale_id: 'ml-IN', country_name: 'നെതർലാൻഡ്‌സ്' },
		{ iso_code: 'NOR', locale_id: 'ml-IN', country_name: 'നോർവെ' },
		{ iso_code: 'NPL', locale_id: 'ml-IN', country_name: 'നേപ്പാൾ' },
		{ iso_code: 'NRU', locale_id: 'ml-IN', country_name: 'നൗറു' },
		{ iso_code: 'NIU', locale_id: 'ml-IN', country_name: 'ന്യൂയി' },
		{ iso_code: 'NZL', locale_id: 'ml-IN', country_name: 'ന്യൂസിലൻഡ്' },
		{ iso_code: 'OMN', locale_id: 'ml-IN', country_name: 'ഒമാൻ' },
		{ iso_code: 'PAN', locale_id: 'ml-IN', country_name: 'പനാമ' },
		{ iso_code: 'PER', locale_id: 'ml-IN', country_name: 'പെറു' },
		{
			iso_code: 'PYF',
			locale_id: 'ml-IN',
			country_name: 'ഫ്രഞ്ച് പോളിനേഷ്യ'
		},
		{
			iso_code: 'PNG',
			locale_id: 'ml-IN',
			country_name: 'പാപ്പുവ ന്യൂ ഗിനിയ'
		},
		{ iso_code: 'PHL', locale_id: 'ml-IN', country_name: 'ഫിലിപ്പീൻസ്' },
		{ iso_code: 'PAK', locale_id: 'ml-IN', country_name: 'പാക്കിസ്ഥാൻ' },
		{ iso_code: 'POL', locale_id: 'ml-IN', country_name: 'പോളണ്ട്' },
		{
			iso_code: 'SPM',
			locale_id: 'ml-IN',
			country_name: 'സെന്റ് പിയറി ആൻഡ് മിക്വലൻ'
		},
		{
			iso_code: 'PCN',
			locale_id: 'ml-IN',
			country_name: 'പിറ്റ്‌കെയ്‌ൻ ദ്വീപുകൾ'
		},
		{ iso_code: 'PRI', locale_id: 'ml-IN', country_name: 'പോർട്ടോ റിക്കോ' },
		{
			iso_code: 'PSE',
			locale_id: 'ml-IN',
			country_name: 'പാലസ്‌തീൻ പ്രദേശങ്ങൾ'
		},
		{ iso_code: 'PRT', locale_id: 'ml-IN', country_name: 'പോർച്ചുഗൽ' },
		{ iso_code: 'PLW', locale_id: 'ml-IN', country_name: 'പലാവു' },
		{ iso_code: 'PRY', locale_id: 'ml-IN', country_name: 'പരാഗ്വേ' },
		{ iso_code: 'QAT', locale_id: 'ml-IN', country_name: 'ഖത്തർ' },
		{ iso_code: 'REU', locale_id: 'ml-IN', country_name: 'റീയൂണിയൻ' },
		{ iso_code: 'ROU', locale_id: 'ml-IN', country_name: 'റൊമാനിയ' },
		{ iso_code: 'SRB', locale_id: 'ml-IN', country_name: 'സെർബിയ' },
		{ iso_code: 'RUS', locale_id: 'ml-IN', country_name: 'റഷ്യ' },
		{ iso_code: 'RWA', locale_id: 'ml-IN', country_name: 'റുവാണ്ട' },
		{ iso_code: 'SAU', locale_id: 'ml-IN', country_name: 'സൗദി അറേബ്യ' },
		{ iso_code: 'SLB', locale_id: 'ml-IN', country_name: 'സോളമൻ ദ്വീപുകൾ' },
		{ iso_code: 'SYC', locale_id: 'ml-IN', country_name: 'സീഷെൽസ്' },
		{ iso_code: 'SDN', locale_id: 'ml-IN', country_name: 'സുഡാൻ' },
		{ iso_code: 'SWE', locale_id: 'ml-IN', country_name: 'സ്വീഡൻ' },
		{ iso_code: 'SGP', locale_id: 'ml-IN', country_name: 'സിംഗപ്പൂർ' },
		{ iso_code: 'SHN', locale_id: 'ml-IN', country_name: 'സെന്റ് ഹെലീന' },
		{ iso_code: 'SVN', locale_id: 'ml-IN', country_name: 'സ്ലോവേനിയ' },
		{
			iso_code: 'SJM',
			locale_id: 'ml-IN',
			country_name: 'സ്വാൽബാഡും ജാൻ മായേനും'
		},
		{ iso_code: 'SVK', locale_id: 'ml-IN', country_name: 'സ്ലോവാക്യ' },
		{ iso_code: 'SLE', locale_id: 'ml-IN', country_name: 'സിയെറ ലിയോൺ' },
		{ iso_code: 'SMR', locale_id: 'ml-IN', country_name: 'സാൻ മറിനോ' },
		{ iso_code: 'SEN', locale_id: 'ml-IN', country_name: 'സെനഗൽ' },
		{ iso_code: 'SOM', locale_id: 'ml-IN', country_name: 'സോമാലിയ' },
		{ iso_code: 'SUR', locale_id: 'ml-IN', country_name: 'സുരിനാം' },
		{ iso_code: 'SSD', locale_id: 'ml-IN', country_name: 'ദക്ഷിണ സുഡാൻ' },
		{
			iso_code: 'STP',
			locale_id: 'ml-IN',
			country_name: 'സാവോ ടോമും പ്രിൻസിപെയും'
		},
		{ iso_code: 'SLV', locale_id: 'ml-IN', country_name: 'എൽ സാൽവദോർ' },
		{
			iso_code: 'SXM',
			locale_id: 'ml-IN',
			country_name: 'സിന്റ് മാർട്ടെൻ'
		},
		{ iso_code: 'SYR', locale_id: 'ml-IN', country_name: 'സിറിയ' },
		{ iso_code: 'SWZ', locale_id: 'ml-IN', country_name: 'സ്വാസിലൻഡ്' },
		{
			iso_code: 'TCA',
			locale_id: 'ml-IN',
			country_name: 'ടർക്ക്‌സും കെയ്‌ക്കോ ദ്വീപുകളും'
		},
		{ iso_code: 'TCD', locale_id: 'ml-IN', country_name: 'ഛാഡ്' },
		{
			iso_code: 'ATF',
			locale_id: 'ml-IN',
			country_name: 'ഫ്രഞ്ച് ദക്ഷിണ ഭൂപ്രദേശം'
		},
		{ iso_code: 'TGO', locale_id: 'ml-IN', country_name: 'ടോഗോ' },
		{ iso_code: 'THA', locale_id: 'ml-IN', country_name: 'തായ്‌ലാൻഡ്' },
		{ iso_code: 'TJK', locale_id: 'ml-IN', country_name: 'താജിക്കിസ്ഥാൻ' },
		{ iso_code: 'TKL', locale_id: 'ml-IN', country_name: 'ടോക്കെലൂ' },
		{ iso_code: 'TLS', locale_id: 'ml-IN', country_name: 'തിമോർ-ലെസ്റ്റെ' },
		{
			iso_code: 'TKM',
			locale_id: 'ml-IN',
			country_name: 'തുർക്ക്മെനിസ്ഥാൻ'
		},
		{ iso_code: 'TUN', locale_id: 'ml-IN', country_name: 'ടുണീഷ്യ' },
		{ iso_code: 'TON', locale_id: 'ml-IN', country_name: 'ടോംഗ' },
		{ iso_code: 'TUR', locale_id: 'ml-IN', country_name: 'തുർക്കിയെ' },
		{
			iso_code: 'TTO',
			locale_id: 'ml-IN',
			country_name: 'ട്രിനിഡാഡും ടുബാഗോയും'
		},
		{ iso_code: 'TUV', locale_id: 'ml-IN', country_name: 'ടുവാലു' },
		{ iso_code: 'TWN', locale_id: 'ml-IN', country_name: 'തായ്‌വാൻ' },
		{ iso_code: 'TZA', locale_id: 'ml-IN', country_name: 'ടാൻസാനിയ' },
		{ iso_code: 'UKR', locale_id: 'ml-IN', country_name: 'ഉക്രെയ്‌ൻ' },
		{ iso_code: 'UGA', locale_id: 'ml-IN', country_name: 'ഉഗാണ്ട' },
		{
			iso_code: 'UMI',
			locale_id: 'ml-IN',
			country_name: 'യു.എസ്. ദ്വീപസമൂഹങ്ങൾ'
		},
		{
			iso_code: 'USA',
			locale_id: 'ml-IN',
			country_name: 'അമേരിക്കൻ ഐക്യനാടുകൾ'
		},
		{ iso_code: 'URY', locale_id: 'ml-IN', country_name: 'ഉറുഗ്വേ' },
		{
			iso_code: 'UZB',
			locale_id: 'ml-IN',
			country_name: 'ഉസ്‌ബെക്കിസ്ഥാൻ'
		},
		{ iso_code: 'VAT', locale_id: 'ml-IN', country_name: 'വത്തിക്കാൻ' },
		{
			iso_code: 'VCT',
			locale_id: 'ml-IN',
			country_name: 'സെന്റ് വിൻസെന്റും ഗ്രനെഡൈൻസും'
		},
		{ iso_code: 'VEN', locale_id: 'ml-IN', country_name: 'വെനിസ്വേല' },
		{
			iso_code: 'VGB',
			locale_id: 'ml-IN',
			country_name: 'ബ്രിട്ടീഷ് വെർജിൻ ദ്വീപുകൾ'
		},
		{
			iso_code: 'VIR',
			locale_id: 'ml-IN',
			country_name: 'യു.എസ്. വെർജിൻ ദ്വീപുകൾ'
		},
		{ iso_code: 'VNM', locale_id: 'ml-IN', country_name: 'വിയറ്റ്നാം' },
		{ iso_code: 'VUT', locale_id: 'ml-IN', country_name: 'വന്വാതു' },
		{
			iso_code: 'WLF',
			locale_id: 'ml-IN',
			country_name: 'വാലിസ് ആന്റ് ഫ്യൂച്യുന'
		},
		{ iso_code: 'WSM', locale_id: 'ml-IN', country_name: 'സമോവ' },
		{ iso_code: 'YEM', locale_id: 'ml-IN', country_name: 'യെമൻ' },
		{ iso_code: 'MYT', locale_id: 'ml-IN', country_name: 'മയോട്ടി' },
		{ iso_code: 'ZAF', locale_id: 'ml-IN', country_name: 'ദക്ഷിണാഫ്രിക്ക' },
		{ iso_code: 'ZMB', locale_id: 'ml-IN', country_name: 'സാംബിയ' },
		{ iso_code: 'ZWE', locale_id: 'ml-IN', country_name: 'സിംബാബ്‌വേ' }
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
