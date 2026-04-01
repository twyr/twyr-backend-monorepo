/* eslint-disable security/detect-object-injection */
/**
 * Static seed for locale_by_locale with mr-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * locale names (language + country) for the mr-IN locale.
 *
 * This seed depends on:
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 004-locales-by-locale-seed-mr-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM locale_by_locale WHERE locale_id = 'mr-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for mr-IN locale
	const rows = [
		{
			locale_code: 'aa-ET',
			locale_id: 'mr-IN',
			language_name: 'अफार'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'mr-IN',
			language_name: 'अबखेजियन'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'mr-IN',
			language_name: 'अचीनी'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'mr-IN',
			language_name: 'अकोली'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'mr-IN',
			language_name: 'अडांग्मे'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'mr-IN',
			language_name: 'अडिघे'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'mr-IN',
			language_name: 'अवेस्तन'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'mr-IN',
			language_name: 'ट्युनिशियन अरबी'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'mr-IN',
			language_name: 'अफ्रिकान्स'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'mr-IN',
			language_name: 'अफ्रिहिली'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'mr-IN',
			language_name: 'अघेम'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'mr-IN',
			language_name: 'ऐनू'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'mr-IN',
			language_name: 'अकान'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'mr-IN',
			language_name: 'अक्केडियन'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'mr-IN',
			language_name: 'अलाबामा'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'mr-IN',
			language_name: 'अलेउत'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य अल्ताई'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'mr-IN',
			language_name: 'अम्हारिक'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'mr-IN',
			language_name: 'अर्गोनीज'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'mr-IN',
			language_name: 'पुरातन इंग्रजी'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'mr-IN',
			language_name: 'ओबोलो'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'mr-IN',
			language_name: 'अंगिका'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅरेमाइक'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅरेमाइक'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅरेमाइक'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅरेमाइक'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'mr-IN',
			language_name: 'मापुची'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'mr-IN',
			language_name: 'आरोना'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'mr-IN',
			language_name: 'आरापाहो'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'mr-IN',
			language_name: 'अल्जेरियन अरबी'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'mr-IN',
			language_name: 'नजदी अरबी'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'mr-IN',
			language_name: 'आरावाक'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'mr-IN',
			language_name: 'मोरोक्कन अरबी'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'mr-IN',
			language_name: 'इजिप्शियन अरबी'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'mr-IN',
			language_name: 'आसामी'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'mr-IN',
			language_name: 'असु'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'mr-IN',
			language_name: 'अमेरिकन सांकेतिक भाषा'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'mr-IN',
			language_name: 'अस्तुरियन'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'mr-IN',
			language_name: 'अटिकमेक'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅव्हेरिक'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'mr-IN',
			language_name: 'अवधी'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'mr-IN',
			language_name: 'ऐमरा'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'mr-IN',
			language_name: 'अझरबैजानी'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'mr-IN',
			language_name: 'अझरबैजानी'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'mr-IN',
			language_name: 'अझरबैजानी'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'mr-IN',
			language_name: 'अझरबैजानी'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'mr-IN',
			language_name: 'बष्किर'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'mr-IN',
			language_name: 'बलुची'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'mr-IN',
			language_name: 'बालिनीज'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'mr-IN',
			language_name: 'बव्हेरियन'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'mr-IN',
			language_name: 'बसा'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'mr-IN',
			language_name: 'बामून'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'mr-IN',
			language_name: 'बटक तोबा'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'mr-IN',
			language_name: 'घोमळा'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'mr-IN',
			language_name: 'बेलारुशियन'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'mr-IN',
			language_name: 'बेजा'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'mr-IN',
			language_name: 'बेम्बा'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'mr-IN',
			language_name: 'बेतावी'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'mr-IN',
			language_name: 'बेना'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'mr-IN',
			language_name: 'बाफुट'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'mr-IN',
			language_name: 'बडगा'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'mr-IN',
			language_name: 'बल्गेरियन'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'mr-IN',
			language_name: 'हरियाणवी'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'mr-IN',
			language_name: 'पश्चिमी बालोची'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'mr-IN',
			language_name: 'भोजपुरी'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'mr-IN',
			language_name: 'बिस्लामा'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'mr-IN',
			language_name: 'बिकोल'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'mr-IN',
			language_name: 'बिनी'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'mr-IN',
			language_name: 'बंजार'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'mr-IN',
			language_name: 'कोम'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'mr-IN',
			language_name: 'सिक्सिका'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'mr-IN',
			language_name: 'ॲनीआय'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'mr-IN',
			language_name: 'ताई धरणे'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'mr-IN',
			language_name: 'बाम्बारा'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'mr-IN',
			language_name: 'बंगाली'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'mr-IN',
			language_name: 'तिबेटी'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'mr-IN',
			language_name: 'बिष्णुप्रिया'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'mr-IN',
			language_name: 'बख्तियारी'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'mr-IN',
			language_name: 'ब्रेतॉन'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'mr-IN',
			language_name: 'ब्रज'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'mr-IN',
			language_name: 'ब्राहुई'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'mr-IN',
			language_name: 'बोडो'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'mr-IN',
			language_name: 'बोस्नियन'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'mr-IN',
			language_name: 'एकूस'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'mr-IN',
			language_name: 'बुरियात'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'mr-IN',
			language_name: 'बगिनीस'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'mr-IN',
			language_name: 'बुलु'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'mr-IN',
			language_name: 'ब्लिन'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'mr-IN',
			language_name: 'मेदुंबा'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'mr-IN',
			language_name: 'कातालान'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'mr-IN',
			language_name: 'कॅड्डो'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'mr-IN',
			language_name: 'कॅरिब'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'mr-IN',
			language_name: 'केयुगा'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'mr-IN',
			language_name: 'अत्सम'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'mr-IN',
			language_name: 'चाकमा'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'mr-IN',
			language_name: 'चेचेन'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'mr-IN',
			language_name: 'सिबुआनो'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'mr-IN',
			language_name: 'किगा'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'mr-IN',
			language_name: 'कॅमोरो'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'mr-IN',
			language_name: 'चिब्चा'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'mr-IN',
			language_name: 'छागाताइ'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'mr-IN',
			language_name: 'चूकीसे'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'mr-IN',
			language_name: 'मारी'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'mr-IN',
			language_name: 'चिनूक जारगॉन'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'mr-IN',
			language_name: 'चोक्तौ'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'mr-IN',
			language_name: 'शिपेव्यान'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'mr-IN',
			language_name: 'चेरोकी'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'mr-IN',
			language_name: 'शेयेन्न'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'mr-IN',
			language_name: 'चिकासॉ'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'mr-IN',
			language_name: 'मध्य कुर्दिश'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'mr-IN',
			language_name: 'चिलकोटिन'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'mr-IN',
			language_name: 'कॉर्सिकन'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'mr-IN',
			language_name: 'कॉप्टिक'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'mr-IN',
			language_name: 'कॅपिझनॉन'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'mr-IN',
			language_name: 'क्री'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'mr-IN',
			language_name: 'मिचिफो'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'mr-IN',
			language_name: 'क्राइमीन तुर्की'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य इस्ट क्री'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'mr-IN',
			language_name: 'प्लेन्स क्री'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'mr-IN',
			language_name: 'नॉर्दर्न ईस्ट क्री'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'mr-IN',
			language_name: 'मूस क्री'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'mr-IN',
			language_name: 'सेसेल्वा क्रिओल फ्रेंच'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'mr-IN',
			language_name: 'झेक'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'mr-IN',
			language_name: 'काशुबियन'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'mr-IN',
			language_name: 'स्वॅम्पी क्री'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'mr-IN',
			language_name: 'चर्च स्लाव्हिक'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'mr-IN',
			language_name: 'चर्च स्लाव्हिक'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'mr-IN',
			language_name: 'चूवाश'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'mr-IN',
			language_name: 'वेल्श'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'mr-IN',
			language_name: 'डॅनिश'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'mr-IN',
			language_name: 'डाकोटा'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'mr-IN',
			language_name: 'दार्गवा'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'mr-IN',
			language_name: 'तायता'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'mr-IN',
			language_name: 'जर्मन'
		},
		{
			locale_code: 'del-US',
			locale_id: 'mr-IN',
			language_name: 'डेलावेयर'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'mr-IN',
			language_name: 'स्लाव्ह'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'mr-IN',
			language_name: 'डोग्रिब'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'mr-IN',
			language_name: 'डिन्का'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'mr-IN',
			language_name: 'झार्मा'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'mr-IN',
			language_name: 'डोगरी'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'mr-IN',
			language_name: 'लोअर सोर्बियन'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'mr-IN',
			language_name: 'मध्य दुसुन'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'mr-IN',
			language_name: 'दुआला'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'mr-IN',
			language_name: 'मिडल डच'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'mr-IN',
			language_name: 'दिवेही'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'mr-IN',
			language_name: 'जोला-फॉन्यी'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'mr-IN',
			language_name: 'ड्युला'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'mr-IN',
			language_name: 'झोंगखा'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'mr-IN',
			language_name: 'दाझागा'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'mr-IN',
			language_name: 'एम्बू'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'mr-IN',
			language_name: 'एवे'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'mr-IN',
			language_name: 'एफिक'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'mr-IN',
			language_name: 'एमिलियन'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'mr-IN',
			language_name: 'प्राचीन इजिप्शियन'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'mr-IN',
			language_name: 'एकाजुक'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'mr-IN',
			language_name: 'ग्रीक'
		},
		{
			locale_code: 'en-US',
			locale_id: 'mr-IN',
			language_name: 'अमेरिकन इंग्रजी'
		},
		{
			locale_code: 'en-GB',
			locale_id: 'mr-IN',
			language_name: 'ब्रिटिश इंग्रजी'
		},
		{
			locale_code: 'en-IN',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'mr-IN',
			language_name: 'मिडल इंग्रजी'
		},
		{
			locale_code: 'es-ES',
			locale_id: 'mr-IN',
			language_name: 'युरोपियन स्पॅनिश'
		},
		{
			locale_code: 'esu-US',
			locale_id: 'mr-IN',
			language_name: 'मध्य युपिक'
		},
		{
			locale_code: 'et-EE',
			locale_id: 'mr-IN',
			language_name: 'इस्टोनियन'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'mr-IN',
			language_name: 'बास्क'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'mr-IN',
			language_name: 'इवोन्डो'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'mr-IN',
			language_name: 'एक्स्ट्रेमदुरन'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'mr-IN',
			language_name: 'फारसी'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'mr-IN',
			language_name: 'फँग'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'mr-IN',
			language_name: 'फुलाह'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'mr-IN',
			language_name: 'फुलाह'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'mr-IN',
			language_name: 'फिनिश'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'mr-IN',
			language_name: 'फिलिपिनो'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'mr-IN',
			language_name: 'Tornedalen फिनिश'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'mr-IN',
			language_name: 'फिजियन'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'mr-IN',
			language_name: 'फरोइज'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'mr-IN',
			language_name: 'फॉन'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'mr-IN',
			language_name: 'केजॉन फ्रेंच'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'mr-IN',
			language_name: 'मिडल फ्रेंच'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'mr-IN',
			language_name: 'पुरातन फ्रेंच'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'mr-IN',
			language_name: 'अर्पितन'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'mr-IN',
			language_name: 'उत्तरी फ्रिशियन'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'mr-IN',
			language_name: 'पौर्वात्य फ्रिशियन'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'mr-IN',
			language_name: 'फ्रियुलियान'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'mr-IN',
			language_name: 'पश्चिमी फ्रिशियन'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'mr-IN',
			language_name: 'आयरिश'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'mr-IN',
			language_name: 'गा'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'mr-IN',
			language_name: 'गागाउझ'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'mr-IN',
			language_name: 'गॅन चिनी'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'mr-IN',
			language_name: 'गायो'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'mr-IN',
			language_name: 'बाया'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'mr-IN',
			language_name: 'झोरोस्ट्रियन दारी'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'mr-IN',
			language_name: 'स्कॉटिश गेलिक'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'mr-IN',
			language_name: 'गीझ'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'mr-IN',
			language_name: 'जिल्बरटीज'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'mr-IN',
			language_name: 'गॅलिशियन'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'mr-IN',
			language_name: 'गिलाकी'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'mr-IN',
			language_name: 'मिडल हाय जर्मन'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'mr-IN',
			language_name: 'गुआरनी'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'mr-IN',
			language_name: 'पुरातन हाइ जर्मन'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'mr-IN',
			language_name: 'गाँडी'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'mr-IN',
			language_name: 'गोरोन्तालो'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'mr-IN',
			language_name: 'गॉथिक'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'mr-IN',
			language_name: 'ग्रेबो'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'mr-IN',
			language_name: 'प्राचीन ग्रीक'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'mr-IN',
			language_name: 'स्विस जर्मन'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'mr-IN',
			language_name: 'गुजराती'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'mr-IN',
			language_name: 'वायू'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'mr-IN',
			language_name: 'फ्राफ्रा'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'mr-IN',
			language_name: 'गसी'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'mr-IN',
			language_name: 'मांक्स'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'mr-IN',
			language_name: 'ग्विच’इन'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'mr-IN',
			language_name: 'हौसा'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'mr-IN',
			language_name: 'हौसा'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'mr-IN',
			language_name: 'हौसा'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'mr-IN',
			language_name: 'हैडा'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'mr-IN',
			language_name: 'हाक्का चिनी'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'mr-IN',
			language_name: 'हाक्का चिनी'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'mr-IN',
			language_name: 'हवाईयन'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य हैडा'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'mr-IN',
			language_name: 'हिब्रू'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'mr-IN',
			language_name: 'हिंदी'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'mr-IN',
			language_name: 'फिजी हिंदी'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'mr-IN',
			language_name: 'हिलीगेनॉन'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'mr-IN',
			language_name: 'हिट्टिते'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'mr-IN',
			language_name: 'माँग'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'mr-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'mr-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'mr-IN',
			language_name: 'हिरी मॉटू'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'mr-IN',
			language_name: 'क्रोएशियन'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'mr-IN',
			language_name: 'अप्पर सॉर्बियन'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'mr-IN',
			language_name: 'शियांग चिनी'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'mr-IN',
			language_name: 'हैतीयन क्रेओल'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'mr-IN',
			language_name: 'हंगेरियन'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'mr-IN',
			language_name: 'हूपा'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'mr-IN',
			language_name: 'हॉल्कमेलम'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'mr-IN',
			language_name: 'अर्मेनियन'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'mr-IN',
			language_name: 'हरेरो'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'mr-IN',
			language_name: 'इबान'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'mr-IN',
			language_name: 'इबिबिओ'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'mr-IN',
			language_name: 'इंडोनेशियन'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'mr-IN',
			language_name: 'इंटरलिंग'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'mr-IN',
			language_name: 'ईग्बो'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'mr-IN',
			language_name: 'सिचुआन यी'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'mr-IN',
			language_name: 'इनूपियाक'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'mr-IN',
			language_name: 'वेस्टर्न कॅनेडियन इनुकिटुट'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'mr-IN',
			language_name: 'इलोको'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'mr-IN',
			language_name: 'इंगुश'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'mr-IN',
			language_name: 'आईसलँडिक'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'mr-IN',
			language_name: 'इटालियन'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'mr-IN',
			language_name: 'इनुक्तीटुट'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'mr-IN',
			language_name: 'इंग्रिअन'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'mr-IN',
			language_name: 'जपानी'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'mr-IN',
			language_name: 'जमैकन क्रेओल इंग्रजी'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'mr-IN',
			language_name: 'गोम्बा'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'mr-IN',
			language_name: 'मशामे'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'mr-IN',
			language_name: 'जुदेओ-फारसी'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'mr-IN',
			language_name: 'जुदेओ-अरबी'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'mr-IN',
			language_name: 'जुतिश'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'mr-IN',
			language_name: 'जावानीज'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'mr-IN',
			language_name: 'जॉर्जियन'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'mr-IN',
			language_name: 'कारा-कल्पक'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'mr-IN',
			language_name: 'कबाइल'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'mr-IN',
			language_name: 'काचिन'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'mr-IN',
			language_name: 'ज्जु'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'mr-IN',
			language_name: 'काम्बा'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'mr-IN',
			language_name: 'कावी'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'mr-IN',
			language_name: 'कबार्डियन'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'mr-IN',
			language_name: 'कनेम्बू'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'mr-IN',
			language_name: 'त्याप'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'mr-IN',
			language_name: 'माकोन्दे'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'mr-IN',
			language_name: 'काबवर्दियानु'
		},
		{
			locale_code: 'kek-GT',
			locale_id: 'mr-IN',
			language_name: "Q'eqchi'"
		},
		{
			locale_code: 'ken-CM',
			locale_id: 'mr-IN',
			language_name: 'केन्यांग'
		},
		{
			locale_code: 'kfo-CI',
			locale_id: 'mr-IN',
			language_name: 'कोरो'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'mr-IN',
			language_name: 'काँगो'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'mr-IN',
			language_name: 'काइंगांग'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'mr-IN',
			language_name: 'खासी'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'mr-IN',
			language_name: 'खोतानीस'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'mr-IN',
			language_name: 'कोयरा चीनी'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'mr-IN',
			language_name: 'खोवर'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'mr-IN',
			language_name: 'किकुयू'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'mr-IN',
			language_name: 'किरमांजकी'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'mr-IN',
			language_name: 'क्वान्यामा'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'mr-IN',
			language_name: 'कझाक'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'mr-IN',
			language_name: 'कझाक'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'mr-IN',
			language_name: 'कझाक'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'mr-IN',
			language_name: 'कझाक'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'mr-IN',
			language_name: 'कझाक'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'mr-IN',
			language_name: 'काको'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'mr-IN',
			language_name: 'कलाल्लिसत'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'mr-IN',
			language_name: 'कालेंजीन'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'mr-IN',
			language_name: 'ख्मेर'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'mr-IN',
			language_name: 'किम्बन्दु'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'mr-IN',
			language_name: 'कन्नड'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'mr-IN',
			language_name: 'कोरियन'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'mr-IN',
			language_name: 'कोमी-परम्याक'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'mr-IN',
			language_name: 'कोंकणी'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'mr-IN',
			language_name: 'कोसरियन'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'mr-IN',
			language_name: 'क्पेल्ले'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'mr-IN',
			language_name: 'कनुरी'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'mr-IN',
			language_name: 'कराचय-बाल्कर'
		},
		{
			locale_code: 'kri-SL',
			locale_id: 'mr-IN',
			language_name: 'क्रिओ'
		},
		{
			locale_code: 'krj-PH',
			locale_id: 'mr-IN',
			language_name: 'किनराय-अ'
		},
		{
			locale_code: 'krl-RU',
			locale_id: 'mr-IN',
			language_name: 'करेलियन'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'mr-IN',
			language_name: 'कुरूख'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'mr-IN',
			language_name: 'काश्मिरी'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'mr-IN',
			language_name: 'शांबाला'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'mr-IN',
			language_name: 'बाफिया'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'mr-IN',
			language_name: 'कोलोग्नियन'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'mr-IN',
			language_name: 'कुमीक'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'mr-IN',
			language_name: 'कुतेनाई'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'mr-IN',
			language_name: 'कोमी'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'mr-IN',
			language_name: 'कोर्निश'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'mr-IN',
			language_name: 'क्वक्क्वाला'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'mr-IN',
			language_name: 'कुवी'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'mr-IN',
			language_name: 'किरगीझ'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'mr-IN',
			language_name: 'किरगीझ'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'mr-IN',
			language_name: 'किरगीझ'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'mr-IN',
			language_name: 'लॅटिन'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'mr-IN',
			language_name: 'लादीनो'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'mr-IN',
			language_name: 'लांगी'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'mr-IN',
			language_name: 'लाह्न्डा'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'mr-IN',
			language_name: 'लाम्बा'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'mr-IN',
			language_name: 'लक्झेंबर्गिश'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'mr-IN',
			language_name: 'लेझ्घीयन'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'mr-IN',
			language_name: 'गांडा'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'mr-IN',
			language_name: 'लिंबूर्गिश'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'mr-IN',
			language_name: 'लिगुरिअन'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'mr-IN',
			language_name: 'लिलूएट'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'mr-IN',
			language_name: 'लिव्होनियन'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'mr-IN',
			language_name: 'लाकोटा'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'mr-IN',
			language_name: 'लोंबार्ड'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'mr-IN',
			language_name: 'लिंगाला'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'mr-IN',
			language_name: 'लाओ'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'mr-IN',
			language_name: 'मोंगो'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'mr-IN',
			language_name: 'ल्युसियाना क्रिओल'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'mr-IN',
			language_name: 'लोझि'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'mr-IN',
			language_name: 'उत्तरी ल्युरी'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'mr-IN',
			language_name: 'सामिया'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'mr-IN',
			language_name: 'लिथुआनियन'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'mr-IN',
			language_name: 'लॅटगालियन'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'mr-IN',
			language_name: 'ल्यूबा-कटांगा'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'mr-IN',
			language_name: 'लुबा-लुलुआ'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'mr-IN',
			language_name: 'लुइसेनो'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'mr-IN',
			language_name: 'लुन्डा'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'mr-IN',
			language_name: 'ल्युओ'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'mr-IN',
			language_name: 'मिझो'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'mr-IN',
			language_name: 'ल्युइया'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'mr-IN',
			language_name: 'लात्व्हियन'
		},
		{
			locale_code: 'lzh-CN',
			locale_id: 'mr-IN',
			language_name: 'साहित्यिक चीनी'
		},
		{
			locale_code: 'lzz-TR',
			locale_id: 'mr-IN',
			language_name: 'आळस'
		},
		{
			locale_code: 'lzz-GE',
			locale_id: 'mr-IN',
			language_name: 'आळस'
		},
		{
			locale_code: 'mad-ID',
			locale_id: 'mr-IN',
			language_name: 'मादुरीस'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'mr-IN',
			language_name: 'माफा'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'mr-IN',
			language_name: 'मगही'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'mr-IN',
			language_name: 'मैथिली'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'mr-IN',
			language_name: 'मकस्सर'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'mr-IN',
			language_name: 'मन्डिन्गो'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'mr-IN',
			language_name: 'मन्डिन्गो'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'mr-IN',
			language_name: 'मसाई'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'mr-IN',
			language_name: 'माबा'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'mr-IN',
			language_name: 'मोक्ष'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'mr-IN',
			language_name: 'मंडार'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'mr-IN',
			language_name: 'मेन्डे'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'mr-IN',
			language_name: 'मेरू'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'mr-IN',
			language_name: 'मोरिस्येन'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'mr-IN',
			language_name: 'मलागसी'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'mr-IN',
			language_name: 'मिडल आयरिश'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'mr-IN',
			language_name: 'माखुव्हा-मीट्टो'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'mr-IN',
			language_name: 'मीटा'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'mr-IN',
			language_name: 'मार्शलीज'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'mr-IN',
			language_name: 'माओरी'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'mr-IN',
			language_name: 'मिकमॅक'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'mr-IN',
			language_name: 'मिनांग्काबाउ'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'mr-IN',
			language_name: 'मॅसेडोनियन'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'mr-IN',
			language_name: 'मल्याळम'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'mr-IN',
			language_name: 'मंगोलियन'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'mr-IN',
			language_name: 'मंगोलियन'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'mr-IN',
			language_name: 'मान्चु'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'mr-IN',
			language_name: 'मणिपुरी'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'mr-IN',
			language_name: 'इन्नू-ॲमन'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'mr-IN',
			language_name: 'मोहॉक'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'mr-IN',
			language_name: 'मोस्सी'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'mr-IN',
			language_name: 'मराठी'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'mr-IN',
			language_name: 'वेस्टर्न मारी'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'mr-IN',
			language_name: 'मलय'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'mr-IN',
			language_name: 'मलय'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'mr-IN',
			language_name: 'माल्टिज्'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'mr-IN',
			language_name: 'मुंडांग'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'mr-IN',
			language_name: 'क्रीक'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'mr-IN',
			language_name: 'मिरांडिज्'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'mr-IN',
			language_name: 'मारवाडी'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'mr-IN',
			language_name: 'मेंटावई'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'mr-IN',
			language_name: 'बर्मी'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'mr-IN',
			language_name: 'मायेने'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'mr-IN',
			language_name: 'एर्झ्या'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'mr-IN',
			language_name: 'माझानदेरानी'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'mr-IN',
			language_name: 'नउरू'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'mr-IN',
			language_name: 'मिन नान चिनी'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'mr-IN',
			language_name: 'मिन नान चिनी'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'mr-IN',
			language_name: 'मिन नान चिनी'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'mr-IN',
			language_name: 'नेपोलिटान'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'mr-IN',
			language_name: 'नामा'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन बोकमाल'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'mr-IN',
			language_name: 'उत्तर देबेली'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'mr-IN',
			language_name: 'लो जर्मन'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'mr-IN',
			language_name: 'नेपाळी'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'mr-IN',
			language_name: 'नेवारी'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'mr-IN',
			language_name: 'डोंगा'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'mr-IN',
			language_name: 'नियास'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'mr-IN',
			language_name: 'नियुआन'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'mr-IN',
			language_name: 'आओ नागा'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'mr-IN',
			language_name: 'डच'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'mr-IN',
			language_name: 'क्वासिओ'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन न्योर्स्क'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'mr-IN',
			language_name: 'जिएम्बून'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'mr-IN',
			language_name: 'नोगाई'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'mr-IN',
			language_name: 'पुरातन नॉर्स'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'mr-IN',
			language_name: 'एन्को'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य देबेली'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'mr-IN',
			language_name: 'उत्तरी सोथो'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'mr-IN',
			language_name: 'नुएर'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'mr-IN',
			language_name: 'नावाजो'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'mr-IN',
			language_name: 'अभिजात नेवारी'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'mr-IN',
			language_name: 'न्यान्जा'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'mr-IN',
			language_name: 'न्यामवेझी'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'mr-IN',
			language_name: 'न्यानकोल'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'mr-IN',
			language_name: 'न्योरो'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'mr-IN',
			language_name: 'न्झिमा'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'mr-IN',
			language_name: 'ऑक्सितान'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'mr-IN',
			language_name: 'ओजिब्वा'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'mr-IN',
			language_name: 'नॉर्थवेस्टर्न ओजिब्वा'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'mr-IN',
			language_name: 'सेंट्रल ओजिब्वा'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'mr-IN',
			language_name: 'ओजी-क्री'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'mr-IN',
			language_name: 'वेस्टर्न ओजिबवा'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'mr-IN',
			language_name: 'ओकनागन'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'mr-IN',
			language_name: 'ओरोमो'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'mr-IN',
			language_name: 'उडिया'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'mr-IN',
			language_name: 'ओस्सेटिक'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'mr-IN',
			language_name: 'ओसेज'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'mr-IN',
			language_name: 'ओटोमान तुर्किश'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'mr-IN',
			language_name: 'पंजाबी'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'mr-IN',
			language_name: 'पंजाबी'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'mr-IN',
			language_name: 'पंगासीनान'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'mr-IN',
			language_name: 'पहलवी'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'mr-IN',
			language_name: 'पहलवी'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'mr-IN',
			language_name: 'पाम्पान्गा'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'mr-IN',
			language_name: 'पापियामेन्टो'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'mr-IN',
			language_name: 'पालाउआन'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'mr-IN',
			language_name: 'पिकार्ड'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'mr-IN',
			language_name: 'नायजिरिअन पिजिन'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'mr-IN',
			language_name: 'पेनसिल्व्हेनिया जर्मन'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'mr-IN',
			language_name: 'प्लॉटडाइट्श'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'mr-IN',
			language_name: 'पुरातन फारसी'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'mr-IN',
			language_name: 'पॅलाटिन जर्मन'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'mr-IN',
			language_name: 'फोनिशियन'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'mr-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'mr-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'mr-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'mr-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'mr-IN',
			language_name: 'पाली'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'mr-IN',
			language_name: 'पिजिन'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'mr-IN',
			language_name: 'पोलिश'
		},
		{
			locale_code: 'pms-IT',
			locale_id: 'mr-IN',
			language_name: 'पायदमोंटीज'
		},
		{
			locale_code: 'pnt-GR',
			locale_id: 'mr-IN',
			language_name: 'पोंटिक'
		},
		{
			locale_code: 'pnt-RU',
			locale_id: 'mr-IN',
			language_name: 'पोंटिक'
		},
		{
			locale_code: 'pnt-TR',
			locale_id: 'mr-IN',
			language_name: 'पोंटिक'
		},
		{
			locale_code: 'pon-FM',
			locale_id: 'mr-IN',
			language_name: 'पोह्नपियन'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'mr-IN',
			language_name: 'मालीसेट-पासामाक्वाड्डी'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'mr-IN',
			language_name: 'प्रुशियन'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'mr-IN',
			language_name: 'पुरातन प्रोव्हेन्सल'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'mr-IN',
			language_name: 'पश्तो'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'mr-IN',
			language_name: 'ब्राझिलियन पोर्तुगीज'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'mr-IN',
			language_name: 'क्वेचुआ'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'mr-IN',
			language_name: 'कीशेइ'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'mr-IN',
			language_name: 'चिंबोराझो हाईलँड क्विचुआ'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'mr-IN',
			language_name: 'राजस्थानी'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'mr-IN',
			language_name: 'रापानुई'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'mr-IN',
			language_name: 'रारोटोंगन'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'mr-IN',
			language_name: 'रोमाग्नॉल'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'mr-IN',
			language_name: 'रोहिंग्या'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'mr-IN',
			language_name: 'रिफियन'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'mr-IN',
			language_name: 'रोमान्श'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'mr-IN',
			language_name: 'रुन्दी'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'mr-IN',
			language_name: 'रोमानियन'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'mr-IN',
			language_name: 'रोम्बो'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'mr-IN',
			language_name: 'रोमानी'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'mr-IN',
			language_name: 'रोटुमन'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'mr-IN',
			language_name: 'रशियन'
		},
		{
			locale_code: 'rue-UA',
			locale_id: 'mr-IN',
			language_name: 'रुसिन'
		},
		{
			locale_code: 'rug-SB',
			locale_id: 'mr-IN',
			language_name: 'रोव्हियाना'
		},
		{
			locale_code: 'rup-RO',
			locale_id: 'mr-IN',
			language_name: 'अरोमानियन'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'mr-IN',
			language_name: 'किन्यार्वान्डा'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'mr-IN',
			language_name: 'रव्हा'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'mr-IN',
			language_name: 'संस्कृत'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'mr-IN',
			language_name: 'सँडवे'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'mr-IN',
			language_name: 'साखा'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'mr-IN',
			language_name: 'सामरिटान अरॅमिक'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'mr-IN',
			language_name: 'सांबुरू'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'mr-IN',
			language_name: 'सासाक'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'mr-IN',
			language_name: 'संताली'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'mr-IN',
			language_name: 'सौराष्ट्र'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'mr-IN',
			language_name: 'गाम्बे'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'mr-IN',
			language_name: 'सांगु'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'mr-IN',
			language_name: 'सर्दिनियन'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'mr-IN',
			language_name: 'सिसिलियन'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'mr-IN',
			language_name: 'स्कॉट्स'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'mr-IN',
			language_name: 'सिंधी'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'mr-IN',
			language_name: 'सिंधी'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'mr-IN',
			language_name: 'सासरेसे सार्डिनियन'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणी कुर्दिश'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'mr-IN',
			language_name: 'उत्तरी सामी'
		},
		{
			locale_code: 'see-US',
			locale_id: 'mr-IN',
			language_name: 'सेनेका'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'mr-IN',
			language_name: 'सेना'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'mr-IN',
			language_name: 'सेरी'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'mr-IN',
			language_name: 'सेल्कप'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'mr-IN',
			language_name: 'कोयराबोरो सेन्नी'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'mr-IN',
			language_name: 'सांगो'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'mr-IN',
			language_name: 'पुरातन आयरिश'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'mr-IN',
			language_name: 'समोगिशियन'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'mr-IN',
			language_name: 'ताशेल्हिट'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'mr-IN',
			language_name: 'शॅन'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'mr-IN',
			language_name: 'चाडियन अरबी'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'mr-IN',
			language_name: 'सिंहला'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'mr-IN',
			language_name: 'सिदामो'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'mr-IN',
			language_name: 'स्लोव्हाक'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'mr-IN',
			language_name: 'स्लोव्हेनियन'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य लुशूटसीड'
		},
		{
			locale_code: 'sli-PL',
			locale_id: 'mr-IN',
			language_name: 'लोअर सिलेशियन'
		},
		{
			locale_code: 'sly-ID',
			locale_id: 'mr-IN',
			language_name: 'सेलायर'
		},
		{
			locale_code: 'sm-WS',
			locale_id: 'mr-IN',
			language_name: 'सामोअन'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य सामी'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'mr-IN',
			language_name: 'ल्युल सामी'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'mr-IN',
			language_name: 'इनारी सामी'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'mr-IN',
			language_name: 'स्कोल्ट सामी'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'mr-IN',
			language_name: 'शोना'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'mr-IN',
			language_name: 'सोनिन्के'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'mr-IN',
			language_name: 'सोमाली'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'mr-IN',
			language_name: 'सोग्डिएन'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'mr-IN',
			language_name: 'अल्बानियन'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'mr-IN',
			language_name: 'स्रानान टॉन्गो'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'mr-IN',
			language_name: 'सेरेर'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'mr-IN',
			language_name: 'स्वाती'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'mr-IN',
			language_name: 'साहो'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणी सोथो'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'mr-IN',
			language_name: 'सॅटरलँड फ्रिसियन'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'mr-IN',
			language_name: 'स्ट्राइट्स सालीश'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'mr-IN',
			language_name: 'सुंदानीज'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'mr-IN',
			language_name: 'सुकुमा'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'mr-IN',
			language_name: 'सुसु'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'mr-IN',
			language_name: 'स्वीडिश'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'mr-IN',
			language_name: 'स्वाहिली'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'mr-IN',
			language_name: 'कोमोरियन'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'mr-IN',
			language_name: 'अभिजात सिरियाक'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'mr-IN',
			language_name: 'सिरियाक'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'mr-IN',
			language_name: 'सिलेशियन'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'mr-IN',
			language_name: 'तामिळ'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य टचोन'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'mr-IN',
			language_name: 'तुळू'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'mr-IN',
			language_name: 'तेलगू'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'mr-IN',
			language_name: 'टिम्ने'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'mr-IN',
			language_name: 'तेसो'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'mr-IN',
			language_name: 'तेरेनो'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'mr-IN',
			language_name: 'तेतुम'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'mr-IN',
			language_name: 'ताजिक'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'mr-IN',
			language_name: 'ताजिक'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'mr-IN',
			language_name: 'टॅगिश'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'mr-IN',
			language_name: 'थाई'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'mr-IN',
			language_name: 'तहल्टन'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'mr-IN',
			language_name: 'तिग्रिन्या'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'mr-IN',
			language_name: 'टाइग्रे'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'mr-IN',
			language_name: 'तिव'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'mr-IN',
			language_name: 'तुर्कमेन'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'mr-IN',
			language_name: 'टोकेलाऊ'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'mr-IN',
			language_name: 'त्सखूर'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'mr-IN',
			language_name: 'फिलिपिनो'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'mr-IN',
			language_name: 'लिंगित'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'mr-IN',
			language_name: 'तालिश'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'mr-IN',
			language_name: 'तामाशेक'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'mr-IN',
			language_name: 'त्स्वाना'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'mr-IN',
			language_name: 'टोंगन'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'mr-IN',
			language_name: 'न्यासा टोन्गा'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'mr-IN',
			language_name: 'टोक पिसिन'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'mr-IN',
			language_name: 'तुर्की'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'mr-IN',
			language_name: 'तुरोयो'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'mr-IN',
			language_name: 'तारोको'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'mr-IN',
			language_name: 'तोरवली'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'mr-IN',
			language_name: 'सोंगा'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'mr-IN',
			language_name: 'त्सकोनियन'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'mr-IN',
			language_name: 'सिम्शियन'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'mr-IN',
			language_name: 'तातर'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'mr-IN',
			language_name: 'नॉर्दर्न टचोन'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'mr-IN',
			language_name: 'मुस्लिम टाट'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'mr-IN',
			language_name: 'तुम्बुका'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'mr-IN',
			language_name: 'टुवालु'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'mr-IN',
			language_name: 'तासाव्हाक'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'mr-IN',
			language_name: 'ताहितीयन'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'mr-IN',
			language_name: 'टुवीनियन'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'mr-IN',
			language_name: 'मध्य अ‍ॅटलास तॅमाझाइट'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'mr-IN',
			language_name: 'उदमुर्त'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'mr-IN',
			language_name: 'उइगुर'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'mr-IN',
			language_name: 'उइगुर'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'mr-IN',
			language_name: 'उइगुर'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'mr-IN',
			language_name: 'युगॅरिटिक'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'mr-IN',
			language_name: 'युक्रेनियन'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'mr-IN',
			language_name: 'उम्बुन्डु'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'mr-IN',
			language_name: 'कातालान'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'mr-IN',
			language_name: 'दारी'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'mr-IN',
			language_name: 'मलय'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'mr-IN',
			language_name: 'उर्दू'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'mr-IN',
			language_name: 'मलय'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'mr-IN',
			language_name: 'उर्दू'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'mr-IN',
			language_name: 'उर्दू'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'mr-IN',
			language_name: 'उर्दू'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'mr-IN',
			language_name: 'फारसी'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'mr-IN',
			language_name: 'सामोअन'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'mr-IN',
			language_name: 'ऑस्ट्रियन जर्मन'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'mr-IN',
			language_name: 'डच'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'mr-IN',
			language_name: 'स्वीडिश'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'mr-IN',
			language_name: 'फ्लेमिश'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'mr-IN',
			language_name: 'पापियामेन्टो'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'mr-IN',
			language_name: 'रशियन'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'mr-IN',
			language_name: 'स्विस हाय जर्मन'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'mr-IN',
			language_name: 'root'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'mr-IN',
			language_name: 'ग्रीक'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'mr-IN',
			language_name: 'कारा-कल्पक'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'mr-IN',
			language_name: 'मॅसेडोनियन'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'mr-IN',
			language_name: 'मॅसेडोनियन'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'mr-IN',
			language_name: 'कारा-कल्पक'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'mr-IN',
			language_name: 'युक्रेनियन'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'mr-IN',
			language_name: 'बल्गेरियन'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'mr-IN',
			language_name: 'युक्रेनियन'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'mr-IN',
			language_name: 'कबार्डियन'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'mr-IN',
			language_name: 'उझ्बेक'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'mr-IN',
			language_name: 'नेपाळी'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'mr-IN',
			language_name: 'भोजपुरी'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'mr-IN',
			language_name: 'तिग्रिन्या'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'mr-IN',
			language_name: 'वोलोफ'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'mr-IN',
			language_name: 'कँटोनीज'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'mr-IN',
			language_name: 'कँटोनीज'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'mr-IN',
			language_name: 'यिद्दिश'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'mr-IN',
			language_name: 'यिद्दिश'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'mr-IN',
			language_name: 'यिद्दिश'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'mr-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'mr-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'mr-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'mr-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'mr-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'mr-IN',
			language_name: 'हमोंग नजुआ'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'mr-IN',
			language_name: 'स्वाहिली'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'mr-IN',
			language_name: 'कोरियन'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'mr-IN',
			language_name: 'रशियन'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'mr-IN',
			language_name: 'तुर्कमेन'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'mr-IN',
			language_name: 'झुआंग'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'mr-IN',
			language_name: 'तुर्की'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'mr-IN',
			language_name: 'तुर्कमेन'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'mr-IN',
			language_name: 'अल्बानियन'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'mr-IN',
			language_name: 'पोलिश'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'mr-IN',
			language_name: 'जर्मन'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणी सोथो'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'mr-IN',
			language_name: 'मोल्डाव्हियन'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'mr-IN',
			language_name: 'मेक्सिकन स्पॅनिश'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'mr-IN',
			language_name: 'अफ्रिकान्स'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'mr-IN',
			language_name: 'हौसा'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'mr-IN',
			language_name: 'युरोपियन पोर्तुगीज'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन बोकमाल'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'mr-IN',
			language_name: 'इटालियन'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'mr-IN',
			language_name: 'डच'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'mr-IN',
			language_name: 'प्रमाण मोरोक्कन तॅमॅझायट'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'mr-IN',
			language_name: 'स्वाहिली'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'mr-IN',
			language_name: 'इटालियन'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'mr-IN',
			language_name: 'वाई'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'mr-IN',
			language_name: 'व्हिएतनामी'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'mr-IN',
			language_name: 'अरबी'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'mr-IN',
			language_name: 'उझ्बेक'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'mr-IN',
			language_name: 'उझ्बेक'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'mr-IN',
			language_name: 'व्हेंदा'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'mr-IN',
			language_name: 'व्हेनेशियन'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'mr-IN',
			language_name: 'वेप्स'
		},
		{
			locale_code: 'vls-BE',
			locale_id: 'mr-IN',
			language_name: 'वेस्ट फ्लेमिश'
		},
		{
			locale_code: 'vmf-DE',
			locale_id: 'mr-IN',
			language_name: 'मुख्य-फ्राँकोनियन'
		},
		{
			locale_code: 'vmw-MZ',
			locale_id: 'mr-IN',
			language_name: 'मखुवा'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'mr-IN',
			language_name: 'वॉटिक'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'mr-IN',
			language_name: 'वोरो'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'mr-IN',
			language_name: 'वुंजो'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'mr-IN',
			language_name: 'वालून'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'mr-IN',
			language_name: 'वालसेर'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'mr-IN',
			language_name: 'वोलायता'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'mr-IN',
			language_name: 'वारे'
		},
		{
			locale_code: 'was-US',
			locale_id: 'mr-IN',
			language_name: 'वाशो'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'mr-IN',
			language_name: 'वार्लपिरी'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'mr-IN',
			language_name: 'व्हू चिनी'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'mr-IN',
			language_name: 'काल्मिक'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'mr-IN',
			language_name: 'खोसा'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'mr-IN',
			language_name: 'मिंगरेलियन'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'mr-IN',
			language_name: 'कांगरी'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'mr-IN',
			language_name: 'सोगा'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'mr-IN',
			language_name: 'याओ'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'mr-IN',
			language_name: 'यापीस'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'mr-IN',
			language_name: 'यांगबेन'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'mr-IN',
			language_name: 'येमबा'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'mr-IN',
			language_name: 'योरुबा'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'mr-IN',
			language_name: 'न्हेंगाटू'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'mr-IN',
			language_name: 'कँटोनीज'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'mr-IN',
			language_name: 'झेपोटेक'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'mr-IN',
			language_name: 'झीलँडिक'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'mr-IN',
			language_name: 'झेनान्गा'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'mr-IN',
			language_name: 'चीनी'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'mr-IN',
			language_name: 'झुलू'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'mr-IN',
			language_name: 'झुनी'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'mr-IN',
			language_name: 'झाझा'
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
