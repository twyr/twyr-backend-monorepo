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
			language_name: 'अफ़ार'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'hi-IN',
			language_name: 'अब्ख़ाज़ियन'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'hi-IN',
			language_name: 'अचाइनीस'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'hi-IN',
			language_name: 'अकोली'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'hi-IN',
			language_name: 'अदान्गमे'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'hi-IN',
			language_name: 'अदिघे'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'hi-IN',
			language_name: 'अवस्ताई'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'hi-IN',
			language_name: 'ट्यूनीशियाई अरबी'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'hi-IN',
			language_name: 'अफ़्रीकी'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'hi-IN',
			language_name: 'अफ्रिहिली'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'hi-IN',
			language_name: 'अग्हेम'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'hi-IN',
			language_name: 'ऐनू'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'hi-IN',
			language_name: 'अकन'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'hi-IN',
			language_name: 'अक्कादी'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'hi-IN',
			language_name: 'अलबामा'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'hi-IN',
			language_name: 'अलेउत'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी अल्ताई'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'hi-IN',
			language_name: 'अम्हेरी'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'hi-IN',
			language_name: 'अरागोनी'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'hi-IN',
			language_name: 'पुरानी अंग्रेज़ी'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'hi-IN',
			language_name: 'ओबोलो'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'hi-IN',
			language_name: 'अंगिका'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'hi-IN',
			language_name: 'ऐरेमेक'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'hi-IN',
			language_name: 'ऐरेमेक'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'hi-IN',
			language_name: 'ऐरेमेक'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'hi-IN',
			language_name: 'ऐरेमेक'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'hi-IN',
			language_name: 'मापूचे'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'hi-IN',
			language_name: 'अरौना'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'hi-IN',
			language_name: 'अरापाहो'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'hi-IN',
			language_name: 'अल्जीरियाई अरबी'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'hi-IN',
			language_name: 'नज्दी अरबी'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'hi-IN',
			language_name: 'अरावक'
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
			language_name: 'असमिया'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'hi-IN',
			language_name: 'असु'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'hi-IN',
			language_name: 'अमेरिकी सांकेतिक भाषा'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'hi-IN',
			language_name: 'अस्तुरियन'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'hi-IN',
			language_name: 'अतिकामेक्व'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'hi-IN',
			language_name: 'अवेरिक'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'hi-IN',
			language_name: 'अवधी'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'hi-IN',
			language_name: 'आयमारा'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'hi-IN',
			language_name: 'अज़रबैजानी'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'hi-IN',
			language_name: 'अज़रबैजानी'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'hi-IN',
			language_name: 'अज़रबैजानी'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'hi-IN',
			language_name: 'अज़रबैजानी'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'hi-IN',
			language_name: 'बशख़िर'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'hi-IN',
			language_name: 'बलूची'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'hi-IN',
			language_name: 'बालिनीस'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'hi-IN',
			language_name: 'बवेरियन'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'hi-IN',
			language_name: 'बसा'
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
			language_name: 'बेलारूसी'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'hi-IN',
			language_name: 'बेजा'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'hi-IN',
			language_name: 'बेम्बा'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'hi-IN',
			language_name: 'बेतावी'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'hi-IN',
			language_name: 'बेना'
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
			language_name: 'बुल्गारियाई'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'hi-IN',
			language_name: 'हरियाणवी'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी बलोची'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'hi-IN',
			language_name: 'भोजपुरी'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'hi-IN',
			language_name: 'बिस्लामा'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'hi-IN',
			language_name: 'बिकोल'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'hi-IN',
			language_name: 'बिनी'
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
			language_name: 'सिक्सिका'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'hi-IN',
			language_name: 'अनी'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'hi-IN',
			language_name: 'ताई बांध'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'hi-IN',
			language_name: 'बाम्बारा'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'hi-IN',
			language_name: 'बंगाली'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'hi-IN',
			language_name: 'तिब्बती'
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
			language_name: 'ब्रेटन'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'hi-IN',
			language_name: 'ब्रज'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'hi-IN',
			language_name: 'ब्राहुई'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'hi-IN',
			language_name: 'बोडो'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'hi-IN',
			language_name: 'बोस्नियाई'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'hi-IN',
			language_name: 'अकूसे'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'hi-IN',
			language_name: 'बुरियात'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'hi-IN',
			language_name: 'बगिनीस'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'hi-IN',
			language_name: 'बुलु'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'hi-IN',
			language_name: 'ब्लिन'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'hi-IN',
			language_name: 'मेडुम्बा'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'hi-IN',
			language_name: 'कातालान'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'hi-IN',
			language_name: 'कैड्डो'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'hi-IN',
			language_name: 'कैरिब'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'hi-IN',
			language_name: 'कायुगा'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'hi-IN',
			language_name: 'अत्सम'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'hi-IN',
			language_name: 'चकमा'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'hi-IN',
			language_name: 'चेचन'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'hi-IN',
			language_name: 'सिबुआनो'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'hi-IN',
			language_name: 'शिगा'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'hi-IN',
			language_name: 'कमोरो'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'hi-IN',
			language_name: 'चिब्चा'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'hi-IN',
			language_name: 'छगाताई'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'hi-IN',
			language_name: 'चूकीस'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'hi-IN',
			language_name: 'मारी'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'hi-IN',
			language_name: 'चिनूक जारगॉन'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'hi-IN',
			language_name: 'चोक्तौ'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'hi-IN',
			language_name: 'शिपेव्यान'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'hi-IN',
			language_name: 'चेरोकी'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'hi-IN',
			language_name: 'शेयेन्न'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'hi-IN',
			language_name: 'चिकसॉ'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'hi-IN',
			language_name: 'सोरानी कुर्दिश'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'hi-IN',
			language_name: 'चिलकोटिन'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'hi-IN',
			language_name: 'कोर्सीकन'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'hi-IN',
			language_name: 'कॉप्टिक'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'hi-IN',
			language_name: 'कैपिज़नॉन'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'hi-IN',
			language_name: 'क्री'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'hi-IN',
			language_name: 'मिचिफ़'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'hi-IN',
			language_name: 'क्रीमीन तुर्की'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिण पूर्वी क्री'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'hi-IN',
			language_name: 'प्लेन्स क्री'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'hi-IN',
			language_name: 'नॉर्दन ईस्ट क्री'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'hi-IN',
			language_name: 'मूस क्री'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'hi-IN',
			language_name: 'सेसेल्वा क्रिओल फ्रेंच'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'hi-IN',
			language_name: 'चेक'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'hi-IN',
			language_name: 'काशुबियन'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'hi-IN',
			language_name: 'स्वॉम्पी क्री'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'hi-IN',
			language_name: 'चर्च साल्विक'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'hi-IN',
			language_name: 'चर्च साल्विक'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'hi-IN',
			language_name: 'चूवाश'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'hi-IN',
			language_name: 'वेल्श'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'hi-IN',
			language_name: 'डेनिश'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'hi-IN',
			language_name: 'दाकोता'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'hi-IN',
			language_name: 'दार्गवा'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'hi-IN',
			language_name: 'तैता'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'hi-IN',
			language_name: 'जर्मन'
		},
		{
			locale_code: 'del-US',
			locale_id: 'hi-IN',
			language_name: 'डिलैवेयर'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'hi-IN',
			language_name: 'स्लेव'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'hi-IN',
			language_name: 'डोग्रिब'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'hi-IN',
			language_name: 'दिन्का'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'hi-IN',
			language_name: 'झार्मा'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'hi-IN',
			language_name: 'डोगरी'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'hi-IN',
			language_name: 'निचला सॉर्बियन'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'hi-IN',
			language_name: 'सेंट्रल दुसुन'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'hi-IN',
			language_name: 'दुआला'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन पुर्तगाली'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'hi-IN',
			language_name: 'दिवेही'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'hi-IN',
			language_name: 'जोला-फोंई'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'hi-IN',
			language_name: 'ड्युला'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'hi-IN',
			language_name: 'ज़ोन्गखा'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'hi-IN',
			language_name: 'दज़ागा'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'hi-IN',
			language_name: 'एम्बु'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'hi-IN',
			language_name: 'ईवे'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'hi-IN',
			language_name: 'एफिक'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'hi-IN',
			language_name: 'एमिलियन'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'hi-IN',
			language_name: 'प्राचीन मिस्री'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'hi-IN',
			language_name: 'एकाजुक'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'hi-IN',
			language_name: 'यूनानी'
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
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन अंग्रेज़ी'
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
			language_name: 'एस्टोनियाई'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'hi-IN',
			language_name: 'बास्क'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'hi-IN',
			language_name: 'इवोन्डो'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'hi-IN',
			language_name: 'एक्सट्रीमाडुरन'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'hi-IN',
			language_name: 'फ़ारसी'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'hi-IN',
			language_name: 'फैन्ग'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'hi-IN',
			language_name: 'फुलाह'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'hi-IN',
			language_name: 'फुलाह'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'hi-IN',
			language_name: 'फ़िनिश'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'hi-IN',
			language_name: 'फ़िलिपीनो'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'hi-IN',
			language_name: 'टोर्नेडेलन फिनिश'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'hi-IN',
			language_name: 'फिजियन'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'hi-IN',
			language_name: 'फ़ैरोइज़'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'hi-IN',
			language_name: 'फॉन'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'hi-IN',
			language_name: 'केजन फ़्रेंच'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन फ़्रांसीसी'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'hi-IN',
			language_name: 'पुरातन फ़्रांसीसी'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'hi-IN',
			language_name: 'अर्पितन'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी फ़्रीसियाई'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'hi-IN',
			language_name: 'पूर्वी फ़्रीसियाई'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'hi-IN',
			language_name: 'फ्रीयुलीयान'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी फ़्रिसियाई'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'hi-IN',
			language_name: 'आयरिश'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'hi-IN',
			language_name: 'गा'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'hi-IN',
			language_name: 'गागौज़'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'hi-IN',
			language_name: 'गण चीनी'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'hi-IN',
			language_name: 'गायो'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'hi-IN',
			language_name: 'ग्बाया'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'hi-IN',
			language_name: 'पारसी दारी'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'hi-IN',
			language_name: 'स्कॉटिश गाएलिक'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'hi-IN',
			language_name: 'गीज़'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'hi-IN',
			language_name: 'गिल्बरतीस'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'hi-IN',
			language_name: 'गैलिशियन'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'hi-IN',
			language_name: 'गिलकी'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन हाइ जर्मन'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'hi-IN',
			language_name: 'गुआरानी'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'hi-IN',
			language_name: 'पुरातन हाइ जर्मन'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'hi-IN',
			language_name: 'गाँडी'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'hi-IN',
			language_name: 'गोरोन्तालो'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'hi-IN',
			language_name: 'गॉथिक'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'hi-IN',
			language_name: 'ग्रेबो'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'hi-IN',
			language_name: 'प्राचीन यूनानी'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'hi-IN',
			language_name: 'स्विस जर्मन'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'hi-IN',
			language_name: 'गुजराती'
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
			language_name: 'गुसी'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'hi-IN',
			language_name: 'मैंक्स'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'hi-IN',
			language_name: 'ग्विचइन'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'hi-IN',
			language_name: 'हौसा'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'hi-IN',
			language_name: 'हौसा'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'hi-IN',
			language_name: 'हौसा'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'hi-IN',
			language_name: 'हैडा'
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
			language_name: 'हवाई'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी हाइदा'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'hi-IN',
			language_name: 'हिब्रू'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'hi-IN',
			language_name: 'हिन्दी'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'hi-IN',
			language_name: 'फ़िजी हिंदी'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'hi-IN',
			language_name: 'हिलिगेनन'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'hi-IN',
			language_name: 'हिताइत'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'hi-IN',
			language_name: 'ह्मॉंग'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'hi-IN',
			language_name: 'हिरी मोटू'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'hi-IN',
			language_name: 'क्रोएशियाई'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'hi-IN',
			language_name: 'ऊपरी सॉर्बियन'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'hi-IN',
			language_name: 'जियांग चीनी'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'hi-IN',
			language_name: 'हैतियाई'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'hi-IN',
			language_name: 'हंगेरियाई'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'hi-IN',
			language_name: 'हूपा'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'hi-IN',
			language_name: 'हल्कोमेलम'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'hi-IN',
			language_name: 'आर्मेनियाई'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'hi-IN',
			language_name: 'हरैरो'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'hi-IN',
			language_name: 'इबान'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'hi-IN',
			language_name: 'इबिबियो'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'hi-IN',
			language_name: 'इंडोनेशियाई'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'hi-IN',
			language_name: 'इंटरलिंग'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'hi-IN',
			language_name: 'ईग्बो'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'hi-IN',
			language_name: 'सिचुआन यी'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'hi-IN',
			language_name: 'इनुपियाक्'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी कनाडाई इनुक्टिटुट'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'hi-IN',
			language_name: 'इलोको'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'hi-IN',
			language_name: 'इंगुश'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'hi-IN',
			language_name: 'आइसलैंडिक'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'hi-IN',
			language_name: 'इतालवी'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'hi-IN',
			language_name: 'इनुक्टिटुट'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'hi-IN',
			language_name: 'इंग्रियन'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'hi-IN',
			language_name: 'जापानी'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'hi-IN',
			language_name: 'जमैका क्रियोल अंग्रेजी'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'hi-IN',
			language_name: 'नगोंबा'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'hi-IN',
			language_name: 'मैकहैमे'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'hi-IN',
			language_name: 'जुदेओ-पर्शियन'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'hi-IN',
			language_name: 'जुदेओ-अरेबिक'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'hi-IN',
			language_name: 'जुटिश'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'hi-IN',
			language_name: 'जावानीज़'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'hi-IN',
			language_name: 'जॉर्जियाई'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'hi-IN',
			language_name: 'कारा-कल्पक'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'hi-IN',
			language_name: 'कबाइल'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'hi-IN',
			language_name: 'काचिन'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'hi-IN',
			language_name: 'ज्जु'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'hi-IN',
			language_name: 'कम्बा'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'hi-IN',
			language_name: 'कावी'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'hi-IN',
			language_name: 'कबार्डियन'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'hi-IN',
			language_name: 'कनेम्बु'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'hi-IN',
			language_name: 'त्याप'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'hi-IN',
			language_name: 'मैकोंड'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'hi-IN',
			language_name: 'काबुवेर्दियानु'
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
			language_name: 'कोरो'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'hi-IN',
			language_name: 'कोंगो'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'hi-IN',
			language_name: 'काइंगांग'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'hi-IN',
			language_name: 'खासी'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'hi-IN',
			language_name: 'खोतानीस'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'hi-IN',
			language_name: 'कोयरा चीनी'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'hi-IN',
			language_name: 'खोवार'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'hi-IN',
			language_name: 'किकुयू'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'hi-IN',
			language_name: 'किरमंजकी'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'hi-IN',
			language_name: 'क्वान्यामा'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'hi-IN',
			language_name: 'कज़ाख़'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'hi-IN',
			language_name: 'काको'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'hi-IN',
			language_name: 'कलालीसुत'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'hi-IN',
			language_name: 'कलेंजिन'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'hi-IN',
			language_name: 'खमेर'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'hi-IN',
			language_name: 'किम्बन्दु'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'hi-IN',
			language_name: 'कन्नड़'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'hi-IN',
			language_name: 'कोरियाई'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'hi-IN',
			language_name: 'कोमी-पर्मयाक'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'hi-IN',
			language_name: 'कोंकणी'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'hi-IN',
			language_name: 'कोसरैन'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'hi-IN',
			language_name: 'क्पेल'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'hi-IN',
			language_name: 'कनुरी'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'hi-IN',
			language_name: 'कराचय-बल्कार'
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
			language_name: 'करेलियन'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'hi-IN',
			language_name: 'कुरूख'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'hi-IN',
			language_name: 'कश्मीरी'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'hi-IN',
			language_name: 'शम्बाला'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'hi-IN',
			language_name: 'बफिआ'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'hi-IN',
			language_name: 'कोलोनियाई'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'hi-IN',
			language_name: 'कुमीक'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'hi-IN',
			language_name: 'क्यूतनाई'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'hi-IN',
			language_name: 'कोमी'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'hi-IN',
			language_name: 'कोर्निश'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'hi-IN',
			language_name: 'क्वॉकवाला'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'hi-IN',
			language_name: 'कुवी'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'hi-IN',
			language_name: 'किर्गीज़'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'hi-IN',
			language_name: 'किर्गीज़'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'hi-IN',
			language_name: 'किर्गीज़'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'hi-IN',
			language_name: 'लैटिन'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'hi-IN',
			language_name: 'लादीनो'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'hi-IN',
			language_name: 'लांगि'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'hi-IN',
			language_name: 'लाह्न्डा'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'hi-IN',
			language_name: 'लाम्बा'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'hi-IN',
			language_name: 'लग्ज़मबर्गी'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'hi-IN',
			language_name: 'लेज़्घीयन'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'hi-IN',
			language_name: 'गांडा'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'hi-IN',
			language_name: 'लिंबर्गिश'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'hi-IN',
			language_name: 'लिगुरियन'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'hi-IN',
			language_name: 'लिलोएट'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'hi-IN',
			language_name: 'लिवोनियन'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'hi-IN',
			language_name: 'लैकोटा'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'hi-IN',
			language_name: 'लोम्बार्ड'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'hi-IN',
			language_name: 'लिंगाला'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'hi-IN',
			language_name: 'लाओ'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'hi-IN',
			language_name: 'मोंगो'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'hi-IN',
			language_name: 'लुईज़ियाना क्रियोल'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'hi-IN',
			language_name: 'लोज़ी'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी लूरी'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'hi-IN',
			language_name: 'सामिया'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'hi-IN',
			language_name: 'लिथुआनियाई'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'hi-IN',
			language_name: 'लैटगैलियन'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'hi-IN',
			language_name: 'ल्यूबा-कटांगा'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'hi-IN',
			language_name: 'ल्यूबा-लुलुआ'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'hi-IN',
			language_name: 'लुइसेनो'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'hi-IN',
			language_name: 'लुन्डा'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'hi-IN',
			language_name: 'ल्युओ'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'hi-IN',
			language_name: 'मिज़ो'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'hi-IN',
			language_name: 'ल्युईआ'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'hi-IN',
			language_name: 'लातवियाई'
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
			language_name: 'मादुरीस'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'hi-IN',
			language_name: 'माफा'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'hi-IN',
			language_name: 'मगही'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'hi-IN',
			language_name: 'मैथिली'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'hi-IN',
			language_name: 'मकासर'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'hi-IN',
			language_name: 'मन्डिन्गो'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'hi-IN',
			language_name: 'मन्डिन्गो'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'hi-IN',
			language_name: 'मसाई'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'hi-IN',
			language_name: 'माबा'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'hi-IN',
			language_name: 'मोक्ष'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'hi-IN',
			language_name: 'मंदार'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'hi-IN',
			language_name: 'मेन्डे'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'hi-IN',
			language_name: 'मेरु'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'hi-IN',
			language_name: 'मोरीस्येन'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'hi-IN',
			language_name: 'मालागासी'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'hi-IN',
			language_name: 'मध्यकालीन आइरिश'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'hi-IN',
			language_name: 'मैखुवा-मीट्टो'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'hi-IN',
			language_name: 'मेटा'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'hi-IN',
			language_name: 'मार्शलीज़'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'hi-IN',
			language_name: 'माओरी'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'hi-IN',
			language_name: 'मिकमैक'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'hi-IN',
			language_name: 'मिनांग्काबाउ'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'hi-IN',
			language_name: 'मकदूनियाई'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'hi-IN',
			language_name: 'मलयालम'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'hi-IN',
			language_name: 'मंगोलियाई'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'hi-IN',
			language_name: 'मंगोलियाई'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'hi-IN',
			language_name: 'मन्चु'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'hi-IN',
			language_name: 'मणिपुरी'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'hi-IN',
			language_name: 'इन्नु-एईमन'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'hi-IN',
			language_name: 'मोहौक'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'hi-IN',
			language_name: 'मोस्सी'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'hi-IN',
			language_name: 'मराठी'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी मारी'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'hi-IN',
			language_name: 'मलय'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'hi-IN',
			language_name: 'मलय'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'hi-IN',
			language_name: 'माल्टीज़'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'hi-IN',
			language_name: 'मुंडैंग'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'hi-IN',
			language_name: 'क्रीक'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'hi-IN',
			language_name: 'मिरांडी'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'hi-IN',
			language_name: 'मारवाड़ी'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'hi-IN',
			language_name: 'मेंतवाई'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'hi-IN',
			language_name: 'बर्मीज़'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'hi-IN',
			language_name: 'मायेन'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'hi-IN',
			language_name: 'एर्ज़या'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'hi-IN',
			language_name: 'माज़न्देरानी'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'hi-IN',
			language_name: 'नाउरू'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'hi-IN',
			language_name: 'मिन नान'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'hi-IN',
			language_name: 'मिन नान'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'hi-IN',
			language_name: 'मिन नान'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'hi-IN',
			language_name: 'नीपोलिटन'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'hi-IN',
			language_name: 'नामा'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई बोकमाल'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी देबेल'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'hi-IN',
			language_name: 'निचला जर्मन'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'hi-IN',
			language_name: 'नेपाली'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'hi-IN',
			language_name: 'नेवाड़ी'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'hi-IN',
			language_name: 'डोन्गा'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'hi-IN',
			language_name: 'नियास'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'hi-IN',
			language_name: 'नियुआन'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'hi-IN',
			language_name: 'एओ नागा'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'hi-IN',
			language_name: 'डच'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'hi-IN',
			language_name: 'क्वासिओ'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई नॉयनॉर्स्क'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'hi-IN',
			language_name: 'गैम्बू'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'hi-IN',
			language_name: 'नोगाई'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'hi-IN',
			language_name: 'पुराना नॉर्स'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'hi-IN',
			language_name: 'एन्को'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिण देबेल'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी सोथो'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'hi-IN',
			language_name: 'नुएर'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'hi-IN',
			language_name: 'नवाहो'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'hi-IN',
			language_name: 'पारम्परिक नेवारी'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'hi-IN',
			language_name: 'न्यानजा'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'hi-IN',
			language_name: 'न्यामवेज़ी'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'hi-IN',
			language_name: 'न्यानकोल'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'hi-IN',
			language_name: 'न्योरो'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'hi-IN',
			language_name: 'न्ज़ीमा'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'hi-IN',
			language_name: 'ओसीटान'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'hi-IN',
			language_name: 'ओजिब्वा'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'hi-IN',
			language_name: 'उत्तरपश्चिमी ओजिब्वे'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'hi-IN',
			language_name: 'सेंट्रल ओजीब्वे'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'hi-IN',
			language_name: 'ओजी-क्री'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'hi-IN',
			language_name: 'पश्चिमी ओजिब्वा'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'hi-IN',
			language_name: 'ओकनागन'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'hi-IN',
			language_name: 'ओरोमो'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'hi-IN',
			language_name: 'ओड़िया'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'hi-IN',
			language_name: 'ओस्सेटिक'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'hi-IN',
			language_name: 'ओसेज'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'hi-IN',
			language_name: 'ओटोमान तुर्किश'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'hi-IN',
			language_name: 'पंजाबी'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'hi-IN',
			language_name: 'पंजाबी'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'hi-IN',
			language_name: 'पंगासीनान'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'hi-IN',
			language_name: 'पाह्लावी'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'hi-IN',
			language_name: 'पाह्लावी'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'hi-IN',
			language_name: 'पाम्पान्गा'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'hi-IN',
			language_name: 'पापियामेन्टो'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'hi-IN',
			language_name: 'पलोउआन'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'hi-IN',
			language_name: 'पिकार्ड'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'hi-IN',
			language_name: 'नाइजीरियाई पिडगिन'
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
			language_name: 'पुरानी फारसी'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'hi-IN',
			language_name: 'पैलेटिन जर्मन'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'hi-IN',
			language_name: 'फोएनिशियन'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'hi-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'hi-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'hi-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'hi-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'hi-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'hi-IN',
			language_name: 'पाईजिन'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'hi-IN',
			language_name: 'पोलिश'
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
			language_name: 'पोह्नपिएन'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'hi-IN',
			language_name: 'मलेसीट-पासेमेक्वोडी'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'hi-IN',
			language_name: 'प्रुशियाई'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'hi-IN',
			language_name: 'पुरानी प्रोवेन्सल'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'hi-IN',
			language_name: 'पश्तो'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'hi-IN',
			language_name: 'ब्राज़ीली पुर्तगाली'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'hi-IN',
			language_name: 'क्वेचुआ'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'hi-IN',
			language_name: 'किश'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'hi-IN',
			language_name: 'चिम्बोराजो हाईलैंड क्विचुआ'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'hi-IN',
			language_name: 'राजस्थानी'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'hi-IN',
			language_name: 'रापानुई'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'hi-IN',
			language_name: 'रारोतोंगन'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'hi-IN',
			language_name: 'रोमाग्नोल'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'hi-IN',
			language_name: 'रोहिंग्या'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'hi-IN',
			language_name: 'रिफ़ियान'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'hi-IN',
			language_name: 'रोमान्श'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'hi-IN',
			language_name: 'रुन्दी'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'hi-IN',
			language_name: 'रोमानियाई'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'hi-IN',
			language_name: 'रोम्बो'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'hi-IN',
			language_name: 'रोमानी'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'hi-IN',
			language_name: 'रोटुमैन'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'hi-IN',
			language_name: 'रूसी'
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
			language_name: 'अरोमानियन'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'hi-IN',
			language_name: 'किन्यारवांडा'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'hi-IN',
			language_name: 'रवा'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'hi-IN',
			language_name: 'संस्कृत'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'hi-IN',
			language_name: 'सन्डावे'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'hi-IN',
			language_name: 'याकूत'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'hi-IN',
			language_name: 'सामैरिटन अरैमिक'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'hi-IN',
			language_name: 'सैम्बुरु'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'hi-IN',
			language_name: 'सासाक'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'hi-IN',
			language_name: 'संथाली'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'hi-IN',
			language_name: 'सौराष्ट्र'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'hi-IN',
			language_name: 'न्गाम्बे'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'hi-IN',
			language_name: 'सैंगु'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'hi-IN',
			language_name: 'सार्दिनियन'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'hi-IN',
			language_name: 'सिसिलियन'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'hi-IN',
			language_name: 'स्कॉट्स'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'hi-IN',
			language_name: 'सिंधी'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'hi-IN',
			language_name: 'सिंधी'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'hi-IN',
			language_name: 'सासरेसे सार्डिनियन'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी कार्डिश'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'hi-IN',
			language_name: 'नॉर्दन सामी'
		},
		{
			locale_code: 'see-US',
			locale_id: 'hi-IN',
			language_name: 'सेनेका'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'hi-IN',
			language_name: 'सेना'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'hi-IN',
			language_name: 'सेरी'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'hi-IN',
			language_name: 'सेल्कप'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'hi-IN',
			language_name: 'कोयराबोरो सेन्नी'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'hi-IN',
			language_name: 'सांगो'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'hi-IN',
			language_name: 'पुरानी आइरिश'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'hi-IN',
			language_name: 'समोगिटियन'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'hi-IN',
			language_name: 'तैचेल्हित'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'hi-IN',
			language_name: 'शैन'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'hi-IN',
			language_name: 'चाडियन अरबी'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'hi-IN',
			language_name: 'सिंहली'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'hi-IN',
			language_name: 'सिदामो'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'hi-IN',
			language_name: 'स्लोवाक'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'hi-IN',
			language_name: 'स्लोवेनियाई'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी लशूटसीड'
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
			language_name: 'सामोन'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी सामी'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'hi-IN',
			language_name: 'ल्युल सामी'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'hi-IN',
			language_name: 'इनारी सामी'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'hi-IN',
			language_name: 'स्कोल्ट सामी'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'hi-IN',
			language_name: 'शोणा'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'hi-IN',
			language_name: 'सोनिन्के'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'hi-IN',
			language_name: 'सोमाली'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'hi-IN',
			language_name: 'सोग्डिएन'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'hi-IN',
			language_name: 'अल्बानियाई'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'hi-IN',
			language_name: 'स्रानान टॉन्गो'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'hi-IN',
			language_name: 'सेरेर'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'hi-IN',
			language_name: 'स्वाती'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'hi-IN',
			language_name: 'साहो'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी सेसेथो'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'hi-IN',
			language_name: 'सैटरलैंड फ़्रिसियाई'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'hi-IN',
			language_name: 'स्ट्रेट्स सैलिश'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'hi-IN',
			language_name: 'सुंडानी'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'hi-IN',
			language_name: 'सुकुमा'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'hi-IN',
			language_name: 'सुसु'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'hi-IN',
			language_name: 'स्वीडिश'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'hi-IN',
			language_name: 'स्वाहिली'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'hi-IN',
			language_name: 'कोमोरियन'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'hi-IN',
			language_name: 'क्लासिकल सिरिएक'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'hi-IN',
			language_name: 'सिरिएक'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'hi-IN',
			language_name: 'सायलिज़ियन'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'hi-IN',
			language_name: 'तमिल'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी टशोनी'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'hi-IN',
			language_name: 'तुलु'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'hi-IN',
			language_name: 'तेलुगू'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'hi-IN',
			language_name: 'टिम्ने'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'hi-IN',
			language_name: 'टेसो'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'hi-IN',
			language_name: 'तेरेनो'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'hi-IN',
			language_name: 'तेतुम'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'hi-IN',
			language_name: 'ताजिक'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'hi-IN',
			language_name: 'ताजिक'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'hi-IN',
			language_name: 'टैगिश'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'hi-IN',
			language_name: 'थाई'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'hi-IN',
			language_name: 'टैल्हटन'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'hi-IN',
			language_name: 'तिग्रीन्या'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'hi-IN',
			language_name: 'टाइग्रे'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'hi-IN',
			language_name: 'तिव'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'hi-IN',
			language_name: 'तुर्कमेन'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'hi-IN',
			language_name: 'तोकेलाऊ'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'hi-IN',
			language_name: 'त्सखुर'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'hi-IN',
			language_name: 'फ़िलिपीनो'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'hi-IN',
			language_name: 'त्लिंगित'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'hi-IN',
			language_name: 'तालिश'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'hi-IN',
			language_name: 'तामाशेक'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'hi-IN',
			language_name: 'सेत्स्वाना'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'hi-IN',
			language_name: 'टोंगन'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'hi-IN',
			language_name: 'न्यासा टोन्गा'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'hi-IN',
			language_name: 'टोक पिसिन'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'hi-IN',
			language_name: 'तुर्की'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'hi-IN',
			language_name: 'तुरोयो'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'hi-IN',
			language_name: 'तारोको'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'hi-IN',
			language_name: 'तोरवाली'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'hi-IN',
			language_name: 'सोंगा'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'hi-IN',
			language_name: 'त्सकोनियन'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'hi-IN',
			language_name: 'त्सिमीशियन'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'hi-IN',
			language_name: 'तातार'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'hi-IN',
			language_name: 'उत्तरी टुशोनी'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'hi-IN',
			language_name: 'मुस्लिम टैट'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'hi-IN',
			language_name: 'तम्बूका'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'hi-IN',
			language_name: 'तुवालु'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'hi-IN',
			language_name: 'टासवाक'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'hi-IN',
			language_name: 'ताहितियन'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'hi-IN',
			language_name: 'तुवीनियन'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'hi-IN',
			language_name: 'मध्य एटलस तमाज़ित'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'hi-IN',
			language_name: 'उदमुर्त'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'hi-IN',
			language_name: 'उईग़ूर'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'hi-IN',
			language_name: 'उईग़ूर'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'hi-IN',
			language_name: 'उईग़ूर'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'hi-IN',
			language_name: 'युगैरिटिक'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'hi-IN',
			language_name: 'यूक्रेनियाई'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'hi-IN',
			language_name: 'उम्बुन्डु'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'hi-IN',
			language_name: 'कातालान'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'hi-IN',
			language_name: 'दारी'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'hi-IN',
			language_name: 'मलय'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'hi-IN',
			language_name: 'उर्दू'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'hi-IN',
			language_name: 'मलय'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'hi-IN',
			language_name: 'उर्दू'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'hi-IN',
			language_name: 'उर्दू'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'hi-IN',
			language_name: 'उर्दू'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'hi-IN',
			language_name: 'फ़ारसी'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'hi-IN',
			language_name: 'सामोन'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'hi-IN',
			language_name: 'ऑस्ट्रियाई जर्मन'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'hi-IN',
			language_name: 'डच'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'hi-IN',
			language_name: 'स्वीडिश'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'hi-IN',
			language_name: 'फ़्लेमिश'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'hi-IN',
			language_name: 'पापियामेन्टो'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'hi-IN',
			language_name: 'रूसी'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'hi-IN',
			language_name: 'स्विस उच्च जर्मन'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'hi-IN',
			language_name: 'root'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'hi-IN',
			language_name: 'यूनानी'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'hi-IN',
			language_name: 'कारा-कल्पक'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'hi-IN',
			language_name: 'मकदूनियाई'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'hi-IN',
			language_name: 'सर्बियाई'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'hi-IN',
			language_name: 'मकदूनियाई'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'hi-IN',
			language_name: 'कारा-कल्पक'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'hi-IN',
			language_name: 'यूक्रेनियाई'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'hi-IN',
			language_name: 'बुल्गारियाई'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'hi-IN',
			language_name: 'यूक्रेनियाई'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'hi-IN',
			language_name: 'कबार्डियन'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'hi-IN',
			language_name: 'उज़्बेक'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'hi-IN',
			language_name: 'नेपाली'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'hi-IN',
			language_name: 'भोजपुरी'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'hi-IN',
			language_name: 'तिग्रीन्या'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'hi-IN',
			language_name: 'वोलोफ़'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'hi-IN',
			language_name: 'कैंटोनीज़'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'hi-IN',
			language_name: 'कैंटोनीज़'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'hi-IN',
			language_name: 'यहूदी'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'hi-IN',
			language_name: 'यहूदी'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'hi-IN',
			language_name: 'यहूदी'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'hi-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'hi-IN',
			language_name: 'स्वाहिली'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'hi-IN',
			language_name: 'कोरियाई'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'hi-IN',
			language_name: 'रूसी'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'hi-IN',
			language_name: 'तुर्कमेन'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'hi-IN',
			language_name: 'ज़ुआंग'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'hi-IN',
			language_name: 'तुर्की'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'hi-IN',
			language_name: 'तुर्कमेन'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'hi-IN',
			language_name: 'अल्बानियाई'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'hi-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'hi-IN',
			language_name: 'पोलिश'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'hi-IN',
			language_name: 'अंग्रेज़ी'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'hi-IN',
			language_name: 'जर्मन'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'hi-IN',
			language_name: 'दक्षिणी सेसेथो'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'hi-IN',
			language_name: 'मोलडावियन'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'hi-IN',
			language_name: 'मैक्सिकन स्पेनिश'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'hi-IN',
			language_name: 'अफ़्रीकी'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'hi-IN',
			language_name: 'हौसा'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'hi-IN',
			language_name: 'यूरोपीय पुर्तगाली'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'hi-IN',
			language_name: 'नॉर्वेजियाई बोकमाल'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'hi-IN',
			language_name: 'इतालवी'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'hi-IN',
			language_name: 'डच'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'hi-IN',
			language_name: 'मानक मोरक्कन तामाज़ाइट'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'hi-IN',
			language_name: 'पुर्तगाली'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'hi-IN',
			language_name: 'स्वाहिली'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'hi-IN',
			language_name: 'इतालवी'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'hi-IN',
			language_name: 'वाई'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'hi-IN',
			language_name: 'स्पेनिश'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'hi-IN',
			language_name: 'वियतनामी'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'hi-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'hi-IN',
			language_name: 'फ़्रेंच'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'hi-IN',
			language_name: 'उज़्बेक'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'hi-IN',
			language_name: 'उज़्बेक'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'hi-IN',
			language_name: 'वेन्दा'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'hi-IN',
			language_name: 'वेनीशियन'
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
			language_name: 'मखुवा'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'hi-IN',
			language_name: 'वॉटिक'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'hi-IN',
			language_name: 'वीरो'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'hi-IN',
			language_name: 'वुंजो'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'hi-IN',
			language_name: 'वाल्लून'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'hi-IN',
			language_name: 'वाल्सर'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'hi-IN',
			language_name: 'वलामो'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'hi-IN',
			language_name: 'वारै'
		},
		{
			locale_code: 'was-US',
			locale_id: 'hi-IN',
			language_name: 'वाशो'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'hi-IN',
			language_name: 'वॉल्पेरी'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'hi-IN',
			language_name: 'वू चीनी'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'hi-IN',
			language_name: 'काल्मिक'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'hi-IN',
			language_name: 'ख़ोसा'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'hi-IN',
			language_name: 'मिंग्रेलियन'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'hi-IN',
			language_name: 'कांगड़ी'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'hi-IN',
			language_name: 'सोगा'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'hi-IN',
			language_name: 'याओ'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'hi-IN',
			language_name: 'यापीस'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'hi-IN',
			language_name: 'यांगबेन'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'hi-IN',
			language_name: 'येंबा'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'hi-IN',
			language_name: 'योरूबा'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'hi-IN',
			language_name: 'नेइंगातू'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'hi-IN',
			language_name: 'कैंटोनीज़'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'hi-IN',
			language_name: 'ज़ेपोटेक'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'hi-IN',
			language_name: 'ज़ीलैंडिक'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'hi-IN',
			language_name: 'ज़ेनान्गा'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'hi-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'hi-IN',
			language_name: 'ज़ुलू'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'hi-IN',
			language_name: 'ज़ूनी'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'hi-IN',
			language_name: 'ज़ाज़ा'
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
