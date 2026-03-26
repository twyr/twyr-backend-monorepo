/* eslint-disable security/detect-object-injection */
/**
 * Static seed for locale_by_locale with hi-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * locale names (language + country) for the hi-IN locale.
 *
 * This seed depends on:
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 004-locales-by-locale-seed-hi-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM locale_by_locale WHERE locale_id = 'hi-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for hi-IN locale
	const rows = [
		{
			locale_code: 'aa-ET',
			locale_id: 'hi-IN',
			language_name: 'अफ़ार (इथियोपिया)'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'hi-IN',
			language_name: 'अब्ख़ाज़ियन (जॉर्जिया)'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'hi-IN',
			language_name: 'अचाइनीस (इंडोनेशिया)'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'hi-IN',
			language_name: 'अकोली (युगांडा)'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'hi-IN',
			language_name: 'अदान्गमे (घाना)'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'hi-IN',
			language_name: 'अदिघे (रूस)'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'hi-IN',
			language_name: 'अवस्ताई (ईरान)'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'hi-IN',
			language_name: 'ट्यूनीशियाई अरबी'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'hi-IN',
			language_name: 'अफ़्रीकी (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'hi-IN',
			language_name: 'अफ्रिहिली (घाना)'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'hi-IN',
			language_name: 'अग्हेम (कैमरून)'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'hi-IN',
			language_name: 'ऐनू (जापान)'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'hi-IN',
			language_name: 'अकन (घाना)'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'hi-IN',
			language_name: 'अक्कादी (इराक)'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'hi-IN',
			language_name: 'अलबामा'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'hi-IN',
			language_name: 'अलेउत (संयुक्त राज्य)'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी अल्ताई (रूस)'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'hi-IN',
			language_name: 'अम्हेरी (इथियोपिया)'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'hi-IN',
			language_name: 'अरागोनी (स्पेन)'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'hi-IN',
			language_name: 'पुरानी अंग्रेज़ी (यूनाइटेड किंगडम)'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'hi-IN',
			language_name: 'ओबोलो (नाइजीरिया)'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'hi-IN',
			language_name: 'अंगिका (भारत)'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'hi-IN',
			language_name: 'अरबी (मिस्र)'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'hi-IN',
			language_name: 'ऐरेमेक (ईरान)'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'hi-IN',
			language_name: 'ऐरेमेक (इराक)'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'hi-IN',
			language_name: 'ऐरेमेक (जॉर्डन)'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'hi-IN',
			language_name: 'ऐरेमेक (सीरिया)'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'hi-IN',
			language_name: 'मापूचे (चिली)'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'hi-IN',
			language_name: 'अरौना'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'hi-IN',
			language_name: 'अरापाहो (संयुक्त राज्य)'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'hi-IN',
			language_name: 'अल्जीरियाई अरबी'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'hi-IN',
			language_name: 'नज्दी अरबी (सऊदी अरब)'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'hi-IN',
			language_name: 'अरावक (सूरीनाम)'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'hi-IN',
			language_name: 'मोरक्कन अरबी'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'hi-IN',
			language_name: 'मिस्र अरबी'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'hi-IN',
			language_name: 'असमिया (भारत)'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'hi-IN',
			language_name: 'असु (तंज़ानिया)'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'hi-IN',
			language_name: 'अमेरिकी सांकेतिक भाषा'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'hi-IN',
			language_name: 'अस्तुरियन (स्पेन)'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'hi-IN',
			language_name: 'अतिकामेक्व (कनाडा)'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'hi-IN',
			language_name: 'अवेरिक (रूस)'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'hi-IN',
			language_name: 'अवधी (भारत)'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'hi-IN',
			language_name: 'आयमारा (बोलीविया)'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'hi-IN',
			language_name: 'अज़रबैजानी (अज़रबैजान)'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'hi-IN',
			language_name: 'अज़रबैजानी (ईरान)'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'hi-IN',
			language_name: 'अज़रबैजानी (इराक)'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'hi-IN',
			language_name: 'अज़रबैजानी (रूस)'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'hi-IN',
			language_name: 'बशख़िर (रूस)'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'hi-IN',
			language_name: 'बलूची (पाकिस्तान)'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'hi-IN',
			language_name: 'बालिनीस (इंडोनेशिया)'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'hi-IN',
			language_name: 'बवेरियन'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'hi-IN',
			language_name: 'बसा (कैमरून)'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'hi-IN',
			language_name: 'बामुन'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'hi-IN',
			language_name: 'बतक टोबा'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'hi-IN',
			language_name: 'घोमला'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'hi-IN',
			language_name: 'बेलारूसी (बेलारूस)'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'hi-IN',
			language_name: 'बेजा (सूडान)'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'hi-IN',
			language_name: 'बेम्बा (ज़ाम्बिया)'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'hi-IN',
			language_name: 'बेतावी (इंडोनेशिया)'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'hi-IN',
			language_name: 'बेना (तंज़ानिया)'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'hi-IN',
			language_name: 'बफुत'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'hi-IN',
			language_name: 'बडागा'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'hi-IN',
			language_name: 'बुल्गारियाई (बुल्गारिया)'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'hi-IN',
			language_name: 'हरियाणवी (भारत)'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी बलोची (पाकिस्तान)'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'hi-IN',
			language_name: 'भोजपुरी (भारत)'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'hi-IN',
			language_name: 'बिस्लामा (वनुआतू)'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'hi-IN',
			language_name: 'बिकोल (फ़िलिपींस)'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'hi-IN',
			language_name: 'बिनी (नाइजीरिया)'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'hi-IN',
			language_name: 'बंजार'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'hi-IN',
			language_name: 'कॉम'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'hi-IN',
			language_name: 'सिक्सिका (कनाडा)'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'hi-IN',
			language_name: 'अनी (बेनिन)'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'hi-IN',
			language_name: 'ताई बांध'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'hi-IN',
			language_name: 'बाम्बारा (माली)'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'hi-IN',
			language_name: 'बंगाली (बांग्लादेश)'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'hi-IN',
			language_name: 'तिब्बती (चीन)'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'hi-IN',
			language_name: 'बिष्णुप्रिया'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'hi-IN',
			language_name: 'बख्तियारी'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'hi-IN',
			language_name: 'ब्रेटन (फ़्रांस)'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'hi-IN',
			language_name: 'ब्रज (भारत)'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'hi-IN',
			language_name: 'ब्राहुई'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'hi-IN',
			language_name: 'बोडो (भारत)'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'hi-IN',
			language_name: 'बोस्नियाई (बोस्निया और हर्ज़ेगोविना)'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'hi-IN',
			language_name: 'अकूसे (कैमरून)'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'hi-IN',
			language_name: 'बुरियात (रूस)'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'hi-IN',
			language_name: 'बगिनीस (इंडोनेशिया)'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'hi-IN',
			language_name: 'बुलु'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'hi-IN',
			language_name: 'ब्लिन (इरिट्रिया)'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'hi-IN',
			language_name: 'मेडुम्बा'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'hi-IN',
			language_name: 'कातालान (स्पेन)'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'hi-IN',
			language_name: 'कैड्डो (संयुक्त राज्य)'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'hi-IN',
			language_name: 'कैरिब (वेनेज़ुएला)'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'hi-IN',
			language_name: 'कायुगा (कनाडा)'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'hi-IN',
			language_name: 'अत्सम (नाइजीरिया)'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'hi-IN',
			language_name: 'चकमा (बांग्लादेश)'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'hi-IN',
			language_name: 'चेचन (रूस)'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'hi-IN',
			language_name: 'सिबुआनो (फ़िलिपींस)'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'hi-IN',
			language_name: 'शिगा (युगांडा)'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'hi-IN',
			language_name: 'कमोरो (गुआम)'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'hi-IN',
			language_name: 'चिब्चा (कोलंबिया)'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'hi-IN',
			language_name: 'छगाताई (तुर्कमेनिस्तान)'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'hi-IN',
			language_name: 'चूकीस (माइक्रोनेशिया)'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'hi-IN',
			language_name: 'मारी (रूस)'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'hi-IN',
			language_name: 'चिनूक जारगॉन (संयुक्त राज्य)'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'hi-IN',
			language_name: 'चोक्तौ (संयुक्त राज्य)'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'hi-IN',
			language_name: 'शिपेव्यान (कनाडा)'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'hi-IN',
			language_name: 'चेरोकी (संयुक्त राज्य)'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'hi-IN',
			language_name: 'शेयेन्न (संयुक्त राज्य)'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'hi-IN',
			language_name: 'चिकसॉ (संयुक्त राज्य)'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'hi-IN',
			language_name: 'सोरानी कुर्दिश (इराक)'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'hi-IN',
			language_name: 'चिलकोटिन (कनाडा)'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'hi-IN',
			language_name: 'कोर्सीकन (फ़्रांस)'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'hi-IN',
			language_name: 'कॉप्टिक (मिस्र)'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'hi-IN',
			language_name: 'कैपिज़नॉन'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'hi-IN',
			language_name: 'क्री (कनाडा)'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'hi-IN',
			language_name: 'मिचिफ़ (कनाडा)'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'hi-IN',
			language_name: 'क्रीमीन तुर्की (यूक्रेन)'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिण पूर्वी क्री (कनाडा)'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'hi-IN',
			language_name: 'प्लेन्स क्री (कनाडा)'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'hi-IN',
			language_name: 'नॉर्दन ईस्ट क्री (कनाडा)'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'hi-IN',
			language_name: 'मूस क्री (कनाडा)'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'hi-IN',
			language_name: 'सेसेल्वा क्रिओल फ्रेंच (सेशेल्स)'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'hi-IN',
			language_name: 'चेक (चेकिया)'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'hi-IN',
			language_name: 'काशुबियन (पोलैंड)'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'hi-IN',
			language_name: 'स्वॉम्पी क्री (कनाडा)'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'hi-IN',
			language_name: 'चर्च साल्विक (रूस)'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'hi-IN',
			language_name: 'चर्च साल्विक (बुल्गारिया)'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'hi-IN',
			language_name: 'चूवाश (रूस)'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'hi-IN',
			language_name: 'वेल्श (यूनाइटेड किंगडम)'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'hi-IN',
			language_name: 'डेनिश (डेनमार्क)'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'hi-IN',
			language_name: 'दाकोता (संयुक्त राज्य)'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'hi-IN',
			language_name: 'दार्गवा (रूस)'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'hi-IN',
			language_name: 'तैता (केन्या)'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'hi-IN',
			language_name: 'जर्मन (जर्मनी)'
		},
		{
			locale_code: 'del-US',
			locale_id: 'hi-IN',
			language_name: 'डिलैवेयर (संयुक्त राज्य)'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'hi-IN',
			language_name: 'स्लेव (कनाडा)'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'hi-IN',
			language_name: 'डोग्रिब (कनाडा)'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'hi-IN',
			language_name: 'दिन्का (दक्षिण सूडान)'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'hi-IN',
			language_name: 'झार्मा (नाइजर)'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'hi-IN',
			language_name: 'डोगरी (भारत)'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'hi-IN',
			language_name: 'निचला सॉर्बियन (जर्मनी)'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'hi-IN',
			language_name: 'सेंट्रल दुसुन'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'hi-IN',
			language_name: 'दुआला (कैमरून)'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन पुर्तगाली (नीदरलैंड)'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'hi-IN',
			language_name: 'दिवेही (मालदीव)'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'hi-IN',
			language_name: 'जोला-फोंई (सेनेगल)'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'hi-IN',
			language_name: 'ड्युला (बुर्किना फ़ासो)'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'hi-IN',
			language_name: 'ज़ोन्गखा (भूटान)'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'hi-IN',
			language_name: 'दज़ागा (चाड)'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'hi-IN',
			language_name: 'एम्बु (केन्या)'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'hi-IN',
			language_name: 'ईवे (घाना)'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'hi-IN',
			language_name: 'एफिक (नाइजीरिया)'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'hi-IN',
			language_name: 'एमिलियन'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'hi-IN',
			language_name: 'प्राचीन मिस्री (मिस्र)'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'hi-IN',
			language_name: 'एकाजुक (नाइजीरिया)'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'hi-IN',
			language_name: 'यूनानी (यूनान)'
		},
		{
			locale_code: 'en-US',
			locale_id: 'hi-IN',
			language_name: 'अमेरिकी अंग्रेज़ी'
		},
		{
			locale_code: 'en-GB',
			locale_id: 'hi-IN',
			language_name: 'ब्रिटिश अंग्रेज़ी'
		},
		{
			locale_code: 'en-IN',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (भारत)'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन अंग्रेज़ी (यूनाइटेड किंगडम)'
		},
		{
			locale_code: 'es-ES',
			locale_id: 'hi-IN',
			language_name: 'यूरोपीय स्पेनिश'
		},
		{
			locale_code: 'esu-US',
			locale_id: 'hi-IN',
			language_name: 'सेंट्रल युपिक'
		},
		{
			locale_code: 'et-EE',
			locale_id: 'hi-IN',
			language_name: 'एस्टोनियाई (एस्टोनिया)'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'hi-IN',
			language_name: 'बास्क (स्पेन)'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'hi-IN',
			language_name: 'इवोन्डो (कैमरून)'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'hi-IN',
			language_name: 'एक्सट्रीमाडुरन'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'hi-IN',
			language_name: 'फ़ारसी (ईरान)'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'hi-IN',
			language_name: 'फैन्ग (इक्वेटोरियल गिनी)'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'hi-IN',
			language_name: 'फुलाह (सेनेगल)'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'hi-IN',
			language_name: 'फुलाह (गिनी)'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'hi-IN',
			language_name: 'फ़िनिश (फ़िनलैंड)'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'hi-IN',
			language_name: 'फ़िलिपीनो (फ़िलिपींस)'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'hi-IN',
			language_name: 'टोर्नेडेलन फिनिश'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'hi-IN',
			language_name: 'फिजियन (फ़िजी)'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'hi-IN',
			language_name: 'फ़ैरोइज़ (फ़ेरो द्वीपसमूह)'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'hi-IN',
			language_name: 'फॉन (बेनिन)'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (फ़्रांस)'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'hi-IN',
			language_name: 'केजन फ़्रेंच (संयुक्त राज्य)'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन फ़्रांसीसी (फ़्रांस)'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'hi-IN',
			language_name: 'पुरातन फ़्रांसीसी (फ़्रांस)'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'hi-IN',
			language_name: 'अर्पितन'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी फ़्रीसियाई (जर्मनी)'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'hi-IN',
			language_name: 'पूर्वी फ़्रीसियाई (जर्मनी)'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'hi-IN',
			language_name: 'फ्रीयुलीयान (इटली)'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी फ़्रिसियाई (नीदरलैंड)'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'hi-IN',
			language_name: 'आयरिश (आयरलैंड)'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'hi-IN',
			language_name: 'गा (घाना)'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'hi-IN',
			language_name: 'गागौज़ (मॉल्डोवा)'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'hi-IN',
			language_name: 'गण चीनी'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'hi-IN',
			language_name: 'गायो (इंडोनेशिया)'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'hi-IN',
			language_name: 'ग्बाया (मध्य अफ़्रीकी गणराज्य)'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'hi-IN',
			language_name: 'पारसी दारी'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'hi-IN',
			language_name: 'स्कॉटिश गाएलिक (यूनाइटेड किंगडम)'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'hi-IN',
			language_name: 'गीज़ (इथियोपिया)'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'hi-IN',
			language_name: 'गिल्बरतीस (किरिबाती)'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'hi-IN',
			language_name: 'गैलिशियन (स्पेन)'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'hi-IN',
			language_name: 'गिलकी'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन हाइ जर्मन (जर्मनी)'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'hi-IN',
			language_name: 'गुआरानी (पराग्वे)'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'hi-IN',
			language_name: 'पुरातन हाइ जर्मन (जर्मनी)'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'hi-IN',
			language_name: 'गाँडी (भारत)'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'hi-IN',
			language_name: 'गोरोन्तालो (इंडोनेशिया)'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'hi-IN',
			language_name: 'गॉथिक (यूक्रेन)'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'hi-IN',
			language_name: 'ग्रेबो (लाइबेरिया)'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'hi-IN',
			language_name: 'प्राचीन यूनानी (यूनान)'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'hi-IN',
			language_name: 'स्विस जर्मन (स्विट्ज़रलैंड)'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'hi-IN',
			language_name: 'गुजराती (भारत)'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'hi-IN',
			language_name: 'वेउउ'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'hi-IN',
			language_name: 'फ़राफ़्रा'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'hi-IN',
			language_name: 'गुसी (केन्या)'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'hi-IN',
			language_name: 'मैंक्स (आइल ऑफ़ मैन)'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'hi-IN',
			language_name: 'ग्विचइन (कनाडा)'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'hi-IN',
			language_name: 'हौसा (नाइजीरिया)'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'hi-IN',
			language_name: 'हौसा (कैमरून)'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'hi-IN',
			language_name: 'हौसा (सूडान)'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'hi-IN',
			language_name: 'हैडा (कनाडा)'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'hi-IN',
			language_name: 'हक्का चीनी'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'hi-IN',
			language_name: 'हक्का चीनी'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'hi-IN',
			language_name: 'हवाई (संयुक्त राज्य)'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी हाइदा (कनाडा)'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'hi-IN',
			language_name: 'हिब्रू (इज़राइल)'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'hi-IN',
			language_name: 'हिन्दी (भारत)'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'hi-IN',
			language_name: 'फ़िजी हिंदी'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'hi-IN',
			language_name: 'हिलिगेनन (फ़िलिपींस)'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'hi-IN',
			language_name: 'हिताइत (तुर्किये)'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'hi-IN',
			language_name: 'ह्मॉंग (चीन)'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ (संयुक्त राज्य)'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ (लाओस)'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'hi-IN',
			language_name: 'हिरी मोटू (पापुआ न्यू गिनी)'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'hi-IN',
			language_name: 'क्रोएशियाई (क्रोएशिया)'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'hi-IN',
			language_name: 'ऊपरी सॉर्बियन (जर्मनी)'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'hi-IN',
			language_name: 'जियांग चीनी'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'hi-IN',
			language_name: 'हैतियाई (हैती)'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'hi-IN',
			language_name: 'हंगेरियाई (हंगरी)'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'hi-IN',
			language_name: 'हूपा (संयुक्त राज्य)'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'hi-IN',
			language_name: 'हल्कोमेलम (कनाडा)'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'hi-IN',
			language_name: 'आर्मेनियाई (आर्मेनिया)'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'hi-IN',
			language_name: 'हरैरो (नामीबिया)'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'hi-IN',
			language_name: 'इबान (मलेशिया)'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'hi-IN',
			language_name: 'इबिबियो (नाइजीरिया)'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'hi-IN',
			language_name: 'इंडोनेशियाई (इंडोनेशिया)'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'hi-IN',
			language_name: 'इंटरलिंग (एस्टोनिया)'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'hi-IN',
			language_name: 'ईग्बो (नाइजीरिया)'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'hi-IN',
			language_name: 'सिचुआन यी (चीन)'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'hi-IN',
			language_name: 'इनुपियाक् (संयुक्त राज्य)'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी कनाडाई इनुक्टिटुट (कनाडा)'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'hi-IN',
			language_name: 'इलोको (फ़िलिपींस)'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'hi-IN',
			language_name: 'इंगुश (रूस)'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'hi-IN',
			language_name: 'आइसलैंडिक (आइसलैंड)'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'hi-IN',
			language_name: 'इतालवी (इटली)'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'hi-IN',
			language_name: 'इनुक्टिटुट (कनाडा)'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'hi-IN',
			language_name: 'इंग्रियन'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'hi-IN',
			language_name: 'जापानी (जापान)'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'hi-IN',
			language_name: 'जमैका क्रियोल अंग्रेजी'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'hi-IN',
			language_name: 'नगोंबा (कैमरून)'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'hi-IN',
			language_name: 'मैकहैमे (तंज़ानिया)'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'hi-IN',
			language_name: 'जुदेओ-पर्शियन (इज़राइल)'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'hi-IN',
			language_name: 'जुदेओ-अरेबिक (इज़राइल)'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'hi-IN',
			language_name: 'जुटिश'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'hi-IN',
			language_name: 'जावानीज़ (इंडोनेशिया)'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'hi-IN',
			language_name: 'जॉर्जियाई (जॉर्जिया)'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'hi-IN',
			language_name: 'कारा-कल्पक (उज़्बेकिस्तान)'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'hi-IN',
			language_name: 'कबाइल (अल्जीरिया)'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'hi-IN',
			language_name: 'काचिन (म्यांमार [बर्मा])'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'hi-IN',
			language_name: 'ज्जु (नाइजीरिया)'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'hi-IN',
			language_name: 'कम्बा (केन्या)'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'hi-IN',
			language_name: 'कावी (इंडोनेशिया)'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'hi-IN',
			language_name: 'कबार्डियन (रूस)'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'hi-IN',
			language_name: 'कनेम्बु'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'hi-IN',
			language_name: 'त्याप (नाइजीरिया)'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'hi-IN',
			language_name: 'मैकोंड (तंज़ानिया)'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'hi-IN',
			language_name: 'काबुवेर्दियानु (केप वर्ड)'
		},
		{
			locale_code: 'kek-GT',
			locale_id: 'hi-IN',
			language_name: 'Qʼeqchiʼ'
		},
		{
			locale_code: 'ken-CM',
			locale_id: 'hi-IN',
			language_name: 'केन्यांग'
		},
		{
			locale_code: 'kfo-CI',
			locale_id: 'hi-IN',
			language_name: 'कोरो (कोत दिवुआर)'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'hi-IN',
			language_name: 'कोंगो (कांगो - किंशासा)'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'hi-IN',
			language_name: 'काइंगांग (ब्राज़ील)'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'hi-IN',
			language_name: 'खासी (भारत)'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'hi-IN',
			language_name: 'खोतानीस (ईरान)'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'hi-IN',
			language_name: 'कोयरा चीनी (माली)'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'hi-IN',
			language_name: 'खोवार'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'hi-IN',
			language_name: 'किकुयू (केन्या)'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'hi-IN',
			language_name: 'किरमंजकी'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'hi-IN',
			language_name: 'क्वान्यामा (नामीबिया)'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़ (कज़ाखस्तान)'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़ (अफ़गानिस्तान)'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़ (चीन)'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़ (ईरान)'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़ (मंगोलिया)'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'hi-IN',
			language_name: 'काको (कैमरून)'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'hi-IN',
			language_name: 'कलालीसुत (ग्रीनलैंड)'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'hi-IN',
			language_name: 'कलेंजिन (केन्या)'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'hi-IN',
			language_name: 'खमेर (कंबोडिया)'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'hi-IN',
			language_name: 'किम्बन्दु (अंगोला)'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'hi-IN',
			language_name: 'कन्नड़ (भारत)'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'hi-IN',
			language_name: 'कोरियाई (दक्षिण कोरिया)'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'hi-IN',
			language_name: 'कोमी-पर्मयाक (रूस)'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'hi-IN',
			language_name: 'कोंकणी (भारत)'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'hi-IN',
			language_name: 'कोसरैन (माइक्रोनेशिया)'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'hi-IN',
			language_name: 'क्पेल (लाइबेरिया)'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'hi-IN',
			language_name: 'कनुरी (नाइजीरिया)'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'hi-IN',
			language_name: 'कराचय-बल्कार (रूस)'
		},
		{
			locale_code: 'kri-SL',
			locale_id: 'hi-IN',
			language_name: 'क्रियो'
		},
		{
			locale_code: 'krj-PH',
			locale_id: 'hi-IN',
			language_name: 'किनारे-ए'
		},
		{
			locale_code: 'krl-RU',
			locale_id: 'hi-IN',
			language_name: 'करेलियन (रूस)'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'hi-IN',
			language_name: 'कुरूख (भारत)'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'hi-IN',
			language_name: 'कश्मीरी (भारत)'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'hi-IN',
			language_name: 'शम्बाला (तंज़ानिया)'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'hi-IN',
			language_name: 'बफिआ (कैमरून)'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'hi-IN',
			language_name: 'कोलोनियाई (जर्मनी)'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश (तुर्किये)'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश (आर्मेनिया)'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश (इराक)'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश (अज़रबैजान)'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश (जॉर्जिया)'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश (ईरान)'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश (लेबनान)'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश (तुर्कमेनिस्तान)'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'hi-IN',
			language_name: 'कुमीक (रूस)'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'hi-IN',
			language_name: 'क्यूतनाई (कनाडा)'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'hi-IN',
			language_name: 'कोमी (रूस)'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'hi-IN',
			language_name: 'कोर्निश (यूनाइटेड किंगडम)'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'hi-IN',
			language_name: 'क्वॉकवाला (कनाडा)'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'hi-IN',
			language_name: 'कुवी (भारत)'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'hi-IN',
			language_name: 'किर्गीज़ (किर्गिज़स्तान)'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'hi-IN',
			language_name: 'किर्गीज़ (चीन)'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'hi-IN',
			language_name: 'किर्गीज़ (तुर्किये)'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'hi-IN',
			language_name: 'लैटिन (वेटिकन सिटी)'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'hi-IN',
			language_name: 'लादीनो (इज़राइल)'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'hi-IN',
			language_name: 'लांगि (तंज़ानिया)'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'hi-IN',
			language_name: 'लाह्न्डा (पाकिस्तान)'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'hi-IN',
			language_name: 'लाम्बा (ज़ाम्बिया)'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'hi-IN',
			language_name: 'लग्ज़मबर्गी (लग्ज़मबर्ग)'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'hi-IN',
			language_name: 'लेज़्घीयन (रूस)'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'hi-IN',
			language_name: 'गांडा (युगांडा)'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'hi-IN',
			language_name: 'लिंबर्गिश (नीदरलैंड)'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'hi-IN',
			language_name: 'लिगुरियन (इटली)'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'hi-IN',
			language_name: 'लिलोएट (कनाडा)'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'hi-IN',
			language_name: 'लिवोनियन'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'hi-IN',
			language_name: 'लैकोटा (संयुक्त राज्य)'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'hi-IN',
			language_name: 'लोम्बार्ड (इटली)'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'hi-IN',
			language_name: 'लिंगाला (कांगो - किंशासा)'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'hi-IN',
			language_name: 'लाओ (लाओस)'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'hi-IN',
			language_name: 'मोंगो (कांगो - किंशासा)'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'hi-IN',
			language_name: 'लुईज़ियाना क्रियोल (संयुक्त राज्य)'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'hi-IN',
			language_name: 'लोज़ी (ज़ाम्बिया)'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी लूरी (ईरान)'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'hi-IN',
			language_name: 'सामिया (युगांडा)'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'hi-IN',
			language_name: 'लिथुआनियाई (लिथुआनिया)'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'hi-IN',
			language_name: 'लैटगैलियन'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'hi-IN',
			language_name: 'ल्यूबा-कटांगा (कांगो - किंशासा)'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'hi-IN',
			language_name: 'ल्यूबा-लुलुआ (कांगो - किंशासा)'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'hi-IN',
			language_name: 'लुइसेनो (संयुक्त राज्य)'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'hi-IN',
			language_name: 'लुन्डा (ज़ाम्बिया)'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'hi-IN',
			language_name: 'ल्युओ (केन्या)'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'hi-IN',
			language_name: 'मिज़ो (भारत)'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'hi-IN',
			language_name: 'ल्युईआ (केन्या)'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'hi-IN',
			language_name: 'लातवियाई (लातविया)'
		},
		{
			locale_code: 'lzh-CN',
			locale_id: 'hi-IN',
			language_name: 'साहित्यिक चीनी'
		},
		{
			locale_code: 'lzz-TR',
			locale_id: 'hi-IN',
			language_name: 'लाज़'
		},
		{
			locale_code: 'lzz-GE',
			locale_id: 'hi-IN',
			language_name: 'लाज़'
		},
		{
			locale_code: 'mad-ID',
			locale_id: 'hi-IN',
			language_name: 'मादुरीस (इंडोनेशिया)'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'hi-IN',
			language_name: 'माफा'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'hi-IN',
			language_name: 'मगही (भारत)'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'hi-IN',
			language_name: 'मैथिली (भारत)'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'hi-IN',
			language_name: 'मकासर (इंडोनेशिया)'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'hi-IN',
			language_name: 'मन्डिन्गो (गाम्बिया)'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'hi-IN',
			language_name: 'मन्डिन्गो (गिनी)'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'hi-IN',
			language_name: 'मसाई (केन्या)'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'hi-IN',
			language_name: 'माबा'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'hi-IN',
			language_name: 'मोक्ष (रूस)'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'hi-IN',
			language_name: 'मंदार (इंडोनेशिया)'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'hi-IN',
			language_name: 'मेन्डे (सिएरा लियोन)'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'hi-IN',
			language_name: 'मेरु (केन्या)'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'hi-IN',
			language_name: 'मोरीस्येन (मॉरीशस)'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'hi-IN',
			language_name: 'मालागासी (मेडागास्कर)'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन आइरिश (आयरलैंड)'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'hi-IN',
			language_name: 'मैखुवा-मीट्टो (मोज़ांबिक)'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'hi-IN',
			language_name: 'मेटा (कैमरून)'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'hi-IN',
			language_name: 'मार्शलीज़ (मार्शल द्वीपसमूह)'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'hi-IN',
			language_name: 'माओरी (न्यूज़ीलैंड)'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'hi-IN',
			language_name: 'मिकमैक (कनाडा)'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'hi-IN',
			language_name: 'मिनांग्काबाउ (इंडोनेशिया)'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'hi-IN',
			language_name: 'मकदूनियाई (उत्तरी मकदूनिया)'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'hi-IN',
			language_name: 'मलयालम (भारत)'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'hi-IN',
			language_name: 'मंगोलियाई (मंगोलिया)'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'hi-IN',
			language_name: 'मंगोलियाई (चीन)'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'hi-IN',
			language_name: 'मन्चु (चीन)'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'hi-IN',
			language_name: 'मणिपुरी (भारत)'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'hi-IN',
			language_name: 'इन्नु-एईमन (कनाडा)'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'hi-IN',
			language_name: 'मोहौक (कनाडा)'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'hi-IN',
			language_name: 'मोस्सी (बुर्किना फ़ासो)'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'hi-IN',
			language_name: 'मराठी (भारत)'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी मारी'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'hi-IN',
			language_name: 'मलय (मलेशिया)'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'hi-IN',
			language_name: 'मलय (कोकोस [कीलिंग] द्वीपसमूह)'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'hi-IN',
			language_name: 'माल्टीज़ (माल्टा)'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'hi-IN',
			language_name: 'मुंडैंग (कैमरून)'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'hi-IN',
			language_name: 'क्रीक (संयुक्त राज्य)'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'hi-IN',
			language_name: 'मिरांडी (पुर्तगाल)'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'hi-IN',
			language_name: 'मारवाड़ी (भारत)'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'hi-IN',
			language_name: 'मेंतवाई'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'hi-IN',
			language_name: 'बर्मीज़ (म्यांमार [बर्मा])'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'hi-IN',
			language_name: 'मायेन'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'hi-IN',
			language_name: 'एर्ज़या (रूस)'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'hi-IN',
			language_name: 'माज़न्देरानी (ईरान)'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'hi-IN',
			language_name: 'नाउरू (नाउरु)'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'hi-IN',
			language_name: 'मिन नान (चीन)'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'hi-IN',
			language_name: 'मिन नान (ताइवान)'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'hi-IN',
			language_name: 'मिन नान (मकाऊ [विशेष प्रशासनिक क्षेत्र चीन])'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'hi-IN',
			language_name: 'नीपोलिटन (इटली)'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'hi-IN',
			language_name: 'नामा (नामीबिया)'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई बोकमाल (नॉर्वे)'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी देबेल (ज़िम्बाब्वे)'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'hi-IN',
			language_name: 'निचला जर्मन (जर्मनी)'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'hi-IN',
			language_name: 'नेपाली (नेपाल)'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'hi-IN',
			language_name: 'नेवाड़ी (नेपाल)'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'hi-IN',
			language_name: 'डोन्गा (नामीबिया)'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'hi-IN',
			language_name: 'नियास (इंडोनेशिया)'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'hi-IN',
			language_name: 'नियुआन (नीयू)'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'hi-IN',
			language_name: 'एओ नागा'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'hi-IN',
			language_name: 'डच (नीदरलैंड)'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'hi-IN',
			language_name: 'क्वासिओ (कैमरून)'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई नॉयनॉर्स्क (नॉर्वे)'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'hi-IN',
			language_name: 'गैम्बू (कैमरून)'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई (नॉर्वे)'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'hi-IN',
			language_name: 'नोगाई (रूस)'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'hi-IN',
			language_name: 'पुराना नॉर्स (स्वीडन)'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'hi-IN',
			language_name: 'एन्को (गिनी)'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिण देबेल (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी सोथो (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'hi-IN',
			language_name: 'नुएर (दक्षिण सूडान)'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'hi-IN',
			language_name: 'नवाहो (संयुक्त राज्य)'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'hi-IN',
			language_name: 'पारम्परिक नेवारी (नेपाल)'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'hi-IN',
			language_name: 'न्यानजा (मलावी)'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'hi-IN',
			language_name: 'न्यामवेज़ी (तंज़ानिया)'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'hi-IN',
			language_name: 'न्यानकोल (युगांडा)'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'hi-IN',
			language_name: 'न्योरो (युगांडा)'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'hi-IN',
			language_name: 'न्ज़ीमा (घाना)'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'hi-IN',
			language_name: 'ओसीटान (फ़्रांस)'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'hi-IN',
			language_name: 'ओजिब्वा (कनाडा)'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'hi-IN',
			language_name: 'उत्तरपश्चिमी ओजिब्वे (कनाडा)'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'hi-IN',
			language_name: 'सेंट्रल ओजीब्वे (कनाडा)'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'hi-IN',
			language_name: 'ओजी-क्री (कनाडा)'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी ओजिब्वा (कनाडा)'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'hi-IN',
			language_name: 'ओकनागन (कनाडा)'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'hi-IN',
			language_name: 'ओरोमो (इथियोपिया)'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'hi-IN',
			language_name: 'ओड़िया (भारत)'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'hi-IN',
			language_name: 'ओस्सेटिक (जॉर्जिया)'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'hi-IN',
			language_name: 'ओसेज (संयुक्त राज्य)'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'hi-IN',
			language_name: 'ओटोमान तुर्किश (तुर्किये)'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'hi-IN',
			language_name: 'पंजाबी (भारत)'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'hi-IN',
			language_name: 'पंजाबी (पाकिस्तान)'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'hi-IN',
			language_name: 'पंगासीनान (फ़िलिपींस)'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'hi-IN',
			language_name: 'पाह्लावी (ईरान)'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'hi-IN',
			language_name: 'पाह्लावी (चीन)'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'hi-IN',
			language_name: 'पाम्पान्गा (फ़िलिपींस)'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'hi-IN',
			language_name: 'पापियामेन्टो (कुरासाओ)'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'hi-IN',
			language_name: 'पलोउआन (पलाऊ)'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'hi-IN',
			language_name: 'पिकार्ड'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'hi-IN',
			language_name: 'नाइजीरियाई पिडगिन (नाइजीरिया)'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'hi-IN',
			language_name: 'पेंसिल्वेनिया जर्मन'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'hi-IN',
			language_name: 'प्लौटडिएट्सच'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'hi-IN',
			language_name: 'पुरानी फारसी (ईरान)'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'hi-IN',
			language_name: 'पैलेटिन जर्मन'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'hi-IN',
			language_name: 'फोएनिशियन (लेबनान)'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'hi-IN',
			language_name: 'पाली (यूनाइटेड किंगडम)'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'hi-IN',
			language_name: 'पाली (भारत)'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'hi-IN',
			language_name: 'पाली (श्रीलंका)'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'hi-IN',
			language_name: 'पाली (म्यांमार [बर्मा])'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'hi-IN',
			language_name: 'पाली (थाईलैंड)'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'hi-IN',
			language_name: 'पाईजिन (सोलोमन द्वीपसमूह)'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'hi-IN',
			language_name: 'पोलिश (पोलैंड)'
		},
		{
			locale_code: 'pms-IT',
			locale_id: 'hi-IN',
			language_name: 'पीडमोंटेस'
		},
		{
			locale_code: 'pnt-GR',
			locale_id: 'hi-IN',
			language_name: 'पोंटिक'
		},
		{
			locale_code: 'pnt-RU',
			locale_id: 'hi-IN',
			language_name: 'पोंटिक'
		},
		{
			locale_code: 'pnt-TR',
			locale_id: 'hi-IN',
			language_name: 'पोंटिक'
		},
		{
			locale_code: 'pon-FM',
			locale_id: 'hi-IN',
			language_name: 'पोह्नपिएन (माइक्रोनेशिया)'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'hi-IN',
			language_name: 'मलेसीट-पासेमेक्वोडी (कनाडा)'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'hi-IN',
			language_name: 'प्रुशियाई (पोलैंड)'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'hi-IN',
			language_name: 'पुरानी प्रोवेन्सल (फ़्रांस)'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'hi-IN',
			language_name: 'पश्तो (अफ़गानिस्तान)'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'hi-IN',
			language_name: 'ब्राज़ीली पुर्तगाली'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'hi-IN',
			language_name: 'क्वेचुआ (पेरू)'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'hi-IN',
			language_name: 'किश (ग्वाटेमाला)'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'hi-IN',
			language_name: 'चिम्बोराजो हाईलैंड क्विचुआ'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'hi-IN',
			language_name: 'राजस्थानी (भारत)'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'hi-IN',
			language_name: 'रापानुई (चिली)'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'hi-IN',
			language_name: 'रारोतोंगन (कुक द्वीपसमूह)'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'hi-IN',
			language_name: 'रोमाग्नोल'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'hi-IN',
			language_name: 'रोहिंग्या (म्यांमार [बर्मा])'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'hi-IN',
			language_name: 'रिफ़ियान'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'hi-IN',
			language_name: 'रोमान्श (स्विट्ज़रलैंड)'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'hi-IN',
			language_name: 'रुन्दी (बुरुंडी)'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'hi-IN',
			language_name: 'रोमानियाई (रोमानिया)'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'hi-IN',
			language_name: 'रोम्बो (तंज़ानिया)'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'hi-IN',
			language_name: 'रोमानी (रोमानिया)'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'hi-IN',
			language_name: 'रोटुमैन'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'hi-IN',
			language_name: 'रूसी (रूस)'
		},
		{
			locale_code: 'rue-UA',
			locale_id: 'hi-IN',
			language_name: 'रुसिन'
		},
		{
			locale_code: 'rug-SB',
			locale_id: 'hi-IN',
			language_name: 'रोविआना'
		},
		{
			locale_code: 'rup-RO',
			locale_id: 'hi-IN',
			language_name: 'अरोमानियन (रोमानिया)'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'hi-IN',
			language_name: 'किन्यारवांडा (रवांडा)'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'hi-IN',
			language_name: 'रवा (तंज़ानिया)'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'hi-IN',
			language_name: 'संस्कृत (भारत)'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'hi-IN',
			language_name: 'सन्डावे (तंज़ानिया)'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'hi-IN',
			language_name: 'याकूत (रूस)'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'hi-IN',
			language_name: 'सामैरिटन अरैमिक (फ़िलिस्तीनी क्षेत्र)'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'hi-IN',
			language_name: 'सैम्बुरु (केन्या)'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'hi-IN',
			language_name: 'सासाक (इंडोनेशिया)'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'hi-IN',
			language_name: 'संथाली (भारत)'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'hi-IN',
			language_name: 'सौराष्ट्र'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'hi-IN',
			language_name: 'न्गाम्बे (चाड)'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'hi-IN',
			language_name: 'सैंगु (तंज़ानिया)'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'hi-IN',
			language_name: 'सार्दिनियन (इटली)'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'hi-IN',
			language_name: 'सिसिलियन (इटली)'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'hi-IN',
			language_name: 'स्कॉट्स (यूनाइटेड किंगडम)'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'hi-IN',
			language_name: 'सिंधी (पाकिस्तान)'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'hi-IN',
			language_name: 'सिंधी (भारत)'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'hi-IN',
			language_name: 'सासरेसे सार्डिनियन'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी कार्डिश (ईरान)'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'hi-IN',
			language_name: 'नॉर्दन सामी (नॉर्वे)'
		},
		{
			locale_code: 'see-US',
			locale_id: 'hi-IN',
			language_name: 'सेनेका'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'hi-IN',
			language_name: 'सेना (मोज़ांबिक)'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'hi-IN',
			language_name: 'सेरी'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'hi-IN',
			language_name: 'सेल्कप (रूस)'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'hi-IN',
			language_name: 'कोयराबोरो सेन्नी (माली)'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'hi-IN',
			language_name: 'सांगो (मध्य अफ़्रीकी गणराज्य)'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'hi-IN',
			language_name: 'पुरानी आइरिश (आयरलैंड)'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'hi-IN',
			language_name: 'समोगिटियन'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'hi-IN',
			language_name: 'तैचेल्हित (मोरक्को)'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'hi-IN',
			language_name: 'शैन (म्यांमार [बर्मा])'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'hi-IN',
			language_name: 'चाडियन अरबी'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'hi-IN',
			language_name: 'सिंहली (श्रीलंका)'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'hi-IN',
			language_name: 'सिदामो (इथियोपिया)'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'hi-IN',
			language_name: 'स्लोवाक (स्लोवाकिया)'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'hi-IN',
			language_name: 'स्लोवेनियाई (स्लोवेनिया)'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी लशूटसीड (संयुक्त राज्य)'
		},
		{
			locale_code: 'sli-PL',
			locale_id: 'hi-IN',
			language_name: 'निचला सिलेसियन'
		},
		{
			locale_code: 'sly-ID',
			locale_id: 'hi-IN',
			language_name: 'सेलयार'
		},
		{
			locale_code: 'sm-WS',
			locale_id: 'hi-IN',
			language_name: 'सामोन (समोआ)'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी सामी (स्वीडन)'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'hi-IN',
			language_name: 'ल्युल सामी (स्वीडन)'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'hi-IN',
			language_name: 'इनारी सामी (फ़िनलैंड)'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'hi-IN',
			language_name: 'स्कोल्ट सामी (फ़िनलैंड)'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'hi-IN',
			language_name: 'शोणा (ज़िम्बाब्वे)'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'hi-IN',
			language_name: 'सोनिन्के (माली)'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'hi-IN',
			language_name: 'सोमाली (सोमालिया)'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'hi-IN',
			language_name: 'सोग्डिएन (उज़्बेकिस्तान)'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'hi-IN',
			language_name: 'अल्बानियाई (अल्बानिया)'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई (सर्बिया)'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई (मोंटेनेग्रो)'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई (रोमानिया)'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई (तुर्किये)'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'hi-IN',
			language_name: 'स्रानान टॉन्गो (सूरीनाम)'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'hi-IN',
			language_name: 'सेरेर (सेनेगल)'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'hi-IN',
			language_name: 'स्वाती (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'hi-IN',
			language_name: 'साहो (इरिट्रिया)'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी सेसेथो (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'hi-IN',
			language_name: 'सैटरलैंड फ़्रिसियाई'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'hi-IN',
			language_name: 'स्ट्रेट्स सैलिश (कनाडा)'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'hi-IN',
			language_name: 'सुंडानी (इंडोनेशिया)'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'hi-IN',
			language_name: 'सुकुमा (तंज़ानिया)'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'hi-IN',
			language_name: 'सुसु (गिनी)'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'hi-IN',
			language_name: 'स्वीडिश (स्वीडन)'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'hi-IN',
			language_name: 'स्वाहिली (तंज़ानिया)'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'hi-IN',
			language_name: 'कोमोरियन (मायोते)'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'hi-IN',
			language_name: 'क्लासिकल सिरिएक (तुर्किये)'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'hi-IN',
			language_name: 'सिरिएक (इराक)'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'hi-IN',
			language_name: 'सायलिज़ियन (पोलैंड)'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'hi-IN',
			language_name: 'तमिल (भारत)'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी टशोनी (कनाडा)'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'hi-IN',
			language_name: 'तुलु'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'hi-IN',
			language_name: 'तेलुगू (भारत)'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'hi-IN',
			language_name: 'टिम्ने (सिएरा लियोन)'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'hi-IN',
			language_name: 'टेसो (युगांडा)'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'hi-IN',
			language_name: 'तेरेनो (ब्राज़ील)'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'hi-IN',
			language_name: 'तेतुम (तिमोर-लेस्त)'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'hi-IN',
			language_name: 'ताजिक (ताजिकिस्तान)'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'hi-IN',
			language_name: 'ताजिक (पाकिस्तान)'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'hi-IN',
			language_name: 'टैगिश (कनाडा)'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'hi-IN',
			language_name: 'थाई (थाईलैंड)'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'hi-IN',
			language_name: 'टैल्हटन (कनाडा)'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'hi-IN',
			language_name: 'तिग्रीन्या (इथियोपिया)'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'hi-IN',
			language_name: 'टाइग्रे (इरिट्रिया)'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'hi-IN',
			language_name: 'तिव (नाइजीरिया)'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'hi-IN',
			language_name: 'तुर्कमेन (तुर्कमेनिस्तान)'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'hi-IN',
			language_name: 'तोकेलाऊ (तोकेलाउ)'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'hi-IN',
			language_name: 'त्सखुर'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'hi-IN',
			language_name: 'फ़िलिपीनो (फ़िलिपींस)'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'hi-IN',
			language_name: 'त्लिंगित (संयुक्त राज्य)'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'hi-IN',
			language_name: 'तालिश'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'hi-IN',
			language_name: 'तामाशेक (नाइजर)'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'hi-IN',
			language_name: 'सेत्स्वाना (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'hi-IN',
			language_name: 'टोंगन (टोंगा)'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'hi-IN',
			language_name: 'न्यासा टोन्गा (मलावी)'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'hi-IN',
			language_name: 'टोक पिसिन (पापुआ न्यू गिनी)'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'hi-IN',
			language_name: 'तुर्की (तुर्किये)'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'hi-IN',
			language_name: 'तुरोयो'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'hi-IN',
			language_name: 'तारोको (ताइवान)'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'hi-IN',
			language_name: 'तोरवाली'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'hi-IN',
			language_name: 'सोंगा (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'hi-IN',
			language_name: 'त्सकोनियन'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'hi-IN',
			language_name: 'त्सिमीशियन (कनाडा)'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'hi-IN',
			language_name: 'तातार (रूस)'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी टुशोनी (कनाडा)'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'hi-IN',
			language_name: 'मुस्लिम टैट'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'hi-IN',
			language_name: 'तम्बूका (मलावी)'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'hi-IN',
			language_name: 'तुवालु (तुवालू)'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'hi-IN',
			language_name: 'टासवाक (नाइजर)'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'hi-IN',
			language_name: 'ताहितियन (फ़्रेंच पोलिनेशिया)'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'hi-IN',
			language_name: 'तुवीनियन (रूस)'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'hi-IN',
			language_name: 'मध्य एटलस तमाज़ित (मोरक्को)'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'hi-IN',
			language_name: 'उदमुर्त (रूस)'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'hi-IN',
			language_name: 'उईग़ूर (चीन)'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'hi-IN',
			language_name: 'उईग़ूर (कज़ाखस्तान)'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'hi-IN',
			language_name: 'उईग़ूर (मंगोलिया)'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'hi-IN',
			language_name: 'युगैरिटिक (सीरिया)'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'hi-IN',
			language_name: 'यूक्रेनियाई (यूक्रेन)'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'hi-IN',
			language_name: 'उम्बुन्डु (अंगोला)'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'hi-IN',
			language_name: 'कातालान (एंडोरा)'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'hi-IN',
			language_name: 'अरबी (संयुक्त अरब अमीरात)'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'hi-IN',
			language_name: 'दारी'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली (अंगोला)'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (अर्जेंटीना)'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'hi-IN',
			language_name: 'मलय (ब्रूनेई)'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'hi-IN',
			language_name: 'उर्दू (यूनाइटेड किंगडम)'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'hi-IN',
			language_name: 'मलय (इंडोनेशिया)'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'hi-IN',
			language_name: 'उर्दू (भारत)'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'hi-IN',
			language_name: 'उर्दू (मॉरीशस)'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'hi-IN',
			language_name: 'उर्दू (पाकिस्तान)'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'hi-IN',
			language_name: 'फ़ारसी (ताजिकिस्तान)'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'hi-IN',
			language_name: 'सामोन (अमेरिकी समोआ)'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'hi-IN',
			language_name: 'ऑस्ट्रियाई जर्मन'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'hi-IN',
			language_name: 'डच (अरूबा)'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'hi-IN',
			language_name: 'स्वीडिश (एलैंड द्वीपसमूह)'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'hi-IN',
			language_name: 'फ़्लेमिश'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (बुर्किना फ़ासो)'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'hi-IN',
			language_name: 'अरबी (बहरीन)'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (बेनिन)'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (सेंट बार्थेलेमी)'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (बोलीविया)'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'hi-IN',
			language_name: 'चीनी (ताइवान)'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'hi-IN',
			language_name: 'पापियामेन्टो (कैरिबियन नीदरलैंड)'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई (बोवेत द्वीप)'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'hi-IN',
			language_name: 'रूसी (बेलारूस)'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (कांगो - किंशासा)'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (कांगो – ब्राज़ाविल)'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'hi-IN',
			language_name: 'स्विस उच्च जर्मन'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (कोत दिवुआर)'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (चिली)'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (कैमरून)'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'hi-IN',
			language_name: 'चीनी (चीन)'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (कोलंबिया)'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'hi-IN',
			language_name: 'root (साइप्रस)'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (कोस्टारिका)'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (क्यूबा)'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली (केप वर्ड)'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'hi-IN',
			language_name: 'यूनानी (साइप्रस)'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'hi-IN',
			language_name: 'कारा-कल्पक (अफ़गानिस्तान)'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'hi-IN',
			language_name: 'मकदूनियाई (अल्बानिया)'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई (बोस्निया और हर्ज़ेगोविना)'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'hi-IN',
			language_name: 'मकदूनियाई (यूनान)'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'hi-IN',
			language_name: 'कारा-कल्पक (ईरान)'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'hi-IN',
			language_name: 'यूक्रेनियाई (मॉल्डोवा)'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'hi-IN',
			language_name: 'बुल्गारियाई (रोमानिया)'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'hi-IN',
			language_name: 'यूक्रेनियाई (स्लोवाकिया)'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'hi-IN',
			language_name: 'कबार्डियन (तुर्किये)'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'hi-IN',
			language_name: 'उज़्बेक (उज़्बेकिस्तान)'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'hi-IN',
			language_name: 'नेपाली (भूटान)'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'hi-IN',
			language_name: 'भोजपुरी (मॉरीशस)'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (जिबूती)'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (डोमिनिकन गणराज्य)'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'hi-IN',
			language_name: 'अरबी (अल्जीरिया)'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (इक्वाडोर)'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'hi-IN',
			language_name: 'अरबी (पश्चिमी सहारा)'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'hi-IN',
			language_name: 'तिग्रीन्या (इरिट्रिया)'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (गैबॉन)'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'hi-IN',
			language_name: 'वोलोफ़ (सेनेगल)'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (फ़्रेंच गुयाना)'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (गिनी)'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (ग्वाडेलूप)'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (इक्वेटोरियल गिनी)'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (ग्वाटेमाला)'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली (गिनी-बिसाउ)'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'hi-IN',
			language_name: 'कैंटोनीज़ (कनाडा)'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'hi-IN',
			language_name: 'कैंटोनीज़ (चीन)'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'hi-IN',
			language_name: 'यहूदी (स्वीडन)'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'hi-IN',
			language_name: 'यहूदी (यूक्रेन)'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'hi-IN',
			language_name: 'यहूदी (संयुक्त राज्य)'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'hi-IN',
			language_name: 'चीनी (हाँग काँग [चीन विशेष प्रशासनिक क्षेत्र])'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ (ऑस्ट्रेलिया)'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ (फ़्रांस)'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ (फ़्रेंच गुयाना)'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ (म्यांमार [बर्मा])'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ (सूरीनाम)'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ (थाईलैंड)'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (होंडूरास)'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'hi-IN',
			language_name: 'अरबी (इराक)'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'hi-IN',
			language_name: 'अरबी (जॉर्डन)'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'hi-IN',
			language_name: 'स्वाहिली (केन्या)'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'hi-IN',
			language_name: 'अरबी (कोमोरोस)'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'hi-IN',
			language_name: 'कोरियाई (उत्तर कोरिया)'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'hi-IN',
			language_name: 'अरबी (कुवैत)'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'hi-IN',
			language_name: 'रूसी (कज़ाखस्तान)'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (संयुक्त अरब अमीरात)'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'hi-IN',
			language_name: 'तुर्कमेन (अफ़गानिस्तान)'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (बांग्लादेश)'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (बुल्गारिया)'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (भूटान)'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (कोकोस [कीलिंग] द्वीपसमूह)'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'hi-IN',
			language_name: 'ज़ुआंग (चीन)'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'hi-IN',
			language_name: 'तुर्की (साइप्रस)'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (अल्जीरिया)'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (मिस्र)'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (इरिट्रिया)'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (इथियोपिया)'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (यूनान)'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (हाँग काँग [चीन विशेष प्रशासनिक क्षेत्र])'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (इज़राइल)'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (इराक)'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'hi-IN',
			language_name: 'तुर्कमेन (ईरान)'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (जॉर्डन)'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (कोमोरोस)'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (कज़ाखस्तान)'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (लेबनान)'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (श्रीलंका)'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (मोरक्को)'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'hi-IN',
			language_name: 'अल्बानियाई (उत्तरी मकदूनिया)'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (मकाऊ [विशेष प्रशासनिक क्षेत्र चीन])'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (मॉरिटानिया)'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (मालदीव)'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (नेपाल)'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (पाकिस्तान)'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (सूडान)'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (दक्षिण सूडान)'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश (सीरिया)'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (चाड)'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (थाईलैंड)'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (ट्यूनीशिया)'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'hi-IN',
			language_name: 'पोलिश (यूक्रेन)'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी (यमन)'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'hi-IN',
			language_name: 'अरबी (लेबनान)'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'hi-IN',
			language_name: 'जर्मन (लिचेंस्टीन)'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी सेसेथो (लेसोथो)'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (लग्ज़मबर्ग)'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'hi-IN',
			language_name: 'अरबी (लीबिया)'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'hi-IN',
			language_name: 'अरबी (मोरक्को)'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (मोनाको)'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'hi-IN',
			language_name: 'मोलडावियन'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (सेंट मार्टिन)'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'hi-IN',
			language_name: 'चीनी (मकाऊ [विशेष प्रशासनिक क्षेत्र चीन])'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (मार्टीनिक)'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'hi-IN',
			language_name: 'अरबी (मॉरिटानिया)'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (मॉरीशस)'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'hi-IN',
			language_name: 'मैक्सिकन स्पेनिश'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली (मोज़ांबिक)'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'hi-IN',
			language_name: 'अफ़्रीकी (नामीबिया)'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (न्यू कैलेडोनिया)'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'hi-IN',
			language_name: 'हौसा (नाइजर)'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (निकारागुआ)'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'hi-IN',
			language_name: 'अरबी (ओमान)'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (पनामा)'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (पेरू)'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (फ़्रेंच पोलिनेशिया)'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (सेंट पिएरे और मिक्वेलान)'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (पोर्टो रिको)'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'hi-IN',
			language_name: 'अरबी (फ़िलिस्तीनी क्षेत्र)'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'hi-IN',
			language_name: 'यूरोपीय पुर्तगाली'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'hi-IN',
			language_name: 'अरबी (क़तर)'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (रियूनियन)'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'hi-IN',
			language_name: 'अरबी (सऊदी अरब)'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (सेशेल्स)'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'hi-IN',
			language_name: 'अरबी (सूडान)'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई बोकमाल (स्वालबार्ड और जान मायेन)'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'hi-IN',
			language_name: 'इतालवी (सैन मेरीनो)'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'hi-IN',
			language_name: 'डच (सूरीनाम)'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'hi-IN',
			language_name: 'अरबी (दक्षिण सूडान)'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली (साओ टोम और प्रिंसिपे)'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (अल सल्वाडोर)'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'hi-IN',
			language_name: 'अरबी (सीरिया)'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'hi-IN',
			language_name: 'अरबी (चाड)'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (फ़्रांसीसी दक्षिणी क्षेत्र)'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'hi-IN',
			language_name: 'मानक मोरक्कन तामाज़ाइट (मोरक्को)'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (टोगो)'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली (तिमोर-लेस्त)'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'hi-IN',
			language_name: 'अरबी (ट्यूनीशिया)'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'hi-IN',
			language_name: 'स्वाहिली (युगांडा)'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (उरूग्वे)'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'hi-IN',
			language_name: 'इतालवी (वेटिकन सिटी)'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'hi-IN',
			language_name: 'वाई (लाइबेरिया)'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश (वेनेज़ुएला)'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'hi-IN',
			language_name: 'वियतनामी (वियतनाम)'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (वालिस और फ़्यूचूना)'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'hi-IN',
			language_name: 'अरबी (यमन)'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच (मायोते)'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'hi-IN',
			language_name: 'उज़्बेक (अफ़गानिस्तान)'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'hi-IN',
			language_name: 'उज़्बेक (चीन)'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'hi-IN',
			language_name: 'वेन्दा (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'hi-IN',
			language_name: 'वेनीशियन (इटली)'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'hi-IN',
			language_name: 'वेप्स'
		},
		{
			locale_code: 'vls-BE',
			locale_id: 'hi-IN',
			language_name: 'पश्चिम फ्लेमिश'
		},
		{
			locale_code: 'vmf-DE',
			locale_id: 'hi-IN',
			language_name: 'मुख्य-फ्रैंकोनियन'
		},
		{
			locale_code: 'vmw-MZ',
			locale_id: 'hi-IN',
			language_name: 'मखुवा (मोज़ांबिक)'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'hi-IN',
			language_name: 'वॉटिक (रूस)'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'hi-IN',
			language_name: 'वीरो'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'hi-IN',
			language_name: 'वुंजो (तंज़ानिया)'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'hi-IN',
			language_name: 'वाल्लून (बेल्जियम)'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'hi-IN',
			language_name: 'वाल्सर (स्विट्ज़रलैंड)'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'hi-IN',
			language_name: 'वलामो (इथियोपिया)'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'hi-IN',
			language_name: 'वारै (फ़िलिपींस)'
		},
		{
			locale_code: 'was-US',
			locale_id: 'hi-IN',
			language_name: 'वाशो (संयुक्त राज्य)'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'hi-IN',
			language_name: 'वॉल्पेरी (ऑस्ट्रेलिया)'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'hi-IN',
			language_name: 'वू चीनी (चीन)'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'hi-IN',
			language_name: 'काल्मिक (रूस)'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'hi-IN',
			language_name: 'ख़ोसा (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'hi-IN',
			language_name: 'मिंग्रेलियन'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'hi-IN',
			language_name: 'कांगड़ी (भारत)'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'hi-IN',
			language_name: 'सोगा (युगांडा)'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'hi-IN',
			language_name: 'याओ (मोज़ांबिक)'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'hi-IN',
			language_name: 'यापीस (माइक्रोनेशिया)'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'hi-IN',
			language_name: 'यांगबेन (कैमरून)'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'hi-IN',
			language_name: 'येंबा (कैमरून)'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'hi-IN',
			language_name: 'योरूबा (नाइजीरिया)'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'hi-IN',
			language_name: 'नेइंगातू (ब्राज़ील)'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'hi-IN',
			language_name: 'कैंटोनीज़ (हाँग काँग [चीन विशेष प्रशासनिक क्षेत्र])'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'hi-IN',
			language_name: 'ज़ेपोटेक (मैक्सिको)'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'hi-IN',
			language_name: 'ज़ीलैंडिक'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'hi-IN',
			language_name: 'ज़ेनान्गा (मॉरिटानिया)'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'hi-IN',
			language_name: 'चीनी (ऑस्ट्रेलिया)'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'hi-IN',
			language_name: 'चीनी (ब्रूनेई)'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'hi-IN',
			language_name: 'चीनी (यूनाइटेड किंगडम)'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'hi-IN',
			language_name: 'चीनी (फ़्रेंच गुयाना)'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'hi-IN',
			language_name: 'चीनी (इंडोनेशिया)'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'hi-IN',
			language_name: 'चीनी (पनामा)'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'hi-IN',
			language_name: 'चीनी (फ़्रेंच पोलिनेशिया)'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'hi-IN',
			language_name: 'चीनी (फ़िलिपींस)'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'hi-IN',
			language_name: 'चीनी (सूरीनाम)'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'hi-IN',
			language_name: 'चीनी (थाईलैंड)'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'hi-IN',
			language_name: 'चीनी (संयुक्त राज्य)'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'hi-IN',
			language_name: 'चीनी (वियतनाम)'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'hi-IN',
			language_name: 'ज़ुलू (दक्षिण अफ़्रीका)'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'hi-IN',
			language_name: 'ज़ूनी (संयुक्त राज्य)'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'hi-IN',
			language_name: 'ज़ाज़ा (तुर्किये)'
		}
	];

	// Add timestamps to all rows
	const rowsWithTimestamps = rows.map((row) => ({
		...row,
		created_at: now,
		updated_at: now
	}));

	// Deduplicate by locale_code to avoid ON CONFLICT multi-hit
	const uniqueRows = Object.values(
		rowsWithTimestamps.reduce((acc, r) => {
			acc[r.locale_code] = r;
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
