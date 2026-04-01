/* eslint-disable security/detect-object-injection */
/**
 * Static seed for locale_by_locale with bn-BD locale data
 *
 * This is a static version of the seed that includes pre-generated
 * locale names (language + country) for the bn-BD locale.
 *
 * This seed depends on:
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 004-locales-by-locale-seed-bn-BD.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM locale_by_locale WHERE locale_id = 'bn-BD'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for bn-BD locale
	const rows = [
		{
			locale_code: 'aa-ET',
			locale_id: 'bn-BD',
			language_name: 'আফার'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'bn-BD',
			language_name: 'আবখাজিয়ান'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'bn-BD',
			language_name: 'অ্যাচাইনিজ'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'bn-BD',
			language_name: 'আকোলি'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'bn-BD',
			language_name: 'অদাগ্মে'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'bn-BD',
			language_name: 'আদেগে'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'bn-BD',
			language_name: 'আবেস্তীয়'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'bn-BD',
			language_name: 'তিউনিসীয় আরবি'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'bn-BD',
			language_name: 'আফ্রিকান'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'bn-BD',
			language_name: 'আফ্রিহিলি'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'bn-BD',
			language_name: 'এঘেম'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'bn-BD',
			language_name: 'আইনু'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'bn-BD',
			language_name: 'আকান'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'bn-BD',
			language_name: 'আক্কাদিয়ান'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'bn-BD',
			language_name: 'আলাবামা'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'bn-BD',
			language_name: 'আলেউত'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিন আলতাই'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'bn-BD',
			language_name: 'আমহারিক'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'bn-BD',
			language_name: 'আর্গোনিজ'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন ইংরেজী'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'bn-BD',
			language_name: 'ওবোলো'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'bn-BD',
			language_name: 'আঙ্গিকা'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'bn-BD',
			language_name: 'আরামাইক'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'bn-BD',
			language_name: 'আরামাইক'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'bn-BD',
			language_name: 'আরামাইক'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'bn-BD',
			language_name: 'আরামাইক'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'bn-BD',
			language_name: 'মাপুচে'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'bn-BD',
			language_name: 'আরাওনা'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'bn-BD',
			language_name: 'আরাপাহো'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'bn-BD',
			language_name: 'আলজেরীয় আরবি'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'bn-BD',
			language_name: 'নজদি আরবি'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'bn-BD',
			language_name: 'আরাওয়াক'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'bn-BD',
			language_name: 'মরোক্কান আরবি'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'bn-BD',
			language_name: 'মিশরীয় আরবি'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'bn-BD',
			language_name: 'অসমীয়া'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'bn-BD',
			language_name: 'আসু'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'bn-BD',
			language_name: 'আমেরিকান সাংকেতিক ভাষা'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'bn-BD',
			language_name: 'আস্তুরিয়'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'bn-BD',
			language_name: 'আটিকামেকিউ'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'bn-BD',
			language_name: 'আভেরিক'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'bn-BD',
			language_name: 'আওয়াধি'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'bn-BD',
			language_name: 'আয়মারা'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'bn-BD',
			language_name: 'আজারবাইজানী'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'bn-BD',
			language_name: 'আজারবাইজানী'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'bn-BD',
			language_name: 'আজারবাইজানী'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'bn-BD',
			language_name: 'আজারবাইজানী'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'bn-BD',
			language_name: 'বাশকির'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'bn-BD',
			language_name: 'বেলুচী'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'bn-BD',
			language_name: 'বালিনীয়'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'bn-BD',
			language_name: 'বাভারীয়'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'bn-BD',
			language_name: 'বাসা'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'bn-BD',
			language_name: 'বামুন'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'bn-BD',
			language_name: 'বাটাক তোবা'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'bn-BD',
			language_name: 'ঘোমালা'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'bn-BD',
			language_name: 'বেলারুশীয়'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'bn-BD',
			language_name: 'বেজা'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'bn-BD',
			language_name: 'বেম্বা'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'bn-BD',
			language_name: 'বেতাউই'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'bn-BD',
			language_name: 'বেনা'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'bn-BD',
			language_name: 'বাফুট'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'bn-BD',
			language_name: 'বাদাগা'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'bn-BD',
			language_name: 'বুলগেরিয়'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'bn-BD',
			language_name: 'হরিয়ানভি'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'bn-BD',
			language_name: 'পশ্চিম বালোচি'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'bn-BD',
			language_name: 'ভোজপুরি'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'bn-BD',
			language_name: 'বিসলামা'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'bn-BD',
			language_name: 'বিকোল'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'bn-BD',
			language_name: 'বিনি'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'bn-BD',
			language_name: 'বানজার'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'bn-BD',
			language_name: 'কোম'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'bn-BD',
			language_name: 'সিকসিকা'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'bn-BD',
			language_name: 'অ্যানি'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'bn-BD',
			language_name: 'তাই দাম'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'bn-BD',
			language_name: 'বামবারা'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'bn-BD',
			language_name: 'বাংলা'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'bn-BD',
			language_name: 'তিব্বতি'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'bn-BD',
			language_name: 'বিষ্ণুপ্রিয়া'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'bn-BD',
			language_name: 'বাখতিয়ারি'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'bn-BD',
			language_name: 'ব্রেটন'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'bn-BD',
			language_name: 'ব্রাজ'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'bn-BD',
			language_name: 'ব্রাহুই'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'bn-BD',
			language_name: 'বোড়ো'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'bn-BD',
			language_name: 'বসনীয়'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'bn-BD',
			language_name: 'আকুসে'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'bn-BD',
			language_name: 'বুরিয়াত'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'bn-BD',
			language_name: 'বুগিনিজ'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'bn-BD',
			language_name: 'বুলু'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'bn-BD',
			language_name: 'ব্লিন'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'bn-BD',
			language_name: 'মেদুম্বা'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'bn-BD',
			language_name: 'কাতালান'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'bn-BD',
			language_name: 'ক্যাডো'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'bn-BD',
			language_name: 'ক্যারিব'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'bn-BD',
			language_name: 'কায়ুগা'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'bn-BD',
			language_name: 'আত্সাম'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'bn-BD',
			language_name: 'চাকমা'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'bn-BD',
			language_name: 'চেচেন'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'bn-BD',
			language_name: 'চেবুয়ানো'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'bn-BD',
			language_name: 'চিগা'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'bn-BD',
			language_name: 'চামোরো'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'bn-BD',
			language_name: 'চিবচা'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'bn-BD',
			language_name: 'চাগাতাই'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'bn-BD',
			language_name: 'চুকিজ'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'bn-BD',
			language_name: 'মারি'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'bn-BD',
			language_name: 'চিনুক জার্গন'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'bn-BD',
			language_name: 'চকটাও'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'bn-BD',
			language_name: 'চিপেওয়ান'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'bn-BD',
			language_name: 'চেরোকি'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'bn-BD',
			language_name: 'চেইয়েন'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'bn-BD',
			language_name: 'চিকাসো'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'bn-BD',
			language_name: 'মধ্য কুর্দিশ'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'bn-BD',
			language_name: 'চিলকোটিন'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'bn-BD',
			language_name: 'কর্সিকান'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'bn-BD',
			language_name: 'কপটিক'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'bn-BD',
			language_name: 'কাপিজনন'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'bn-BD',
			language_name: 'ক্রি'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'bn-BD',
			language_name: 'মিচিফ'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'bn-BD',
			language_name: 'ক্রিমিয়ান তুর্কি'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিণ পূর্ব ক্রী'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'bn-BD',
			language_name: 'প্লেনস ক্রী'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'bn-BD',
			language_name: 'উত্তর পূর্ব ক্রী'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'bn-BD',
			language_name: 'মুস ক্রী'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'bn-BD',
			language_name: 'সেসেলওয়া ক্রেওল ফ্রেঞ্চ'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'bn-BD',
			language_name: 'চেক'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'bn-BD',
			language_name: 'কাশুবিয়ান'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'bn-BD',
			language_name: 'সোয়াম্পি ক্রী'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'bn-BD',
			language_name: 'চার্চ স্লাভিক'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'bn-BD',
			language_name: 'চার্চ স্লাভিক'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'bn-BD',
			language_name: 'চুবাস'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'bn-BD',
			language_name: 'ওয়েলশ'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'bn-BD',
			language_name: 'ডেনিশ'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'bn-BD',
			language_name: 'ডাকোটা'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'bn-BD',
			language_name: 'দার্গওয়া'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'bn-BD',
			language_name: 'তাইতা'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'bn-BD',
			language_name: 'জার্মান'
		},
		{
			locale_code: 'del-US',
			locale_id: 'bn-BD',
			language_name: 'ডেলাওয়ের'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'bn-BD',
			language_name: 'স্ল্যাভ'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'bn-BD',
			language_name: 'দোগ্রীব'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'bn-BD',
			language_name: 'ডিংকা'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'bn-BD',
			language_name: 'জার্মা'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'bn-BD',
			language_name: 'ডোগরি'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'bn-BD',
			language_name: 'সোর্বিয়ান'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'bn-BD',
			language_name: 'কেন্দ্রীয় দুসুন'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'bn-BD',
			language_name: 'দুয়ালা'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'bn-BD',
			language_name: 'মধ্য ডাচ'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'bn-BD',
			language_name: 'দিবেহি'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'bn-BD',
			language_name: 'জোলা-ফনী'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'bn-BD',
			language_name: 'ডিউলা'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'bn-BD',
			language_name: 'জোংখা'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'bn-BD',
			language_name: 'দাজাগা'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'bn-BD',
			language_name: 'এম্বু'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'bn-BD',
			language_name: 'ইউয়ি'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'bn-BD',
			language_name: 'এফিক'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'bn-BD',
			language_name: 'এমিলিয়ান'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন মিশরীয়'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'bn-BD',
			language_name: 'ইকাজুক'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'bn-BD',
			language_name: 'গ্রিক'
		},
		{
			locale_code: 'en-US',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-GB',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'bn-BD',
			language_name: 'মধ্য ইংরেজি'
		},
		{
			locale_code: 'es-ES',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'esu-US',
			locale_id: 'bn-BD',
			language_name: 'কেন্দ্রীয় ইউপিক'
		},
		{
			locale_code: 'et-EE',
			locale_id: 'bn-BD',
			language_name: 'এস্তোনীয়'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'bn-BD',
			language_name: 'বাস্ক'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'bn-BD',
			language_name: 'ইওন্ডো'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'bn-BD',
			language_name: 'এক্সত্রেমাদুরান'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'bn-BD',
			language_name: 'ফার্সি'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'bn-BD',
			language_name: 'ফ্যাঙ্গ'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'bn-BD',
			language_name: 'ফুলা'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'bn-BD',
			language_name: 'ফুলা'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'bn-BD',
			language_name: 'ফিনিশ'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'bn-BD',
			language_name: 'ফিলিপিনো'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'bn-BD',
			language_name: 'টর্নেদালেন ফিনিশ'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'bn-BD',
			language_name: 'ফিজিয়ান'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'bn-BD',
			language_name: 'ফেরোইস'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'bn-BD',
			language_name: 'ফন'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'bn-BD',
			language_name: 'কাজুন ফরাসি'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'bn-BD',
			language_name: 'মধ্য ফরাসি'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন ফরাসি'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'bn-BD',
			language_name: 'আর্পিতান'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'bn-BD',
			language_name: 'উত্তরাঞ্চলীয় ফ্রিসিয়ান'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'bn-BD',
			language_name: 'পূর্ব ফ্রিসিয়'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'bn-BD',
			language_name: 'ফ্রিউলিও'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'bn-BD',
			language_name: 'পশ্চিম ফ্রিসিয়ান'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'bn-BD',
			language_name: 'আইরিশ'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'bn-BD',
			language_name: 'গা'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'bn-BD',
			language_name: 'গাগাউজ'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'bn-BD',
			language_name: 'গান চীনা'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'bn-BD',
			language_name: 'গায়ো'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'bn-BD',
			language_name: 'বায়া'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'bn-BD',
			language_name: 'জরথুস্ত্রী দারি'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'bn-BD',
			language_name: 'স্কটিশ-গ্যেলিক'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'bn-BD',
			language_name: 'গীজ'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'bn-BD',
			language_name: 'গিলবার্টিজ'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'bn-BD',
			language_name: 'গ্যালিশীয়'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'bn-BD',
			language_name: 'গিলাকি'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'bn-BD',
			language_name: 'মধ্য-উচ্চ জার্মানি'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'bn-BD',
			language_name: 'গুয়ারানি'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন উচ্চ জার্মানি'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'bn-BD',
			language_name: 'গোন্ডি'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'bn-BD',
			language_name: 'গোরোন্তালো'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'bn-BD',
			language_name: 'গথিক'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'bn-BD',
			language_name: 'গ্রেবো'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন গ্রীক'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'bn-BD',
			language_name: 'সুইস জার্মান'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'bn-BD',
			language_name: 'গুজরাটি'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'bn-BD',
			language_name: 'ওয়াইউ'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'bn-BD',
			language_name: 'ফ্রাফ্রা'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'bn-BD',
			language_name: 'গুসী'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'bn-BD',
			language_name: 'ম্যাঙ্কস'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'bn-BD',
			language_name: 'গওইচ্’ইন'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'bn-BD',
			language_name: 'হাউসা'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'bn-BD',
			language_name: 'হাউসা'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'bn-BD',
			language_name: 'হাউসা'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'bn-BD',
			language_name: 'হাইডা'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'bn-BD',
			language_name: 'হাক্কা চীনা'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'bn-BD',
			language_name: 'হাক্কা চীনা'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'bn-BD',
			language_name: 'হাওয়াইয়ান'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিণী হায়দা'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'bn-BD',
			language_name: 'হিব্রু'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'bn-BD',
			language_name: 'হিন্দি'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'bn-BD',
			language_name: 'ফিজি হিন্দি'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'bn-BD',
			language_name: 'হিলিগ্যায়নোন'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'bn-BD',
			language_name: 'হিট্টিট'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'bn-BD',
			language_name: 'হ্‌মোঙ'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'bn-BD',
			language_name: 'হমং জুয়া'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'bn-BD',
			language_name: 'হমং জুয়া'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'bn-BD',
			language_name: 'হিরি মোতু'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'bn-BD',
			language_name: 'ক্রোয়েশীয়'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'bn-BD',
			language_name: 'সোর্বিয়ান'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'bn-BD',
			language_name: 'Xiang চীনা'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'bn-BD',
			language_name: 'হাইতিয়ান ক্রেওল'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'bn-BD',
			language_name: 'হাঙ্গেরীয়'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'bn-BD',
			language_name: 'হুপা'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'bn-BD',
			language_name: 'হাল্কোমেলেম'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'bn-BD',
			language_name: 'আর্মেনিয়'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'bn-BD',
			language_name: 'হেরেরো'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'bn-BD',
			language_name: 'ইবান'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'bn-BD',
			language_name: 'ইবিবিও'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'bn-BD',
			language_name: 'ইন্দোনেশীয়'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'bn-BD',
			language_name: 'ইন্টারলিঙ্গ'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'bn-BD',
			language_name: 'ইগবো'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'bn-BD',
			language_name: 'সিচুয়ান য়ি'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'bn-BD',
			language_name: 'ইনুপিয়াক'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'bn-BD',
			language_name: 'পশ্চিম কানাডিয় ইনুক্টিটুট'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'bn-BD',
			language_name: 'ইলোকো'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'bn-BD',
			language_name: 'ইঙ্গুশ'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'bn-BD',
			language_name: 'আইসল্যান্ডীয়'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'bn-BD',
			language_name: 'ইতালীয়'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'bn-BD',
			language_name: 'ইনুক্টিটুট'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'bn-BD',
			language_name: 'ইংগ্রিয়ান'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'bn-BD',
			language_name: 'জাপানি'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'bn-BD',
			language_name: 'জ্যামাইকান ক্রেওল ইংরেজি'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'bn-BD',
			language_name: 'গোম্বা'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'bn-BD',
			language_name: 'মাকামে'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'bn-BD',
			language_name: 'জুদেও ফার্সি'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'bn-BD',
			language_name: 'জুদেও আরবি'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'bn-BD',
			language_name: 'জুটিশ'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'bn-BD',
			language_name: 'জাভানিজ'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'bn-BD',
			language_name: 'জর্জিয়ান'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'bn-BD',
			language_name: 'কারা-কাল্পাক'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'bn-BD',
			language_name: 'কাবাইলে'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'bn-BD',
			language_name: 'কাচিন'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'bn-BD',
			language_name: 'জজু'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'bn-BD',
			language_name: 'কাম্বা'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'bn-BD',
			language_name: 'কাউই'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'bn-BD',
			language_name: 'কাবার্ডিয়ান'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'bn-BD',
			language_name: 'কানেম্বু'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'bn-BD',
			language_name: 'টিয়াপ'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'bn-BD',
			language_name: 'মাকোন্দে'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'bn-BD',
			language_name: 'কাবুভারদিয়ানু'
		},
		{
			locale_code: 'kek-GT',
			locale_id: 'bn-BD',
			language_name: 'Qʼeqchiʼ'
		},
		{
			locale_code: 'ken-CM',
			locale_id: 'bn-BD',
			language_name: 'কেনইয়াং'
		},
		{
			locale_code: 'kfo-CI',
			locale_id: 'bn-BD',
			language_name: 'কোরো'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'bn-BD',
			language_name: 'কঙ্গো'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'bn-BD',
			language_name: 'কেইনগ্যাং'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'bn-BD',
			language_name: 'খাশি'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'bn-BD',
			language_name: 'খোটানিজ'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'bn-BD',
			language_name: 'কোয়রা চীনি'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'bn-BD',
			language_name: 'খোয়ার'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'bn-BD',
			language_name: 'কিকুয়ু'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'bn-BD',
			language_name: 'কিরমান্জকি'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'bn-BD',
			language_name: 'কোয়ানিয়ামা'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'bn-BD',
			language_name: 'কাজাখ'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'bn-BD',
			language_name: 'কাজাখ'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'bn-BD',
			language_name: 'কাজাখ'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'bn-BD',
			language_name: 'কাজাখ'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'bn-BD',
			language_name: 'কাজাখ'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'bn-BD',
			language_name: 'কাকো'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'bn-BD',
			language_name: 'কালাল্লিসুট'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'bn-BD',
			language_name: 'কালেনজিন'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'bn-BD',
			language_name: 'খমের'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'bn-BD',
			language_name: 'কিম্বুন্দু'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'bn-BD',
			language_name: 'কন্নড়'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'bn-BD',
			language_name: 'কোরিয়ান'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'bn-BD',
			language_name: 'কমি-পারমিআক'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'bn-BD',
			language_name: 'কোঙ্কণী'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'bn-BD',
			language_name: 'কোস্রাইন'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'bn-BD',
			language_name: 'ক্‌পেল্লে'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'bn-BD',
			language_name: 'কানুরি'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'bn-BD',
			language_name: 'কারচে-বাল্কার'
		},
		{
			locale_code: 'kri-SL',
			locale_id: 'bn-BD',
			language_name: 'ক্রিও'
		},
		{
			locale_code: 'krj-PH',
			locale_id: 'bn-BD',
			language_name: 'কিনারায়া'
		},
		{
			locale_code: 'krl-RU',
			locale_id: 'bn-BD',
			language_name: 'কারেলিয়ান'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'bn-BD',
			language_name: 'কুরুখ'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'bn-BD',
			language_name: 'কাশ্মীরি'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'bn-BD',
			language_name: 'শাম্বালা'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'bn-BD',
			language_name: 'বাফিয়া'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'bn-BD',
			language_name: 'কলোগনিয়ান'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'bn-BD',
			language_name: 'কুর্দিশ'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'bn-BD',
			language_name: 'কুর্দিশ'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'bn-BD',
			language_name: 'কুর্দিশ'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'bn-BD',
			language_name: 'কুর্দিশ'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'bn-BD',
			language_name: 'কুর্দিশ'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'bn-BD',
			language_name: 'কুর্দিশ'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'bn-BD',
			language_name: 'কুর্দিশ'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'bn-BD',
			language_name: 'কুর্দিশ'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'bn-BD',
			language_name: 'কুমিয়াক'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'bn-BD',
			language_name: 'কুটেনাই'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'bn-BD',
			language_name: 'কোমি'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'bn-BD',
			language_name: 'কর্ণিশ'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'bn-BD',
			language_name: 'কোয়াক’ওয়ালা'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'bn-BD',
			language_name: 'কুভি'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'bn-BD',
			language_name: 'কিরগিজ'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'bn-BD',
			language_name: 'কিরগিজ'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'bn-BD',
			language_name: 'কিরগিজ'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'bn-BD',
			language_name: 'লাতিন'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'bn-BD',
			language_name: 'লাদিনো'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'bn-BD',
			language_name: 'লাঙ্গি'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'bn-BD',
			language_name: 'লান্ডা'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'bn-BD',
			language_name: 'লাম্বা'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'bn-BD',
			language_name: 'লুক্সেমবার্গীয়'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'bn-BD',
			language_name: 'লেজঘিয়ান'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'bn-BD',
			language_name: 'গান্ডা'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'bn-BD',
			language_name: 'লিম্বুর্গিশ'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'bn-BD',
			language_name: 'লিগুরিয়ান'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'bn-BD',
			language_name: 'লিল্লুয়েট'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'bn-BD',
			language_name: 'লিভোনিয়ান'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'bn-BD',
			language_name: 'লাকোটা'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'bn-BD',
			language_name: 'লম্বার্ড'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'bn-BD',
			language_name: 'লিঙ্গালা'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'bn-BD',
			language_name: 'লাও'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'bn-BD',
			language_name: 'মোঙ্গো'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'bn-BD',
			language_name: 'লুইসিয়ানা ক্রেওল'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'bn-BD',
			language_name: 'লোজি'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'bn-BD',
			language_name: 'উত্তরাঞ্চলীয় লুরি'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'bn-BD',
			language_name: 'সামিয়া'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'bn-BD',
			language_name: 'লিথুয়ানীয়'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'bn-BD',
			language_name: 'লাতগালীয়'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'bn-BD',
			language_name: 'লুবা-কাটাঙ্গা'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'bn-BD',
			language_name: 'লুবা-লুলুয়া'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'bn-BD',
			language_name: 'লুইসেনো'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'bn-BD',
			language_name: 'লুন্ডা'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'bn-BD',
			language_name: 'লুয়ো'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'bn-BD',
			language_name: 'মিজো'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'bn-BD',
			language_name: 'লুইয়া'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'bn-BD',
			language_name: 'লাটভিয়'
		},
		{
			locale_code: 'lzh-CN',
			locale_id: 'bn-BD',
			language_name: 'সাহিত্যিক চীনা'
		},
		{
			locale_code: 'lzz-TR',
			locale_id: 'bn-BD',
			language_name: 'লাজ'
		},
		{
			locale_code: 'lzz-GE',
			locale_id: 'bn-BD',
			language_name: 'লাজ'
		},
		{
			locale_code: 'mad-ID',
			locale_id: 'bn-BD',
			language_name: 'মাদুরেজ'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'bn-BD',
			language_name: 'মাফা'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'bn-BD',
			language_name: 'মাগাহি'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'bn-BD',
			language_name: 'মৈথিলি'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'bn-BD',
			language_name: 'ম্যাকাসার'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'bn-BD',
			language_name: 'ম্যান্ডিঙ্গো'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'bn-BD',
			language_name: 'ম্যান্ডিঙ্গো'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'bn-BD',
			language_name: 'মাসাই'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'bn-BD',
			language_name: 'মাবা'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'bn-BD',
			language_name: 'মোকশা'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'bn-BD',
			language_name: 'ম্যাণ্ডার'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'bn-BD',
			language_name: 'মেন্ডে'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'bn-BD',
			language_name: 'মেরু'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'bn-BD',
			language_name: 'মরিসিয়েন'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'bn-BD',
			language_name: 'মালাগাসি'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'bn-BD',
			language_name: 'মধ্য আইরিশ'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'bn-BD',
			language_name: 'মাখুয়া-মেত্তো'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'bn-BD',
			language_name: 'মেটা'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'bn-BD',
			language_name: 'মার্শালিজ'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'bn-BD',
			language_name: 'মাওরি'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'bn-BD',
			language_name: 'মিকম্যাক'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'bn-BD',
			language_name: 'মিনাংকাবাউ'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'bn-BD',
			language_name: 'ম্যাসেডোনিয়া'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'bn-BD',
			language_name: 'মালয়ালম'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'bn-BD',
			language_name: 'মোঙ্গোলীয়'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'bn-BD',
			language_name: 'মোঙ্গোলীয়'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'bn-BD',
			language_name: 'মাঞ্চু'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'bn-BD',
			language_name: 'মণিপুরী'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'bn-BD',
			language_name: 'ইন্নু-এমুন'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'bn-BD',
			language_name: 'মোহাওক'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'bn-BD',
			language_name: 'মসি'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'bn-BD',
			language_name: 'মারাঠি'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'bn-BD',
			language_name: 'পশ্চিম মারি'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'bn-BD',
			language_name: 'মালয়'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'bn-BD',
			language_name: 'মালয়'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'bn-BD',
			language_name: 'মল্টীয়'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'bn-BD',
			language_name: 'মুদাঙ্গ'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'bn-BD',
			language_name: 'মুস্কোগী'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'bn-BD',
			language_name: 'মিরান্ডিজ'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'bn-BD',
			language_name: 'মারোয়ারি'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'bn-BD',
			language_name: 'মেন্তাওয়াই'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'bn-BD',
			language_name: 'বর্মি'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'bn-BD',
			language_name: 'মিয়েনে'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'bn-BD',
			language_name: 'এরজিয়া'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'bn-BD',
			language_name: 'মাজানদেরানি'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'bn-BD',
			language_name: 'নাউরু'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'bn-BD',
			language_name: 'মিন নান চীনা'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'bn-BD',
			language_name: 'মিন নান চীনা'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'bn-BD',
			language_name: 'মিন নান চীনা'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'bn-BD',
			language_name: 'নেয়াপোলিটান'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'bn-BD',
			language_name: 'নামা'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'bn-BD',
			language_name: 'নরওয়েজিয়ান বোকমাল'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'bn-BD',
			language_name: 'উত্তর এন্দেবেলে'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'bn-BD',
			language_name: 'জার্মান'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'bn-BD',
			language_name: 'নেপালি'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'bn-BD',
			language_name: 'নেওয়ারি'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'bn-BD',
			language_name: 'এন্দোঙ্গা'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'bn-BD',
			language_name: 'নিয়াস'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'bn-BD',
			language_name: 'নিউয়ান'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'bn-BD',
			language_name: 'আও নাগা'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'bn-BD',
			language_name: 'ওলন্দাজ'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'bn-BD',
			language_name: 'কোয়াসিও'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'bn-BD',
			language_name: 'নরওয়েজিয়ান নিনর্স্ক'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'bn-BD',
			language_name: 'নগিয়েম্বুন'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'bn-BD',
			language_name: 'নরওয়েজীয়'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'bn-BD',
			language_name: 'নোগাই'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন নর্স'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'bn-BD',
			language_name: 'এন’কো'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিণ এনডেবেলে'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'bn-BD',
			language_name: 'উত্তরাঞ্চলীয় সোথো'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'bn-BD',
			language_name: 'নুয়ার'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'bn-BD',
			language_name: 'নাভাজো'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন নেওয়ারী'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'bn-BD',
			language_name: 'নায়াঞ্জা'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'bn-BD',
			language_name: 'ন্যায়ামওয়েজি'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'bn-BD',
			language_name: 'ন্যায়াঙ্কোলে'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'bn-BD',
			language_name: 'ন্যোরো'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'bn-BD',
			language_name: 'এনজিমা'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'bn-BD',
			language_name: 'অক্সিটান'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'bn-BD',
			language_name: 'ওজিবওয়া'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'bn-BD',
			language_name: 'উত্তর পশ্চিম ওজিবোয়া'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'bn-BD',
			language_name: 'মধ্য ওজিবুয়া'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'bn-BD',
			language_name: 'ওজি-ক্রী'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'bn-BD',
			language_name: 'পশ্চিম ওজিবোয়া'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'bn-BD',
			language_name: 'ওকানাগান'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'bn-BD',
			language_name: 'ওরোমো'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'bn-BD',
			language_name: 'ওড়িয়া'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'bn-BD',
			language_name: 'ওসেটিক'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'bn-BD',
			language_name: 'ওসেজ'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'bn-BD',
			language_name: 'অটোমান তুর্কি'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'bn-BD',
			language_name: 'পাঞ্জাবি'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'bn-BD',
			language_name: 'পাঞ্জাবি'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'bn-BD',
			language_name: 'পাঙ্গাসিনান'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'bn-BD',
			language_name: 'পাহ্লাভি'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'bn-BD',
			language_name: 'পাহ্লাভি'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'bn-BD',
			language_name: 'পাম্পাঙ্গা'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'bn-BD',
			language_name: 'পাপিয়ামেন্টো'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'bn-BD',
			language_name: 'পালায়ুয়ান'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'bn-BD',
			language_name: 'পিকার্ড'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'bn-BD',
			language_name: 'নাইজেরীয় পিজিন'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'bn-BD',
			language_name: 'পেনসিলভানিয়া জার্মান'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'bn-BD',
			language_name: 'প্লাউটডিচ'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন ফার্সি'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'bn-BD',
			language_name: 'প্যালাটাইন জার্মান'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'bn-BD',
			language_name: 'ফোনিশীয়ান'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'bn-BD',
			language_name: 'পালি'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'bn-BD',
			language_name: 'পালি'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'bn-BD',
			language_name: 'পালি'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'bn-BD',
			language_name: 'পালি'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'bn-BD',
			language_name: 'পালি'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'bn-BD',
			language_name: 'পিজিন'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'bn-BD',
			language_name: 'পোলিশ'
		},
		{
			locale_code: 'pms-IT',
			locale_id: 'bn-BD',
			language_name: 'পিয়েমন্তীয়'
		},
		{
			locale_code: 'pnt-GR',
			locale_id: 'bn-BD',
			language_name: 'পন্টিক'
		},
		{
			locale_code: 'pnt-RU',
			locale_id: 'bn-BD',
			language_name: 'পন্টিক'
		},
		{
			locale_code: 'pnt-TR',
			locale_id: 'bn-BD',
			language_name: 'পন্টিক'
		},
		{
			locale_code: 'pon-FM',
			locale_id: 'bn-BD',
			language_name: 'পোহ্নপেইয়ান'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'bn-BD',
			language_name: 'মালিসেট-পাসামাকুয়োড্ডি'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'bn-BD',
			language_name: 'প্রুশিয়ান'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন প্রোভেনসাল'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'bn-BD',
			language_name: 'পাশতু'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'bn-BD',
			language_name: 'পর্তুগিজ'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'bn-BD',
			language_name: 'কেচুয়া'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'bn-BD',
			language_name: 'কি‘চে'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'bn-BD',
			language_name: 'চিম্বোরাসো উচ্চভূমির কিচুয়া'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'bn-BD',
			language_name: 'রাজস্থানী'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'bn-BD',
			language_name: 'রাপানুই'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'bn-BD',
			language_name: 'রারোটোংগান'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'bn-BD',
			language_name: 'রোমাগ্নোল'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'bn-BD',
			language_name: 'রোহিঙ্গা'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'bn-BD',
			language_name: 'রিফিয়ান'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'bn-BD',
			language_name: 'রোমান্স'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'bn-BD',
			language_name: 'রুন্দি'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'bn-BD',
			language_name: 'রোমানীয়'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'bn-BD',
			language_name: 'রম্বো'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'bn-BD',
			language_name: 'রোমানি'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'bn-BD',
			language_name: 'রোটুমান'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'bn-BD',
			language_name: 'রুশ'
		},
		{
			locale_code: 'rue-UA',
			locale_id: 'bn-BD',
			language_name: 'রুসিন'
		},
		{
			locale_code: 'rug-SB',
			locale_id: 'bn-BD',
			language_name: 'রোভিয়ানা'
		},
		{
			locale_code: 'rup-RO',
			locale_id: 'bn-BD',
			language_name: 'আরোমেনিয়'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'bn-BD',
			language_name: 'কিনয়ারোয়ান্ডা'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'bn-BD',
			language_name: 'রাওয়া'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'bn-BD',
			language_name: 'সংস্কৃত'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'bn-BD',
			language_name: 'সান্দাওয়ে'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'bn-BD',
			language_name: 'ইয়াকুট'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'bn-BD',
			language_name: 'সামারিটান আরামিক'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'bn-BD',
			language_name: 'সামবুরু'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'bn-BD',
			language_name: 'সাসাক'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'bn-BD',
			language_name: 'সাঁওতালি'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'bn-BD',
			language_name: 'সৌরাষ্ট্র'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'bn-BD',
			language_name: 'গাম্বে'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'bn-BD',
			language_name: 'সাঙ্গু'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'bn-BD',
			language_name: 'সার্ডিনিয়ান'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'bn-BD',
			language_name: 'সিসিলিয়ান'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'bn-BD',
			language_name: 'স্কটস'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'bn-BD',
			language_name: 'সিন্ধি'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'bn-BD',
			language_name: 'সিন্ধি'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'bn-BD',
			language_name: 'সাসারেসে সার্ডিনীয়'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিণ কুর্দিশ'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'bn-BD',
			language_name: 'উত্তরাঞ্চলীয় সামি'
		},
		{
			locale_code: 'see-US',
			locale_id: 'bn-BD',
			language_name: 'সেনেকা'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'bn-BD',
			language_name: 'সেনা'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'bn-BD',
			language_name: 'সেরি'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'bn-BD',
			language_name: 'সেল্কুপ'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'bn-BD',
			language_name: 'কোয়রাবোরো সেন্নি'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'bn-BD',
			language_name: 'সাঙ্গো'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন আইরিশ'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'bn-BD',
			language_name: 'সামোগিতীয়'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'bn-BD',
			language_name: 'তাচেলহিত'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'bn-BD',
			language_name: 'শান'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'bn-BD',
			language_name: 'চাডীয় আরবি'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'bn-BD',
			language_name: 'সিংহলি'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'bn-BD',
			language_name: 'সিডামো'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'bn-BD',
			language_name: 'স্লোভাক'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'bn-BD',
			language_name: 'স্লোভেনীয়'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিণী লুশুটসীড'
		},
		{
			locale_code: 'sli-PL',
			locale_id: 'bn-BD',
			language_name: 'নিম্ন সিলেশিয়ান'
		},
		{
			locale_code: 'sly-ID',
			locale_id: 'bn-BD',
			language_name: 'সেলায়ার'
		},
		{
			locale_code: 'sm-WS',
			locale_id: 'bn-BD',
			language_name: 'সামোয়ান'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিণাঞ্চলীয় সামি'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'bn-BD',
			language_name: 'লুলে সামি'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'bn-BD',
			language_name: 'ইনারি সামি'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'bn-BD',
			language_name: 'স্কোল্ট সামি'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'bn-BD',
			language_name: 'শোনা'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'bn-BD',
			language_name: 'সোনিঙ্কে'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'bn-BD',
			language_name: 'সোমালি'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'bn-BD',
			language_name: 'সোগডিয়ান'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'bn-BD',
			language_name: 'আলবেনীয়'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'bn-BD',
			language_name: 'সার্বীয়'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'bn-BD',
			language_name: 'সার্বীয়'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'bn-BD',
			language_name: 'সার্বীয়'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'bn-BD',
			language_name: 'সার্বীয়'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'bn-BD',
			language_name: 'স্রানান টোঙ্গো'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'bn-BD',
			language_name: 'সেরের'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'bn-BD',
			language_name: 'সোয়াতি'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'bn-BD',
			language_name: 'সাহো'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিন সোথো'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'bn-BD',
			language_name: 'সাটারল্যান্ড ফ্রিসিয়ান'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'bn-BD',
			language_name: 'স্ট্রেটস সালিস'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'bn-BD',
			language_name: 'সুদানী'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'bn-BD',
			language_name: 'সুকুমা'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'bn-BD',
			language_name: 'সুসু'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'bn-BD',
			language_name: 'সুইডিশ'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'bn-BD',
			language_name: 'সোয়াহিলি'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'bn-BD',
			language_name: 'কমোরিয়ান'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'bn-BD',
			language_name: 'প্রাচীন সিরিও'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'bn-BD',
			language_name: 'সিরিয়াক'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'bn-BD',
			language_name: 'সিলেশিয়ান'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'bn-BD',
			language_name: 'তামিল'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিণী টুচোন'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'bn-BD',
			language_name: 'তুলু'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'bn-BD',
			language_name: 'তেলুগু'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'bn-BD',
			language_name: 'টাইম্নে'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'bn-BD',
			language_name: 'তেসো'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'bn-BD',
			language_name: 'তেরেনো'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'bn-BD',
			language_name: 'তেতুম'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'bn-BD',
			language_name: 'তাজিক'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'bn-BD',
			language_name: 'তাজিক'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'bn-BD',
			language_name: 'তাগিশ'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'bn-BD',
			language_name: 'থাই'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'bn-BD',
			language_name: 'তাহ্লতান'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'bn-BD',
			language_name: 'তিগরিনিয়া'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'bn-BD',
			language_name: 'টাইগ্রে'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'bn-BD',
			language_name: 'টিভ'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'bn-BD',
			language_name: 'তুর্কমেনী'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'bn-BD',
			language_name: 'টোকেলাউ'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'bn-BD',
			language_name: 'ৎসাখুর'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'bn-BD',
			language_name: 'ফিলিপিনো'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'bn-BD',
			language_name: 'ত্লিঙ্গিট'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'bn-BD',
			language_name: 'তালিশ'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'bn-BD',
			language_name: 'তামাশেক'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'bn-BD',
			language_name: 'সোয়ানা'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'bn-BD',
			language_name: 'টোঙ্গান'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'bn-BD',
			language_name: 'নায়াসা টোঙ্গা'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'bn-BD',
			language_name: 'টোক পিসিন'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'bn-BD',
			language_name: 'তুর্কি'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'bn-BD',
			language_name: 'তুরোয়ো'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'bn-BD',
			language_name: 'তারোকো'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'bn-BD',
			language_name: 'তোরওয়ালি'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'bn-BD',
			language_name: 'সঙ্গা'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'bn-BD',
			language_name: 'ৎসাকোনীয়'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'bn-BD',
			language_name: 'সিমশিয়ান'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'bn-BD',
			language_name: 'তাতার'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'bn-BD',
			language_name: 'উত্তরাঞ্চলীয় টুচোন'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'bn-BD',
			language_name: 'মুসলিম তাত'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'bn-BD',
			language_name: 'তুম্বুকা'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'bn-BD',
			language_name: 'টুভালু'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'bn-BD',
			language_name: 'তাসাওয়াক'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'bn-BD',
			language_name: 'তাহিতিয়ান'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'bn-BD',
			language_name: 'টুভিনিয়ান'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'bn-BD',
			language_name: 'সেন্ট্রাল আটলাস তামাজিগাত'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'bn-BD',
			language_name: 'উডমুর্ট'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'bn-BD',
			language_name: 'উইঘুর'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'bn-BD',
			language_name: 'উইঘুর'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'bn-BD',
			language_name: 'উইঘুর'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'bn-BD',
			language_name: 'উগারিটিক'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'bn-BD',
			language_name: 'ইউক্রেনীয়'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'bn-BD',
			language_name: 'উম্বুন্দু'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'bn-BD',
			language_name: 'কাতালান'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'bn-BD',
			language_name: 'ফার্সি'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'bn-BD',
			language_name: 'পর্তুগিজ'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'bn-BD',
			language_name: 'মালয়'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'bn-BD',
			language_name: 'উর্দু'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'bn-BD',
			language_name: 'মালয়'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'bn-BD',
			language_name: 'উর্দু'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'bn-BD',
			language_name: 'উর্দু'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'bn-BD',
			language_name: 'উর্দু'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'bn-BD',
			language_name: 'ফার্সি'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'bn-BD',
			language_name: 'সামোয়ান'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'bn-BD',
			language_name: 'জার্মান'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'bn-BD',
			language_name: 'ওলন্দাজ'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'bn-BD',
			language_name: 'সুইডিশ'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'bn-BD',
			language_name: 'ওলন্দাজ'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'bn-BD',
			language_name: 'পাপিয়ামেন্টো'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'bn-BD',
			language_name: 'নরওয়েজীয়'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'bn-BD',
			language_name: 'রুশ'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'bn-BD',
			language_name: 'জার্মান'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'bn-BD',
			language_name: 'root'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'bn-BD',
			language_name: 'পর্তুগিজ'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'bn-BD',
			language_name: 'গ্রিক'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'bn-BD',
			language_name: 'কারা-কাল্পাক'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'bn-BD',
			language_name: 'ম্যাসেডোনিয়া'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'bn-BD',
			language_name: 'সার্বীয়'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'bn-BD',
			language_name: 'ম্যাসেডোনিয়া'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'bn-BD',
			language_name: 'কারা-কাল্পাক'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'bn-BD',
			language_name: 'ইউক্রেনীয়'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'bn-BD',
			language_name: 'বুলগেরিয়'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'bn-BD',
			language_name: 'ইউক্রেনীয়'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'bn-BD',
			language_name: 'কাবার্ডিয়ান'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'bn-BD',
			language_name: 'উজবেক'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'bn-BD',
			language_name: 'নেপালি'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'bn-BD',
			language_name: 'ভোজপুরি'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'bn-BD',
			language_name: 'তিগরিনিয়া'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'bn-BD',
			language_name: 'ওলোফ'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'bn-BD',
			language_name: 'পর্তুগিজ'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'bn-BD',
			language_name: 'ক্যান্টোনিজ'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'bn-BD',
			language_name: 'ক্যান্টোনিজ'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'bn-BD',
			language_name: 'ইদ্দিশ'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'bn-BD',
			language_name: 'ইদ্দিশ'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'bn-BD',
			language_name: 'ইদ্দিশ'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'bn-BD',
			language_name: 'হমং জুয়া'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'bn-BD',
			language_name: 'হমং জুয়া'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'bn-BD',
			language_name: 'হমং জুয়া'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'bn-BD',
			language_name: 'হমং জুয়া'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'bn-BD',
			language_name: 'হমং জুয়া'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'bn-BD',
			language_name: 'হমং জুয়া'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'bn-BD',
			language_name: 'সোয়াহিলি'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'bn-BD',
			language_name: 'কোরিয়ান'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'bn-BD',
			language_name: 'রুশ'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'bn-BD',
			language_name: 'তুর্কমেনী'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'bn-BD',
			language_name: 'ঝুয়াং'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'bn-BD',
			language_name: 'তুর্কি'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-IN',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'bn-BD',
			language_name: 'তুর্কমেনী'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'bn-BD',
			language_name: 'আলবেনীয়'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'bn-BD',
			language_name: 'কুর্দিশ'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'bn-BD',
			language_name: 'পোলিশ'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'bn-BD',
			language_name: 'ইংরেজি'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'bn-BD',
			language_name: 'জার্মান'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'bn-BD',
			language_name: 'দক্ষিন সোথো'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'bn-BD',
			language_name: 'রোমানীয়'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'bn-BD',
			language_name: 'পর্তুগিজ'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'bn-BD',
			language_name: 'আফ্রিকান'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'bn-BD',
			language_name: 'হাউসা'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'bn-BD',
			language_name: 'পর্তুগিজ'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'bn-BD',
			language_name: 'নরওয়েজিয়ান বোকমাল'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'bn-BD',
			language_name: 'ইতালীয়'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'bn-BD',
			language_name: 'ওলন্দাজ'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'bn-BD',
			language_name: 'পর্তুগিজ'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'bn-BD',
			language_name: 'আদর্শ মরক্কোন তামাজিগাত'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'bn-BD',
			language_name: 'পর্তুগিজ'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'bn-BD',
			language_name: 'সোয়াহিলি'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'bn-BD',
			language_name: 'ইতালীয়'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'bn-BD',
			language_name: 'ভাই'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'bn-BD',
			language_name: 'স্প্যানিশ'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'bn-BD',
			language_name: 'ভিয়েতনামী'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'bn-BD',
			language_name: 'আরবি'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'bn-BD',
			language_name: 'ফরাসি'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'bn-BD',
			language_name: 'উজবেক'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'bn-BD',
			language_name: 'উজবেক'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'bn-BD',
			language_name: 'ভেন্ডা'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'bn-BD',
			language_name: 'ভেনেশিয়ান'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'bn-BD',
			language_name: 'ভেপস'
		},
		{
			locale_code: 'vls-BE',
			locale_id: 'bn-BD',
			language_name: 'পশ্চিম ফ্লেমিশ'
		},
		{
			locale_code: 'vmf-DE',
			locale_id: 'bn-BD',
			language_name: 'মাইন-ফ্রাঙ্কোনীয়'
		},
		{
			locale_code: 'vmw-MZ',
			locale_id: 'bn-BD',
			language_name: 'মাখুওয়া'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'bn-BD',
			language_name: 'ভোটিক'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'bn-BD',
			language_name: 'Võro'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'bn-BD',
			language_name: 'ভুঞ্জো'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'bn-BD',
			language_name: 'ওয়ালুন'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'bn-BD',
			language_name: 'ওয়ালসার'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'bn-BD',
			language_name: 'ওলায়ট্টা'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'bn-BD',
			language_name: 'ওয়ারে'
		},
		{
			locale_code: 'was-US',
			locale_id: 'bn-BD',
			language_name: 'ওয়াশো'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'bn-BD',
			language_name: 'ওয়ার্লপিরি'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'bn-BD',
			language_name: 'উ চীনা'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'bn-BD',
			language_name: 'কাল্মাইক'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'bn-BD',
			language_name: 'খোসা'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'bn-BD',
			language_name: 'মিংগ্রেলীয়'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'bn-BD',
			language_name: 'কাংরি'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'bn-BD',
			language_name: 'সোগা'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'bn-BD',
			language_name: 'ইয়াও'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'bn-BD',
			language_name: 'ইয়াপেসে'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'bn-BD',
			language_name: 'ইয়াঙ্গবেন'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'bn-BD',
			language_name: 'ইয়েম্বা'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'bn-BD',
			language_name: 'ইওরুবা'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'bn-BD',
			language_name: 'নহিংগাটু'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'bn-BD',
			language_name: 'ক্যান্টোনিজ'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'bn-BD',
			language_name: 'জাপোটেক'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'bn-BD',
			language_name: 'জিল্যান্ডিক'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'bn-BD',
			language_name: 'জেনাগা'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'bn-BD',
			language_name: 'চীনা'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'bn-BD',
			language_name: 'জুলু'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'bn-BD',
			language_name: 'জুনি'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'bn-BD',
			language_name: 'জাজা'
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
