/* eslint-disable security/detect-object-injection */
/**
 * Static seed for country_code_by_locale with bn-BD locale data
 *
 * This is a static version of the seed that includes pre-generated
 * country names for the bn-BD locale.
 *
 * This seed depends on:
 * - 001-country-codes-seed.cjs (populates country_code_master)
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 003-country-codes-by-locale-seed-bn-BD.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM country_code_by_locale WHERE locale_id = 'bn-BD'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for bn-BD locale
	const rows = [
		{
			iso_code: 'AND',
			locale_id: 'bn-BD',
			country_name: 'আন্ডোরা'
		},
		{
			iso_code: 'ARE',
			locale_id: 'bn-BD',
			country_name: 'সংযুক্ত আরব আমিরাত'
		},
		{
			iso_code: 'AFG',
			locale_id: 'bn-BD',
			country_name: 'আফগানিস্তান'
		},
		{
			iso_code: 'ATG',
			locale_id: 'bn-BD',
			country_name: 'অ্যান্টিগুয়া ও বারবুডা'
		},
		{
			iso_code: 'AIA',
			locale_id: 'bn-BD',
			country_name: 'অ্যাঙ্গুইলা'
		},
		{
			iso_code: 'ALB',
			locale_id: 'bn-BD',
			country_name: 'আলবেনিয়া'
		},
		{
			iso_code: 'ARM',
			locale_id: 'bn-BD',
			country_name: 'আর্মেনিয়া'
		},
		{
			iso_code: 'AGO',
			locale_id: 'bn-BD',
			country_name: 'অ্যাঙ্গোলা'
		},
		{
			iso_code: 'ATA',
			locale_id: 'bn-BD',
			country_name: 'অ্যান্টার্কটিকা'
		},
		{
			iso_code: 'ARG',
			locale_id: 'bn-BD',
			country_name: 'আর্জেন্টিনা'
		},
		{
			iso_code: 'ASM',
			locale_id: 'bn-BD',
			country_name: 'আমেরিকান সামোয়া'
		},
		{
			iso_code: 'AUT',
			locale_id: 'bn-BD',
			country_name: 'অস্ট্রিয়া'
		},
		{
			iso_code: 'AUS',
			locale_id: 'bn-BD',
			country_name: 'অস্ট্রেলিয়া'
		},
		{
			iso_code: 'ABW',
			locale_id: 'bn-BD',
			country_name: 'আরুবা'
		},
		{
			iso_code: 'ALA',
			locale_id: 'bn-BD',
			country_name: 'অলান্ড দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'AZE',
			locale_id: 'bn-BD',
			country_name: 'আজারবাইজান'
		},
		{
			iso_code: 'BIH',
			locale_id: 'bn-BD',
			country_name: 'বসনিয়া ও হার্জেগোভিনা'
		},
		{
			iso_code: 'BRB',
			locale_id: 'bn-BD',
			country_name: 'বার্বাডোজ'
		},
		{
			iso_code: 'BGD',
			locale_id: 'bn-BD',
			country_name: 'বাংলাদেশ'
		},
		{
			iso_code: 'BEL',
			locale_id: 'bn-BD',
			country_name: 'বেলজিয়াম'
		},
		{
			iso_code: 'BFA',
			locale_id: 'bn-BD',
			country_name: 'বুরকিনা ফাসো'
		},
		{
			iso_code: 'BGR',
			locale_id: 'bn-BD',
			country_name: 'বুলগেরিয়া'
		},
		{
			iso_code: 'BHR',
			locale_id: 'bn-BD',
			country_name: 'বাহারিন'
		},
		{
			iso_code: 'BDI',
			locale_id: 'bn-BD',
			country_name: 'বুরুন্ডি'
		},
		{
			iso_code: 'BEN',
			locale_id: 'bn-BD',
			country_name: 'বেনিন'
		},
		{
			iso_code: 'BLM',
			locale_id: 'bn-BD',
			country_name: 'সেন্ট বার্থেলেমি'
		},
		{
			iso_code: 'BMU',
			locale_id: 'bn-BD',
			country_name: 'বারমুডা'
		},
		{
			iso_code: 'BRN',
			locale_id: 'bn-BD',
			country_name: 'ব্রুনেই'
		},
		{
			iso_code: 'BOL',
			locale_id: 'bn-BD',
			country_name: 'বলিভিয়া'
		},
		{
			iso_code: 'BES',
			locale_id: 'bn-BD',
			country_name: 'ক্যারিবিয়ান নেদারল্যান্ডস'
		},
		{
			iso_code: 'BRA',
			locale_id: 'bn-BD',
			country_name: 'ব্রাজিল'
		},
		{
			iso_code: 'BHS',
			locale_id: 'bn-BD',
			country_name: 'বাহামা দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'BTN',
			locale_id: 'bn-BD',
			country_name: 'ভুটান'
		},
		{
			iso_code: 'BVT',
			locale_id: 'bn-BD',
			country_name: 'বোভেট দ্বীপ'
		},
		{
			iso_code: 'BWA',
			locale_id: 'bn-BD',
			country_name: 'বতসোয়ানা'
		},
		{
			iso_code: 'BLR',
			locale_id: 'bn-BD',
			country_name: 'বেলারুশ'
		},
		{
			iso_code: 'BLZ',
			locale_id: 'bn-BD',
			country_name: 'বেলিজ'
		},
		{
			iso_code: 'CAN',
			locale_id: 'bn-BD',
			country_name: 'কানাডা'
		},
		{
			iso_code: 'CCK',
			locale_id: 'bn-BD',
			country_name: 'কোকোস (কিলিং) দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'ZAR',
			locale_id: 'bn-BD',
			country_name: 'কঙ্গো-কিনশাসা'
		},
		{
			iso_code: 'CAF',
			locale_id: 'bn-BD',
			country_name: 'মধ্য আফ্রিকান প্রজাতন্ত্র'
		},
		{
			iso_code: 'COG',
			locale_id: 'bn-BD',
			country_name: 'কঙ্গো - ব্রাজাভিল'
		},
		{
			iso_code: 'CHE',
			locale_id: 'bn-BD',
			country_name: 'সুইজারল্যান্ড'
		},
		{
			iso_code: 'CIV',
			locale_id: 'bn-BD',
			country_name: 'কোট ডি‘আইভোর'
		},
		{
			iso_code: 'COK',
			locale_id: 'bn-BD',
			country_name: 'কুক দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'CHL',
			locale_id: 'bn-BD',
			country_name: 'চিলি'
		},
		{
			iso_code: 'CMR',
			locale_id: 'bn-BD',
			country_name: 'ক্যামেরুন'
		},
		{
			iso_code: 'CHN',
			locale_id: 'bn-BD',
			country_name: 'চীন'
		},
		{
			iso_code: 'COL',
			locale_id: 'bn-BD',
			country_name: 'কলম্বিয়া'
		},
		{
			iso_code: 'CRI',
			locale_id: 'bn-BD',
			country_name: 'কোস্টারিকা'
		},
		{
			iso_code: 'CUB',
			locale_id: 'bn-BD',
			country_name: 'কিউবা'
		},
		{
			iso_code: 'CPV',
			locale_id: 'bn-BD',
			country_name: 'কেপ ভার্দে'
		},
		{
			iso_code: 'CUW',
			locale_id: 'bn-BD',
			country_name: 'কুরাসাও'
		},
		{
			iso_code: 'CXR',
			locale_id: 'bn-BD',
			country_name: 'ক্রিসমাস দ্বীপ'
		},
		{
			iso_code: 'CYP',
			locale_id: 'bn-BD',
			country_name: 'সাইপ্রাস'
		},
		{
			iso_code: 'CZE',
			locale_id: 'bn-BD',
			country_name: 'চেকিয়া'
		},
		{
			iso_code: 'DEU',
			locale_id: 'bn-BD',
			country_name: 'জার্মানি'
		},
		{
			iso_code: 'DJI',
			locale_id: 'bn-BD',
			country_name: 'জিবুতি'
		},
		{
			iso_code: 'DNK',
			locale_id: 'bn-BD',
			country_name: 'ডেনমার্ক'
		},
		{
			iso_code: 'DMA',
			locale_id: 'bn-BD',
			country_name: 'ডোমিনিকা'
		},
		{
			iso_code: 'DOM',
			locale_id: 'bn-BD',
			country_name: 'ডোমেনিকান প্রজাতন্ত্র'
		},
		{
			iso_code: 'DZA',
			locale_id: 'bn-BD',
			country_name: 'আলজেরিয়া'
		},
		{
			iso_code: 'ECU',
			locale_id: 'bn-BD',
			country_name: 'ইকুয়েডর'
		},
		{
			iso_code: 'EST',
			locale_id: 'bn-BD',
			country_name: 'এস্তোনিয়া'
		},
		{
			iso_code: 'EGY',
			locale_id: 'bn-BD',
			country_name: 'মিশর'
		},
		{
			iso_code: 'ESH',
			locale_id: 'bn-BD',
			country_name: 'পশ্চিম সাহারা'
		},
		{
			iso_code: 'ERI',
			locale_id: 'bn-BD',
			country_name: 'ইরিত্রিয়া'
		},
		{
			iso_code: 'ESP',
			locale_id: 'bn-BD',
			country_name: 'স্পেন'
		},
		{
			iso_code: 'ETH',
			locale_id: 'bn-BD',
			country_name: 'ইথিওপিয়া'
		},
		{
			iso_code: 'FIN',
			locale_id: 'bn-BD',
			country_name: 'ফিনল্যান্ড'
		},
		{
			iso_code: 'FJI',
			locale_id: 'bn-BD',
			country_name: 'ফিজি'
		},
		{
			iso_code: 'FLK',
			locale_id: 'bn-BD',
			country_name: 'ফকল্যান্ড দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'FSM',
			locale_id: 'bn-BD',
			country_name: 'মাইক্রোনেশিয়া'
		},
		{
			iso_code: 'FRO',
			locale_id: 'bn-BD',
			country_name: 'ফ্যারো দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'FRA',
			locale_id: 'bn-BD',
			country_name: 'ফ্রান্স'
		},
		{
			iso_code: 'GAB',
			locale_id: 'bn-BD',
			country_name: 'গ্যাবন'
		},
		{
			iso_code: 'GBR',
			locale_id: 'bn-BD',
			country_name: 'যুক্তরাজ্য'
		},
		{
			iso_code: 'GRD',
			locale_id: 'bn-BD',
			country_name: 'গ্রেনাডা'
		},
		{
			iso_code: 'GEO',
			locale_id: 'bn-BD',
			country_name: 'জর্জিয়া'
		},
		{
			iso_code: 'GUF',
			locale_id: 'bn-BD',
			country_name: 'ফরাসী গায়ানা'
		},
		{
			iso_code: 'GGY',
			locale_id: 'bn-BD',
			country_name: 'গার্নসি'
		},
		{
			iso_code: 'GHA',
			locale_id: 'bn-BD',
			country_name: 'ঘানা'
		},
		{
			iso_code: 'GIB',
			locale_id: 'bn-BD',
			country_name: 'জিব্রাল্টার'
		},
		{
			iso_code: 'GRL',
			locale_id: 'bn-BD',
			country_name: 'গ্রীনল্যান্ড'
		},
		{
			iso_code: 'GMB',
			locale_id: 'bn-BD',
			country_name: 'গাম্বিয়া'
		},
		{
			iso_code: 'GIN',
			locale_id: 'bn-BD',
			country_name: 'গিনি'
		},
		{
			iso_code: 'GLP',
			locale_id: 'bn-BD',
			country_name: 'গুয়াদেলৌপ'
		},
		{
			iso_code: 'GNQ',
			locale_id: 'bn-BD',
			country_name: 'নিরক্ষীয় গিনি'
		},
		{
			iso_code: 'GRC',
			locale_id: 'bn-BD',
			country_name: 'গ্রীস'
		},
		{
			iso_code: 'SGS',
			locale_id: 'bn-BD',
			country_name: 'দক্ষিণ জর্জিয়া ও দক্ষিণ স্যান্ডউইচ দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'GTM',
			locale_id: 'bn-BD',
			country_name: 'গুয়াতেমালা'
		},
		{
			iso_code: 'GUM',
			locale_id: 'bn-BD',
			country_name: 'গুয়াম'
		},
		{
			iso_code: 'GNB',
			locale_id: 'bn-BD',
			country_name: 'গিনি-বিসাউ'
		},
		{
			iso_code: 'GUY',
			locale_id: 'bn-BD',
			country_name: 'গিয়ানা'
		},
		{
			iso_code: 'HKG',
			locale_id: 'bn-BD',
			country_name: 'হংকং এসএআর চীনা'
		},
		{
			iso_code: 'HMD',
			locale_id: 'bn-BD',
			country_name: 'হার্ড এবং ম্যাকডোনাল্ড দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'HND',
			locale_id: 'bn-BD',
			country_name: 'হন্ডুরাস'
		},
		{
			iso_code: 'HRV',
			locale_id: 'bn-BD',
			country_name: 'ক্রোয়েশিয়া'
		},
		{
			iso_code: 'HTI',
			locale_id: 'bn-BD',
			country_name: 'হাইতি'
		},
		{
			iso_code: 'HUN',
			locale_id: 'bn-BD',
			country_name: 'হাঙ্গেরি'
		},
		{
			iso_code: 'IDN',
			locale_id: 'bn-BD',
			country_name: 'ইন্দোনেশিয়া'
		},
		{
			iso_code: 'IRL',
			locale_id: 'bn-BD',
			country_name: 'আয়ারল্যান্ড'
		},
		{
			iso_code: 'ISR',
			locale_id: 'bn-BD',
			country_name: 'ইজরায়েল'
		},
		{
			iso_code: 'IMN',
			locale_id: 'bn-BD',
			country_name: 'আইল অফ ম্যান'
		},
		{
			iso_code: 'IND',
			locale_id: 'bn-BD',
			country_name: 'ভারত'
		},
		{
			iso_code: 'IOT',
			locale_id: 'bn-BD',
			country_name: 'ব্রিটিশ ভারত মহাসাগরীয় অঞ্চল'
		},
		{
			iso_code: 'IRQ',
			locale_id: 'bn-BD',
			country_name: 'ইরাক'
		},
		{
			iso_code: 'IRN',
			locale_id: 'bn-BD',
			country_name: 'ইরান'
		},
		{
			iso_code: 'ISL',
			locale_id: 'bn-BD',
			country_name: 'আইসল্যান্ড'
		},
		{
			iso_code: 'ITA',
			locale_id: 'bn-BD',
			country_name: 'ইতালি'
		},
		{
			iso_code: 'JEY',
			locale_id: 'bn-BD',
			country_name: 'জার্সি'
		},
		{
			iso_code: 'JAM',
			locale_id: 'bn-BD',
			country_name: 'জামাইকা'
		},
		{
			iso_code: 'JOR',
			locale_id: 'bn-BD',
			country_name: 'জর্ডন'
		},
		{
			iso_code: 'JPN',
			locale_id: 'bn-BD',
			country_name: 'জাপান'
		},
		{
			iso_code: 'KEN',
			locale_id: 'bn-BD',
			country_name: 'কেনিয়া'
		},
		{
			iso_code: 'KGZ',
			locale_id: 'bn-BD',
			country_name: 'কিরগিজিস্তান'
		},
		{
			iso_code: 'KHM',
			locale_id: 'bn-BD',
			country_name: 'কম্বোডিয়া'
		},
		{
			iso_code: 'KIR',
			locale_id: 'bn-BD',
			country_name: 'কিরিবাতি'
		},
		{
			iso_code: 'COM',
			locale_id: 'bn-BD',
			country_name: 'কমোরোস'
		},
		{
			iso_code: 'KNA',
			locale_id: 'bn-BD',
			country_name: 'সেন্ট কিটস ও নেভিস'
		},
		{
			iso_code: 'PRK',
			locale_id: 'bn-BD',
			country_name: 'উত্তর কোরিয়া'
		},
		{
			iso_code: 'KOR',
			locale_id: 'bn-BD',
			country_name: 'দক্ষিণ কোরিয়া'
		},
		{
			iso_code: 'KWT',
			locale_id: 'bn-BD',
			country_name: 'কুয়েত'
		},
		{
			iso_code: 'CYM',
			locale_id: 'bn-BD',
			country_name: 'কেম্যান দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'KAZ',
			locale_id: 'bn-BD',
			country_name: 'কাজাখস্তান'
		},
		{
			iso_code: 'LAO',
			locale_id: 'bn-BD',
			country_name: 'লাওস'
		},
		{
			iso_code: 'LBN',
			locale_id: 'bn-BD',
			country_name: 'লেবানন'
		},
		{
			iso_code: 'LCA',
			locale_id: 'bn-BD',
			country_name: 'সেন্ট লুসিয়া'
		},
		{
			iso_code: 'LIE',
			locale_id: 'bn-BD',
			country_name: 'লিচেনস্টেইন'
		},
		{
			iso_code: 'LKA',
			locale_id: 'bn-BD',
			country_name: 'শ্রীলঙ্কা'
		},
		{
			iso_code: 'LBR',
			locale_id: 'bn-BD',
			country_name: 'লাইবেরিয়া'
		},
		{
			iso_code: 'LSO',
			locale_id: 'bn-BD',
			country_name: 'লেসোথো'
		},
		{
			iso_code: 'LTU',
			locale_id: 'bn-BD',
			country_name: 'লিথুয়ানিয়া'
		},
		{
			iso_code: 'LUX',
			locale_id: 'bn-BD',
			country_name: 'লাক্সেমবার্গ'
		},
		{
			iso_code: 'LVA',
			locale_id: 'bn-BD',
			country_name: 'লাটভিয়া'
		},
		{
			iso_code: 'LBY',
			locale_id: 'bn-BD',
			country_name: 'লিবিয়া'
		},
		{
			iso_code: 'MAR',
			locale_id: 'bn-BD',
			country_name: 'মরক্কো'
		},
		{
			iso_code: 'MCO',
			locale_id: 'bn-BD',
			country_name: 'মোনাকো'
		},
		{
			iso_code: 'MDA',
			locale_id: 'bn-BD',
			country_name: 'মলডোভা'
		},
		{
			iso_code: 'MNE',
			locale_id: 'bn-BD',
			country_name: 'মন্টিনিগ্রো'
		},
		{
			iso_code: 'MAF',
			locale_id: 'bn-BD',
			country_name: 'সেন্ট মার্টিন'
		},
		{
			iso_code: 'MDG',
			locale_id: 'bn-BD',
			country_name: 'মাদাগাস্কার'
		},
		{
			iso_code: 'MHL',
			locale_id: 'bn-BD',
			country_name: 'মার্শাল দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'MKD',
			locale_id: 'bn-BD',
			country_name: 'উত্তর ম্যাসেডোনিয়া'
		},
		{
			iso_code: 'MLI',
			locale_id: 'bn-BD',
			country_name: 'মালি'
		},
		{
			iso_code: 'MMR',
			locale_id: 'bn-BD',
			country_name: 'মায়ানমার (বার্মা)'
		},
		{
			iso_code: 'MNG',
			locale_id: 'bn-BD',
			country_name: 'মঙ্গোলিয়া'
		},
		{
			iso_code: 'MAC',
			locale_id: 'bn-BD',
			country_name: 'ম্যাকাও এসএআর চীন'
		},
		{
			iso_code: 'MNP',
			locale_id: 'bn-BD',
			country_name: 'উত্তরাঞ্চলীয় মারিয়ানা দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'MTQ',
			locale_id: 'bn-BD',
			country_name: 'মার্টিনিক'
		},
		{
			iso_code: 'MRT',
			locale_id: 'bn-BD',
			country_name: 'মরিতানিয়া'
		},
		{
			iso_code: 'MSR',
			locale_id: 'bn-BD',
			country_name: 'মন্টসেরাট'
		},
		{
			iso_code: 'MLT',
			locale_id: 'bn-BD',
			country_name: 'মাল্টা'
		},
		{
			iso_code: 'MUS',
			locale_id: 'bn-BD',
			country_name: 'মরিশাস'
		},
		{
			iso_code: 'MDV',
			locale_id: 'bn-BD',
			country_name: 'মালদ্বীপ'
		},
		{
			iso_code: 'MWI',
			locale_id: 'bn-BD',
			country_name: 'মালাউই'
		},
		{
			iso_code: 'MEX',
			locale_id: 'bn-BD',
			country_name: 'মেক্সিকো'
		},
		{
			iso_code: 'MYS',
			locale_id: 'bn-BD',
			country_name: 'মালয়েশিয়া'
		},
		{
			iso_code: 'MOZ',
			locale_id: 'bn-BD',
			country_name: 'মোজাম্বিক'
		},
		{
			iso_code: 'NAM',
			locale_id: 'bn-BD',
			country_name: 'নামিবিয়া'
		},
		{
			iso_code: 'NCL',
			locale_id: 'bn-BD',
			country_name: 'নিউ ক্যালেডোনিয়া'
		},
		{
			iso_code: 'NER',
			locale_id: 'bn-BD',
			country_name: 'নাইজার'
		},
		{
			iso_code: 'NFK',
			locale_id: 'bn-BD',
			country_name: 'নরফোক দ্বীপ'
		},
		{
			iso_code: 'NGA',
			locale_id: 'bn-BD',
			country_name: 'নাইজেরিয়া'
		},
		{
			iso_code: 'NIC',
			locale_id: 'bn-BD',
			country_name: 'নিকারাগুয়া'
		},
		{
			iso_code: 'NLD',
			locale_id: 'bn-BD',
			country_name: 'নেদারল্যান্ডস'
		},
		{
			iso_code: 'NOR',
			locale_id: 'bn-BD',
			country_name: 'নরওয়ে'
		},
		{
			iso_code: 'NPL',
			locale_id: 'bn-BD',
			country_name: 'নেপাল'
		},
		{
			iso_code: 'NRU',
			locale_id: 'bn-BD',
			country_name: 'নাউরু'
		},
		{
			iso_code: 'NIU',
			locale_id: 'bn-BD',
			country_name: 'নিউয়ে'
		},
		{
			iso_code: 'NZL',
			locale_id: 'bn-BD',
			country_name: 'নিউজিল্যান্ড'
		},
		{
			iso_code: 'OMN',
			locale_id: 'bn-BD',
			country_name: 'ওমান'
		},
		{
			iso_code: 'PAN',
			locale_id: 'bn-BD',
			country_name: 'পানামা'
		},
		{
			iso_code: 'PER',
			locale_id: 'bn-BD',
			country_name: 'পেরু'
		},
		{
			iso_code: 'PYF',
			locale_id: 'bn-BD',
			country_name: 'ফরাসী পলিনেশিয়া'
		},
		{
			iso_code: 'PNG',
			locale_id: 'bn-BD',
			country_name: 'পাপুয়া নিউ গিনি'
		},
		{
			iso_code: 'PHL',
			locale_id: 'bn-BD',
			country_name: 'ফিলিপাইন'
		},
		{
			iso_code: 'PAK',
			locale_id: 'bn-BD',
			country_name: 'পাকিস্তান'
		},
		{
			iso_code: 'POL',
			locale_id: 'bn-BD',
			country_name: 'পোল্যান্ড'
		},
		{
			iso_code: 'SPM',
			locale_id: 'bn-BD',
			country_name: 'সেন্ট পিয়ের ও মিকুয়েলন'
		},
		{
			iso_code: 'PCN',
			locale_id: 'bn-BD',
			country_name: 'পিটকেয়ার্ন দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'PRI',
			locale_id: 'bn-BD',
			country_name: 'পুয়ের্তো রিকো'
		},
		{
			iso_code: 'PSE',
			locale_id: 'bn-BD',
			country_name: 'প্যালেস্টাইন ভূখণ্ড'
		},
		{
			iso_code: 'PRT',
			locale_id: 'bn-BD',
			country_name: 'পর্তুগাল'
		},
		{
			iso_code: 'PLW',
			locale_id: 'bn-BD',
			country_name: 'পালাউ'
		},
		{
			iso_code: 'PRY',
			locale_id: 'bn-BD',
			country_name: 'প্যারাগুয়ে'
		},
		{
			iso_code: 'QAT',
			locale_id: 'bn-BD',
			country_name: 'কাতার'
		},
		{
			iso_code: 'REU',
			locale_id: 'bn-BD',
			country_name: 'রিইউনিয়ন'
		},
		{
			iso_code: 'ROU',
			locale_id: 'bn-BD',
			country_name: 'রোমানিয়া'
		},
		{
			iso_code: 'SRB',
			locale_id: 'bn-BD',
			country_name: 'সার্বিয়া'
		},
		{
			iso_code: 'RUS',
			locale_id: 'bn-BD',
			country_name: 'রাশিয়া'
		},
		{
			iso_code: 'RWA',
			locale_id: 'bn-BD',
			country_name: 'রুয়ান্ডা'
		},
		{
			iso_code: 'SAU',
			locale_id: 'bn-BD',
			country_name: 'সৌদি আরব'
		},
		{
			iso_code: 'SLB',
			locale_id: 'bn-BD',
			country_name: 'সলোমন দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'SYC',
			locale_id: 'bn-BD',
			country_name: 'সিসিলি'
		},
		{
			iso_code: 'SDN',
			locale_id: 'bn-BD',
			country_name: 'সুদান'
		},
		{
			iso_code: 'SWE',
			locale_id: 'bn-BD',
			country_name: 'সুইডেন'
		},
		{
			iso_code: 'SGP',
			locale_id: 'bn-BD',
			country_name: 'সিঙ্গাপুর'
		},
		{
			iso_code: 'SHN',
			locale_id: 'bn-BD',
			country_name: 'সেন্ট হেলেনা'
		},
		{
			iso_code: 'SVN',
			locale_id: 'bn-BD',
			country_name: 'স্লোভানিয়া'
		},
		{
			iso_code: 'SJM',
			locale_id: 'bn-BD',
			country_name: 'স্বালবার্ড ও জান মেয়েন'
		},
		{
			iso_code: 'SVK',
			locale_id: 'bn-BD',
			country_name: 'স্লোভাকিয়া'
		},
		{
			iso_code: 'SLE',
			locale_id: 'bn-BD',
			country_name: 'সিয়েরা লিওন'
		},
		{
			iso_code: 'SMR',
			locale_id: 'bn-BD',
			country_name: 'সান মারিনো'
		},
		{
			iso_code: 'SEN',
			locale_id: 'bn-BD',
			country_name: 'সেনেগাল'
		},
		{
			iso_code: 'SOM',
			locale_id: 'bn-BD',
			country_name: 'সোমালিয়া'
		},
		{
			iso_code: 'SUR',
			locale_id: 'bn-BD',
			country_name: 'সুরিনাম'
		},
		{
			iso_code: 'SSD',
			locale_id: 'bn-BD',
			country_name: 'দক্ষিণ সুদান'
		},
		{
			iso_code: 'STP',
			locale_id: 'bn-BD',
			country_name: 'সাওটোমা ও প্রিন্সিপি'
		},
		{
			iso_code: 'SLV',
			locale_id: 'bn-BD',
			country_name: 'এল সালভেদর'
		},
		{
			iso_code: 'SXM',
			locale_id: 'bn-BD',
			country_name: 'সিন্ট মার্টেন'
		},
		{
			iso_code: 'SYR',
			locale_id: 'bn-BD',
			country_name: 'সিরিয়া'
		},
		{
			iso_code: 'SWZ',
			locale_id: 'bn-BD',
			country_name: 'ইসওয়াতিনি'
		},
		{
			iso_code: 'TCA',
			locale_id: 'bn-BD',
			country_name: 'তুর্কস ও কাইকোস দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'TCD',
			locale_id: 'bn-BD',
			country_name: 'চাদ'
		},
		{
			iso_code: 'ATF',
			locale_id: 'bn-BD',
			country_name: 'ফরাসী দক্ষিণাঞ্চল'
		},
		{
			iso_code: 'TGO',
			locale_id: 'bn-BD',
			country_name: 'টোগো'
		},
		{
			iso_code: 'THA',
			locale_id: 'bn-BD',
			country_name: 'থাইল্যান্ড'
		},
		{
			iso_code: 'TJK',
			locale_id: 'bn-BD',
			country_name: 'তাজিকিস্তান'
		},
		{
			iso_code: 'TKL',
			locale_id: 'bn-BD',
			country_name: 'টোকেলাউ'
		},
		{
			iso_code: 'TLS',
			locale_id: 'bn-BD',
			country_name: 'তিমুর-লেস্তে'
		},
		{
			iso_code: 'TKM',
			locale_id: 'bn-BD',
			country_name: 'তুর্কমেনিস্তান'
		},
		{
			iso_code: 'TUN',
			locale_id: 'bn-BD',
			country_name: 'তিউনিসিয়া'
		},
		{
			iso_code: 'TON',
			locale_id: 'bn-BD',
			country_name: 'টোঙ্গা'
		},
		{
			iso_code: 'TUR',
			locale_id: 'bn-BD',
			country_name: 'তুরস্ক'
		},
		{
			iso_code: 'TTO',
			locale_id: 'bn-BD',
			country_name: 'ত্রিনিদাদ ও টোবাগো'
		},
		{
			iso_code: 'TUV',
			locale_id: 'bn-BD',
			country_name: 'টুভালু'
		},
		{
			iso_code: 'TWN',
			locale_id: 'bn-BD',
			country_name: 'তাইওয়ান'
		},
		{
			iso_code: 'TZA',
			locale_id: 'bn-BD',
			country_name: 'তাঞ্জানিয়া'
		},
		{
			iso_code: 'UKR',
			locale_id: 'bn-BD',
			country_name: 'ইউক্রেন'
		},
		{
			iso_code: 'UGA',
			locale_id: 'bn-BD',
			country_name: 'উগান্ডা'
		},
		{
			iso_code: 'UMI',
			locale_id: 'bn-BD',
			country_name: 'যুক্তরাষ্ট্রের পার্শ্ববর্তী দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'USA',
			locale_id: 'bn-BD',
			country_name: 'মার্কিন যুক্তরাষ্ট্র'
		},
		{
			iso_code: 'URY',
			locale_id: 'bn-BD',
			country_name: 'উরুগুয়ে'
		},
		{
			iso_code: 'UZB',
			locale_id: 'bn-BD',
			country_name: 'উজবেকিস্তান'
		},
		{
			iso_code: 'VAT',
			locale_id: 'bn-BD',
			country_name: 'ভ্যাটিকান সিটি'
		},
		{
			iso_code: 'VCT',
			locale_id: 'bn-BD',
			country_name: 'সেন্ট ভিনসেন্ট ও গ্রেনাডিনস'
		},
		{
			iso_code: 'VEN',
			locale_id: 'bn-BD',
			country_name: 'ভেনেজুয়েলা'
		},
		{
			iso_code: 'VGB',
			locale_id: 'bn-BD',
			country_name: 'ব্রিটিশ ভার্জিন দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'VIR',
			locale_id: 'bn-BD',
			country_name: 'মার্কিন যুক্তরাষ্ট্রীয় ভার্জিন দ্বীপপুঞ্জ'
		},
		{
			iso_code: 'VNM',
			locale_id: 'bn-BD',
			country_name: 'ভিয়েতনাম'
		},
		{
			iso_code: 'VUT',
			locale_id: 'bn-BD',
			country_name: 'ভানুয়াটু'
		},
		{
			iso_code: 'WLF',
			locale_id: 'bn-BD',
			country_name: 'ওয়ালিস ও ফুটুনা'
		},
		{
			iso_code: 'WSM',
			locale_id: 'bn-BD',
			country_name: 'সামোয়া'
		},
		{
			iso_code: 'YEM',
			locale_id: 'bn-BD',
			country_name: 'ইয়েমেন'
		},
		{
			iso_code: 'MYT',
			locale_id: 'bn-BD',
			country_name: 'মায়োত্তে'
		},
		{
			iso_code: 'ZAF',
			locale_id: 'bn-BD',
			country_name: 'দক্ষিণ আফ্রিকা'
		},
		{
			iso_code: 'ZMB',
			locale_id: 'bn-BD',
			country_name: 'জাম্বিয়া'
		},
		{
			iso_code: 'ZWE',
			locale_id: 'bn-BD',
			country_name: 'জিম্বাবোয়ে'
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
