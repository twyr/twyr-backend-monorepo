/* eslint-disable security/detect-object-injection */
/**
 * Static seed for locale_by_locale with gu-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * locale names (language + country) for the gu-IN locale.
 *
 * This seed depends on:
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 004-locales-by-locale-seed-gu-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM locale_by_locale WHERE locale_id = 'gu-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for gu-IN locale
	const rows = [
		{
			locale_code: 'aa-ET',
			locale_id: 'gu-IN',
			language_name: 'અફાર'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'gu-IN',
			language_name: 'અબખાજિયન'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'gu-IN',
			language_name: 'અચીની'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'gu-IN',
			language_name: 'એકોલી'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'gu-IN',
			language_name: 'અદાંગ્મી'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'gu-IN',
			language_name: 'અદિઘે'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'gu-IN',
			language_name: 'અવેસ્તન'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'gu-IN',
			language_name: 'Tunisian Arabic'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'gu-IN',
			language_name: 'આફ્રિકન્સ'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'gu-IN',
			language_name: 'અફ્રિહિલી'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'gu-IN',
			language_name: 'અઘેમ'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'gu-IN',
			language_name: 'ઐનુ'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'gu-IN',
			language_name: 'અકાન'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'gu-IN',
			language_name: 'અક્કાદીયાન'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'gu-IN',
			language_name: 'Alabama'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'gu-IN',
			language_name: 'અલેઉત'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'gu-IN',
			language_name: 'દક્ષિણ અલ્તાઇ'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'gu-IN',
			language_name: 'એમ્હારિક'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'gu-IN',
			language_name: 'અર્ગોનીઝ'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'gu-IN',
			language_name: 'જુની અંગ્રેજી'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'gu-IN',
			language_name: 'ઓબોલો'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'gu-IN',
			language_name: 'અંગીકા'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'gu-IN',
			language_name: 'એરમૈક'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'gu-IN',
			language_name: 'એરમૈક'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'gu-IN',
			language_name: 'એરમૈક'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'gu-IN',
			language_name: 'એરમૈક'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'gu-IN',
			language_name: 'મેપુચે'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'gu-IN',
			language_name: 'Araona'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'gu-IN',
			language_name: 'અરાપાહો'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'gu-IN',
			language_name: 'આલ્જેરિયન અરબી'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'gu-IN',
			language_name: 'નજદી અરેબિક'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'gu-IN',
			language_name: 'અરાવક'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'gu-IN',
			language_name: 'મોરોક્કન અરબી'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'gu-IN',
			language_name: 'ઈજિપ્શિયન અરબી'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'gu-IN',
			language_name: 'આસામી'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'gu-IN',
			language_name: 'અસુ'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'gu-IN',
			language_name: 'American Sign Language'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'gu-IN',
			language_name: 'અસ્તુરિયન'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'gu-IN',
			language_name: 'એટીકામેકવ'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'gu-IN',
			language_name: 'અવેરિક'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'gu-IN',
			language_name: 'અવધી'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'gu-IN',
			language_name: 'આયમારા'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'gu-IN',
			language_name: 'અઝરબૈજાની'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'gu-IN',
			language_name: 'અઝરબૈજાની'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'gu-IN',
			language_name: 'અઝરબૈજાની'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'gu-IN',
			language_name: 'અઝરબૈજાની'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'gu-IN',
			language_name: 'બશ્કીર'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'gu-IN',
			language_name: 'બલૂચી'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'gu-IN',
			language_name: 'બાલિનીસ'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'gu-IN',
			language_name: 'Bavarian'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'gu-IN',
			language_name: 'બસા'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'gu-IN',
			language_name: 'બામન'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'gu-IN',
			language_name: 'Batak Toba'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'gu-IN',
			language_name: 'Ghomala'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'gu-IN',
			language_name: 'બેલારુશિયન'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'gu-IN',
			language_name: 'બેજા'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'gu-IN',
			language_name: 'બેમ્બા'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'gu-IN',
			language_name: 'Betawi'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'gu-IN',
			language_name: 'બેના'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'gu-IN',
			language_name: 'Bafut'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'gu-IN',
			language_name: 'Badaga'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'gu-IN',
			language_name: 'બલ્ગેરિયન'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'gu-IN',
			language_name: 'હરિયાણવી'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'gu-IN',
			language_name: 'પશ્ચિમી બાલોચી'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'gu-IN',
			language_name: 'ભોજપુરી'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'gu-IN',
			language_name: 'બિસ્લામા'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'gu-IN',
			language_name: 'બિકોલ'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'gu-IN',
			language_name: 'બિની'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'gu-IN',
			language_name: 'Banjar'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'gu-IN',
			language_name: 'Kom'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'gu-IN',
			language_name: 'સિક્સિકા'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'gu-IN',
			language_name: 'અની'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'gu-IN',
			language_name: 'Tai Dam'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'gu-IN',
			language_name: 'બામ્બારા'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'gu-IN',
			language_name: 'બાંગ્લા'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'gu-IN',
			language_name: 'તિબેટીયન'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'gu-IN',
			language_name: 'બિષ્નુપ્રિયા'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'gu-IN',
			language_name: 'Bakhtiari'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'gu-IN',
			language_name: 'બ્રેટોન'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'gu-IN',
			language_name: 'વ્રજ'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'gu-IN',
			language_name: 'બ્રાહુઈ'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'gu-IN',
			language_name: 'બોડો'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'gu-IN',
			language_name: 'બોસ્નિયન'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'gu-IN',
			language_name: 'Akoose'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'gu-IN',
			language_name: 'બુરિયાત'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'gu-IN',
			language_name: 'બુગિનીસ'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'gu-IN',
			language_name: 'Bulu'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'gu-IN',
			language_name: 'બ્લિન'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'gu-IN',
			language_name: 'Medumba'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'gu-IN',
			language_name: 'કતલાન'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'gu-IN',
			language_name: 'કડ્ડો'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'gu-IN',
			language_name: 'કરિબ'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'gu-IN',
			language_name: 'કેયુગા'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'gu-IN',
			language_name: 'અત્સમ'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'gu-IN',
			language_name: 'ચકમા'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'gu-IN',
			language_name: 'ચેચન'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'gu-IN',
			language_name: 'સિબુઆનો'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'gu-IN',
			language_name: 'ચિગા'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'gu-IN',
			language_name: 'કેમોરો'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'gu-IN',
			language_name: 'ચિબ્ચા'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'gu-IN',
			language_name: 'છગાતાઇ'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'gu-IN',
			language_name: 'ચૂકીસ'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'gu-IN',
			language_name: 'મારી'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'gu-IN',
			language_name: 'ચિનૂક જાર્ગન'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'gu-IN',
			language_name: 'ચોક્તૌ'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'gu-IN',
			language_name: 'શિપેવ્યાન'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'gu-IN',
			language_name: 'શેરોકી'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'gu-IN',
			language_name: 'શેયેન્ન'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'gu-IN',
			language_name: 'Chickasaw'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'gu-IN',
			language_name: 'સેન્ટ્રલ કુર્દિશ'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'gu-IN',
			language_name: 'ચિલકોટિન'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'gu-IN',
			language_name: 'કોર્સિકન'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'gu-IN',
			language_name: 'કોપ્ટિક'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'gu-IN',
			language_name: 'Capiznon'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'gu-IN',
			language_name: 'ક્રી'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'gu-IN',
			language_name: 'મિચિફ'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'gu-IN',
			language_name: 'ક્રિમિયન તુર્કી'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'gu-IN',
			language_name: 'દક્ષિણ પૂર્વ ક્રી'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'gu-IN',
			language_name: 'પ્લેઇન્સ ક્રી'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'gu-IN',
			language_name: 'ઉત્તરી પૂર્વ ક્રી'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'gu-IN',
			language_name: 'મૂઝ ક્રી'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'gu-IN',
			language_name: 'સેસેલ્વા ક્રેઓલે ફ્રેન્ચ'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'gu-IN',
			language_name: 'ચેક'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'gu-IN',
			language_name: 'કાશુબિયન'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'gu-IN',
			language_name: 'સ્વેમ્પી ક્રી'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'gu-IN',
			language_name: 'ચર્ચ સ્લાવિક'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'gu-IN',
			language_name: 'ચર્ચ સ્લાવિક'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'gu-IN',
			language_name: 'ચૂવાશ'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'gu-IN',
			language_name: 'વેલ્શ'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'gu-IN',
			language_name: 'ડેનિશ'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'gu-IN',
			language_name: 'દાકોતા'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'gu-IN',
			language_name: 'દાર્ગવા'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'gu-IN',
			language_name: 'તૈતા'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'gu-IN',
			language_name: 'જર્મન'
		},
		{
			locale_code: 'del-US',
			locale_id: 'gu-IN',
			language_name: 'દેલવેર'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'gu-IN',
			language_name: 'સ્લેવ'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'gu-IN',
			language_name: 'ડોગ્રિબ'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'gu-IN',
			language_name: 'દિન્કા'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'gu-IN',
			language_name: 'ઝર્મા'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'gu-IN',
			language_name: 'ડોગ્રી'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'gu-IN',
			language_name: 'લોઅર સોર્બિયન'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'gu-IN',
			language_name: 'Central Dusun'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'gu-IN',
			language_name: 'દુઆલા'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'gu-IN',
			language_name: 'મધ્ય ડચ'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'gu-IN',
			language_name: 'દિવેહી'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'gu-IN',
			language_name: 'જોલા-ફોન્યી'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'gu-IN',
			language_name: 'ડ્યુલા'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'gu-IN',
			language_name: 'ડ્ઝોંગ્ખા'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'gu-IN',
			language_name: 'દાઝાગા'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'gu-IN',
			language_name: 'ઍમ્બુ'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'gu-IN',
			language_name: 'ઈવ'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'gu-IN',
			language_name: 'એફિક'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'gu-IN',
			language_name: 'Emilian'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'gu-IN',
			language_name: 'પ્રાચીન ઇજીપ્શિયન'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'gu-IN',
			language_name: 'એકાજુક'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'gu-IN',
			language_name: 'ગ્રીક'
		},
		{
			locale_code: 'en-US',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-GB',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'gu-IN',
			language_name: 'મિડિલ અંગ્રેજી'
		},
		{
			locale_code: 'es-ES',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'esu-US',
			locale_id: 'gu-IN',
			language_name: 'Central Yupik'
		},
		{
			locale_code: 'et-EE',
			locale_id: 'gu-IN',
			language_name: 'એસ્ટોનિયન'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'gu-IN',
			language_name: 'બાસ્ક'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'gu-IN',
			language_name: 'ઇવોન્ડો'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'gu-IN',
			language_name: 'Extremaduran'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'gu-IN',
			language_name: 'ફારસી'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'gu-IN',
			language_name: 'ફેંગ'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'gu-IN',
			language_name: 'ફુલા'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'gu-IN',
			language_name: 'ફુલા'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'gu-IN',
			language_name: 'ફિનિશ'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'gu-IN',
			language_name: 'ફિલિપિનો'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'gu-IN',
			language_name: 'Tornedalen Finnish'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'gu-IN',
			language_name: 'ફીજીયન'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'gu-IN',
			language_name: 'ફોરિસ્ત'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'gu-IN',
			language_name: 'ફોન'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'gu-IN',
			language_name: 'કાજૂન ફ્રેન્ચ'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'gu-IN',
			language_name: 'મિડિલ ફ્રેંચ'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'gu-IN',
			language_name: 'જૂની ફ્રેંચ'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'gu-IN',
			language_name: 'Arpitan'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'gu-IN',
			language_name: 'ઉત્તરી ફ્રિશિયન'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'gu-IN',
			language_name: 'પૂર્વ ફ્રિશિયન'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'gu-IN',
			language_name: 'ફ્રિયુલિયાન'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'gu-IN',
			language_name: 'પશ્ચિમિ ફ્રિશિયન'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'gu-IN',
			language_name: 'આઇરિશ'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'gu-IN',
			language_name: 'ગા'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'gu-IN',
			language_name: 'ગાગાઝ'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'gu-IN',
			language_name: 'Gan Chinese'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'gu-IN',
			language_name: 'ગાયો'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'gu-IN',
			language_name: 'બાયા'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'gu-IN',
			language_name: 'ઝોરોસ્ટ્રિઅન દારી'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'gu-IN',
			language_name: 'સ્કોટીસ ગેલિક'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'gu-IN',
			language_name: 'ગીઝ'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'gu-IN',
			language_name: 'જિલ્બરટીઝ'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'gu-IN',
			language_name: 'ગેલિશિયન'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'gu-IN',
			language_name: 'Gilaki'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'gu-IN',
			language_name: 'મધ્ય હાઇ જર્મન'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'gu-IN',
			language_name: 'ગુઆરાની'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'gu-IN',
			language_name: 'જૂની હાઇ જર્મન'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'gu-IN',
			language_name: 'ગોંડી'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'gu-IN',
			language_name: 'ગોરોન્તાલો'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'gu-IN',
			language_name: 'ગોથિક'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'gu-IN',
			language_name: 'ગ્રેબો'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'gu-IN',
			language_name: 'પ્રાચીન ગ્રીક'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'gu-IN',
			language_name: 'સ્વિસ જર્મન'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'gu-IN',
			language_name: 'ગુજરાતી'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'gu-IN',
			language_name: 'Wayuu'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'gu-IN',
			language_name: 'Frafra'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'gu-IN',
			language_name: 'ગુસી'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'gu-IN',
			language_name: 'માંક્સ'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'gu-IN',
			language_name: 'ગ્વિચ’ઇન'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'gu-IN',
			language_name: 'હૌસા'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'gu-IN',
			language_name: 'હૌસા'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'gu-IN',
			language_name: 'હૌસા'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'gu-IN',
			language_name: 'હૈડા'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'gu-IN',
			language_name: 'Hakka Chinese'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'gu-IN',
			language_name: 'Hakka Chinese'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'gu-IN',
			language_name: 'હવાઇયન'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'gu-IN',
			language_name: 'દક્ષિણ હૈડા'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'gu-IN',
			language_name: 'હીબ્રુ'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'gu-IN',
			language_name: 'હિન્દી'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'gu-IN',
			language_name: 'ફીજી હિંદી'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'gu-IN',
			language_name: 'હિલિગેનોન'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'gu-IN',
			language_name: 'હિટ્ટિતે'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'gu-IN',
			language_name: 'હમોંગ'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'gu-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'gu-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'gu-IN',
			language_name: 'હિરી મોટૂ'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'gu-IN',
			language_name: 'ક્રોએશિયન'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'gu-IN',
			language_name: 'અપર સોર્બિયન'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'gu-IN',
			language_name: 'Xiang Chinese'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'gu-IN',
			language_name: 'હૈતિઅન ક્રેઓલે'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'gu-IN',
			language_name: 'હંગેરિયન'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'gu-IN',
			language_name: 'હૂપા'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'gu-IN',
			language_name: 'હેલ્કોમેલેમ'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'gu-IN',
			language_name: 'આર્મેનિયન'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'gu-IN',
			language_name: 'હેરેરો'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'gu-IN',
			language_name: 'ઇબાન'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'gu-IN',
			language_name: 'ઇબિબિઓ'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'gu-IN',
			language_name: 'ઇન્ડોનેશિયન'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'gu-IN',
			language_name: 'ઇંટરલિંગ'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'gu-IN',
			language_name: 'ઇગ્બો'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'gu-IN',
			language_name: 'સિચુઆન યી'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'gu-IN',
			language_name: 'ઇનુપિયાક'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'gu-IN',
			language_name: 'પશ્ચિમ કેનેડિયન ઇનુકિટ્યુટ'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'gu-IN',
			language_name: 'ઇલોકો'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'gu-IN',
			language_name: 'ઇંગુશ'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'gu-IN',
			language_name: 'આઇસલેન્ડિક'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'gu-IN',
			language_name: 'ઇટાલિયન'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'gu-IN',
			language_name: 'ઇનુકિટૂટ'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'gu-IN',
			language_name: 'Ingrian'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'gu-IN',
			language_name: 'જાપાનીઝ'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'gu-IN',
			language_name: 'Jamaican Creole English'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'gu-IN',
			language_name: 'નગોમ્બા'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'gu-IN',
			language_name: 'મકામે'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'gu-IN',
			language_name: 'જુદેઓ-પર્શિયન'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'gu-IN',
			language_name: 'જુદેઓ-અરબી'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'gu-IN',
			language_name: 'Jutish'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'gu-IN',
			language_name: 'જાવાનીસ'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'gu-IN',
			language_name: 'જ્યોર્જિયન'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'gu-IN',
			language_name: 'કારા-કલ્પક'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'gu-IN',
			language_name: 'કબાઇલ'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'gu-IN',
			language_name: 'કાચિન'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'gu-IN',
			language_name: 'જ્જુ'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'gu-IN',
			language_name: 'કમ્બા'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'gu-IN',
			language_name: 'કાવી'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'gu-IN',
			language_name: 'કબાર્ડિયન'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'gu-IN',
			language_name: 'Kanembu'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'gu-IN',
			language_name: 'ત્યાપ'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'gu-IN',
			language_name: 'મકોન્ડે'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'gu-IN',
			language_name: 'કાબુવર્ડિઆનુ'
		},
		{
			locale_code: 'kek-GT',
			locale_id: 'gu-IN',
			language_name: 'Qʼeqchiʼ'
		},
		{
			locale_code: 'ken-CM',
			locale_id: 'gu-IN',
			language_name: 'Kenyang'
		},
		{
			locale_code: 'kfo-CI',
			locale_id: 'gu-IN',
			language_name: 'કોરો'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'gu-IN',
			language_name: 'કોંગો'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'gu-IN',
			language_name: 'કૈંગાંગ'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'gu-IN',
			language_name: 'ખાસી'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'gu-IN',
			language_name: 'ખોતાનીસ'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'gu-IN',
			language_name: 'કોયરા ચિનિ'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'gu-IN',
			language_name: 'Khowar'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'gu-IN',
			language_name: 'કિકુયૂ'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'gu-IN',
			language_name: 'Kirmanjki'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'gu-IN',
			language_name: 'ક્વાન્યામા'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'gu-IN',
			language_name: 'કઝાખ'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'gu-IN',
			language_name: 'કઝાખ'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'gu-IN',
			language_name: 'કઝાખ'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'gu-IN',
			language_name: 'કઝાખ'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'gu-IN',
			language_name: 'કઝાખ'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'gu-IN',
			language_name: 'કાકો'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'gu-IN',
			language_name: 'કલાલ્લિસુત'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'gu-IN',
			language_name: 'કલેજિન'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'gu-IN',
			language_name: 'ખ્મેર'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'gu-IN',
			language_name: 'કિમ્બન્દુ'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'gu-IN',
			language_name: 'કન્નડ'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'gu-IN',
			language_name: 'કોરિયન'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'gu-IN',
			language_name: 'કોમી-પર્મ્યાક'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'gu-IN',
			language_name: 'કોંકણી'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'gu-IN',
			language_name: 'કોસરિયન'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'gu-IN',
			language_name: 'ક્પેલ્લે'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'gu-IN',
			language_name: 'કનુરી'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'gu-IN',
			language_name: 'કરાચય-બલ્કાર'
		},
		{
			locale_code: 'kri-SL',
			locale_id: 'gu-IN',
			language_name: 'Krio'
		},
		{
			locale_code: 'krj-PH',
			locale_id: 'gu-IN',
			language_name: 'Kinaray-a'
		},
		{
			locale_code: 'krl-RU',
			locale_id: 'gu-IN',
			language_name: 'કરેલિયન'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'gu-IN',
			language_name: 'કુરૂખ'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'gu-IN',
			language_name: 'કાશ્મીરી'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'gu-IN',
			language_name: 'શમ્બાલા'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'gu-IN',
			language_name: 'બફિયા'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'gu-IN',
			language_name: 'કોલોગ્નિયન'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'gu-IN',
			language_name: 'કુર્દિશ'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'gu-IN',
			language_name: 'કુર્દિશ'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'gu-IN',
			language_name: 'કુર્દિશ'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'gu-IN',
			language_name: 'કુર્દિશ'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'gu-IN',
			language_name: 'કુર્દિશ'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'gu-IN',
			language_name: 'કુર્દિશ'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'gu-IN',
			language_name: 'કુર્દિશ'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'gu-IN',
			language_name: 'કુર્દિશ'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'gu-IN',
			language_name: 'કુમીક'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'gu-IN',
			language_name: 'કુતેનાઇ'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'gu-IN',
			language_name: 'કોમી'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'gu-IN',
			language_name: 'કોર્નિશ'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'gu-IN',
			language_name: 'ક્વેકવાલા'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'gu-IN',
			language_name: 'કૂવી'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'gu-IN',
			language_name: 'કિર્ગીઝ'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'gu-IN',
			language_name: 'કિર્ગીઝ'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'gu-IN',
			language_name: 'કિર્ગીઝ'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'gu-IN',
			language_name: 'લેટિન'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'gu-IN',
			language_name: 'લાદીનો'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'gu-IN',
			language_name: 'લંગી'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'gu-IN',
			language_name: 'લાહન્ડા'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'gu-IN',
			language_name: 'લામ્બા'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'gu-IN',
			language_name: 'લક્ઝેમબર્ગિશ'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'gu-IN',
			language_name: 'લેઝધીયન'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'gu-IN',
			language_name: 'ગાંડા'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'gu-IN',
			language_name: 'લિંબૂર્ગિશ'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'gu-IN',
			language_name: 'લિગુરીઅન'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'gu-IN',
			language_name: 'લિલુએટ'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'gu-IN',
			language_name: 'Livonian'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'gu-IN',
			language_name: 'લાકોટા'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'gu-IN',
			language_name: 'લોંબાર્ડ'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'gu-IN',
			language_name: 'લિંગાલા'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'gu-IN',
			language_name: 'લાઓ'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'gu-IN',
			language_name: 'મોંગો'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'gu-IN',
			language_name: 'લ્યુઇસિયાના ક્રેઓલ'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'gu-IN',
			language_name: 'લોઝી'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'gu-IN',
			language_name: 'ઉત્તરી લુરી'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'gu-IN',
			language_name: 'સામિયા'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'gu-IN',
			language_name: 'લિથુઆનિયન'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'gu-IN',
			language_name: 'Latgalian'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'gu-IN',
			language_name: 'લૂબા-કટાંગા'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'gu-IN',
			language_name: 'લૂબા-લુલુઆ'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'gu-IN',
			language_name: 'લુઇસેનો'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'gu-IN',
			language_name: 'લુન્ડા'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'gu-IN',
			language_name: 'લ્યુઓ'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'gu-IN',
			language_name: 'મિઝો'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'gu-IN',
			language_name: 'લુઈયા'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'gu-IN',
			language_name: 'લાતવિયન'
		},
		{
			locale_code: 'lzh-CN',
			locale_id: 'gu-IN',
			language_name: 'Literary Chinese'
		},
		{
			locale_code: 'lzz-TR',
			locale_id: 'gu-IN',
			language_name: 'Laz'
		},
		{
			locale_code: 'lzz-GE',
			locale_id: 'gu-IN',
			language_name: 'Laz'
		},
		{
			locale_code: 'mad-ID',
			locale_id: 'gu-IN',
			language_name: 'માદુરીસ'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'gu-IN',
			language_name: 'Mafa'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'gu-IN',
			language_name: 'મગહી'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'gu-IN',
			language_name: 'મૈથિલી'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'gu-IN',
			language_name: 'મકાસર'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'gu-IN',
			language_name: 'મન્ડિન્ગો'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'gu-IN',
			language_name: 'મન્ડિન્ગો'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'gu-IN',
			language_name: 'મસાઇ'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'gu-IN',
			language_name: 'Maba'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'gu-IN',
			language_name: 'મોક્ષ'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'gu-IN',
			language_name: 'મંદાર'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'gu-IN',
			language_name: 'મેન્ડે'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'gu-IN',
			language_name: 'મેરુ'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'gu-IN',
			language_name: 'મોરીસ્યેન'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'gu-IN',
			language_name: 'મલાગસી'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'gu-IN',
			language_name: 'મધ્ય આઈરિશ'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'gu-IN',
			language_name: 'માખુવા-મીટ્ટુ'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'gu-IN',
			language_name: 'મેતા'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'gu-IN',
			language_name: 'માર્શલીઝ'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'gu-IN',
			language_name: 'માઓરી'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'gu-IN',
			language_name: 'મિકમેક'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'gu-IN',
			language_name: 'મિનાંગ્કાબાઉ'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'gu-IN',
			language_name: 'મેસેડોનિયન'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'gu-IN',
			language_name: 'મલયાલમ'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'gu-IN',
			language_name: 'મોંગોલિયન'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'gu-IN',
			language_name: 'મોંગોલિયન'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'gu-IN',
			language_name: 'માન્ચુ'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'gu-IN',
			language_name: 'મણિપુરી'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'gu-IN',
			language_name: 'ઇન્નુ-આયમુન'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'gu-IN',
			language_name: 'મોહૌક'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'gu-IN',
			language_name: 'મોસ્સી'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'gu-IN',
			language_name: 'મરાઠી'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'gu-IN',
			language_name: 'પશ્ચિમી મારી'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'gu-IN',
			language_name: 'મલય'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'gu-IN',
			language_name: 'મલય'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'gu-IN',
			language_name: 'માલ્ટિઝ'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'gu-IN',
			language_name: 'મુનડાન્ગ'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'gu-IN',
			language_name: 'ક્રિક'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'gu-IN',
			language_name: 'મિરાંડી'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'gu-IN',
			language_name: 'મારવાડી'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'gu-IN',
			language_name: 'Mentawai'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'gu-IN',
			language_name: 'બર્મીઝ'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'gu-IN',
			language_name: 'Myene'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'gu-IN',
			language_name: 'એર્ઝયા'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'gu-IN',
			language_name: 'મઝાન્દેરાની'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'gu-IN',
			language_name: 'નાઉરૂ'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'gu-IN',
			language_name: 'Min Nan Chinese'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'gu-IN',
			language_name: 'Min Nan Chinese'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'gu-IN',
			language_name: 'Min Nan Chinese'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'gu-IN',
			language_name: 'નેપોલિટાન'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'gu-IN',
			language_name: 'નમા'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'gu-IN',
			language_name: 'નોર્વેજિયન બોકમાલ'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'gu-IN',
			language_name: 'ઉત્તર દેબેલ'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'gu-IN',
			language_name: 'લો જર્મન'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'gu-IN',
			language_name: 'નેપાળી'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'gu-IN',
			language_name: 'નેવારી'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'gu-IN',
			language_name: 'ડોન્ગા'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'gu-IN',
			language_name: 'નિયાસ'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'gu-IN',
			language_name: 'નિયુઆન'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'gu-IN',
			language_name: 'Ao Naga'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'gu-IN',
			language_name: 'ડચ'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'gu-IN',
			language_name: 'ક્વાસિઓ'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'gu-IN',
			language_name: 'નોર્વેજિયન નાયનૉર્સ્ક'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'gu-IN',
			language_name: 'નીએમબુન'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'gu-IN',
			language_name: 'નૉર્વેજીયન'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'gu-IN',
			language_name: 'નોગાઇ'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'gu-IN',
			language_name: 'જૂની નોર્સ'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'gu-IN',
			language_name: 'એન’કો'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'gu-IN',
			language_name: 'દક્ષિણ દેબેલ'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'gu-IN',
			language_name: 'ઉત્તરી સોથો'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'gu-IN',
			language_name: 'નુએર'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'gu-IN',
			language_name: 'નાવાજો'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'gu-IN',
			language_name: 'પરંપરાગત નેવારી'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'gu-IN',
			language_name: 'ન્યાન્જા'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'gu-IN',
			language_name: 'ન્યામવેઝી'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'gu-IN',
			language_name: 'ન્યાનકોલ'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'gu-IN',
			language_name: 'ન્યોરો'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'gu-IN',
			language_name: 'ન્ઝિમા'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'gu-IN',
			language_name: 'ઓક્સિટન'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'gu-IN',
			language_name: 'ઓજિબ્વા'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'gu-IN',
			language_name: 'ઉત્તરપશ્ચિમી ઓઝિબવે'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'gu-IN',
			language_name: 'સેન્ટ્રલ ઓઝિબ્વા'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'gu-IN',
			language_name: 'ઓજી-ક્રી'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'gu-IN',
			language_name: 'પશ્ચિમી ઓઝિબ્વા'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'gu-IN',
			language_name: 'ઓકાનાગન'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'gu-IN',
			language_name: 'ઓરોમો'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'gu-IN',
			language_name: 'ઉડિયા'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'gu-IN',
			language_name: 'ઓસ્સેટિક'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'gu-IN',
			language_name: 'ઓસેજ'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'gu-IN',
			language_name: 'ઓટોમાન તુર્કિશ'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'gu-IN',
			language_name: 'પંજાબી'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'gu-IN',
			language_name: 'પંજાબી'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'gu-IN',
			language_name: 'પંગાસીનાન'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'gu-IN',
			language_name: 'પહલવી'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'gu-IN',
			language_name: 'પહલવી'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'gu-IN',
			language_name: 'પમ્પાન્ગા'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'gu-IN',
			language_name: 'પાપિયામેન્ટો'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'gu-IN',
			language_name: 'પલાઉઆન'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'gu-IN',
			language_name: 'Picard'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'gu-IN',
			language_name: 'નાઇજેરિયન પીજીન'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'gu-IN',
			language_name: 'Pennsylvania German'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'gu-IN',
			language_name: 'Plautdietsch'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'gu-IN',
			language_name: 'જૂની ફારસી'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'gu-IN',
			language_name: 'Palatine German'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'gu-IN',
			language_name: 'ફોનિશિયન'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'gu-IN',
			language_name: 'પાલી'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'gu-IN',
			language_name: 'પાલી'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'gu-IN',
			language_name: 'પાલી'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'gu-IN',
			language_name: 'પાલી'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'gu-IN',
			language_name: 'પાલી'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'gu-IN',
			language_name: 'પિજિન'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'gu-IN',
			language_name: 'પોલીશ'
		},
		{
			locale_code: 'pms-IT',
			locale_id: 'gu-IN',
			language_name: 'Piedmontese'
		},
		{
			locale_code: 'pnt-GR',
			locale_id: 'gu-IN',
			language_name: 'Pontic'
		},
		{
			locale_code: 'pnt-RU',
			locale_id: 'gu-IN',
			language_name: 'Pontic'
		},
		{
			locale_code: 'pnt-TR',
			locale_id: 'gu-IN',
			language_name: 'Pontic'
		},
		{
			locale_code: 'pon-FM',
			locale_id: 'gu-IN',
			language_name: 'પોહપિએન'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'gu-IN',
			language_name: 'મલિસીટ-પાસમાક્વોડ્ડી'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'gu-IN',
			language_name: 'પ્રુસ્સીયન'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'gu-IN',
			language_name: 'જુની પ્રોવેન્સલ'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'gu-IN',
			language_name: 'પશ્તો'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'gu-IN',
			language_name: 'પોર્ટુગીઝ'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'gu-IN',
			language_name: 'ક્વેચુઆ'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'gu-IN',
			language_name: 'કિચે'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'gu-IN',
			language_name: 'Chimborazo Highland Quichua'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'gu-IN',
			language_name: 'રાજસ્થાની'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'gu-IN',
			language_name: 'રાપાનુઇ'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'gu-IN',
			language_name: 'રારોટોંગન'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'gu-IN',
			language_name: 'Romagnol'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'gu-IN',
			language_name: 'રોહિંગ્યા'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'gu-IN',
			language_name: 'Riffian'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'gu-IN',
			language_name: 'રોમાન્શ'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'gu-IN',
			language_name: 'રૂન્દી'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'gu-IN',
			language_name: 'રોમાનિયન'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'gu-IN',
			language_name: 'રોમ્બો'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'gu-IN',
			language_name: 'રોમાની'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'gu-IN',
			language_name: 'Rotuman'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'gu-IN',
			language_name: 'રશિયન'
		},
		{
			locale_code: 'rue-UA',
			locale_id: 'gu-IN',
			language_name: 'Rusyn'
		},
		{
			locale_code: 'rug-SB',
			locale_id: 'gu-IN',
			language_name: 'Roviana'
		},
		{
			locale_code: 'rup-RO',
			locale_id: 'gu-IN',
			language_name: 'અરોમેનિયન'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'gu-IN',
			language_name: 'કિન્યારવાન્ડા'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'gu-IN',
			language_name: 'રવા'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'gu-IN',
			language_name: 'સંસ્કૃત'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'gu-IN',
			language_name: 'સોંડવે'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'gu-IN',
			language_name: 'સખા'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'gu-IN',
			language_name: 'સામરિટાન અરેમિક'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'gu-IN',
			language_name: 'સમ્બુરુ'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'gu-IN',
			language_name: 'સાસાક'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'gu-IN',
			language_name: 'સંતાલી'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'gu-IN',
			language_name: 'Saurashtra'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'gu-IN',
			language_name: 'ન્ગામ્બેય'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'gu-IN',
			language_name: 'સાંગુ'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'gu-IN',
			language_name: 'સાર્દિનિયન'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'gu-IN',
			language_name: 'સિસિલિયાન'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'gu-IN',
			language_name: 'સ્કોટ્સ'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'gu-IN',
			language_name: 'સિંધી'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'gu-IN',
			language_name: 'સિંધી'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'gu-IN',
			language_name: 'Sassarese Sardinian'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'gu-IN',
			language_name: 'સર્ઘન કુર્દીશ'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'gu-IN',
			language_name: 'ઉત્તરી સામી'
		},
		{
			locale_code: 'see-US',
			locale_id: 'gu-IN',
			language_name: 'Seneca'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'gu-IN',
			language_name: 'સેના'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'gu-IN',
			language_name: 'Seri'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'gu-IN',
			language_name: 'સેલ્કપ'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'gu-IN',
			language_name: 'કોયરાબોરો સેન્ની'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'gu-IN',
			language_name: 'સાંગો'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'gu-IN',
			language_name: 'જૂની આયરિશ'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'gu-IN',
			language_name: 'Samogitian'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'gu-IN',
			language_name: 'તેશીલહિટ'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'gu-IN',
			language_name: 'શેન'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'gu-IN',
			language_name: 'Chadian Arabic'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'gu-IN',
			language_name: 'સિંહાલી'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'gu-IN',
			language_name: 'સિદામો'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'gu-IN',
			language_name: 'સ્લોવૅક'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'gu-IN',
			language_name: 'સ્લોવેનિયન'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'gu-IN',
			language_name: 'દક્ષિણ લુશુટસીડ'
		},
		{
			locale_code: 'sli-PL',
			locale_id: 'gu-IN',
			language_name: 'Lower Silesian'
		},
		{
			locale_code: 'sly-ID',
			locale_id: 'gu-IN',
			language_name: 'Selayar'
		},
		{
			locale_code: 'sm-WS',
			locale_id: 'gu-IN',
			language_name: 'સામોન'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'gu-IN',
			language_name: 'દક્ષિણી સામી'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'gu-IN',
			language_name: 'લુલે સામી'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'gu-IN',
			language_name: 'ઇનારી સામી'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'gu-IN',
			language_name: 'સ્કોલ્ટ સામી'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'gu-IN',
			language_name: 'શોના'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'gu-IN',
			language_name: 'સોનિન્કે'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'gu-IN',
			language_name: 'સોમાલી'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'gu-IN',
			language_name: 'સોગ્ડિએન'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'gu-IN',
			language_name: 'અલ્બેનિયન'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'gu-IN',
			language_name: 'સર્બિયન'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'gu-IN',
			language_name: 'સર્બિયન'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'gu-IN',
			language_name: 'સર્બિયન'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'gu-IN',
			language_name: 'સર્બિયન'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'gu-IN',
			language_name: 'સ્રાનન ટોન્ગો'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'gu-IN',
			language_name: 'સેરેર'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'gu-IN',
			language_name: 'સ્વાતી'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'gu-IN',
			language_name: 'સાહો'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'gu-IN',
			language_name: 'દક્ષિણ સોથો'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'gu-IN',
			language_name: 'Saterland Frisian'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'gu-IN',
			language_name: 'સ્ટ્રેટ્સ સેલિશ'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'gu-IN',
			language_name: 'સંડેનીઝ'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'gu-IN',
			language_name: 'સુકુમા'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'gu-IN',
			language_name: 'સુસુ'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'gu-IN',
			language_name: 'સ્વીડિશ'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'gu-IN',
			language_name: 'સ્વાહિલી'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'gu-IN',
			language_name: 'કોમોરિયન'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'gu-IN',
			language_name: 'પરંપરાગત સિરિએક'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'gu-IN',
			language_name: 'સિરિએક'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'gu-IN',
			language_name: 'સિલેસ્યિન'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'gu-IN',
			language_name: 'તમિલ'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'gu-IN',
			language_name: 'દક્ષિણ ટુચૉન'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'gu-IN',
			language_name: 'તુલુ'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'gu-IN',
			language_name: 'તેલુગુ'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'gu-IN',
			language_name: 'ટિમ્ને'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'gu-IN',
			language_name: 'તેસો'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'gu-IN',
			language_name: 'તેરેનો'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'gu-IN',
			language_name: 'તેતુમ'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'gu-IN',
			language_name: 'તાજીક'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'gu-IN',
			language_name: 'તાજીક'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'gu-IN',
			language_name: 'ટાગિશ'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'gu-IN',
			language_name: 'થાઈ'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'gu-IN',
			language_name: 'તહલતાન'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'gu-IN',
			language_name: 'ટાઇગ્રિનિયા'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'gu-IN',
			language_name: 'ટાઇગ્રે'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'gu-IN',
			language_name: 'તિવ'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'gu-IN',
			language_name: 'તુર્કમેન'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'gu-IN',
			language_name: 'તોકેલાઉ'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'gu-IN',
			language_name: 'Tsakhur'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'gu-IN',
			language_name: 'ફિલિપિનો'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'gu-IN',
			language_name: 'ટ્લિંગિટ'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'gu-IN',
			language_name: 'Talysh'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'gu-IN',
			language_name: 'તામાશેખ'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'gu-IN',
			language_name: 'ત્સ્વાના'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'gu-IN',
			language_name: 'ટોંગાન'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'gu-IN',
			language_name: 'ન્યાસા ટોન્ગા'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'gu-IN',
			language_name: 'ટોક પિસિન'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'gu-IN',
			language_name: 'ટર્કિશ'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'gu-IN',
			language_name: 'Turoyo'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'gu-IN',
			language_name: 'ટારોકો'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'gu-IN',
			language_name: 'Torwali'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'gu-IN',
			language_name: 'સોંગા'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'gu-IN',
			language_name: 'Tsakonian'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'gu-IN',
			language_name: 'સિમ્શિયન'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'gu-IN',
			language_name: 'તતાર'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'gu-IN',
			language_name: 'ઉત્તરી ટુચૉન'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'gu-IN',
			language_name: 'મુસ્લિમ તાટ'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'gu-IN',
			language_name: 'તુમ્બુકા'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'gu-IN',
			language_name: 'તુવાલુ'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'gu-IN',
			language_name: 'તસાવાક'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'gu-IN',
			language_name: 'તાહિતિયન'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'gu-IN',
			language_name: 'ટુવીનિયન'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'gu-IN',
			language_name: 'સેન્ટ્રલ એટલાસ તામાઝિટ'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'gu-IN',
			language_name: 'ઉદમુર્ત'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'gu-IN',
			language_name: 'ઉઇગુર'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'gu-IN',
			language_name: 'ઉઇગુર'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'gu-IN',
			language_name: 'ઉઇગુર'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'gu-IN',
			language_name: 'યુગેરિટિક'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'gu-IN',
			language_name: 'યુક્રેનિયન'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'gu-IN',
			language_name: 'ઉમ્બુન્ડૂ'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'gu-IN',
			language_name: 'કતલાન'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'gu-IN',
			language_name: 'ફારસી'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'gu-IN',
			language_name: 'પોર્ટુગીઝ'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'gu-IN',
			language_name: 'મલય'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'gu-IN',
			language_name: 'ઉર્દૂ'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'gu-IN',
			language_name: 'મલય'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'gu-IN',
			language_name: 'ઉર્દૂ'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'gu-IN',
			language_name: 'ઉર્દૂ'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'gu-IN',
			language_name: 'ઉર્દૂ'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'gu-IN',
			language_name: 'ફારસી'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'gu-IN',
			language_name: 'સામોન'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'gu-IN',
			language_name: 'જર્મન'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'gu-IN',
			language_name: 'ડચ'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'gu-IN',
			language_name: 'સ્વીડિશ'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'gu-IN',
			language_name: 'ડચ'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'gu-IN',
			language_name: 'પાપિયામેન્ટો'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'gu-IN',
			language_name: 'નૉર્વેજીયન'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'gu-IN',
			language_name: 'રશિયન'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'gu-IN',
			language_name: 'જર્મન'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'gu-IN',
			language_name: 'root'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'gu-IN',
			language_name: 'પોર્ટુગીઝ'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'gu-IN',
			language_name: 'ગ્રીક'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'gu-IN',
			language_name: 'કારા-કલ્પક'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'gu-IN',
			language_name: 'મેસેડોનિયન'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'gu-IN',
			language_name: 'સર્બિયન'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'gu-IN',
			language_name: 'મેસેડોનિયન'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'gu-IN',
			language_name: 'કારા-કલ્પક'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'gu-IN',
			language_name: 'યુક્રેનિયન'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'gu-IN',
			language_name: 'બલ્ગેરિયન'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'gu-IN',
			language_name: 'યુક્રેનિયન'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'gu-IN',
			language_name: 'કબાર્ડિયન'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'gu-IN',
			language_name: 'ઉઝ્બેક'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'gu-IN',
			language_name: 'નેપાળી'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'gu-IN',
			language_name: 'ભોજપુરી'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'gu-IN',
			language_name: 'ટાઇગ્રિનિયા'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'gu-IN',
			language_name: 'વોલોફ'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'gu-IN',
			language_name: 'પોર્ટુગીઝ'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'gu-IN',
			language_name: 'કેંટોનીઝ'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'gu-IN',
			language_name: 'કેંટોનીઝ'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'gu-IN',
			language_name: 'યિદ્દિશ'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'gu-IN',
			language_name: 'યિદ્દિશ'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'gu-IN',
			language_name: 'યિદ્દિશ'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'gu-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'gu-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'gu-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'gu-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'gu-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'gu-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'gu-IN',
			language_name: 'સ્વાહિલી'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'gu-IN',
			language_name: 'કોરિયન'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'gu-IN',
			language_name: 'રશિયન'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'gu-IN',
			language_name: 'તુર્કમેન'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'gu-IN',
			language_name: 'ઝુઆગ'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'gu-IN',
			language_name: 'ટર્કિશ'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-IN',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'gu-IN',
			language_name: 'તુર્કમેન'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'gu-IN',
			language_name: 'અલ્બેનિયન'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'gu-IN',
			language_name: 'કુર્દિશ'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'gu-IN',
			language_name: 'પોલીશ'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'gu-IN',
			language_name: 'અંગ્રેજી'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'gu-IN',
			language_name: 'જર્મન'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'gu-IN',
			language_name: 'દક્ષિણ સોથો'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'gu-IN',
			language_name: 'રોમાનિયન'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'gu-IN',
			language_name: 'પોર્ટુગીઝ'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'gu-IN',
			language_name: 'આફ્રિકન્સ'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'gu-IN',
			language_name: 'હૌસા'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'gu-IN',
			language_name: 'પોર્ટુગીઝ'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'gu-IN',
			language_name: 'નોર્વેજિયન બોકમાલ'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'gu-IN',
			language_name: 'ઇટાલિયન'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'gu-IN',
			language_name: 'ડચ'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'gu-IN',
			language_name: 'પોર્ટુગીઝ'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'gu-IN',
			language_name: 'માનક મોરોક્કન તામાઝિટ'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'gu-IN',
			language_name: 'પોર્ટુગીઝ'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'gu-IN',
			language_name: 'સ્વાહિલી'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'gu-IN',
			language_name: 'ઇટાલિયન'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'gu-IN',
			language_name: 'વાઇ'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'gu-IN',
			language_name: 'સ્પેનિશ'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'gu-IN',
			language_name: 'વિયેતનામીસ'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'gu-IN',
			language_name: 'અરબી'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'gu-IN',
			language_name: 'ફ્રેન્ચ'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'gu-IN',
			language_name: 'ઉઝ્બેક'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'gu-IN',
			language_name: 'ઉઝ્બેક'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'gu-IN',
			language_name: 'વેન્દા'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'gu-IN',
			language_name: 'વેનેશ્યિન'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'gu-IN',
			language_name: 'Veps'
		},
		{
			locale_code: 'vls-BE',
			locale_id: 'gu-IN',
			language_name: 'West Flemish'
		},
		{
			locale_code: 'vmf-DE',
			locale_id: 'gu-IN',
			language_name: 'Main-Franconian'
		},
		{
			locale_code: 'vmw-MZ',
			locale_id: 'gu-IN',
			language_name: 'મખુવા'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'gu-IN',
			language_name: 'વોટિક'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'gu-IN',
			language_name: 'Võro'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'gu-IN',
			language_name: 'વુન્જો'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'gu-IN',
			language_name: 'વાલૂન'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'gu-IN',
			language_name: 'વેલ્સેર'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'gu-IN',
			language_name: 'વોલાયટ્ટા'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'gu-IN',
			language_name: 'વારેય'
		},
		{
			locale_code: 'was-US',
			locale_id: 'gu-IN',
			language_name: 'વાશો'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'gu-IN',
			language_name: 'વાર્લ્પીરી'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'gu-IN',
			language_name: 'વુ ચાઈનીઝ'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'gu-IN',
			language_name: 'કાલ્મિક'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'gu-IN',
			language_name: 'ખોસા'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'gu-IN',
			language_name: 'Mingrelian'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'gu-IN',
			language_name: 'કંગરી'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'gu-IN',
			language_name: 'સોગા'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'gu-IN',
			language_name: 'યાઓ'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'gu-IN',
			language_name: 'યાપીસ'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'gu-IN',
			language_name: 'યાન્ગબેન'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'gu-IN',
			language_name: 'યેમ્બા'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'gu-IN',
			language_name: 'યોરૂબા'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'gu-IN',
			language_name: 'નહેનગાતુ'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'gu-IN',
			language_name: 'કેંટોનીઝ'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'gu-IN',
			language_name: 'ઝેપોટેક'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'gu-IN',
			language_name: 'Zeelandic'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'gu-IN',
			language_name: 'ઝેનાગા'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'gu-IN',
			language_name: 'ચાઇનીઝ'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'gu-IN',
			language_name: 'ઝુલુ'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'gu-IN',
			language_name: 'ઝૂની'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'gu-IN',
			language_name: 'ઝાઝા'
		}
	];

	await knex.batchInsert(
		'locale_by_locale',
		rows.map((row) => ({
			...row,
			created_at: now,
			updated_at: now
		})),
		500
	);
};
