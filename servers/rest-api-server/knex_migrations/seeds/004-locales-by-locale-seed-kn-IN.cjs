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
			language_name: 'ಅಫಾರ್ (ಇಥಿಯೋಪಿಯಾ)'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'kn-IN',
			language_name: 'ಅಬ್ಖಾಜಿಯನ್ (ಜಾರ್ಜಿಯಾ)'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'kn-IN',
			language_name: 'ಅಛಿನೀಸ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'kn-IN',
			language_name: 'ಅಕೋಲಿ (ಉಗಾಂಡಾ)'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'kn-IN',
			language_name: 'ಅಡಂಗ್ಮೆ (ಘಾನಾ)'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'kn-IN',
			language_name: 'ಅಡೈಘೆ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'kn-IN',
			language_name: 'ಅವೆಸ್ಟನ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'kn-IN',
			language_name: 'ಟುನೀಶಿಯನ್ ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಆಫ್ರಿಕಾನ್ಸ್ (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'kn-IN',
			language_name: 'ಆಫ್ರಿಹಿಲಿ (ಘಾನಾ)'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'kn-IN',
			language_name: 'ಅಘೆಮ್ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'kn-IN',
			language_name: 'ಐನು (ಜಪಾನ್)'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'kn-IN',
			language_name: 'ಅಕಾನ್ (ಘಾನಾ)'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಅಕ್ಕಾಡಿಯನ್ (ಇರಾಕ್)'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'kn-IN',
			language_name: 'ಅಲಬಾಮಾ'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'kn-IN',
			language_name: 'ಅಲೆಯುಟ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಅಲ್ಟಾಯ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'kn-IN',
			language_name: 'ಅಂಹರಿಕ್ (ಇಥಿಯೋಪಿಯಾ)'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'kn-IN',
			language_name: 'ಅರಗೊನೀಸ್ (ಸ್ಪೇನ್)'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಇಂಗ್ಲೀಷ್ (ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್)'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'kn-IN',
			language_name: 'ಒಬೊಲೊ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'kn-IN',
			language_name: 'ಆಂಗಿಕಾ (ಭಾರತ)'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಈಜಿಪ್ಟ್)'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾಮಿಕ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾಮಿಕ್ (ಇರಾಕ್)'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾಮಿಕ್ (ಜೋರ್ಡಾನ್)'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾಮಿಕ್ (ಸಿರಿಯಾ)'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'kn-IN',
			language_name: 'ಮಪುಚೆ (ಚಿಲಿ)'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'kn-IN',
			language_name: 'ಅರೋನಾ'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'kn-IN',
			language_name: 'ಅರಪಾಹೋ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'kn-IN',
			language_name: 'ಅಲ್ಜೀರಿಯನ್ ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾಜ್ಡಿ ಅರೇಬಿಕ್ (ಸೌದಿ ಅರೇಬಿಯಾ)'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'kn-IN',
			language_name: 'ಅರಾವಾಕ್ (ಸುರಿನಾಮ್)'
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
			language_name: 'ಅಸ್ಸಾಮೀಸ್ (ಭಾರತ)'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಅಸು (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'kn-IN',
			language_name: 'ಅಮೇರಿಕನ್ ಸಂಕೇತ ಭಾಷೆ'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'kn-IN',
			language_name: 'ಆಸ್ಟುರಿಯನ್ (ಸ್ಪೇನ್)'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'kn-IN',
			language_name: 'ಅತಿಕಮೆಕ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'kn-IN',
			language_name: 'ಅವರಿಕ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'kn-IN',
			language_name: 'ಅವಧಿ (ಭಾರತ)'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'kn-IN',
			language_name: 'ಅಯ್ಮಾರಾ (ಬೊಲಿವಿಯಾ)'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'kn-IN',
			language_name: 'ಅಜೆರ್ಬೈಜಾನಿ (ಅಜರ್ಬೈಜಾನ್)'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'kn-IN',
			language_name: 'ಅಜೆರ್ಬೈಜಾನಿ (ಇರಾನ್)'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಅಜೆರ್ಬೈಜಾನಿ (ಇರಾಕ್)'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'kn-IN',
			language_name: 'ಅಜೆರ್ಬೈಜಾನಿ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'kn-IN',
			language_name: 'ಬಶ್ಕಿರ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'kn-IN',
			language_name: 'ಬಲೂಚಿ (ಪಾಕಿಸ್ತಾನ)'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'kn-IN',
			language_name: 'ಬಲಿನೀಸ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'kn-IN',
			language_name: 'ಬವೇರಿಯನ್'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'kn-IN',
			language_name: 'ಬಸಾ (ಕ್ಯಾಮರೂನ್)'
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
			language_name: 'ಬೆಲರೂಸಿಯನ್ (ಬೆಲಾರಸ್)'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'kn-IN',
			language_name: 'ಬೇಜಾ (ಸುಡಾನ್)'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'kn-IN',
			language_name: 'ಬೆಂಬಾ (ಜಾಂಬಿಯ)'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'kn-IN',
			language_name: 'ಬೆಟಾವಿ'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಬೆನ (ತಾಂಜೇನಿಯಾ)'
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
			language_name: 'ಬಲ್ಗೇರಿಯನ್ (ಬಲ್ಗೇರಿಯಾ)'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'kn-IN',
			language_name: 'ಹರ್ಯಾನ್ವಿ (ಭಾರತ)'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಬಲೊಚಿ (ಪಾಕಿಸ್ತಾನ)'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'kn-IN',
			language_name: 'ಭೋಜಪುರಿ (ಭಾರತ)'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'kn-IN',
			language_name: 'ಬಿಸ್ಲಾಮಾ (ವನೌಟು)'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'kn-IN',
			language_name: 'ಬಿಕೊಲ್ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'kn-IN',
			language_name: 'ಬಿನಿ (ನೈಜೀರಿಯಾ)'
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
			language_name: 'ಸಿಕ್ಸಿಕಾ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'kn-IN',
			language_name: 'ಅನೀ (ಬೆನಿನ್)'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'kn-IN',
			language_name: 'ತೈ ಅಣೆಕಟ್ಟು'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'kn-IN',
			language_name: 'ಬಂಬಾರಾ (ಮಾಲಿ)'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'kn-IN',
			language_name: 'ಬಾಂಗ್ಲಾ (ಬಾಂಗ್ಲಾದೇಶ)'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'kn-IN',
			language_name: 'ಟಿಬೇಟಿಯನ್ (ಚೀನಾ)'
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
			language_name: 'ಬ್ರೆಟನ್ (ಫ್ರಾನ್ಸ್)'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ರಜ್ (ಭಾರತ)'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ರಾಹುಯಿ'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'kn-IN',
			language_name: 'ಬೋಡೊ (ಭಾರತ)'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'kn-IN',
			language_name: 'ಬೋಸ್ನಿಯನ್ (ಬೋಸ್ನಿಯಾ ಮತ್ತು ಹರ್ಜೆಗೋವಿನಾ)'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'kn-IN',
			language_name: 'ಅಕೂಸ್'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'kn-IN',
			language_name: 'ಬುರಿಯಟ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'kn-IN',
			language_name: 'ಬುಗಿನೀಸ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'kn-IN',
			language_name: 'ಬುಲು'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ಲಿನ್ (ಎರಿಟ್ರಿಯಾ)'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಡುಂಬಾ'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'kn-IN',
			language_name: 'ಕೆಟಲಾನ್ (ಸ್ಪೇನ್)'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಡ್ಡೋ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರಿಬ್ (ವೆನೆಜುವೆಲಾ)'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕಯುಗಾ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'kn-IN',
			language_name: 'ಅಟ್ಸಮ್ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'kn-IN',
			language_name: 'ಚಕ್ಮಾ (ಬಾಂಗ್ಲಾದೇಶ)'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'kn-IN',
			language_name: 'ಚಚೆನ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'kn-IN',
			language_name: 'ಸೆಬುವಾನೊ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಗಾ (ಉಗಾಂಡಾ)'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'kn-IN',
			language_name: 'ಕಮೊರೊ (ಗುವಾಮ್)'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಬ್ಚಾ (ಕೊಲಂಬಿಯಾ)'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'kn-IN',
			language_name: 'ಚಗಟಾಯ್ (ತುರ್ಕಮೆನಿಸ್ತಾನ್)'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'kn-IN',
			language_name: 'ಚೂಕಿಸೆ (ಮೈಕ್ರೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'kn-IN',
			language_name: 'ಮಾರಿ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'kn-IN',
			language_name: 'ಚಿನೂಕ್ ಜಾರ್ಗೋನ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'kn-IN',
			language_name: 'ಚೋಕ್ಟಾವ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಪೆವ್ಯಾನ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'kn-IN',
			language_name: 'ಚೆರೋಕಿ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'kn-IN',
			language_name: 'ಚೀಯೆನ್ನೇ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಕಾಸಾ'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಕುರ್ದಿಶ್ (ಇರಾಕ್)'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಲ್ಕೋಟಿನ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'kn-IN',
			language_name: 'ಕೋರ್ಸಿಕನ್ (ಫ್ರಾನ್ಸ್)'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಪ್ಟಿಕ್ (ಈಜಿಪ್ಟ್)'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಪಿಜ್ನಾನ್'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ರೀ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮಿಚಿಫ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ರಿಮೀಯನ್ ಟರ್ಕಿಷ್ (ಉಕ್ರೈನ್)'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಪೂರ್ವ ಕ್ರೀ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ಲೇನ್ಸ್ ಕ್ರೀ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಪೂರ್ವ ಕ್ರೀ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮೂಸ್ ಕ್ರೀ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'kn-IN',
			language_name: 'ಸೆಸೆಲ್ವಾ ಕ್ರಯೋಲ್ ಫ್ರೆಂಚ್ (ಸೀಶೆಲ್ಲೆಸ್)'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'kn-IN',
			language_name: 'ಜೆಕ್ (ಝೆಕಿಯಾ)'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'kn-IN',
			language_name: 'ಕಶುಬಿಯನ್ (ಪೋಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಾಂಪಿ ಕ್ರೀ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'kn-IN',
			language_name: 'ಚರ್ಚ್ ಸ್ಲಾವಿಕ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'kn-IN',
			language_name: 'ಚರ್ಚ್ ಸ್ಲಾವಿಕ್ (ಬಲ್ಗೇರಿಯಾ)'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'kn-IN',
			language_name: 'ಚುವಾಶ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'kn-IN',
			language_name: 'ವೆಲ್ಶ್ (ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್)'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'kn-IN',
			language_name: 'ಡ್ಯಾನಿಶ್ (ಡೆನ್ಮಾರ್ಕ್)'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'kn-IN',
			language_name: 'ಡಕೋಟಾ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'kn-IN',
			language_name: 'ದರ್ಗ್ವಾ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'kn-IN',
			language_name: 'ಟೈಟ (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'kn-IN',
			language_name: 'ಜರ್ಮನ್ (ಜರ್ಮನಿ)'
		},
		{
			locale_code: 'del-US',
			locale_id: 'kn-IN',
			language_name: 'ಡೆಲಾವೇರ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಲೇವ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'kn-IN',
			language_name: 'ಡೋಗ್ರಿಬ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'kn-IN',
			language_name: 'ಡಿಂಕಾ (ದಕ್ಷಿಣ ಸುಡಾನ್)'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'kn-IN',
			language_name: 'ಜರ್ಮಾ (ನೈಜರ್)'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'kn-IN',
			language_name: 'ಡೋಗ್ರಿ (ಭಾರತ)'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'kn-IN',
			language_name: 'ಲೋವರ್ ಸರ್ಬಿಯನ್ (ಜರ್ಮನಿ)'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'kn-IN',
			language_name: 'ಕೇಂದ್ರ ಡುಸುನ್'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'kn-IN',
			language_name: 'ಡುವಾಲಾ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಡಚ್ (ನೆದರ್‌ಲ್ಯಾಂಡ್ಸ್)'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'kn-IN',
			language_name: 'ದಿವೆಹಿ (ಮಾಲ್ಡೀವ್ಸ್)'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'kn-IN',
			language_name: 'ಜೊಲ-ಫೊನ್ಯಿ (ಸೆನೆಗಲ್)'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'kn-IN',
			language_name: 'ಡ್ಯೂಲಾ (ಬುರ್ಕಿನಾ ಫಾಸೊ)'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'kn-IN',
			language_name: 'ಜೋಂಗ್‌ಖಾ (ಭೂತಾನ್)'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'kn-IN',
			language_name: 'ಡಜಾಗ (ಚಾದ್)'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'kn-IN',
			language_name: 'ಎಂಬು (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'kn-IN',
			language_name: 'ಈವ್ (ಘಾನಾ)'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'kn-IN',
			language_name: 'ಎಫಿಕ್ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'kn-IN',
			language_name: 'ಎಮಿಲಿಯನ್'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಈಜಿಪ್ಟಿಯನ್ (ಈಜಿಪ್ಟ್)'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'kn-IN',
			language_name: 'ಎಕಾಜುಕ್ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ರೀಕ್ (ಗ್ರೀಸ್)'
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
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಭಾರತ)'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಇಂಗ್ಲೀಷ್ (ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್)'
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
			language_name: 'ಎಸ್ಟೊನಿಯನ್ (ಎಸ್ಟೋನಿಯಾ)'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'kn-IN',
			language_name: 'ಬಾಸ್ಕ್ (ಸ್ಪೇನ್)'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'kn-IN',
			language_name: 'ಇವಾಂಡೋ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'kn-IN',
			language_name: 'ಎಕ್ಸ್ಟ್ರೆಮದುರಾನ್'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'kn-IN',
			language_name: 'ಪರ್ಶಿಯನ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'kn-IN',
			language_name: 'ಫಾಂಗ್ (ಈಕ್ವೆಟೋರಿಯಲ್ ಗಿನಿ)'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'kn-IN',
			language_name: 'ಫುಲಾ (ಸೆನೆಗಲ್)'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'kn-IN',
			language_name: 'ಫುಲಾ (ಗಿನಿ)'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'kn-IN',
			language_name: 'ಫಿನ್ನಿಶ್ (ಫಿನ್‌ಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'kn-IN',
			language_name: 'ಫಿಲಿಪಿನೊ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'kn-IN',
			language_name: 'ಟೋರ್ನೆಡಲೆನ್ ಫಿನ್ನಿಶ್'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'kn-IN',
			language_name: 'ಫಿಜಿಯನ್ (ಫಿಜಿ)'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'kn-IN',
			language_name: 'ಫರೋಸಿ (ಫರೋ ದ್ವೀಪಗಳು)'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'kn-IN',
			language_name: 'ಫೋನ್ (ಬೆನಿನ್)'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಫ್ರಾನ್ಸ್)'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'kn-IN',
			language_name: 'ಕಾಜುನ್ ಫ್ರೆಂಚ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಫ್ರೆಂಚ್ (ಫ್ರಾನ್ಸ್)'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಫ್ರೆಂಚ್ (ಫ್ರಾನ್ಸ್)'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'kn-IN',
			language_name: 'ಅರ್ಪಿತಾನ್'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಫ್ರಿಸಿಯನ್ (ಜರ್ಮನಿ)'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'kn-IN',
			language_name: 'ಪೂರ್ವ ಫ್ರಿಸಿಯನ್ (ಜರ್ಮನಿ)'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರಿಯುಲಿಯನ್ (ಇಟಲಿ)'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಫ್ರಿಸಿಯನ್ (ನೆದರ್‌ಲ್ಯಾಂಡ್ಸ್)'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'kn-IN',
			language_name: 'ಐರಿಷ್ (ಐರ್ಲೆಂಡ್)'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'kn-IN',
			language_name: 'ಗ (ಘಾನಾ)'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'kn-IN',
			language_name: 'ಗಗೌಜ್ (ಮೊಲ್ಡೋವಾ)'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'kn-IN',
			language_name: 'ಗಾನ್ ಚೀನೀಸ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'kn-IN',
			language_name: 'ಗಾಯೋ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ಬಾಯಾ (ಮಧ್ಯ ಆಫ್ರಿಕಾ ಗಣರಾಜ್ಯ)'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'kn-IN',
			language_name: 'ಝೋರಾಸ್ಟ್ರಿಯನ್ ಡಾರಿ'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಕಾಟಿಶ್ ಗೆಲಿಕ್ (ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್)'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'kn-IN',
			language_name: 'ಗೀಝ್ (ಇಥಿಯೋಪಿಯಾ)'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'kn-IN',
			language_name: 'ಗಿಲ್ಬರ್ಟೀಸ್ (ಕಿರಿಬಾಟಿ)'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ಯಾಲಿಶಿಯನ್ (ಸ್ಪೇನ್)'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'kn-IN',
			language_name: 'ಗಿಲಾಕಿ'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಹೈ ಜರ್ಮನ್ (ಜರ್ಮನಿ)'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'kn-IN',
			language_name: 'ಗೌರಾನಿ (ಪರಾಗ್ವೇ)'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಹೈ ಜರ್ಮನ್ (ಜರ್ಮನಿ)'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'kn-IN',
			language_name: 'ಗೊಂಡಿ (ಭಾರತ)'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'kn-IN',
			language_name: 'ಗೊರೊಂಟಾಲೋ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'kn-IN',
			language_name: 'ಗೋಥಿಕ್ (ಉಕ್ರೈನ್)'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ರೇಬೋ (ಲಿಬೇರಿಯಾ)'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಗ್ರೀಕ್ (ಗ್ರೀಸ್)'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಿಸ್ ಜರ್ಮನ್ (ಸ್ವಿಟ್ಜರ್ಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'kn-IN',
			language_name: 'ಗುಜರಾತಿ (ಭಾರತ)'
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
			language_name: 'ಗುಸಿ (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಾಂಕ್ಸ್ (ಐಲ್ ಆಫ್ ಮ್ಯಾನ್)'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ವಿಚ್‌ಇನ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'kn-IN',
			language_name: 'ಹೌಸಾ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'kn-IN',
			language_name: 'ಹೌಸಾ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'kn-IN',
			language_name: 'ಹೌಸಾ (ಸುಡಾನ್)'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'kn-IN',
			language_name: 'ಹೈಡಾ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'kn-IN',
			language_name: 'ಹಕ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'kn-IN',
			language_name: 'ಹಕ್ (ತೈವಾನ್)'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'kn-IN',
			language_name: 'ಹವಾಯಿಯನ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಹೈಡಾ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'kn-IN',
			language_name: 'ಹೀಬ್ರೂ (ಇಸ್ರೇಲ್)'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'kn-IN',
			language_name: 'ಹಿಂದಿ (ಭಾರತ)'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'kn-IN',
			language_name: 'ಫಿಜಿ ಹಿಂದಿ'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'kn-IN',
			language_name: 'ಹಿಲಿಗೇನನ್ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'kn-IN',
			language_name: 'ಹಿಟ್ಟಿಟೆ (ತುರ್ಕಿಯೆ)'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'kn-IN',
			language_name: 'ಮೋಂಗ್ (ಚೀನಾ)'
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
			language_name: 'ಹಿರಿ ಮೊಟು (ಪಪುವಾ ನ್ಯೂಗಿನಿಯಾ)'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ರೊಯೇಶಿಯನ್ (ಕ್ರೊಯೇಷಿಯಾ)'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'kn-IN',
			language_name: 'ಅಪ್ಪರ್ ಸರ್ಬಿಯನ್ (ಜರ್ಮನಿ)'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'kn-IN',
			language_name: 'ಶಯಾಂಗ್ ಚೀನೀಸೇ (ಚೀನಾ)'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'kn-IN',
			language_name: 'ಹೈಟಿಯನ್ ಕ್ರಿಯೋಲಿ (ಹೈಟಿ)'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'kn-IN',
			language_name: 'ಹಂಗೇರಿಯನ್ (ಹಂಗೇರಿ)'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'kn-IN',
			language_name: 'ಹೂಪಾ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'kn-IN',
			language_name: 'ಹಾಲ್ಕೊಮೆಲೆಮ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'kn-IN',
			language_name: 'ಅರ್ಮೇನಿಯನ್ (ಆರ್ಮೇನಿಯ)'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'kn-IN',
			language_name: 'ಹೆರೆರೊ (ನಮೀಬಿಯಾ)'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'kn-IN',
			language_name: 'ಇಬಾನ್ (ಮಲೇಶಿಯಾ)'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'kn-IN',
			language_name: 'ಇಬಿಬಿಯೋ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಡೋನೇಶಿಯನ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಟರ್‌ಲಿಂಗ್ (ಎಸ್ಟೋನಿಯಾ)'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'kn-IN',
			language_name: 'ಇಗ್ಬೊ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಚುಅನ್ ಯಿ (ಚೀನಾ)'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'kn-IN',
			language_name: 'ಇನುಪಿಯಾಕ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಕೆನಡಿಯನ್ ಇನುಕ್ಟಿಟುಟ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'kn-IN',
			language_name: 'ಇಲ್ಲಿಕೋ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗುಷ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'kn-IN',
			language_name: 'ಐಸ್‌ಲ್ಯಾಂಡಿಕ್ (ಐಸ್‌ಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'kn-IN',
			language_name: 'ಇಟಾಲಿಯನ್ (ಇಟಲಿ)'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'kn-IN',
			language_name: 'ಇನುಕ್ಟಿಟುಟ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ರಿಯನ್'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'kn-IN',
			language_name: 'ಜಾಪನೀಸ್ (ಜಪಾನ್)'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'kn-IN',
			language_name: 'ಜಮೈಕನ್ ಕ್ರಿಯೋಲ್ ಇಂಗ್ಲೀಷ್'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'kn-IN',
			language_name: 'ನೊಂಬಾ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಕಮೆ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'kn-IN',
			language_name: 'ಜೂಡಿಯೋ-ಪರ್ಶಿಯನ್ (ಇಸ್ರೇಲ್)'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'kn-IN',
			language_name: 'ಜೂಡಿಯೋ-ಅರೇಬಿಕ್ (ಇಸ್ರೇಲ್)'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'kn-IN',
			language_name: 'ಜುತಿಶ್'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'kn-IN',
			language_name: 'ಜಾವಾನೀಸ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'kn-IN',
			language_name: 'ಜಾರ್ಜಿಯನ್ (ಜಾರ್ಜಿಯಾ)'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರಾ-ಕಲ್ಪಾಕ್ (ಉಜ್ಬೇಕಿಸ್ಥಾನ್)'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'kn-IN',
			language_name: 'ಕಬೈಲ್ (ಅಲ್ಜೀರಿಯ)'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'kn-IN',
			language_name: 'ಕಚಿನ್ (ಮಯನ್ಮಾರ್ [ಬರ್ಮಾ])'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'kn-IN',
			language_name: 'ಜ್ಜು (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'kn-IN',
			language_name: 'ಕಂಬಾ (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'kn-IN',
			language_name: 'ಕಾವಿ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕಬರ್ಡಿಯನ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'kn-IN',
			language_name: 'ಕಣೆಂಬು'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'kn-IN',
			language_name: 'ಟ್ಯಾಪ್ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಾಕೊಂಡ್ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'kn-IN',
			language_name: 'ಕಬುವೆರ್ಡಿಯನು (ಕೇಪ್ ವರ್ಡೆ)'
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
			language_name: 'ಕೋರೋ (ಕೋತ್ ದ್‘ಇವಾರ್)'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'kn-IN',
			language_name: 'ಕಾಂಗೋ (ಕಾಂಗೋ - ಕಿನ್ಶಾಸಾ)'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'kn-IN',
			language_name: 'ಕೈಗಂಗ್ (ಬ್ರೆಜಿಲ್)'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'kn-IN',
			language_name: 'ಖಾಸಿ (ಭಾರತ)'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'kn-IN',
			language_name: 'ಖೋಟಾನೀಸ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಯ್ರ ಚೀನಿ (ಮಾಲಿ)'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'kn-IN',
			language_name: 'ಖೋವರ್'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'kn-IN',
			language_name: 'ಕಿಕುಯು (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'kn-IN',
			language_name: 'ಕಿರ್ಮಾಂಜ್ಕಿ'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ವಾನ್‌ಯಾಮಾ (ನಮೀಬಿಯಾ)'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್ (ಕಝಾಕಿಸ್ಥಾನ್)'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್ (ಅಫಘಾನಿಸ್ಥಾನ)'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'kn-IN',
			language_name: 'ಕಝಕ್ (ಮಂಗೋಲಿಯಾ)'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'kn-IN',
			language_name: 'ಕಾಕೊ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'kn-IN',
			language_name: 'ಕಲಾಲ್ಲಿಸುಟ್ (ಗ್ರೀನ್‌ಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'kn-IN',
			language_name: 'ಕಲೆಂಜಿನ್ (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'kn-IN',
			language_name: 'ಖಮೇರ್ (ಕಾಂಬೋಡಿಯಾ)'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'kn-IN',
			language_name: 'ಕಿಂಬುಂಡು (ಅಂಗೋಲಾ)'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕನ್ನಡ (ಭಾರತ)'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'kn-IN',
			language_name: 'ಕೊರಿಯನ್ (ದಕ್ಷಿಣ ಕೊರಿಯಾ)'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕೋಮಿ-ಪರ್ಮ್ಯಕ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಂಕಣಿ (ಭಾರತ)'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಸರಿಯನ್ (ಮೈಕ್ರೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'kn-IN',
			language_name: 'ಕಪೆಲ್ಲೆ (ಲಿಬೇರಿಯಾ)'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'kn-IN',
			language_name: 'ಕನುರಿ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕರಚಯ್-ಬಲ್ಕಾರ್ (ರಷ್ಯಾ)'
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
			language_name: 'ಕರೇಲಿಯನ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕುರುಖ್ (ಭಾರತ)'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕಾಶ್ಮೀರಿ (ಭಾರತ)'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಶಂಬಲ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'kn-IN',
			language_name: 'ಬಫಿಯ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'kn-IN',
			language_name: 'ಕಲೊಗ್ನಿಯನ್ (ಜರ್ಮನಿ)'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್ (ತುರ್ಕಿಯೆ)'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್ (ಆರ್ಮೇನಿಯ)'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್ (ಇರಾಕ್)'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್ (ಅಜರ್ಬೈಜಾನ್)'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್ (ಜಾರ್ಜಿಯಾ)'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್ (ಲೆಬನಾನ್)'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್ (ತುರ್ಕಮೆನಿಸ್ತಾನ್)'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕುಮೈಕ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕುಟೇನಾಯ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕೋಮಿ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರ್ನಿಷ್ (ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್)'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ವಾಕ್‌ವಾಲಾ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕುವಿ (ಭಾರತ)'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'kn-IN',
			language_name: 'ಕಿರ್ಗಿಜ್ (ಕಿರ್ಗಿಸ್ಥಾನ್)'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'kn-IN',
			language_name: 'ಕಿರ್ಗಿಜ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'kn-IN',
			language_name: 'ಕಿರ್ಗಿಜ್ (ತುರ್ಕಿಯೆ)'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'kn-IN',
			language_name: 'ಲ್ಯಾಟಿನ್ (ವ್ಯಾಟಿಕನ್ ಸಿಟಿ)'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'kn-IN',
			language_name: 'ಲ್ಯಾಡಿನೋ (ಇಸ್ರೇಲ್)'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಲಾಂಗಿ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'kn-IN',
			language_name: 'ಲಹಂಡಾ (ಪಾಕಿಸ್ತಾನ)'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'kn-IN',
			language_name: 'ಲಂಬಾ (ಜಾಂಬಿಯ)'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'kn-IN',
			language_name: 'ಲಕ್ಸಂಬರ್ಗಿಷ್ (ಲಕ್ಸೆಂಬರ್ಗ್)'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'kn-IN',
			language_name: 'ಲೆಜ್ಘಿಯನ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'kn-IN',
			language_name: 'ಗಾಂಡಾ (ಉಗಾಂಡಾ)'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಂಬರ್ಗಿಶ್ (ನೆದರ್‌ಲ್ಯಾಂಡ್ಸ್)'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಗುರಿಯನ್ (ಇಟಲಿ)'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಲ್ಲೂವೆಟ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'kn-IN',
			language_name: 'ಲಿವೊನಿಯನ್'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'kn-IN',
			language_name: 'ಲಕೊಟ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'kn-IN',
			language_name: 'ಲೋಂಬರ್ಡ್ (ಇಟಲಿ)'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಂಗಾಲ (ಕಾಂಗೋ - ಕಿನ್ಶಾಸಾ)'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'kn-IN',
			language_name: 'ಲಾವೋ (ಲಾವೋಸ್)'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'kn-IN',
			language_name: 'ಮೊಂಗೋ (ಕಾಂಗೋ - ಕಿನ್ಶಾಸಾ)'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'kn-IN',
			language_name: 'ಲೂಯಿಸಿಯಾನ ಕ್ರಿಯೋಲ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'kn-IN',
			language_name: 'ಲೋಝಿ (ಜಾಂಬಿಯ)'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಲೂರಿ (ಇರಾನ್)'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'kn-IN',
			language_name: 'ಸಾಮಿಯಾ (ಉಗಾಂಡಾ)'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'kn-IN',
			language_name: 'ಲಿಥುವೇನಿಯನ್ (ಲಿಥುವೇನಿಯಾ)'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'kn-IN',
			language_name: 'ಲಾಟ್ಗಾಲಿಯನ್'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'kn-IN',
			language_name: 'ಲೂಬಾ-ಕಟಾಂಗಾ (ಕಾಂಗೋ - ಕಿನ್ಶಾಸಾ)'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'kn-IN',
			language_name: 'ಲುಬ-ಲುಲಾ (ಕಾಂಗೋ - ಕಿನ್ಶಾಸಾ)'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'kn-IN',
			language_name: 'ಲೂಯಿಸೆನೋ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'kn-IN',
			language_name: 'ಲುಂಡಾ (ಜಾಂಬಿಯ)'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'kn-IN',
			language_name: 'ಲುವೋ (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಿಝೋ (ಭಾರತ)'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'kn-IN',
			language_name: 'ಲುಯಿಯ (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'kn-IN',
			language_name: 'ಲಾಟ್ವಿಯನ್ (ಲಾಟ್ವಿಯಾ)'
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
			language_name: 'ಮದುರೀಸ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'kn-IN',
			language_name: 'ಮಾಫಾ'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಗಾಹಿ (ಭಾರತ)'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮೈಥಿಲಿ (ಭಾರತ)'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮಕಾಸರ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಡಿಂಗೊ (ಗ್ಯಾಂಬಿಯಾ)'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಡಿಂಗೊ (ಗಿನಿ)'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'kn-IN',
			language_name: 'ಮಸಾಯ್ (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'kn-IN',
			language_name: 'ಮಾಬಾ'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'kn-IN',
			language_name: 'ಮೋಕ್ಷ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮಂದಾರ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಂಡೆ (ಸಿಯೆರ್ರಾ ಲಿಯೋನ್)'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'kn-IN',
			language_name: 'ಮೆರು (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'kn-IN',
			language_name: 'ಮೊರಿಸನ್ (ಮಾರಿಷಸ್)'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಗಾಸಿ (ಮಡಗಾಸ್ಕರ್)'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಐರಿಷ್ (ಐರ್ಲೆಂಡ್)'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಖುವಾ- ಮೀಟ್ಟೊ (ಮೊಜಾಂಬಿಕ್)'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಟಾ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'kn-IN',
			language_name: 'ಮಾರ್ಶಲ್ಲೀಸ್ (ಮಾರ್ಷಲ್ ದ್ವೀಪಗಳು)'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'kn-IN',
			language_name: 'ಮಾವೋರಿ (ನ್ಯೂಜಿಲೆಂಡ್)'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮಿಕ್‌ಮ್ಯಾಕ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮಿನಂಗ್‌ಕಬಾವು (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಸಿಡೋನಿಯನ್ (ಉತ್ತರ ಮ್ಯಾಸಿಡೋನಿಯಾ)'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯಾಳಂ (ಭಾರತ)'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಗೋಲಿಯನ್ (ಮಂಗೋಲಿಯಾ)'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಗೋಲಿಯನ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'kn-IN',
			language_name: 'ಮಂಚು (ಚೀನಾ)'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಣಿಪುರಿ (ಭಾರತ)'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'kn-IN',
			language_name: 'ಇನ್ನು-ಐಮುನ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮೊಹಾವ್ಕ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'kn-IN',
			language_name: 'ಮೊಸ್ಸಿ (ಬುರ್ಕಿನಾ ಫಾಸೊ)'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮರಾಠಿ (ಭಾರತ)'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಮಾರಿ'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯ್ (ಮಲೇಶಿಯಾ)'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯ್ (ಕೊಕೊಸ್ [ಕೀಲಿಂಗ್] ದ್ವೀಪಗಳು)'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'kn-IN',
			language_name: 'ಮಾಲ್ಟೀಸ್ (ಮಾಲ್ಟಾ)'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'kn-IN',
			language_name: 'ಮುಂಡಂಗ್ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ರೀಕ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'kn-IN',
			language_name: 'ಮಿರಾಂಡೀಸ್ (ಪೋರ್ಚುಗಲ್)'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'kn-IN',
			language_name: 'ಮಾರ್ವಾಡಿ (ಭಾರತ)'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಂಟವಾಯಿ'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'kn-IN',
			language_name: 'ಬರ್ಮೀಸ್ (ಮಯನ್ಮಾರ್ [ಬರ್ಮಾ])'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'kn-IN',
			language_name: 'ಮೈನೆ'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'kn-IN',
			language_name: 'ಎರ್ಝ್ಯಾ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'kn-IN',
			language_name: 'ಮಜಂದೆರಾನಿ (ಇರಾನ್)'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'kn-IN',
			language_name: 'ನೌರು (ನೌರು)'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'kn-IN',
			language_name: 'ನಾನ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'kn-IN',
			language_name: 'ನಾನ್ (ತೈವಾನ್)'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'kn-IN',
			language_name: 'ನಾನ್ (ಮಕಾವು ಎಸ್ಎಆರ್ ಚೈನಾ)'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'kn-IN',
			language_name: 'ನಿಯಾಪೊಲಿಟನ್ (ಇಟಲಿ)'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'kn-IN',
			language_name: 'ನಮ (ನಮೀಬಿಯಾ)'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೆಜಿಯನ್ ಬೊಕ್ಮಲ್ (ನಾರ್ವೆ)'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ದೆಬೆಲೆ (ಜಿಂಬಾಬ್ವೆ)'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'kn-IN',
			language_name: 'ಲೋ ಜರ್ಮನ್ (ಜರ್ಮನಿ)'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'kn-IN',
			language_name: 'ನೇಪಾಳಿ (ನೇಪಾಳ)'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'kn-IN',
			language_name: 'ನೇವಾರೀ (ನೇಪಾಳ)'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'kn-IN',
			language_name: 'ಡೋಂಗಾ (ನಮೀಬಿಯಾ)'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'kn-IN',
			language_name: 'ನಿಯಾಸ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'kn-IN',
			language_name: 'ನಿಯುವನ್ (ನಿಯು)'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'kn-IN',
			language_name: 'ಅಯೋ ನಾಗಾ'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'kn-IN',
			language_name: 'ಡಚ್ (ನೆದರ್‌ಲ್ಯಾಂಡ್ಸ್)'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'kn-IN',
			language_name: 'ಖ್ವಾಸಿಯೊ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೇಜಿಯನ್ ನೈನಾರ್ಸ್ಕ್ (ನಾರ್ವೆ)'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'kn-IN',
			language_name: 'ನಿಂಬೂನ್ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೇಜಿಯನ್ (ನಾರ್ವೆ)'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'kn-IN',
			language_name: 'ನೊಗಾಯ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ನೋರ್ಸ್ (ಸ್ವೀಡನ್)'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'kn-IN',
			language_name: 'ಎನ್‌ಕೋ (ಗಿನಿ)'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ದೆಬೆಲೆ (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಸೋಥೋ (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'kn-IN',
			language_name: 'ನೂಯರ್ (ದಕ್ಷಿಣ ಸುಡಾನ್)'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'kn-IN',
			language_name: 'ನವಾಜೊ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'kn-IN',
			language_name: 'ಶಾಸ್ತ್ರೀಯ ನೇವಾರಿ (ನೇಪಾಳ)'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾಂಜಾ (ಮಲಾವಿ)'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾಮ್‌ವೆಂಜಿ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾನ್‌ಕೋಲೆ (ಉಗಾಂಡಾ)'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯೋರೋ (ಉಗಾಂಡಾ)'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'kn-IN',
			language_name: 'ಜೀಮಾ (ಘಾನಾ)'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'kn-IN',
			language_name: 'ಒಸಿಟನ್ (ಫ್ರಾನ್ಸ್)'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'kn-IN',
			language_name: 'ಒಜಿಬ್ವಾ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'kn-IN',
			language_name: 'ವಾಯುವ್ಯ ಓಜಿಬ್ವಾ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಓಜಿಬ್ವಾ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'kn-IN',
			language_name: 'ಓಜಿ-ಕ್ರೀ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'kn-IN',
			language_name: 'ಪಶ್ಚಿಮ ಓಜಿಬ್ವಾ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'kn-IN',
			language_name: 'ಒಕನಾಗನ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'kn-IN',
			language_name: 'ಒರೊಮೊ (ಇಥಿಯೋಪಿಯಾ)'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'kn-IN',
			language_name: 'ಒಡಿಯ (ಭಾರತ)'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'kn-IN',
			language_name: 'ಒಸ್ಸೆಟಿಕ್ (ಜಾರ್ಜಿಯಾ)'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'kn-IN',
			language_name: 'ಓಸಾಜ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'kn-IN',
			language_name: 'ಒಟ್ಟೋಮನ್ ತುರ್ಕಿಷ್ (ತುರ್ಕಿಯೆ)'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'kn-IN',
			language_name: 'ಪಂಜಾಬಿ (ಭಾರತ)'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'kn-IN',
			language_name: 'ಪಂಜಾಬಿ (ಪಾಕಿಸ್ತಾನ)'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'kn-IN',
			language_name: 'ಪಂಗಾಸಿನನ್ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'kn-IN',
			language_name: 'ಪಹ್ಲವಿ (ಇರಾನ್)'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'kn-IN',
			language_name: 'ಪಹ್ಲವಿ (ಚೀನಾ)'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'kn-IN',
			language_name: 'ಪಂಪಾಂಗಾ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'kn-IN',
			language_name: 'ಪಪಿಯಾಮೆಂಟೊ (ಕುರಾಕಾವ್)'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'kn-IN',
			language_name: 'ಪಲುಆನ್ (ಪಲಾವು)'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'kn-IN',
			language_name: 'ಪಿಕಾರ್ಡ್'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'kn-IN',
			language_name: 'ನೈಜೀರಿಯನ್ ಪಿಡ್ಗಿನ್ (ನೈಜೀರಿಯಾ)'
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
			language_name: 'ಪ್ರಾಚೀನ ಪರ್ಶಿಯನ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ಯಾಲಟೈನ್ ಜರ್ಮನ್'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'kn-IN',
			language_name: 'ಫೀನಿಷಿಯನ್ (ಲೆಬನಾನ್)'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ (ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್)'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ (ಭಾರತ)'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ (ಶ್ರೀಲಂಕಾ)'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ (ಮಯನ್ಮಾರ್ [ಬರ್ಮಾ])'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಲಿ (ಥೈಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'kn-IN',
			language_name: 'ಪಿಜಿನ್ (ಸಾಲೊಮನ್ ದ್ವೀಪಗಳು)'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'kn-IN',
			language_name: 'ಪೊಲಿಶ್ (ಪೋಲ್ಯಾಂಡ್)'
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
			language_name: 'ಪೋನ್‌‌ಪಿಯನ್ (ಮೈಕ್ರೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'kn-IN',
			language_name: 'ಮ್ಯಾಲಿಸೀಟ್-ಪಸ್ಸಾಮಕ್ವಾಡ್ಡಿ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಶಿಯನ್ (ಪೋಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಪ್ರೊವೆನ್ಶಿಯಲ್ (ಫ್ರಾನ್ಸ್)'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'kn-IN',
			language_name: 'ಪಾಷ್ಟೋ (ಅಫಘಾನಿಸ್ಥಾನ)'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'kn-IN',
			language_name: 'ಬ್ರೆಜಿಲಿಯನ್ ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ವೆಚುವಾ (ಪೆರು)'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'kn-IN',
			language_name: 'ಕಿಷೆ (ಗ್ವಾಟೆಮಾಲಾ)'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'kn-IN',
			language_name: 'ಚಿಂಬೊರಾಜೊ ಹೈಲ್ಯಾಂಡ್ ಕ್ವಿಚುವಾ'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'kn-IN',
			language_name: 'ರಾಜಸ್ಥಾನಿ (ಭಾರತ)'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'kn-IN',
			language_name: 'ರಾಪಾನುಯಿ (ಚಿಲಿ)'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'kn-IN',
			language_name: 'ರಾರೋಟೊಂಗನ್ (ಕುಕ್ ದ್ವೀಪಗಳು)'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'kn-IN',
			language_name: 'ರೊಮ್ಯಾಗ್ನಾಲ್'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'kn-IN',
			language_name: 'ರೋಹಿಂಗ್ಯಾ (ಮಯನ್ಮಾರ್ [ಬರ್ಮಾ])'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'kn-IN',
			language_name: 'ರಿಫಿಯನ್'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'kn-IN',
			language_name: 'ರೊಮಾನ್ಶ್ (ಸ್ವಿಟ್ಜರ್ಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'kn-IN',
			language_name: 'ರುಂಡಿ (ಬುರುಂಡಿ)'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'kn-IN',
			language_name: 'ರೊಮೇನಿಯನ್ (ರೊಮೇನಿಯಾ)'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'kn-IN',
			language_name: 'ರೊಂಬೊ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'kn-IN',
			language_name: 'ರೋಮಾನಿ (ರೊಮೇನಿಯಾ)'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'kn-IN',
			language_name: 'ರೋಟುಮನ್'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'kn-IN',
			language_name: 'ರಷ್ಯನ್ (ರಷ್ಯಾ)'
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
			language_name: 'ಅರೋಮಾನಿಯನ್ (ರೊಮೇನಿಯಾ)'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'kn-IN',
			language_name: 'ಕಿನ್ಯಾರ್‌ವಾಂಡಾ (ರುವಾಂಡಾ)'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'kn-IN',
			language_name: 'ರುವ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'kn-IN',
			language_name: 'ಸಂಸ್ಕೃತ (ಭಾರತ)'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಸಂಡಾವೇ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'kn-IN',
			language_name: 'ಸಖಾ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'kn-IN',
			language_name: 'ಸಮರಿಟನ್ ಅರಾಮಿಕ್ (ಪ್ಯಾಲೇಸ್ಟೇನಿಯನ್ ಪ್ರದೇಶಗಳು)'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'kn-IN',
			language_name: 'ಸಂಬುರು (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'kn-IN',
			language_name: 'ಸಸಾಕ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'kn-IN',
			language_name: 'ಸಂತಾಲಿ (ಭಾರತ)'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'kn-IN',
			language_name: 'ಸೌರಾಷ್ಟ್ರ'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'kn-IN',
			language_name: 'ನಂಬೇ (ಚಾದ್)'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಸಂಗು (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'kn-IN',
			language_name: 'ಸರ್ಡೀನಿಯನ್ (ಇಟಲಿ)'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಸಿಲಿಯನ್ (ಇಟಲಿ)'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಕೋಟ್ಸ್ (ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್)'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಂಧಿ (ಪಾಕಿಸ್ತಾನ)'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಂಧಿ (ಭಾರತ)'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'kn-IN',
			language_name: 'ಸಸಾರೆಸೆ ಸಾರ್ಡಿನಿಯನ್'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಕುರ್ದಿಶ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಸಾಮಿ (ನಾರ್ವೆ)'
		},
		{
			locale_code: 'see-US',
			locale_id: 'kn-IN',
			language_name: 'ಸೆನೆಕಾ'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'kn-IN',
			language_name: 'ಸೆನ (ಮೊಜಾಂಬಿಕ್)'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'kn-IN',
			language_name: 'ಸೀರಿ'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'kn-IN',
			language_name: 'ಸೆಲ್ಕಪ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಯ್ರಬೊರೊ ಸೆನ್ನಿ (ಮಾಲಿ)'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'kn-IN',
			language_name: 'ಸಾಂಗೋ (ಮಧ್ಯ ಆಫ್ರಿಕಾ ಗಣರಾಜ್ಯ)'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'kn-IN',
			language_name: 'ಪ್ರಾಚೀನ ಐರಿಷ್ (ಐರ್ಲೆಂಡ್)'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'kn-IN',
			language_name: 'ಸಮೋಗಿಟಿಯನ್'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'kn-IN',
			language_name: 'ಟಷೆಲ್‍ಹಿಟ್ (ಮೊರಾಕ್ಕೊ)'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'kn-IN',
			language_name: 'ಶಾನ್ (ಮಯನ್ಮಾರ್ [ಬರ್ಮಾ])'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'kn-IN',
			language_name: 'ಚಾಡಿಯನ್ ಅರೇಬಿಕ್'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಂಹಳ (ಶ್ರೀಲಂಕಾ)'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಡಾಮೋ (ಇಥಿಯೋಪಿಯಾ)'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಲೋವಾಕ್ (ಸ್ಲೊವಾಕಿಯಾ)'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಲೋವೇನಿಯನ್ (ಸ್ಲೋವೇನಿಯಾ)'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಲುಶೂಟ್‌ಸೀಡ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
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
			language_name: 'ಸಮೋವನ್ (ಸಮೋವಾ)'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಸಾಮಿ (ಸ್ವೀಡನ್)'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'kn-IN',
			language_name: 'ಲೂಲ್ ಸಾಮಿ (ಸ್ವೀಡನ್)'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'kn-IN',
			language_name: 'ಇನಾರಿ ಸಮೀ (ಫಿನ್‌ಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಕೋಟ್ ಸಾಮಿ (ಫಿನ್‌ಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'kn-IN',
			language_name: 'ಶೋನಾ (ಜಿಂಬಾಬ್ವೆ)'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'kn-IN',
			language_name: 'ಸೋನಿಂಕೆ (ಮಾಲಿ)'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'kn-IN',
			language_name: 'ಸೊಮಾಲಿ (ಸೊಮಾಲಿಯಾ)'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'kn-IN',
			language_name: 'ಸೋಗ್ಡಿಯನ್ (ಉಜ್ಬೇಕಿಸ್ಥಾನ್)'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'kn-IN',
			language_name: 'ಅಲ್ಬೇನಿಯನ್ (ಅಲ್ಬೇನಿಯಾ)'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್ (ಸೆರ್ಬಿಯಾ)'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್ (ಮೊಂಟೆನೆಗ್ರೋ)'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್ (ರೊಮೇನಿಯಾ)'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್ (ತುರ್ಕಿಯೆ)'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ರಾನನ್ ಟೋಂಗೋ (ಸುರಿನಾಮ್)'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'kn-IN',
			language_name: 'ಸೇರೇರ್ (ಸೆನೆಗಲ್)'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಾತಿ (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'kn-IN',
			language_name: 'ಸಹೊ (ಎರಿಟ್ರಿಯಾ)'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಸೋಥೋ (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಯಾಟರ್ಲ್ಯಾಂಡ್ ಫ್ರಿಸಿಯನ್'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಟ್ರೇಟ್ಸ್ ಸೆಲಿಶ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'kn-IN',
			language_name: 'ಸುಂಡಾನೀಸ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಸುಕುಮಾ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'kn-IN',
			language_name: 'ಸುಸು (ಗಿನಿ)'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವೀಡಿಷ್ (ಸ್ವೀಡನ್)'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಹಿಲಿ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'kn-IN',
			language_name: 'ಕೊಮೊರಿಯನ್ (ಮಯೊಟ್ಟೆ)'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'kn-IN',
			language_name: 'ಶಾಸ್ತ್ರೀಯ ಸಿರಿಯಕ್ (ತುರ್ಕಿಯೆ)'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಸಿರಿಯಾಕ್ (ಇರಾಕ್)'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಲೆಸಿಯನ್ (ಪೋಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'kn-IN',
			language_name: 'ತಮಿಳು (ಭಾರತ)'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಟಚ್‌ವನ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'kn-IN',
			language_name: 'ತುಳು'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'kn-IN',
			language_name: 'ತೆಲುಗು (ಭಾರತ)'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'kn-IN',
			language_name: 'ಟಿಮ್ನೆ (ಸಿಯೆರ್ರಾ ಲಿಯೋನ್)'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'kn-IN',
			language_name: 'ಟೆಸೊ (ಉಗಾಂಡಾ)'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'kn-IN',
			language_name: 'ಟೆರೆನೋ (ಬ್ರೆಜಿಲ್)'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'kn-IN',
			language_name: 'ಟೇಟಮ್ (ಟಿಮೋರ್ ಲೆಸ್ಟೆ)'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'kn-IN',
			language_name: 'ತಾಜಿಕ್ (ತಜಿಕಿಸ್ತಾನ್)'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'kn-IN',
			language_name: 'ತಾಜಿಕ್ (ಪಾಕಿಸ್ತಾನ)'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'kn-IN',
			language_name: 'ಟಾಗಿಶ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'kn-IN',
			language_name: 'ಥಾಯ್ (ಥೈಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'kn-IN',
			language_name: 'ಟಾಹ್ಲ್ಟನ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'kn-IN',
			language_name: 'ಟಿಗ್ರಿನ್ಯಾ (ಇಥಿಯೋಪಿಯಾ)'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'kn-IN',
			language_name: 'ಟೈಗ್ರೆ (ಎರಿಟ್ರಿಯಾ)'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'kn-IN',
			language_name: 'ಟಿವ್ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕ್‌ಮೆನ್ (ತುರ್ಕಮೆನಿಸ್ತಾನ್)'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'kn-IN',
			language_name: 'ಟೊಕೆಲಾವ್ (ಟೊಕೆಲಾವ್)'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'kn-IN',
			language_name: 'ತ್ಸಖೂರ್'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'kn-IN',
			language_name: 'ಫಿಲಿಪಿನೊ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'kn-IN',
			language_name: 'ಟ್ಲಿಂಗಿಟ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'kn-IN',
			language_name: 'ತಾಲಿಶ್'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'kn-IN',
			language_name: 'ಟಮಾಷೆಕ್ (ನೈಜರ್)'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಾನಾ (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'kn-IN',
			language_name: 'ಟೋಂಗನ್ (ಟೊಂಗಾ)'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'kn-IN',
			language_name: 'ನ್ಯಾಸಾ ಟೋಂಗಾ (ಮಲಾವಿ)'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'kn-IN',
			language_name: 'ಟೋಕ್ ಪಿಸಿನ್ (ಪಪುವಾ ನ್ಯೂಗಿನಿಯಾ)'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕಿಶ್ (ತುರ್ಕಿಯೆ)'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'kn-IN',
			language_name: 'ತುರೊಯೊ'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'kn-IN',
			language_name: 'ಟರೊಕೊ (ತೈವಾನ್)'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'kn-IN',
			language_name: 'ತೋರ್ವಾಲಿ'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಸೋಂಗಾ (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'kn-IN',
			language_name: 'ತ್ಸಾಕೋನಿಯನ್'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'kn-IN',
			language_name: 'ಸಿಂಶಿಯನ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'kn-IN',
			language_name: 'ಟಾಟರ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'kn-IN',
			language_name: 'ಉತ್ತರ ಟಚ್‌ವನ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'kn-IN',
			language_name: 'ಮುಸ್ಲಿಂ ಟಾಟ್'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'kn-IN',
			language_name: 'ತುಂಬುಕಾ (ಮಲಾವಿ)'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'kn-IN',
			language_name: 'ಟುವಾಲು (ಟುವಾಲು)'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'kn-IN',
			language_name: 'ಟಸವಕ್ (ನೈಜರ್)'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'kn-IN',
			language_name: 'ಟಹೀಟಿಯನ್ (ಫ್ರೆಂಚ್ ಪಾಲಿನೇಷ್ಯಾ)'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'kn-IN',
			language_name: 'ಟುವಿನಿಯನ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'kn-IN',
			language_name: 'ಮಧ್ಯ ಅಟ್ಲಾಸ್ ಟಮಜೈಟ್ (ಮೊರಾಕ್ಕೊ)'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'kn-IN',
			language_name: 'ಉಡ್‌ಮುರ್ಟ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'kn-IN',
			language_name: 'ಉಯಿಘರ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'kn-IN',
			language_name: 'ಉಯಿಘರ್ (ಕಝಾಕಿಸ್ಥಾನ್)'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'kn-IN',
			language_name: 'ಉಯಿಘರ್ (ಮಂಗೋಲಿಯಾ)'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'kn-IN',
			language_name: 'ಉಗಾರಿಟಿಕ್ (ಸಿರಿಯಾ)'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'kn-IN',
			language_name: 'ಉಕ್ರೇನಿಯನ್ (ಉಕ್ರೈನ್)'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'kn-IN',
			language_name: 'ಉಂಬುಂಡು (ಅಂಗೋಲಾ)'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'kn-IN',
			language_name: 'ಕೆಟಲಾನ್ (ಅಂಡೋರಾ)'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಯುನೈಟೆಡ್ ಅರಬ್ ಎಮಿರೇಟ್ಸ್)'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'kn-IN',
			language_name: 'ದರಿ'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್ (ಅಂಗೋಲಾ)'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಅರ್ಜೆಂಟಿನಾ)'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯ್ (ಬ್ರೂನಿ)'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'kn-IN',
			language_name: 'ಉರ್ದು (ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್)'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'kn-IN',
			language_name: 'ಮಲಯ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'kn-IN',
			language_name: 'ಉರ್ದು (ಭಾರತ)'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'kn-IN',
			language_name: 'ಉರ್ದು (ಮಾರಿಷಸ್)'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'kn-IN',
			language_name: 'ಉರ್ದು (ಪಾಕಿಸ್ತಾನ)'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'kn-IN',
			language_name: 'ಪರ್ಶಿಯನ್ (ತಜಿಕಿಸ್ತಾನ್)'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'kn-IN',
			language_name: 'ಸಮೋವನ್ (ಅಮೇರಿಕನ್ ಸಮೋವಾ)'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'kn-IN',
			language_name: 'ಆಸ್ಟ್ರಿಯನ್ ಜರ್ಮನ್'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'kn-IN',
			language_name: 'ಡಚ್ (ಅರುಬಾ)'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವೀಡಿಷ್ (ಆಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳು)'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ಲೆಮಿಷ್'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಬುರ್ಕಿನಾ ಫಾಸೊ)'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಬಹ್ರೇನ್)'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಬೆನಿನ್)'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಸೇಂಟ್ ಬಾರ್ಥೆಲೆಮಿ)'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಬೊಲಿವಿಯಾ)'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ತೈವಾನ್)'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'kn-IN',
			language_name: 'ಪಪಿಯಾಮೆಂಟೊ (ಕೆರೀಬಿಯನ್ ನೆದರ್‌ಲ್ಯಾಂಡ್ಸ್)'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೇಜಿಯನ್ (ಬೋವೆಟ್ ದ್ವೀಪ)'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'kn-IN',
			language_name: 'ರಷ್ಯನ್ (ಬೆಲಾರಸ್)'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಕಾಂಗೋ - ಕಿನ್ಶಾಸಾ)'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಕಾಂಗೋ - ಬ್ರಾಜಾವಿಲ್ಲೇ)'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಿಸ್ ಹೈ ಜರ್ಮನ್'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಕೋತ್ ದ್‘ಇವಾರ್)'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಚಿಲಿ)'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಕೊಲಂಬಿಯಾ)'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'kn-IN',
			language_name: 'root (ಸೈಪ್ರಸ್)'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಕೊಸ್ಟಾ ರಿಕಾ)'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಕ್ಯೂಬಾ)'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್ (ಕೇಪ್ ವರ್ಡೆ)'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'kn-IN',
			language_name: 'ಗ್ರೀಕ್ (ಸೈಪ್ರಸ್)'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರಾ-ಕಲ್ಪಾಕ್ (ಅಫಘಾನಿಸ್ಥಾನ)'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಸಿಡೋನಿಯನ್ (ಅಲ್ಬೇನಿಯಾ)'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'kn-IN',
			language_name: 'ಸೆರ್ಬಿಯನ್ (ಬೋಸ್ನಿಯಾ ಮತ್ತು ಹರ್ಜೆಗೋವಿನಾ)'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಸಿಡೋನಿಯನ್ (ಗ್ರೀಸ್)'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'kn-IN',
			language_name: 'ಕಾರಾ-ಕಲ್ಪಾಕ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'kn-IN',
			language_name: 'ಉಕ್ರೇನಿಯನ್ (ಮೊಲ್ಡೋವಾ)'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'kn-IN',
			language_name: 'ಬಲ್ಗೇರಿಯನ್ (ರೊಮೇನಿಯಾ)'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'kn-IN',
			language_name: 'ಉಕ್ರೇನಿಯನ್ (ಸ್ಲೊವಾಕಿಯಾ)'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'kn-IN',
			language_name: 'ಕಬರ್ಡಿಯನ್ (ತುರ್ಕಿಯೆ)'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'kn-IN',
			language_name: 'ಉಜ್ಬೇಕ್ (ಉಜ್ಬೇಕಿಸ್ಥಾನ್)'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'kn-IN',
			language_name: 'ನೇಪಾಳಿ (ಭೂತಾನ್)'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'kn-IN',
			language_name: 'ಭೋಜಪುರಿ (ಮಾರಿಷಸ್)'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಜಿಬೂಟಿ)'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಡೊಮೆನಿಕನ್ ರಿಪಬ್ಲಿಕ್)'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಅಲ್ಜೀರಿಯ)'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಈಕ್ವೆಡಾರ್)'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಪಶ್ಚಿಮ ಸಹಾರಾ)'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'kn-IN',
			language_name: 'ಟಿಗ್ರಿನ್ಯಾ (ಎರಿಟ್ರಿಯಾ)'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಗೆಬೊನ್)'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'kn-IN',
			language_name: 'ವೋಲೋಫ್ (ಸೆನೆಗಲ್)'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಫ್ರೆಂಚ್ ಗಯಾನಾ)'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಗಿನಿ)'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಗುಡೆಲೋಪ್)'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಈಕ್ವೆಟೋರಿಯಲ್ ಗಿನಿ)'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಗ್ವಾಟೆಮಾಲಾ)'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್ (ಗಿನಿ-ಬಿಸ್ಸಾವ್)'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಂಟನೀಸ್ (ಕೆನಡಾ)'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಂಟನೀಸ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'kn-IN',
			language_name: 'ಯಿಡ್ಡಿಶ್ (ಸ್ವೀಡನ್)'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'kn-IN',
			language_name: 'ಯಿಡ್ಡಿಶ್ (ಉಕ್ರೈನ್)'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'kn-IN',
			language_name: 'ಯಿಡ್ಡಿಶ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಹಾಂಗ್ ಕಾಂಗ್ ಎಸ್ಎಆರ್ ಚೈನಾ)'
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
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಹೊಂಡುರಾಸ್)'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಇರಾಕ್)'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಜೋರ್ಡಾನ್)'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಹಿಲಿ (ಕೀನ್ಯಾ)'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಕೊಮೊರೊಸ್)'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'kn-IN',
			language_name: 'ಕೊರಿಯನ್ (ಉತ್ತರ ಕೊರಿಯಾ)'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಕುವೈತ್)'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'kn-IN',
			language_name: 'ರಷ್ಯನ್ (ಕಝಾಕಿಸ್ಥಾನ್)'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಯುನೈಟೆಡ್ ಅರಬ್ ಎಮಿರೇಟ್ಸ್)'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕ್‌ಮೆನ್ (ಅಫಘಾನಿಸ್ಥಾನ)'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಬಾಂಗ್ಲಾದೇಶ)'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಬಲ್ಗೇರಿಯಾ)'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಭೂತಾನ್)'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಕೊಕೊಸ್ [ಕೀಲಿಂಗ್] ದ್ವೀಪಗಳು)'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'kn-IN',
			language_name: 'ಝೂವಾಂಗ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕಿಶ್ (ಸೈಪ್ರಸ್)'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಅಲ್ಜೀರಿಯ)'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಈಜಿಪ್ಟ್)'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಎರಿಟ್ರಿಯಾ)'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಇಥಿಯೋಪಿಯಾ)'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಗ್ರೀಸ್)'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಹಾಂಗ್ ಕಾಂಗ್ ಎಸ್ಎಆರ್ ಚೈನಾ)'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಇಸ್ರೇಲ್)'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಇರಾಕ್)'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'kn-IN',
			language_name: 'ಟರ್ಕ್‌ಮೆನ್ (ಇರಾನ್)'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಜೋರ್ಡಾನ್)'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಕೊಮೊರೊಸ್)'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಕಝಾಕಿಸ್ಥಾನ್)'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಲೆಬನಾನ್)'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಶ್ರೀಲಂಕಾ)'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಮೊರಾಕ್ಕೊ)'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'kn-IN',
			language_name: 'ಅಲ್ಬೇನಿಯನ್ (ಉತ್ತರ ಮ್ಯಾಸಿಡೋನಿಯಾ)'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಮಕಾವು ಎಸ್ಎಆರ್ ಚೈನಾ)'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಮಾರಿಟೇನಿಯಾ)'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಮಾಲ್ಡೀವ್ಸ್)'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ನೇಪಾಳ)'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಪಾಕಿಸ್ತಾನ)'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಸುಡಾನ್)'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ದಕ್ಷಿಣ ಸುಡಾನ್)'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'kn-IN',
			language_name: 'ಕುರ್ದಿಷ್ (ಸಿರಿಯಾ)'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಚಾದ್)'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಥೈಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಟುನೀಶಿಯ)'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'kn-IN',
			language_name: 'ಪೊಲಿಶ್ (ಉಕ್ರೈನ್)'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'kn-IN',
			language_name: 'ಇಂಗ್ಲಿಷ್ (ಯೆಮನ್)'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಲೆಬನಾನ್)'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'kn-IN',
			language_name: 'ಜರ್ಮನ್ (ಲಿಚೆನ್‌ಸ್ಟೈನ್)'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'kn-IN',
			language_name: 'ದಕ್ಷಿಣ ಸೋಥೋ (ಲೆಸೊಥೊ)'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಲಕ್ಸೆಂಬರ್ಗ್)'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಲಿಬಿಯಾ)'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಮೊರಾಕ್ಕೊ)'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಮೊನಾಕೊ)'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'kn-IN',
			language_name: 'ಮಾಲ್ಡೇವಿಯನ್'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಸೇಂಟ್ ಮಾರ್ಟಿನ್)'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಮಕಾವು ಎಸ್ಎಆರ್ ಚೈನಾ)'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಮಾರ್ಟಿನಿಕ್)'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಮಾರಿಟೇನಿಯಾ)'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಮಾರಿಷಸ್)'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'kn-IN',
			language_name: 'ಮೆಕ್ಸಿಕನ್ ಸ್ಪ್ಯಾನಿಷ್'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್ (ಮೊಜಾಂಬಿಕ್)'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'kn-IN',
			language_name: 'ಆಫ್ರಿಕಾನ್ಸ್ (ನಮೀಬಿಯಾ)'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ನ್ಯೂ ಕ್ಯಾಲಿಡೋನಿಯಾ)'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'kn-IN',
			language_name: 'ಹೌಸಾ (ನೈಜರ್)'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ನಿಕಾರಾಗುವಾ)'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಓಮನ್)'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಪನಾಮಾ)'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಪೆರು)'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಫ್ರೆಂಚ್ ಪಾಲಿನೇಷ್ಯಾ)'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಸೇಂಟ್ ಪಿಯರ್ ಮತ್ತು ಮಿಕ್ವೆಲನ್)'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಪ್ಯೂರ್ಟೋ ರಿಕೊ)'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಪ್ಯಾಲೇಸ್ಟೇನಿಯನ್ ಪ್ರದೇಶಗಳು)'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'kn-IN',
			language_name: 'ಯೂರೋಪಿಯನ್ ಪೋರ್ಚುಗೀಸ್'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಖತಾರ್)'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ರಿಯೂನಿಯನ್)'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಸೌದಿ ಅರೇಬಿಯಾ)'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಸೀಶೆಲ್ಲೆಸ್)'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಸುಡಾನ್)'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'kn-IN',
			language_name: 'ನಾರ್ವೆಜಿಯನ್ ಬೊಕ್ಮಲ್ (ಸ್ವಾಲ್ಬಾರ್ಡ್ ಮತ್ತು ಜಾನ್ ಮೆಯನ್)'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'kn-IN',
			language_name: 'ಇಟಾಲಿಯನ್ (ಸ್ಯಾನ್ ಮೆರಿನೋ)'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'kn-IN',
			language_name: 'ಡಚ್ (ಸುರಿನಾಮ್)'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ದಕ್ಷಿಣ ಸುಡಾನ್)'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್ (ಸಾವೋ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪಿ)'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಎಲ್ ಸಾಲ್ವೇಡಾರ್)'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಸಿರಿಯಾ)'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಚಾದ್)'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಫ್ರೆಂಚ್ ದಕ್ಷಿಣ ಪ್ರದೇಶಗಳು)'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಮೊರೊಕ್ಕನ್ ಟಮಜೈಟ್ (ಮೊರಾಕ್ಕೊ)'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಟೋಗೋ)'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'kn-IN',
			language_name: 'ಪೋರ್ಚುಗೀಸ್ (ಟಿಮೋರ್ ಲೆಸ್ಟೆ)'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಟುನೀಶಿಯ)'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ವಹಿಲಿ (ಉಗಾಂಡಾ)'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ಉರುಗ್ವೆ)'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'kn-IN',
			language_name: 'ಇಟಾಲಿಯನ್ (ವ್ಯಾಟಿಕನ್ ಸಿಟಿ)'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'kn-IN',
			language_name: 'ವಾಯಿ (ಲಿಬೇರಿಯಾ)'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'kn-IN',
			language_name: 'ಸ್ಪ್ಯಾನಿಷ್ (ವೆನೆಜುವೆಲಾ)'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'kn-IN',
			language_name: 'ವಿಯೆಟ್ನಾಮೀಸ್ (ವಿಯೆಟ್ನಾಮ್)'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ವಾಲಿಸ್ ಮತ್ತು ಫುಟುನಾ)'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'kn-IN',
			language_name: 'ಅರೇಬಿಕ್ (ಯೆಮನ್)'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'kn-IN',
			language_name: 'ಫ್ರೆಂಚ್ (ಮಯೊಟ್ಟೆ)'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'kn-IN',
			language_name: 'ಉಜ್ಬೇಕ್ (ಅಫಘಾನಿಸ್ಥಾನ)'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'kn-IN',
			language_name: 'ಉಜ್ಬೇಕ್ (ಚೀನಾ)'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'kn-IN',
			language_name: 'ವೆಂಡಾ (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'kn-IN',
			language_name: 'ವೆನಿಶಿಯನ್ (ಇಟಲಿ)'
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
			language_name: 'ಮಖುವಾ (ಮೊಜಾಂಬಿಕ್)'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'kn-IN',
			language_name: 'ವೋಟಿಕ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'kn-IN',
			language_name: 'ವೊರೊ'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'kn-IN',
			language_name: 'ವುಂಜೊ (ತಾಂಜೇನಿಯಾ)'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'kn-IN',
			language_name: 'ವಾಲೂನ್ (ಬೆಲ್ಜಿಯಮ್)'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'kn-IN',
			language_name: 'ವಾಲ್ಸರ್ (ಸ್ವಿಟ್ಜರ್ಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'kn-IN',
			language_name: 'ವಲಾಯ್ತಾ (ಇಥಿಯೋಪಿಯಾ)'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'kn-IN',
			language_name: 'ವರಾಯ್ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'was-US',
			locale_id: 'kn-IN',
			language_name: 'ವಾಷೋ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'kn-IN',
			language_name: 'ವಾರ್ಲ್‌ಪಿರಿ (ಆಸ್ಟ್ರೇಲಿಯಾ)'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'kn-IN',
			language_name: 'ವು ಚೈನೀಸ್ (ಚೀನಾ)'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'kn-IN',
			language_name: 'ಕಲ್ಮೈಕ್ (ರಷ್ಯಾ)'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಸೋಸ (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'kn-IN',
			language_name: 'ಮಿಂಗ್ರೇಲಿಯನ್'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'kn-IN',
			language_name: 'ಕಂಗ್ರಿ (ಭಾರತ)'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'kn-IN',
			language_name: 'ಸೊಗ (ಉಗಾಂಡಾ)'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'kn-IN',
			language_name: 'ಯಾವೊ (ಮೊಜಾಂಬಿಕ್)'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'kn-IN',
			language_name: 'ಯಪೀಸೆ (ಮೈಕ್ರೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'kn-IN',
			language_name: 'ಯಾಂಗ್ಬೆನ್ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'kn-IN',
			language_name: 'ಯೆಂಬಾ (ಕ್ಯಾಮರೂನ್)'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'kn-IN',
			language_name: 'ಯೊರುಬಾ (ನೈಜೀರಿಯಾ)'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'kn-IN',
			language_name: 'ನಿಂಗಾಟು (ಬ್ರೆಜಿಲ್)'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'kn-IN',
			language_name: 'ಕ್ಯಾಂಟನೀಸ್ (ಹಾಂಗ್ ಕಾಂಗ್ ಎಸ್ಎಆರ್ ಚೈನಾ)'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'kn-IN',
			language_name: 'ಝೋಪೊಟೆಕ್ (ಮೆಕ್ಸಿಕೊ)'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'kn-IN',
			language_name: 'ಝೀಲ್ಯಾಂಡಿಕ್'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'kn-IN',
			language_name: 'ಝೆನಾಗಾ (ಮಾರಿಟೇನಿಯಾ)'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಆಸ್ಟ್ರೇಲಿಯಾ)'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಬ್ರೂನಿ)'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್)'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಫ್ರೆಂಚ್ ಗಯಾನಾ)'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಇಂಡೋನೇಶಿಯಾ)'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಪನಾಮಾ)'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಫ್ರೆಂಚ್ ಪಾಲಿನೇಷ್ಯಾ)'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಫಿಲಿಫೈನ್ಸ್)'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಸುರಿನಾಮ್)'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಥೈಲ್ಯಾಂಡ್)'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'kn-IN',
			language_name: 'ಚೈನೀಸ್ (ವಿಯೆಟ್ನಾಮ್)'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'kn-IN',
			language_name: 'ಜುಲು (ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ)'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'kn-IN',
			language_name: 'ಝೂನಿ (ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್)'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'kn-IN',
			language_name: 'ಜಾಝಾ (ತುರ್ಕಿಯೆ)'
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
