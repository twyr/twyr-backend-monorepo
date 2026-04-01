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
			language_name: 'അഫാർ'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'ml-IN',
			language_name: 'അബ്‌ഖാസിയൻ'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'ml-IN',
			language_name: 'അചിനീസ്'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'ml-IN',
			language_name: 'അകോലി'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'ml-IN',
			language_name: 'അഡാങ്‌മി'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'ml-IN',
			language_name: 'അഡൈഗേ'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'ml-IN',
			language_name: 'അവസ്റ്റാൻ'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'ml-IN',
			language_name: 'ടുണീഷ്യൻ അറബിക്'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'ml-IN',
			language_name: 'ആഫ്രിക്കാൻസ്'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'ml-IN',
			language_name: 'ആഫ്രിഹിലി'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'ml-IN',
			language_name: 'ആഘേം'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'ml-IN',
			language_name: 'ഐനു'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'ml-IN',
			language_name: 'അകാൻ‌'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'ml-IN',
			language_name: 'അക്കാഡിയൻ'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'ml-IN',
			language_name: 'അലബാമ'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'ml-IN',
			language_name: 'അലൂട്ട്'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ അൾത്തായി'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'ml-IN',
			language_name: 'അംഹാരിക്'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'ml-IN',
			language_name: 'അരഗോണീസ്'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'ml-IN',
			language_name: 'പഴയ ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'ml-IN',
			language_name: 'ഒബോളോ'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'ml-IN',
			language_name: 'ആൻഗിക'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'ml-IN',
			language_name: 'അരമായ'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'ml-IN',
			language_name: 'അരമായ'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'ml-IN',
			language_name: 'അരമായ'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'ml-IN',
			language_name: 'അരമായ'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'ml-IN',
			language_name: 'മാപുചി'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'ml-IN',
			language_name: 'ആരോണ'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'ml-IN',
			language_name: 'അറാപഹോ'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'ml-IN',
			language_name: 'അൾജീരിയൻ അറബിക്'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'ml-IN',
			language_name: 'നജ്‌ദി അറബിക്'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'ml-IN',
			language_name: 'അറാവക്'
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
			language_name: 'ആസ്സാമീസ്'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'ml-IN',
			language_name: 'ആസു'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'ml-IN',
			language_name: 'അമേരിക്കൻ ആംഗ്യഭാഷ'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'ml-IN',
			language_name: 'അസ്ട്ടൂരിയൻ'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'ml-IN',
			language_name: 'അറ്റികമെക്‌വ്'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'ml-IN',
			language_name: 'അവാരിക്'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'ml-IN',
			language_name: 'അവാധി'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'ml-IN',
			language_name: 'അയ്മാറ'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'ml-IN',
			language_name: 'അസർബൈജാനി'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'ml-IN',
			language_name: 'അസർബൈജാനി'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'ml-IN',
			language_name: 'അസർബൈജാനി'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'ml-IN',
			language_name: 'അസർബൈജാനി'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'ml-IN',
			language_name: 'ബഷ്ഖിർ'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'ml-IN',
			language_name: 'ബലൂചി'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'ml-IN',
			language_name: 'ബാലിനീസ്'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'ml-IN',
			language_name: 'ബവേറിയൻ'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'ml-IN',
			language_name: 'ബാസ'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'ml-IN',
			language_name: 'ബാമുൻ'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'ml-IN',
			language_name: 'ബടക് തോബ'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'ml-IN',
			language_name: 'ഘോമാല'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'ml-IN',
			language_name: 'ബെലാറുഷ്യൻ'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'ml-IN',
			language_name: 'ബേജ'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'ml-IN',
			language_name: 'ബേംബ'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'ml-IN',
			language_name: 'ബെറ്റാവി'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'ml-IN',
			language_name: 'ബെനാ'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'ml-IN',
			language_name: 'ബാഫട്ട്'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'ml-IN',
			language_name: 'ബഡഗ'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'ml-IN',
			language_name: 'ബൾഗേറിയൻ'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'ml-IN',
			language_name: 'ഹർയാൻവി'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'ml-IN',
			language_name: 'പശ്ചിമ ബലൂചി'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'ml-IN',
			language_name: 'ഭോജ്‌പുരി'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'ml-IN',
			language_name: 'ബിസ്‌ലാമ'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'ml-IN',
			language_name: 'ബികോൽ'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'ml-IN',
			language_name: 'ബിനി'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'ml-IN',
			language_name: 'ബഞ്ചാർ'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'ml-IN',
			language_name: 'കോം'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'ml-IN',
			language_name: 'സിക്സിക'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'ml-IN',
			language_name: 'അനി'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'ml-IN',
			language_name: 'തായ് ഡാം'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'ml-IN',
			language_name: 'ബംബാറ'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'ml-IN',
			language_name: 'ബംഗ്ലാ'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'ml-IN',
			language_name: 'ടിബറ്റൻ'
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
			language_name: 'ബ്രെട്ടൺ'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'ml-IN',
			language_name: 'ബ്രജ്'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'ml-IN',
			language_name: 'ബ്രാഹുയി'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'ml-IN',
			language_name: 'ബോഡോ'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'ml-IN',
			language_name: 'ബോസ്നിയൻ'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'ml-IN',
			language_name: 'അക്കൂസ്'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'ml-IN',
			language_name: 'ബുറിയത്ത്'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'ml-IN',
			language_name: 'ബുഗിനീസ്'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'ml-IN',
			language_name: 'ബുളു'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'ml-IN',
			language_name: 'ബ്ലിൻ'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'ml-IN',
			language_name: 'മെഡുംബ'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'ml-IN',
			language_name: 'കറ്റാലാൻ'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'ml-IN',
			language_name: 'കാഡോ'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'ml-IN',
			language_name: 'കാരിബ്'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'ml-IN',
			language_name: 'കയൂഗ'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'ml-IN',
			language_name: 'അറ്റ്സാം'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'ml-IN',
			language_name: 'ചക്‌മ'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'ml-IN',
			language_name: 'ചെചൻ'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'ml-IN',
			language_name: 'സെബുവാനോ'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'ml-IN',
			language_name: 'ചിഗ'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'ml-IN',
			language_name: 'ചമോറോ'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'ml-IN',
			language_name: 'ചിബ്ച'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'ml-IN',
			language_name: 'ഷാഗതായ്'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'ml-IN',
			language_name: 'ചൂകീസ്'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'ml-IN',
			language_name: 'മാരി'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'ml-IN',
			language_name: 'ചിനൂഗ് ജാർഗൺ'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'ml-IN',
			language_name: 'ചോക്റ്റാവ്'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'ml-IN',
			language_name: 'ചിപേവ്യൻ'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'ml-IN',
			language_name: 'ഷെരോക്കി'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'ml-IN',
			language_name: 'ഷായാൻ'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'ml-IN',
			language_name: 'ചിക്കാസാവ്'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'ml-IN',
			language_name: 'സെൻട്രൽ കുർദിഷ്'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'ml-IN',
			language_name: 'ചിൽകോട്ടിൻ'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'ml-IN',
			language_name: 'കോർസിക്കൻ'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'ml-IN',
			language_name: 'കോപ്റ്റിക്'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'ml-IN',
			language_name: 'കാപ്പിസ്നോൺ'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'ml-IN',
			language_name: 'ക്രീ'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'ml-IN',
			language_name: 'മിചിഫ്'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'ml-IN',
			language_name: 'ക്രിമിയൻ ടർക്കിഷ്'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'ml-IN',
			language_name: 'സതേൺ ഈസ്റ്റ് ക്രീ'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'ml-IN',
			language_name: 'പ്ലെയ്‌ൻസ് ക്രീ'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'ml-IN',
			language_name: 'നോർത്തേൺ ഈസ്റ്റ് ക്രീ'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'ml-IN',
			language_name: 'മൂസ് ക്രീ'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'ml-IN',
			language_name: 'സെഷൽവ ക്രിയോൾ ഫ്രഞ്ച്'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'ml-IN',
			language_name: 'ചെക്ക്'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'ml-IN',
			language_name: 'കാഷുബിയാൻ'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'ml-IN',
			language_name: 'സ്വാംപി ക്രീ'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'ml-IN',
			language_name: 'ചർച്ച് സ്ലാവിക്'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'ml-IN',
			language_name: 'ചർച്ച് സ്ലാവിക്'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'ml-IN',
			language_name: 'ചുവാഷ്'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'ml-IN',
			language_name: 'വെൽഷ്'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'ml-IN',
			language_name: 'ഡാനിഷ്'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'ml-IN',
			language_name: 'ഡകോട്ട'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'ml-IN',
			language_name: 'ഡർഗ്വാ'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'ml-IN',
			language_name: 'തൈത'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'ml-IN',
			language_name: 'ജർമ്മൻ'
		},
		{
			locale_code: 'del-US',
			locale_id: 'ml-IN',
			language_name: 'ദെലവേർ'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'ml-IN',
			language_name: 'സ്ലേവ്'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'ml-IN',
			language_name: 'ഡോഗ്രിബ്'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'ml-IN',
			language_name: 'ദിൻക'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'ml-IN',
			language_name: 'സാർമ്മ'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'ml-IN',
			language_name: 'ഡോഗ്രി'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'ml-IN',
			language_name: 'ലോവർ സോർബിയൻ'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'ml-IN',
			language_name: 'സെൻട്രൽ ഡുസുൻ'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'ml-IN',
			language_name: 'ദ്വാല'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഡച്ച്'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'ml-IN',
			language_name: 'ദിവെഹി'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'ml-IN',
			language_name: 'ജോല-ഫോൻയി'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'ml-IN',
			language_name: 'ദ്വൈല'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'ml-IN',
			language_name: 'ദ്‌സോങ്ക'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'ml-IN',
			language_name: 'ഡാസാഗ'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'ml-IN',
			language_name: 'എംബു'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'ml-IN',
			language_name: 'യൂ'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'ml-IN',
			language_name: 'എഫിക്'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'ml-IN',
			language_name: 'എമിലിയൻ'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'ml-IN',
			language_name: 'പ്രാചീന ഈജിപ്ഷ്യൻ'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'ml-IN',
			language_name: 'എകാജുക്'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'ml-IN',
			language_name: 'ഗ്രീക്ക്'
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
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഇംഗ്ലീഷ്'
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
			language_name: 'എസ്റ്റോണിയൻ'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'ml-IN',
			language_name: 'ബാസ്‌ക്'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'ml-IN',
			language_name: 'എവോൻഡോ'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'ml-IN',
			language_name: 'അതിമധുരൻ'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'ml-IN',
			language_name: 'പേർഷ്യൻ'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'ml-IN',
			language_name: 'ഫങ്'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'ml-IN',
			language_name: 'ഫുല'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'ml-IN',
			language_name: 'ഫുല'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'ml-IN',
			language_name: 'ഫിന്നിഷ്'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'ml-IN',
			language_name: 'ഫിലിപ്പിനോ'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'ml-IN',
			language_name: 'ടോർനെഡലെൻ ഫിന്നിഷ്'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'ml-IN',
			language_name: 'ഫിജിയൻ'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'ml-IN',
			language_name: 'ഫാറോസ്'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'ml-IN',
			language_name: 'ഫോൻ'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'ml-IN',
			language_name: 'കേജൺ ഫ്രഞ്ച്'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഫ്രഞ്ച്'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'ml-IN',
			language_name: 'പഴയ ഫ്രഞ്ച്'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'ml-IN',
			language_name: 'അർപ്പിതൻ'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'ml-IN',
			language_name: 'നോർത്തേൻ ഫ്രിഷ്യൻ'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'ml-IN',
			language_name: 'ഈസ്റ്റേൺ ഫ്രിഷ്യൻ'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രിയുലിയാൻ'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'ml-IN',
			language_name: 'പശ്ചിമ ഫ്രിഷിയൻ'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'ml-IN',
			language_name: 'ഐറിഷ്'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'ml-IN',
			language_name: 'ഗാ'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'ml-IN',
			language_name: 'ഗാഗൂസ്'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'ml-IN',
			language_name: 'ഗാൻ ചൈനീസ്'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'ml-IN',
			language_name: 'ഗയൊ'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'ml-IN',
			language_name: 'ഗബ്യ'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'ml-IN',
			language_name: 'സൊരാസ്ട്രിയൻ ദാരി'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'ml-IN',
			language_name: 'സ്കോട്ടിഷ് ഗൈലിക്'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'ml-IN',
			language_name: 'ഗീസ്'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'ml-IN',
			language_name: 'ഗിൽബർട്ടീസ്'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'ml-IN',
			language_name: 'ഗലീഷ്യൻ'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'ml-IN',
			language_name: 'ഗിലാക്കി'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഉച്ച ജർമൻ'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'ml-IN',
			language_name: 'ഗ്വരനി'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'ml-IN',
			language_name: 'ഓൾഡ് ഹൈ ജർമൻ'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'ml-IN',
			language_name: 'ഗോണ്ഡി'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'ml-IN',
			language_name: 'ഗൊറോന്റാലോ'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'ml-IN',
			language_name: 'ഗോഥിക്ക്'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'ml-IN',
			language_name: 'ഗ്രബൊ'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'ml-IN',
			language_name: 'പുരാതന ഗ്രീക്ക്'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'ml-IN',
			language_name: 'സ്വിസ് ജർമ്മൻ'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'ml-IN',
			language_name: 'ഗുജറാത്തി'
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
			language_name: 'ഗുസീ'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'ml-IN',
			language_name: 'മാൻസ്'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'ml-IN',
			language_name: 'ഗ്വിച്ചിൻ'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'ml-IN',
			language_name: 'ഹൗസ'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'ml-IN',
			language_name: 'ഹൗസ'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'ml-IN',
			language_name: 'ഹൗസ'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'ml-IN',
			language_name: 'ഹൈഡ'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'ml-IN',
			language_name: 'ഹാക്ക ചൈനീസ്'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'ml-IN',
			language_name: 'ഹാക്ക ചൈനീസ്'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'ml-IN',
			language_name: 'ഹവായിയൻ'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'ml-IN',
			language_name: 'സതേൺ ഹൈഡ'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'ml-IN',
			language_name: 'ഹീബ്രു'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'ml-IN',
			language_name: 'ഹിന്ദി'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'ml-IN',
			language_name: 'ഫിജി ഹിന്ദി'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'ml-IN',
			language_name: 'ഹിലിഗയ്നോൺ'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'ml-IN',
			language_name: 'ഹിറ്റൈറ്റ്'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'ml-IN',
			language_name: 'മോങ്'
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
			language_name: 'ഹിരി മോതു'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'ml-IN',
			language_name: 'ക്രൊയേഷ്യൻ'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'ml-IN',
			language_name: 'അപ്പർ സോർബിയൻ'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'ml-IN',
			language_name: 'ഷ്യാങ് ചൈനീസ്'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'ml-IN',
			language_name: 'ഹെയ്‌തിയൻ ക്രിയോൾ'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'ml-IN',
			language_name: 'ഹംഗേറിയൻ'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'ml-IN',
			language_name: 'ഹൂപ'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'ml-IN',
			language_name: 'ഹോക്കൊമെലം'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'ml-IN',
			language_name: 'അർമേനിയൻ'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'ml-IN',
			language_name: 'ഹെരേരൊ'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'ml-IN',
			language_name: 'ഇബാൻ'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'ml-IN',
			language_name: 'ഇബീബിയോ'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'ml-IN',
			language_name: 'ഇന്തോനേഷ്യൻ'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'ml-IN',
			language_name: 'ഇന്റർലിംഗ്വേ'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'ml-IN',
			language_name: 'ഇഗ്ബോ'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'ml-IN',
			language_name: 'ഷുവാൻയി'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'ml-IN',
			language_name: 'ഇനുപിയാക്'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'ml-IN',
			language_name: 'വെസ്റ്റേൺ കനേഡിയൻ ഇനുക്ടിറ്റൂറ്റ്'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'ml-IN',
			language_name: 'ഇലോകോ'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'ml-IN',
			language_name: 'ഇങ്കുഷ്'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'ml-IN',
			language_name: 'ഐസ്‌ലാൻഡിക്'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'ml-IN',
			language_name: 'ഇറ്റാലിയൻ'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'ml-IN',
			language_name: 'ഇനുക്റ്റിറ്റുട്ട്'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'ml-IN',
			language_name: 'ഇൻഗ്രിയൻ'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'ml-IN',
			language_name: 'ജാപ്പനീസ്'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'ml-IN',
			language_name: 'ജമൈക്കൻ ക്രിയോൾ ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'ml-IN',
			language_name: 'ഗോമ്പ'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'ml-IN',
			language_name: 'മചേം'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'ml-IN',
			language_name: 'ജൂഡിയോ-പേർഷ്യൻ'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'ml-IN',
			language_name: 'ജൂഡിയോ-അറബിക്'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'ml-IN',
			language_name: 'ജൂതീഷ്'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'ml-IN',
			language_name: 'ജാവനീസ്'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'ml-IN',
			language_name: 'ജോർജിയൻ'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'ml-IN',
			language_name: 'കര-കാൽപ്പക്'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'ml-IN',
			language_name: 'കബൈൽ'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'ml-IN',
			language_name: 'കാചിൻ'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'ml-IN',
			language_name: 'ജ്യൂ'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'ml-IN',
			language_name: 'കംബ'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'ml-IN',
			language_name: 'കാവി'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'ml-IN',
			language_name: 'കബർഡിയാൻ'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'ml-IN',
			language_name: 'കനെംബു'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'ml-IN',
			language_name: 'ട്യാപ്'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'ml-IN',
			language_name: 'മക്കോണ്ടെ'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'ml-IN',
			language_name: 'കബുവെർദിയാനു'
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
			language_name: 'കോറോ'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'ml-IN',
			language_name: 'കോംഗോ'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'ml-IN',
			language_name: 'കെയിൻഗാംഗ്'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'ml-IN',
			language_name: 'ഖാസി'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'ml-IN',
			language_name: 'ഘോറ്റാനേസേ'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'ml-IN',
			language_name: 'കൊയ്റ ചീനി'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'ml-IN',
			language_name: 'ഖോവർ'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'ml-IN',
			language_name: 'കികൂയു'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'ml-IN',
			language_name: 'കിർമഞ്ച്കി'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'ml-IN',
			language_name: 'ക്വാന്യമ'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ്'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ്'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ്'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ്'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'ml-IN',
			language_name: 'കസാഖ്'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'ml-IN',
			language_name: 'കാകോ'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'ml-IN',
			language_name: 'കലാല്ലിസുട്ട്'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'ml-IN',
			language_name: 'കലെഞ്ചിൻ'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'ml-IN',
			language_name: 'ഖമെർ'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'ml-IN',
			language_name: 'കിംബുണ്ടു'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'ml-IN',
			language_name: 'കന്നഡ'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'ml-IN',
			language_name: 'കൊറിയൻ'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'ml-IN',
			language_name: 'കോമി-പെർമ്യാക്ക്'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'ml-IN',
			language_name: 'കൊങ്കണി'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'ml-IN',
			language_name: 'കൊസറേയൻ'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'ml-IN',
			language_name: 'പെൽ'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'ml-IN',
			language_name: 'കനൂറി'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'ml-IN',
			language_name: 'കരാചൈ-ബാൽകാർ'
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
			language_name: 'കരീലിയൻ'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'ml-IN',
			language_name: 'കുരുഖ്'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'ml-IN',
			language_name: 'കശ്‌മീരി'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'ml-IN',
			language_name: 'ഷംഭാള'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'ml-IN',
			language_name: 'ബാഫിയ'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'ml-IN',
			language_name: 'കൊളോണിയൻ'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ്'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ്'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ്'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ്'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ്'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ്'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ്'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ്'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'ml-IN',
			language_name: 'കൂമിക്ക്'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'ml-IN',
			language_name: 'കുതേനൈ'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'ml-IN',
			language_name: 'കോമി'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'ml-IN',
			language_name: 'കോർണിഷ്'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'ml-IN',
			language_name: 'ക്വാക്വല'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'ml-IN',
			language_name: 'കുവി'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'ml-IN',
			language_name: 'കിർഗിസ്'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'ml-IN',
			language_name: 'കിർഗിസ്'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'ml-IN',
			language_name: 'കിർഗിസ്'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'ml-IN',
			language_name: 'ലാറ്റിൻ'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'ml-IN',
			language_name: 'ലഡീനോ'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'ml-IN',
			language_name: 'ലാംഗി'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'ml-IN',
			language_name: 'ലഹ്‌ൻഡ'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'ml-IN',
			language_name: 'ലംബ'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'ml-IN',
			language_name: 'ലക്‌സംബർഗിഷ്'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'ml-IN',
			language_name: 'ലസ്ഗിയൻ'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'ml-IN',
			language_name: 'ഗാണ്ട'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'ml-IN',
			language_name: 'ലിംബർഗിഷ്'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'ml-IN',
			language_name: 'ലിഗൂറിയൻ'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'ml-IN',
			language_name: 'ലില്ലുവെറ്റ്'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'ml-IN',
			language_name: 'ലിവോണിയൻ'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'ml-IN',
			language_name: 'ലകൗട്ട'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'ml-IN',
			language_name: 'ലൊംബാർഡ്'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'ml-IN',
			language_name: 'ലിംഗാല'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'ml-IN',
			language_name: 'ലാവോ'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'ml-IN',
			language_name: 'മോങ്കോ'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'ml-IN',
			language_name: 'ലൂസിയാന ക്രിയോൾ'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'ml-IN',
			language_name: 'ലൊസി'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'ml-IN',
			language_name: 'വടക്കൻ ലൂറി'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'ml-IN',
			language_name: 'സാമിയ'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'ml-IN',
			language_name: 'ലിത്വാനിയൻ'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'ml-IN',
			language_name: 'ലാറ്റ്ഗാലിയൻ'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'ml-IN',
			language_name: 'ലുബ-കറ്റംഗ'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'ml-IN',
			language_name: 'ലൂബ-ലുലുവ'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'ml-IN',
			language_name: 'ലൂയിസെനോ'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'ml-IN',
			language_name: 'ലുൻഡ'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'ml-IN',
			language_name: 'ലുവോ'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'ml-IN',
			language_name: 'മിസോ'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'ml-IN',
			language_name: 'ലുയിയ'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'ml-IN',
			language_name: 'ലാറ്റ്വിയൻ'
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
			language_name: 'മദുരേസേ'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'ml-IN',
			language_name: 'മാഫ'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'ml-IN',
			language_name: 'മഗാഹി'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'ml-IN',
			language_name: 'മൈഥിലി'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'ml-IN',
			language_name: 'മകാസർ'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'ml-IN',
			language_name: 'മണ്ഡിൻഗോ'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'ml-IN',
			language_name: 'മണ്ഡിൻഗോ'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'ml-IN',
			language_name: 'മസായ്'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'ml-IN',
			language_name: 'മാബ'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'ml-IN',
			language_name: 'മോക്ഷ'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'ml-IN',
			language_name: 'മണ്ഡാർ'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'ml-IN',
			language_name: 'മെൻഡെ'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'ml-IN',
			language_name: 'മേരു'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'ml-IN',
			language_name: 'മൊറിസിൻ'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'ml-IN',
			language_name: 'മലഗാസി'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'ml-IN',
			language_name: 'മദ്ധ്യ ഐറിഷ്'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'ml-IN',
			language_name: 'മാഖുവാ-മീത്തോ'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'ml-IN',
			language_name: 'മേത്താ'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'ml-IN',
			language_name: 'മാർഷല്ലീസ്'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'ml-IN',
			language_name: 'മവോറി'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'ml-IN',
			language_name: 'മിക്മാക്'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'ml-IN',
			language_name: 'മിനാങ്കബൗ'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'ml-IN',
			language_name: 'മാസിഡോണിയൻ'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'ml-IN',
			language_name: 'മലയാളം'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'ml-IN',
			language_name: 'മംഗോളിയൻ'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'ml-IN',
			language_name: 'മംഗോളിയൻ'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'ml-IN',
			language_name: 'മാൻ‌ചു'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'ml-IN',
			language_name: 'മണിപ്പൂരി'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'ml-IN',
			language_name: 'ഇന്നു-ഐമൂൻ'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'ml-IN',
			language_name: 'മോഹാക്'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'ml-IN',
			language_name: 'മൊസ്സി'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'ml-IN',
			language_name: 'മറാത്തി'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'ml-IN',
			language_name: 'പടിഞ്ഞാറൻ മാരി'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'ml-IN',
			language_name: 'മലെയ്'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'ml-IN',
			language_name: 'മലെയ്'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'ml-IN',
			language_name: 'മാൾട്ടീസ്'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'ml-IN',
			language_name: 'മുന്ദാംഗ്'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'ml-IN',
			language_name: 'ക്രീക്ക്'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'ml-IN',
			language_name: 'മിരാൻറസേ'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'ml-IN',
			language_name: 'മർവാരി'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'ml-IN',
			language_name: 'മെൻ്റവായ്'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'ml-IN',
			language_name: 'ബർമീസ്'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'ml-IN',
			language_name: 'മയീൻ'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'ml-IN',
			language_name: 'ഏഴ്സ്യ'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'ml-IN',
			language_name: 'മസന്ററാനി'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'ml-IN',
			language_name: 'നൗറു'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'ml-IN',
			language_name: 'മിൻ നാൻ ചൈനീസ്'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'ml-IN',
			language_name: 'മിൻ നാൻ ചൈനീസ്'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'ml-IN',
			language_name: 'മിൻ നാൻ ചൈനീസ്'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'ml-IN',
			language_name: 'നെപ്പോളിറ്റാൻ'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'ml-IN',
			language_name: 'നാമ'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ ബുക്‌മൽ'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'ml-IN',
			language_name: 'നോർത്ത് ഡെബിൾ'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'ml-IN',
			language_name: 'ലോ ജർമൻ'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'ml-IN',
			language_name: 'നേപ്പാളി'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'ml-IN',
			language_name: 'നേവാരി'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'ml-IN',
			language_name: 'ഡോങ്ക'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'ml-IN',
			language_name: 'നിയാസ്'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'ml-IN',
			language_name: 'ന്യുവാൻ'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'ml-IN',
			language_name: 'ആവോ നാഗ'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'ml-IN',
			language_name: 'ഡച്ച്'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'ml-IN',
			language_name: 'ക്വേസിയോ'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ നൈനോർക്‌സ്'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'ml-IN',
			language_name: 'ഗീംബൂൺ'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'ml-IN',
			language_name: 'നോഗൈ'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'ml-IN',
			language_name: 'പഴയ നോഴ്‌സ്'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'ml-IN',
			language_name: 'ഇൻകോ'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'ml-IN',
			language_name: 'ദക്ഷിണ നെഡിബിൾ'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'ml-IN',
			language_name: 'നോർത്തേൻ സോതോ'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'ml-IN',
			language_name: 'നുവേർ'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'ml-IN',
			language_name: 'നവാജോ'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'ml-IN',
			language_name: 'ക്ലാസിക്കൽ നേവാരി'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'ml-IN',
			language_name: 'ന്യൻജ'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'ml-IN',
			language_name: 'ന്യാംവേസി'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'ml-IN',
			language_name: 'ന്യാൻകോൾ'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'ml-IN',
			language_name: 'ന്യോറോ'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'ml-IN',
			language_name: 'സിമ'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'ml-IN',
			language_name: 'ഓക്‌സിറ്റൻ'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'ml-IN',
			language_name: 'ഓജിബ്വാ'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'ml-IN',
			language_name: 'നോർത്ത്‌വെസ്റ്റേൺ ഒജീബ്‌വെ'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'ml-IN',
			language_name: 'സെൻട്രൽ ഒജീബ്‌വെ'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'ml-IN',
			language_name: 'ഒജി-ക്രീ'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'ml-IN',
			language_name: 'വെസ്റ്റേൺ ഒജീബ്‌വെ'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'ml-IN',
			language_name: 'ഒകാനഗൻ'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'ml-IN',
			language_name: 'ഒറോമോ'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'ml-IN',
			language_name: 'ഒഡിയ'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'ml-IN',
			language_name: 'ഒസ്സെറ്റിക്'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'ml-IN',
			language_name: 'ഒസേജ്'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'ml-IN',
			language_name: 'ഓട്ടോമൻ തുർക്കിഷ്'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'ml-IN',
			language_name: 'പഞ്ചാബി'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'ml-IN',
			language_name: 'പഞ്ചാബി'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'ml-IN',
			language_name: 'പങ്കാസിനൻ'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'ml-IN',
			language_name: 'പാഹ്ലവി'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'ml-IN',
			language_name: 'പാഹ്ലവി'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'ml-IN',
			language_name: 'പാംപൻഗ'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'ml-IN',
			language_name: 'പാപിയാമെന്റൊ'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'ml-IN',
			language_name: 'പലാവുൻ'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'ml-IN',
			language_name: 'പിക്കാർഡ്'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'ml-IN',
			language_name: 'നൈജീരിയൻ പിഡ്‌ഗിൻ'
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
			language_name: 'പഴയ പേർഷ്യൻ'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'ml-IN',
			language_name: 'പാലറ്റൈൻ ജർമ്മൻ'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'ml-IN',
			language_name: 'ഫീനിഷ്യൻ'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'ml-IN',
			language_name: 'പാലി'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'ml-IN',
			language_name: 'പാലി'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'ml-IN',
			language_name: 'പാലി'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'ml-IN',
			language_name: 'പാലി'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'ml-IN',
			language_name: 'പാലി'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'ml-IN',
			language_name: 'പിജിൻ'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'ml-IN',
			language_name: 'പോളിഷ്'
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
			language_name: 'പൊൻപിയൻ'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'ml-IN',
			language_name: 'മലിസീറ്റ്-പസാമക്വുഡി'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'ml-IN',
			language_name: 'പ്രഷ്യൻ'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'ml-IN',
			language_name: 'പഴയ പ്രൊവൻഷ്ൽ'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'ml-IN',
			language_name: 'പഷ്‌തോ'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'ml-IN',
			language_name: 'ബ്രസീലിയൻ പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'ml-IN',
			language_name: 'ക്വെച്ചുവ'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'ml-IN',
			language_name: 'ക്വിച്ചെ'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'ml-IN',
			language_name: 'ചിംബോരാസോ ഹൈലാൻഡ് ക്വിചുവ'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'ml-IN',
			language_name: 'രാജസ്ഥാനി'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'ml-IN',
			language_name: 'രാപനൂയി'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'ml-IN',
			language_name: 'രാരോടോങ്കൻ'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'ml-IN',
			language_name: 'റോമാഗ്നോൾ'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'ml-IN',
			language_name: 'റോഹിംഗാ'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'ml-IN',
			language_name: 'റിഫിയൻ'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'ml-IN',
			language_name: 'റൊമാഞ്ച്'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'ml-IN',
			language_name: 'റുണ്ടി'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'ml-IN',
			language_name: 'റൊമാനിയൻ'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'ml-IN',
			language_name: 'റോംബോ'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'ml-IN',
			language_name: 'റൊമാനി'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'ml-IN',
			language_name: 'റോട്ടുമാൻ'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'ml-IN',
			language_name: 'റഷ്യൻ'
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
			language_name: 'ആരോമാനിയൻ'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'ml-IN',
			language_name: 'കിന്യാർവാണ്ട'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'ml-IN',
			language_name: 'റുവാ'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'ml-IN',
			language_name: 'സംസ്‌കൃതം'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'ml-IN',
			language_name: 'സാൻഡവേ'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'ml-IN',
			language_name: 'സാഖ'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'ml-IN',
			language_name: 'സമരിയാക്കാരുടെ അരമായ'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'ml-IN',
			language_name: 'സംബുരു'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'ml-IN',
			language_name: 'സസാക്'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'ml-IN',
			language_name: 'സന്താലി'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'ml-IN',
			language_name: 'സൗരാഷ്ട്ര'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'ml-IN',
			language_name: 'ഗംബായ്'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'ml-IN',
			language_name: 'സംഗു'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'ml-IN',
			language_name: 'സർഡിനിയാൻ'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'ml-IN',
			language_name: 'സിസിലിയൻ'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'ml-IN',
			language_name: 'സ്കോട്സ്'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'ml-IN',
			language_name: 'സിന്ധി'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'ml-IN',
			language_name: 'സിന്ധി'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'ml-IN',
			language_name: 'സസ്സാരെസ് സാർഡിനിയൻ'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ കുർദ്ദിഷ്'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'ml-IN',
			language_name: 'വടക്കൻ സമി'
		},
		{
			locale_code: 'see-US',
			locale_id: 'ml-IN',
			language_name: 'സെനേക'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'ml-IN',
			language_name: 'സേന'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'ml-IN',
			language_name: 'സെരി'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'ml-IN',
			language_name: 'സെൽകപ്'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'ml-IN',
			language_name: 'കൊയ്റാബൊറോ സെന്നി'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'ml-IN',
			language_name: 'സാംഗോ'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'ml-IN',
			language_name: 'പഴയ ഐറിഷ്'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'ml-IN',
			language_name: 'സമോഗിഷ്യൻ'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'ml-IN',
			language_name: 'താച്ചലിറ്റ്'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'ml-IN',
			language_name: 'ഷാൻ'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'ml-IN',
			language_name: 'ചാഡിയൻ അറബി'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'ml-IN',
			language_name: 'സിംഹള'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'ml-IN',
			language_name: 'സിഡാമോ'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'ml-IN',
			language_name: 'സ്ലോവാക്'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'ml-IN',
			language_name: 'സ്ലോവേനിയൻ'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'ml-IN',
			language_name: 'സതേൺ ലുഷൂറ്റ്‌സീഡ്'
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
			language_name: 'സമോവൻ'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ സമി'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'ml-IN',
			language_name: 'ലൂലീ സമി'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'ml-IN',
			language_name: 'ഇനാരി സമി'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'ml-IN',
			language_name: 'സ്കോൾട്ട് സമി'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'ml-IN',
			language_name: 'ഷോണ'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'ml-IN',
			language_name: 'സോണിൻകെ'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'ml-IN',
			language_name: 'സോമാലി'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'ml-IN',
			language_name: 'സോജിഡിയൻ'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'ml-IN',
			language_name: 'അൽബേനിയൻ'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'ml-IN',
			language_name: 'ശ്രാനൻ ഡോങ്കോ'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'ml-IN',
			language_name: 'സെറർ'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'ml-IN',
			language_name: 'സ്വാറ്റി'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'ml-IN',
			language_name: 'സാഹോ'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ സോതോ'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'ml-IN',
			language_name: 'സാറ്റർലാൻഡ് ഫ്രിസിയൻ'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'ml-IN',
			language_name: 'സ്ട്രെയ്റ്റ്സ് സെയ്‌ലിഷ്'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'ml-IN',
			language_name: 'സുണ്ടാനീസ്'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'ml-IN',
			language_name: 'സുകുമ'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'ml-IN',
			language_name: 'സുസു'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'ml-IN',
			language_name: 'സ്വീഡിഷ്'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'ml-IN',
			language_name: 'സ്വാഹിലി'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'ml-IN',
			language_name: 'കൊമോറിയൻ'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'ml-IN',
			language_name: 'പുരാതന സുറിയാനിഭാഷ'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'ml-IN',
			language_name: 'സുറിയാനി'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'ml-IN',
			language_name: 'സൈലേഷ്യൻ'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'ml-IN',
			language_name: 'തമിഴ്'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'ml-IN',
			language_name: 'സതേൺ ടറ്റ്ഷോൺ'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'ml-IN',
			language_name: 'തുളു'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'ml-IN',
			language_name: 'തെലുങ്ക്'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'ml-IN',
			language_name: 'ടിംനേ'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'ml-IN',
			language_name: 'ടെസോ'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'ml-IN',
			language_name: 'ടെറേനോ'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'ml-IN',
			language_name: 'ടെറ്റും'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'ml-IN',
			language_name: 'താജിക്'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'ml-IN',
			language_name: 'താജിക്'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'ml-IN',
			language_name: 'ടാഗിഷ്'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'ml-IN',
			language_name: 'തായ്'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'ml-IN',
			language_name: 'ടാഹ്‌ൽടൻ'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'ml-IN',
			language_name: 'ടൈഗ്രിന്യ'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'ml-IN',
			language_name: 'ടൈഗ്രി'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'ml-IN',
			language_name: 'ടിവ്'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'ml-IN',
			language_name: 'തുർക്‌മെൻ'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'ml-IN',
			language_name: 'ടൊക്കേലൗ'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'ml-IN',
			language_name: 'ത്സഖൂർ'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'ml-IN',
			language_name: 'ഫിലിപ്പിനോ'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'ml-IN',
			language_name: 'ലിംഗ്വിറ്റ്'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'ml-IN',
			language_name: 'താലിഷ്'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'ml-IN',
			language_name: 'ടമഷേക്'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'ml-IN',
			language_name: 'സ്വാന'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'ml-IN',
			language_name: 'ടോംഗൻ'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'ml-IN',
			language_name: 'ന്യാസാ ഡോങ്ക'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'ml-IN',
			language_name: 'ടോക് പിസിൻ'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'ml-IN',
			language_name: 'ടർക്കിഷ്'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'ml-IN',
			language_name: 'തുറോയോ'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'ml-IN',
			language_name: 'തരോക്കോ'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'ml-IN',
			language_name: 'ടോർവാലി'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'ml-IN',
			language_name: 'സോംഗ'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'ml-IN',
			language_name: 'സാകോണിയൻ'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'ml-IN',
			language_name: 'സിംഷ്യൻ'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'ml-IN',
			language_name: 'ടാട്ടർ'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'ml-IN',
			language_name: 'നോർത്തേൺ ടറ്റ്ഷോൺ'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'ml-IN',
			language_name: 'മുസ്ലീം ടാറ്റ്'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'ml-IN',
			language_name: 'ടുംബുക'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'ml-IN',
			language_name: 'ടുവാലു'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'ml-IN',
			language_name: 'ടസവാക്ക്'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'ml-IN',
			language_name: 'താഹിതിയൻ'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'ml-IN',
			language_name: 'തുവിനിയൻ'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'ml-IN',
			language_name: 'മധ്യ അറ്റ്‌ലസ് ടമാസൈറ്റ്'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'ml-IN',
			language_name: 'ഉഡ്മുർട്ട്'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'ml-IN',
			language_name: 'ഉയ്ഘുർ'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'ml-IN',
			language_name: 'ഉയ്ഘുർ'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'ml-IN',
			language_name: 'ഉയ്ഘുർ'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'ml-IN',
			language_name: 'ഉഗറിട്ടിക്'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'ml-IN',
			language_name: 'ഉക്രേനിയൻ'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'ml-IN',
			language_name: 'ഉംബുന്ദു'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'ml-IN',
			language_name: 'കറ്റാലാൻ'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'ml-IN',
			language_name: 'ഡാരി'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'ml-IN',
			language_name: 'മലെയ്'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'ml-IN',
			language_name: 'ഉറുദു'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'ml-IN',
			language_name: 'മലെയ്'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'ml-IN',
			language_name: 'ഉറുദു'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'ml-IN',
			language_name: 'ഉറുദു'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'ml-IN',
			language_name: 'ഉറുദു'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'ml-IN',
			language_name: 'പേർഷ്യൻ'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'ml-IN',
			language_name: 'സമോവൻ'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'ml-IN',
			language_name: 'ഓസ്‌ട്രിയൻ ജർമ്മൻ'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'ml-IN',
			language_name: 'ഡച്ച്'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'ml-IN',
			language_name: 'സ്വീഡിഷ്'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'ml-IN',
			language_name: 'ഫ്ലമിഷ്'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'ml-IN',
			language_name: 'പാപിയാമെന്റൊ'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'ml-IN',
			language_name: 'റഷ്യൻ'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'ml-IN',
			language_name: 'സ്വിസ് ഹൈ ജർമ്മൻ'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'ml-IN',
			language_name: 'root'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'ml-IN',
			language_name: 'ഗ്രീക്ക്'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'ml-IN',
			language_name: 'കര-കാൽപ്പക്'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'ml-IN',
			language_name: 'മാസിഡോണിയൻ'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'ml-IN',
			language_name: 'സെർബിയൻ'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'ml-IN',
			language_name: 'മാസിഡോണിയൻ'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'ml-IN',
			language_name: 'കര-കാൽപ്പക്'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'ml-IN',
			language_name: 'ഉക്രേനിയൻ'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'ml-IN',
			language_name: 'ബൾഗേറിയൻ'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'ml-IN',
			language_name: 'ഉക്രേനിയൻ'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'ml-IN',
			language_name: 'കബർഡിയാൻ'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'ml-IN',
			language_name: 'ഉസ്‌ബെക്ക്'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'ml-IN',
			language_name: 'നേപ്പാളി'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'ml-IN',
			language_name: 'ഭോജ്‌പുരി'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'ml-IN',
			language_name: 'ടൈഗ്രിന്യ'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'ml-IN',
			language_name: 'വൊളോഫ്'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'ml-IN',
			language_name: 'കാന്റണീസ്'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'ml-IN',
			language_name: 'കാന്റണീസ്'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'ml-IN',
			language_name: 'യിദ്ദിഷ്'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'ml-IN',
			language_name: 'യിദ്ദിഷ്'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'ml-IN',
			language_name: 'യിദ്ദിഷ്'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
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
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'ml-IN',
			language_name: 'സ്വാഹിലി'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'ml-IN',
			language_name: 'കൊറിയൻ'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'ml-IN',
			language_name: 'റഷ്യൻ'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'ml-IN',
			language_name: 'തുർക്‌മെൻ'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'ml-IN',
			language_name: 'സ്വാംഗ്'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'ml-IN',
			language_name: 'ടർക്കിഷ്'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'ml-IN',
			language_name: 'തുർക്‌മെൻ'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'ml-IN',
			language_name: 'അൽബേനിയൻ'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'ml-IN',
			language_name: 'കുർദ്ദിഷ്'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'ml-IN',
			language_name: 'പോളിഷ്'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'ml-IN',
			language_name: 'ഇംഗ്ലീഷ്'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'ml-IN',
			language_name: 'ജർമ്മൻ'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'ml-IN',
			language_name: 'തെക്കൻ സോതോ'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'ml-IN',
			language_name: 'മോൾഡാവിയൻ'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'ml-IN',
			language_name: 'മെക്സിക്കൻ സ്പാനിഷ്'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'ml-IN',
			language_name: 'ആഫ്രിക്കാൻസ്'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'ml-IN',
			language_name: 'ഹൗസ'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'ml-IN',
			language_name: 'യൂറോപ്യൻ പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'ml-IN',
			language_name: 'നോർവീജിയൻ ബുക്‌മൽ'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'ml-IN',
			language_name: 'ഇറ്റാലിയൻ'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'ml-IN',
			language_name: 'ഡച്ച്'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'ml-IN',
			language_name: 'സ്റ്റാൻഡേർഡ് മൊറോക്കൻ റ്റാമസിയറ്റ്'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'ml-IN',
			language_name: 'പോർച്ചുഗീസ്'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'ml-IN',
			language_name: 'സ്വാഹിലി'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'ml-IN',
			language_name: 'ഇറ്റാലിയൻ'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'ml-IN',
			language_name: 'വൈ'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'ml-IN',
			language_name: 'സ്‌പാനിഷ്'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'ml-IN',
			language_name: 'വിയറ്റ്നാമീസ്'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'ml-IN',
			language_name: 'അറബിക്'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'ml-IN',
			language_name: 'ഫ്രഞ്ച്'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'ml-IN',
			language_name: 'ഉസ്‌ബെക്ക്'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'ml-IN',
			language_name: 'ഉസ്‌ബെക്ക്'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'ml-IN',
			language_name: 'വെന്ദ'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'ml-IN',
			language_name: 'വെനീഷ്യൻ'
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
			language_name: 'മഖുവ'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'ml-IN',
			language_name: 'വോട്ടിക്'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'ml-IN',
			language_name: 'വോറോ'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'ml-IN',
			language_name: 'വുൻജോ'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'ml-IN',
			language_name: 'വല്ലൂൺ'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'ml-IN',
			language_name: 'വാൾസർ'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'ml-IN',
			language_name: 'വൊലൈറ്റ'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'ml-IN',
			language_name: 'വാരേയ്'
		},
		{
			locale_code: 'was-US',
			locale_id: 'ml-IN',
			language_name: 'വാഷൊ'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'ml-IN',
			language_name: 'വൂൾപിരി'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'ml-IN',
			language_name: 'വു ചൈനീസ്'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'ml-IN',
			language_name: 'കാൽമിക്'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'ml-IN',
			language_name: 'ഖോസ'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'ml-IN',
			language_name: 'മിംഗ്രേലിയൻ'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'ml-IN',
			language_name: 'കാങ്ടി'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'ml-IN',
			language_name: 'സോഗോ'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'ml-IN',
			language_name: 'യാവോ'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'ml-IN',
			language_name: 'യെപ്പീസ്'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'ml-IN',
			language_name: 'യാംഗ്ബെൻ'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'ml-IN',
			language_name: 'യംബ'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'ml-IN',
			language_name: 'യൊറൂബാ'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'ml-IN',
			language_name: 'നീൻഗാറ്റു'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'ml-IN',
			language_name: 'കാന്റണീസ്'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'ml-IN',
			language_name: 'സാപ്പോടെക്'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'ml-IN',
			language_name: 'സീലാൻഡിക്'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'ml-IN',
			language_name: 'സെനഗ'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'ml-IN',
			language_name: 'ചൈനീസ്'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'ml-IN',
			language_name: 'സുലു'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'ml-IN',
			language_name: 'സുനി'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'ml-IN',
			language_name: 'സാസാ'
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
