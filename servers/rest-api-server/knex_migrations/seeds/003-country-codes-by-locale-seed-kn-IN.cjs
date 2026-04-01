/* eslint-disable security/detect-object-injection */
/**
 * Static seed for country_code_by_locale with kn-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * country names for the kn-IN locale.
			country_name: 'ಮಯನ್ಮಾರ್'
 * This seed depends on:
 * - 001-country-codes-seed.cjs (populates country_code_master)
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 003-country-codes-by-locale-seed-kn-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM country_code_by_locale WHERE locale_id = 'kn-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for kn-IN locale
	const rows = [
		{ iso_code: 'AND', locale_id: 'kn-IN', country_name: 'ಅಂಡೋರಾ' },
		{
			iso_code: 'ARE',
			locale_id: 'kn-IN',
			country_name: 'ಯುನೈಟೆಡ್ ಅರಬ್ ಎಮಿರೇಟ್ಸ್'
		},
		{ iso_code: 'AFG', locale_id: 'kn-IN', country_name: 'ಅಫಘಾನಿಸ್ಥಾನ' },
		{
			iso_code: 'ATG',
			locale_id: 'kn-IN',
			country_name: 'ಆಂಟಿಗುವಾ ಮತ್ತು ಬರ್ಬುಡಾ'
		},
		{ iso_code: 'AIA', locale_id: 'kn-IN', country_name: 'ಆಂಗ್ವಿಲ್ಲಾ' },
		{ iso_code: 'ALB', locale_id: 'kn-IN', country_name: 'ಅಲ್ಬೇನಿಯಾ' },
		{ iso_code: 'ARM', locale_id: 'kn-IN', country_name: 'ಆರ್ಮೇನಿಯ' },
		{ iso_code: 'AGO', locale_id: 'kn-IN', country_name: 'ಅಂಗೋಲಾ' },
		{ iso_code: 'ATA', locale_id: 'kn-IN', country_name: 'ಅಂಟಾರ್ಟಿಕಾ' },
		{ iso_code: 'ARG', locale_id: 'kn-IN', country_name: 'ಅರ್ಜೆಂಟಿನಾ' },
		{ iso_code: 'ASM', locale_id: 'kn-IN', country_name: 'ಅಮೇರಿಕನ್ ಸಮೋವಾ' },
		{ iso_code: 'AUT', locale_id: 'kn-IN', country_name: 'ಆಸ್ಟ್ರಿಯಾ' },
		{ iso_code: 'AUS', locale_id: 'kn-IN', country_name: 'ಆಸ್ಟ್ರೇಲಿಯಾ' },
		{ iso_code: 'ABW', locale_id: 'kn-IN', country_name: 'ಅರುಬಾ' },
		{
			iso_code: 'ALA',
			locale_id: 'kn-IN',
			country_name: 'ಆಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳು'
		},
		{ iso_code: 'AZE', locale_id: 'kn-IN', country_name: 'ಅಜರ್ಬೈಜಾನ್' },
		{
			iso_code: 'BIH',
			locale_id: 'kn-IN',
			country_name: 'ಬೋಸ್ನಿಯಾ ಮತ್ತು ಹರ್ಜೆಗೋವಿನಾ'
		},
		{ iso_code: 'BRB', locale_id: 'kn-IN', country_name: 'ಬಾರ್ಬಡೋಸ್' },
		{ iso_code: 'BGD', locale_id: 'kn-IN', country_name: 'ಬಾಂಗ್ಲಾದೇಶ' },
		{ iso_code: 'BEL', locale_id: 'kn-IN', country_name: 'ಬೆಲ್ಜಿಯಮ್' },
		{ iso_code: 'BFA', locale_id: 'kn-IN', country_name: 'ಬುರ್ಕಿನಾ ಫಾಸೊ' },
		{ iso_code: 'BGR', locale_id: 'kn-IN', country_name: 'ಬಲ್ಗೇರಿಯಾ' },
		{ iso_code: 'BHR', locale_id: 'kn-IN', country_name: 'ಬಹ್ರೇನ್' },
		{ iso_code: 'BDI', locale_id: 'kn-IN', country_name: 'ಬುರುಂಡಿ' },
		{ iso_code: 'BEN', locale_id: 'kn-IN', country_name: 'ಬೆನಿನ್' },
		{
			iso_code: 'BLM',
			locale_id: 'kn-IN',
			country_name: 'ಸೇಂಟ್ ಬಾರ್ಥೆಲೆಮಿ'
		},
		{ iso_code: 'BMU', locale_id: 'kn-IN', country_name: 'ಬರ್ಮುಡಾ' },
		{ iso_code: 'BRN', locale_id: 'kn-IN', country_name: 'ಬ್ರೂನಿ' },
		{ iso_code: 'BOL', locale_id: 'kn-IN', country_name: 'ಬೊಲಿವಿಯಾ' },
		{
			iso_code: 'BES',
			locale_id: 'kn-IN',
			country_name: 'ಕೆರೀಬಿಯನ್ ನೆದರ್‌ಲ್ಯಾಂಡ್ಸ್'
		},
		{ iso_code: 'BRA', locale_id: 'kn-IN', country_name: 'ಬ್ರೆಜಿಲ್' },
		{ iso_code: 'BHS', locale_id: 'kn-IN', country_name: 'ಬಹಾಮಾಸ್' },
		{ iso_code: 'BTN', locale_id: 'kn-IN', country_name: 'ಭೂತಾನ್' },
		{ iso_code: 'BVT', locale_id: 'kn-IN', country_name: 'ಬೋವೆಟ್ ದ್ವೀಪ' },
		{ iso_code: 'BWA', locale_id: 'kn-IN', country_name: 'ಬೋಟ್ಸ್‌ವಾನಾ' },
		{ iso_code: 'BLR', locale_id: 'kn-IN', country_name: 'ಬೆಲಾರಸ್' },
		{ iso_code: 'BLZ', locale_id: 'kn-IN', country_name: 'ಬೆಲಿಜ್' },
		{ iso_code: 'CAN', locale_id: 'kn-IN', country_name: 'ಕೆನಡಾ' },
		{
			iso_code: 'CCK',
			locale_id: 'kn-IN',
			country_name: 'ಕೊಕೊಸ್ (ಕೀಲಿಂಗ್) ದ್ವೀಪಗಳು'
		},
		{
			iso_code: 'ZAR',
			locale_id: 'kn-IN',
			country_name: 'ಕಾಂಗೋ - ಕಿನ್ಶಾಸಾ'
		},
		{
			iso_code: 'CAF',
			locale_id: 'kn-IN',
			country_name: 'ಮಧ್ಯ ಆಫ್ರಿಕಾ ಗಣರಾಜ್ಯ'
		},
		{
			iso_code: 'COG',
			locale_id: 'kn-IN',
			country_name: 'ಕಾಂಗೋ - ಬ್ರಾಜಾವಿಲ್ಲೇ'
		},
		{
			iso_code: 'CHE',
			locale_id: 'kn-IN',
			country_name: 'ಸ್ವಿಟ್ಜರ್ಲ್ಯಾಂಡ್'
		},
		{ iso_code: 'CIV', locale_id: 'kn-IN', country_name: 'ಕೋತ್ ದ್‘ಇವಾರ್' },
		{ iso_code: 'COK', locale_id: 'kn-IN', country_name: 'ಕುಕ್ ದ್ವೀಪಗಳು' },
		{ iso_code: 'CHL', locale_id: 'kn-IN', country_name: 'ಚಿಲಿ' },
		{ iso_code: 'CMR', locale_id: 'kn-IN', country_name: 'ಕ್ಯಾಮರೂನ್' },
		{ iso_code: 'CHN', locale_id: 'kn-IN', country_name: 'ಚೀನಾ' },
		{ iso_code: 'COL', locale_id: 'kn-IN', country_name: 'ಕೊಲಂಬಿಯಾ' },
		{ iso_code: 'CRI', locale_id: 'kn-IN', country_name: 'ಕೊಸ್ಟಾ ರಿಕಾ' },
		{ iso_code: 'CUB', locale_id: 'kn-IN', country_name: 'ಕ್ಯೂಬಾ' },
		{ iso_code: 'CPV', locale_id: 'kn-IN', country_name: 'ಕೇಪ್ ವರ್ಡೆ' },
		{ iso_code: 'CUW', locale_id: 'kn-IN', country_name: 'ಕುರಾಕಾವ್' },
		{
			iso_code: 'CXR',
			locale_id: 'kn-IN',
			country_name: 'ಕ್ರಿಸ್ಮಸ್ ದ್ವೀಪ'
		},
		{ iso_code: 'CYP', locale_id: 'kn-IN', country_name: 'ಸೈಪ್ರಸ್' },
		{ iso_code: 'CZE', locale_id: 'kn-IN', country_name: 'ಝೆಕಿಯಾ' },
		{ iso_code: 'DEU', locale_id: 'kn-IN', country_name: 'ಜರ್ಮನಿ' },
		{ iso_code: 'DJI', locale_id: 'kn-IN', country_name: 'ಜಿಬೂಟಿ' },
		{ iso_code: 'DNK', locale_id: 'kn-IN', country_name: 'ಡೆನ್ಮಾರ್ಕ್' },
		{ iso_code: 'DMA', locale_id: 'kn-IN', country_name: 'ಡೊಮಿನಿಕಾ' },
		{
			iso_code: 'DOM',
			locale_id: 'kn-IN',
			country_name: 'ಡೊಮೆನಿಕನ್ ರಿಪಬ್ಲಿಕ್'
		},
		{ iso_code: 'DZA', locale_id: 'kn-IN', country_name: 'ಅಲ್ಜೀರಿಯ' },
		{ iso_code: 'ECU', locale_id: 'kn-IN', country_name: 'ಈಕ್ವೆಡಾರ್' },
		{ iso_code: 'EST', locale_id: 'kn-IN', country_name: 'ಎಸ್ಟೋನಿಯಾ' },
		{ iso_code: 'EGY', locale_id: 'kn-IN', country_name: 'ಈಜಿಪ್ಟ್' },
		{ iso_code: 'ESH', locale_id: 'kn-IN', country_name: 'ಪಶ್ಚಿಮ ಸಹಾರಾ' },
		{ iso_code: 'ERI', locale_id: 'kn-IN', country_name: 'ಎರಿಟ್ರಿಯಾ' },
		{ iso_code: 'ESP', locale_id: 'kn-IN', country_name: 'ಸ್ಪೇನ್' },
		{ iso_code: 'ETH', locale_id: 'kn-IN', country_name: 'ಇಥಿಯೋಪಿಯಾ' },
		{ iso_code: 'FIN', locale_id: 'kn-IN', country_name: 'ಫಿನ್‌ಲ್ಯಾಂಡ್' },
		{ iso_code: 'FJI', locale_id: 'kn-IN', country_name: 'ಫಿಜಿ' },
		{
			iso_code: 'FLK',
			locale_id: 'kn-IN',
			country_name: 'ಫಾಕ್‌ಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳು'
		},
		{ iso_code: 'FSM', locale_id: 'kn-IN', country_name: 'ಮೈಕ್ರೋನೇಶಿಯಾ' },
		{ iso_code: 'FRO', locale_id: 'kn-IN', country_name: 'ಫರೋ ದ್ವೀಪಗಳು' },
		{ iso_code: 'FRA', locale_id: 'kn-IN', country_name: 'ಫ್ರಾನ್ಸ್' },
		{ iso_code: 'GAB', locale_id: 'kn-IN', country_name: 'ಗೆಬೊನ್' },
		{
			iso_code: 'GBR',
			locale_id: 'kn-IN',
			country_name: 'ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್'
		},
		{ iso_code: 'GRD', locale_id: 'kn-IN', country_name: 'ಗ್ರೆನೆಡಾ' },
		{ iso_code: 'GEO', locale_id: 'kn-IN', country_name: 'ಜಾರ್ಜಿಯಾ' },
		{ iso_code: 'GUF', locale_id: 'kn-IN', country_name: 'ಫ್ರೆಂಚ್ ಗಯಾನಾ' },
		{ iso_code: 'GGY', locale_id: 'kn-IN', country_name: 'ಗುರ್ನ್‌ಸೆ' },
		{ iso_code: 'GHA', locale_id: 'kn-IN', country_name: 'ಘಾನಾ' },
		{ iso_code: 'GIB', locale_id: 'kn-IN', country_name: 'ಗಿಬ್ರಾಲ್ಟರ್' },
		{ iso_code: 'GRL', locale_id: 'kn-IN', country_name: 'ಗ್ರೀನ್‌ಲ್ಯಾಂಡ್' },
		{ iso_code: 'GMB', locale_id: 'kn-IN', country_name: 'ಗ್ಯಾಂಬಿಯಾ' },
		{ iso_code: 'GIN', locale_id: 'kn-IN', country_name: 'ಗಿನಿ' },
		{ iso_code: 'GLP', locale_id: 'kn-IN', country_name: 'ಗುಡೆಲೋಪ್' },
		{
			iso_code: 'GNQ',
			locale_id: 'kn-IN',
			country_name: 'ಈಕ್ವೆಟೋರಿಯಲ್ ಗಿನಿ'
		},
		{ iso_code: 'GRC', locale_id: 'kn-IN', country_name: 'ಗ್ರೀಸ್' },
		{
			iso_code: 'SGS',
			locale_id: 'kn-IN',
			country_name: 'ದಕ್ಷಿಣ ಜಾರ್ಜಿಯಾ ಮತ್ತು ದಕ್ಷಿಣ ಸ್ಯಾಂಡ್‍ವಿಚ್ ದ್ವೀಪಗಳು'
		},
		{ iso_code: 'GTM', locale_id: 'kn-IN', country_name: 'ಗ್ವಾಟೆಮಾಲಾ' },
		{ iso_code: 'GUM', locale_id: 'kn-IN', country_name: 'ಗುವಾಮ್' },
		{ iso_code: 'GNB', locale_id: 'kn-IN', country_name: 'ಗಿನಿ-ಬಿಸ್ಸಾವ್' },
		{ iso_code: 'GUY', locale_id: 'kn-IN', country_name: 'ಗಯಾನಾ' },
		{
			iso_code: 'HKG',
			locale_id: 'kn-IN',
			country_name: 'ಹಾಂಗ್ ಕಾಂಗ್ ಎಸ್ಎಆರ್ ಚೈನಾ'
		},
		{
			iso_code: 'HMD',
			locale_id: 'kn-IN',
			country_name: 'ಹರ್ಡ್ ಮತ್ತು ಮ್ಯಾಕ್‌ಡೋನಾಲ್ಡ್ ದ್ವೀಪಗಳು'
		},
		{ iso_code: 'HND', locale_id: 'kn-IN', country_name: 'ಹೊಂಡುರಾಸ್' },
		{ iso_code: 'HRV', locale_id: 'kn-IN', country_name: 'ಕ್ರೊಯೇಷಿಯಾ' },
		{ iso_code: 'HTI', locale_id: 'kn-IN', country_name: 'ಹೈಟಿ' },
		{ iso_code: 'HUN', locale_id: 'kn-IN', country_name: 'ಹಂಗೇರಿ' },
		{ iso_code: 'IDN', locale_id: 'kn-IN', country_name: 'ಇಂಡೋನೇಶಿಯಾ' },
		{ iso_code: 'IRL', locale_id: 'kn-IN', country_name: 'ಐರ್ಲೆಂಡ್' },
		{ iso_code: 'ISR', locale_id: 'kn-IN', country_name: 'ಇಸ್ರೇಲ್' },
		{ iso_code: 'IMN', locale_id: 'kn-IN', country_name: 'ಐಲ್ ಆಫ್ ಮ್ಯಾನ್' },
		{ iso_code: 'IND', locale_id: 'kn-IN', country_name: 'ಭಾರತ' },
		{
			iso_code: 'IOT',
			locale_id: 'kn-IN',
			country_name: 'ಬ್ರಿಟೀಷ್ ಹಿಂದೂ ಮಹಾಸಾಗರದ ಪ್ರದೇಶ'
		},
		{ iso_code: 'IRQ', locale_id: 'kn-IN', country_name: 'ಇರಾಕ್' },
		{ iso_code: 'IRN', locale_id: 'kn-IN', country_name: 'ಇರಾನ್' },
		{ iso_code: 'ISL', locale_id: 'kn-IN', country_name: 'ಐಸ್‌ಲ್ಯಾಂಡ್' },
		{ iso_code: 'ITA', locale_id: 'kn-IN', country_name: 'ಇಟಲಿ' },
		{ iso_code: 'JEY', locale_id: 'kn-IN', country_name: 'ಜೆರ್ಸಿ' },
		{ iso_code: 'JAM', locale_id: 'kn-IN', country_name: 'ಜಮೈಕಾ' },
		{ iso_code: 'JOR', locale_id: 'kn-IN', country_name: 'ಜೋರ್ಡಾನ್' },
		{ iso_code: 'JPN', locale_id: 'kn-IN', country_name: 'ಜಪಾನ್' },
		{ iso_code: 'KEN', locale_id: 'kn-IN', country_name: 'ಕೀನ್ಯಾ' },
		{ iso_code: 'KGZ', locale_id: 'kn-IN', country_name: 'ಕಿರ್ಗಿಸ್ಥಾನ್' },
		{ iso_code: 'KHM', locale_id: 'kn-IN', country_name: 'ಕಾಂಬೋಡಿಯಾ' },
		{ iso_code: 'KIR', locale_id: 'kn-IN', country_name: 'ಕಿರಿಬಾಟಿ' },
		{ iso_code: 'COM', locale_id: 'kn-IN', country_name: 'ಕೊಮೊರೊಸ್' },
		{
			iso_code: 'KNA',
			locale_id: 'kn-IN',
			country_name: 'ಸೇಂಟ್ ಕಿಟ್ಸ್ ಮತ್ತು ನೆವಿಸ್'
		},
		{ iso_code: 'PRK', locale_id: 'kn-IN', country_name: 'ಉತ್ತರ ಕೊರಿಯಾ' },
		{ iso_code: 'KOR', locale_id: 'kn-IN', country_name: 'ದಕ್ಷಿಣ ಕೊರಿಯಾ' },
		{ iso_code: 'KWT', locale_id: 'kn-IN', country_name: 'ಕುವೈತ್' },
		{ iso_code: 'CYM', locale_id: 'kn-IN', country_name: 'ಕೇಮನ್ ದ್ವೀಪಗಳು' },
		{ iso_code: 'KAZ', locale_id: 'kn-IN', country_name: 'ಕಝಾಕಿಸ್ಥಾನ್' },
		{ iso_code: 'LAO', locale_id: 'kn-IN', country_name: 'ಲಾವೋಸ್' },
		{ iso_code: 'LBN', locale_id: 'kn-IN', country_name: 'ಲೆಬನಾನ್' },
		{ iso_code: 'LCA', locale_id: 'kn-IN', country_name: 'ಸೇಂಟ್ ಲೂಸಿಯಾ' },
		{ iso_code: 'LIE', locale_id: 'kn-IN', country_name: 'ಲಿಚೆನ್‌ಸ್ಟೈನ್' },
		{ iso_code: 'LKA', locale_id: 'kn-IN', country_name: 'ಶ್ರೀಲಂಕಾ' },
		{ iso_code: 'LBR', locale_id: 'kn-IN', country_name: 'ಲಿಬೇರಿಯಾ' },
		{ iso_code: 'LSO', locale_id: 'kn-IN', country_name: 'ಲೆಸೊಥೊ' },
		{ iso_code: 'LTU', locale_id: 'kn-IN', country_name: 'ಲಿಥುವೇನಿಯಾ' },
		{ iso_code: 'LUX', locale_id: 'kn-IN', country_name: 'ಲಕ್ಸೆಂಬರ್ಗ್' },
		{ iso_code: 'LVA', locale_id: 'kn-IN', country_name: 'ಲಾಟ್ವಿಯಾ' },
		{ iso_code: 'LBY', locale_id: 'kn-IN', country_name: 'ಲಿಬಿಯಾ' },
		{ iso_code: 'MAR', locale_id: 'kn-IN', country_name: 'ಮೊರಾಕ್ಕೊ' },
		{ iso_code: 'MCO', locale_id: 'kn-IN', country_name: 'ಮೊನಾಕೊ' },
		{ iso_code: 'MDA', locale_id: 'kn-IN', country_name: 'ಮೊಲ್ಡೋವಾ' },
		{ iso_code: 'MNE', locale_id: 'kn-IN', country_name: 'ಮೊಂಟೆನೆಗ್ರೋ' },
		{ iso_code: 'MAF', locale_id: 'kn-IN', country_name: 'ಸೇಂಟ್ ಮಾರ್ಟಿನ್' },
		{ iso_code: 'MDG', locale_id: 'kn-IN', country_name: 'ಮಡಗಾಸ್ಕರ್' },
		{
			iso_code: 'MHL',
			locale_id: 'kn-IN',
			country_name: 'ಮಾರ್ಷಲ್ ದ್ವೀಪಗಳು'
		},
		{
			iso_code: 'MKD',
			locale_id: 'kn-IN',
			country_name: 'ಉತ್ತರ ಮ್ಯಾಸಿಡೋನಿಯಾ'
		},
		{ iso_code: 'MLI', locale_id: 'kn-IN', country_name: 'ಮಾಲಿ' },
		{
			iso_code: 'MMR',
			locale_id: 'kn-IN',
			country_name: 'ಮಯನ್ಮಾರ್'
		},
		{ iso_code: 'MNG', locale_id: 'kn-IN', country_name: 'ಮಂಗೋಲಿಯಾ' },
		{
			iso_code: 'MAC',
			locale_id: 'kn-IN',
			country_name: 'ಮಕಾವು ಎಸ್ಎಆರ್ ಚೈನಾ'
		},
		{
			iso_code: 'MNP',
			locale_id: 'kn-IN',
			country_name: 'ಉತ್ತರ ಮರಿಯಾನಾ ದ್ವೀಪಗಳು'
		},
		{ iso_code: 'MTQ', locale_id: 'kn-IN', country_name: 'ಮಾರ್ಟಿನಿಕ್' },
		{ iso_code: 'MRT', locale_id: 'kn-IN', country_name: 'ಮಾರಿಟೇನಿಯಾ' },
		{ iso_code: 'MSR', locale_id: 'kn-IN', country_name: 'ಮಾಂಟ್‌ಸೆರಟ್' },
		{ iso_code: 'MLT', locale_id: 'kn-IN', country_name: 'ಮಾಲ್ಟಾ' },
		{ iso_code: 'MUS', locale_id: 'kn-IN', country_name: 'ಮಾರಿಷಸ್' },
		{ iso_code: 'MDV', locale_id: 'kn-IN', country_name: 'ಮಾಲ್ಡೀವ್ಸ್' },
		{ iso_code: 'MWI', locale_id: 'kn-IN', country_name: 'ಮಲಾವಿ' },
		{ iso_code: 'MEX', locale_id: 'kn-IN', country_name: 'ಮೆಕ್ಸಿಕೊ' },
		{ iso_code: 'MYS', locale_id: 'kn-IN', country_name: 'ಮಲೇಶಿಯಾ' },
		{ iso_code: 'MOZ', locale_id: 'kn-IN', country_name: 'ಮೊಜಾಂಬಿಕ್' },
		{ iso_code: 'NAM', locale_id: 'kn-IN', country_name: 'ನಮೀಬಿಯಾ' },
		{
			iso_code: 'NCL',
			locale_id: 'kn-IN',
			country_name: 'ನ್ಯೂ ಕ್ಯಾಲಿಡೋನಿಯಾ'
		},
		{ iso_code: 'NER', locale_id: 'kn-IN', country_name: 'ನೈಜರ್' },
		{ iso_code: 'NFK', locale_id: 'kn-IN', country_name: 'ನಾರ್ಫೋಕ್ ದ್ವೀಪ' },
		{ iso_code: 'NGA', locale_id: 'kn-IN', country_name: 'ನೈಜೀರಿಯಾ' },
		{ iso_code: 'NIC', locale_id: 'kn-IN', country_name: 'ನಿಕಾರಾಗುವಾ' },
		{
			iso_code: 'NLD',
			locale_id: 'kn-IN',
			country_name: 'ನೆದರ್‌ಲ್ಯಾಂಡ್ಸ್'
		},
		{ iso_code: 'NOR', locale_id: 'kn-IN', country_name: 'ನಾರ್ವೆ' },
		{ iso_code: 'NPL', locale_id: 'kn-IN', country_name: 'ನೇಪಾಳ' },
		{ iso_code: 'NRU', locale_id: 'kn-IN', country_name: 'ನೌರು' },
		{ iso_code: 'NIU', locale_id: 'kn-IN', country_name: 'ನಿಯು' },
		{ iso_code: 'NZL', locale_id: 'kn-IN', country_name: 'ನ್ಯೂಜಿಲೆಂಡ್' },
		{ iso_code: 'OMN', locale_id: 'kn-IN', country_name: 'ಓಮನ್' },
		{ iso_code: 'PAN', locale_id: 'kn-IN', country_name: 'ಪನಾಮಾ' },
		{ iso_code: 'PER', locale_id: 'kn-IN', country_name: 'ಪೆರು' },
		{
			iso_code: 'PYF',
			locale_id: 'kn-IN',
			country_name: 'ಫ್ರೆಂಚ್ ಪಾಲಿನೇಷ್ಯಾ'
		},
		{
			iso_code: 'PNG',
			locale_id: 'kn-IN',
			country_name: 'ಪಪುವಾ ನ್ಯೂಗಿನಿಯಾ'
		},
		{ iso_code: 'PHL', locale_id: 'kn-IN', country_name: 'ಫಿಲಿಫೈನ್ಸ್' },
		{ iso_code: 'PAK', locale_id: 'kn-IN', country_name: 'ಪಾಕಿಸ್ತಾನ' },
		{ iso_code: 'POL', locale_id: 'kn-IN', country_name: 'ಪೋಲ್ಯಾಂಡ್' },
		{
			iso_code: 'SPM',
			locale_id: 'kn-IN',
			country_name: 'ಸೇಂಟ್ ಪಿಯರ್ ಮತ್ತು ಮಿಕ್ವೆಲನ್'
		},
		{
			iso_code: 'PCN',
			locale_id: 'kn-IN',
			country_name: 'ಪಿಟ್‌ಕೈರ್ನ್ ದ್ವೀಪಗಳು'
		},
		{ iso_code: 'PRI', locale_id: 'kn-IN', country_name: 'ಪ್ಯೂರ್ಟೋ ರಿಕೊ' },
		{
			iso_code: 'PSE',
			locale_id: 'kn-IN',
			country_name: 'ಪ್ಯಾಲೇಸ್ಟೇನಿಯನ್ ಪ್ರದೇಶಗಳು'
		},
		{ iso_code: 'PRT', locale_id: 'kn-IN', country_name: 'ಪೋರ್ಚುಗಲ್' },
		{ iso_code: 'PLW', locale_id: 'kn-IN', country_name: 'ಪಲಾವು' },
		{ iso_code: 'PRY', locale_id: 'kn-IN', country_name: 'ಪರಾಗ್ವೇ' },
		{ iso_code: 'QAT', locale_id: 'kn-IN', country_name: 'ಖತಾರ್' },
		{ iso_code: 'REU', locale_id: 'kn-IN', country_name: 'ರಿಯೂನಿಯನ್' },
		{ iso_code: 'ROU', locale_id: 'kn-IN', country_name: 'ರೊಮೇನಿಯಾ' },
		{ iso_code: 'SRB', locale_id: 'kn-IN', country_name: 'ಸೆರ್ಬಿಯಾ' },
		{ iso_code: 'RUS', locale_id: 'kn-IN', country_name: 'ರಷ್ಯಾ' },
		{ iso_code: 'RWA', locale_id: 'kn-IN', country_name: 'ರುವಾಂಡಾ' },
		{ iso_code: 'SAU', locale_id: 'kn-IN', country_name: 'ಸೌದಿ ಅರೇಬಿಯಾ' },
		{
			iso_code: 'SLB',
			locale_id: 'kn-IN',
			country_name: 'ಸಾಲೊಮನ್ ದ್ವೀಪಗಳು'
		},
		{ iso_code: 'SYC', locale_id: 'kn-IN', country_name: 'ಸೀಶೆಲ್ಲೆಸ್' },
		{ iso_code: 'SDN', locale_id: 'kn-IN', country_name: 'ಸುಡಾನ್' },
		{ iso_code: 'SWE', locale_id: 'kn-IN', country_name: 'ಸ್ವೀಡನ್' },
		{ iso_code: 'SGP', locale_id: 'kn-IN', country_name: 'ಸಿಂಗಪುರ್' },
		{ iso_code: 'SHN', locale_id: 'kn-IN', country_name: 'ಸೇಂಟ್ ಹೆಲೆನಾ' },
		{ iso_code: 'SVN', locale_id: 'kn-IN', country_name: 'ಸ್ಲೋವೇನಿಯಾ' },
		{
			iso_code: 'SJM',
			locale_id: 'kn-IN',
			country_name: 'ಸ್ವಾಲ್ಬಾರ್ಡ್ ಮತ್ತು ಜಾನ್ ಮೆಯನ್'
		},
		{ iso_code: 'SVK', locale_id: 'kn-IN', country_name: 'ಸ್ಲೊವಾಕಿಯಾ' },
		{
			iso_code: 'SLE',
			locale_id: 'kn-IN',
			country_name: 'ಸಿಯೆರ್ರಾ ಲಿಯೋನ್'
		},
		{ iso_code: 'SMR', locale_id: 'kn-IN', country_name: 'ಸ್ಯಾನ್ ಮೆರಿನೋ' },
		{ iso_code: 'SEN', locale_id: 'kn-IN', country_name: 'ಸೆನೆಗಲ್' },
		{ iso_code: 'SOM', locale_id: 'kn-IN', country_name: 'ಸೊಮಾಲಿಯಾ' },
		{ iso_code: 'SUR', locale_id: 'kn-IN', country_name: 'ಸುರಿನಾಮ್' },
		{ iso_code: 'SSD', locale_id: 'kn-IN', country_name: 'ದಕ್ಷಿಣ ಸುಡಾನ್' },
		{
			iso_code: 'STP',
			locale_id: 'kn-IN',
			country_name: 'ಸಾವೋ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪಿ'
		},
		{ iso_code: 'SLV', locale_id: 'kn-IN', country_name: 'ಎಲ್ ಸಾಲ್ವೇಡಾರ್' },
		{ iso_code: 'SXM', locale_id: 'kn-IN', country_name: 'ಸಿಂಟ್ ಮಾರ್ಟೆನ್' },
		{ iso_code: 'SYR', locale_id: 'kn-IN', country_name: 'ಸಿರಿಯಾ' },
		{ iso_code: 'SWZ', locale_id: 'kn-IN', country_name: 'ಎಸ್ವಾಟಿನಿ' },
		{
			iso_code: 'TCA',
			locale_id: 'kn-IN',
			country_name: 'ಟರ್ಕ್ಸ್ ಮತ್ತು ಕೈಕೋಸ್ ದ್ವೀಪಗಳು'
		},
		{ iso_code: 'TCD', locale_id: 'kn-IN', country_name: 'ಚಾದ್' },
		{
			iso_code: 'ATF',
			locale_id: 'kn-IN',
			country_name: 'ಫ್ರೆಂಚ್ ದಕ್ಷಿಣ ಪ್ರದೇಶಗಳು'
		},
		{ iso_code: 'TGO', locale_id: 'kn-IN', country_name: 'ಟೋಗೋ' },
		{ iso_code: 'THA', locale_id: 'kn-IN', country_name: 'ಥೈಲ್ಯಾಂಡ್' },
		{ iso_code: 'TJK', locale_id: 'kn-IN', country_name: 'ತಜಿಕಿಸ್ತಾನ್' },
		{ iso_code: 'TKL', locale_id: 'kn-IN', country_name: 'ಟೊಕೆಲಾವ್' },
		{ iso_code: 'TLS', locale_id: 'kn-IN', country_name: 'ಟಿಮೋರ್ ಲೆಸ್ಟೆ' },
		{
			iso_code: 'TKM',
			locale_id: 'kn-IN',
			country_name: 'ತುರ್ಕಮೆನಿಸ್ತಾನ್'
		},
		{ iso_code: 'TUN', locale_id: 'kn-IN', country_name: 'ಟುನೀಶಿಯ' },
		{ iso_code: 'TON', locale_id: 'kn-IN', country_name: 'ಟೊಂಗಾ' },
		{ iso_code: 'TUR', locale_id: 'kn-IN', country_name: 'ತುರ್ಕಿಯೆ' },
		{
			iso_code: 'TTO',
			locale_id: 'kn-IN',
			country_name: 'ಟ್ರಿನಿಡಾಡ್ ಮತ್ತು ಟೊಬಾಗೊ'
		},
		{ iso_code: 'TUV', locale_id: 'kn-IN', country_name: 'ಟುವಾಲು' },
		{ iso_code: 'TWN', locale_id: 'kn-IN', country_name: 'ತೈವಾನ್' },
		{ iso_code: 'TZA', locale_id: 'kn-IN', country_name: 'ತಾಂಜೇನಿಯಾ' },
		{ iso_code: 'UKR', locale_id: 'kn-IN', country_name: 'ಉಕ್ರೈನ್' },
		{ iso_code: 'UGA', locale_id: 'kn-IN', country_name: 'ಉಗಾಂಡಾ' },
		{
			iso_code: 'UMI',
			locale_id: 'kn-IN',
			country_name: 'ಯುಎಸ್‌ ಔಟ್‌ಲೇಯಿಂಗ್ ದ್ವೀಪಗಳು'
		},
		{
			iso_code: 'USA',
			locale_id: 'kn-IN',
			country_name: 'ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್'
		},
		{ iso_code: 'URY', locale_id: 'kn-IN', country_name: 'ಉರುಗ್ವೆ' },
		{ iso_code: 'UZB', locale_id: 'kn-IN', country_name: 'ಉಜ್ಬೇಕಿಸ್ಥಾನ್' },
		{ iso_code: 'VAT', locale_id: 'kn-IN', country_name: 'ವ್ಯಾಟಿಕನ್ ಸಿಟಿ' },
		{
			iso_code: 'VCT',
			locale_id: 'kn-IN',
			country_name: 'ಸೇಂಟ್. ವಿನ್ಸೆಂಟ್ ಮತ್ತು ಗ್ರೆನೆಡೈನ್ಸ್'
		},
		{ iso_code: 'VEN', locale_id: 'kn-IN', country_name: 'ವೆನೆಜುವೆಲಾ' },
		{
			iso_code: 'VGB',
			locale_id: 'kn-IN',
			country_name: 'ಬ್ರಿಟಿಷ್ ವರ್ಜಿನ್ ದ್ವೀಪಗಳು'
		},
		{
			iso_code: 'VIR',
			locale_id: 'kn-IN',
			country_name: 'ಯು.ಎಸ್. ವರ್ಜಿನ್ ದ್ವೀಪಗಳು'
		},
		{ iso_code: 'VNM', locale_id: 'kn-IN', country_name: 'ವಿಯೆಟ್ನಾಮ್' },
		{ iso_code: 'VUT', locale_id: 'kn-IN', country_name: 'ವನೌಟು' },
		{
			iso_code: 'WLF',
			locale_id: 'kn-IN',
			country_name: 'ವಾಲಿಸ್ ಮತ್ತು ಫುಟುನಾ'
		},
		{ iso_code: 'WSM', locale_id: 'kn-IN', country_name: 'ಸಮೋವಾ' },
		{ iso_code: 'YEM', locale_id: 'kn-IN', country_name: 'ಯೆಮನ್' },
		{ iso_code: 'MYT', locale_id: 'kn-IN', country_name: 'ಮಯೊಟ್ಟೆ' },
		{ iso_code: 'ZAF', locale_id: 'kn-IN', country_name: 'ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ' },
		{ iso_code: 'ZMB', locale_id: 'kn-IN', country_name: 'ಜಾಂಬಿಯ' },
		{ iso_code: 'ZWE', locale_id: 'kn-IN', country_name: 'ಜಿಂಬಾಬ್ವೆ' }
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
