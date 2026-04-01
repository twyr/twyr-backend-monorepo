/* eslint-disable security/detect-object-injection */
/**
 * Static seed for country_code_by_locale with gu-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * country names for the gu-IN locale.
			country_name: 'મ્યાંમાર'
 * This seed depends on:
 * - 001-country-codes-seed.cjs (populates country_code_master)
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 003-country-codes-by-locale-seed-gu-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM country_code_by_locale WHERE locale_id = 'gu-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for gu-IN locale
	const rows = [
		{
			iso_code: 'AND',
			locale_id: 'gu-IN',
			country_name: 'એન્ડોરા'
		},
		{
			iso_code: 'ARE',
			locale_id: 'gu-IN',
			country_name: 'યુનાઇટેડ આરબ અમીરાત'
		},
		{
			iso_code: 'AFG',
			locale_id: 'gu-IN',
			country_name: 'અફઘાનિસ્તાન'
		},
		{
			iso_code: 'ATG',
			locale_id: 'gu-IN',
			country_name: 'ઍન્ટિગુઆ અને બર્મુડા'
		},
		{
			iso_code: 'AIA',
			locale_id: 'gu-IN',
			country_name: 'ઍંગ્વિલા'
		},
		{
			iso_code: 'ALB',
			locale_id: 'gu-IN',
			country_name: 'અલ્બેનિયા'
		},
		{
			iso_code: 'ARM',
			locale_id: 'gu-IN',
			country_name: 'આર્મેનિયા'
		},
		{
			iso_code: 'AGO',
			locale_id: 'gu-IN',
			country_name: 'અંગોલા'
		},
		{
			iso_code: 'ATA',
			locale_id: 'gu-IN',
			country_name: 'એન્ટાર્કટિકા'
		},
		{
			iso_code: 'ARG',
			locale_id: 'gu-IN',
			country_name: 'આર્જેન્ટીના'
		},
		{
			iso_code: 'ASM',
			locale_id: 'gu-IN',
			country_name: 'અમેરિકન સમોઆ'
		},
		{
			iso_code: 'AUT',
			locale_id: 'gu-IN',
			country_name: 'ઑસ્ટ્રિયા'
		},
		{
			iso_code: 'AUS',
			locale_id: 'gu-IN',
			country_name: 'ઑસ્ટ્રેલિયા'
		},
		{
			iso_code: 'ABW',
			locale_id: 'gu-IN',
			country_name: 'અરુબા'
		},
		{
			iso_code: 'ALA',
			locale_id: 'gu-IN',
			country_name: 'ઑલૅન્ડ આઇલૅન્ડ્સ'
		},
		{
			iso_code: 'AZE',
			locale_id: 'gu-IN',
			country_name: 'અઝરબૈજાન'
		},
		{
			iso_code: 'BIH',
			locale_id: 'gu-IN',
			country_name: 'બોસ્નિયા અને હર્ઝેગોવિના'
		},
		{
			iso_code: 'BRB',
			locale_id: 'gu-IN',
			country_name: 'બારબાડોસ'
		},
		{
			iso_code: 'BGD',
			locale_id: 'gu-IN',
			country_name: 'બાંગ્લાદેશ'
		},
		{
			iso_code: 'BEL',
			locale_id: 'gu-IN',
			country_name: 'બેલ્જીયમ'
		},
		{
			iso_code: 'BFA',
			locale_id: 'gu-IN',
			country_name: 'બુર્કિના ફાસો'
		},
		{
			iso_code: 'BGR',
			locale_id: 'gu-IN',
			country_name: 'બલ્ગેરિયા'
		},
		{
			iso_code: 'BHR',
			locale_id: 'gu-IN',
			country_name: 'બેહરીન'
		},
		{
			iso_code: 'BDI',
			locale_id: 'gu-IN',
			country_name: 'બુરુંડી'
		},
		{
			iso_code: 'BEN',
			locale_id: 'gu-IN',
			country_name: 'બેનિન'
		},
		{
			iso_code: 'BLM',
			locale_id: 'gu-IN',
			country_name: 'સેંટ બાર્થેલેમી'
		},
		{
			iso_code: 'BMU',
			locale_id: 'gu-IN',
			country_name: 'બર્મુડા'
		},
		{
			iso_code: 'BRN',
			locale_id: 'gu-IN',
			country_name: 'બ્રુનેઇ'
		},
		{
			iso_code: 'BOL',
			locale_id: 'gu-IN',
			country_name: 'બોલિવિયા'
		},
		{
			iso_code: 'BES',
			locale_id: 'gu-IN',
			country_name: 'કેરેબિયન નેધરલેન્ડ્ઝ'
		},
		{
			iso_code: 'BRA',
			locale_id: 'gu-IN',
			country_name: 'બ્રાઝિલ'
		},
		{
			iso_code: 'BHS',
			locale_id: 'gu-IN',
			country_name: 'બહામાસ'
		},
		{
			iso_code: 'BTN',
			locale_id: 'gu-IN',
			country_name: 'ભૂટાન'
		},
		{
			iso_code: 'BVT',
			locale_id: 'gu-IN',
			country_name: 'બૌવેત આઇલૅન્ડ'
		},
		{
			iso_code: 'BWA',
			locale_id: 'gu-IN',
			country_name: 'બોત્સ્વાના'
		},
		{
			iso_code: 'BLR',
			locale_id: 'gu-IN',
			country_name: 'બેલારુસ'
		},
		{
			iso_code: 'BLZ',
			locale_id: 'gu-IN',
			country_name: 'બેલીઝ'
		},
		{
			iso_code: 'CAN',
			locale_id: 'gu-IN',
			country_name: 'કેનેડા'
		},
		{
			iso_code: 'CCK',
			locale_id: 'gu-IN',
			country_name: 'કોકોઝ (કીલીંગ) આઇલૅન્ડ્સ'
		},
		{
			iso_code: 'ZAR',
			locale_id: 'gu-IN',
			country_name: 'કોંગો - કિંશાસા'
		},
		{
			iso_code: 'CAF',
			locale_id: 'gu-IN',
			country_name: 'સેન્ટ્રલ આફ્રિકન રિપબ્લિક'
		},
		{
			iso_code: 'COG',
			locale_id: 'gu-IN',
			country_name: 'કોંગો - બ્રાઝાવિલે'
		},
		{
			iso_code: 'CHE',
			locale_id: 'gu-IN',
			country_name: 'સ્વિટ્ઝર્લૅન્ડ'
		},
		{
			iso_code: 'CIV',
			locale_id: 'gu-IN',
			country_name: 'કોટ ડીઆઇવરી'
		},
		{
			iso_code: 'COK',
			locale_id: 'gu-IN',
			country_name: 'કુક આઇલેન્ડ્સ'
		},
		{
			iso_code: 'CHL',
			locale_id: 'gu-IN',
			country_name: 'ચિલી'
		},
		{
			iso_code: 'CMR',
			locale_id: 'gu-IN',
			country_name: 'કૅમરૂન'
		},
		{
			iso_code: 'CHN',
			locale_id: 'gu-IN',
			country_name: 'ચીન'
		},
		{
			iso_code: 'COL',
			locale_id: 'gu-IN',
			country_name: 'કોલંબિયા'
		},
		{
			iso_code: 'CRI',
			locale_id: 'gu-IN',
			country_name: 'કોસ્ટા રિકા'
		},
		{
			iso_code: 'CUB',
			locale_id: 'gu-IN',
			country_name: 'ક્યુબા'
		},
		{
			iso_code: 'CPV',
			locale_id: 'gu-IN',
			country_name: 'કૅપ વર્ડે'
		},
		{
			iso_code: 'CUW',
			locale_id: 'gu-IN',
			country_name: 'ક્યુરાસાઓ'
		},
		{
			iso_code: 'CXR',
			locale_id: 'gu-IN',
			country_name: 'ક્રિસમસ આઇલૅન્ડ'
		},
		{
			iso_code: 'CYP',
			locale_id: 'gu-IN',
			country_name: 'સાયપ્રસ'
		},
		{
			iso_code: 'CZE',
			locale_id: 'gu-IN',
			country_name: 'ચેકીયા'
		},
		{
			iso_code: 'DEU',
			locale_id: 'gu-IN',
			country_name: 'જર્મની'
		},
		{
			iso_code: 'DJI',
			locale_id: 'gu-IN',
			country_name: 'જીબૌટી'
		},
		{
			iso_code: 'DNK',
			locale_id: 'gu-IN',
			country_name: 'ડેનમાર્ક'
		},
		{
			iso_code: 'DMA',
			locale_id: 'gu-IN',
			country_name: 'ડોમિનિકા'
		},
		{
			iso_code: 'DOM',
			locale_id: 'gu-IN',
			country_name: 'ડોમિનિકન રિપબ્લિક'
		},
		{
			iso_code: 'DZA',
			locale_id: 'gu-IN',
			country_name: 'અલ્જીરિયા'
		},
		{
			iso_code: 'ECU',
			locale_id: 'gu-IN',
			country_name: 'એક્વાડોર'
		},
		{
			iso_code: 'EST',
			locale_id: 'gu-IN',
			country_name: 'એસ્ટોનિયા'
		},
		{
			iso_code: 'EGY',
			locale_id: 'gu-IN',
			country_name: 'ઇજિપ્ત'
		},
		{
			iso_code: 'ESH',
			locale_id: 'gu-IN',
			country_name: 'પશ્ચિમી સહારા'
		},
		{
			iso_code: 'ERI',
			locale_id: 'gu-IN',
			country_name: 'એરિટ્રિયા'
		},
		{
			iso_code: 'ESP',
			locale_id: 'gu-IN',
			country_name: 'સ્પેન'
		},
		{
			iso_code: 'ETH',
			locale_id: 'gu-IN',
			country_name: 'ઇથિઓપિયા'
		},
		{
			iso_code: 'FIN',
			locale_id: 'gu-IN',
			country_name: 'ફિનલેન્ડ'
		},
		{
			iso_code: 'FJI',
			locale_id: 'gu-IN',
			country_name: 'ફીજી'
		},
		{
			iso_code: 'FLK',
			locale_id: 'gu-IN',
			country_name: 'ફૉકલૅન્ડ આઇલૅન્ડ્સ'
		},
		{
			iso_code: 'FSM',
			locale_id: 'gu-IN',
			country_name: 'માઇક્રોનેશિયા'
		},
		{
			iso_code: 'FRO',
			locale_id: 'gu-IN',
			country_name: 'ફેરો આઇલૅન્ડ્સ'
		},
		{
			iso_code: 'FRA',
			locale_id: 'gu-IN',
			country_name: 'ફ્રાંસ'
		},
		{
			iso_code: 'GAB',
			locale_id: 'gu-IN',
			country_name: 'ગેબન'
		},
		{
			iso_code: 'GBR',
			locale_id: 'gu-IN',
			country_name: 'યુનાઇટેડ કિંગડમ'
		},
		{
			iso_code: 'GRD',
			locale_id: 'gu-IN',
			country_name: 'ગ્રેનેડા'
		},
		{
			iso_code: 'GEO',
			locale_id: 'gu-IN',
			country_name: 'જ્યોર્જિયા'
		},
		{
			iso_code: 'GUF',
			locale_id: 'gu-IN',
			country_name: 'ફ્રેંચ ગયાના'
		},
		{
			iso_code: 'GGY',
			locale_id: 'gu-IN',
			country_name: 'ગ્વેર્નસે'
		},
		{
			iso_code: 'GHA',
			locale_id: 'gu-IN',
			country_name: 'ઘાના'
		},
		{
			iso_code: 'GIB',
			locale_id: 'gu-IN',
			country_name: 'જીબ્રાલ્ટર'
		},
		{
			iso_code: 'GRL',
			locale_id: 'gu-IN',
			country_name: 'ગ્રીનલેન્ડ'
		},
		{
			iso_code: 'GMB',
			locale_id: 'gu-IN',
			country_name: 'ગેમ્બિયા'
		},
		{
			iso_code: 'GIN',
			locale_id: 'gu-IN',
			country_name: 'ગિની'
		},
		{
			iso_code: 'GLP',
			locale_id: 'gu-IN',
			country_name: 'ગ્વાડેલોપ'
		},
		{
			iso_code: 'GNQ',
			locale_id: 'gu-IN',
			country_name: 'ઇક્વેટોરિયલ ગિની'
		},
		{
			iso_code: 'GRC',
			locale_id: 'gu-IN',
			country_name: 'ગ્રીસ'
		},
		{
			iso_code: 'SGS',
			locale_id: 'gu-IN',
			country_name: 'દક્ષિણ જ્યોર્જિયા અને દક્ષિણ સેન્ડવિચ આઇલેન્ડ્સ'
		},
		{
			iso_code: 'GTM',
			locale_id: 'gu-IN',
			country_name: 'ગ્વાટેમાલા'
		},
		{
			iso_code: 'GUM',
			locale_id: 'gu-IN',
			country_name: 'ગ્વામ'
		},
		{
			iso_code: 'GNB',
			locale_id: 'gu-IN',
			country_name: 'ગિની-બિસાઉ'
		},
		{
			iso_code: 'GUY',
			locale_id: 'gu-IN',
			country_name: 'ગયાના'
		},
		{
			iso_code: 'HKG',
			locale_id: 'gu-IN',
			country_name: 'હોંગકોંગ SAR ચીન'
		},
		{
			iso_code: 'HMD',
			locale_id: 'gu-IN',
			country_name: 'હર્ડ અને મેકડોનાલ્ડ આઇલૅન્ડ્સ'
		},
		{
			iso_code: 'HND',
			locale_id: 'gu-IN',
			country_name: 'હોન્ડુરસ'
		},
		{
			iso_code: 'HRV',
			locale_id: 'gu-IN',
			country_name: 'ક્રોએશિયા'
		},
		{
			iso_code: 'HTI',
			locale_id: 'gu-IN',
			country_name: 'હૈતિ'
		},
		{
			iso_code: 'HUN',
			locale_id: 'gu-IN',
			country_name: 'હંગેરી'
		},
		{
			iso_code: 'IDN',
			locale_id: 'gu-IN',
			country_name: 'ઇન્ડોનેશિયા'
		},
		{
			iso_code: 'IRL',
			locale_id: 'gu-IN',
			country_name: 'આયરલૅન્ડ'
		},
		{
			iso_code: 'ISR',
			locale_id: 'gu-IN',
			country_name: 'ઇઝરાઇલ'
		},
		{
			iso_code: 'IMN',
			locale_id: 'gu-IN',
			country_name: 'આઇલ ઑફ મેન'
		},
		{
			iso_code: 'IND',
			locale_id: 'gu-IN',
			country_name: 'ભારત'
		},
		{
			iso_code: 'IOT',
			locale_id: 'gu-IN',
			country_name: 'બ્રિટિશ ઇન્ડિયન ઓશન ટેરિટરી'
		},
		{
			iso_code: 'IRQ',
			locale_id: 'gu-IN',
			country_name: 'ઇરાક'
		},
		{
			iso_code: 'IRN',
			locale_id: 'gu-IN',
			country_name: 'ઈરાન'
		},
		{
			iso_code: 'ISL',
			locale_id: 'gu-IN',
			country_name: 'આઇસલૅન્ડ'
		},
		{
			iso_code: 'ITA',
			locale_id: 'gu-IN',
			country_name: 'ઇટાલી'
		},
		{
			iso_code: 'JEY',
			locale_id: 'gu-IN',
			country_name: 'જર્સી'
		},
		{
			iso_code: 'JAM',
			locale_id: 'gu-IN',
			country_name: 'જમૈકા'
		},
		{
			iso_code: 'JOR',
			locale_id: 'gu-IN',
			country_name: 'જોર્ડન'
		},
		{
			iso_code: 'JPN',
			locale_id: 'gu-IN',
			country_name: 'જાપાન'
		},
		{
			iso_code: 'KEN',
			locale_id: 'gu-IN',
			country_name: 'કેન્યા'
		},
		{
			iso_code: 'KGZ',
			locale_id: 'gu-IN',
			country_name: 'કિર્ગિઝ્સ્તાન'
		},
		{
			iso_code: 'KHM',
			locale_id: 'gu-IN',
			country_name: 'કંબોડિયા'
		},
		{
			iso_code: 'KIR',
			locale_id: 'gu-IN',
			country_name: 'કિરિબાટી'
		},
		{
			iso_code: 'COM',
			locale_id: 'gu-IN',
			country_name: 'કોમોરસ'
		},
		{
			iso_code: 'KNA',
			locale_id: 'gu-IN',
			country_name: 'સેંટ કિટ્સ અને નેવિસ'
		},
		{
			iso_code: 'PRK',
			locale_id: 'gu-IN',
			country_name: 'ઉત્તર કોરિયા'
		},
		{
			iso_code: 'KOR',
			locale_id: 'gu-IN',
			country_name: 'દક્ષિણ કોરિયા'
		},
		{
			iso_code: 'KWT',
			locale_id: 'gu-IN',
			country_name: 'કુવૈત'
		},
		{
			iso_code: 'CYM',
			locale_id: 'gu-IN',
			country_name: 'કેમેન આઇલેન્ડ્સ'
		},
		{
			iso_code: 'KAZ',
			locale_id: 'gu-IN',
			country_name: 'કઝાકિસ્તાન'
		},
		{
			iso_code: 'LAO',
			locale_id: 'gu-IN',
			country_name: 'લાઓસ'
		},
		{
			iso_code: 'LBN',
			locale_id: 'gu-IN',
			country_name: 'લેબનોન'
		},
		{
			iso_code: 'LCA',
			locale_id: 'gu-IN',
			country_name: 'સેંટ લુસિયા'
		},
		{
			iso_code: 'LIE',
			locale_id: 'gu-IN',
			country_name: 'લૈચટેંસ્ટેઇન'
		},
		{
			iso_code: 'LKA',
			locale_id: 'gu-IN',
			country_name: 'શ્રીલંકા'
		},
		{
			iso_code: 'LBR',
			locale_id: 'gu-IN',
			country_name: 'લાઇબેરિયા'
		},
		{
			iso_code: 'LSO',
			locale_id: 'gu-IN',
			country_name: 'લેસોથો'
		},
		{
			iso_code: 'LTU',
			locale_id: 'gu-IN',
			country_name: 'લિથુઆનિયા'
		},
		{
			iso_code: 'LUX',
			locale_id: 'gu-IN',
			country_name: 'લક્ઝમબર્ગ'
		},
		{
			iso_code: 'LVA',
			locale_id: 'gu-IN',
			country_name: 'લાત્વિયા'
		},
		{
			iso_code: 'LBY',
			locale_id: 'gu-IN',
			country_name: 'લિબિયા'
		},
		{
			iso_code: 'MAR',
			locale_id: 'gu-IN',
			country_name: 'મોરોક્કો'
		},
		{
			iso_code: 'MCO',
			locale_id: 'gu-IN',
			country_name: 'મોનાકો'
		},
		{
			iso_code: 'MDA',
			locale_id: 'gu-IN',
			country_name: 'મોલડોવા'
		},
		{
			iso_code: 'MNE',
			locale_id: 'gu-IN',
			country_name: 'મૉન્ટેનેગ્રો'
		},
		{
			iso_code: 'MAF',
			locale_id: 'gu-IN',
			country_name: 'સેંટ માર્ટિન'
		},
		{
			iso_code: 'MDG',
			locale_id: 'gu-IN',
			country_name: 'મેડાગાસ્કર'
		},
		{
			iso_code: 'MHL',
			locale_id: 'gu-IN',
			country_name: 'માર્શલ આઇલેન્ડ્સ'
		},
		{
			iso_code: 'MKD',
			locale_id: 'gu-IN',
			country_name: 'ઉત્તર મેસેડોનિયા'
		},
		{
			iso_code: 'MLI',
			locale_id: 'gu-IN',
			country_name: 'માલી'
		},
		{
			iso_code: 'MMR',
			locale_id: 'gu-IN',
			country_name: 'મ્યાંમાર'
		},
		{
			iso_code: 'MNG',
			locale_id: 'gu-IN',
			country_name: 'મંગોલિયા'
		},
		{
			iso_code: 'MAC',
			locale_id: 'gu-IN',
			country_name: 'મકાઉ SAR ચીન'
		},
		{
			iso_code: 'MNP',
			locale_id: 'gu-IN',
			country_name: 'ઉત્તરી મારિયાના આઇલેન્ડ્સ'
		},
		{
			iso_code: 'MTQ',
			locale_id: 'gu-IN',
			country_name: 'માર્ટીનીક'
		},
		{
			iso_code: 'MRT',
			locale_id: 'gu-IN',
			country_name: 'મૌરિટાનિયા'
		},
		{
			iso_code: 'MSR',
			locale_id: 'gu-IN',
			country_name: 'મોંટસેરાત'
		},
		{
			iso_code: 'MLT',
			locale_id: 'gu-IN',
			country_name: 'માલ્ટા'
		},
		{
			iso_code: 'MUS',
			locale_id: 'gu-IN',
			country_name: 'મોરિશિયસ'
		},
		{
			iso_code: 'MDV',
			locale_id: 'gu-IN',
			country_name: 'માલદિવ્સ'
		},
		{
			iso_code: 'MWI',
			locale_id: 'gu-IN',
			country_name: 'માલાવી'
		},
		{
			iso_code: 'MEX',
			locale_id: 'gu-IN',
			country_name: 'મેક્સિકો'
		},
		{
			iso_code: 'MYS',
			locale_id: 'gu-IN',
			country_name: 'મલેશિયા'
		},
		{
			iso_code: 'MOZ',
			locale_id: 'gu-IN',
			country_name: 'મોઝામ્બિક'
		},
		{
			iso_code: 'NAM',
			locale_id: 'gu-IN',
			country_name: 'નામિબિયા'
		},
		{
			iso_code: 'NCL',
			locale_id: 'gu-IN',
			country_name: 'ન્યુ સેલેડોનિયા'
		},
		{
			iso_code: 'NER',
			locale_id: 'gu-IN',
			country_name: 'નાઇજર'
		},
		{
			iso_code: 'NFK',
			locale_id: 'gu-IN',
			country_name: 'નોરફોક આઇલેન્ડ્સ'
		},
		{
			iso_code: 'NGA',
			locale_id: 'gu-IN',
			country_name: 'નાઇજેરિયા'
		},
		{
			iso_code: 'NIC',
			locale_id: 'gu-IN',
			country_name: 'નિકારાગુઆ'
		},
		{
			iso_code: 'NLD',
			locale_id: 'gu-IN',
			country_name: 'નેધરલેન્ડ્સ'
		},
		{
			iso_code: 'NOR',
			locale_id: 'gu-IN',
			country_name: 'નૉર્વે'
		},
		{
			iso_code: 'NPL',
			locale_id: 'gu-IN',
			country_name: 'નેપાળ'
		},
		{
			iso_code: 'NRU',
			locale_id: 'gu-IN',
			country_name: 'નૌરુ'
		},
		{
			iso_code: 'NIU',
			locale_id: 'gu-IN',
			country_name: 'નીયુ'
		},
		{
			iso_code: 'NZL',
			locale_id: 'gu-IN',
			country_name: 'ન્યુઝીલૅન્ડ'
		},
		{
			iso_code: 'OMN',
			locale_id: 'gu-IN',
			country_name: 'ઓમાન'
		},
		{
			iso_code: 'PAN',
			locale_id: 'gu-IN',
			country_name: 'પનામા'
		},
		{
			iso_code: 'PER',
			locale_id: 'gu-IN',
			country_name: 'પેરુ'
		},
		{
			iso_code: 'PYF',
			locale_id: 'gu-IN',
			country_name: 'ફ્રેંચ પોલિનેશિયા'
		},
		{
			iso_code: 'PNG',
			locale_id: 'gu-IN',
			country_name: 'પાપુઆ ન્યૂ ગિની'
		},
		{
			iso_code: 'PHL',
			locale_id: 'gu-IN',
			country_name: 'ફિલિપિન્સ'
		},
		{
			iso_code: 'PAK',
			locale_id: 'gu-IN',
			country_name: 'પાકિસ્તાન'
		},
		{
			iso_code: 'POL',
			locale_id: 'gu-IN',
			country_name: 'પોલેંડ'
		},
		{
			iso_code: 'SPM',
			locale_id: 'gu-IN',
			country_name: 'સેંટ પીએરી અને મિક્યુલોન'
		},
		{
			iso_code: 'PCN',
			locale_id: 'gu-IN',
			country_name: 'પીટકૈર્ન આઇલેન્ડ્સ'
		},
		{
			iso_code: 'PRI',
			locale_id: 'gu-IN',
			country_name: 'પ્યુઅર્ટો રિકો'
		},
		{
			iso_code: 'PSE',
			locale_id: 'gu-IN',
			country_name: 'પેલેસ્ટિનિયન ટેરિટરી'
		},
		{
			iso_code: 'PRT',
			locale_id: 'gu-IN',
			country_name: 'પોર્ટુગલ'
		},
		{
			iso_code: 'PLW',
			locale_id: 'gu-IN',
			country_name: 'પલાઉ'
		},
		{
			iso_code: 'PRY',
			locale_id: 'gu-IN',
			country_name: 'પેરાગ્વે'
		},
		{
			iso_code: 'QAT',
			locale_id: 'gu-IN',
			country_name: 'કતાર'
		},
		{
			iso_code: 'REU',
			locale_id: 'gu-IN',
			country_name: 'રીયુનિયન'
		},
		{
			iso_code: 'ROU',
			locale_id: 'gu-IN',
			country_name: 'રોમાનિયા'
		},
		{
			iso_code: 'SRB',
			locale_id: 'gu-IN',
			country_name: 'સર્બિયા'
		},
		{
			iso_code: 'RUS',
			locale_id: 'gu-IN',
			country_name: 'રશિયા'
		},
		{
			iso_code: 'RWA',
			locale_id: 'gu-IN',
			country_name: 'રવાંડા'
		},
		{
			iso_code: 'SAU',
			locale_id: 'gu-IN',
			country_name: 'સાઉદી અરેબિયા'
		},
		{
			iso_code: 'SLB',
			locale_id: 'gu-IN',
			country_name: 'સોલોમન આઇલેન્ડ્સ'
		},
		{
			iso_code: 'SYC',
			locale_id: 'gu-IN',
			country_name: 'સેશેલ્સ'
		},
		{
			iso_code: 'SDN',
			locale_id: 'gu-IN',
			country_name: 'સુદાન'
		},
		{
			iso_code: 'SWE',
			locale_id: 'gu-IN',
			country_name: 'સ્વીડન'
		},
		{
			iso_code: 'SGP',
			locale_id: 'gu-IN',
			country_name: 'સિંગાપુર'
		},
		{
			iso_code: 'SHN',
			locale_id: 'gu-IN',
			country_name: 'સેંટ હેલેના'
		},
		{
			iso_code: 'SVN',
			locale_id: 'gu-IN',
			country_name: 'સ્લોવેનિયા'
		},
		{
			iso_code: 'SJM',
			locale_id: 'gu-IN',
			country_name: 'સ્વાલબર્ડ અને જેન મેયન'
		},
		{
			iso_code: 'SVK',
			locale_id: 'gu-IN',
			country_name: 'સ્લોવેકિયા'
		},
		{
			iso_code: 'SLE',
			locale_id: 'gu-IN',
			country_name: 'સીએરા લેઓન'
		},
		{
			iso_code: 'SMR',
			locale_id: 'gu-IN',
			country_name: 'સૅન મેરિનો'
		},
		{
			iso_code: 'SEN',
			locale_id: 'gu-IN',
			country_name: 'સેનેગલ'
		},
		{
			iso_code: 'SOM',
			locale_id: 'gu-IN',
			country_name: 'સોમાલિયા'
		},
		{
			iso_code: 'SUR',
			locale_id: 'gu-IN',
			country_name: 'સુરીનામ'
		},
		{
			iso_code: 'SSD',
			locale_id: 'gu-IN',
			country_name: 'દક્ષિણ સુદાન'
		},
		{
			iso_code: 'STP',
			locale_id: 'gu-IN',
			country_name: 'સાઓ ટૉમ અને પ્રિંસિપે'
		},
		{
			iso_code: 'SLV',
			locale_id: 'gu-IN',
			country_name: 'એલ સેલ્વાડોર'
		},
		{
			iso_code: 'SXM',
			locale_id: 'gu-IN',
			country_name: 'સિંટ માર્ટેન'
		},
		{
			iso_code: 'SYR',
			locale_id: 'gu-IN',
			country_name: 'સીરિયા'
		},
		{
			iso_code: 'SWZ',
			locale_id: 'gu-IN',
			country_name: 'એસ્વાટીની'
		},
		{
			iso_code: 'TCA',
			locale_id: 'gu-IN',
			country_name: 'તુર્ક્સ અને કેકોઝ આઇલેન્ડ્સ'
		},
		{
			iso_code: 'TCD',
			locale_id: 'gu-IN',
			country_name: 'ચાડ'
		},
		{
			iso_code: 'ATF',
			locale_id: 'gu-IN',
			country_name: 'ફ્રેંચ સધર્ન ટેરિટરીઝ'
		},
		{
			iso_code: 'TGO',
			locale_id: 'gu-IN',
			country_name: 'ટોગો'
		},
		{
			iso_code: 'THA',
			locale_id: 'gu-IN',
			country_name: 'થાઇલેંડ'
		},
		{
			iso_code: 'TJK',
			locale_id: 'gu-IN',
			country_name: 'તાજીકિસ્તાન'
		},
		{
			iso_code: 'TKL',
			locale_id: 'gu-IN',
			country_name: 'ટોકેલાઉ'
		},
		{
			iso_code: 'TLS',
			locale_id: 'gu-IN',
			country_name: 'તિમોર-લેસ્તે'
		},
		{
			iso_code: 'TKM',
			locale_id: 'gu-IN',
			country_name: 'તુર્કમેનિસ્તાન'
		},
		{
			iso_code: 'TUN',
			locale_id: 'gu-IN',
			country_name: 'ટ્યુનિશિયા'
		},
		{
			iso_code: 'TON',
			locale_id: 'gu-IN',
			country_name: 'ટોંગા'
		},
		{
			iso_code: 'TUR',
			locale_id: 'gu-IN',
			country_name: 'તુર્કિયે'
		},
		{
			iso_code: 'TTO',
			locale_id: 'gu-IN',
			country_name: 'ટ્રિનીદાદ અને ટોબેગો'
		},
		{
			iso_code: 'TUV',
			locale_id: 'gu-IN',
			country_name: 'તુવાલુ'
		},
		{
			iso_code: 'TWN',
			locale_id: 'gu-IN',
			country_name: 'તાઇવાન'
		},
		{
			iso_code: 'TZA',
			locale_id: 'gu-IN',
			country_name: 'તાંઝાનિયા'
		},
		{
			iso_code: 'UKR',
			locale_id: 'gu-IN',
			country_name: 'યુક્રેન'
		},
		{
			iso_code: 'UGA',
			locale_id: 'gu-IN',
			country_name: 'યુગાંડા'
		},
		{
			iso_code: 'UMI',
			locale_id: 'gu-IN',
			country_name: 'યુ.એસ. આઉટલાઇનિંગ આઇલેન્ડ્સ'
		},
		{
			iso_code: 'USA',
			locale_id: 'gu-IN',
			country_name: 'યુનાઇટેડ સ્ટેટ્સ'
		},
		{
			iso_code: 'URY',
			locale_id: 'gu-IN',
			country_name: 'ઉરુગ્વે'
		},
		{
			iso_code: 'UZB',
			locale_id: 'gu-IN',
			country_name: 'ઉઝ્બેકિસ્તાન'
		},
		{
			iso_code: 'VAT',
			locale_id: 'gu-IN',
			country_name: 'વેટિકન સિટી'
		},
		{
			iso_code: 'VCT',
			locale_id: 'gu-IN',
			country_name: 'સેંટ વિન્સેંટ અને ગ્રેનેડાઇંસ'
		},
		{
			iso_code: 'VEN',
			locale_id: 'gu-IN',
			country_name: 'વેનેઝુએલા'
		},
		{
			iso_code: 'VGB',
			locale_id: 'gu-IN',
			country_name: 'બ્રિટિશ વર્જિન આઇલેન્ડ્સ'
		},
		{
			iso_code: 'VIR',
			locale_id: 'gu-IN',
			country_name: 'યુએસ વર્જિન આઇલેન્ડ્સ'
		},
		{
			iso_code: 'VNM',
			locale_id: 'gu-IN',
			country_name: 'વિયેતનામ'
		},
		{
			iso_code: 'VUT',
			locale_id: 'gu-IN',
			country_name: 'વાનુઆતુ'
		},
		{
			iso_code: 'WLF',
			locale_id: 'gu-IN',
			country_name: 'વૉલિસ અને ફ્યુચુના'
		},
		{
			iso_code: 'WSM',
			locale_id: 'gu-IN',
			country_name: 'સમોઆ'
		},
		{
			iso_code: 'YEM',
			locale_id: 'gu-IN',
			country_name: 'યમન'
		},
		{
			iso_code: 'MYT',
			locale_id: 'gu-IN',
			country_name: 'મેયોટ'
		},
		{
			iso_code: 'ZAF',
			locale_id: 'gu-IN',
			country_name: 'દક્ષિણ આફ્રિકા'
		},
		{
			iso_code: 'ZMB',
			locale_id: 'gu-IN',
			country_name: 'ઝામ્બિયા'
		},
		{
			iso_code: 'ZWE',
			locale_id: 'gu-IN',
			country_name: 'ઝિમ્બાબ્વે'
		}
	];

	await knex.batchInsert(
		'country_code_by_locale',
		rows.map((row) => ({
			...row,
			created_at: now,
			updated_at: now
		})),
		500
	);
};
