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
			language_name: 'अफार (इथिओपिया)'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'mr-IN',
			language_name: 'अबखेजियन (जॉर्जिया)'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'mr-IN',
			language_name: 'अचीनी (इंडोनेशिया)'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'mr-IN',
			language_name: 'अकोली (युगांडा)'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'mr-IN',
			language_name: 'अडांग्मे (घाना)'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'mr-IN',
			language_name: 'अडिघे (रशिया)'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'mr-IN',
			language_name: 'अवेस्तन (इराण)'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'mr-IN',
			language_name: 'ट्युनिशियन अरबी'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'mr-IN',
			language_name: 'अफ्रिकान्स (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'mr-IN',
			language_name: 'अफ्रिहिली (घाना)'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'mr-IN',
			language_name: 'अघेम (कॅमेरून)'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'mr-IN',
			language_name: 'ऐनू (जपान)'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'mr-IN',
			language_name: 'अकान (घाना)'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'mr-IN',
			language_name: 'अक्केडियन (इराक)'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'mr-IN',
			language_name: 'अलाबामा'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'mr-IN',
			language_name: 'अलेउत (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य अल्ताई (रशिया)'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'mr-IN',
			language_name: 'अम्हारिक (इथिओपिया)'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'mr-IN',
			language_name: 'अर्गोनीज (स्पेन)'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'mr-IN',
			language_name: 'पुरातन इंग्रजी (युनायटेड किंगडम)'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'mr-IN',
			language_name: 'ओबोलो (नायजेरिया)'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'mr-IN',
			language_name: 'अंगिका (भारत)'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'mr-IN',
			language_name: 'अरबी (इजिप्त)'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅरेमाइक (इराण)'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅरेमाइक (इराक)'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅरेमाइक (जॉर्डन)'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅरेमाइक (सीरिया)'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'mr-IN',
			language_name: 'मापुची (चिली)'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'mr-IN',
			language_name: 'आरोना'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'mr-IN',
			language_name: 'आरापाहो (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'mr-IN',
			language_name: 'अल्जेरियन अरबी'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'mr-IN',
			language_name: 'नजदी अरबी (सौदी अरब)'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'mr-IN',
			language_name: 'आरावाक (सुरिनाम)'
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
			language_name: 'आसामी (भारत)'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'mr-IN',
			language_name: 'असु (टांझानिया)'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'mr-IN',
			language_name: 'अमेरिकन सांकेतिक भाषा'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'mr-IN',
			language_name: 'अस्तुरियन (स्पेन)'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'mr-IN',
			language_name: 'अटिकमेक (कॅनडा)'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'mr-IN',
			language_name: 'अ‍ॅव्हेरिक (रशिया)'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'mr-IN',
			language_name: 'अवधी (भारत)'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'mr-IN',
			language_name: 'ऐमरा (बोलिव्हिया)'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'mr-IN',
			language_name: 'अझरबैजानी (अझरबैजान)'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'mr-IN',
			language_name: 'अझरबैजानी (इराण)'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'mr-IN',
			language_name: 'अझरबैजानी (इराक)'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'mr-IN',
			language_name: 'अझरबैजानी (रशिया)'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'mr-IN',
			language_name: 'बष्किर (रशिया)'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'mr-IN',
			language_name: 'बलुची (पाकिस्तान)'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'mr-IN',
			language_name: 'बालिनीज (इंडोनेशिया)'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'mr-IN',
			language_name: 'बव्हेरियन'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'mr-IN',
			language_name: 'बसा (कॅमेरून)'
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
			language_name: 'बेलारुशियन (बेलारूस)'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'mr-IN',
			language_name: 'बेजा (सुदान)'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'mr-IN',
			language_name: 'बेम्बा (झाम्बिया)'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'mr-IN',
			language_name: 'बेतावी'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'mr-IN',
			language_name: 'बेना (टांझानिया)'
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
			language_name: 'बल्गेरियन (बल्गेरिया)'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'mr-IN',
			language_name: 'हरियाणवी (भारत)'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'mr-IN',
			language_name: 'पश्चिमी बालोची (पाकिस्तान)'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'mr-IN',
			language_name: 'भोजपुरी (भारत)'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'mr-IN',
			language_name: 'बिस्लामा (वानुआतु)'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'mr-IN',
			language_name: 'बिकोल (फिलिपिन्स)'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'mr-IN',
			language_name: 'बिनी (नायजेरिया)'
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
			language_name: 'सिक्सिका (कॅनडा)'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'mr-IN',
			language_name: 'ॲनीआय (बेनिन)'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'mr-IN',
			language_name: 'ताई धरणे'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'mr-IN',
			language_name: 'बाम्बारा (माली)'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'mr-IN',
			language_name: 'बंगाली (बांगलादेश)'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'mr-IN',
			language_name: 'तिबेटी (चीन)'
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
			language_name: 'ब्रेतॉन (फ्रान्स)'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'mr-IN',
			language_name: 'ब्रज (भारत)'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'mr-IN',
			language_name: 'ब्राहुई'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'mr-IN',
			language_name: 'बोडो (भारत)'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'mr-IN',
			language_name: 'बोस्नियन (बोस्निया अणि हर्जेगोविना)'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'mr-IN',
			language_name: 'एकूस'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'mr-IN',
			language_name: 'बुरियात (रशिया)'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'mr-IN',
			language_name: 'बगिनीस (इंडोनेशिया)'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'mr-IN',
			language_name: 'बुलु'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'mr-IN',
			language_name: 'ब्लिन (एरिट्रिया)'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'mr-IN',
			language_name: 'मेदुंबा'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'mr-IN',
			language_name: 'कातालान (स्पेन)'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'mr-IN',
			language_name: 'कॅड्डो (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'mr-IN',
			language_name: 'कॅरिब (व्हेनेझुएला)'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'mr-IN',
			language_name: 'केयुगा (कॅनडा)'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'mr-IN',
			language_name: 'अत्सम (नायजेरिया)'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'mr-IN',
			language_name: 'चाकमा (बांगलादेश)'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'mr-IN',
			language_name: 'चेचेन (रशिया)'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'mr-IN',
			language_name: 'सिबुआनो (फिलिपिन्स)'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'mr-IN',
			language_name: 'किगा (युगांडा)'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'mr-IN',
			language_name: 'कॅमोरो (गुआम)'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'mr-IN',
			language_name: 'चिब्चा (कोलम्बिया)'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'mr-IN',
			language_name: 'छागाताइ (तुर्कमेनिस्तान)'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'mr-IN',
			language_name: 'चूकीसे (मायक्रोनेशिया)'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'mr-IN',
			language_name: 'मारी (रशिया)'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'mr-IN',
			language_name: 'चिनूक जारगॉन (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'mr-IN',
			language_name: 'चोक्तौ (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'mr-IN',
			language_name: 'शिपेव्यान (कॅनडा)'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'mr-IN',
			language_name: 'चेरोकी (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'mr-IN',
			language_name: 'शेयेन्न (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'mr-IN',
			language_name: 'चिकासॉ'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'mr-IN',
			language_name: 'मध्य कुर्दिश (इराक)'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'mr-IN',
			language_name: 'चिलकोटिन (कॅनडा)'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'mr-IN',
			language_name: 'कॉर्सिकन (फ्रान्स)'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'mr-IN',
			language_name: 'कॉप्टिक (इजिप्त)'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'mr-IN',
			language_name: 'कॅपिझनॉन'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'mr-IN',
			language_name: 'क्री (कॅनडा)'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'mr-IN',
			language_name: 'मिचिफो (कॅनडा)'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'mr-IN',
			language_name: 'क्राइमीन तुर्की (युक्रेन)'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य इस्ट क्री (कॅनडा)'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'mr-IN',
			language_name: 'प्लेन्स क्री (कॅनडा)'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'mr-IN',
			language_name: 'नॉर्दर्न ईस्ट क्री (कॅनडा)'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'mr-IN',
			language_name: 'मूस क्री (कॅनडा)'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'mr-IN',
			language_name: 'सेसेल्वा क्रिओल फ्रेंच (सेशेल्स)'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'mr-IN',
			language_name: 'झेक (झेकिया)'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'mr-IN',
			language_name: 'काशुबियन (पोलंड)'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'mr-IN',
			language_name: 'स्वॅम्पी क्री (कॅनडा)'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'mr-IN',
			language_name: 'चर्च स्लाव्हिक (रशिया)'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'mr-IN',
			language_name: 'चर्च स्लाव्हिक (बल्गेरिया)'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'mr-IN',
			language_name: 'चूवाश (रशिया)'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'mr-IN',
			language_name: 'वेल्श (युनायटेड किंगडम)'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'mr-IN',
			language_name: 'डॅनिश (डेन्मार्क)'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'mr-IN',
			language_name: 'डाकोटा (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'mr-IN',
			language_name: 'दार्गवा (रशिया)'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'mr-IN',
			language_name: 'तायता (केनिया)'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'mr-IN',
			language_name: 'जर्मन (जर्मनी)'
		},
		{
			locale_code: 'del-US',
			locale_id: 'mr-IN',
			language_name: 'डेलावेयर (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'mr-IN',
			language_name: 'स्लाव्ह (कॅनडा)'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'mr-IN',
			language_name: 'डोग्रिब (कॅनडा)'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'mr-IN',
			language_name: 'डिन्का (दक्षिण सुदान)'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'mr-IN',
			language_name: 'झार्मा (नाइजर)'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'mr-IN',
			language_name: 'डोगरी (भारत)'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'mr-IN',
			language_name: 'लोअर सोर्बियन (जर्मनी)'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'mr-IN',
			language_name: 'मध्य दुसुन'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'mr-IN',
			language_name: 'दुआला (कॅमेरून)'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'mr-IN',
			language_name: 'मिडल डच (नेदरलँड)'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'mr-IN',
			language_name: 'दिवेही (मालदीव)'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'mr-IN',
			language_name: 'जोला-फॉन्यी (सेनेगल)'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'mr-IN',
			language_name: 'ड्युला (बुर्किना फासो)'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'mr-IN',
			language_name: 'झोंगखा (भूतान)'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'mr-IN',
			language_name: 'दाझागा (चाड)'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'mr-IN',
			language_name: 'एम्बू (केनिया)'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'mr-IN',
			language_name: 'एवे (घाना)'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'mr-IN',
			language_name: 'एफिक (नायजेरिया)'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'mr-IN',
			language_name: 'एमिलियन'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'mr-IN',
			language_name: 'प्राचीन इजिप्शियन (इजिप्त)'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'mr-IN',
			language_name: 'एकाजुक (नायजेरिया)'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'mr-IN',
			language_name: 'ग्रीक (ग्रीस)'
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
			language_name: 'इंग्रजी (भारत)'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'mr-IN',
			language_name: 'मिडल इंग्रजी (युनायटेड किंगडम)'
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
			language_name: 'इस्टोनियन (एस्टोनिया)'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'mr-IN',
			language_name: 'बास्क (स्पेन)'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'mr-IN',
			language_name: 'इवोन्डो (कॅमेरून)'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'mr-IN',
			language_name: 'एक्स्ट्रेमदुरन'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'mr-IN',
			language_name: 'फारसी (इराण)'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'mr-IN',
			language_name: 'फँग (इक्वेटोरियल गिनी)'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'mr-IN',
			language_name: 'फुलाह (सेनेगल)'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'mr-IN',
			language_name: 'फुलाह (गिनी)'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'mr-IN',
			language_name: 'फिनिश (फिनलंड)'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'mr-IN',
			language_name: 'फिलिपिनो (फिलिपिन्स)'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'mr-IN',
			language_name: 'Tornedalen फिनिश'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'mr-IN',
			language_name: 'फिजियन (फिजी)'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'mr-IN',
			language_name: 'फरोइज (फेरो बेटे)'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'mr-IN',
			language_name: 'फॉन (बेनिन)'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (फ्रान्स)'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'mr-IN',
			language_name: 'केजॉन फ्रेंच (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'mr-IN',
			language_name: 'मिडल फ्रेंच (फ्रान्स)'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'mr-IN',
			language_name: 'पुरातन फ्रेंच (फ्रान्स)'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'mr-IN',
			language_name: 'अर्पितन'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'mr-IN',
			language_name: 'उत्तरी फ्रिशियन (जर्मनी)'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'mr-IN',
			language_name: 'पौर्वात्य फ्रिशियन (जर्मनी)'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'mr-IN',
			language_name: 'फ्रियुलियान (इटली)'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'mr-IN',
			language_name: 'पश्चिमी फ्रिशियन (नेदरलँड)'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'mr-IN',
			language_name: 'आयरिश (आयर्लंड)'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'mr-IN',
			language_name: 'गा (घाना)'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'mr-IN',
			language_name: 'गागाउझ (मोल्डोव्हा)'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'mr-IN',
			language_name: 'गॅन चिनी (चीन)'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'mr-IN',
			language_name: 'गायो (इंडोनेशिया)'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'mr-IN',
			language_name: 'बाया (केंद्रीय अफ्रिकी प्रजासत्ताक)'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'mr-IN',
			language_name: 'झोरोस्ट्रियन दारी'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'mr-IN',
			language_name: 'स्कॉटिश गेलिक (युनायटेड किंगडम)'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'mr-IN',
			language_name: 'गीझ (इथिओपिया)'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'mr-IN',
			language_name: 'जिल्बरटीज (किरीबाटी)'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'mr-IN',
			language_name: 'गॅलिशियन (स्पेन)'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'mr-IN',
			language_name: 'गिलाकी'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'mr-IN',
			language_name: 'मिडल हाय जर्मन (जर्मनी)'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'mr-IN',
			language_name: 'गुआरनी (पराग्वे)'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'mr-IN',
			language_name: 'पुरातन हाइ जर्मन (जर्मनी)'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'mr-IN',
			language_name: 'गाँडी (भारत)'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'mr-IN',
			language_name: 'गोरोन्तालो (इंडोनेशिया)'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'mr-IN',
			language_name: 'गॉथिक (युक्रेन)'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'mr-IN',
			language_name: 'ग्रेबो (लायबेरिया)'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'mr-IN',
			language_name: 'प्राचीन ग्रीक (ग्रीस)'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'mr-IN',
			language_name: 'स्विस जर्मन (स्वित्झर्लंड)'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'mr-IN',
			language_name: 'गुजराती (भारत)'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'mr-IN',
			language_name: 'Wayuu'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'mr-IN',
			language_name: 'फ्राफ्रा'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'mr-IN',
			language_name: 'गसी (केनिया)'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'mr-IN',
			language_name: 'मांक्स (आयल ऑफ मॅन)'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'mr-IN',
			language_name: 'ग्विच’इन (कॅनडा)'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'mr-IN',
			language_name: 'हौसा (नायजेरिया)'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'mr-IN',
			language_name: 'हौसा (कॅमेरून)'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'mr-IN',
			language_name: 'हौसा (सुदान)'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'mr-IN',
			language_name: 'हैडा (कॅनडा)'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'mr-IN',
			language_name: 'हाक्का चिनी (चीन)'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'mr-IN',
			language_name: 'हाक्का चिनी (तैवान)'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'mr-IN',
			language_name: 'हवाईयन (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य हैडा (कॅनडा)'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'mr-IN',
			language_name: 'हिब्रू (इस्त्राइल)'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'mr-IN',
			language_name: 'हिंदी (भारत)'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'mr-IN',
			language_name: 'फिजी हिंदी'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'mr-IN',
			language_name: 'हिलीगेनॉन (फिलिपिन्स)'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'mr-IN',
			language_name: 'हिट्टिते (तुर्किये)'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'mr-IN',
			language_name: 'माँग (चीन)'
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
			language_name: 'हिरी मॉटू (पापुआ न्यू गिनी)'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'mr-IN',
			language_name: 'क्रोएशियन (क्रोएशिया)'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'mr-IN',
			language_name: 'अप्पर सॉर्बियन (जर्मनी)'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'mr-IN',
			language_name: 'शियांग चिनी (चीन)'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'mr-IN',
			language_name: 'हैतीयन क्रेओल (हैती)'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'mr-IN',
			language_name: 'हंगेरियन (हंगेरी)'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'mr-IN',
			language_name: 'हूपा (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'mr-IN',
			language_name: 'हॉल्कमेलम (कॅनडा)'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'mr-IN',
			language_name: 'अर्मेनियन (अर्मेनिया)'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'mr-IN',
			language_name: 'हरेरो (नामिबिया)'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'mr-IN',
			language_name: 'इबान (मलेशिया)'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'mr-IN',
			language_name: 'इबिबिओ (नायजेरिया)'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'mr-IN',
			language_name: 'इंडोनेशियन (इंडोनेशिया)'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'mr-IN',
			language_name: 'इंटरलिंग (एस्टोनिया)'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'mr-IN',
			language_name: 'ईग्बो (नायजेरिया)'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'mr-IN',
			language_name: 'सिचुआन यी (चीन)'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'mr-IN',
			language_name: 'इनूपियाक (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'mr-IN',
			language_name: 'वेस्टर्न कॅनेडियन इनुकिटुट (कॅनडा)'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'mr-IN',
			language_name: 'इलोको (फिलिपिन्स)'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'mr-IN',
			language_name: 'इंगुश (रशिया)'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'mr-IN',
			language_name: 'आईसलँडिक (आइसलँड)'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'mr-IN',
			language_name: 'इटालियन (इटली)'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'mr-IN',
			language_name: 'इनुक्तीटुट (कॅनडा)'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'mr-IN',
			language_name: 'इंग्रिअन'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'mr-IN',
			language_name: 'जपानी (जपान)'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'mr-IN',
			language_name: 'जमैकन क्रेओल इंग्रजी'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'mr-IN',
			language_name: 'गोम्बा (कॅमेरून)'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'mr-IN',
			language_name: 'मशामे (टांझानिया)'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'mr-IN',
			language_name: 'जुदेओ-फारसी (इस्त्राइल)'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'mr-IN',
			language_name: 'जुदेओ-अरबी (इस्त्राइल)'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'mr-IN',
			language_name: 'जुतिश'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'mr-IN',
			language_name: 'जावानीज (इंडोनेशिया)'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'mr-IN',
			language_name: 'जॉर्जियन (जॉर्जिया)'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'mr-IN',
			language_name: 'कारा-कल्पक (उझबेकिस्तान)'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'mr-IN',
			language_name: 'कबाइल (अल्जीरिया)'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'mr-IN',
			language_name: 'काचिन (म्यानमार [बर्मा])'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'mr-IN',
			language_name: 'ज्जु (नायजेरिया)'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'mr-IN',
			language_name: 'काम्बा (केनिया)'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'mr-IN',
			language_name: 'कावी (इंडोनेशिया)'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'mr-IN',
			language_name: 'कबार्डियन (रशिया)'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'mr-IN',
			language_name: 'कनेम्बू'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'mr-IN',
			language_name: 'त्याप (नायजेरिया)'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'mr-IN',
			language_name: 'माकोन्दे (टांझानिया)'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'mr-IN',
			language_name: 'काबवर्दियानु (केप व्हर्डे)'
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
			language_name: 'कोरो (कोत द’ईवोआर)'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'mr-IN',
			language_name: 'काँगो (काँगो - किंशासा)'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'mr-IN',
			language_name: 'काइंगांग (ब्राझिल)'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'mr-IN',
			language_name: 'खासी (भारत)'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'mr-IN',
			language_name: 'खोतानीस (इराण)'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'mr-IN',
			language_name: 'कोयरा चीनी (माली)'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'mr-IN',
			language_name: 'खोवर'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'mr-IN',
			language_name: 'किकुयू (केनिया)'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'mr-IN',
			language_name: 'किरमांजकी'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'mr-IN',
			language_name: 'क्वान्यामा (नामिबिया)'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'mr-IN',
			language_name: 'कझाक (कझाकस्तान)'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'mr-IN',
			language_name: 'कझाक (अफगाणिस्तान)'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'mr-IN',
			language_name: 'कझाक (चीन)'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'mr-IN',
			language_name: 'कझाक (इराण)'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'mr-IN',
			language_name: 'कझाक (मंगोलिया)'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'mr-IN',
			language_name: 'काको (कॅमेरून)'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'mr-IN',
			language_name: 'कलाल्लिसत (ग्रीनलंड)'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'mr-IN',
			language_name: 'कालेंजीन (केनिया)'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'mr-IN',
			language_name: 'ख्मेर (कंबोडिया)'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'mr-IN',
			language_name: 'किम्बन्दु (अंगोला)'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'mr-IN',
			language_name: 'कन्नड (भारत)'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'mr-IN',
			language_name: 'कोरियन (दक्षिण कोरिया)'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'mr-IN',
			language_name: 'कोमी-परम्याक (रशिया)'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'mr-IN',
			language_name: 'कोंकणी (भारत)'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'mr-IN',
			language_name: 'कोसरियन (मायक्रोनेशिया)'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'mr-IN',
			language_name: 'क्पेल्ले (लायबेरिया)'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'mr-IN',
			language_name: 'कनुरी (नायजेरिया)'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'mr-IN',
			language_name: 'कराचय-बाल्कर (रशिया)'
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
			language_name: 'करेलियन (रशिया)'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'mr-IN',
			language_name: 'कुरूख (भारत)'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'mr-IN',
			language_name: 'काश्मिरी (भारत)'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'mr-IN',
			language_name: 'शांबाला (टांझानिया)'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'mr-IN',
			language_name: 'बाफिया (कॅमेरून)'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'mr-IN',
			language_name: 'कोलोग्नियन (जर्मनी)'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश (तुर्किये)'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश (अर्मेनिया)'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश (इराक)'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश (अझरबैजान)'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश (जॉर्जिया)'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश (इराण)'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश (लेबनॉन)'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश (तुर्कमेनिस्तान)'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'mr-IN',
			language_name: 'कुमीक (रशिया)'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'mr-IN',
			language_name: 'कुतेनाई (कॅनडा)'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'mr-IN',
			language_name: 'कोमी (रशिया)'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'mr-IN',
			language_name: 'कोर्निश (युनायटेड किंगडम)'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'mr-IN',
			language_name: 'क्वक्क्वाला (कॅनडा)'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'mr-IN',
			language_name: 'कुवी (भारत)'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'mr-IN',
			language_name: 'किरगीझ (किरगिझस्तान)'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'mr-IN',
			language_name: 'किरगीझ (चीन)'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'mr-IN',
			language_name: 'किरगीझ (तुर्किये)'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'mr-IN',
			language_name: 'लॅटिन (व्हॅटिकन सिटी)'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'mr-IN',
			language_name: 'लादीनो (इस्त्राइल)'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'mr-IN',
			language_name: 'लांगी (टांझानिया)'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'mr-IN',
			language_name: 'लाह्न्डा (पाकिस्तान)'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'mr-IN',
			language_name: 'लाम्बा (झाम्बिया)'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'mr-IN',
			language_name: 'लक्झेंबर्गिश (लक्झेंबर्ग)'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'mr-IN',
			language_name: 'लेझ्घीयन (रशिया)'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'mr-IN',
			language_name: 'गांडा (युगांडा)'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'mr-IN',
			language_name: 'लिंबूर्गिश (नेदरलँड)'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'mr-IN',
			language_name: 'लिगुरिअन (इटली)'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'mr-IN',
			language_name: 'लिलूएट (कॅनडा)'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'mr-IN',
			language_name: 'लिव्होनियन'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'mr-IN',
			language_name: 'लाकोटा (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'mr-IN',
			language_name: 'लोंबार्ड (इटली)'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'mr-IN',
			language_name: 'लिंगाला (काँगो - किंशासा)'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'mr-IN',
			language_name: 'लाओ (लाओस)'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'mr-IN',
			language_name: 'मोंगो (काँगो - किंशासा)'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'mr-IN',
			language_name: 'ल्युसियाना क्रिओल (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'mr-IN',
			language_name: 'लोझि (झाम्बिया)'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'mr-IN',
			language_name: 'उत्तरी ल्युरी (इराण)'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'mr-IN',
			language_name: 'सामिया (युगांडा)'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'mr-IN',
			language_name: 'लिथुआनियन (लिथुआनिया)'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'mr-IN',
			language_name: 'लॅटगालियन'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'mr-IN',
			language_name: 'ल्यूबा-कटांगा (काँगो - किंशासा)'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'mr-IN',
			language_name: 'लुबा-लुलुआ (काँगो - किंशासा)'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'mr-IN',
			language_name: 'लुइसेनो (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'mr-IN',
			language_name: 'लुन्डा (झाम्बिया)'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'mr-IN',
			language_name: 'ल्युओ (केनिया)'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'mr-IN',
			language_name: 'मिझो (भारत)'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'mr-IN',
			language_name: 'ल्युइया (केनिया)'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'mr-IN',
			language_name: 'लात्व्हियन (लाटव्हिया)'
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
			language_name: 'मादुरीस (इंडोनेशिया)'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'mr-IN',
			language_name: 'माफा'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'mr-IN',
			language_name: 'मगही (भारत)'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'mr-IN',
			language_name: 'मैथिली (भारत)'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'mr-IN',
			language_name: 'मकस्सर (इंडोनेशिया)'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'mr-IN',
			language_name: 'मन्डिन्गो (गाम्बिया)'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'mr-IN',
			language_name: 'मन्डिन्गो (गिनी)'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'mr-IN',
			language_name: 'मसाई (केनिया)'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'mr-IN',
			language_name: 'माबा'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'mr-IN',
			language_name: 'मोक्ष (रशिया)'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'mr-IN',
			language_name: 'मंडार (इंडोनेशिया)'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'mr-IN',
			language_name: 'मेन्डे (सिएरा लिओन)'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'mr-IN',
			language_name: 'मेरू (केनिया)'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'mr-IN',
			language_name: 'मोरिस्येन (मॉरिशस)'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'mr-IN',
			language_name: 'मलागसी (मादागास्कर)'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'mr-IN',
			language_name: 'मिडल आयरिश (आयर्लंड)'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'mr-IN',
			language_name: 'माखुव्हा-मीट्टो (मोझाम्बिक)'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'mr-IN',
			language_name: 'मीटा (कॅमेरून)'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'mr-IN',
			language_name: 'मार्शलीज (मार्शल बेटे)'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'mr-IN',
			language_name: 'माओरी (न्यूझीलंड)'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'mr-IN',
			language_name: 'मिकमॅक (कॅनडा)'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'mr-IN',
			language_name: 'मिनांग्काबाउ (इंडोनेशिया)'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'mr-IN',
			language_name: 'मॅसेडोनियन (उत्तर मॅसेडोनिया)'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'mr-IN',
			language_name: 'मल्याळम (भारत)'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'mr-IN',
			language_name: 'मंगोलियन (मंगोलिया)'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'mr-IN',
			language_name: 'मंगोलियन (चीन)'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'mr-IN',
			language_name: 'मान्चु (चीन)'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'mr-IN',
			language_name: 'मणिपुरी (भारत)'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'mr-IN',
			language_name: 'इन्नू-ॲमन (कॅनडा)'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'mr-IN',
			language_name: 'मोहॉक (कॅनडा)'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'mr-IN',
			language_name: 'मोस्सी (बुर्किना फासो)'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'mr-IN',
			language_name: 'मराठी (भारत)'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'mr-IN',
			language_name: 'वेस्टर्न मारी'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'mr-IN',
			language_name: 'मलय (मलेशिया)'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'mr-IN',
			language_name: 'मलय (कोकोस [कीलिंग] बेटे)'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'mr-IN',
			language_name: 'माल्टिज् (माल्टा)'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'mr-IN',
			language_name: 'मुंडांग (कॅमेरून)'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'mr-IN',
			language_name: 'क्रीक (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'mr-IN',
			language_name: 'मिरांडिज् (पोर्तुगाल)'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'mr-IN',
			language_name: 'मारवाडी (भारत)'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'mr-IN',
			language_name: 'मेंटावई'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'mr-IN',
			language_name: 'बर्मी (म्यानमार [बर्मा])'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'mr-IN',
			language_name: 'मायेने'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'mr-IN',
			language_name: 'एर्झ्या (रशिया)'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'mr-IN',
			language_name: 'माझानदेरानी (इराण)'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'mr-IN',
			language_name: 'नउरू (नाउरू)'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'mr-IN',
			language_name: 'मिन नान चिनी (चीन)'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'mr-IN',
			language_name: 'मिन नान चिनी (तैवान)'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'mr-IN',
			language_name: 'मिन नान चिनी (मकाओ एसएआर चीन)'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'mr-IN',
			language_name: 'नेपोलिटान (इटली)'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'mr-IN',
			language_name: 'नामा (नामिबिया)'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन बोकमाल (नॉर्वे)'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'mr-IN',
			language_name: 'उत्तर देबेली (झिम्बाब्वे)'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'mr-IN',
			language_name: 'लो जर्मन (जर्मनी)'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'mr-IN',
			language_name: 'नेपाळी (नेपाळ)'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'mr-IN',
			language_name: 'नेवारी (नेपाळ)'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'mr-IN',
			language_name: 'डोंगा (नामिबिया)'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'mr-IN',
			language_name: 'नियास (इंडोनेशिया)'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'mr-IN',
			language_name: 'नियुआन (नीयू)'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'mr-IN',
			language_name: 'आओ नागा'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'mr-IN',
			language_name: 'डच (नेदरलँड)'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'mr-IN',
			language_name: 'क्वासिओ (कॅमेरून)'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन न्योर्स्क (नॉर्वे)'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'mr-IN',
			language_name: 'जिएम्बून (कॅमेरून)'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन (नॉर्वे)'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'mr-IN',
			language_name: 'नोगाई (रशिया)'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'mr-IN',
			language_name: 'पुरातन नॉर्स (स्वीडन)'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'mr-IN',
			language_name: 'एन्को (गिनी)'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य देबेली (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'mr-IN',
			language_name: 'उत्तरी सोथो (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'mr-IN',
			language_name: 'नुएर (दक्षिण सुदान)'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'mr-IN',
			language_name: 'नावाजो (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'mr-IN',
			language_name: 'अभिजात नेवारी (नेपाळ)'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'mr-IN',
			language_name: 'न्यान्जा (मलावी)'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'mr-IN',
			language_name: 'न्यामवेझी (टांझानिया)'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'mr-IN',
			language_name: 'न्यानकोल (युगांडा)'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'mr-IN',
			language_name: 'न्योरो (युगांडा)'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'mr-IN',
			language_name: 'न्झिमा (घाना)'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'mr-IN',
			language_name: 'ऑक्सितान (फ्रान्स)'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'mr-IN',
			language_name: 'ओजिब्वा (कॅनडा)'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'mr-IN',
			language_name: 'नॉर्थवेस्टर्न ओजिब्वा (कॅनडा)'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'mr-IN',
			language_name: 'सेंट्रल ओजिब्वा (कॅनडा)'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'mr-IN',
			language_name: 'ओजी-क्री (कॅनडा)'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'mr-IN',
			language_name: 'वेस्टर्न ओजिबवा (कॅनडा)'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'mr-IN',
			language_name: 'ओकनागन (कॅनडा)'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'mr-IN',
			language_name: 'ओरोमो (इथिओपिया)'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'mr-IN',
			language_name: 'उडिया (भारत)'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'mr-IN',
			language_name: 'ओस्सेटिक (जॉर्जिया)'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'mr-IN',
			language_name: 'ओसेज (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'mr-IN',
			language_name: 'ओटोमान तुर्किश (तुर्किये)'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'mr-IN',
			language_name: 'पंजाबी (भारत)'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'mr-IN',
			language_name: 'पंजाबी (पाकिस्तान)'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'mr-IN',
			language_name: 'पंगासीनान (फिलिपिन्स)'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'mr-IN',
			language_name: 'पहलवी (इराण)'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'mr-IN',
			language_name: 'पहलवी (चीन)'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'mr-IN',
			language_name: 'पाम्पान्गा (फिलिपिन्स)'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'mr-IN',
			language_name: 'पापियामेन्टो (क्युरासाओ)'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'mr-IN',
			language_name: 'पालाउआन (पलाऊ)'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'mr-IN',
			language_name: 'पिकार्ड'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'mr-IN',
			language_name: 'नायजिरिअन पिजिन (नायजेरिया)'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'mr-IN',
			language_name: 'पेनसिल्व्हेनिया जर्मन'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'mr-IN',
			language_name: 'Plautdietsch'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'mr-IN',
			language_name: 'पुरातन फारसी (इराण)'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'mr-IN',
			language_name: 'पॅलाटिन जर्मन'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'mr-IN',
			language_name: 'फोनिशियन (लेबनॉन)'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'mr-IN',
			language_name: 'पाली (युनायटेड किंगडम)'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'mr-IN',
			language_name: 'पाली (भारत)'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'mr-IN',
			language_name: 'पाली (श्रीलंका)'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'mr-IN',
			language_name: 'पाली (म्यानमार [बर्मा])'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'mr-IN',
			language_name: 'पाली (थायलंड)'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'mr-IN',
			language_name: 'पिजिन (सोलोमन बेटे)'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'mr-IN',
			language_name: 'पोलिश (पोलंड)'
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
			language_name: 'पोह्नपियन (मायक्रोनेशिया)'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'mr-IN',
			language_name: 'मालीसेट-पासामाक्वाड्डी (कॅनडा)'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'mr-IN',
			language_name: 'प्रुशियन (पोलंड)'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'mr-IN',
			language_name: 'पुरातन प्रोव्हेन्सल (फ्रान्स)'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'mr-IN',
			language_name: 'पश्तो (अफगाणिस्तान)'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'mr-IN',
			language_name: 'ब्राझिलियन पोर्तुगीज'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'mr-IN',
			language_name: 'क्वेचुआ (पेरू)'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'mr-IN',
			language_name: 'कीशेइ (ग्वाटेमाला)'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'mr-IN',
			language_name: 'चिंबोराझो हाईलँड क्विचुआ'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'mr-IN',
			language_name: 'राजस्थानी (भारत)'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'mr-IN',
			language_name: 'रापानुई (चिली)'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'mr-IN',
			language_name: 'रारोटोंगन (कुक बेटे)'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'mr-IN',
			language_name: 'रोमाग्नॉल'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'mr-IN',
			language_name: 'रोहिंग्या (म्यानमार [बर्मा])'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'mr-IN',
			language_name: 'रिफियन'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'mr-IN',
			language_name: 'रोमान्श (स्वित्झर्लंड)'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'mr-IN',
			language_name: 'रुन्दी (बुरुंडी)'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'mr-IN',
			language_name: 'रोमानियन (रोमानिया)'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'mr-IN',
			language_name: 'रोम्बो (टांझानिया)'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'mr-IN',
			language_name: 'रोमानी (रोमानिया)'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'mr-IN',
			language_name: 'रोटुमन'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'mr-IN',
			language_name: 'रशियन (रशिया)'
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
			language_name: 'अरोमानियन (रोमानिया)'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'mr-IN',
			language_name: 'किन्यार्वान्डा (रवांडा)'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'mr-IN',
			language_name: 'रव्हा (टांझानिया)'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'mr-IN',
			language_name: 'संस्कृत (भारत)'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'mr-IN',
			language_name: 'सँडवे (टांझानिया)'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'mr-IN',
			language_name: 'साखा (रशिया)'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'mr-IN',
			language_name: 'सामरिटान अरॅमिक (पॅलेस्टिनियन प्रदेश)'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'mr-IN',
			language_name: 'सांबुरू (केनिया)'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'mr-IN',
			language_name: 'सासाक (इंडोनेशिया)'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'mr-IN',
			language_name: 'संताली (भारत)'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'mr-IN',
			language_name: 'सौराष्ट्र'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'mr-IN',
			language_name: 'गाम्बे (चाड)'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'mr-IN',
			language_name: 'सांगु (टांझानिया)'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'mr-IN',
			language_name: 'सर्दिनियन (इटली)'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'mr-IN',
			language_name: 'सिसिलियन (इटली)'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'mr-IN',
			language_name: 'स्कॉट्स (युनायटेड किंगडम)'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'mr-IN',
			language_name: 'सिंधी (पाकिस्तान)'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'mr-IN',
			language_name: 'सिंधी (भारत)'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'mr-IN',
			language_name: 'सासरेसे सार्डिनियन'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणी कुर्दिश (इराण)'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'mr-IN',
			language_name: 'उत्तरी सामी (नॉर्वे)'
		},
		{
			locale_code: 'see-US',
			locale_id: 'mr-IN',
			language_name: 'सेनेका'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'mr-IN',
			language_name: 'सेना (मोझाम्बिक)'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'mr-IN',
			language_name: 'सेरी'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'mr-IN',
			language_name: 'सेल्कप (रशिया)'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'mr-IN',
			language_name: 'कोयराबोरो सेन्नी (माली)'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'mr-IN',
			language_name: 'सांगो (केंद्रीय अफ्रिकी प्रजासत्ताक)'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'mr-IN',
			language_name: 'पुरातन आयरिश (आयर्लंड)'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'mr-IN',
			language_name: 'समोगिशियन'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'mr-IN',
			language_name: 'ताशेल्हिट (मोरोक्को)'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'mr-IN',
			language_name: 'शॅन (म्यानमार [बर्मा])'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'mr-IN',
			language_name: 'चाडियन अरबी'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'mr-IN',
			language_name: 'सिंहला (श्रीलंका)'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'mr-IN',
			language_name: 'सिदामो (इथिओपिया)'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'mr-IN',
			language_name: 'स्लोव्हाक (स्लोव्हाकिया)'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'mr-IN',
			language_name: 'स्लोव्हेनियन (स्लोव्हेनिया)'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य लुशूटसीड (युनायटेड स्टेट्स)'
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
			language_name: 'सामोअन (सामोआ)'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य सामी (स्वीडन)'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'mr-IN',
			language_name: 'ल्युल सामी (स्वीडन)'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'mr-IN',
			language_name: 'इनारी सामी (फिनलंड)'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'mr-IN',
			language_name: 'स्कोल्ट सामी (फिनलंड)'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'mr-IN',
			language_name: 'शोना (झिम्बाब्वे)'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'mr-IN',
			language_name: 'सोनिन्के (माली)'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'mr-IN',
			language_name: 'सोमाली (सोमालिया)'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'mr-IN',
			language_name: 'सोग्डिएन (उझबेकिस्तान)'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'mr-IN',
			language_name: 'अल्बानियन (अल्बानिया)'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन (सर्बिया)'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन (मोंटेनेग्रो)'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन (रोमानिया)'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन (तुर्किये)'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'mr-IN',
			language_name: 'स्रानान टॉन्गो (सुरिनाम)'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'mr-IN',
			language_name: 'सेरेर (सेनेगल)'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'mr-IN',
			language_name: 'स्वाती (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'mr-IN',
			language_name: 'साहो (एरिट्रिया)'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणी सोथो (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'mr-IN',
			language_name: 'Saterland Frisian'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'mr-IN',
			language_name: 'स्ट्राइट्स सालीश (कॅनडा)'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'mr-IN',
			language_name: 'सुंदानीज (इंडोनेशिया)'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'mr-IN',
			language_name: 'सुकुमा (टांझानिया)'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'mr-IN',
			language_name: 'सुसु (गिनी)'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'mr-IN',
			language_name: 'स्वीडिश (स्वीडन)'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'mr-IN',
			language_name: 'स्वाहिली (टांझानिया)'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'mr-IN',
			language_name: 'कोमोरियन (मायोट्टे)'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'mr-IN',
			language_name: 'अभिजात सिरियाक (तुर्किये)'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'mr-IN',
			language_name: 'सिरियाक (इराक)'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'mr-IN',
			language_name: 'सिलेशियन (पोलंड)'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'mr-IN',
			language_name: 'तामिळ (भारत)'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणात्य टचोन (कॅनडा)'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'mr-IN',
			language_name: 'तुळू'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'mr-IN',
			language_name: 'तेलगू (भारत)'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'mr-IN',
			language_name: 'टिम्ने (सिएरा लिओन)'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'mr-IN',
			language_name: 'तेसो (युगांडा)'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'mr-IN',
			language_name: 'तेरेनो (ब्राझिल)'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'mr-IN',
			language_name: 'तेतुम (तिमोर-लेस्ते)'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'mr-IN',
			language_name: 'ताजिक (ताजिकिस्तान)'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'mr-IN',
			language_name: 'ताजिक (पाकिस्तान)'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'mr-IN',
			language_name: 'टॅगिश (कॅनडा)'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'mr-IN',
			language_name: 'थाई (थायलंड)'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'mr-IN',
			language_name: 'तहल्टन (कॅनडा)'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'mr-IN',
			language_name: 'तिग्रिन्या (इथिओपिया)'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'mr-IN',
			language_name: 'टाइग्रे (एरिट्रिया)'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'mr-IN',
			language_name: 'तिव (नायजेरिया)'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'mr-IN',
			language_name: 'तुर्कमेन (तुर्कमेनिस्तान)'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'mr-IN',
			language_name: 'टोकेलाऊ (तोकेलाउ)'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'mr-IN',
			language_name: 'त्सखूर'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'mr-IN',
			language_name: 'फिलिपिनो (फिलिपिन्स)'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'mr-IN',
			language_name: 'लिंगित (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'mr-IN',
			language_name: 'तालिश'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'mr-IN',
			language_name: 'तामाशेक (नाइजर)'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'mr-IN',
			language_name: 'त्स्वाना (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'mr-IN',
			language_name: 'टोंगन (टोंगा)'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'mr-IN',
			language_name: 'न्यासा टोन्गा (मलावी)'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'mr-IN',
			language_name: 'टोक पिसिन (पापुआ न्यू गिनी)'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'mr-IN',
			language_name: 'तुर्की (तुर्किये)'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'mr-IN',
			language_name: 'तुरोयो'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'mr-IN',
			language_name: 'तारोको (तैवान)'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'mr-IN',
			language_name: 'तोरवली'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'mr-IN',
			language_name: 'सोंगा (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'mr-IN',
			language_name: 'त्सकोनियन'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'mr-IN',
			language_name: 'सिम्शियन (कॅनडा)'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'mr-IN',
			language_name: 'तातर (रशिया)'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'mr-IN',
			language_name: 'नॉर्दर्न टचोन (कॅनडा)'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'mr-IN',
			language_name: 'मुस्लिम टाट'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'mr-IN',
			language_name: 'तुम्बुका (मलावी)'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'mr-IN',
			language_name: 'टुवालु (टुवालु)'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'mr-IN',
			language_name: 'तासाव्हाक (नाइजर)'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'mr-IN',
			language_name: 'ताहितीयन (फ्रेंच पॉलिनेशिया)'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'mr-IN',
			language_name: 'टुवीनियन (रशिया)'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'mr-IN',
			language_name: 'मध्य अ‍ॅटलास तॅमाझाइट (मोरोक्को)'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'mr-IN',
			language_name: 'उदमुर्त (रशिया)'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'mr-IN',
			language_name: 'उइगुर (चीन)'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'mr-IN',
			language_name: 'उइगुर (कझाकस्तान)'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'mr-IN',
			language_name: 'उइगुर (मंगोलिया)'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'mr-IN',
			language_name: 'युगॅरिटिक (सीरिया)'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'mr-IN',
			language_name: 'युक्रेनियन (युक्रेन)'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'mr-IN',
			language_name: 'उम्बुन्डु (अंगोला)'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'mr-IN',
			language_name: 'कातालान (अँडोरा)'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'mr-IN',
			language_name: 'अरबी (संयुक्त अरब अमिराती)'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'mr-IN',
			language_name: 'दारी'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज (अंगोला)'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (अर्जेंटिना)'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'mr-IN',
			language_name: 'मलय (ब्रुनेई)'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'mr-IN',
			language_name: 'उर्दू (युनायटेड किंगडम)'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'mr-IN',
			language_name: 'मलय (इंडोनेशिया)'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'mr-IN',
			language_name: 'उर्दू (भारत)'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'mr-IN',
			language_name: 'उर्दू (मॉरिशस)'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'mr-IN',
			language_name: 'उर्दू (पाकिस्तान)'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'mr-IN',
			language_name: 'फारसी (ताजिकिस्तान)'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'mr-IN',
			language_name: 'सामोअन (अमेरिकन सामोआ)'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'mr-IN',
			language_name: 'ऑस्ट्रियन जर्मन'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'mr-IN',
			language_name: 'डच (अरुबा)'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'mr-IN',
			language_name: 'स्वीडिश (अ‍ॅलँड बेटे)'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'mr-IN',
			language_name: 'फ्लेमिश'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (बुर्किना फासो)'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'mr-IN',
			language_name: 'अरबी (बहारीन)'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (बेनिन)'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (सेंट बार्थेलेमी)'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (बोलिव्हिया)'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'mr-IN',
			language_name: 'चीनी (तैवान)'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'mr-IN',
			language_name: 'पापियामेन्टो (कॅरिबियन नेदरलँड्स)'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन (बोउवेट बेट)'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'mr-IN',
			language_name: 'रशियन (बेलारूस)'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (काँगो - किंशासा)'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (काँगो - ब्राझाविले)'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'mr-IN',
			language_name: 'स्विस हाय जर्मन'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (कोत द’ईवोआर)'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (चिली)'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (कॅमेरून)'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'mr-IN',
			language_name: 'चीनी (चीन)'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (कोलम्बिया)'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'mr-IN',
			language_name: 'root (सायप्रस)'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (कोस्टा रिका)'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (क्यूबा)'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज (केप व्हर्डे)'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'mr-IN',
			language_name: 'ग्रीक (सायप्रस)'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'mr-IN',
			language_name: 'कारा-कल्पक (अफगाणिस्तान)'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'mr-IN',
			language_name: 'मॅसेडोनियन (अल्बानिया)'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'mr-IN',
			language_name: 'सर्बियन (बोस्निया अणि हर्जेगोविना)'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'mr-IN',
			language_name: 'मॅसेडोनियन (ग्रीस)'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'mr-IN',
			language_name: 'कारा-कल्पक (इराण)'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'mr-IN',
			language_name: 'युक्रेनियन (मोल्डोव्हा)'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'mr-IN',
			language_name: 'बल्गेरियन (रोमानिया)'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'mr-IN',
			language_name: 'युक्रेनियन (स्लोव्हाकिया)'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'mr-IN',
			language_name: 'कबार्डियन (तुर्किये)'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'mr-IN',
			language_name: 'उझ्बेक (उझबेकिस्तान)'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'mr-IN',
			language_name: 'नेपाळी (भूतान)'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'mr-IN',
			language_name: 'भोजपुरी (मॉरिशस)'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (जिबौटी)'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (डोमिनिकन प्रजासत्ताक)'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'mr-IN',
			language_name: 'अरबी (अल्जीरिया)'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (इक्वाडोर)'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'mr-IN',
			language_name: 'अरबी (पश्चिम सहारा)'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'mr-IN',
			language_name: 'तिग्रिन्या (एरिट्रिया)'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (गॅबॉन)'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'mr-IN',
			language_name: 'वोलोफ (सेनेगल)'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (फ्रेंच गयाना)'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (गिनी)'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (ग्वाडेलोउपे)'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (इक्वेटोरियल गिनी)'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (ग्वाटेमाला)'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज (गिनी-बिसाउ)'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'mr-IN',
			language_name: 'कँटोनीज (कॅनडा)'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'mr-IN',
			language_name: 'कँटोनीज (चीन)'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'mr-IN',
			language_name: 'यिद्दिश (स्वीडन)'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'mr-IN',
			language_name: 'यिद्दिश (युक्रेन)'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'mr-IN',
			language_name: 'यिद्दिश (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'mr-IN',
			language_name: 'चीनी (हाँगकाँग एसएआर चीन)'
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
			language_name: 'स्पॅनिश (होंडुरास)'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'mr-IN',
			language_name: 'अरबी (इराक)'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'mr-IN',
			language_name: 'अरबी (जॉर्डन)'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'mr-IN',
			language_name: 'स्वाहिली (केनिया)'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'mr-IN',
			language_name: 'अरबी (कोमोरोज)'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'mr-IN',
			language_name: 'कोरियन (उत्तर कोरिया)'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'mr-IN',
			language_name: 'अरबी (कुवेत)'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'mr-IN',
			language_name: 'रशियन (कझाकस्तान)'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (संयुक्त अरब अमिराती)'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'mr-IN',
			language_name: 'तुर्कमेन (अफगाणिस्तान)'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (बांगलादेश)'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (बल्गेरिया)'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (भूतान)'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (कोकोस [कीलिंग] बेटे)'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'mr-IN',
			language_name: 'झुआंग (चीन)'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'mr-IN',
			language_name: 'तुर्की (सायप्रस)'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (अल्जीरिया)'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (इजिप्त)'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (एरिट्रिया)'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (इथिओपिया)'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (ग्रीस)'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (हाँगकाँग एसएआर चीन)'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (इस्त्राइल)'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (इराक)'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'mr-IN',
			language_name: 'तुर्कमेन (इराण)'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (जॉर्डन)'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (कोमोरोज)'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (कझाकस्तान)'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (लेबनॉन)'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (श्रीलंका)'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (मोरोक्को)'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'mr-IN',
			language_name: 'अल्बानियन (उत्तर मॅसेडोनिया)'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (मकाओ एसएआर चीन)'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (मॉरिटानिया)'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (मालदीव)'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (नेपाळ)'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (पाकिस्तान)'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (सुदान)'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (दक्षिण सुदान)'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'mr-IN',
			language_name: 'कुर्दिश (सीरिया)'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (चाड)'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (थायलंड)'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (ट्यूनिशिया)'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'mr-IN',
			language_name: 'पोलिश (युक्रेन)'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'mr-IN',
			language_name: 'इंग्रजी (येमेन)'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'mr-IN',
			language_name: 'अरबी (लेबनॉन)'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'mr-IN',
			language_name: 'जर्मन (लिक्टेनस्टाइन)'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'mr-IN',
			language_name: 'दक्षिणी सोथो (लेसोथो)'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (लक्झेंबर्ग)'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'mr-IN',
			language_name: 'अरबी (लिबिया)'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'mr-IN',
			language_name: 'अरबी (मोरोक्को)'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (मोनॅको)'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'mr-IN',
			language_name: 'मोल्डाव्हियन'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (सेंट मार्टिन)'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'mr-IN',
			language_name: 'चीनी (मकाओ एसएआर चीन)'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (मार्टिनिक)'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'mr-IN',
			language_name: 'अरबी (मॉरिटानिया)'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (मॉरिशस)'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'mr-IN',
			language_name: 'मेक्सिकन स्पॅनिश'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज (मोझाम्बिक)'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'mr-IN',
			language_name: 'अफ्रिकान्स (नामिबिया)'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (न्यू कॅलेडोनिया)'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'mr-IN',
			language_name: 'हौसा (नाइजर)'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (निकाराग्वा)'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'mr-IN',
			language_name: 'अरबी (ओमान)'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (पनामा)'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (पेरू)'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (फ्रेंच पॉलिनेशिया)'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (सेंट पियरे आणि मिक्वेलोन)'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (प्युएर्तो रिको)'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'mr-IN',
			language_name: 'अरबी (पॅलेस्टिनियन प्रदेश)'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'mr-IN',
			language_name: 'युरोपियन पोर्तुगीज'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'mr-IN',
			language_name: 'अरबी (कतार)'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (रियुनियन)'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'mr-IN',
			language_name: 'अरबी (सौदी अरब)'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (सेशेल्स)'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'mr-IN',
			language_name: 'अरबी (सुदान)'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'mr-IN',
			language_name: 'नॉर्वेजियन बोकमाल (स्वालबर्ड आणि जान मायेन)'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'mr-IN',
			language_name: 'इटालियन (सॅन मरीनो)'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'mr-IN',
			language_name: 'डच (सुरिनाम)'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'mr-IN',
			language_name: 'अरबी (दक्षिण सुदान)'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज (साओ टोम आणि प्रिंसिपे)'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (अल साल्वाडोर)'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'mr-IN',
			language_name: 'अरबी (सीरिया)'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'mr-IN',
			language_name: 'अरबी (चाड)'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (फ्रेंच दाक्षिणात्य प्रदेश)'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'mr-IN',
			language_name: 'प्रमाण मोरोक्कन तॅमॅझायट (मोरोक्को)'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (टोगो)'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'mr-IN',
			language_name: 'पोर्तुगीज (तिमोर-लेस्ते)'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'mr-IN',
			language_name: 'अरबी (ट्यूनिशिया)'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'mr-IN',
			language_name: 'स्वाहिली (युगांडा)'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (उरुग्वे)'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'mr-IN',
			language_name: 'इटालियन (व्हॅटिकन सिटी)'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'mr-IN',
			language_name: 'वाई (लायबेरिया)'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'mr-IN',
			language_name: 'स्पॅनिश (व्हेनेझुएला)'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'mr-IN',
			language_name: 'व्हिएतनामी (व्हिएतनाम)'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (वालिस आणि फ्यूचूना)'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'mr-IN',
			language_name: 'अरबी (येमेन)'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'mr-IN',
			language_name: 'फ्रेंच (मायोट्टे)'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'mr-IN',
			language_name: 'उझ्बेक (अफगाणिस्तान)'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'mr-IN',
			language_name: 'उझ्बेक (चीन)'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'mr-IN',
			language_name: 'व्हेंदा (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'mr-IN',
			language_name: 'व्हेनेशियन (इटली)'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'mr-IN',
			language_name: 'Veps'
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
			language_name: 'मखुवा (मोझाम्बिक)'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'mr-IN',
			language_name: 'वॉटिक (रशिया)'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'mr-IN',
			language_name: 'वोरो'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'mr-IN',
			language_name: 'वुंजो (टांझानिया)'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'mr-IN',
			language_name: 'वालून (बेल्जियम)'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'mr-IN',
			language_name: 'वालसेर (स्वित्झर्लंड)'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'mr-IN',
			language_name: 'वोलायता (इथिओपिया)'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'mr-IN',
			language_name: 'वारे (फिलिपिन्स)'
		},
		{
			locale_code: 'was-US',
			locale_id: 'mr-IN',
			language_name: 'वाशो (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'mr-IN',
			language_name: 'वार्लपिरी (ऑस्ट्रेलिया)'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'mr-IN',
			language_name: 'व्हू चिनी (चीन)'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'mr-IN',
			language_name: 'काल्मिक (रशिया)'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'mr-IN',
			language_name: 'खोसा (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'mr-IN',
			language_name: 'मिंगरेलियन'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'mr-IN',
			language_name: 'कांगरी (भारत)'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'mr-IN',
			language_name: 'सोगा (युगांडा)'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'mr-IN',
			language_name: 'याओ (मोझाम्बिक)'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'mr-IN',
			language_name: 'यापीस (मायक्रोनेशिया)'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'mr-IN',
			language_name: 'यांगबेन (कॅमेरून)'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'mr-IN',
			language_name: 'येमबा (कॅमेरून)'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'mr-IN',
			language_name: 'योरुबा (नायजेरिया)'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'mr-IN',
			language_name: 'न्हेंगाटू (ब्राझिल)'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'mr-IN',
			language_name: 'कँटोनीज (हाँगकाँग एसएआर चीन)'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'mr-IN',
			language_name: 'झेपोटेक (मेक्सिको)'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'mr-IN',
			language_name: 'झीलँडिक'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'mr-IN',
			language_name: 'झेनान्गा (मॉरिटानिया)'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'mr-IN',
			language_name: 'चीनी (ऑस्ट्रेलिया)'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'mr-IN',
			language_name: 'चीनी (ब्रुनेई)'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'mr-IN',
			language_name: 'चीनी (युनायटेड किंगडम)'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'mr-IN',
			language_name: 'चीनी (फ्रेंच गयाना)'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'mr-IN',
			language_name: 'चीनी (इंडोनेशिया)'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'mr-IN',
			language_name: 'चीनी (पनामा)'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'mr-IN',
			language_name: 'चीनी (फ्रेंच पॉलिनेशिया)'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'mr-IN',
			language_name: 'चीनी (फिलिपिन्स)'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'mr-IN',
			language_name: 'चीनी (सुरिनाम)'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'mr-IN',
			language_name: 'चीनी (थायलंड)'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'mr-IN',
			language_name: 'चीनी (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'mr-IN',
			language_name: 'चीनी (व्हिएतनाम)'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'mr-IN',
			language_name: 'झुलू (दक्षिण आफ्रिका)'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'mr-IN',
			language_name: 'झुनी (युनायटेड स्टेट्स)'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'mr-IN',
			language_name: 'झाझा (तुर्किये)'
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
