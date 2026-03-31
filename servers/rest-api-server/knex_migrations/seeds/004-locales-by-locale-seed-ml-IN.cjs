/* eslint-disable security/detect-object-injection */
/**
 * Static seed for locale_by_locale with ml-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * locale names (language + country) for the ml-IN locale.
 *
 * This seed depends on:
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 004-locales-by-locale-seed-ml-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM locale_by_locale WHERE locale_id = 'ml-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for ml-IN locale
	const rows = [
		{
			locale_code: 'aa-ET',
			locale_id: 'ml-IN',
			language_name: 'അഫാർ (എത്യോപ്യ)'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'ml-IN',
			language_name: 'അബ്‌ഖാസിയൻ (ജോർജ്ജിയ)'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'ml-IN',
			language_name: 'അചിനീസ് (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'ml-IN',
			language_name: 'അകോലി (ഉഗാണ്ട)'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'ml-IN',
			language_name: 'അഡാങ്‌മി (ഘാന)'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'ml-IN',
			language_name: 'അഡൈഗേ (റഷ്യ)'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'ml-IN',
			language_name: 'അവസ്റ്റാൻ (ഇറാൻ)'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'ml-IN',
			language_name: 'ടുണീഷ്യൻ അറബിക്'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'ml-IN',
			language_name: 'ആഫ്രിക്കാൻസ് (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'ml-IN',
			language_name: 'ആഫ്രിഹിലി (ഘാന)'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'ml-IN',
			language_name: 'ആഘേം (കാമറൂൺ)'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'ml-IN',
			language_name: 'ഐനു (ജപ്പാൻ)'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'ml-IN',
			language_name: 'അകാൻ‌ (ഘാന)'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'ml-IN',
			language_name: 'അക്കാഡിയൻ (ഇറാഖ്)'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'ml-IN',
			language_name: 'അലബാമ'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'ml-IN',
			language_name: 'അലൂട്ട് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ അൾത്തായി (റഷ്യ)'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'ml-IN',
			language_name: 'അംഹാരിക് (എത്യോപ്യ)'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'ml-IN',
			language_name: 'അരഗോണീസ് (സ്‌പെയിൻ)'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'ml-IN',
			language_name: 'പഴയ ഇംഗ്ലീഷ് (യുണൈറ്റഡ് കിംഗ്ഡം)'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'ml-IN',
			language_name: 'ഒബോളോ (നൈജീരിയ)'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'ml-IN',
			language_name: 'ആൻഗിക (ഇന്ത്യ)'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ഈജിപ്ത്)'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'ml-IN',
			language_name: 'അരമായ (ഇറാൻ)'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'ml-IN',
			language_name: 'അരമായ (ഇറാഖ്)'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'ml-IN',
			language_name: 'അരമായ (ജോർദ്ദാൻ)'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'ml-IN',
			language_name: 'അരമായ (സിറിയ)'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'ml-IN',
			language_name: 'മാപുചി (ചിലി)'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'ml-IN',
			language_name: 'ആരോണ'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'ml-IN',
			language_name: 'അറാപഹോ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'ml-IN',
			language_name: 'അൾജീരിയൻ അറബിക്'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'ml-IN',
			language_name: 'നജ്‌ദി അറബിക് (സൗദി അറേബ്യ)'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'ml-IN',
			language_name: 'അറാവക് (സുരിനാം)'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'ml-IN',
			language_name: 'മൊറോക്കൻ അറബി'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'ml-IN',
			language_name: 'ഈജിപ്ഷ്യൻ അറബി'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'ml-IN',
			language_name: 'ആസ്സാമീസ് (ഇന്ത്യ)'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'ml-IN',
			language_name: 'ആസു (ടാൻസാനിയ)'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'ml-IN',
			language_name: 'അമേരിക്കൻ ആംഗ്യഭാഷ'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'ml-IN',
			language_name: 'അസ്ട്ടൂരിയൻ (സ്‌പെയിൻ)'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'ml-IN',
			language_name: 'അറ്റികമെക്‌വ് (കാനഡ)'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'ml-IN',
			language_name: 'അവാരിക് (റഷ്യ)'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'ml-IN',
			language_name: 'അവാധി (ഇന്ത്യ)'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'ml-IN',
			language_name: 'അയ്മാറ (ബൊളീവിയ)'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'ml-IN',
			language_name: 'അസർബൈജാനി (അസർബൈജാൻ)'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'ml-IN',
			language_name: 'അസർബൈജാനി (ഇറാൻ)'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'ml-IN',
			language_name: 'അസർബൈജാനി (ഇറാഖ്)'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'ml-IN',
			language_name: 'അസർബൈജാനി (റഷ്യ)'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'ml-IN',
			language_name: 'ബഷ്ഖിർ (റഷ്യ)'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'ml-IN',
			language_name: 'ബലൂചി (പാക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'ml-IN',
			language_name: 'ബാലിനീസ് (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'ml-IN',
			language_name: 'ബവേറിയൻ'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'ml-IN',
			language_name: 'ബാസ (കാമറൂൺ)'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'ml-IN',
			language_name: 'ബാമുൻ (കാമറൂൺ)'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'ml-IN',
			language_name: 'ബടക് തോബ'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'ml-IN',
			language_name: 'ഘോമാല (കാമറൂൺ)'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'ml-IN',
			language_name: 'ബെലാറുഷ്യൻ (ബെലറൂസ്)'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'ml-IN',
			language_name: 'ബേജ (സുഡാൻ)'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'ml-IN',
			language_name: 'ബേംബ (സാംബിയ)'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'ml-IN',
			language_name: 'ബെറ്റാവി'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'ml-IN',
			language_name: 'ബെനാ (ടാൻസാനിയ)'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'ml-IN',
			language_name: 'ബാഫട്ട് (കാമറൂൺ)'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'ml-IN',
			language_name: 'ബഡഗ'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'ml-IN',
			language_name: 'ബൾഗേറിയൻ (ബൾഗേറിയ)'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'ml-IN',
			language_name: 'ഹർയാൻവി (ഇന്ത്യ)'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'ml-IN',
			language_name: 'പശ്ചിമ ബലൂചി (പാക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'ml-IN',
			language_name: 'ഭോജ്‌പുരി (ഇന്ത്യ)'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'ml-IN',
			language_name: 'ബിസ്‌ലാമ (വന്വാതു)'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'ml-IN',
			language_name: 'ബികോൽ (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'ml-IN',
			language_name: 'ബിനി (നൈജീരിയ)'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'ml-IN',
			language_name: 'ബഞ്ചാർ'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'ml-IN',
			language_name: 'കോം (കാമറൂൺ)'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'ml-IN',
			language_name: 'സിക്സിക (കാനഡ)'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'ml-IN',
			language_name: 'അനി (ബെനിൻ)'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'ml-IN',
			language_name: 'തായ് ഡാം'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'ml-IN',
			language_name: 'ബംബാറ (മാലി)'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'ml-IN',
			language_name: 'ബംഗ്ലാ (ബംഗ്ലാദേശ്)'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'ml-IN',
			language_name: 'ടിബറ്റൻ (ചൈന)'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'ml-IN',
			language_name: 'ബിഷ്ണുപ്രിയ'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'ml-IN',
			language_name: 'ബക്തിയാരി'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'ml-IN',
			language_name: 'ബ്രെട്ടൺ (ഫ്രാൻസ്)'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'ml-IN',
			language_name: 'ബ്രജ് (ഇന്ത്യ)'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'ml-IN',
			language_name: 'ബ്രാഹുയി'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'ml-IN',
			language_name: 'ബോഡോ (ഇന്ത്യ)'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'ml-IN',
			language_name: 'ബോസ്നിയൻ (ബോസ്നിയയും ഹെർസഗോവിനയും)'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'ml-IN',
			language_name: 'അക്കൂസ് (കാമറൂൺ)'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'ml-IN',
			language_name: 'ബുറിയത്ത് (റഷ്യ)'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'ml-IN',
			language_name: 'ബുഗിനീസ് (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'ml-IN',
			language_name: 'ബുളു (കാമറൂൺ)'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'ml-IN',
			language_name: 'ബ്ലിൻ (എറിത്രിയ)'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'ml-IN',
			language_name: 'മെഡുംബ (കാമറൂൺ)'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'ml-IN',
			language_name: 'കറ്റാലാൻ (സ്‌പെയിൻ)'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'ml-IN',
			language_name: 'കാഡോ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'ml-IN',
			language_name: 'കാരിബ് (വെനിസ്വേല)'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'ml-IN',
			language_name: 'കയൂഗ (കാനഡ)'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'ml-IN',
			language_name: 'അറ്റ്സാം (നൈജീരിയ)'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'ml-IN',
			language_name: 'ചക്‌മ (ബംഗ്ലാദേശ്)'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'ml-IN',
			language_name: 'ചെചൻ (റഷ്യ)'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'ml-IN',
			language_name: 'സെബുവാനോ (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'ml-IN',
			language_name: 'ചിഗ (ഉഗാണ്ട)'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'ml-IN',
			language_name: 'ചമോറോ (ഗ്വാം)'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'ml-IN',
			language_name: 'ചിബ്ച (കൊളംബിയ)'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'ml-IN',
			language_name: 'ഷാഗതായ് (തുർക്ക്മെനിസ്ഥാൻ)'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'ml-IN',
			language_name: 'ചൂകീസ് (മൈക്രോനേഷ്യ)'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'ml-IN',
			language_name: 'മാരി (റഷ്യ)'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'ml-IN',
			language_name: 'ചിനൂഗ് ജാർഗൺ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'ml-IN',
			language_name: 'ചോക്റ്റാവ് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'ml-IN',
			language_name: 'ചിപേവ്യൻ (കാനഡ)'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'ml-IN',
			language_name: 'ഷെരോക്കി (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'ml-IN',
			language_name: 'ഷായാൻ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'ml-IN',
			language_name: 'ചിക്കാസാവ്'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'ml-IN',
			language_name: 'സെൻട്രൽ കുർദിഷ് (ഇറാഖ്)'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'ml-IN',
			language_name: 'ചിൽകോട്ടിൻ (കാനഡ)'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'ml-IN',
			language_name: 'കോർസിക്കൻ (ഫ്രാൻസ്)'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'ml-IN',
			language_name: 'കോപ്റ്റിക് (ഈജിപ്ത്)'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'ml-IN',
			language_name: 'കാപ്പിസ്നോൺ'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'ml-IN',
			language_name: 'ക്രീ (കാനഡ)'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'ml-IN',
			language_name: 'മിചിഫ് (കാനഡ)'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'ml-IN',
			language_name: 'ക്രിമിയൻ ടർക്കിഷ് (ഉക്രെയ്‌ൻ)'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'ml-IN',
			language_name: 'സതേൺ ഈസ്റ്റ് ക്രീ (കാനഡ)'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'ml-IN',
			language_name: 'പ്ലെയ്‌ൻസ് ക്രീ (കാനഡ)'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'ml-IN',
			language_name: 'നോർത്തേൺ ഈസ്റ്റ് ക്രീ (കാനഡ)'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'ml-IN',
			language_name: 'മൂസ് ക്രീ (കാനഡ)'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'ml-IN',
			language_name: 'സെഷൽവ ക്രിയോൾ ഫ്രഞ്ച് (സീഷെൽസ്)'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'ml-IN',
			language_name: 'ചെക്ക് (ചെക്കിയ)'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'ml-IN',
			language_name: 'കാഷുബിയാൻ (പോളണ്ട്)'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'ml-IN',
			language_name: 'സ്വാംപി ക്രീ (കാനഡ)'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'ml-IN',
			language_name: 'ചർച്ച് സ്ലാവിക് (റഷ്യ)'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'ml-IN',
			language_name: 'ചർച്ച് സ്ലാവിക് (ബൾഗേറിയ)'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'ml-IN',
			language_name: 'ചുവാഷ് (റഷ്യ)'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'ml-IN',
			language_name: 'വെൽഷ് (യുണൈറ്റഡ് കിംഗ്ഡം)'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'ml-IN',
			language_name: 'ഡാനിഷ് (ഡെൻമാർക്ക്)'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'ml-IN',
			language_name: 'ഡകോട്ട (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'ml-IN',
			language_name: 'ഡർഗ്വാ (റഷ്യ)'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'ml-IN',
			language_name: 'തൈത (കെനിയ)'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'ml-IN',
			language_name: 'ജർമ്മൻ (ജർമ്മനി)'
		},
		{
			locale_code: 'del-US',
			locale_id: 'ml-IN',
			language_name: 'ദെലവേർ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'ml-IN',
			language_name: 'സ്ലേവ് (കാനഡ)'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'ml-IN',
			language_name: 'ഡോഗ്രിബ് (കാനഡ)'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'ml-IN',
			language_name: 'ദിൻക (ദക്ഷിണ സുഡാൻ)'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'ml-IN',
			language_name: 'സാർമ്മ (നൈജർ)'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'ml-IN',
			language_name: 'ഡോഗ്രി (ഇന്ത്യ)'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'ml-IN',
			language_name: 'ലോവർ സോർബിയൻ (ജർമ്മനി)'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'ml-IN',
			language_name: 'സെൻട്രൽ ഡുസുൻ'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'ml-IN',
			language_name: 'ദ്വാല (കാമറൂൺ)'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഡച്ച് (നെതർലാൻഡ്‌സ്)'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'ml-IN',
			language_name: 'ദിവെഹി (മാലിദ്വീപ്)'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'ml-IN',
			language_name: 'ജോല-ഫോൻയി (സെനഗൽ)'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'ml-IN',
			language_name: 'ദ്വൈല (ബർക്കിന ഫാസോ)'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'ml-IN',
			language_name: 'ദ്‌സോങ്ക (ഭൂട്ടാൻ)'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'ml-IN',
			language_name: 'ഡാസാഗ (ഛാഡ്)'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'ml-IN',
			language_name: 'എംബു (കെനിയ)'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'ml-IN',
			language_name: 'യൂ (ഘാന)'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'ml-IN',
			language_name: 'എഫിക് (നൈജീരിയ)'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'ml-IN',
			language_name: 'എമിലിയൻ'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'ml-IN',
			language_name: 'പ്രാചീന ഈജിപ്ഷ്യൻ (ഈജിപ്ത്)'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'ml-IN',
			language_name: 'എകാജുക് (നൈജീരിയ)'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'ml-IN',
			language_name: 'ഗ്രീക്ക് (ഗ്രീസ്)'
		},
		{
			locale_code: 'en-US',
			locale_id: 'ml-IN',
			language_name: 'അമേരിക്കൻ ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-GB',
			locale_id: 'ml-IN',
			language_name: 'ബ്രിട്ടീഷ് ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-IN',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ഇന്ത്യ)'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഇംഗ്ലീഷ് (യുണൈറ്റഡ് കിംഗ്ഡം)'
		},
		{
			locale_code: 'es-ES',
			locale_id: 'ml-IN',
			language_name: 'യൂറോപ്യൻ സ്‌പാനിഷ്'
		},
		{
			locale_code: 'esu-US',
			locale_id: 'ml-IN',
			language_name: 'സെൻട്രൽ യുപിക്'
		},
		{
			locale_code: 'et-EE',
			locale_id: 'ml-IN',
			language_name: 'എസ്റ്റോണിയൻ (എസ്റ്റോണിയ‍)'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'ml-IN',
			language_name: 'ബാസ്‌ക് (സ്‌പെയിൻ)'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'ml-IN',
			language_name: 'എവോൻഡോ (കാമറൂൺ)'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'ml-IN',
			language_name: 'അതിമധുരൻ'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'ml-IN',
			language_name: 'പേർഷ്യൻ (ഇറാൻ)'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'ml-IN',
			language_name: 'ഫങ് (ഇക്വറ്റോറിയൽ ഗിനിയ)'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'ml-IN',
			language_name: 'ഫുല (സെനഗൽ)'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'ml-IN',
			language_name: 'ഫുല (ഗിനിയ)'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'ml-IN',
			language_name: 'ഫിന്നിഷ് (ഫിൻലാൻഡ്)'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'ml-IN',
			language_name: 'ഫിലിപ്പിനോ (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'ml-IN',
			language_name: 'ടോർനെഡലെൻ ഫിന്നിഷ്'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'ml-IN',
			language_name: 'ഫിജിയൻ (ഫിജി)'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'ml-IN',
			language_name: 'ഫാറോസ് (ഫറോ ദ്വീപുകൾ)'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'ml-IN',
			language_name: 'ഫോൻ (ബെനിൻ)'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ഫ്രാൻസ്)'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'ml-IN',
			language_name: 'കേജൺ ഫ്രഞ്ച് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഫ്രഞ്ച് (ഫ്രാൻസ്)'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'ml-IN',
			language_name: 'പഴയ ഫ്രഞ്ച് (ഫ്രാൻസ്)'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'ml-IN',
			language_name: 'അർപ്പിതൻ'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'ml-IN',
			language_name: 'നോർത്തേൻ ഫ്രിഷ്യൻ (ജർമ്മനി)'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'ml-IN',
			language_name: 'ഈസ്റ്റേൺ ഫ്രിഷ്യൻ (ജർമ്മനി)'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രിയുലിയാൻ (ഇറ്റലി)'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'ml-IN',
			language_name: 'പശ്ചിമ ഫ്രിഷിയൻ (നെതർലാൻഡ്‌സ്)'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'ml-IN',
			language_name: 'ഐറിഷ് (അയർലൻഡ്)'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'ml-IN',
			language_name: 'ഗാ (ഘാന)'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'ml-IN',
			language_name: 'ഗാഗൂസ് (മൾഡോവ)'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'ml-IN',
			language_name: 'ഗാൻ ചൈനീസ് (ചൈന)'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'ml-IN',
			language_name: 'ഗയൊ (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'ml-IN',
			language_name: 'ഗബ്യ (സെൻട്രൽ ആഫ്രിക്കൻ റിപ്പബ്ലിക്ക്)'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'ml-IN',
			language_name: 'സൊരാസ്ട്രിയൻ ദാരി'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'ml-IN',
			language_name: 'സ്കോട്ടിഷ് ഗൈലിക് (യുണൈറ്റഡ് കിംഗ്ഡം)'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'ml-IN',
			language_name: 'ഗീസ് (എത്യോപ്യ)'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'ml-IN',
			language_name: 'ഗിൽബർട്ടീസ് (കിരിബാട്ടി)'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'ml-IN',
			language_name: 'ഗലീഷ്യൻ (സ്‌പെയിൻ)'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'ml-IN',
			language_name: 'ഗിലാക്കി'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഉച്ച ജർമൻ (ജർമ്മനി)'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'ml-IN',
			language_name: 'ഗ്വരനി (പരാഗ്വേ)'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'ml-IN',
			language_name: 'ഓൾഡ് ഹൈ ജർമൻ (ജർമ്മനി)'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'ml-IN',
			language_name: 'ഗോണ്ഡി (ഇന്ത്യ)'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'ml-IN',
			language_name: 'ഗൊറോന്റാലോ (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'ml-IN',
			language_name: 'ഗോഥിക്ക് (ഉക്രെയ്‌ൻ)'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'ml-IN',
			language_name: 'ഗ്രബൊ (ലൈബീരിയ)'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'ml-IN',
			language_name: 'പുരാതന ഗ്രീക്ക് (ഗ്രീസ്)'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'ml-IN',
			language_name: 'സ്വിസ് ജർമ്മൻ (സ്വിറ്റ്സർലാൻഡ്)'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'ml-IN',
			language_name: 'ഗുജറാത്തി (ഇന്ത്യ)'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'ml-IN',
			language_name: 'വായൂ'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രാഫ്ര'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'ml-IN',
			language_name: 'ഗുസീ (കെനിയ)'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'ml-IN',
			language_name: 'മാൻസ് (ഐൽ ഓഫ് മാൻ)'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'ml-IN',
			language_name: 'ഗ്വിച്ചിൻ (കാനഡ)'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'ml-IN',
			language_name: 'ഹൗസ (നൈജീരിയ)'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'ml-IN',
			language_name: 'ഹൗസ (കാമറൂൺ)'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'ml-IN',
			language_name: 'ഹൗസ (സുഡാൻ)'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'ml-IN',
			language_name: 'ഹൈഡ (കാനഡ)'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'ml-IN',
			language_name: 'ഹാക്ക ചൈനീസ് (ചൈന)'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'ml-IN',
			language_name: 'ഹാക്ക ചൈനീസ് (തായ്‌വാൻ)'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'ml-IN',
			language_name: 'ഹവായിയൻ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'ml-IN',
			language_name: 'സതേൺ ഹൈഡ (കാനഡ)'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'ml-IN',
			language_name: 'ഹീബ്രു (ഇസ്രായേൽ)'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'ml-IN',
			language_name: 'ഹിന്ദി (ഇന്ത്യ)'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'ml-IN',
			language_name: 'ഫിജി ഹിന്ദി'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'ml-IN',
			language_name: 'ഹിലിഗയ്നോൺ (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'ml-IN',
			language_name: 'ഹിറ്റൈറ്റ് (തുർക്കിയെ)'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'ml-IN',
			language_name: 'മോങ് (ചൈന)'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'ml-IN',
			language_name: 'ഹ്മോങ് ഞ്ജുവ'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'ml-IN',
			language_name: 'ഹ്മോങ് ഞ്ജുവ'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'ml-IN',
			language_name: 'ഹിരി മോതു (പാപ്പുവ ന്യൂ ഗിനിയ)'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'ml-IN',
			language_name: 'ക്രൊയേഷ്യൻ (ക്രൊയേഷ്യ)'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'ml-IN',
			language_name: 'അപ്പർ സോർബിയൻ (ജർമ്മനി)'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'ml-IN',
			language_name: 'ഷ്യാങ് ചൈനീസ് (ചൈന)'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'ml-IN',
			language_name: 'ഹെയ്‌തിയൻ ക്രിയോൾ (ഹെയ്തി)'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'ml-IN',
			language_name: 'ഹംഗേറിയൻ (ഹംഗറി)'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'ml-IN',
			language_name: 'ഹൂപ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'ml-IN',
			language_name: 'ഹോക്കൊമെലം (കാനഡ)'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'ml-IN',
			language_name: 'അർമേനിയൻ (അർമേനിയ)'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'ml-IN',
			language_name: 'ഹെരേരൊ (നമീബിയ)'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'ml-IN',
			language_name: 'ഇബാൻ (മലേഷ്യ)'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'ml-IN',
			language_name: 'ഇബീബിയോ (നൈജീരിയ)'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'ml-IN',
			language_name: 'ഇന്തോനേഷ്യൻ (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'ml-IN',
			language_name: 'ഇന്റർലിംഗ്വേ (എസ്റ്റോണിയ‍)'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'ml-IN',
			language_name: 'ഇഗ്ബോ (നൈജീരിയ)'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'ml-IN',
			language_name: 'ഷുവാൻയി (ചൈന)'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'ml-IN',
			language_name: 'ഇനുപിയാക് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'ml-IN',
			language_name: 'വെസ്റ്റേൺ കനേഡിയൻ ഇനുക്ടിറ്റൂറ്റ് (കാനഡ)'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'ml-IN',
			language_name: 'ഇലോകോ (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'ml-IN',
			language_name: 'ഇങ്കുഷ് (റഷ്യ)'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'ml-IN',
			language_name: 'ഐസ്‌ലാൻഡിക് (ഐസ്‌ലാന്റ്)'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'ml-IN',
			language_name: 'ഇറ്റാലിയൻ (ഇറ്റലി)'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'ml-IN',
			language_name: 'ഇനുക്റ്റിറ്റുട്ട് (കാനഡ)'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'ml-IN',
			language_name: 'ഇൻഗ്രിയൻ'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'ml-IN',
			language_name: 'ജാപ്പനീസ് (ജപ്പാൻ)'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'ml-IN',
			language_name: 'ജമൈക്കൻ ക്രിയോൾ ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'ml-IN',
			language_name: 'ഗോമ്പ (കാമറൂൺ)'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'ml-IN',
			language_name: 'മചേം (ടാൻസാനിയ)'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'ml-IN',
			language_name: 'ജൂഡിയോ-പേർഷ്യൻ (ഇസ്രായേൽ)'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'ml-IN',
			language_name: 'ജൂഡിയോ-അറബിക് (ഇസ്രായേൽ)'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'ml-IN',
			language_name: 'ജൂതീഷ്'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'ml-IN',
			language_name: 'ജാവനീസ് (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'ml-IN',
			language_name: 'ജോർജിയൻ (ജോർജ്ജിയ)'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'ml-IN',
			language_name: 'കര-കാൽപ്പക് (ഉസ്‌ബെക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'ml-IN',
			language_name: 'കബൈൽ (അൾജീരിയ)'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'ml-IN',
			language_name: 'കാചിൻ (മ്യാൻമാർ [ബർമ്മ])'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'ml-IN',
			language_name: 'ജ്യൂ (നൈജീരിയ)'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'ml-IN',
			language_name: 'കംബ (കെനിയ)'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'ml-IN',
			language_name: 'കാവി (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'ml-IN',
			language_name: 'കബർഡിയാൻ (റഷ്യ)'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'ml-IN',
			language_name: 'കനെംബു (ഛാഡ്)'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'ml-IN',
			language_name: 'ട്യാപ് (നൈജീരിയ)'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'ml-IN',
			language_name: 'മക്കോണ്ടെ (ടാൻസാനിയ)'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'ml-IN',
			language_name: 'കബുവെർദിയാനു (കേപ്പ് വേർഡ്)'
		},
		{
			locale_code: 'kek-GT',
			locale_id: 'ml-IN',
			language_name: 'Qʼeqchiʼ'
		},
		{
			locale_code: 'ken-CM',
			locale_id: 'ml-IN',
			language_name: 'കെന്യാങ്'
		},
		{
			locale_code: 'kfo-CI',
			locale_id: 'ml-IN',
			language_name: 'കോറോ (കോട്ട് ഡി വാർ)'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'ml-IN',
			language_name: 'കോംഗോ (കോംഗോ - കിൻഷാസ)'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'ml-IN',
			language_name: 'കെയിൻഗാംഗ് (ബ്രസീൽ)'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'ml-IN',
			language_name: 'ഖാസി (ഇന്ത്യ)'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'ml-IN',
			language_name: 'ഘോറ്റാനേസേ (ഇറാൻ)'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'ml-IN',
			language_name: 'കൊയ്റ ചീനി (മാലി)'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'ml-IN',
			language_name: 'ഖോവർ'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'ml-IN',
			language_name: 'കികൂയു (കെനിയ)'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'ml-IN',
			language_name: 'കിർമഞ്ച്കി'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'ml-IN',
			language_name: 'ക്വാന്യമ (നമീബിയ)'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ് (കസാഖിസ്ഥാൻ)'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ് (അഫ്‌ഗാനിസ്ഥാൻ)'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ് (ചൈന)'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ് (ഇറാൻ)'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ് (മംഗോളിയ)'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'ml-IN',
			language_name: 'കാകോ (കാമറൂൺ)'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'ml-IN',
			language_name: 'കലാല്ലിസുട്ട് (ഗ്രീൻലൻഡ്)'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'ml-IN',
			language_name: 'കലെഞ്ചിൻ (കെനിയ)'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'ml-IN',
			language_name: 'ഖമെർ (കംബോഡിയ)'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'ml-IN',
			language_name: 'കിംബുണ്ടു (അംഗോള)'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'ml-IN',
			language_name: 'കന്നഡ (ഇന്ത്യ)'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'ml-IN',
			language_name: 'കൊറിയൻ (ദക്ഷിണകൊറിയ)'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'ml-IN',
			language_name: 'കോമി-പെർമ്യാക്ക് (റഷ്യ)'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'ml-IN',
			language_name: 'കൊങ്കണി (ഇന്ത്യ)'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'ml-IN',
			language_name: 'കൊസറേയൻ (മൈക്രോനേഷ്യ)'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'ml-IN',
			language_name: 'പെൽ (ലൈബീരിയ)'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'ml-IN',
			language_name: 'കനൂറി (നൈജീരിയ)'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'ml-IN',
			language_name: 'കരാചൈ-ബാൽകാർ (റഷ്യ)'
		},
		{
			locale_code: 'kri-SL',
			locale_id: 'ml-IN',
			language_name: 'ക്രിയോ'
		},
		{
			locale_code: 'krj-PH',
			locale_id: 'ml-IN',
			language_name: 'കിണരായ്-എ'
		},
		{
			locale_code: 'krl-RU',
			locale_id: 'ml-IN',
			language_name: 'കരീലിയൻ (റഷ്യ)'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'ml-IN',
			language_name: 'കുരുഖ് (ഇന്ത്യ)'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'ml-IN',
			language_name: 'കശ്‌മീരി (ഇന്ത്യ)'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'ml-IN',
			language_name: 'ഷംഭാള (ടാൻസാനിയ)'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'ml-IN',
			language_name: 'ബാഫിയ (കാമറൂൺ)'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'ml-IN',
			language_name: 'കൊളോണിയൻ (ജർമ്മനി)'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ് (തുർക്കിയെ)'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ് (അർമേനിയ)'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ് (ഇറാഖ്)'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ് (അസർബൈജാൻ)'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ് (ജോർജ്ജിയ)'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ് (ഇറാൻ)'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ് (ലെബനൻ)'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ് (തുർക്ക്മെനിസ്ഥാൻ)'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'ml-IN',
			language_name: 'കൂമിക്ക് (റഷ്യ)'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'ml-IN',
			language_name: 'കുതേനൈ (കാനഡ)'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'ml-IN',
			language_name: 'കോമി (റഷ്യ)'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'ml-IN',
			language_name: 'കോർണിഷ് (യുണൈറ്റഡ് കിംഗ്ഡം)'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'ml-IN',
			language_name: 'ക്വാക്വല (കാനഡ)'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'ml-IN',
			language_name: 'കുവി (ഇന്ത്യ)'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'ml-IN',
			language_name: 'കിർഗിസ് (കിർഗിസ്ഥാൻ)'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'ml-IN',
			language_name: 'കിർഗിസ് (ചൈന)'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'ml-IN',
			language_name: 'കിർഗിസ് (തുർക്കിയെ)'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'ml-IN',
			language_name: 'ലാറ്റിൻ (വത്തിക്കാൻ)'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'ml-IN',
			language_name: 'ലഡീനോ (ഇസ്രായേൽ)'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'ml-IN',
			language_name: 'ലാംഗി (ടാൻസാനിയ)'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'ml-IN',
			language_name: 'ലഹ്‌ൻഡ (പാക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'ml-IN',
			language_name: 'ലംബ (സാംബിയ)'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'ml-IN',
			language_name: 'ലക്‌സംബർഗിഷ് (ലക്സംബർഗ്)'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'ml-IN',
			language_name: 'ലസ്ഗിയൻ (റഷ്യ)'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'ml-IN',
			language_name: 'ഗാണ്ട (ഉഗാണ്ട)'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'ml-IN',
			language_name: 'ലിംബർഗിഷ് (നെതർലാൻഡ്‌സ്)'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'ml-IN',
			language_name: 'ലിഗൂറിയൻ (ഇറ്റലി)'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'ml-IN',
			language_name: 'ലില്ലുവെറ്റ് (കാനഡ)'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'ml-IN',
			language_name: 'ലിവോണിയൻ'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'ml-IN',
			language_name: 'ലകൗട്ട (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'ml-IN',
			language_name: 'ലൊംബാർഡ് (ഇറ്റലി)'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'ml-IN',
			language_name: 'ലിംഗാല (കോംഗോ - കിൻഷാസ)'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'ml-IN',
			language_name: 'ലാവോ (ലാവോസ്)'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'ml-IN',
			language_name: 'മോങ്കോ (കോംഗോ - കിൻഷാസ)'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'ml-IN',
			language_name: 'ലൂസിയാന ക്രിയോൾ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'ml-IN',
			language_name: 'ലൊസി (സാംബിയ)'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'ml-IN',
			language_name: 'വടക്കൻ ലൂറി (ഇറാൻ)'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'ml-IN',
			language_name: 'സാമിയ (ഉഗാണ്ട)'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'ml-IN',
			language_name: 'ലിത്വാനിയൻ (ലിത്വാനിയ)'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'ml-IN',
			language_name: 'ലാറ്റ്ഗാലിയൻ'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'ml-IN',
			language_name: 'ലുബ-കറ്റംഗ (കോംഗോ - കിൻഷാസ)'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'ml-IN',
			language_name: 'ലൂബ-ലുലുവ (കോംഗോ - കിൻഷാസ)'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'ml-IN',
			language_name: 'ലൂയിസെനോ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'ml-IN',
			language_name: 'ലുൻഡ (സാംബിയ)'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'ml-IN',
			language_name: 'ലുവോ (കെനിയ)'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'ml-IN',
			language_name: 'മിസോ (ഇന്ത്യ)'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'ml-IN',
			language_name: 'ലുയിയ (കെനിയ)'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'ml-IN',
			language_name: 'ലാറ്റ്വിയൻ (ലാറ്റ്വിയ)'
		},
		{
			locale_code: 'lzh-CN',
			locale_id: 'ml-IN',
			language_name: 'സാഹിത്യ ചൈനീസ്'
		},
		{
			locale_code: 'lzz-TR',
			locale_id: 'ml-IN',
			language_name: 'ലാസ്'
		},
		{
			locale_code: 'lzz-GE',
			locale_id: 'ml-IN',
			language_name: 'ലാസ്'
		},
		{
			locale_code: 'mad-ID',
			locale_id: 'ml-IN',
			language_name: 'മദുരേസേ (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'ml-IN',
			language_name: 'മാഫ (കാമറൂൺ)'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'ml-IN',
			language_name: 'മഗാഹി (ഇന്ത്യ)'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'ml-IN',
			language_name: 'മൈഥിലി (ഇന്ത്യ)'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'ml-IN',
			language_name: 'മകാസർ (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'ml-IN',
			language_name: 'മണ്ഡിൻഗോ (ഗാംബിയ)'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'ml-IN',
			language_name: 'മണ്ഡിൻഗോ (ഗിനിയ)'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'ml-IN',
			language_name: 'മസായ് (കെനിയ)'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'ml-IN',
			language_name: 'മാബ (ഛാഡ്)'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'ml-IN',
			language_name: 'മോക്ഷ (റഷ്യ)'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'ml-IN',
			language_name: 'മണ്ഡാർ (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'ml-IN',
			language_name: 'മെൻഡെ (സിയെറ ലിയോൺ)'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'ml-IN',
			language_name: 'മേരു (കെനിയ)'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'ml-IN',
			language_name: 'മൊറിസിൻ (മൗറീഷ്യസ്)'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'ml-IN',
			language_name: 'മലഗാസി (മഡഗാസ്കർ)'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഐറിഷ് (അയർലൻഡ്)'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'ml-IN',
			language_name: 'മാഖുവാ-മീത്തോ (മൊസാംബിക്ക്)'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'ml-IN',
			language_name: 'മേത്താ (കാമറൂൺ)'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'ml-IN',
			language_name: 'മാർഷല്ലീസ് (മാർഷൽ ദ്വീപുകൾ)'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'ml-IN',
			language_name: 'മവോറി (ന്യൂസിലൻഡ്)'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'ml-IN',
			language_name: 'മിക്മാക് (കാനഡ)'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'ml-IN',
			language_name: 'മിനാങ്കബൗ (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'ml-IN',
			language_name: 'മാസിഡോണിയൻ (നോർത്ത് മാസിഡോണിയ)'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'ml-IN',
			language_name: 'മലയാളം (ഇന്ത്യ)'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'ml-IN',
			language_name: 'മംഗോളിയൻ (മംഗോളിയ)'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'ml-IN',
			language_name: 'മംഗോളിയൻ (ചൈന)'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'ml-IN',
			language_name: 'മാൻ‌ചു (ചൈന)'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'ml-IN',
			language_name: 'മണിപ്പൂരി (ഇന്ത്യ)'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'ml-IN',
			language_name: 'ഇന്നു-ഐമൂൻ (കാനഡ)'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'ml-IN',
			language_name: 'മോഹാക് (കാനഡ)'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'ml-IN',
			language_name: 'മൊസ്സി (ബർക്കിന ഫാസോ)'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'ml-IN',
			language_name: 'മറാത്തി (ഇന്ത്യ)'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'ml-IN',
			language_name: 'പടിഞ്ഞാറൻ മാരി'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'ml-IN',
			language_name: 'മലെയ് (മലേഷ്യ)'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'ml-IN',
			language_name: 'മലെയ് (കോക്കസ് [കീലിംഗ്] ദ്വീപുകൾ)'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'ml-IN',
			language_name: 'മാൾട്ടീസ് (മാൾട്ട)'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'ml-IN',
			language_name: 'മുന്ദാംഗ് (കാമറൂൺ)'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'ml-IN',
			language_name: 'ക്രീക്ക് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'ml-IN',
			language_name: 'മിരാൻറസേ (പോർച്ചുഗൽ)'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'ml-IN',
			language_name: 'മർവാരി (ഇന്ത്യ)'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'ml-IN',
			language_name: 'മെൻ്റവായ്'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'ml-IN',
			language_name: 'ബർമീസ് (മ്യാൻമാർ [ബർമ്മ])'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'ml-IN',
			language_name: 'മയീൻ (ഗാബൺ)'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'ml-IN',
			language_name: 'ഏഴ്സ്യ (റഷ്യ)'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'ml-IN',
			language_name: 'മസന്ററാനി (ഇറാൻ)'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'ml-IN',
			language_name: 'നൗറു (നൗറു)'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'ml-IN',
			language_name: 'മിൻ നാൻ ചൈനീസ് (ചൈന)'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'ml-IN',
			language_name: 'മിൻ നാൻ ചൈനീസ് (തായ്‌വാൻ)'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'ml-IN',
			language_name: 'മിൻ നാൻ ചൈനീസ് (മക്കാവു എസ്.എ.ആർ. ചൈന)'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'ml-IN',
			language_name: 'നെപ്പോളിറ്റാൻ (ഇറ്റലി)'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'ml-IN',
			language_name: 'നാമ (നമീബിയ)'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ ബുക്‌മൽ (നോർവെ)'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'ml-IN',
			language_name: 'നോർത്ത് ഡെബിൾ (സിംബാബ്‌വേ)'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'ml-IN',
			language_name: 'ലോ ജർമൻ (ജർമ്മനി)'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'ml-IN',
			language_name: 'നേപ്പാളി (നേപ്പാൾ)'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'ml-IN',
			language_name: 'നേവാരി (നേപ്പാൾ)'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'ml-IN',
			language_name: 'ഡോങ്ക (നമീബിയ)'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'ml-IN',
			language_name: 'നിയാസ് (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'ml-IN',
			language_name: 'ന്യുവാൻ (ന്യൂയി)'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'ml-IN',
			language_name: 'ആവോ നാഗ'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'ml-IN',
			language_name: 'ഡച്ച് (നെതർലാൻഡ്‌സ്)'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'ml-IN',
			language_name: 'ക്വേസിയോ (കാമറൂൺ)'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ നൈനോർക്‌സ് (നോർവെ)'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'ml-IN',
			language_name: 'ഗീംബൂൺ (കാമറൂൺ)'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ (നോർവെ)'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'ml-IN',
			language_name: 'നോഗൈ (റഷ്യ)'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'ml-IN',
			language_name: 'പഴയ നോഴ്‌സ് (സ്വീഡൻ)'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'ml-IN',
			language_name: 'ഇൻകോ (ഗിനിയ)'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'ml-IN',
			language_name: 'ദക്ഷിണ നെഡിബിൾ (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'ml-IN',
			language_name: 'നോർത്തേൻ സോതോ (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'ml-IN',
			language_name: 'നുവേർ (ദക്ഷിണ സുഡാൻ)'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'ml-IN',
			language_name: 'നവാജോ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'ml-IN',
			language_name: 'ക്ലാസിക്കൽ നേവാരി (നേപ്പാൾ)'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'ml-IN',
			language_name: 'ന്യൻജ (മലാവി)'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'ml-IN',
			language_name: 'ന്യാംവേസി (ടാൻസാനിയ)'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'ml-IN',
			language_name: 'ന്യാൻകോൾ (ഉഗാണ്ട)'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'ml-IN',
			language_name: 'ന്യോറോ (ഉഗാണ്ട)'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'ml-IN',
			language_name: 'സിമ (ഘാന)'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'ml-IN',
			language_name: 'ഓക്‌സിറ്റൻ (ഫ്രാൻസ്)'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'ml-IN',
			language_name: 'ഓജിബ്വാ (കാനഡ)'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'ml-IN',
			language_name: 'നോർത്ത്‌വെസ്റ്റേൺ ഒജീബ്‌വെ (കാനഡ)'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'ml-IN',
			language_name: 'സെൻട്രൽ ഒജീബ്‌വെ (കാനഡ)'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'ml-IN',
			language_name: 'ഒജി-ക്രീ (കാനഡ)'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'ml-IN',
			language_name: 'വെസ്റ്റേൺ ഒജീബ്‌വെ (കാനഡ)'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'ml-IN',
			language_name: 'ഒകാനഗൻ (കാനഡ)'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'ml-IN',
			language_name: 'ഒറോമോ (എത്യോപ്യ)'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'ml-IN',
			language_name: 'ഒഡിയ (ഇന്ത്യ)'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'ml-IN',
			language_name: 'ഒസ്സെറ്റിക് (ജോർജ്ജിയ)'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'ml-IN',
			language_name: 'ഒസേജ് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'ml-IN',
			language_name: 'ഓട്ടോമൻ തുർക്കിഷ് (തുർക്കിയെ)'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'ml-IN',
			language_name: 'പഞ്ചാബി (ഇന്ത്യ)'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'ml-IN',
			language_name: 'പഞ്ചാബി (പാക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'ml-IN',
			language_name: 'പങ്കാസിനൻ (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'ml-IN',
			language_name: 'പാഹ്ലവി (ഇറാൻ)'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'ml-IN',
			language_name: 'പാഹ്ലവി (ചൈന)'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'ml-IN',
			language_name: 'പാംപൻഗ (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'ml-IN',
			language_name: 'പാപിയാമെന്റൊ (കുറാകാവോ)'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'ml-IN',
			language_name: 'പലാവുൻ (പലാവു)'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'ml-IN',
			language_name: 'പിക്കാർഡ്'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'ml-IN',
			language_name: 'നൈജീരിയൻ പിഡ്‌ഗിൻ (നൈജീരിയ)'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'ml-IN',
			language_name: 'പെൻസിൽവാനിയ ജർമ്മൻ'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'ml-IN',
			language_name: 'പ്ലാറ്റ്ഡിറ്റ്ഷ്'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'ml-IN',
			language_name: 'പഴയ പേർഷ്യൻ (ഇറാൻ)'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'ml-IN',
			language_name: 'പാലറ്റൈൻ ജർമ്മൻ'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'ml-IN',
			language_name: 'ഫീനിഷ്യൻ (ലെബനൻ)'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'ml-IN',
			language_name: 'പാലി (യുണൈറ്റഡ് കിംഗ്ഡം)'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'ml-IN',
			language_name: 'പാലി (ഇന്ത്യ)'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'ml-IN',
			language_name: 'പാലി (ശ്രീലങ്ക)'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'ml-IN',
			language_name: 'പാലി (മ്യാൻമാർ [ബർമ്മ])'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'ml-IN',
			language_name: 'പാലി (തായ്‌ലാൻഡ്)'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'ml-IN',
			language_name: 'പിജിൻ (സോളമൻ ദ്വീപുകൾ)'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'ml-IN',
			language_name: 'പോളിഷ് (പോളണ്ട്)'
		},
		{
			locale_code: 'pms-IT',
			locale_id: 'ml-IN',
			language_name: 'പീഡ്മോണ്ടീസ്'
		},
		{
			locale_code: 'pnt-GR',
			locale_id: 'ml-IN',
			language_name: 'പോണ്ടിക്'
		},
		{
			locale_code: 'pnt-RU',
			locale_id: 'ml-IN',
			language_name: 'പോണ്ടിക്'
		},
		{
			locale_code: 'pnt-TR',
			locale_id: 'ml-IN',
			language_name: 'പോണ്ടിക്'
		},
		{
			locale_code: 'pon-FM',
			locale_id: 'ml-IN',
			language_name: 'പൊൻപിയൻ (മൈക്രോനേഷ്യ)'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'ml-IN',
			language_name: 'മലിസീറ്റ്-പസാമക്വുഡി (കാനഡ)'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'ml-IN',
			language_name: 'പ്രഷ്യൻ (പോളണ്ട്)'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'ml-IN',
			language_name: 'പഴയ പ്രൊവൻഷ്ൽ (ഫ്രാൻസ്)'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'ml-IN',
			language_name: 'പഷ്‌തോ (അഫ്‌ഗാനിസ്ഥാൻ)'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'ml-IN',
			language_name: 'ബ്രസീലിയൻ പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'ml-IN',
			language_name: 'ക്വെച്ചുവ (പെറു)'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'ml-IN',
			language_name: 'ക്വിച്ചെ (ഗ്വാട്ടിമാല)'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'ml-IN',
			language_name: 'ചിംബോരാസോ ഹൈലാൻഡ് ക്വിചുവ'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'ml-IN',
			language_name: 'രാജസ്ഥാനി (ഇന്ത്യ)'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'ml-IN',
			language_name: 'രാപനൂയി (ചിലി)'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'ml-IN',
			language_name: 'രാരോടോങ്കൻ (കുക്ക് ദ്വീപുകൾ)'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'ml-IN',
			language_name: 'റോമാഗ്നോൾ'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'ml-IN',
			language_name: 'റോഹിംഗാ (മ്യാൻമാർ [ബർമ്മ])'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'ml-IN',
			language_name: 'റിഫിയൻ'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'ml-IN',
			language_name: 'റൊമാഞ്ച് (സ്വിറ്റ്സർലാൻഡ്)'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'ml-IN',
			language_name: 'റുണ്ടി (ബറുണ്ടി)'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'ml-IN',
			language_name: 'റൊമാനിയൻ (റൊമാനിയ)'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'ml-IN',
			language_name: 'റോംബോ (ടാൻസാനിയ)'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'ml-IN',
			language_name: 'റൊമാനി (റൊമാനിയ)'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'ml-IN',
			language_name: 'റോട്ടുമാൻ'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'ml-IN',
			language_name: 'റഷ്യൻ (റഷ്യ)'
		},
		{
			locale_code: 'rue-UA',
			locale_id: 'ml-IN',
			language_name: 'റുസിൻ'
		},
		{
			locale_code: 'rug-SB',
			locale_id: 'ml-IN',
			language_name: 'റൊവിയാന'
		},
		{
			locale_code: 'rup-RO',
			locale_id: 'ml-IN',
			language_name: 'ആരോമാനിയൻ (റൊമാനിയ)'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'ml-IN',
			language_name: 'കിന്യാർവാണ്ട (റുവാണ്ട)'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'ml-IN',
			language_name: 'റുവാ (ടാൻസാനിയ)'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'ml-IN',
			language_name: 'സംസ്‌കൃതം (ഇന്ത്യ)'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'ml-IN',
			language_name: 'സാൻഡവേ (ടാൻസാനിയ)'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'ml-IN',
			language_name: 'സാഖ (റഷ്യ)'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'ml-IN',
			language_name: 'സമരിയാക്കാരുടെ അരമായ (പാലസ്‌തീൻ പ്രദേശങ്ങൾ)'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'ml-IN',
			language_name: 'സംബുരു (കെനിയ)'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'ml-IN',
			language_name: 'സസാക് (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'ml-IN',
			language_name: 'സന്താലി (ഇന്ത്യ)'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'ml-IN',
			language_name: 'സൗരാഷ്ട്ര'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'ml-IN',
			language_name: 'ഗംബായ് (ഛാഡ്)'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'ml-IN',
			language_name: 'സംഗു (ടാൻസാനിയ)'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'ml-IN',
			language_name: 'സർഡിനിയാൻ (ഇറ്റലി)'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'ml-IN',
			language_name: 'സിസിലിയൻ (ഇറ്റലി)'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'ml-IN',
			language_name: 'സ്കോട്സ് (യുണൈറ്റഡ് കിംഗ്ഡം)'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'ml-IN',
			language_name: 'സിന്ധി (പാക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'ml-IN',
			language_name: 'സിന്ധി (ഇന്ത്യ)'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'ml-IN',
			language_name: 'സസ്സാരെസ് സാർഡിനിയൻ'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ കുർദ്ദിഷ് (ഇറാൻ)'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'ml-IN',
			language_name: 'വടക്കൻ സമി (നോർവെ)'
		},
		{
			locale_code: 'see-US',
			locale_id: 'ml-IN',
			language_name: 'സെനേക (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'ml-IN',
			language_name: 'സേന (മൊസാംബിക്ക്)'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'ml-IN',
			language_name: 'സെരി'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'ml-IN',
			language_name: 'സെൽകപ് (റഷ്യ)'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'ml-IN',
			language_name: 'കൊയ്റാബൊറോ സെന്നി (മാലി)'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'ml-IN',
			language_name: 'സാംഗോ (സെൻട്രൽ ആഫ്രിക്കൻ റിപ്പബ്ലിക്ക്)'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'ml-IN',
			language_name: 'പഴയ ഐറിഷ് (അയർലൻഡ്)'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'ml-IN',
			language_name: 'സമോഗിഷ്യൻ'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'ml-IN',
			language_name: 'താച്ചലിറ്റ് (മൊറോക്കൊ)'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'ml-IN',
			language_name: 'ഷാൻ (മ്യാൻമാർ [ബർമ്മ])'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'ml-IN',
			language_name: 'ചാഡിയൻ അറബി (ഛാഡ്)'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'ml-IN',
			language_name: 'സിംഹള (ശ്രീലങ്ക)'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'ml-IN',
			language_name: 'സിഡാമോ (എത്യോപ്യ)'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'ml-IN',
			language_name: 'സ്ലോവാക് (സ്ലോവാക്യ)'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'ml-IN',
			language_name: 'സ്ലോവേനിയൻ (സ്ലോവേനിയ)'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'ml-IN',
			language_name: 'സതേൺ ലുഷൂറ്റ്‌സീഡ് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'sli-PL',
			locale_id: 'ml-IN',
			language_name: 'ലോവർ സിലേഷ്യൻ'
		},
		{
			locale_code: 'sly-ID',
			locale_id: 'ml-IN',
			language_name: 'സെലയാർ'
		},
		{
			locale_code: 'sm-WS',
			locale_id: 'ml-IN',
			language_name: 'സമോവൻ (സമോവ)'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ സമി (സ്വീഡൻ)'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'ml-IN',
			language_name: 'ലൂലീ സമി (സ്വീഡൻ)'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'ml-IN',
			language_name: 'ഇനാരി സമി (ഫിൻലാൻഡ്)'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'ml-IN',
			language_name: 'സ്കോൾട്ട് സമി (ഫിൻലാൻഡ്)'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'ml-IN',
			language_name: 'ഷോണ (സിംബാബ്‌വേ)'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'ml-IN',
			language_name: 'സോണിൻകെ (മാലി)'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'ml-IN',
			language_name: 'സോമാലി (സോമാലിയ)'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'ml-IN',
			language_name: 'സോജിഡിയൻ (ഉസ്‌ബെക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'ml-IN',
			language_name: 'അൽബേനിയൻ (അൽബേനിയ)'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ (സെർബിയ)'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ (മോണ്ടെനെഗ്രോ)'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ (റൊമാനിയ)'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ (തുർക്കിയെ)'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'ml-IN',
			language_name: 'ശ്രാനൻ ഡോങ്കോ (സുരിനാം)'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'ml-IN',
			language_name: 'സെറർ (സെനഗൽ)'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'ml-IN',
			language_name: 'സ്വാറ്റി (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'ml-IN',
			language_name: 'സാഹോ (എറിത്രിയ)'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ സോതോ (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'ml-IN',
			language_name: 'സാറ്റർലാൻഡ് ഫ്രിസിയൻ'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'ml-IN',
			language_name: 'സ്ട്രെയ്റ്റ്സ് സെയ്‌ലിഷ് (കാനഡ)'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'ml-IN',
			language_name: 'സുണ്ടാനീസ് (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'ml-IN',
			language_name: 'സുകുമ (ടാൻസാനിയ)'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'ml-IN',
			language_name: 'സുസു (ഗിനിയ)'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'ml-IN',
			language_name: 'സ്വീഡിഷ് (സ്വീഡൻ)'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'ml-IN',
			language_name: 'സ്വാഹിലി (ടാൻസാനിയ)'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'ml-IN',
			language_name: 'കൊമോറിയൻ (മയോട്ടി)'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'ml-IN',
			language_name: 'പുരാതന സുറിയാനിഭാഷ (തുർക്കിയെ)'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'ml-IN',
			language_name: 'സുറിയാനി (ഇറാഖ്)'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'ml-IN',
			language_name: 'സൈലേഷ്യൻ (പോളണ്ട്)'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'ml-IN',
			language_name: 'തമിഴ് (ഇന്ത്യ)'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'ml-IN',
			language_name: 'സതേൺ ടറ്റ്ഷോൺ (കാനഡ)'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'ml-IN',
			language_name: 'തുളു'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'ml-IN',
			language_name: 'തെലുങ്ക് (ഇന്ത്യ)'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'ml-IN',
			language_name: 'ടിംനേ (സിയെറ ലിയോൺ)'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'ml-IN',
			language_name: 'ടെസോ (ഉഗാണ്ട)'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'ml-IN',
			language_name: 'ടെറേനോ (ബ്രസീൽ)'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'ml-IN',
			language_name: 'ടെറ്റും (തിമോർ-ലെസ്റ്റെ)'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'ml-IN',
			language_name: 'താജിക് (താജിക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'ml-IN',
			language_name: 'താജിക് (പാക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'ml-IN',
			language_name: 'ടാഗിഷ് (കാനഡ)'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'ml-IN',
			language_name: 'തായ് (തായ്‌ലാൻഡ്)'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'ml-IN',
			language_name: 'ടാഹ്‌ൽടൻ (കാനഡ)'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'ml-IN',
			language_name: 'ടൈഗ്രിന്യ (എത്യോപ്യ)'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'ml-IN',
			language_name: 'ടൈഗ്രി (എറിത്രിയ)'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'ml-IN',
			language_name: 'ടിവ് (നൈജീരിയ)'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'ml-IN',
			language_name: 'തുർക്‌മെൻ (തുർക്ക്മെനിസ്ഥാൻ)'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'ml-IN',
			language_name: 'ടൊക്കേലൗ (ടോക്കെലൂ)'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'ml-IN',
			language_name: 'ത്സഖൂർ'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'ml-IN',
			language_name: 'ഫിലിപ്പിനോ (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'ml-IN',
			language_name: 'ലിംഗ്വിറ്റ് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'ml-IN',
			language_name: 'താലിഷ്'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'ml-IN',
			language_name: 'ടമഷേക് (നൈജർ)'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'ml-IN',
			language_name: 'സ്വാന (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'ml-IN',
			language_name: 'ടോംഗൻ (ടോംഗ)'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'ml-IN',
			language_name: 'ന്യാസാ ഡോങ്ക (മലാവി)'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'ml-IN',
			language_name: 'ടോക് പിസിൻ (പാപ്പുവ ന്യൂ ഗിനിയ)'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'ml-IN',
			language_name: 'ടർക്കിഷ് (തുർക്കിയെ)'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'ml-IN',
			language_name: 'തുറോയോ'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'ml-IN',
			language_name: 'തരോക്കോ (തായ്‌വാൻ)'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'ml-IN',
			language_name: 'ടോർവാലി'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'ml-IN',
			language_name: 'സോംഗ (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'ml-IN',
			language_name: 'സാകോണിയൻ'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'ml-IN',
			language_name: 'സിംഷ്യൻ (കാനഡ)'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'ml-IN',
			language_name: 'ടാട്ടർ (റഷ്യ)'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'ml-IN',
			language_name: 'നോർത്തേൺ ടറ്റ്ഷോൺ (കാനഡ)'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'ml-IN',
			language_name: 'മുസ്ലീം ടാറ്റ്'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'ml-IN',
			language_name: 'ടുംബുക (മലാവി)'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'ml-IN',
			language_name: 'ടുവാലു (ടുവാലു)'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'ml-IN',
			language_name: 'ടസവാക്ക് (നൈജർ)'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'ml-IN',
			language_name: 'താഹിതിയൻ (ഫ്രഞ്ച് പോളിനേഷ്യ)'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'ml-IN',
			language_name: 'തുവിനിയൻ (റഷ്യ)'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'ml-IN',
			language_name: 'മധ്യ അറ്റ്‌ലസ് ടമാസൈറ്റ് (മൊറോക്കൊ)'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'ml-IN',
			language_name: 'ഉഡ്മുർട്ട് (റഷ്യ)'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'ml-IN',
			language_name: 'ഉയ്ഘുർ (ചൈന)'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'ml-IN',
			language_name: 'ഉയ്ഘുർ (കസാഖിസ്ഥാൻ)'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'ml-IN',
			language_name: 'ഉയ്ഘുർ (മംഗോളിയ)'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'ml-IN',
			language_name: 'ഉഗറിട്ടിക് (സിറിയ)'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'ml-IN',
			language_name: 'ഉക്രേനിയൻ (ഉക്രെയ്‌ൻ)'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'ml-IN',
			language_name: 'ഉംബുന്ദു (അംഗോള)'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'ml-IN',
			language_name: 'കറ്റാലാൻ (അൻഡോറ)'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (യുണൈറ്റഡ് അറബ് എമിറൈറ്റ്‌സ്)'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'ml-IN',
			language_name: 'ഡാരി'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ് (അംഗോള)'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (അർജന്റീന)'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'ml-IN',
			language_name: 'മലെയ് (ബ്രൂണൈ)'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'ml-IN',
			language_name: 'ഉറുദു (യുണൈറ്റഡ് കിംഗ്ഡം)'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'ml-IN',
			language_name: 'മലെയ് (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'ml-IN',
			language_name: 'ഉറുദു (ഇന്ത്യ)'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'ml-IN',
			language_name: 'ഉറുദു (മൗറീഷ്യസ്)'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'ml-IN',
			language_name: 'ഉറുദു (പാക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'ml-IN',
			language_name: 'പേർഷ്യൻ (താജിക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'ml-IN',
			language_name: 'സമോവൻ (അമേരിക്കൻ സമോവ)'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'ml-IN',
			language_name: 'ഓസ്‌ട്രിയൻ ജർമ്മൻ'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'ml-IN',
			language_name: 'ഡച്ച് (അറൂബ)'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'ml-IN',
			language_name: 'സ്വീഡിഷ് (അലൻഡ് ദ്വീപുകൾ)'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'ml-IN',
			language_name: 'ഫ്ലമിഷ്'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ബർക്കിന ഫാസോ)'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ബഹ്റിൻ)'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ബെനിൻ)'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (സെന്റ് ബാർത്തലമി)'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (ബൊളീവിയ)'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (തായ്‌വാൻ)'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'ml-IN',
			language_name: 'പാപിയാമെന്റൊ (കരീബിയൻ നെതർലാൻഡ്സ്)'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ (ബൗവെട്ട് ദ്വീപ്)'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'ml-IN',
			language_name: 'റഷ്യൻ (ബെലറൂസ്)'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (കോംഗോ - കിൻഷാസ)'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (കോംഗോ - ബ്രാസവില്ലി)'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'ml-IN',
			language_name: 'സ്വിസ് ഹൈ ജർമ്മൻ'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (കോട്ട് ഡി വാർ)'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (ചിലി)'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (കാമറൂൺ)'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (ചൈന)'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (കൊളംബിയ)'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'ml-IN',
			language_name: 'root (സൈപ്രസ്)'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (കോസ്റ്ററിക്ക)'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (ക്യൂബ)'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ് (കേപ്പ് വേർഡ്)'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'ml-IN',
			language_name: 'ഗ്രീക്ക് (സൈപ്രസ്)'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'ml-IN',
			language_name: 'കര-കാൽപ്പക് (അഫ്‌ഗാനിസ്ഥാൻ)'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'ml-IN',
			language_name: 'മാസിഡോണിയൻ (അൽബേനിയ)'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ (ബോസ്നിയയും ഹെർസഗോവിനയും)'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'ml-IN',
			language_name: 'മാസിഡോണിയൻ (ഗ്രീസ്)'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'ml-IN',
			language_name: 'കര-കാൽപ്പക് (ഇറാൻ)'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'ml-IN',
			language_name: 'ഉക്രേനിയൻ (മൾഡോവ)'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'ml-IN',
			language_name: 'ബൾഗേറിയൻ (റൊമാനിയ)'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'ml-IN',
			language_name: 'ഉക്രേനിയൻ (സ്ലോവാക്യ)'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'ml-IN',
			language_name: 'കബർഡിയാൻ (തുർക്കിയെ)'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'ml-IN',
			language_name: 'ഉസ്‌ബെക്ക് (ഉസ്‌ബെക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'ml-IN',
			language_name: 'നേപ്പാളി (ഭൂട്ടാൻ)'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'ml-IN',
			language_name: 'ഭോജ്‌പുരി (മൗറീഷ്യസ്)'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ജിബൂത്തി)'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (ഡൊമിനിക്കൻ റിപ്പബ്ലിക്ക്)'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (അൾജീരിയ)'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (ഇക്വഡോർ)'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (പശ്ചിമ സഹാറ)'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'ml-IN',
			language_name: 'ടൈഗ്രിന്യ (എറിത്രിയ)'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ഗാബൺ)'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'ml-IN',
			language_name: 'വൊളോഫ് (സെനഗൽ)'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ഫ്രഞ്ച് ഗയാന)'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ഗിനിയ)'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ഗ്വാഡലൂപ്പ്)'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (ഇക്വറ്റോറിയൽ ഗിനിയ)'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (ഗ്വാട്ടിമാല)'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ് (ഗിനിയ-ബിസൗ)'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'ml-IN',
			language_name: 'കാന്റണീസ് (കാനഡ)'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'ml-IN',
			language_name: 'കാന്റണീസ് (ചൈന)'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'ml-IN',
			language_name: 'യിദ്ദിഷ് (സ്വീഡൻ)'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'ml-IN',
			language_name: 'യിദ്ദിഷ് (ഉക്രെയ്‌ൻ)'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'ml-IN',
			language_name: 'യിദ്ദിഷ് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (ഹോങ്കോങ് [SAR] ചൈന)'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'ml-IN',
			language_name: 'ഹ്മോങ് ഞ്ജുവ'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'ml-IN',
			language_name: 'ഹ്മോങ് ഞ്ജുവ'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'ml-IN',
			language_name: 'ഹ്മോങ് ഞ്ജുവ'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'ml-IN',
			language_name: 'ഹ്മോങ് ഞ്ജുവ'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'ml-IN',
			language_name: 'ഹ്മോങ് ഞ്ജുവ'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'ml-IN',
			language_name: 'ഹ്മോങ് ഞ്ജുവ'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (ഹോണ്ടുറാസ്)'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ഇറാഖ്)'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ജോർദ്ദാൻ)'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'ml-IN',
			language_name: 'സ്വാഹിലി (കെനിയ)'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (കോമൊറോസ്)'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'ml-IN',
			language_name: 'കൊറിയൻ (ഉത്തരകൊറിയ)'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (കുവൈറ്റ്)'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'ml-IN',
			language_name: 'റഷ്യൻ (കസാഖിസ്ഥാൻ)'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (യുണൈറ്റഡ് അറബ് എമിറൈറ്റ്‌സ്)'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'ml-IN',
			language_name: 'തുർക്‌മെൻ (അഫ്‌ഗാനിസ്ഥാൻ)'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ബംഗ്ലാദേശ്)'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ബൾഗേറിയ)'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ഭൂട്ടാൻ)'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (കോക്കസ് [കീലിംഗ്] ദ്വീപുകൾ)'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'ml-IN',
			language_name: 'സ്വാംഗ് (ചൈന)'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'ml-IN',
			language_name: 'ടർക്കിഷ് (സൈപ്രസ്)'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (അൾജീരിയ)'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ഈജിപ്ത്)'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (എറിത്രിയ)'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (എത്യോപ്യ)'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ഗ്രീസ്)'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ഹോങ്കോങ് [SAR] ചൈന)'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ഇസ്രായേൽ)'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ഇറാഖ്)'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'ml-IN',
			language_name: 'തുർക്‌മെൻ (ഇറാൻ)'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ജോർദ്ദാൻ)'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (കോമൊറോസ്)'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (കസാഖിസ്ഥാൻ)'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ലെബനൻ)'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ശ്രീലങ്ക)'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (മൊറോക്കൊ)'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'ml-IN',
			language_name: 'അൽബേനിയൻ (നോർത്ത് മാസിഡോണിയ)'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (മക്കാവു എസ്.എ.ആർ. ചൈന)'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (മൗറിറ്റാനിയ)'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (മാലിദ്വീപ്)'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (നേപ്പാൾ)'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (പാക്കിസ്ഥാൻ)'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (സുഡാൻ)'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (ദക്ഷിണ സുഡാൻ)'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ് (സിറിയ)'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ഛാഡ്)'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (തായ്‌ലാൻഡ്)'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ടുണീഷ്യ)'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'ml-IN',
			language_name: 'പോളിഷ് (ഉക്രെയ്‌ൻ)'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ് (യെമൻ)'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ലെബനൻ)'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'ml-IN',
			language_name: 'ജർമ്മൻ (ലിച്ചൺസ്റ്റൈൻ)'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ സോതോ (ലെസോതോ)'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ലക്സംബർഗ്)'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ലിബിയ)'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (മൊറോക്കൊ)'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (മൊണാക്കോ)'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'ml-IN',
			language_name: 'മോൾഡാവിയൻ'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (സെന്റ് മാർട്ടിൻ)'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (മക്കാവു എസ്.എ.ആർ. ചൈന)'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (മാർട്ടിനിക്ക്)'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (മൗറിറ്റാനിയ)'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (മൗറീഷ്യസ്)'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'ml-IN',
			language_name: 'മെക്സിക്കൻ സ്പാനിഷ്'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ് (മൊസാംബിക്ക്)'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'ml-IN',
			language_name: 'ആഫ്രിക്കാൻസ് (നമീബിയ)'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ന്യൂ കാലിഡോണിയ)'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'ml-IN',
			language_name: 'ഹൗസ (നൈജർ)'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (നിക്കരാഗ്വ)'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ഒമാൻ)'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (പനാമ)'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (പെറു)'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ഫ്രഞ്ച് പോളിനേഷ്യ)'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (സെന്റ് പിയറി ആൻഡ് മിക്വലൻ)'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (പോർട്ടോ റിക്കോ)'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (പാലസ്‌തീൻ പ്രദേശങ്ങൾ)'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'ml-IN',
			language_name: 'യൂറോപ്യൻ പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ഖത്തർ)'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (റീയൂണിയൻ)'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (സൗദി അറേബ്യ)'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (സീഷെൽസ്)'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (സുഡാൻ)'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ ബുക്‌മൽ (സ്വാൽബാഡും ജാൻ മായേനും)'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'ml-IN',
			language_name: 'ഇറ്റാലിയൻ (സാൻ മറിനോ)'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'ml-IN',
			language_name: 'ഡച്ച് (സുരിനാം)'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ദക്ഷിണ സുഡാൻ)'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ് (സാവോ ടോമും പ്രിൻസിപെയും)'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (എൽ സാൽവദോർ)'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (സിറിയ)'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ഛാഡ്)'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ഫ്രഞ്ച് ദക്ഷിണ ഭൂപ്രദേശം)'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'ml-IN',
			language_name: 'സ്റ്റാൻഡേർഡ് മൊറോക്കൻ റ്റാമസിയറ്റ് (മൊറോക്കൊ)'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (ടോഗോ)'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ് (തിമോർ-ലെസ്റ്റെ)'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (ടുണീഷ്യ)'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'ml-IN',
			language_name: 'സ്വാഹിലി (ഉഗാണ്ട)'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (ഉറുഗ്വേ)'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'ml-IN',
			language_name: 'ഇറ്റാലിയൻ (വത്തിക്കാൻ)'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'ml-IN',
			language_name: 'വൈ (ലൈബീരിയ)'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ് (വെനിസ്വേല)'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'ml-IN',
			language_name: 'വിയറ്റ്നാമീസ് (വിയറ്റ്നാം)'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (വാലിസ് ആന്റ് ഫ്യൂച്യുന)'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'ml-IN',
			language_name: 'അറബിക് (യെമൻ)'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച് (മയോട്ടി)'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'ml-IN',
			language_name: 'ഉസ്‌ബെക്ക് (അഫ്‌ഗാനിസ്ഥാൻ)'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'ml-IN',
			language_name: 'ഉസ്‌ബെക്ക് (ചൈന)'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'ml-IN',
			language_name: 'വെന്ദ (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'ml-IN',
			language_name: 'വെനീഷ്യൻ (ഇറ്റലി)'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'ml-IN',
			language_name: 'വെപ്സ്'
		},
		{
			locale_code: 'vls-BE',
			locale_id: 'ml-IN',
			language_name: 'വെസ്റ്റ് ഫ്ലെമിഷ്'
		},
		{
			locale_code: 'vmf-DE',
			locale_id: 'ml-IN',
			language_name: 'പ്രധാന-ഫ്രാങ്കോണിയൻ'
		},
		{
			locale_code: 'vmw-MZ',
			locale_id: 'ml-IN',
			language_name: 'മഖുവ (മൊസാംബിക്ക്)'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'ml-IN',
			language_name: 'വോട്ടിക് (റഷ്യ)'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'ml-IN',
			language_name: 'വോറോ'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'ml-IN',
			language_name: 'വുൻജോ (ടാൻസാനിയ)'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'ml-IN',
			language_name: 'വല്ലൂൺ (ബെൽജിയം)'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'ml-IN',
			language_name: 'വാൾസർ (സ്വിറ്റ്സർലാൻഡ്)'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'ml-IN',
			language_name: 'വൊലൈറ്റ (എത്യോപ്യ)'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'ml-IN',
			language_name: 'വാരേയ് (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'was-US',
			locale_id: 'ml-IN',
			language_name: 'വാഷൊ (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'ml-IN',
			language_name: 'വൂൾപിരി (ഓസ്‌ട്രേലിയ)'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'ml-IN',
			language_name: 'വു ചൈനീസ് (ചൈന)'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'ml-IN',
			language_name: 'കാൽമിക് (റഷ്യ)'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'ml-IN',
			language_name: 'ഖോസ (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'ml-IN',
			language_name: 'മിംഗ്രേലിയൻ'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'ml-IN',
			language_name: 'കാങ്ടി (ഇന്ത്യ)'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'ml-IN',
			language_name: 'സോഗോ (ഉഗാണ്ട)'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'ml-IN',
			language_name: 'യാവോ (മൊസാംബിക്ക്)'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'ml-IN',
			language_name: 'യെപ്പീസ് (മൈക്രോനേഷ്യ)'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'ml-IN',
			language_name: 'യാംഗ്ബെൻ (കാമറൂൺ)'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'ml-IN',
			language_name: 'യംബ (കാമറൂൺ)'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'ml-IN',
			language_name: 'യൊറൂബാ (നൈജീരിയ)'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'ml-IN',
			language_name: 'നീൻഗാറ്റു (ബ്രസീൽ)'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'ml-IN',
			language_name: 'കാന്റണീസ് (ഹോങ്കോങ് [SAR] ചൈന)'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'ml-IN',
			language_name: 'സാപ്പോടെക് (മെക്സിക്കോ)'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'ml-IN',
			language_name: 'സീലാൻഡിക്'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'ml-IN',
			language_name: 'സെനഗ (മൗറിറ്റാനിയ)'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (ഓസ്‌ട്രേലിയ)'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (ബ്രൂണൈ)'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (യുണൈറ്റഡ് കിംഗ്ഡം)'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (ഫ്രഞ്ച് ഗയാന)'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (ഇന്തോനേഷ്യ)'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (പനാമ)'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (ഫ്രഞ്ച് പോളിനേഷ്യ)'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (ഫിലിപ്പീൻസ്)'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (സുരിനാം)'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (തായ്‌ലാൻഡ്)'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ് (വിയറ്റ്നാം)'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'ml-IN',
			language_name: 'സുലു (ദക്ഷിണാഫ്രിക്ക)'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'ml-IN',
			language_name: 'സുനി (അമേരിക്കൻ ഐക്യനാടുകൾ)'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'ml-IN',
			language_name: 'സാസാ (തുർക്കിയെ)'
		}
	];

	// Add timestamps to all rows
	const rowsWithTimestamps = rows.map((row) => ({
		...row,
		created_at: now,
		updated_at: now
	}));

	// Deduplicate by composite locale key to match the table constraint
	const uniqueRows = Object.values(
		rowsWithTimestamps.reduce((acc, r) => {
			acc[`${r.locale_code}::${r.locale_id}`] = r;
			return acc;
		}, {})
	);

	// Insert rows into locale_by_locale
	await knex('locale_by_locale')
		.insert(uniqueRows)
		.onConflict(['locale_code', 'locale_id'])
		.merge({
			language_name: knex.raw('EXCLUDED.language_name'),
			updated_at: now
		});
};
