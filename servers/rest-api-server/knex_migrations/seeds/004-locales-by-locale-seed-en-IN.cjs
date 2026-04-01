/* eslint-disable security/detect-object-injection */
/**
 * Static seed for locale_by_locale with en-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * locale names (language + country) for the en-IN locale.
 *
 * This seed depends on:
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 004-locales-by-locale-seed-en-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM locale_by_locale WHERE locale_id = 'en-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for en-IN locale
	const rows = [
		{
			locale_code: 'aa-ET',
			locale_id: 'en-IN',
			language_name: 'Afar'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'en-IN',
			language_name: 'Abkhazian'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'en-IN',
			language_name: 'Acehnese'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'en-IN',
			language_name: 'Acoli'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'en-IN',
			language_name: 'Adangme'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'en-IN',
			language_name: 'Adyghe'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'en-IN',
			language_name: 'Avestan'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'en-IN',
			language_name: 'Tunisian Arabic'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'en-IN',
			language_name: 'Afrikaans'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'en-IN',
			language_name: 'Afrihili'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'en-IN',
			language_name: 'Aghem'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'en-IN',
			language_name: 'Ainu'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'en-IN',
			language_name: 'Akan'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'en-IN',
			language_name: 'Akkadian'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'en-IN',
			language_name: 'Alabama'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'en-IN',
			language_name: 'Aleut'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'en-IN',
			language_name: 'Southern Altai'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'en-IN',
			language_name: 'Amharic'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'en-IN',
			language_name: 'Aragonese'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'en-IN',
			language_name: 'Old English'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'en-IN',
			language_name: 'Obolo'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'en-IN',
			language_name: 'Angika'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'en-IN',
			language_name: 'Aramaic'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'en-IN',
			language_name: 'Aramaic'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'en-IN',
			language_name: 'Aramaic'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'en-IN',
			language_name: 'Aramaic'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'en-IN',
			language_name: 'Mapuche'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'en-IN',
			language_name: 'Araona'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'en-IN',
			language_name: 'Arapaho'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'en-IN',
			language_name: 'Algerian Arabic'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'en-IN',
			language_name: 'Najdi Arabic'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'en-IN',
			language_name: 'Arawak'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'en-IN',
			language_name: 'Moroccan Arabic'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'en-IN',
			language_name: 'Egyptian Arabic'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'en-IN',
			language_name: 'Assamese'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'en-IN',
			language_name: 'Asu'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'en-IN',
			language_name: 'American Sign Language'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'en-IN',
			language_name: 'Asturian'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'en-IN',
			language_name: 'Atikamekw'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'en-IN',
			language_name: 'Avaric'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'en-IN',
			language_name: 'Awadhi'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'en-IN',
			language_name: 'Aymara'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'en-IN',
			language_name: 'Azerbaijani'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'en-IN',
			language_name: 'Azerbaijani'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'en-IN',
			language_name: 'Azerbaijani'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'en-IN',
			language_name: 'Azerbaijani'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'en-IN',
			language_name: 'Bashkir'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'en-IN',
			language_name: 'Baluchi'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'en-IN',
			language_name: 'Balinese'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'en-IN',
			language_name: 'Bavarian'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'en-IN',
			language_name: 'Basaa'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'en-IN',
			language_name: 'Bamun'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'en-IN',
			language_name: 'Batak Toba'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'en-IN',
			language_name: 'Ghomala'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'en-IN',
			language_name: 'Belarusian'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'en-IN',
			language_name: 'Beja'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'en-IN',
			language_name: 'Bemba'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'en-IN',
			language_name: 'Betawi'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'en-IN',
			language_name: 'Bena'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'en-IN',
			language_name: 'Bafut'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'en-IN',
			language_name: 'Badaga'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'en-IN',
			language_name: 'Bulgarian'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'en-IN',
			language_name: 'Haryanvi'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'en-IN',
			language_name: 'Western Balochi'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'en-IN',
			language_name: 'Bhojpuri'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'en-IN',
			language_name: 'Bislama'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'en-IN',
			language_name: 'Bikol'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'en-IN',
			language_name: 'Bini'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'en-IN',
			language_name: 'Banjar'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'en-IN',
			language_name: 'Kom'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'en-IN',
			language_name: 'Siksiká'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'en-IN',
			language_name: 'Anii'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'en-IN',
			language_name: 'Tai Dam'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'en-IN',
			language_name: 'Bambara'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'en-IN',
			language_name: 'Bangla'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'en-IN',
			language_name: 'Tibetan'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'en-IN',
			language_name: 'Bishnupriya'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'en-IN',
			language_name: 'Bakhtiari'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'en-IN',
			language_name: 'Breton'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'en-IN',
			language_name: 'Braj'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'en-IN',
			language_name: 'Brahui'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'en-IN',
			language_name: 'Bodo'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'en-IN',
			language_name: 'Bosnian'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'en-IN',
			language_name: 'Akoose'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'en-IN',
			language_name: 'Buriat'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'en-IN',
			language_name: 'Buginese'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'en-IN',
			language_name: 'Bulu'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'en-IN',
			language_name: 'Blin'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'en-IN',
			language_name: 'Medumba'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'en-IN',
			language_name: 'Catalan'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'en-IN',
			language_name: 'Caddo'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'en-IN',
			language_name: 'Carib'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'en-IN',
			language_name: 'Cayuga'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'en-IN',
			language_name: 'Atsam'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'en-IN',
			language_name: 'Chakma'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'en-IN',
			language_name: 'Chechen'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'en-IN',
			language_name: 'Cebuano'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'en-IN',
			language_name: 'Chiga'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'en-IN',
			language_name: 'Chamorro'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'en-IN',
			language_name: 'Chibcha'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'en-IN',
			language_name: 'Chagatai'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'en-IN',
			language_name: 'Chuukese'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'en-IN',
			language_name: 'Mari'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'en-IN',
			language_name: 'Chinook Jargon'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'en-IN',
			language_name: 'Choctaw'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'en-IN',
			language_name: 'Chipewyan'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'en-IN',
			language_name: 'Cherokee'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'en-IN',
			language_name: 'Cheyenne'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'en-IN',
			language_name: 'Chickasaw'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'en-IN',
			language_name: 'Central Kurdish'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'en-IN',
			language_name: 'Chilcotin'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'en-IN',
			language_name: 'Corsican'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'en-IN',
			language_name: 'Coptic'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'en-IN',
			language_name: 'Capiznon'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'en-IN',
			language_name: 'Cree'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'en-IN',
			language_name: 'Michif'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'en-IN',
			language_name: 'Crimean Tatar'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'en-IN',
			language_name: 'Southern East Cree'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'en-IN',
			language_name: 'Plains Cree'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'en-IN',
			language_name: 'Northern East Cree'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'en-IN',
			language_name: 'Moose Cree'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'en-IN',
			language_name: 'Seselwa Creole French'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'en-IN',
			language_name: 'Czech'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'en-IN',
			language_name: 'Kashubian'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'en-IN',
			language_name: 'Swampy Cree'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'en-IN',
			language_name: 'Church Slavic'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'en-IN',
			language_name: 'Church Slavic'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'en-IN',
			language_name: 'Chuvash'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'en-IN',
			language_name: 'Welsh'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'en-IN',
			language_name: 'Danish'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'en-IN',
			language_name: 'Dakota'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'en-IN',
			language_name: 'Dargwa'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'en-IN',
			language_name: 'Taita'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'en-IN',
			language_name: 'German'
		},
		{
			locale_code: 'del-US',
			locale_id: 'en-IN',
			language_name: 'Delaware'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'en-IN',
			language_name: 'Slave'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'en-IN',
			language_name: 'Dogrib'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'en-IN',
			language_name: 'Dinka'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'en-IN',
			language_name: 'Zarma'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'en-IN',
			language_name: 'Dogri'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'en-IN',
			language_name: 'Lower Sorbian'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'en-IN',
			language_name: 'Central Dusun'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'en-IN',
			language_name: 'Duala'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'en-IN',
			language_name: 'Middle Dutch'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'en-IN',
			language_name: 'Divehi'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'en-IN',
			language_name: 'Jola-Fonyi'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'en-IN',
			language_name: 'Dyula'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'en-IN',
			language_name: 'Dzongkha'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'en-IN',
			language_name: 'Dazaga'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'en-IN',
			language_name: 'Embu'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'en-IN',
			language_name: 'Ewe'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'en-IN',
			language_name: 'Efik'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'en-IN',
			language_name: 'Emilian'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'en-IN',
			language_name: 'Ancient Egyptian'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'en-IN',
			language_name: 'Ekajuk'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'en-IN',
			language_name: 'Greek'
		},
		{
			locale_code: 'en-US',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-GB',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'en-IN',
			language_name: 'Middle English'
		},
		{
			locale_code: 'es-ES',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'esu-US',
			locale_id: 'en-IN',
			language_name: 'Central Yupik'
		},
		{
			locale_code: 'et-EE',
			locale_id: 'en-IN',
			language_name: 'Estonian'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'en-IN',
			language_name: 'Basque'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'en-IN',
			language_name: 'Ewondo'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'en-IN',
			language_name: 'Extremaduran'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'en-IN',
			language_name: 'Persian'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'en-IN',
			language_name: 'Fang'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'en-IN',
			language_name: 'Fula'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'en-IN',
			language_name: 'Fula'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'en-IN',
			language_name: 'Finnish'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'en-IN',
			language_name: 'Filipino'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'en-IN',
			language_name: 'Tornedalen Finnish'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'en-IN',
			language_name: 'Fijian'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'en-IN',
			language_name: 'Faroese'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'en-IN',
			language_name: 'Fon'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'en-IN',
			language_name: 'Cajun French'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'en-IN',
			language_name: 'Middle French'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'en-IN',
			language_name: 'Old French'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'en-IN',
			language_name: 'Arpitan'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'en-IN',
			language_name: 'Northern Frisian'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'en-IN',
			language_name: 'Eastern Frisian'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'en-IN',
			language_name: 'Friulian'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'en-IN',
			language_name: 'Western Frisian'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'en-IN',
			language_name: 'Irish'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'en-IN',
			language_name: 'Ga'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'en-IN',
			language_name: 'Gagauz'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'en-IN',
			language_name: 'Gan Chinese'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'en-IN',
			language_name: 'Gayo'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'en-IN',
			language_name: 'Gbaya'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'en-IN',
			language_name: 'Zoroastrian Dari'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'en-IN',
			language_name: 'Scottish Gaelic'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'en-IN',
			language_name: 'Geez'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'en-IN',
			language_name: 'Gilbertese'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'en-IN',
			language_name: 'Galician'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'en-IN',
			language_name: 'Gilaki'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'en-IN',
			language_name: 'Middle High German'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'en-IN',
			language_name: 'Guarani'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'en-IN',
			language_name: 'Old High German'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'en-IN',
			language_name: 'Gondi'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'en-IN',
			language_name: 'Gorontalo'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'en-IN',
			language_name: 'Gothic'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'en-IN',
			language_name: 'Grebo'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'en-IN',
			language_name: 'Ancient Greek'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'en-IN',
			language_name: 'Swiss German'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'en-IN',
			language_name: 'Gujarati'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'en-IN',
			language_name: 'Wayuu'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'en-IN',
			language_name: 'Frafra'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'en-IN',
			language_name: 'Gusii'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'en-IN',
			language_name: 'Manx'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'en-IN',
			language_name: 'Gwichʼin'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'en-IN',
			language_name: 'Hausa'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'en-IN',
			language_name: 'Hausa'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'en-IN',
			language_name: 'Hausa'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'en-IN',
			language_name: 'Haida'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'en-IN',
			language_name: 'Hakka Chinese'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'en-IN',
			language_name: 'Hakka Chinese'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'en-IN',
			language_name: 'Hawaiian'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'en-IN',
			language_name: 'Southern Haida'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'en-IN',
			language_name: 'Hebrew'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'en-IN',
			language_name: 'Hindi'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'en-IN',
			language_name: 'Fiji Hindi'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'en-IN',
			language_name: 'Hiligaynon'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'en-IN',
			language_name: 'Hittite'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'en-IN',
			language_name: 'Hmong'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'en-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'en-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'en-IN',
			language_name: 'Hiri Motu'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'en-IN',
			language_name: 'Croatian'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'en-IN',
			language_name: 'Upper Sorbian'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'en-IN',
			language_name: 'Xiang Chinese'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'en-IN',
			language_name: 'Haitian Creole'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'en-IN',
			language_name: 'Hungarian'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'en-IN',
			language_name: 'Hupa'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'en-IN',
			language_name: 'Halkomelem'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'en-IN',
			language_name: 'Armenian'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'en-IN',
			language_name: 'Herero'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'en-IN',
			language_name: 'Iban'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'en-IN',
			language_name: 'Ibibio'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'en-IN',
			language_name: 'Indonesian'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'en-IN',
			language_name: 'Interlingue'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'en-IN',
			language_name: 'Igbo'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'en-IN',
			language_name: 'Sichuan Yi'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'en-IN',
			language_name: 'Inupiaq'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'en-IN',
			language_name: 'Western Canadian Inuktitut'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'en-IN',
			language_name: 'Iloko'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'en-IN',
			language_name: 'Ingush'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'en-IN',
			language_name: 'Icelandic'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'en-IN',
			language_name: 'Italian'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'en-IN',
			language_name: 'Inuktitut'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'en-IN',
			language_name: 'Ingrian'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'en-IN',
			language_name: 'Japanese'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'en-IN',
			language_name: 'Jamaican Creole English'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'en-IN',
			language_name: 'Ngomba'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'en-IN',
			language_name: 'Machame'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'en-IN',
			language_name: 'Judeo-Persian'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'en-IN',
			language_name: 'Judeo-Arabic'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'en-IN',
			language_name: 'Jutish'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'en-IN',
			language_name: 'Javanese'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'en-IN',
			language_name: 'Georgian'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'en-IN',
			language_name: 'Kara-Kalpak'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'en-IN',
			language_name: 'Kabyle'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'en-IN',
			language_name: 'Kachin'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'en-IN',
			language_name: 'Jju'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'en-IN',
			language_name: 'Kamba'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'en-IN',
			language_name: 'Kawi'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'en-IN',
			language_name: 'Kabardian'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'en-IN',
			language_name: 'Kanembu'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'en-IN',
			language_name: 'Tyap'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'en-IN',
			language_name: 'Makonde'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'en-IN',
			language_name: 'Kabuverdianu'
		},
		{
			locale_code: 'kek-GT',
			locale_id: 'en-IN',
			language_name: 'Qʼeqchiʼ'
		},
		{
			locale_code: 'ken-CM',
			locale_id: 'en-IN',
			language_name: 'Kenyang'
		},
		{
			locale_code: 'kfo-CI',
			locale_id: 'en-IN',
			language_name: 'Koro'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'en-IN',
			language_name: 'Kongo'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'en-IN',
			language_name: 'Kaingang'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'en-IN',
			language_name: 'Khasi'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'en-IN',
			language_name: 'Khotanese'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'en-IN',
			language_name: 'Koyra Chiini'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'en-IN',
			language_name: 'Khowar'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'en-IN',
			language_name: 'Kikuyu'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'en-IN',
			language_name: 'Kirmanjki'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'en-IN',
			language_name: 'Kuanyama'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'en-IN',
			language_name: 'Kazakh'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'en-IN',
			language_name: 'Kazakh'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'en-IN',
			language_name: 'Kazakh'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'en-IN',
			language_name: 'Kazakh'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'en-IN',
			language_name: 'Kazakh'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'en-IN',
			language_name: 'Kako'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'en-IN',
			language_name: 'Kalaallisut'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'en-IN',
			language_name: 'Kalenjin'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'en-IN',
			language_name: 'Khmer'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'en-IN',
			language_name: 'Kimbundu'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'en-IN',
			language_name: 'Kannada'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'en-IN',
			language_name: 'Korean'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'en-IN',
			language_name: 'Komi-Permyak'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'en-IN',
			language_name: 'Konkani'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'en-IN',
			language_name: 'Kosraean'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'en-IN',
			language_name: 'Kpelle'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'en-IN',
			language_name: 'Kanuri'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'en-IN',
			language_name: 'Karachay-Balkar'
		},
		{
			locale_code: 'kri-SL',
			locale_id: 'en-IN',
			language_name: 'Krio'
		},
		{
			locale_code: 'krj-PH',
			locale_id: 'en-IN',
			language_name: 'Kinaray-a'
		},
		{
			locale_code: 'krl-RU',
			locale_id: 'en-IN',
			language_name: 'Karelian'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'en-IN',
			language_name: 'Kurukh'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'en-IN',
			language_name: 'Kashmiri'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'en-IN',
			language_name: 'Shambala'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'en-IN',
			language_name: 'Bafia'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'en-IN',
			language_name: 'Colognian'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'en-IN',
			language_name: 'Kurdish'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'en-IN',
			language_name: 'Kurdish'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'en-IN',
			language_name: 'Kurdish'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'en-IN',
			language_name: 'Kurdish'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'en-IN',
			language_name: 'Kurdish'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'en-IN',
			language_name: 'Kurdish'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'en-IN',
			language_name: 'Kurdish'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'en-IN',
			language_name: 'Kurdish'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'en-IN',
			language_name: 'Kumyk'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'en-IN',
			language_name: 'Kutenai'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'en-IN',
			language_name: 'Komi'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'en-IN',
			language_name: 'Cornish'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'en-IN',
			language_name: 'Kwakʼwala'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'en-IN',
			language_name: 'Kuvi'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'en-IN',
			language_name: 'Kyrgyz'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'en-IN',
			language_name: 'Kyrgyz'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'en-IN',
			language_name: 'Kyrgyz'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'en-IN',
			language_name: 'Latin'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'en-IN',
			language_name: 'Ladino'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'en-IN',
			language_name: 'Langi'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'en-IN',
			language_name: 'Western Panjabi'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'en-IN',
			language_name: 'Lamba'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'en-IN',
			language_name: 'Luxembourgish'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'en-IN',
			language_name: 'Lezghian'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'en-IN',
			language_name: 'Ganda'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'en-IN',
			language_name: 'Limburgish'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'en-IN',
			language_name: 'Ligurian'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'en-IN',
			language_name: 'Lillooet'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'en-IN',
			language_name: 'Livonian'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'en-IN',
			language_name: 'Lakota'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'en-IN',
			language_name: 'Lombard'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'en-IN',
			language_name: 'Lingala'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'en-IN',
			language_name: 'Lao'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'en-IN',
			language_name: 'Mongo'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'en-IN',
			language_name: 'Louisiana Creole'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'en-IN',
			language_name: 'Lozi'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'en-IN',
			language_name: 'Northern Luri'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'en-IN',
			language_name: 'Saamia'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'en-IN',
			language_name: 'Lithuanian'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'en-IN',
			language_name: 'Latgalian'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'en-IN',
			language_name: 'Luba-Katanga'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'en-IN',
			language_name: 'Luba-Lulua'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'en-IN',
			language_name: 'Luiseno'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'en-IN',
			language_name: 'Lunda'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'en-IN',
			language_name: 'Luo'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'en-IN',
			language_name: 'Mizo'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'en-IN',
			language_name: 'Luyia'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'en-IN',
			language_name: 'Latvian'
		},
		{
			locale_code: 'lzh-CN',
			locale_id: 'en-IN',
			language_name: 'Literary Chinese'
		},
		{
			locale_code: 'lzz-TR',
			locale_id: 'en-IN',
			language_name: 'Laz'
		},
		{
			locale_code: 'lzz-GE',
			locale_id: 'en-IN',
			language_name: 'Laz'
		},
		{
			locale_code: 'mad-ID',
			locale_id: 'en-IN',
			language_name: 'Madurese'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'en-IN',
			language_name: 'Mafa'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'en-IN',
			language_name: 'Magahi'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'en-IN',
			language_name: 'Maithili'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'en-IN',
			language_name: 'Makasar'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'en-IN',
			language_name: 'Mandingo'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'en-IN',
			language_name: 'Mandingo'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'en-IN',
			language_name: 'Masai'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'en-IN',
			language_name: 'Maba'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'en-IN',
			language_name: 'Moksha'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'en-IN',
			language_name: 'Mandar'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'en-IN',
			language_name: 'Mende'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'en-IN',
			language_name: 'Meru'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'en-IN',
			language_name: 'Morisyen'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'en-IN',
			language_name: 'Malagasy'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'en-IN',
			language_name: 'Middle Irish'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'en-IN',
			language_name: 'Makhuwa-Meetto'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'en-IN',
			language_name: 'Metaʼ'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'en-IN',
			language_name: 'Marshallese'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'en-IN',
			language_name: 'Māori'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'en-IN',
			language_name: "Mi'kmaw"
		},
		{
			locale_code: 'min-ID',
			locale_id: 'en-IN',
			language_name: 'Minangkabau'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'en-IN',
			language_name: 'Macedonian'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'en-IN',
			language_name: 'Malayalam'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'en-IN',
			language_name: 'Mongolian'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'en-IN',
			language_name: 'Mongolian'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'en-IN',
			language_name: 'Manchu'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'en-IN',
			language_name: 'Manipuri'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'en-IN',
			language_name: 'Innu-aimun'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'en-IN',
			language_name: 'Mohawk'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'en-IN',
			language_name: 'Mossi'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'en-IN',
			language_name: 'Marathi'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'en-IN',
			language_name: 'Western Mari'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'en-IN',
			language_name: 'Malay'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'en-IN',
			language_name: 'Malay'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'en-IN',
			language_name: 'Maltese'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'en-IN',
			language_name: 'Mundang'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'en-IN',
			language_name: 'Muscogee'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'en-IN',
			language_name: 'Mirandese'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'en-IN',
			language_name: 'Marwari'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'en-IN',
			language_name: 'Mentawai'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'en-IN',
			language_name: 'Burmese'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'en-IN',
			language_name: 'Myene'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'en-IN',
			language_name: 'Erzya'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'en-IN',
			language_name: 'Mazanderani'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'en-IN',
			language_name: 'Nauru'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'en-IN',
			language_name: 'Min Nan Chinese'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'en-IN',
			language_name: 'Min Nan Chinese'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'en-IN',
			language_name: 'Min Nan Chinese'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'en-IN',
			language_name: 'Neapolitan'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'en-IN',
			language_name: 'Nama'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'en-IN',
			language_name: 'Norwegian Bokmål'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'en-IN',
			language_name: 'North Ndebele'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'en-IN',
			language_name: 'Low German'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'en-IN',
			language_name: 'Nepali'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'en-IN',
			language_name: 'Newari'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'en-IN',
			language_name: 'Ndonga'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'en-IN',
			language_name: 'Nias'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'en-IN',
			language_name: 'Niuean'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'en-IN',
			language_name: 'Ao Naga'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'en-IN',
			language_name: 'Dutch'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'en-IN',
			language_name: 'Kwasio'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'en-IN',
			language_name: 'Norwegian Nynorsk'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'en-IN',
			language_name: 'Ngiemboon'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'en-IN',
			language_name: 'Norwegian'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'en-IN',
			language_name: 'Nogai'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'en-IN',
			language_name: 'Old Norse'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'en-IN',
			language_name: 'N’Ko'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'en-IN',
			language_name: 'South Ndebele'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'en-IN',
			language_name: 'Northern Sotho'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'en-IN',
			language_name: 'Nuer'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'en-IN',
			language_name: 'Navajo'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'en-IN',
			language_name: 'Classical Newari'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'en-IN',
			language_name: 'Nyanja'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'en-IN',
			language_name: 'Nyamwezi'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'en-IN',
			language_name: 'Nyankole'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'en-IN',
			language_name: 'Nyoro'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'en-IN',
			language_name: 'Nzima'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'en-IN',
			language_name: 'Occitan'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'en-IN',
			language_name: 'Ojibwa'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'en-IN',
			language_name: 'Northwestern Ojibwa'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'en-IN',
			language_name: 'Central Ojibwa'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'en-IN',
			language_name: 'Oji-Cree'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'en-IN',
			language_name: 'Western Ojibwa'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'en-IN',
			language_name: 'Okanagan'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'en-IN',
			language_name: 'Oromo'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'en-IN',
			language_name: 'Odia'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'en-IN',
			language_name: 'Ossetic'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'en-IN',
			language_name: 'Osage'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'en-IN',
			language_name: 'Ottoman Turkish'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'en-IN',
			language_name: 'Punjabi'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'en-IN',
			language_name: 'Punjabi'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'en-IN',
			language_name: 'Pangasinan'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'en-IN',
			language_name: 'Pahlavi'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'en-IN',
			language_name: 'Pahlavi'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'en-IN',
			language_name: 'Pampanga'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'en-IN',
			language_name: 'Papiamento'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'en-IN',
			language_name: 'Palauan'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'en-IN',
			language_name: 'Picard'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'en-IN',
			language_name: 'Nigerian Pidgin'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'en-IN',
			language_name: 'Pennsylvania German'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'en-IN',
			language_name: 'Plautdietsch'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'en-IN',
			language_name: 'Old Persian'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'en-IN',
			language_name: 'Palatine German'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'en-IN',
			language_name: 'Phoenician'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'en-IN',
			language_name: 'Pali'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'en-IN',
			language_name: 'Pali'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'en-IN',
			language_name: 'Pali'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'en-IN',
			language_name: 'Pali'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'en-IN',
			language_name: 'Pali'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'en-IN',
			language_name: 'Pijin'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'en-IN',
			language_name: 'Polish'
		},
		{
			locale_code: 'pms-IT',
			locale_id: 'en-IN',
			language_name: 'Piedmontese'
		},
		{
			locale_code: 'pnt-GR',
			locale_id: 'en-IN',
			language_name: 'Pontic'
		},
		{
			locale_code: 'pnt-RU',
			locale_id: 'en-IN',
			language_name: 'Pontic'
		},
		{
			locale_code: 'pnt-TR',
			locale_id: 'en-IN',
			language_name: 'Pontic'
		},
		{
			locale_code: 'pon-FM',
			locale_id: 'en-IN',
			language_name: 'Pohnpeian'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'en-IN',
			language_name: 'Maliseet-Passamaquoddy'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'en-IN',
			language_name: 'Prussian'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'en-IN',
			language_name: 'Old Provençal'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'en-IN',
			language_name: 'Pashto'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'en-IN',
			language_name: 'Portuguese'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'en-IN',
			language_name: 'Quechua'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'en-IN',
			language_name: 'Kʼicheʼ'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'en-IN',
			language_name: 'Chimborazo Highland Quichua'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'en-IN',
			language_name: 'Rajasthani'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'en-IN',
			language_name: 'Rapanui'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'en-IN',
			language_name: 'Rarotongan'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'en-IN',
			language_name: 'Romagnol'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'en-IN',
			language_name: 'Rohingya'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'en-IN',
			language_name: 'Riffian'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'en-IN',
			language_name: 'Romansh'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'en-IN',
			language_name: 'Rundi'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'en-IN',
			language_name: 'Romanian'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'en-IN',
			language_name: 'Rombo'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'en-IN',
			language_name: 'Romany'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'en-IN',
			language_name: 'Rotuman'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'en-IN',
			language_name: 'Russian'
		},
		{
			locale_code: 'rue-UA',
			locale_id: 'en-IN',
			language_name: 'Rusyn'
		},
		{
			locale_code: 'rug-SB',
			locale_id: 'en-IN',
			language_name: 'Roviana'
		},
		{
			locale_code: 'rup-RO',
			locale_id: 'en-IN',
			language_name: 'Aromanian'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'en-IN',
			language_name: 'Kinyarwanda'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'en-IN',
			language_name: 'Rwa'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'en-IN',
			language_name: 'Sanskrit'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'en-IN',
			language_name: 'Sandawe'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'en-IN',
			language_name: 'Yakut'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'en-IN',
			language_name: 'Samaritan Aramaic'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'en-IN',
			language_name: 'Samburu'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'en-IN',
			language_name: 'Sasak'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'en-IN',
			language_name: 'Santali'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'en-IN',
			language_name: 'Saurashtra'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'en-IN',
			language_name: 'Ngambay'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'en-IN',
			language_name: 'Sangu'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'en-IN',
			language_name: 'Sardinian'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'en-IN',
			language_name: 'Sicilian'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'en-IN',
			language_name: 'Scots'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'en-IN',
			language_name: 'Sindhi'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'en-IN',
			language_name: 'Sindhi'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'en-IN',
			language_name: 'Sassarese Sardinian'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'en-IN',
			language_name: 'Southern Kurdish'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'en-IN',
			language_name: 'Northern Sami'
		},
		{
			locale_code: 'see-US',
			locale_id: 'en-IN',
			language_name: 'Seneca'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'en-IN',
			language_name: 'Sena'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'en-IN',
			language_name: 'Seri'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'en-IN',
			language_name: 'Selkup'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'en-IN',
			language_name: 'Koyraboro Senni'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'en-IN',
			language_name: 'Sango'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'en-IN',
			language_name: 'Old Irish'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'en-IN',
			language_name: 'Samogitian'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'en-IN',
			language_name: 'Tachelhit'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'en-IN',
			language_name: 'Shan'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'en-IN',
			language_name: 'Chadian Arabic'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'en-IN',
			language_name: 'Sinhala'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'en-IN',
			language_name: 'Sidamo'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'en-IN',
			language_name: 'Slovak'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'en-IN',
			language_name: 'Slovenian'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'en-IN',
			language_name: 'Southern Lushootseed'
		},
		{
			locale_code: 'sli-PL',
			locale_id: 'en-IN',
			language_name: 'Lower Silesian'
		},
		{
			locale_code: 'sly-ID',
			locale_id: 'en-IN',
			language_name: 'Selayar'
		},
		{
			locale_code: 'sm-WS',
			locale_id: 'en-IN',
			language_name: 'Samoan'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'en-IN',
			language_name: 'Southern Sami'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'en-IN',
			language_name: 'Lule Sami'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'en-IN',
			language_name: 'Inari Sami'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'en-IN',
			language_name: 'Skolt Sami'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'en-IN',
			language_name: 'Shona'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'en-IN',
			language_name: 'Soninke'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'en-IN',
			language_name: 'Somali'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'en-IN',
			language_name: 'Sogdien'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'en-IN',
			language_name: 'Albanian'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'en-IN',
			language_name: 'Serbian'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'en-IN',
			language_name: 'Serbian'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'en-IN',
			language_name: 'Serbian'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'en-IN',
			language_name: 'Serbian'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'en-IN',
			language_name: 'Sranan Tongo'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'en-IN',
			language_name: 'Serer'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'en-IN',
			language_name: 'Swati'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'en-IN',
			language_name: 'Saho'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'en-IN',
			language_name: 'Southern Sotho'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'en-IN',
			language_name: 'Saterland Frisian'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'en-IN',
			language_name: 'Straits Salish'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'en-IN',
			language_name: 'Sundanese'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'en-IN',
			language_name: 'Sukuma'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'en-IN',
			language_name: 'Susu'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'en-IN',
			language_name: 'Swedish'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'en-IN',
			language_name: 'Swahili'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'en-IN',
			language_name: 'Comorian'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'en-IN',
			language_name: 'Classical Syriac'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'en-IN',
			language_name: 'Syriac'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'en-IN',
			language_name: 'Silesian'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'en-IN',
			language_name: 'Tamil'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'en-IN',
			language_name: 'Southern Tutchone'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'en-IN',
			language_name: 'Tulu'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'en-IN',
			language_name: 'Telugu'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'en-IN',
			language_name: 'Timne'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'en-IN',
			language_name: 'Teso'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'en-IN',
			language_name: 'Tereno'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'en-IN',
			language_name: 'Tetum'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'en-IN',
			language_name: 'Tajik'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'en-IN',
			language_name: 'Tajik'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'en-IN',
			language_name: 'Tagish'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'en-IN',
			language_name: 'Thai'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'en-IN',
			language_name: 'Tahltan'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'en-IN',
			language_name: 'Tigrinya'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'en-IN',
			language_name: 'Tigre'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'en-IN',
			language_name: 'Tiv'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'en-IN',
			language_name: 'Turkmen'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'en-IN',
			language_name: 'Tokelauan'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'en-IN',
			language_name: 'Tsakhur'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'en-IN',
			language_name: 'Tagalog'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'en-IN',
			language_name: 'Tlingit'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'en-IN',
			language_name: 'Talysh'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'en-IN',
			language_name: 'Tamashek'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'en-IN',
			language_name: 'Tswana'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'en-IN',
			language_name: 'Tongan'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'en-IN',
			language_name: 'Nyasa Tonga'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'en-IN',
			language_name: 'Tok Pisin'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'en-IN',
			language_name: 'Turkish'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'en-IN',
			language_name: 'Turoyo'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'en-IN',
			language_name: 'Taroko'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'en-IN',
			language_name: 'Torwali'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'en-IN',
			language_name: 'Tsonga'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'en-IN',
			language_name: 'Tsakonian'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'en-IN',
			language_name: 'Tsimshian'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'en-IN',
			language_name: 'Tatar'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'en-IN',
			language_name: 'Northern Tutchone'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'en-IN',
			language_name: 'Muslim Tat'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'en-IN',
			language_name: 'Tumbuka'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'en-IN',
			language_name: 'Tuvalu'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'en-IN',
			language_name: 'Tasawaq'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'en-IN',
			language_name: 'Tahitian'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'en-IN',
			language_name: 'Tuvinian'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'en-IN',
			language_name: 'Central Atlas Tamazight'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'en-IN',
			language_name: 'Udmurt'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'en-IN',
			language_name: 'Uyghur'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'en-IN',
			language_name: 'Uyghur'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'en-IN',
			language_name: 'Uyghur'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'en-IN',
			language_name: 'Ugaritic'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'en-IN',
			language_name: 'Ukrainian'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'en-IN',
			language_name: 'Umbundu'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'en-IN',
			language_name: 'Catalan'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'en-IN',
			language_name: 'Persian'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'en-IN',
			language_name: 'Portuguese'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'en-IN',
			language_name: 'Malay'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'en-IN',
			language_name: 'Urdu'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'en-IN',
			language_name: 'Malay'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'en-IN',
			language_name: 'Urdu'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'en-IN',
			language_name: 'Urdu'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'en-IN',
			language_name: 'Urdu'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'en-IN',
			language_name: 'Persian'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'en-IN',
			language_name: 'Samoan'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'en-IN',
			language_name: 'German'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'en-IN',
			language_name: 'Dutch'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'en-IN',
			language_name: 'Swedish'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'en-IN',
			language_name: 'Dutch'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'en-IN',
			language_name: 'Papiamento'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'en-IN',
			language_name: 'Norwegian'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'en-IN',
			language_name: 'Russian'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'en-IN',
			language_name: 'German'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'en-IN',
			language_name: 'Unknown language'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'en-IN',
			language_name: 'Portuguese'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'en-IN',
			language_name: 'Greek'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'en-IN',
			language_name: 'Kara-Kalpak'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'en-IN',
			language_name: 'Macedonian'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'en-IN',
			language_name: 'Serbian'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'en-IN',
			language_name: 'Macedonian'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'en-IN',
			language_name: 'Kara-Kalpak'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'en-IN',
			language_name: 'Ukrainian'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'en-IN',
			language_name: 'Bulgarian'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'en-IN',
			language_name: 'Ukrainian'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'en-IN',
			language_name: 'Kabardian'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'en-IN',
			language_name: 'Uzbek'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'en-IN',
			language_name: 'Nepali'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'en-IN',
			language_name: 'Bhojpuri'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'en-IN',
			language_name: 'Tigrinya'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'en-IN',
			language_name: 'Wolof'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'en-IN',
			language_name: 'Portuguese'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'en-IN',
			language_name: 'Cantonese'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'en-IN',
			language_name: 'Cantonese'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'en-IN',
			language_name: 'Yiddish'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'en-IN',
			language_name: 'Yiddish'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'en-IN',
			language_name: 'Yiddish'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'en-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'en-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'en-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'en-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'en-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'en-IN',
			language_name: 'Hmong Njua'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'en-IN',
			language_name: 'Swahili'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'en-IN',
			language_name: 'Korean'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'en-IN',
			language_name: 'Russian'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'en-IN',
			language_name: 'Turkmen'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'en-IN',
			language_name: 'Zhuang'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'en-IN',
			language_name: 'Turkish'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-IN',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'en-IN',
			language_name: 'Turkmen'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'en-IN',
			language_name: 'Albanian'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'en-IN',
			language_name: 'Kurdish'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'en-IN',
			language_name: 'Polish'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'en-IN',
			language_name: 'English'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'en-IN',
			language_name: 'German'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'en-IN',
			language_name: 'Southern Sotho'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'en-IN',
			language_name: 'Romanian'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'en-IN',
			language_name: 'Portuguese'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'en-IN',
			language_name: 'Afrikaans'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'en-IN',
			language_name: 'Hausa'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'en-IN',
			language_name: 'Portuguese'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'en-IN',
			language_name: 'Norwegian Bokmål'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'en-IN',
			language_name: 'Italian'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'en-IN',
			language_name: 'Dutch'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'en-IN',
			language_name: 'Portuguese'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'en-IN',
			language_name: 'Standard Moroccan Tamazight'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'en-IN',
			language_name: 'Portuguese'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'en-IN',
			language_name: 'Swahili'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'en-IN',
			language_name: 'Italian'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'en-IN',
			language_name: 'Vai'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'en-IN',
			language_name: 'Spanish'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'en-IN',
			language_name: 'Vietnamese'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'en-IN',
			language_name: 'Arabic'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'en-IN',
			language_name: 'French'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'en-IN',
			language_name: 'Uzbek'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'en-IN',
			language_name: 'Uzbek'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'en-IN',
			language_name: 'Venda'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'en-IN',
			language_name: 'Venetian'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'en-IN',
			language_name: 'Veps'
		},
		{
			locale_code: 'vls-BE',
			locale_id: 'en-IN',
			language_name: 'West Flemish'
		},
		{
			locale_code: 'vmf-DE',
			locale_id: 'en-IN',
			language_name: 'Main-Franconian'
		},
		{
			locale_code: 'vmw-MZ',
			locale_id: 'en-IN',
			language_name: 'Makhuwa'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'en-IN',
			language_name: 'Votic'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'en-IN',
			language_name: 'Võro'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'en-IN',
			language_name: 'Vunjo'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'en-IN',
			language_name: 'Walloon'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'en-IN',
			language_name: 'Walser'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'en-IN',
			language_name: 'Wolaytta'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'en-IN',
			language_name: 'Waray'
		},
		{
			locale_code: 'was-US',
			locale_id: 'en-IN',
			language_name: 'Washo'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'en-IN',
			language_name: 'Warlpiri'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'en-IN',
			language_name: 'Wu Chinese'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'en-IN',
			language_name: 'Kalmyk'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'en-IN',
			language_name: 'Xhosa'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'en-IN',
			language_name: 'Mingrelian'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'en-IN',
			language_name: 'Kangri'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'en-IN',
			language_name: 'Soga'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'en-IN',
			language_name: 'Yao'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'en-IN',
			language_name: 'Yapese'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'en-IN',
			language_name: 'Yangben'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'en-IN',
			language_name: 'Yemba'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'en-IN',
			language_name: 'Yoruba'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'en-IN',
			language_name: 'Nheengatu'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'en-IN',
			language_name: 'Cantonese'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'en-IN',
			language_name: 'Zapotec'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'en-IN',
			language_name: 'Zeelandic'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'en-IN',
			language_name: 'Zenaga'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'en-IN',
			language_name: 'Chinese'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'en-IN',
			language_name: 'Zulu'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'en-IN',
			language_name: 'Zuni'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'en-IN',
			language_name: 'Zaza'
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
