/* eslint-disable security/detect-object-injection */
/**
 * Static seed for locale_by_locale with kn-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * locale names (language + country) for the kn-IN locale.
 *
 * This seed depends on:
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 004-locales-by-locale-seed-kn-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM locale_by_locale WHERE locale_id = 'kn-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for kn-IN locale
	const rows = [
		{
			locale_code: 'aa-ET',
			locale_id: 'kn-IN',
			language_name: 'ಅಫಾರ್'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'kn-IN',
			language_name: 'ಅಬ್ಖಾಜಿಯನ್'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'kn-IN',
			language_name: 'ಅಛಿನೀಸ್'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'kn-IN',
			language_name: 'ಅಕೋಲಿ'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'kn-IN',
			language_name: 'ಅಡಂಗ್ಮೆ'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'kn-IN',
			language_name: 'ಅಡೈಘೆ'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'kn-IN',
			language_name: 'ಅವೆಸ್ಟನ್'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'kn-IN',
			language_name: 'ಟುನೀಶಿಯನ್ ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಆಫ್ರಿಕಾನ್ಸ್'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'kn-IN',
			language_name: 'ಆಫ್ರಿಹಿಲಿ'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'kn-IN',
			language_name: 'ಅಘೆಮ್'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'kn-IN',
			language_name: 'ಐನು'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'kn-IN',
			language_name: 'ಅಕಾನ್'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಅಕ್ಕಾಡಿಯನ್'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'kn-IN',
			language_name: 'ಅಲಬಾಮಾ'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'kn-IN',
			language_name: 'ಅಲೆಯುಟ್'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಅಲ್ಟಾಯ್'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'kn-IN',
			language_name: 'ಅಂಹರಿಕ್'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'kn-IN',
			language_name: 'ಅರಗೊನೀಸ್'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಇಂಗ್ಲೀಷ್'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'kn-IN',
			language_name: 'ಒಬೊಲೊ'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'kn-IN',
			language_name: 'ಆಂಗಿಕಾ'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾಮಿಕ್'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾಮಿಕ್'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾಮಿಕ್'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾಮಿಕ್'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'kn-IN',
			language_name: 'ಮಪುಚೆ'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'kn-IN',
			language_name: 'ಅರೋನಾ'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'kn-IN',
			language_name: 'ಅರಪಾಹೋ'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'kn-IN',
			language_name: 'ಅಲ್ಜೀರಿಯನ್ ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾಜ್ಡಿ ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾವಾಕ್'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'kn-IN',
			language_name: 'ಮೊರೊಕನ್ ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'kn-IN',
			language_name: 'ಈಜಿಪ್ಟ್ ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'kn-IN',
			language_name: 'ಅಸ್ಸಾಮೀಸ್'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಅಸು'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'kn-IN',
			language_name: 'ಅಮೇರಿಕನ್ ಸಂಕೇತ ಭಾಷೆ'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'kn-IN',
			language_name: 'ಆಸ್ಟುರಿಯನ್'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'kn-IN',
			language_name: 'ಅತಿಕಮೆಕ್'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'kn-IN',
			language_name: 'ಅವರಿಕ್'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'kn-IN',
			language_name: 'ಅವಧಿ'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'kn-IN',
			language_name: 'ಅಯ್ಮಾರಾ'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'kn-IN',
			language_name: 'ಅಜೆರ್ಬೈಜಾನಿ'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'kn-IN',
			language_name: 'ಅಜೆರ್ಬೈಜಾನಿ'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಅಜೆರ್ಬೈಜಾನಿ'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'kn-IN',
			language_name: 'ಅಜೆರ್ಬೈಜಾನಿ'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'kn-IN',
			language_name: 'ಬಶ್ಕಿರ್'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'kn-IN',
			language_name: 'ಬಲೂಚಿ'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'kn-IN',
			language_name: 'ಬಲಿನೀಸ್'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'kn-IN',
			language_name: 'ಬವೇರಿಯನ್'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'kn-IN',
			language_name: 'ಬಸಾ'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'kn-IN',
			language_name: 'ಬಾಮುನ್'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'kn-IN',
			language_name: 'ಬಟಕ್ ಟೋಬಾ'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'kn-IN',
			language_name: 'ಘೋಮಾಲ'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'kn-IN',
			language_name: 'ಬೆಲರೂಸಿಯನ್'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'kn-IN',
			language_name: 'ಬೇಜಾ'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'kn-IN',
			language_name: 'ಬೆಂಬಾ'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'kn-IN',
			language_name: 'ಬೆಟಾವಿ'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಬೆನ'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'kn-IN',
			language_name: 'ಬಫುಟ್'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'kn-IN',
			language_name: 'ಬಡಗ'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'kn-IN',
			language_name: 'ಬಲ್ಗೇರಿಯನ್'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'kn-IN',
			language_name: 'ಹರ್ಯಾನ್ವಿ'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಬಲೊಚಿ'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'kn-IN',
			language_name: 'ಭೋಜಪುರಿ'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'kn-IN',
			language_name: 'ಬಿಸ್ಲಾಮಾ'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'kn-IN',
			language_name: 'ಬಿಕೊಲ್'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'kn-IN',
			language_name: 'ಬಿನಿ'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'kn-IN',
			language_name: 'ಬಂಜಾರ್'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'kn-IN',
			language_name: 'ಕೋಮ್'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಕ್ಸಿಕಾ'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'kn-IN',
			language_name: 'ಅನೀ'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'kn-IN',
			language_name: 'ತೈ ಅಣೆಕಟ್ಟು'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'kn-IN',
			language_name: 'ಬಂಬಾರಾ'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'kn-IN',
			language_name: 'ಬಾಂಗ್ಲಾ'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'kn-IN',
			language_name: 'ಟಿಬೇಟಿಯನ್'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'kn-IN',
			language_name: 'ಬಿಷ್ಣುಪ್ರಿಯಾ'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'kn-IN',
			language_name: 'ಭಕ್ತಿಯಾರಿ'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ರೆಟನ್'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ರಜ್'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ರಾಹುಯಿ'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'kn-IN',
			language_name: 'ಬೋಡೊ'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'kn-IN',
			language_name: 'ಬೋಸ್ನಿಯನ್'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'kn-IN',
			language_name: 'ಅಕೂಸ್'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'kn-IN',
			language_name: 'ಬುರಿಯಟ್'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'kn-IN',
			language_name: 'ಬುಗಿನೀಸ್'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'kn-IN',
			language_name: 'ಬುಲು'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ಲಿನ್'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಡುಂಬಾ'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'kn-IN',
			language_name: 'ಕೆಟಲಾನ್'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಡ್ಡೋ'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರಿಬ್'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕಯುಗಾ'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'kn-IN',
			language_name: 'ಅಟ್ಸಮ್'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'kn-IN',
			language_name: 'ಚಕ್ಮಾ'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'kn-IN',
			language_name: 'ಚಚೆನ್'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'kn-IN',
			language_name: 'ಸೆಬುವಾನೊ'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಗಾ'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'kn-IN',
			language_name: 'ಕಮೊರೊ'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಬ್ಚಾ'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'kn-IN',
			language_name: 'ಚಗಟಾಯ್'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'kn-IN',
			language_name: 'ಚೂಕಿಸೆ'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'kn-IN',
			language_name: 'ಮಾರಿ'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'kn-IN',
			language_name: 'ಚಿನೂಕ್ ಜಾರ್ಗೋನ್'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'kn-IN',
			language_name: 'ಚೋಕ್ಟಾವ್'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಪೆವ್ಯಾನ್'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'kn-IN',
			language_name: 'ಚೆರೋಕಿ'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'kn-IN',
			language_name: 'ಚೀಯೆನ್ನೇ'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಕಾಸಾ'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಕುರ್ದಿಶ್'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಲ್ಕೋಟಿನ್'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'kn-IN',
			language_name: 'ಕೋರ್ಸಿಕನ್'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಪ್ಟಿಕ್'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಪಿಜ್ನಾನ್'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ರೀ'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮಿಚಿಫ್'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ರಿಮೀಯನ್ ಟರ್ಕಿಷ್'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಪೂರ್ವ ಕ್ರೀ'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ಲೇನ್ಸ್ ಕ್ರೀ'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಪೂರ್ವ ಕ್ರೀ'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮೂಸ್ ಕ್ರೀ'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'kn-IN',
			language_name: 'ಸೆಸೆಲ್ವಾ ಕ್ರಯೋಲ್ ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'kn-IN',
			language_name: 'ಜೆಕ್'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'kn-IN',
			language_name: 'ಕಶುಬಿಯನ್'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಾಂಪಿ ಕ್ರೀ'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'kn-IN',
			language_name: 'ಚರ್ಚ್ ಸ್ಲಾವಿಕ್'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'kn-IN',
			language_name: 'ಚರ್ಚ್ ಸ್ಲಾವಿಕ್'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'kn-IN',
			language_name: 'ಚುವಾಶ್'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'kn-IN',
			language_name: 'ವೆಲ್ಶ್'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'kn-IN',
			language_name: 'ಡ್ಯಾನಿಶ್'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'kn-IN',
			language_name: 'ಡಕೋಟಾ'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'kn-IN',
			language_name: 'ದರ್ಗ್ವಾ'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'kn-IN',
			language_name: 'ಟೈಟ'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'kn-IN',
			language_name: 'ಜರ್ಮನ್'
		},
		{
			locale_code: 'del-US',
			locale_id: 'kn-IN',
			language_name: 'ಡೆಲಾವೇರ್'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಲೇವ್'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'kn-IN',
			language_name: 'ಡೋಗ್ರಿಬ್'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'kn-IN',
			language_name: 'ಡಿಂಕಾ'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'kn-IN',
			language_name: 'ಜರ್ಮಾ'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'kn-IN',
			language_name: 'ಡೋಗ್ರಿ'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'kn-IN',
			language_name: 'ಲೋವರ್ ಸರ್ಬಿಯನ್'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'kn-IN',
			language_name: 'ಕೇಂದ್ರ ಡುಸುನ್'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'kn-IN',
			language_name: 'ಡುವಾಲಾ'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಡಚ್'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'kn-IN',
			language_name: 'ದಿವೆಹಿ'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'kn-IN',
			language_name: 'ಜೊಲ-ಫೊನ್ಯಿ'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'kn-IN',
			language_name: 'ಡ್ಯೂಲಾ'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'kn-IN',
			language_name: 'ಜೋಂಗ್‌ಖಾ'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'kn-IN',
			language_name: 'ಡಜಾಗ'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'kn-IN',
			language_name: 'ಎಂಬು'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'kn-IN',
			language_name: 'ಈವ್'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'kn-IN',
			language_name: 'ಎಫಿಕ್'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'kn-IN',
			language_name: 'ಎಮಿಲಿಯನ್'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಈಜಿಪ್ಟಿಯನ್'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'kn-IN',
			language_name: 'ಎಕಾಜುಕ್'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ರೀಕ್'
		},
		{
			locale_code: 'en-US',
			locale_id: 'kn-IN',
			language_name: 'ಅಮೆರಿಕನ್ ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-GB',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ರಿಟಿಷ್ ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-IN',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಇಂಗ್ಲೀಷ್'
		},
		{
			locale_code: 'es-ES',
			locale_id: 'kn-IN',
			language_name: 'ಯುರೋಪಿಯನ್ ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'esu-US',
			locale_id: 'kn-IN',
			language_name: 'ಸೆಂಟ್ರಲ್ ಯುಪಿಕ್'
		},
		{
			locale_code: 'et-EE',
			locale_id: 'kn-IN',
			language_name: 'ಎಸ್ಟೊನಿಯನ್'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'kn-IN',
			language_name: 'ಬಾಸ್ಕ್'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'kn-IN',
			language_name: 'ಇವಾಂಡೋ'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'kn-IN',
			language_name: 'ಎಕ್ಸ್ಟ್ರೆಮದುರಾನ್'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'kn-IN',
			language_name: 'ಪರ್ಶಿಯನ್'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'kn-IN',
			language_name: 'ಫಾಂಗ್'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'kn-IN',
			language_name: 'ಫುಲಾ'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'kn-IN',
			language_name: 'ಫುಲಾ'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'kn-IN',
			language_name: 'ಫಿನ್ನಿಶ್'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'kn-IN',
			language_name: 'ಫಿಲಿಪಿನೊ'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'kn-IN',
			language_name: 'ಟೋರ್ನೆಡಲೆನ್ ಫಿನ್ನಿಶ್'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'kn-IN',
			language_name: 'ಫಿಜಿಯನ್'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'kn-IN',
			language_name: 'ಫರೋಸಿ'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'kn-IN',
			language_name: 'ಫೋನ್'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'kn-IN',
			language_name: 'ಕಾಜುನ್ ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'kn-IN',
			language_name: 'ಅರ್ಪಿತಾನ್'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಫ್ರಿಸಿಯನ್'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'kn-IN',
			language_name: 'ಪೂರ್ವ ಫ್ರಿಸಿಯನ್'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರಿಯುಲಿಯನ್'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಫ್ರಿಸಿಯನ್'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'kn-IN',
			language_name: 'ಐರಿಷ್'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'kn-IN',
			language_name: 'ಗ'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'kn-IN',
			language_name: 'ಗಗೌಜ್'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'kn-IN',
			language_name: 'ಗಾನ್ ಚೀನೀಸ್'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'kn-IN',
			language_name: 'ಗಾಯೋ'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ಬಾಯಾ'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'kn-IN',
			language_name: 'ಝೋರಾಸ್ಟ್ರಿಯನ್ ಡಾರಿ'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಕಾಟಿಶ್ ಗೆಲಿಕ್'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'kn-IN',
			language_name: 'ಗೀಝ್'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'kn-IN',
			language_name: 'ಗಿಲ್ಬರ್ಟೀಸ್'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ಯಾಲಿಶಿಯನ್'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'kn-IN',
			language_name: 'ಗಿಲಾಕಿ'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಹೈ ಜರ್ಮನ್'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'kn-IN',
			language_name: 'ಗೌರಾನಿ'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಹೈ ಜರ್ಮನ್'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'kn-IN',
			language_name: 'ಗೊಂಡಿ'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'kn-IN',
			language_name: 'ಗೊರೊಂಟಾಲೋ'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'kn-IN',
			language_name: 'ಗೋಥಿಕ್'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ರೇಬೋ'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಗ್ರೀಕ್'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಿಸ್ ಜರ್ಮನ್'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'kn-IN',
			language_name: 'ಗುಜರಾತಿ'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'kn-IN',
			language_name: 'ವೇಯು'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರಾಫ್ರಾ'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'kn-IN',
			language_name: 'ಗುಸಿ'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಾಂಕ್ಸ್'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ವಿಚ್‌ಇನ್'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'kn-IN',
			language_name: 'ಹೌಸಾ'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'kn-IN',
			language_name: 'ಹೌಸಾ'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'kn-IN',
			language_name: 'ಹೌಸಾ'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'kn-IN',
			language_name: 'ಹೈಡಾ'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'kn-IN',
			language_name: 'ಹಕ್'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'kn-IN',
			language_name: 'ಹಕ್'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'kn-IN',
			language_name: 'ಹವಾಯಿಯನ್'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಹೈಡಾ'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'kn-IN',
			language_name: 'ಹೀಬ್ರೂ'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'kn-IN',
			language_name: 'ಹಿಂದಿ'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'kn-IN',
			language_name: 'ಫಿಜಿ ಹಿಂದಿ'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'kn-IN',
			language_name: 'ಹಿಲಿಗೇನನ್'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'kn-IN',
			language_name: 'ಹಿಟ್ಟಿಟೆ'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'kn-IN',
			language_name: 'ಮೋಂಗ್'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'kn-IN',
			language_name: 'ಹ್ಮಾಂಗ್ ನ್ಜುವಾ'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'kn-IN',
			language_name: 'ಹ್ಮಾಂಗ್ ನ್ಜುವಾ'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'kn-IN',
			language_name: 'ಹಿರಿ ಮೊಟು'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ರೊಯೇಶಿಯನ್'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'kn-IN',
			language_name: 'ಅಪ್ಪರ್ ಸರ್ಬಿಯನ್'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'kn-IN',
			language_name: 'ಶಯಾಂಗ್ ಚೀನೀಸೇ'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'kn-IN',
			language_name: 'ಹೈಟಿಯನ್ ಕ್ರಿಯೋಲಿ'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'kn-IN',
			language_name: 'ಹಂಗೇರಿಯನ್'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'kn-IN',
			language_name: 'ಹೂಪಾ'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'kn-IN',
			language_name: 'ಹಾಲ್ಕೊಮೆಲೆಮ್'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'kn-IN',
			language_name: 'ಅರ್ಮೇನಿಯನ್'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'kn-IN',
			language_name: 'ಹೆರೆರೊ'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'kn-IN',
			language_name: 'ಇಬಾನ್'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'kn-IN',
			language_name: 'ಇಬಿಬಿಯೋ'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಡೋನೇಶಿಯನ್'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಟರ್‌ಲಿಂಗ್'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'kn-IN',
			language_name: 'ಇಗ್ಬೊ'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಚುಅನ್ ಯಿ'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'kn-IN',
			language_name: 'ಇನುಪಿಯಾಕ್'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಕೆನಡಿಯನ್ ಇನುಕ್ಟಿಟುಟ್'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'kn-IN',
			language_name: 'ಇಲ್ಲಿಕೋ'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗುಷ್'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'kn-IN',
			language_name: 'ಐಸ್‌ಲ್ಯಾಂಡಿಕ್'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'kn-IN',
			language_name: 'ಇಟಾಲಿಯನ್'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'kn-IN',
			language_name: 'ಇನುಕ್ಟಿಟುಟ್'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ರಿಯನ್'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'kn-IN',
			language_name: 'ಜಾಪನೀಸ್'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'kn-IN',
			language_name: 'ಜಮೈಕನ್ ಕ್ರಿಯೋಲ್ ಇಂಗ್ಲೀಷ್'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'kn-IN',
			language_name: 'ನೊಂಬಾ'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಕಮೆ'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'kn-IN',
			language_name: 'ಜೂಡಿಯೋ-ಪರ್ಶಿಯನ್'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'kn-IN',
			language_name: 'ಜೂಡಿಯೋ-ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'kn-IN',
			language_name: 'ಜುತಿಶ್'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'kn-IN',
			language_name: 'ಜಾವಾನೀಸ್'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'kn-IN',
			language_name: 'ಜಾರ್ಜಿಯನ್'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರಾ-ಕಲ್ಪಾಕ್'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'kn-IN',
			language_name: 'ಕಬೈಲ್'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'kn-IN',
			language_name: 'ಕಚಿನ್'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'kn-IN',
			language_name: 'ಜ್ಜು'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'kn-IN',
			language_name: 'ಕಂಬಾ'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'kn-IN',
			language_name: 'ಕಾವಿ'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕಬರ್ಡಿಯನ್'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'kn-IN',
			language_name: 'ಕಣೆಂಬು'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'kn-IN',
			language_name: 'ಟ್ಯಾಪ್'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಾಕೊಂಡ್'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'kn-IN',
			language_name: 'ಕಬುವೆರ್ಡಿಯನು'
		},
		{
			locale_code: 'kek-GT',
			locale_id: 'kn-IN',
			language_name: 'Qʼeqchiʼ'
		},
		{
			locale_code: 'ken-CM',
			locale_id: 'kn-IN',
			language_name: 'ಕೀನ್ಯಾಂಗ್'
		},
		{
			locale_code: 'kfo-CI',
			locale_id: 'kn-IN',
			language_name: 'ಕೋರೋ'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'kn-IN',
			language_name: 'ಕಾಂಗೋ'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'kn-IN',
			language_name: 'ಕೈಗಂಗ್'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'kn-IN',
			language_name: 'ಖಾಸಿ'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'kn-IN',
			language_name: 'ಖೋಟಾನೀಸ್'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಯ್ರ ಚೀನಿ'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'kn-IN',
			language_name: 'ಖೋವರ್'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'kn-IN',
			language_name: 'ಕಿಕುಯು'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'kn-IN',
			language_name: 'ಕಿರ್ಮಾಂಜ್ಕಿ'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ವಾನ್‌ಯಾಮಾ'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'kn-IN',
			language_name: 'ಕಾಕೊ'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'kn-IN',
			language_name: 'ಕಲಾಲ್ಲಿಸುಟ್'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'kn-IN',
			language_name: 'ಕಲೆಂಜಿನ್'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'kn-IN',
			language_name: 'ಖಮೇರ್'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'kn-IN',
			language_name: 'ಕಿಂಬುಂಡು'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕನ್ನಡ'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'kn-IN',
			language_name: 'ಕೊರಿಯನ್'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕೋಮಿ-ಪರ್ಮ್ಯಕ್'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಂಕಣಿ'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಸರಿಯನ್'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'kn-IN',
			language_name: 'ಕಪೆಲ್ಲೆ'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'kn-IN',
			language_name: 'ಕನುರಿ'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕರಚಯ್-ಬಲ್ಕಾರ್'
		},
		{
			locale_code: 'kri-SL',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ರಿಯೋ'
		},
		{
			locale_code: 'krj-PH',
			locale_id: 'kn-IN',
			language_name: 'ಕಿನಾರೆ-ಎ'
		},
		{
			locale_code: 'krl-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕರೇಲಿಯನ್'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕುರುಖ್'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕಾಶ್ಮೀರಿ'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಶಂಬಲ'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'kn-IN',
			language_name: 'ಬಫಿಯ'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'kn-IN',
			language_name: 'ಕಲೊಗ್ನಿಯನ್'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕುಮೈಕ್'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕುಟೇನಾಯ್'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕೋಮಿ'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರ್ನಿಷ್'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ವಾಕ್‌ವಾಲಾ'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕುವಿ'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'kn-IN',
			language_name: 'ಕಿರ್ಗಿಜ್'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'kn-IN',
			language_name: 'ಕಿರ್ಗಿಜ್'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'kn-IN',
			language_name: 'ಕಿರ್ಗಿಜ್'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'kn-IN',
			language_name: 'ಲ್ಯಾಟಿನ್'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'kn-IN',
			language_name: 'ಲ್ಯಾಡಿನೋ'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಲಾಂಗಿ'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'kn-IN',
			language_name: 'ಲಹಂಡಾ'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'kn-IN',
			language_name: 'ಲಂಬಾ'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'kn-IN',
			language_name: 'ಲಕ್ಸಂಬರ್ಗಿಷ್'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'kn-IN',
			language_name: 'ಲೆಜ್ಘಿಯನ್'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'kn-IN',
			language_name: 'ಗಾಂಡಾ'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಂಬರ್ಗಿಶ್'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಗುರಿಯನ್'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಲ್ಲೂವೆಟ್'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'kn-IN',
			language_name: 'ಲಿವೊನಿಯನ್'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'kn-IN',
			language_name: 'ಲಕೊಟ'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'kn-IN',
			language_name: 'ಲೋಂಬರ್ಡ್'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಂಗಾಲ'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'kn-IN',
			language_name: 'ಲಾವೋ'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'kn-IN',
			language_name: 'ಮೊಂಗೋ'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'kn-IN',
			language_name: 'ಲೂಯಿಸಿಯಾನ ಕ್ರಿಯೋಲ್'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'kn-IN',
			language_name: 'ಲೋಝಿ'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಲೂರಿ'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'kn-IN',
			language_name: 'ಸಾಮಿಯಾ'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಥುವೇನಿಯನ್'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'kn-IN',
			language_name: 'ಲಾಟ್ಗಾಲಿಯನ್'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'kn-IN',
			language_name: 'ಲೂಬಾ-ಕಟಾಂಗಾ'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'kn-IN',
			language_name: 'ಲುಬ-ಲುಲಾ'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'kn-IN',
			language_name: 'ಲೂಯಿಸೆನೋ'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'kn-IN',
			language_name: 'ಲುಂಡಾ'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'kn-IN',
			language_name: 'ಲುವೋ'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಿಝೋ'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'kn-IN',
			language_name: 'ಲುಯಿಯ'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'kn-IN',
			language_name: 'ಲಾಟ್ವಿಯನ್'
		},
		{
			locale_code: 'lzh-CN',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ ಸಾಹಿತ್ಯ'
		},
		{
			locale_code: 'lzz-TR',
			locale_id: 'kn-IN',
			language_name: 'ಲಾಜ್'
		},
		{
			locale_code: 'lzz-GE',
			locale_id: 'kn-IN',
			language_name: 'ಲಾಜ್'
		},
		{
			locale_code: 'mad-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮದುರೀಸ್'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'kn-IN',
			language_name: 'ಮಾಫಾ'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಗಾಹಿ'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮೈಥಿಲಿ'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮಕಾಸರ್'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಡಿಂಗೊ'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಡಿಂಗೊ'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'kn-IN',
			language_name: 'ಮಸಾಯ್'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'kn-IN',
			language_name: 'ಮಾಬಾ'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'kn-IN',
			language_name: 'ಮೋಕ್ಷ'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮಂದಾರ್'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಂಡೆ'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'kn-IN',
			language_name: 'ಮೆರು'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'kn-IN',
			language_name: 'ಮೊರಿಸನ್'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಗಾಸಿ'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಐರಿಷ್'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಖುವಾ- ಮೀಟ್ಟೊ'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಟಾ'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'kn-IN',
			language_name: 'ಮಾರ್ಶಲ್ಲೀಸ್'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'kn-IN',
			language_name: 'ಮಾವೋರಿ'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮಿಕ್‌ಮ್ಯಾಕ್'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮಿನಂಗ್‌ಕಬಾವು'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಸಿಡೋನಿಯನ್'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯಾಳಂ'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಗೋಲಿಯನ್'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಗೋಲಿಯನ್'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಚು'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಣಿಪುರಿ'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'kn-IN',
			language_name: 'ಇನ್ನು-ಐಮುನ್'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮೊಹಾವ್ಕ್'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'kn-IN',
			language_name: 'ಮೊಸ್ಸಿ'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮರಾಠಿ'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಮಾರಿ'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯ್'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯ್'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'kn-IN',
			language_name: 'ಮಾಲ್ಟೀಸ್'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'kn-IN',
			language_name: 'ಮುಂಡಂಗ್'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ರೀಕ್'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'kn-IN',
			language_name: 'ಮಿರಾಂಡೀಸ್'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಾರ್ವಾಡಿ'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಂಟವಾಯಿ'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'kn-IN',
			language_name: 'ಬರ್ಮೀಸ್'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'kn-IN',
			language_name: 'ಮೈನೆ'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'kn-IN',
			language_name: 'ಎರ್ಝ್ಯಾ'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'kn-IN',
			language_name: 'ಮಜಂದೆರಾನಿ'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'kn-IN',
			language_name: 'ನೌರು'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'kn-IN',
			language_name: 'ನಾನ್'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'kn-IN',
			language_name: 'ನಾನ್'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'kn-IN',
			language_name: 'ನಾನ್'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'kn-IN',
			language_name: 'ನಿಯಾಪೊಲಿಟನ್'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'kn-IN',
			language_name: 'ನಮ'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೆಜಿಯನ್ ಬೊಕ್ಮಲ್'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ದೆಬೆಲೆ'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'kn-IN',
			language_name: 'ಲೋ ಜರ್ಮನ್'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'kn-IN',
			language_name: 'ನೇಪಾಳಿ'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'kn-IN',
			language_name: 'ನೇವಾರೀ'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'kn-IN',
			language_name: 'ಡೋಂಗಾ'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'kn-IN',
			language_name: 'ನಿಯಾಸ್'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'kn-IN',
			language_name: 'ನಿಯುವನ್'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'kn-IN',
			language_name: 'ಅಯೋ ನಾಗಾ'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'kn-IN',
			language_name: 'ಡಚ್'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'kn-IN',
			language_name: 'ಖ್ವಾಸಿಯೊ'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೇಜಿಯನ್ ನೈನಾರ್ಸ್ಕ್'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'kn-IN',
			language_name: 'ನಿಂಬೂನ್'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೇಜಿಯನ್'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'kn-IN',
			language_name: 'ನೊಗಾಯ್'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ನೋರ್ಸ್'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'kn-IN',
			language_name: 'ಎನ್‌ಕೋ'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ದೆಬೆಲೆ'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಸೋಥೋ'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'kn-IN',
			language_name: 'ನೂಯರ್'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'kn-IN',
			language_name: 'ನವಾಜೊ'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'kn-IN',
			language_name: 'ಶಾಸ್ತ್ರೀಯ ನೇವಾರಿ'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾಂಜಾ'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾಮ್‌ವೆಂಜಿ'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾನ್‌ಕೋಲೆ'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯೋರೋ'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'kn-IN',
			language_name: 'ಜೀಮಾ'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'kn-IN',
			language_name: 'ಒಸಿಟನ್'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'kn-IN',
			language_name: 'ಒಜಿಬ್ವಾ'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'kn-IN',
			language_name: 'ವಾಯುವ್ಯ ಓಜಿಬ್ವಾ'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಓಜಿಬ್ವಾ'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'kn-IN',
			language_name: 'ಓಜಿ-ಕ್ರೀ'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಓಜಿಬ್ವಾ'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'kn-IN',
			language_name: 'ಒಕನಾಗನ್'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'kn-IN',
			language_name: 'ಒರೊಮೊ'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'kn-IN',
			language_name: 'ಒಡಿಯ'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'kn-IN',
			language_name: 'ಒಸ್ಸೆಟಿಕ್'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'kn-IN',
			language_name: 'ಓಸಾಜ್'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'kn-IN',
			language_name: 'ಒಟ್ಟೋಮನ್ ತುರ್ಕಿಷ್'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'kn-IN',
			language_name: 'ಪಂಜಾಬಿ'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'kn-IN',
			language_name: 'ಪಂಜಾಬಿ'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'kn-IN',
			language_name: 'ಪಂಗಾಸಿನನ್'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'kn-IN',
			language_name: 'ಪಹ್ಲವಿ'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'kn-IN',
			language_name: 'ಪಹ್ಲವಿ'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'kn-IN',
			language_name: 'ಪಂಪಾಂಗಾ'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'kn-IN',
			language_name: 'ಪಪಿಯಾಮೆಂಟೊ'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'kn-IN',
			language_name: 'ಪಲುಆನ್'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'kn-IN',
			language_name: 'ಪಿಕಾರ್ಡ್'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'kn-IN',
			language_name: 'ನೈಜೀರಿಯನ್ ಪಿಡ್ಗಿನ್'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'kn-IN',
			language_name: 'ಪೆನ್ಸಿಲ್ವೇನಿಯಾ ಜರ್ಮನ್'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ಲಾಟ್ಡಿಚ್'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಪರ್ಶಿಯನ್'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ಯಾಲಟೈನ್ ಜರ್ಮನ್'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'kn-IN',
			language_name: 'ಫೀನಿಷಿಯನ್'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'kn-IN',
			language_name: 'ಪಿಜಿನ್'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'kn-IN',
			language_name: 'ಪೊಲಿಶ್'
		},
		{
			locale_code: 'pms-IT',
			locale_id: 'kn-IN',
			language_name: 'ಪೀಡ್ಮಾಂಟೆಸ್'
		},
		{
			locale_code: 'pnt-GR',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಂಟಿಕ್'
		},
		{
			locale_code: 'pnt-RU',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಂಟಿಕ್'
		},
		{
			locale_code: 'pnt-TR',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಂಟಿಕ್'
		},
		{
			locale_code: 'pon-FM',
			locale_id: 'kn-IN',
			language_name: 'ಪೋನ್‌‌ಪಿಯನ್'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಾಲಿಸೀಟ್-ಪಸ್ಸಾಮಕ್ವಾಡ್ಡಿ'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಶಿಯನ್'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಪ್ರೊವೆನ್ಶಿಯಲ್'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಷ್ಟೋ'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ರೆಜಿಲಿಯನ್ ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ವೆಚುವಾ'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'kn-IN',
			language_name: 'ಕಿಷೆ'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಂಬೊರಾಜೊ ಹೈಲ್ಯಾಂಡ್ ಕ್ವಿಚುವಾ'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'kn-IN',
			language_name: 'ರಾಜಸ್ಥಾನಿ'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'kn-IN',
			language_name: 'ರಾಪಾನುಯಿ'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'kn-IN',
			language_name: 'ರಾರೋಟೊಂಗನ್'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'kn-IN',
			language_name: 'ರೊಮ್ಯಾಗ್ನಾಲ್'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'kn-IN',
			language_name: 'ರೋಹಿಂಗ್ಯಾ'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'kn-IN',
			language_name: 'ರಿಫಿಯನ್'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'kn-IN',
			language_name: 'ರೊಮಾನ್ಶ್'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'kn-IN',
			language_name: 'ರುಂಡಿ'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'kn-IN',
			language_name: 'ರೊಮೇನಿಯನ್'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'kn-IN',
			language_name: 'ರೊಂಬೊ'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'kn-IN',
			language_name: 'ರೋಮಾನಿ'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'kn-IN',
			language_name: 'ರೋಟುಮನ್'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'kn-IN',
			language_name: 'ರಷ್ಯನ್'
		},
		{
			locale_code: 'rue-UA',
			locale_id: 'kn-IN',
			language_name: 'ರುಸಿನ್'
		},
		{
			locale_code: 'rug-SB',
			locale_id: 'kn-IN',
			language_name: 'ರೊವಿಯಾನಾ'
		},
		{
			locale_code: 'rup-RO',
			locale_id: 'kn-IN',
			language_name: 'ಅರೋಮಾನಿಯನ್'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'kn-IN',
			language_name: 'ಕಿನ್ಯಾರ್‌ವಾಂಡಾ'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'kn-IN',
			language_name: 'ರುವ'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'kn-IN',
			language_name: 'ಸಂಸ್ಕೃತ'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಸಂಡಾವೇ'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'kn-IN',
			language_name: 'ಸಖಾ'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'kn-IN',
			language_name: 'ಸಮರಿಟನ್ ಅರಾಮಿಕ್'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'kn-IN',
			language_name: 'ಸಂಬುರು'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'kn-IN',
			language_name: 'ಸಸಾಕ್'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'kn-IN',
			language_name: 'ಸಂತಾಲಿ'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'kn-IN',
			language_name: 'ಸೌರಾಷ್ಟ್ರ'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'kn-IN',
			language_name: 'ನಂಬೇ'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಸಂಗು'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'kn-IN',
			language_name: 'ಸರ್ಡೀನಿಯನ್'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಸಿಲಿಯನ್'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಕೋಟ್ಸ್'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಂಧಿ'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಂಧಿ'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'kn-IN',
			language_name: 'ಸಸಾರೆಸೆ ಸಾರ್ಡಿನಿಯನ್'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಕುರ್ದಿಶ್'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಸಾಮಿ'
		},
		{
			locale_code: 'see-US',
			locale_id: 'kn-IN',
			language_name: 'ಸೆನೆಕಾ'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'kn-IN',
			language_name: 'ಸೆನ'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'kn-IN',
			language_name: 'ಸೀರಿ'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'kn-IN',
			language_name: 'ಸೆಲ್ಕಪ್'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಯ್ರಬೊರೊ ಸೆನ್ನಿ'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'kn-IN',
			language_name: 'ಸಾಂಗೋ'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಐರಿಷ್'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'kn-IN',
			language_name: 'ಸಮೋಗಿಟಿಯನ್'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'kn-IN',
			language_name: 'ಟಷೆಲ್‍ಹಿಟ್'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'kn-IN',
			language_name: 'ಶಾನ್'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'kn-IN',
			language_name: 'ಚಾಡಿಯನ್ ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಂಹಳ'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಡಾಮೋ'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಲೋವಾಕ್'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಲೋವೇನಿಯನ್'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಲುಶೂಟ್‌ಸೀಡ್'
		},
		{
			locale_code: 'sli-PL',
			locale_id: 'kn-IN',
			language_name: 'ಲೋವರ್ ಸಿಲೇಸಿಯನ್'
		},
		{
			locale_code: 'sly-ID',
			locale_id: 'kn-IN',
			language_name: 'ಸೆಲಯರ್'
		},
		{
			locale_code: 'sm-WS',
			locale_id: 'kn-IN',
			language_name: 'ಸಮೋವನ್'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಸಾಮಿ'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'kn-IN',
			language_name: 'ಲೂಲ್ ಸಾಮಿ'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'kn-IN',
			language_name: 'ಇನಾರಿ ಸಮೀ'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಕೋಟ್ ಸಾಮಿ'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'kn-IN',
			language_name: 'ಶೋನಾ'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'kn-IN',
			language_name: 'ಸೋನಿಂಕೆ'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'kn-IN',
			language_name: 'ಸೊಮಾಲಿ'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'kn-IN',
			language_name: 'ಸೋಗ್ಡಿಯನ್'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'kn-IN',
			language_name: 'ಅಲ್ಬೇನಿಯನ್'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ರಾನನ್ ಟೋಂಗೋ'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'kn-IN',
			language_name: 'ಸೇರೇರ್'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಾತಿ'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'kn-IN',
			language_name: 'ಸಹೊ'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಸೋಥೋ'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಯಾಟರ್ಲ್ಯಾಂಡ್ ಫ್ರಿಸಿಯನ್'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಟ್ರೇಟ್ಸ್ ಸೆಲಿಶ್'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'kn-IN',
			language_name: 'ಸುಂಡಾನೀಸ್'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಸುಕುಮಾ'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'kn-IN',
			language_name: 'ಸುಸು'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವೀಡಿಷ್'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಹಿಲಿ'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಮೊರಿಯನ್'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'kn-IN',
			language_name: 'ಶಾಸ್ತ್ರೀಯ ಸಿರಿಯಕ್'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಸಿರಿಯಾಕ್'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಲೆಸಿಯನ್'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'kn-IN',
			language_name: 'ತಮಿಳು'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಟಚ್‌ವನ್'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'kn-IN',
			language_name: 'ತುಳು'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'kn-IN',
			language_name: 'ತೆಲುಗು'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'kn-IN',
			language_name: 'ಟಿಮ್ನೆ'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'kn-IN',
			language_name: 'ಟೆಸೊ'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'kn-IN',
			language_name: 'ಟೆರೆನೋ'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'kn-IN',
			language_name: 'ಟೇಟಮ್'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'kn-IN',
			language_name: 'ತಾಜಿಕ್'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'kn-IN',
			language_name: 'ತಾಜಿಕ್'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'kn-IN',
			language_name: 'ಟಾಗಿಶ್'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'kn-IN',
			language_name: 'ಥಾಯ್'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'kn-IN',
			language_name: 'ಟಾಹ್ಲ್ಟನ್'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'kn-IN',
			language_name: 'ಟಿಗ್ರಿನ್ಯಾ'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'kn-IN',
			language_name: 'ಟೈಗ್ರೆ'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'kn-IN',
			language_name: 'ಟಿವ್'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕ್‌ಮೆನ್'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'kn-IN',
			language_name: 'ಟೊಕೆಲಾವ್'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'kn-IN',
			language_name: 'ತ್ಸಖೂರ್'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'kn-IN',
			language_name: 'ಫಿಲಿಪಿನೊ'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'kn-IN',
			language_name: 'ಟ್ಲಿಂಗಿಟ್'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'kn-IN',
			language_name: 'ತಾಲಿಶ್'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'kn-IN',
			language_name: 'ಟಮಾಷೆಕ್'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಾನಾ'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'kn-IN',
			language_name: 'ಟೋಂಗನ್'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾಸಾ ಟೋಂಗಾ'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'kn-IN',
			language_name: 'ಟೋಕ್ ಪಿಸಿನ್'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕಿಶ್'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'kn-IN',
			language_name: 'ತುರೊಯೊ'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'kn-IN',
			language_name: 'ಟರೊಕೊ'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'kn-IN',
			language_name: 'ತೋರ್ವಾಲಿ'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಸೋಂಗಾ'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'kn-IN',
			language_name: 'ತ್ಸಾಕೋನಿಯನ್'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಂಶಿಯನ್'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'kn-IN',
			language_name: 'ಟಾಟರ್'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಟಚ್‌ವನ್'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'kn-IN',
			language_name: 'ಮುಸ್ಲಿಂ ಟಾಟ್'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'kn-IN',
			language_name: 'ತುಂಬುಕಾ'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'kn-IN',
			language_name: 'ಟುವಾಲು'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'kn-IN',
			language_name: 'ಟಸವಕ್'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'kn-IN',
			language_name: 'ಟಹೀಟಿಯನ್'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'kn-IN',
			language_name: 'ಟುವಿನಿಯನ್'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಅಟ್ಲಾಸ್ ಟಮಜೈಟ್'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'kn-IN',
			language_name: 'ಉಡ್‌ಮುರ್ಟ್'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'kn-IN',
			language_name: 'ಉಯಿಘರ್'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'kn-IN',
			language_name: 'ಉಯಿಘರ್'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'kn-IN',
			language_name: 'ಉಯಿಘರ್'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'kn-IN',
			language_name: 'ಉಗಾರಿಟಿಕ್'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'kn-IN',
			language_name: 'ಉಕ್ರೇನಿಯನ್'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'kn-IN',
			language_name: 'ಉಂಬುಂಡು'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'kn-IN',
			language_name: 'ಕೆಟಲಾನ್'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'kn-IN',
			language_name: 'ದರಿ'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯ್'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'kn-IN',
			language_name: 'ಉರ್ದು'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯ್'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'kn-IN',
			language_name: 'ಉರ್ದು'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'kn-IN',
			language_name: 'ಉರ್ದು'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'kn-IN',
			language_name: 'ಉರ್ದು'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'kn-IN',
			language_name: 'ಪರ್ಶಿಯನ್'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'kn-IN',
			language_name: 'ಸಮೋವನ್'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'kn-IN',
			language_name: 'ಆಸ್ಟ್ರಿಯನ್ ಜರ್ಮನ್'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'kn-IN',
			language_name: 'ಡಚ್'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವೀಡಿಷ್'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ಲೆಮಿಷ್'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'kn-IN',
			language_name: 'ಪಪಿಯಾಮೆಂಟೊ'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೇಜಿಯನ್'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'kn-IN',
			language_name: 'ರಷ್ಯನ್'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಿಸ್ ಹೈ ಜರ್ಮನ್'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'kn-IN',
			language_name: 'root'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ರೀಕ್'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರಾ-ಕಲ್ಪಾಕ್'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಸಿಡೋನಿಯನ್'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಸಿಡೋನಿಯನ್'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರಾ-ಕಲ್ಪಾಕ್'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'kn-IN',
			language_name: 'ಉಕ್ರೇನಿಯನ್'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'kn-IN',
			language_name: 'ಬಲ್ಗೇರಿಯನ್'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'kn-IN',
			language_name: 'ಉಕ್ರೇನಿಯನ್'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'kn-IN',
			language_name: 'ಕಬರ್ಡಿಯನ್'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'kn-IN',
			language_name: 'ಉಜ್ಬೇಕ್'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'kn-IN',
			language_name: 'ನೇಪಾಳಿ'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'kn-IN',
			language_name: 'ಭೋಜಪುರಿ'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'kn-IN',
			language_name: 'ಟಿಗ್ರಿನ್ಯಾ'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'kn-IN',
			language_name: 'ವೋಲೋಫ್'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಂಟನೀಸ್'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಂಟನೀಸ್'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'kn-IN',
			language_name: 'ಯಿಡ್ಡಿಶ್'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'kn-IN',
			language_name: 'ಯಿಡ್ಡಿಶ್'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'kn-IN',
			language_name: 'ಯಿಡ್ಡಿಶ್'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'kn-IN',
			language_name: 'ಹ್ಮಾಂಗ್ ನ್ಜುವಾ'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'kn-IN',
			language_name: 'ಹ್ಮಾಂಗ್ ನ್ಜುವಾ'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'kn-IN',
			language_name: 'ಹ್ಮಾಂಗ್ ನ್ಜುವಾ'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'kn-IN',
			language_name: 'ಹ್ಮಾಂಗ್ ನ್ಜುವಾ'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'kn-IN',
			language_name: 'ಹ್ಮಾಂಗ್ ನ್ಜುವಾ'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'kn-IN',
			language_name: 'ಹ್ಮಾಂಗ್ ನ್ಜುವಾ'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಹಿಲಿ'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'kn-IN',
			language_name: 'ಕೊರಿಯನ್'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'kn-IN',
			language_name: 'ರಷ್ಯನ್'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕ್‌ಮೆನ್'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'kn-IN',
			language_name: 'ಝೂವಾಂಗ್'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕಿಶ್'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕ್‌ಮೆನ್'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'kn-IN',
			language_name: 'ಅಲ್ಬೇನಿಯನ್'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'kn-IN',
			language_name: 'ಪೊಲಿಶ್'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'kn-IN',
			language_name: 'ಜರ್ಮನ್'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಸೋಥೋ'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'kn-IN',
			language_name: 'ಮಾಲ್ಡೇವಿಯನ್'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಕ್ಸಿಕನ್ ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'kn-IN',
			language_name: 'ಆಫ್ರಿಕಾನ್ಸ್'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'kn-IN',
			language_name: 'ಹೌಸಾ'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'kn-IN',
			language_name: 'ಯೂರೋಪಿಯನ್ ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೆಜಿಯನ್ ಬೊಕ್ಮಲ್'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'kn-IN',
			language_name: 'ಇಟಾಲಿಯನ್'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'kn-IN',
			language_name: 'ಡಚ್'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಮೊರೊಕ್ಕನ್ ಟಮಜೈಟ್'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಹಿಲಿ'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'kn-IN',
			language_name: 'ಇಟಾಲಿಯನ್'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'kn-IN',
			language_name: 'ವಾಯಿ'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'kn-IN',
			language_name: 'ವಿಯೆಟ್ನಾಮೀಸ್'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'kn-IN',
			language_name: 'ಉಜ್ಬೇಕ್'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'kn-IN',
			language_name: 'ಉಜ್ಬೇಕ್'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'kn-IN',
			language_name: 'ವೆಂಡಾ'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'kn-IN',
			language_name: 'ವೆನಿಶಿಯನ್'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'kn-IN',
			language_name: 'ವೆಪ್ಸ್'
		},
		{
			locale_code: 'vls-BE',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಫ್ಲೆಮಿಶ್'
		},
		{
			locale_code: 'vmf-DE',
			locale_id: 'kn-IN',
			language_name: 'ಮುಖ್ಯ-ಫ್ರಾಂಕೋನಿಯನ್'
		},
		{
			locale_code: 'vmw-MZ',
			locale_id: 'kn-IN',
			language_name: 'ಮಖುವಾ'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'kn-IN',
			language_name: 'ವೋಟಿಕ್'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'kn-IN',
			language_name: 'ವೊರೊ'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'kn-IN',
			language_name: 'ವುಂಜೊ'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'kn-IN',
			language_name: 'ವಾಲೂನ್'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'kn-IN',
			language_name: 'ವಾಲ್ಸರ್'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'kn-IN',
			language_name: 'ವಲಾಯ್ತಾ'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'kn-IN',
			language_name: 'ವರಾಯ್'
		},
		{
			locale_code: 'was-US',
			locale_id: 'kn-IN',
			language_name: 'ವಾಷೋ'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'kn-IN',
			language_name: 'ವಾರ್ಲ್‌ಪಿರಿ'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'kn-IN',
			language_name: 'ವು ಚೈನೀಸ್'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕಲ್ಮೈಕ್'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಸೋಸ'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'kn-IN',
			language_name: 'ಮಿಂಗ್ರೇಲಿಯನ್'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕಂಗ್ರಿ'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'kn-IN',
			language_name: 'ಸೊಗ'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'kn-IN',
			language_name: 'ಯಾವೊ'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'kn-IN',
			language_name: 'ಯಪೀಸೆ'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'kn-IN',
			language_name: 'ಯಾಂಗ್ಬೆನ್'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'kn-IN',
			language_name: 'ಯೆಂಬಾ'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'kn-IN',
			language_name: 'ಯೊರುಬಾ'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'kn-IN',
			language_name: 'ನಿಂಗಾಟು'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಂಟನೀಸ್'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'kn-IN',
			language_name: 'ಝೋಪೊಟೆಕ್'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'kn-IN',
			language_name: 'ಝೀಲ್ಯಾಂಡಿಕ್'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'kn-IN',
			language_name: 'ಝೆನಾಗಾ'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಜುಲು'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'kn-IN',
			language_name: 'ಝೂನಿ'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'kn-IN',
			language_name: 'ಜಾಝಾ'
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
