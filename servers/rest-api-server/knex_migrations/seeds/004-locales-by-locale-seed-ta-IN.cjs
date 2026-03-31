/* eslint-disable security/detect-object-injection */
/**
 * Static seed for locale_by_locale with ta-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * locale names (language + country) for the ta-IN locale.
 *
 * This seed depends on:
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 004-locales-by-locale-seed-ta-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM locale_by_locale WHERE locale_id = 'ta-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for ta-IN locale
	const rows = [
		{
			locale_code: 'aa-ET',
			locale_id: 'ta-IN',
			language_name: 'அஃபார் (எத்தியோப்பியா)'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'ta-IN',
			language_name: 'அப்காஜியான் (ஜார்ஜியா)'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'ta-IN',
			language_name: 'ஆச்சினீஸ் (இந்தோனேசியா)'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'ta-IN',
			language_name: 'அகோலி (உகாண்டா)'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'ta-IN',
			language_name: 'அதாங்மே (கானா)'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'ta-IN',
			language_name: 'அதகே (ரஷ்யா)'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'ta-IN',
			language_name: 'அவெஸ்தான் (ஈரான்)'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'ta-IN',
			language_name: 'துனிசிய அரபு (டுனிசியா)'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'ta-IN',
			language_name: 'ஆஃப்ரிகான்ஸ் (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'ta-IN',
			language_name: 'அஃப்ரிஹிலி (கானா)'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'ta-IN',
			language_name: 'அகெம் (கேமரூன்)'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'ta-IN',
			language_name: 'ஐனு (ஜப்பான்)'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'ta-IN',
			language_name: 'அகான் (கானா)'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'ta-IN',
			language_name: 'அக்கேதியன் (ஈராக்)'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'ta-IN',
			language_name: 'அலபாமா'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'ta-IN',
			language_name: 'அலூட் (அமெரிக்கா)'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'ta-IN',
			language_name: 'தெற்கு அல்தை (ரஷ்யா)'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'ta-IN',
			language_name: 'அம்ஹாரிக் (எத்தியோப்பியா)'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'ta-IN',
			language_name: 'ஆர்கோனீஸ் (ஸ்பெயின்)'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'ta-IN',
			language_name: 'பழைய ஆங்கிலம் (யுனைடெட் கிங்டம்)'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'ta-IN',
			language_name: 'ஒபோலோ (நைஜீரியா)'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'ta-IN',
			language_name: 'அங்கிகா (இந்தியா)'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (எகிப்து)'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'ta-IN',
			language_name: 'அராமைக் (ஈரான்)'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'ta-IN',
			language_name: 'அராமைக் (ஈராக்)'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'ta-IN',
			language_name: 'அராமைக் (ஜோர்டான்)'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'ta-IN',
			language_name: 'அராமைக் (சிரியா)'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'ta-IN',
			language_name: 'மபுச்சே (சிலி)'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'ta-IN',
			language_name: 'அரோனா'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'ta-IN',
			language_name: 'அரபஹோ (அமெரிக்கா)'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'ta-IN',
			language_name: 'அல்ஜீரிய அரபு'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'ta-IN',
			language_name: 'நஜ்தி அரபிக் (சவுதி அரேபியா)'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'ta-IN',
			language_name: 'அராவாக் (சுரினாம்)'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'ta-IN',
			language_name: 'மொராக்கோ அரபு'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'ta-IN',
			language_name: 'எகிப்திய அரபு'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'ta-IN',
			language_name: 'அஸ்ஸாமீஸ் (இந்தியா)'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'ta-IN',
			language_name: 'அசு (தான்சானியா)'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'ta-IN',
			language_name: 'அமெரிக்க சைகை மொழி'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'ta-IN',
			language_name: 'அஸ்துரியன் (ஸ்பெயின்)'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'ta-IN',
			language_name: 'அடிகாமேக்வ் (கனடா)'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'ta-IN',
			language_name: 'அவேரிக் (ரஷ்யா)'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'ta-IN',
			language_name: 'அவதி (இந்தியா)'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'ta-IN',
			language_name: 'அய்மரா (பொலிவியா)'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'ta-IN',
			language_name: 'அசர்பைஜானி (அசர்பைஜான்)'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'ta-IN',
			language_name: 'அசர்பைஜானி (ஈரான்)'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'ta-IN',
			language_name: 'அசர்பைஜானி (ஈராக்)'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'ta-IN',
			language_name: 'அசர்பைஜானி (ரஷ்யா)'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'ta-IN',
			language_name: 'பஷ்கிர் (ரஷ்யா)'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'ta-IN',
			language_name: 'பலூச்சி (பாகிஸ்தான்)'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'ta-IN',
			language_name: 'பலினீஸ் (இந்தோனேசியா)'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'ta-IN',
			language_name: 'பவேரியன்'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'ta-IN',
			language_name: 'பாஸா (கேமரூன்)'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'ta-IN',
			language_name: 'பாமுன்'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'ta-IN',
			language_name: 'படக் டோபா'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'ta-IN',
			language_name: 'கோமாலா'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'ta-IN',
			language_name: 'பெலாருஷியன் (பெலாரஸ்)'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'ta-IN',
			language_name: 'பேஜா (சூடான்)'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'ta-IN',
			language_name: 'பெம்பா (ஜாம்பியா)'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'ta-IN',
			language_name: 'பெட்டாவி'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'ta-IN',
			language_name: 'பெனா (தான்சானியா)'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'ta-IN',
			language_name: 'பாஃபுட்'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'ta-IN',
			language_name: 'படகா (இந்தியா)'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'ta-IN',
			language_name: 'பல்கேரியன் (பல்கேரியா)'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'ta-IN',
			language_name: 'ஹரியான்வி (இந்தியா)'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'ta-IN',
			language_name: 'மேற்கு பலோச்சி (பாகிஸ்தான்)'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'ta-IN',
			language_name: 'போஜ்பூரி (இந்தியா)'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'ta-IN',
			language_name: 'பிஸ்லாமா (வனுவாட்டு)'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'ta-IN',
			language_name: 'பிகோல் (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'ta-IN',
			language_name: 'பினி (நைஜீரியா)'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'ta-IN',
			language_name: 'பஞ்சார்'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'ta-IN',
			language_name: 'கோம்'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'ta-IN',
			language_name: 'சிக்சிகா (கனடா)'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'ta-IN',
			language_name: 'அனீ (பெனின்)'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'ta-IN',
			language_name: 'தை அணை'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'ta-IN',
			language_name: 'பம்பாரா (மாலி)'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'ta-IN',
			language_name: 'வங்காளம் (பங்களாதேஷ்)'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'ta-IN',
			language_name: 'திபெத்தியன் (சீனா)'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'ta-IN',
			language_name: 'பிஷ்ணுப்பிரியா (இந்தியா)'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'ta-IN',
			language_name: 'பக்தியாரி'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'ta-IN',
			language_name: 'பிரெட்டன் (பிரான்ஸ்)'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'ta-IN',
			language_name: 'ப்ராஜ் (இந்தியா)'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'ta-IN',
			language_name: 'பிராகுய்'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'ta-IN',
			language_name: 'போடோ (இந்தியா)'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'ta-IN',
			language_name: 'போஸ்னியன் (போஸ்னியா & ஹெர்ஸகோவினா)'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'ta-IN',
			language_name: 'அகூஸ்'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'ta-IN',
			language_name: 'புரியாத் (ரஷ்யா)'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'ta-IN',
			language_name: 'புகினீஸ் (இந்தோனேசியா)'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'ta-IN',
			language_name: 'புலு'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'ta-IN',
			language_name: 'ப்லின் (எரிட்ரியா)'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'ta-IN',
			language_name: 'மெடும்பா'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'ta-IN',
			language_name: 'கேட்டலான் (ஸ்பெயின்)'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'ta-IN',
			language_name: 'கேடோ (அமெரிக்கா)'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'ta-IN',
			language_name: 'கரீப் (வெனிசுலா)'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'ta-IN',
			language_name: 'கேயுகா (கனடா)'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'ta-IN',
			language_name: 'ஆட்சம் (நைஜீரியா)'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'ta-IN',
			language_name: 'சக்மா (பங்களாதேஷ்)'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'ta-IN',
			language_name: 'செச்சென் (ரஷ்யா)'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'ta-IN',
			language_name: 'செபுவானோ (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'ta-IN',
			language_name: 'சிகா (உகாண்டா)'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'ta-IN',
			language_name: 'சாமோரோ (குவாம்)'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'ta-IN',
			language_name: 'சிப்சா (கொலம்பியா)'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'ta-IN',
			language_name: 'ஷகதை (துர்க்மெனிஸ்தான்)'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'ta-IN',
			language_name: 'சூகிசே (மைக்ரோனேஷியா)'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'ta-IN',
			language_name: 'மாரி (ரஷ்யா)'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'ta-IN',
			language_name: 'சினூக் ஜார்கான் (அமெரிக்கா)'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'ta-IN',
			language_name: 'சோக்தௌ (அமெரிக்கா)'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'ta-IN',
			language_name: 'சிபெவ்யான் (கனடா)'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'ta-IN',
			language_name: 'செரோகீ (அமெரிக்கா)'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'ta-IN',
			language_name: 'செயேனி (அமெரிக்கா)'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'ta-IN',
			language_name: 'சிக்காசா'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'ta-IN',
			language_name: 'மத்திய குர்திஷ் (ஈராக்)'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'ta-IN',
			language_name: 'சில்கோடின் (கனடா)'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'ta-IN',
			language_name: 'கார்சிகன் (பிரான்ஸ்)'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'ta-IN',
			language_name: 'காப்டிக் (எகிப்து)'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'ta-IN',
			language_name: 'கேபிஸ்னான்'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'ta-IN',
			language_name: 'க்ரீ (கனடா)'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'ta-IN',
			language_name: 'மிச்சிஃப் (கனடா)'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'ta-IN',
			language_name: 'கிரிமியன் துர்க்கி (உக்ரைன்)'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'ta-IN',
			language_name: 'தென்கிழக்கு க்ரீ (கனடா)'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'ta-IN',
			language_name: 'சமவெளி க்ரீ (கனடா)'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'ta-IN',
			language_name: 'வடகிழக்கு க்ரீ (கனடா)'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'ta-IN',
			language_name: 'மூஸ் க்ரீ (கனடா)'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'ta-IN',
			language_name: 'செசெல்வா க்ரெயோல் பிரெஞ்சு (சீஷெல்ஸ்)'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'ta-IN',
			language_name: 'செக் (செசியா)'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'ta-IN',
			language_name: 'கஷுபியன் (போலந்து)'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'ta-IN',
			language_name: 'சதுப்பு நில க்ரீ (கனடா)'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'ta-IN',
			language_name: 'சர்ச் ஸ்லாவிக் (ரஷ்யா)'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'ta-IN',
			language_name: 'சர்ச் ஸ்லாவிக் (பல்கேரியா)'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'ta-IN',
			language_name: 'சுவாஷ் (ரஷ்யா)'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'ta-IN',
			language_name: 'வேல்ஷ் (யுனைடெட் கிங்டம்)'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'ta-IN',
			language_name: 'டேனிஷ் (டென்மார்க்)'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'ta-IN',
			language_name: 'டகோடா (அமெரிக்கா)'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'ta-IN',
			language_name: 'தார்குவா (ரஷ்யா)'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'ta-IN',
			language_name: 'டைடா (கென்யா)'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'ta-IN',
			language_name: 'ஜெர்மன் (ஜெர்மனி)'
		},
		{
			locale_code: 'del-US',
			locale_id: 'ta-IN',
			language_name: 'டெலாவர் (அமெரிக்கா)'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'ta-IN',
			language_name: 'ஸ்லாவ் (கனடா)'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'ta-IN',
			language_name: 'டோக்ரிப் (கனடா)'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'ta-IN',
			language_name: 'டின்கா (தெற்கு சூடான்)'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'ta-IN',
			language_name: 'ஸார்மா (நைஜர்)'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'ta-IN',
			language_name: 'டோக்ரி (இந்தியா)'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'ta-IN',
			language_name: 'லோயர் சோர்பியன் (ஜெர்மனி)'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'ta-IN',
			language_name: 'மத்திய டுசன்'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'ta-IN',
			language_name: 'டுவாலா (கேமரூன்)'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'ta-IN',
			language_name: 'மிடில் டச்சு (நெதர்லாந்து)'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'ta-IN',
			language_name: 'திவேஹி (மாலத்தீவு)'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'ta-IN',
			language_name: 'ஜோலா-ஃபோன்யி (செனெகல்)'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'ta-IN',
			language_name: 'ட்யூலா (புர்கினா ஃபாஸோ)'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'ta-IN',
			language_name: 'பூடானி (பூடான்)'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'ta-IN',
			language_name: 'டசாகா (சாட்)'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'ta-IN',
			language_name: 'எம்பு (கென்யா)'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'ta-IN',
			language_name: 'ஈவ் (கானா)'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'ta-IN',
			language_name: 'எஃபிக் (நைஜீரியா)'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'ta-IN',
			language_name: 'எமிலியன்'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'ta-IN',
			language_name: 'பண்டைய எகிப்தியன் (எகிப்து)'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'ta-IN',
			language_name: 'ஈகாஜுக் (நைஜீரியா)'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'ta-IN',
			language_name: 'கிரேக்கம் (கிரீஸ்)'
		},
		{
			locale_code: 'en-US',
			locale_id: 'ta-IN',
			language_name: 'அமெரிக்க ஆங்கிலம்'
		},
		{
			locale_code: 'en-GB',
			locale_id: 'ta-IN',
			language_name: 'பிரிட்டிஷ் ஆங்கிலம்'
		},
		{
			locale_code: 'en-IN',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (இந்தியா)'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'ta-IN',
			language_name: 'மிடில் ஆங்கிலம் (யுனைடெட் கிங்டம்)'
		},
		{
			locale_code: 'es-ES',
			locale_id: 'ta-IN',
			language_name: 'ஐரோப்பிய ஸ்பானிஷ்'
		},
		{
			locale_code: 'esu-US',
			locale_id: 'ta-IN',
			language_name: 'மத்திய யூபிக்'
		},
		{
			locale_code: 'et-EE',
			locale_id: 'ta-IN',
			language_name: 'எஸ்டோனியன் (எஸ்டோனியா)'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'ta-IN',
			language_name: 'பாஸ்க் (ஸ்பெயின்)'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'ta-IN',
			language_name: 'எவோன்டோ (கேமரூன்)'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'ta-IN',
			language_name: 'எக்ஸ்ட்ரீமதுரன்'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'ta-IN',
			language_name: 'பெர்ஷியன் (ஈரான்)'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'ta-IN',
			language_name: 'ஃபேங்க் (ஈக்வடோரியல் கினியா)'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'ta-IN',
			language_name: 'ஃபுலா (செனெகல்)'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'ta-IN',
			language_name: 'ஃபுலா (கினியா)'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'ta-IN',
			language_name: 'ஃபின்னிஷ் (பின்லாந்து)'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'ta-IN',
			language_name: 'ஃபிலிபினோ (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'ta-IN',
			language_name: 'டார்னெடலன் ஃபின்னிஷ்'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'ta-IN',
			language_name: 'ஃபிஜியன் (ஃபிஜி)'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'ta-IN',
			language_name: 'ஃபரோயிஸ் (ஃபாரோ தீவுகள்)'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'ta-IN',
			language_name: 'ஃபான் (பெனின்)'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (பிரான்ஸ்)'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'ta-IN',
			language_name: 'கஜுன் பிரெஞ்சு (அமெரிக்கா)'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'ta-IN',
			language_name: 'மிடில் பிரெஞ்சு (பிரான்ஸ்)'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'ta-IN',
			language_name: 'பழைய பிரெஞ்சு (பிரான்ஸ்)'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'ta-IN',
			language_name: 'அர்பிதன்'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'ta-IN',
			language_name: 'வடக்கு ஃப்ரிஸியான் (ஜெர்மனி)'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'ta-IN',
			language_name: 'கிழக்கு ஃப்ரிஸியான் (ஜெர்மனி)'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'ta-IN',
			language_name: 'ஃப்ரியூலியன் (இத்தாலி)'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'ta-IN',
			language_name: 'மேற்கு ஃப்ரிஷியன் (நெதர்லாந்து)'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'ta-IN',
			language_name: 'ஐரிஷ் (அயர்லாந்து)'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'ta-IN',
			language_name: 'கா (கானா)'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'ta-IN',
			language_name: 'காகௌஸ் (மால்டோவா)'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'ta-IN',
			language_name: 'கன் சீனம் (சீனா)'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'ta-IN',
			language_name: 'கயோ (இந்தோனேசியா)'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'ta-IN',
			language_name: 'பயா (மத்திய ஆப்ரிக்கக் குடியரசு)'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'ta-IN',
			language_name: 'ஜோராஸ்ட்ரியன் டாரி'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'ta-IN',
			language_name: 'ஸ்காட்ஸ் கேலிக் (யுனைடெட் கிங்டம்)'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'ta-IN',
			language_name: 'கீஜ் (எத்தியோப்பியா)'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'ta-IN',
			language_name: 'கில்பெர்டீஸ் (கிரிபாட்டி)'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'ta-IN',
			language_name: 'காலிஸியன் (ஸ்பெயின்)'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'ta-IN',
			language_name: 'கிலாகி'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'ta-IN',
			language_name: 'மிடில் ஹை ஜெர்மன் (ஜெர்மனி)'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'ta-IN',
			language_name: 'க்வாரனி (பராகுவே)'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'ta-IN',
			language_name: 'பழைய ஹை ஜெர்மன் (ஜெர்மனி)'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'ta-IN',
			language_name: 'கோன்டி (இந்தியா)'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'ta-IN',
			language_name: 'கோரோன்டலோ (இந்தோனேசியா)'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'ta-IN',
			language_name: 'கோதிக் (உக்ரைன்)'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'ta-IN',
			language_name: 'க்ரேபோ (லைபீரியா)'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'ta-IN',
			language_name: 'பண்டைய கிரேக்கம் (கிரீஸ்)'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'ta-IN',
			language_name: 'ஸ்விஸ் ஜெர்மன் (ஸ்விட்சர்லாந்து)'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'ta-IN',
			language_name: 'குஜராத்தி (இந்தியா)'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'ta-IN',
			language_name: 'வேயு'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'ta-IN',
			language_name: 'ஃப்ராஃப்ரா'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'ta-IN',
			language_name: 'குஸி (கென்யா)'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'ta-IN',
			language_name: 'மேங்க்ஸ் (ஐல் ஆஃப் மேன்)'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'ta-IN',
			language_name: 'குவிசின் (கனடா)'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'ta-IN',
			language_name: 'ஹௌஸா (நைஜீரியா)'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'ta-IN',
			language_name: 'ஹௌஸா (கேமரூன்)'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'ta-IN',
			language_name: 'ஹௌஸா (சூடான்)'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'ta-IN',
			language_name: 'ஹைடா (கனடா)'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'ta-IN',
			language_name: 'ஹக்கா சீனம் (சீனா)'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'ta-IN',
			language_name: 'ஹக்கா சீனம் (தைவான்)'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'ta-IN',
			language_name: 'ஹவாயியன் (அமெரிக்கா)'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'ta-IN',
			language_name: 'தெற்கு ஹைடா (கனடா)'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'ta-IN',
			language_name: 'ஹீப்ரூ (இஸ்ரேல்)'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'ta-IN',
			language_name: 'இந்தி (இந்தியா)'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'ta-IN',
			language_name: 'ஃபிஜி இந்தி (ஃபிஜி)'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'ta-IN',
			language_name: 'ஹிலிகாய்னான் (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'ta-IN',
			language_name: 'ஹிட்டைட் (துருக்கியே)'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'ta-IN',
			language_name: 'மாங்க் (சீனா)'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'ta-IN',
			language_name: 'ஹ்மாங் நுவா'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'ta-IN',
			language_name: 'ஹ்மாங் நுவா'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'ta-IN',
			language_name: 'ஹிரி மோட்டு (பப்புவா நியூ கினியா)'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'ta-IN',
			language_name: 'குரோஷியன் (குரோஷியா)'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'ta-IN',
			language_name: 'அப்பர் சோர்பியான் (ஜெர்மனி)'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'ta-IN',
			language_name: 'சியாங்க் சீனம் (சீனா)'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'ta-IN',
			language_name: 'ஹைத்தியன் க்ரியோலி (ஹைட்டி)'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'ta-IN',
			language_name: 'ஹங்கேரியன் (ஹங்கேரி)'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'ta-IN',
			language_name: 'ஹுபா (அமெரிக்கா)'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'ta-IN',
			language_name: 'ஹல்கோமெலம் (கனடா)'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'ta-IN',
			language_name: 'ஆர்மேனியன் (அர்மேனியா)'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'ta-IN',
			language_name: 'ஹெரேரோ (நமீபியா)'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'ta-IN',
			language_name: 'இபான் (மலேசியா)'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'ta-IN',
			language_name: 'இபிபியோ (நைஜீரியா)'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'ta-IN',
			language_name: 'இந்தோனேஷியன் (இந்தோனேசியா)'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'ta-IN',
			language_name: 'இன்டர்லிங் (எஸ்டோனியா)'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'ta-IN',
			language_name: 'இக்போ (நைஜீரியா)'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'ta-IN',
			language_name: 'சிசுவான் ஈ (சீனா)'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'ta-IN',
			language_name: 'இனுபியாக் (அமெரிக்கா)'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'ta-IN',
			language_name: 'மேற்கு கனடிய இனுக்டிடுட் (கனடா)'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'ta-IN',
			language_name: 'இலோகோ (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'ta-IN',
			language_name: 'இங்குஷ் (ரஷ்யா)'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'ta-IN',
			language_name: 'ஐஸ்லேண்டிக் (ஐஸ்லாந்து)'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'ta-IN',
			language_name: 'இத்தாலியன் (இத்தாலி)'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'ta-IN',
			language_name: 'இனுகிடூட் (கனடா)'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'ta-IN',
			language_name: 'இங்க்ரியன்'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'ta-IN',
			language_name: 'ஜாப்பனீஸ் (ஜப்பான்)'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'ta-IN',
			language_name: 'ஜமைக்கன் கிரியோல் ஆங்கிலம்'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'ta-IN',
			language_name: 'நகொம்பா (கேமரூன்)'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'ta-IN',
			language_name: 'மாசெம் (தான்சானியா)'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'ta-IN',
			language_name: 'ஜூதேயோ-பெர்ஷியன் (இஸ்ரேல்)'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'ta-IN',
			language_name: 'ஜூதேயோ-அராபிக் (இஸ்ரேல்)'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'ta-IN',
			language_name: 'ஜூடிஷ்'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'ta-IN',
			language_name: 'ஜாவனீஸ் (இந்தோனேசியா)'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'ta-IN',
			language_name: 'ஜார்ஜியன் (ஜார்ஜியா)'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'ta-IN',
			language_name: 'காரா-கல்பாக் (உஸ்பெகிஸ்தான்)'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'ta-IN',
			language_name: 'கபாய்ல் (அல்ஜீரியா)'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'ta-IN',
			language_name: 'காசின் (மியான்மர் [பர்மா])'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'ta-IN',
			language_name: 'ஜ்ஜூ (நைஜீரியா)'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'ta-IN',
			language_name: 'கம்பா (கென்யா)'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'ta-IN',
			language_name: 'காவி (இந்தோனேசியா)'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'ta-IN',
			language_name: 'கபார்டியன் (ரஷ்யா)'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'ta-IN',
			language_name: 'கனெம்பு'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'ta-IN',
			language_name: 'தையாப் (நைஜீரியா)'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'ta-IN',
			language_name: 'மகொண்டே (தான்சானியா)'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'ta-IN',
			language_name: 'கபுவெர்தியானு (கேப் வெர்டே)'
		},
		{
			locale_code: 'kek-GT',
			locale_id: 'ta-IN',
			language_name: 'Qʼeqchiʼ'
		},
		{
			locale_code: 'ken-CM',
			locale_id: 'ta-IN',
			language_name: 'கென்யாங்'
		},
		{
			locale_code: 'kfo-CI',
			locale_id: 'ta-IN',
			language_name: 'கோரோ (கோட் தி’வாயர்)'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'ta-IN',
			language_name: 'காங்கோ (காங்கோ - கின்ஷாசா)'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'ta-IN',
			language_name: 'கைன்கேங் (பிரேசில்)'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'ta-IN',
			language_name: 'காஸி (இந்தியா)'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'ta-IN',
			language_name: 'கோதானீஸ் (ஈரான்)'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'ta-IN',
			language_name: 'கொய்ரா சீனீ (மாலி)'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'ta-IN',
			language_name: 'கோவார்'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'ta-IN',
			language_name: 'கிகுயூ (கென்யா)'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'ta-IN',
			language_name: 'கிர்மன்ஜ்கி'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'ta-IN',
			language_name: 'குவான்யாமா (நமீபியா)'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'ta-IN',
			language_name: 'கசாக் (கஸகஸ்தான்)'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'ta-IN',
			language_name: 'கசாக் (ஆஃப்கானிஸ்தான்)'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'ta-IN',
			language_name: 'கசாக் (சீனா)'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'ta-IN',
			language_name: 'கசாக் (ஈரான்)'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'ta-IN',
			language_name: 'கசாக் (மங்கோலியா)'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'ta-IN',
			language_name: 'ககோ (கேமரூன்)'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'ta-IN',
			language_name: 'கலாலிசூட் (கிரீன்லாந்து)'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'ta-IN',
			language_name: 'கலின்ஜின் (கென்யா)'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'ta-IN',
			language_name: 'கெமெர் (கம்போடியா)'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'ta-IN',
			language_name: 'கிம்புன்து (அங்கோலா)'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'ta-IN',
			language_name: 'கன்னடம் (இந்தியா)'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'ta-IN',
			language_name: 'கொரியன் (தென் கொரியா)'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'ta-IN',
			language_name: 'கொமி-பெர்ம்யாக் (ரஷ்யா)'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'ta-IN',
			language_name: 'கொங்கணி (இந்தியா)'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'ta-IN',
			language_name: 'கோஸ்ரைன் (மைக்ரோனேஷியா)'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'ta-IN',
			language_name: 'க்பெல்லே (லைபீரியா)'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'ta-IN',
			language_name: 'கனுரி (நைஜீரியா)'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'ta-IN',
			language_name: 'கராசே-பல்கார் (ரஷ்யா)'
		},
		{
			locale_code: 'kri-SL',
			locale_id: 'ta-IN',
			language_name: 'கிரியோ'
		},
		{
			locale_code: 'krj-PH',
			locale_id: 'ta-IN',
			language_name: 'கினராய்-ஏ'
		},
		{
			locale_code: 'krl-RU',
			locale_id: 'ta-IN',
			language_name: 'கரேலியன் (ரஷ்யா)'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'ta-IN',
			language_name: 'குருக் (இந்தியா)'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'ta-IN',
			language_name: 'காஷ்மிரி (இந்தியா)'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'ta-IN',
			language_name: 'ஷம்பாலா (தான்சானியா)'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'ta-IN',
			language_name: 'பாஃபியா (கேமரூன்)'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'ta-IN',
			language_name: 'கொலோக்னியன் (ஜெர்மனி)'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'ta-IN',
			language_name: 'குர்திஷ் (துருக்கியே)'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'ta-IN',
			language_name: 'குர்திஷ் (அர்மேனியா)'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'ta-IN',
			language_name: 'குர்திஷ் (ஈராக்)'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'ta-IN',
			language_name: 'குர்திஷ் (அசர்பைஜான்)'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'ta-IN',
			language_name: 'குர்திஷ் (ஜார்ஜியா)'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'ta-IN',
			language_name: 'குர்திஷ் (ஈரான்)'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'ta-IN',
			language_name: 'குர்திஷ் (லெபனான்)'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'ta-IN',
			language_name: 'குர்திஷ் (துர்க்மெனிஸ்தான்)'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'ta-IN',
			language_name: 'கும்யிக் (ரஷ்யா)'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'ta-IN',
			language_name: 'குடேனை (கனடா)'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'ta-IN',
			language_name: 'கொமி (ரஷ்யா)'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'ta-IN',
			language_name: 'கார்னிஷ் (யுனைடெட் கிங்டம்)'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'ta-IN',
			language_name: 'குவாக்வாலா (கனடா)'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'ta-IN',
			language_name: 'குவி (இந்தியா)'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'ta-IN',
			language_name: 'கிர்கிஸ் (கிர்கிஸ்தான்)'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'ta-IN',
			language_name: 'கிர்கிஸ் (சீனா)'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'ta-IN',
			language_name: 'கிர்கிஸ் (துருக்கியே)'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'ta-IN',
			language_name: 'லத்தின் (வாடிகன் நகரம்)'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'ta-IN',
			language_name: 'லடினோ (இஸ்ரேல்)'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'ta-IN',
			language_name: 'லங்கி (தான்சானியா)'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'ta-IN',
			language_name: 'லஹன்டா (பாகிஸ்தான்)'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'ta-IN',
			language_name: 'லம்பா (ஜாம்பியா)'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'ta-IN',
			language_name: 'லக்ஸம்போர்கிஷ் (லக்ஸ்சம்பர்க்)'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'ta-IN',
			language_name: 'லெஜ்ஜியன் (ரஷ்யா)'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'ta-IN',
			language_name: 'கான்டா (உகாண்டா)'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'ta-IN',
			language_name: 'லிம்பர்கிஷ் (நெதர்லாந்து)'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'ta-IN',
			language_name: 'லிகூரியன் (இத்தாலி)'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'ta-IN',
			language_name: 'லில்லூயிட் (கனடா)'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'ta-IN',
			language_name: 'லிவோனியன்'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'ta-IN',
			language_name: 'லகோடா (அமெரிக்கா)'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'ta-IN',
			language_name: 'லொம்பார்டு (இத்தாலி)'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'ta-IN',
			language_name: 'லிங்காலா (காங்கோ - கின்ஷாசா)'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'ta-IN',
			language_name: 'லாவோ (லாவோஸ்)'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'ta-IN',
			language_name: 'மோங்கோ (காங்கோ - கின்ஷாசா)'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'ta-IN',
			language_name: 'லூசியானா க்ரயோல் (அமெரிக்கா)'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'ta-IN',
			language_name: 'லோசி (ஜாம்பியா)'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'ta-IN',
			language_name: 'வடக்கு லுரி (ஈரான்)'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'ta-IN',
			language_name: 'சாமியா (உகாண்டா)'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'ta-IN',
			language_name: 'லிதுவேனியன் (லிதுவேனியா)'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'ta-IN',
			language_name: 'லாட்காலியன்'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'ta-IN',
			language_name: 'லுபா-கடாங்கா (காங்கோ - கின்ஷாசா)'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'ta-IN',
			language_name: 'லுபா-லுலுலா (காங்கோ - கின்ஷாசா)'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'ta-IN',
			language_name: 'லுய்சேனோ (அமெரிக்கா)'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'ta-IN',
			language_name: 'லூன்டா (ஜாம்பியா)'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'ta-IN',
			language_name: 'லுயோ (கென்யா)'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'ta-IN',
			language_name: 'மிஸோ (இந்தியா)'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'ta-IN',
			language_name: 'லுயியா (கென்யா)'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'ta-IN',
			language_name: 'லாட்வியன் (லாட்வியா)'
		},
		{
			locale_code: 'lzh-CN',
			locale_id: 'ta-IN',
			language_name: 'இலக்கிய சீன'
		},
		{
			locale_code: 'lzz-TR',
			locale_id: 'ta-IN',
			language_name: 'லாஸ்'
		},
		{
			locale_code: 'lzz-GE',
			locale_id: 'ta-IN',
			language_name: 'லாஸ்'
		},
		{
			locale_code: 'mad-ID',
			locale_id: 'ta-IN',
			language_name: 'மதுரீஸ் (இந்தோனேசியா)'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'ta-IN',
			language_name: 'மாஃபா'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'ta-IN',
			language_name: 'மகாஹி (இந்தியா)'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'ta-IN',
			language_name: 'மைதிலி (இந்தியா)'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'ta-IN',
			language_name: 'மகாசார் (இந்தோனேசியா)'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'ta-IN',
			language_name: 'மான்டிங்கோ (காம்பியா)'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'ta-IN',
			language_name: 'மான்டிங்கோ (கினியா)'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'ta-IN',
			language_name: 'மாசாய் (கென்யா)'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'ta-IN',
			language_name: 'மாபா'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'ta-IN',
			language_name: 'மோக்க்ஷா (ரஷ்யா)'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'ta-IN',
			language_name: 'மான்டார் (இந்தோனேசியா)'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'ta-IN',
			language_name: 'மென்டீ (சியாரா லியோன்)'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'ta-IN',
			language_name: 'மெரு (கென்யா)'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'ta-IN',
			language_name: 'மொரிசியன் (மொரிசியஸ்)'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'ta-IN',
			language_name: 'மலகாஸி (மடகாஸ்கர்)'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'ta-IN',
			language_name: 'மிடில் ஐரிஷ் (அயர்லாந்து)'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'ta-IN',
			language_name: 'மகுவா-மீட்டோ (மொசாம்பிக்)'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'ta-IN',
			language_name: 'மேடா (கேமரூன்)'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'ta-IN',
			language_name: 'மார்ஷெலீஸ் (மார்ஷல் தீவுகள்)'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'ta-IN',
			language_name: 'மௌரி (நியூசிலாந்து)'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'ta-IN',
			language_name: 'மிக்மாக் (கனடா)'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'ta-IN',
			language_name: 'மின்னாங்கபௌ (இந்தோனேசியா)'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'ta-IN',
			language_name: 'மாஸிடோனியன் (வடக்கு மாசிடோனியா)'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'ta-IN',
			language_name: 'மலையாளம் (இந்தியா)'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'ta-IN',
			language_name: 'மங்கோலியன் (மங்கோலியா)'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'ta-IN',
			language_name: 'மங்கோலியன் (சீனா)'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'ta-IN',
			language_name: 'மன்சூ (சீனா)'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'ta-IN',
			language_name: 'மணிப்புரி (இந்தியா)'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'ta-IN',
			language_name: 'இன்னு-ஐமுன் (கனடா)'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'ta-IN',
			language_name: 'மொஹாக் (கனடா)'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'ta-IN',
			language_name: 'மோஸ்ஸி (புர்கினா ஃபாஸோ)'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'ta-IN',
			language_name: 'மராத்தி (இந்தியா)'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'ta-IN',
			language_name: 'மேற்கு மாரி'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'ta-IN',
			language_name: 'மலாய் (மலேசியா)'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'ta-IN',
			language_name: 'மலாய் (கோகோஸ் [கீலிங்] தீவுகள்)'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'ta-IN',
			language_name: 'மால்டிஸ் (மால்டா)'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'ta-IN',
			language_name: 'முன்டாங் (கேமரூன்)'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'ta-IN',
			language_name: 'க்ரீக் (அமெரிக்கா)'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'ta-IN',
			language_name: 'மிரான்டீஸ் (போர்ச்சுக்கல்)'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'ta-IN',
			language_name: 'மார்வாரி (இந்தியா)'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'ta-IN',
			language_name: 'மெண்டவாய்'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'ta-IN',
			language_name: 'பர்மீஸ் (மியான்மர் [பர்மா])'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'ta-IN',
			language_name: 'Myene'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'ta-IN',
			language_name: 'ஏர்ஜியா (ரஷ்யா)'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'ta-IN',
			language_name: 'மசந்தேரனி (ஈரான்)'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'ta-IN',
			language_name: 'நவ்ரூ (நௌரு)'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'ta-IN',
			language_name: 'மின் நான் சீனம் (சீனா)'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'ta-IN',
			language_name: 'மின் நான் சீனம் (தைவான்)'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'ta-IN',
			language_name: 'மின் நான் சீனம் (மகாவ் எஸ்ஏஆர் சீனா)'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'ta-IN',
			language_name: 'நியோபோலிடன் (இத்தாலி)'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'ta-IN',
			language_name: 'நாமா (நமீபியா)'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'ta-IN',
			language_name: 'நார்வேஜியன் பொக்மால் (நார்வே)'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'ta-IN',
			language_name: 'வடக்கு தெபெலே (ஜிம்பாப்வே)'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'ta-IN',
			language_name: 'லோ ஜெர்மன் (ஜெர்மனி)'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'ta-IN',
			language_name: 'நேபாளி (நேபாளம்)'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'ta-IN',
			language_name: 'நெவாரி (நேபாளம்)'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'ta-IN',
			language_name: 'தோங்கா (நமீபியா)'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'ta-IN',
			language_name: 'நியாஸ் (இந்தோனேசியா)'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'ta-IN',
			language_name: 'நியூவான் (நியுவே)'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'ta-IN',
			language_name: 'ஏஓ நாகா'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'ta-IN',
			language_name: 'டச்சு (நெதர்லாந்து)'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'ta-IN',
			language_name: 'க்வாசியோ (கேமரூன்)'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'ta-IN',
			language_name: 'நார்வேஜியன் நியூநார்ஸ்க் (நார்வே)'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'ta-IN',
			language_name: 'நெகெய்ம்பூன் (கேமரூன்)'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'ta-IN',
			language_name: 'நார்வேஜியன் (நார்வே)'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'ta-IN',
			language_name: 'நோகை (ரஷ்யா)'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'ta-IN',
			language_name: 'பழைய நோர்ஸ் (ஸ்வீடன்)'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'ta-IN',
			language_name: 'என்‘கோ (கினியா)'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'ta-IN',
			language_name: 'தெற்கு தெபெலே (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'ta-IN',
			language_name: 'வடக்கு சோதோ (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'ta-IN',
			language_name: 'நியூர் (தெற்கு சூடான்)'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'ta-IN',
			language_name: 'நவாஜோ (அமெரிக்கா)'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'ta-IN',
			language_name: 'பாரம்பரிய நேவாரி (நேபாளம்)'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'ta-IN',
			language_name: 'நயன்ஜா (மலாவி)'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'ta-IN',
			language_name: 'நியாம்வேஜி (தான்சானியா)'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'ta-IN',
			language_name: 'நியான்கோலே (உகாண்டா)'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'ta-IN',
			language_name: 'நியோரோ (உகாண்டா)'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'ta-IN',
			language_name: 'நிஜ்மா (கானா)'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'ta-IN',
			language_name: 'ஒக்கிடன் (பிரான்ஸ்)'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'ta-IN',
			language_name: 'ஒஜிப்வா (கனடா)'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'ta-IN',
			language_name: 'வடமேற்கு ஓஜிப்வா (கனடா)'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'ta-IN',
			language_name: 'மத்திய ஓஜிப்வா (கனடா)'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'ta-IN',
			language_name: 'ஓஜி-க்ரீ (கனடா)'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'ta-IN',
			language_name: 'மேற்கு ஓஜிப்வா (கனடா)'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'ta-IN',
			language_name: 'ஒகானகன் (கனடா)'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'ta-IN',
			language_name: 'ஒரோமோ (எத்தியோப்பியா)'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'ta-IN',
			language_name: 'ஒடியா (இந்தியா)'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'ta-IN',
			language_name: 'ஒசெட்டிக் (ஜார்ஜியா)'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'ta-IN',
			language_name: 'ஓசேஜ் (அமெரிக்கா)'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'ta-IN',
			language_name: 'ஓட்டோமான் துருக்கிஷ் (துருக்கியே)'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'ta-IN',
			language_name: 'பஞ்சாபி (இந்தியா)'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'ta-IN',
			language_name: 'பஞ்சாபி (பாகிஸ்தான்)'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'ta-IN',
			language_name: 'பன்காசினன் (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'ta-IN',
			language_name: 'பாஹ்லவி (ஈரான்)'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'ta-IN',
			language_name: 'பாஹ்லவி (சீனா)'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'ta-IN',
			language_name: 'பம்பாங்கா (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'ta-IN',
			language_name: 'பபியாமென்டோ (குராகவ்)'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'ta-IN',
			language_name: 'பலௌவன் (பாலோ)'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'ta-IN',
			language_name: 'பிகார்ட்'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'ta-IN',
			language_name: 'நைஜீரியன் பிட்கின் (நைஜீரியா)'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'ta-IN',
			language_name: 'பென்சில்வேனிய ஜெர்மன் (அமெரிக்கா)'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'ta-IN',
			language_name: 'Plautdietsch'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'ta-IN',
			language_name: 'பழைய பெர்ஷியன் (ஈரான்)'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'ta-IN',
			language_name: 'பாலடைன் ஜெர்மன்'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'ta-IN',
			language_name: 'ஃபொனிஷியன் (லெபனான்)'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'ta-IN',
			language_name: 'பாலி (யுனைடெட் கிங்டம்)'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'ta-IN',
			language_name: 'பாலி (இந்தியா)'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'ta-IN',
			language_name: 'பாலி (இலங்கை)'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'ta-IN',
			language_name: 'பாலி (மியான்மர் [பர்மா])'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'ta-IN',
			language_name: 'பாலி (தாய்லாந்து)'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'ta-IN',
			language_name: 'பிஜின் (சாலமன் தீவுகள்)'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'ta-IN',
			language_name: 'போலிஷ் (போலந்து)'
		},
		{
			locale_code: 'pms-IT',
			locale_id: 'ta-IN',
			language_name: 'பீட்மாண்டீஸ்'
		},
		{
			locale_code: 'pnt-GR',
			locale_id: 'ta-IN',
			language_name: 'பொன்டிக்'
		},
		{
			locale_code: 'pnt-RU',
			locale_id: 'ta-IN',
			language_name: 'பொன்டிக்'
		},
		{
			locale_code: 'pnt-TR',
			locale_id: 'ta-IN',
			language_name: 'பொன்டிக்'
		},
		{
			locale_code: 'pon-FM',
			locale_id: 'ta-IN',
			language_name: 'ஃபோன்பெயென் (மைக்ரோனேஷியா)'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'ta-IN',
			language_name: 'மலிசீட்-பஸ்ஸமகுவாடி (கனடா)'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'ta-IN',
			language_name: 'பிரஷ்யன் (போலந்து)'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'ta-IN',
			language_name: 'பழைய ப்ரோவென்சால் (பிரான்ஸ்)'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'ta-IN',
			language_name: 'பஷ்தோ (ஆஃப்கானிஸ்தான்)'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'ta-IN',
			language_name: 'பிரேசிலிய போர்ச்சுகீஸ்'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'ta-IN',
			language_name: 'க்வெச்சுவா (பெரு)'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'ta-IN',
			language_name: 'கீசீ (கவுதமாலா)'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'ta-IN',
			language_name: 'சிம்போராசோ ஹைலேண்ட் கிச்சுவா'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'ta-IN',
			language_name: 'ராஜஸ்தானி (இந்தியா)'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'ta-IN',
			language_name: 'ரபனுய் (சிலி)'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'ta-IN',
			language_name: 'ரரோடோங்கன் (குக் தீவுகள்)'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'ta-IN',
			language_name: 'ரோமக்னோல்'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'ta-IN',
			language_name: 'ரோகிஞ்சா (மியான்மர் [பர்மா])'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'ta-IN',
			language_name: 'ரிஃபியன்'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'ta-IN',
			language_name: 'ரோமான்ஷ் (ஸ்விட்சர்லாந்து)'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'ta-IN',
			language_name: 'ருண்டி (புருண்டி)'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'ta-IN',
			language_name: 'ரோமேனியன் (ருமேனியா)'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'ta-IN',
			language_name: 'ரோம்போ (தான்சானியா)'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'ta-IN',
			language_name: 'ரோமானி (ருமேனியா)'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'ta-IN',
			language_name: 'ரோட்டுமன்'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'ta-IN',
			language_name: 'ரஷியன் (ரஷ்யா)'
		},
		{
			locale_code: 'rue-UA',
			locale_id: 'ta-IN',
			language_name: 'ருசின்'
		},
		{
			locale_code: 'rug-SB',
			locale_id: 'ta-IN',
			language_name: 'ரோவியானா'
		},
		{
			locale_code: 'rup-RO',
			locale_id: 'ta-IN',
			language_name: 'அரோமானியன் (ருமேனியா)'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'ta-IN',
			language_name: 'கின்யாருவான்டா (ருவாண்டா)'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'ta-IN',
			language_name: 'ருவா (தான்சானியா)'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'ta-IN',
			language_name: 'சமஸ்கிருதம் (இந்தியா)'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'ta-IN',
			language_name: 'சான்டாவே (தான்சானியா)'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'ta-IN',
			language_name: 'சக்கா (ரஷ்யா)'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'ta-IN',
			language_name: 'சமாரிடன் அராமைக் (பாலஸ்தீனிய பிரதேசங்கள்)'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'ta-IN',
			language_name: 'சம்புரு (கென்யா)'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'ta-IN',
			language_name: 'சாசாக் (இந்தோனேசியா)'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'ta-IN',
			language_name: 'சான்டாலி (இந்தியா)'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'ta-IN',
			language_name: 'சௌராஷ்டிரம் (இந்தியா)'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'ta-IN',
			language_name: 'நெகாம்பே (சாட்)'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'ta-IN',
			language_name: 'சங்கு (தான்சானியா)'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'ta-IN',
			language_name: 'சார்தீனியன் (இத்தாலி)'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'ta-IN',
			language_name: 'சிசிலியன் (இத்தாலி)'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'ta-IN',
			language_name: 'ஸ்காட்ஸ் (யுனைடெட் கிங்டம்)'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'ta-IN',
			language_name: 'சிந்தி (பாகிஸ்தான்)'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'ta-IN',
			language_name: 'சிந்தி (இந்தியா)'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'ta-IN',
			language_name: 'சஸ்ஸாரேஸ் சர்டினியன்'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'ta-IN',
			language_name: 'தெற்கு குர்திஷ் (ஈரான்)'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'ta-IN',
			language_name: 'வடக்கு சமி (நார்வே)'
		},
		{
			locale_code: 'see-US',
			locale_id: 'ta-IN',
			language_name: 'சினேகா'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'ta-IN',
			language_name: 'செனா (மொசாம்பிக்)'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'ta-IN',
			language_name: 'சீரி'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'ta-IN',
			language_name: 'செல்குப் (ரஷ்யா)'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'ta-IN',
			language_name: 'கொய்ராபோரோ சென்னி (மாலி)'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'ta-IN',
			language_name: 'சாங்கோ (மத்திய ஆப்ரிக்கக் குடியரசு)'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'ta-IN',
			language_name: 'பழைய ஐரிஷ் (அயர்லாந்து)'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'ta-IN',
			language_name: 'சமோஜித்தியன்'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'ta-IN',
			language_name: 'தசேஹித் (மொராக்கோ)'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'ta-IN',
			language_name: 'ஷான் (மியான்மர் [பர்மா])'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'ta-IN',
			language_name: 'சாடியன் அரபு'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'ta-IN',
			language_name: 'சிங்களம் (இலங்கை)'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'ta-IN',
			language_name: 'சிடாமோ (எத்தியோப்பியா)'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'ta-IN',
			language_name: 'ஸ்லோவாக் (ஸ்லோவாகியா)'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'ta-IN',
			language_name: 'ஸ்லோவேனியன் (ஸ்லோவேனியா)'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'ta-IN',
			language_name: 'தெற்கு லுஷூட்சீட் (அமெரிக்கா)'
		},
		{
			locale_code: 'sli-PL',
			locale_id: 'ta-IN',
			language_name: 'கீழ் சிலேசியன்'
		},
		{
			locale_code: 'sly-ID',
			locale_id: 'ta-IN',
			language_name: 'செளயர்'
		},
		{
			locale_code: 'sm-WS',
			locale_id: 'ta-IN',
			language_name: 'சமோவான் (சமோவா)'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'ta-IN',
			language_name: 'தெற்கு சமி (ஸ்வீடன்)'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'ta-IN',
			language_name: 'லுலே சமி (ஸ்வீடன்)'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'ta-IN',
			language_name: 'இனாரி சமி (பின்லாந்து)'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'ta-IN',
			language_name: 'ஸ்கோல்ட் சமி (பின்லாந்து)'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'ta-IN',
			language_name: 'ஷோனா (ஜிம்பாப்வே)'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'ta-IN',
			language_name: 'சோனின்கே (மாலி)'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'ta-IN',
			language_name: 'சோமாலி (சோமாலியா)'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'ta-IN',
			language_name: 'சோக்தியன் (உஸ்பெகிஸ்தான்)'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'ta-IN',
			language_name: 'அல்பேனியன் (அல்பேனியா)'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'ta-IN',
			language_name: 'செர்பியன் (செர்பியா)'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'ta-IN',
			language_name: 'செர்பியன் (மான்டேனெக்ரோ)'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'ta-IN',
			language_name: 'செர்பியன் (ருமேனியா)'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'ta-IN',
			language_name: 'செர்பியன் (துருக்கியே)'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'ta-IN',
			language_name: 'ஸ்ரானன் டோங்கோ (சுரினாம்)'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'ta-IN',
			language_name: 'செரெர் (செனெகல்)'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'ta-IN',
			language_name: 'ஸ்வாடீ (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'ta-IN',
			language_name: 'சஹோ (எரிட்ரியா)'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'ta-IN',
			language_name: 'தெற்கு ஸோதோ (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'ta-IN',
			language_name: 'Saterland Frisian'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'ta-IN',
			language_name: 'ஸ்ட்ரெய்ட்ஸ் சாலிஷ் (கனடா)'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'ta-IN',
			language_name: 'சுண்டானீஸ் (இந்தோனேசியா)'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'ta-IN',
			language_name: 'சுகுமா (தான்சானியா)'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'ta-IN',
			language_name: 'சுசு (கினியா)'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'ta-IN',
			language_name: 'ஸ்வீடிஷ் (ஸ்வீடன்)'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'ta-IN',
			language_name: 'ஸ்வாஹிலி (தான்சானியா)'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'ta-IN',
			language_name: 'கொமோரியன் (மயோட்)'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'ta-IN',
			language_name: 'பாரம்பரிய சிரியாக் (துருக்கியே)'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'ta-IN',
			language_name: 'சிரியாக் (ஈராக்)'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'ta-IN',
			language_name: 'சிலேசியன் (போலந்து)'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'ta-IN',
			language_name: 'தமிழ் (இந்தியா)'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'ta-IN',
			language_name: 'தெற்கு டட்சோன் (கனடா)'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'ta-IN',
			language_name: 'துளு'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'ta-IN',
			language_name: 'தெலுங்கு (இந்தியா)'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'ta-IN',
			language_name: 'டிம்னே (சியாரா லியோன்)'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'ta-IN',
			language_name: 'டெசோ (உகாண்டா)'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'ta-IN',
			language_name: 'டெரெனோ (பிரேசில்)'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'ta-IN',
			language_name: 'டெடும் (திமோர்-லெஸ்தே)'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'ta-IN',
			language_name: 'தஜிக் (தஜிகிஸ்தான்)'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'ta-IN',
			language_name: 'தஜிக் (பாகிஸ்தான்)'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'ta-IN',
			language_name: 'தகிஷ் (கனடா)'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'ta-IN',
			language_name: 'தாய் (தாய்லாந்து)'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'ta-IN',
			language_name: 'தால்டன் (கனடா)'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'ta-IN',
			language_name: 'டிக்ரின்யா (எத்தியோப்பியா)'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'ta-IN',
			language_name: 'டைக்ரே (எரிட்ரியா)'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'ta-IN',
			language_name: 'டிவ் (நைஜீரியா)'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'ta-IN',
			language_name: 'துருக்மென் (துர்க்மெனிஸ்தான்)'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'ta-IN',
			language_name: 'டோகேலௌ (டோகேலோ)'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'ta-IN',
			language_name: 'தசாகுர்'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'ta-IN',
			language_name: 'ஃபிலிபினோ (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'ta-IN',
			language_name: 'லிங்கிட் (அமெரிக்கா)'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'ta-IN',
			language_name: 'தாலிஷ்'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'ta-IN',
			language_name: 'தமஷேக் (நைஜர்)'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'ta-IN',
			language_name: 'ஸ்வானா (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'ta-IN',
			language_name: 'டோங்கான் (டோங்கா)'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'ta-IN',
			language_name: 'நயாசா டோங்கா (மலாவி)'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'ta-IN',
			language_name: 'டோக் பிஸின் (பப்புவா நியூ கினியா)'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'ta-IN',
			language_name: 'துருக்கிஷ் (துருக்கியே)'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'ta-IN',
			language_name: 'துரோயோ'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'ta-IN',
			language_name: 'தரோகோ (தைவான்)'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'ta-IN',
			language_name: 'டோர்வாலி'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'ta-IN',
			language_name: 'ஸோங்கா (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'ta-IN',
			language_name: 'சகோனியன்'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'ta-IN',
			language_name: 'ட்ஸிம்ஷியன் (கனடா)'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'ta-IN',
			language_name: 'டாடர் (ரஷ்யா)'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'ta-IN',
			language_name: 'வடக்கு டட்சோன் (கனடா)'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'ta-IN',
			language_name: 'முஸ்லிம் டாட்'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'ta-IN',
			language_name: 'தும்புகா (மலாவி)'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'ta-IN',
			language_name: 'டுவாலு (துவாலு)'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'ta-IN',
			language_name: 'டசவாக் (நைஜர்)'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'ta-IN',
			language_name: 'தஹிதியன் (பிரெஞ்சு பாலினேஷியா)'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'ta-IN',
			language_name: 'டுவினியன் (ரஷ்யா)'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'ta-IN',
			language_name: 'மத்திய அட்லஸ் டமசைட் (மொராக்கோ)'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'ta-IN',
			language_name: 'உட்முர்ட் (ரஷ்யா)'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'ta-IN',
			language_name: 'உய்குர் (சீனா)'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'ta-IN',
			language_name: 'உய்குர் (கஸகஸ்தான்)'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'ta-IN',
			language_name: 'உய்குர் (மங்கோலியா)'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'ta-IN',
			language_name: 'உகாரிடிக் (சிரியா)'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'ta-IN',
			language_name: 'உக்ரைனியன் (உக்ரைன்)'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'ta-IN',
			language_name: 'அம்பொண்டு (அங்கோலா)'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'ta-IN',
			language_name: 'கேட்டலான் (அன்டோரா)'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (ஐக்கிய அரபு அமீரகம்)'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'ta-IN',
			language_name: 'தாரி'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'ta-IN',
			language_name: 'போர்ச்சுகீஸ் (அங்கோலா)'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (அர்ஜென்டினா)'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'ta-IN',
			language_name: 'மலாய் (புருனே)'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'ta-IN',
			language_name: 'உருது (யுனைடெட் கிங்டம்)'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'ta-IN',
			language_name: 'மலாய் (இந்தோனேசியா)'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'ta-IN',
			language_name: 'உருது (இந்தியா)'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'ta-IN',
			language_name: 'உருது (மொரிசியஸ்)'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'ta-IN',
			language_name: 'உருது (பாகிஸ்தான்)'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'ta-IN',
			language_name: 'பெர்ஷியன் (தஜிகிஸ்தான்)'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'ta-IN',
			language_name: 'சமோவான் (அமெரிக்க சமோவா)'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'ta-IN',
			language_name: 'ஆஸ்திரிய ஜெர்மன்'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'ta-IN',
			language_name: 'டச்சு (அரூபா)'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'ta-IN',
			language_name: 'ஸ்வீடிஷ் (ஆலந்து தீவுகள்)'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'ta-IN',
			language_name: 'ஃப்லெமிஷ்'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (புர்கினா ஃபாஸோ)'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (பஹ்ரைன்)'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (பெனின்)'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (செயின்ட் பார்தேலெமி)'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (பொலிவியா)'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (தைவான்)'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'ta-IN',
			language_name: 'பபியாமென்டோ (கரீபியன் நெதர்லாந்து)'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'ta-IN',
			language_name: 'நார்வேஜியன் (பொவேட் தீவு)'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'ta-IN',
			language_name: 'ரஷியன் (பெலாரஸ்)'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (காங்கோ - கின்ஷாசா)'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (காங்கோ - ப்ராஸாவில்லே)'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'ta-IN',
			language_name: 'ஸ்விஸ் ஹை ஜெர்மன்'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (கோட் தி’வாயர்)'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (சிலி)'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (கேமரூன்)'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (சீனா)'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (கொலம்பியா)'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'ta-IN',
			language_name: 'root (சைப்ரஸ்)'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (கோஸ்டாரிகா)'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (கியூபா)'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'ta-IN',
			language_name: 'போர்ச்சுகீஸ் (கேப் வெர்டே)'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'ta-IN',
			language_name: 'கிரேக்கம் (சைப்ரஸ்)'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'ta-IN',
			language_name: 'காரா-கல்பாக் (ஆஃப்கானிஸ்தான்)'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'ta-IN',
			language_name: 'மாஸிடோனியன் (அல்பேனியா)'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'ta-IN',
			language_name: 'செர்பியன் (போஸ்னியா & ஹெர்ஸகோவினா)'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'ta-IN',
			language_name: 'மாஸிடோனியன் (கிரீஸ்)'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'ta-IN',
			language_name: 'காரா-கல்பாக் (ஈரான்)'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'ta-IN',
			language_name: 'உக்ரைனியன் (மால்டோவா)'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'ta-IN',
			language_name: 'பல்கேரியன் (ருமேனியா)'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'ta-IN',
			language_name: 'உக்ரைனியன் (ஸ்லோவாகியா)'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'ta-IN',
			language_name: 'கபார்டியன் (துருக்கியே)'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'ta-IN',
			language_name: 'உஸ்பெக் (உஸ்பெகிஸ்தான்)'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'ta-IN',
			language_name: 'நேபாளி (பூடான்)'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'ta-IN',
			language_name: 'போஜ்பூரி (மொரிசியஸ்)'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (ஜிபௌட்டி)'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (டொமினிகன் குடியரசு)'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (அல்ஜீரியா)'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (ஈக்வடார்)'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (மேற்கு சஹாரா)'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'ta-IN',
			language_name: 'டிக்ரின்யா (எரிட்ரியா)'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (கேபான்)'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'ta-IN',
			language_name: 'ஓலோஃப் (செனெகல்)'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (பிரெஞ்சு கயானா)'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (கினியா)'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (க்வாதேலோப்)'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (ஈக்வடோரியல் கினியா)'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (கவுதமாலா)'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'ta-IN',
			language_name: 'போர்ச்சுகீஸ் (கினியா-பிஸ்ஸாவ்)'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'ta-IN',
			language_name: 'காண்டோனீஸ் (கனடா)'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'ta-IN',
			language_name: 'காண்டோனீஸ் (சீனா)'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'ta-IN',
			language_name: 'யெட்டிஷ் (ஸ்வீடன்)'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'ta-IN',
			language_name: 'யெட்டிஷ் (உக்ரைன்)'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'ta-IN',
			language_name: 'யெட்டிஷ் (அமெரிக்கா)'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (ஹாங்காங் எஸ்ஏஆர் சீனா)'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'ta-IN',
			language_name: 'ஹ்மாங் நுவா'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'ta-IN',
			language_name: 'ஹ்மாங் நுவா'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'ta-IN',
			language_name: 'ஹ்மாங் நுவா'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'ta-IN',
			language_name: 'ஹ்மாங் நுவா'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'ta-IN',
			language_name: 'ஹ்மாங் நுவா'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'ta-IN',
			language_name: 'ஹ்மாங் நுவா'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (ஹோண்டூராஸ்)'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (ஈராக்)'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (ஜோர்டான்)'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'ta-IN',
			language_name: 'ஸ்வாஹிலி (கென்யா)'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (கோமரோஸ்)'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'ta-IN',
			language_name: 'கொரியன் (வட கொரியா)'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (குவைத்)'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'ta-IN',
			language_name: 'ரஷியன் (கஸகஸ்தான்)'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (ஐக்கிய அரபு அமீரகம்)'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'ta-IN',
			language_name: 'துருக்மென் (ஆஃப்கானிஸ்தான்)'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (பங்களாதேஷ்)'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (பல்கேரியா)'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (பூடான்)'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (கோகோஸ் [கீலிங்] தீவுகள்)'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'ta-IN',
			language_name: 'ஜுவாங் (சீனா)'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'ta-IN',
			language_name: 'துருக்கிஷ் (சைப்ரஸ்)'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (அல்ஜீரியா)'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (எகிப்து)'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (எரிட்ரியா)'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (எத்தியோப்பியா)'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (கிரீஸ்)'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (ஹாங்காங் எஸ்ஏஆர் சீனா)'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (இஸ்ரேல்)'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (ஈராக்)'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'ta-IN',
			language_name: 'துருக்மென் (ஈரான்)'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (ஜோர்டான்)'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (கோமரோஸ்)'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (கஸகஸ்தான்)'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (லெபனான்)'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (இலங்கை)'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (மொராக்கோ)'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'ta-IN',
			language_name: 'அல்பேனியன் (வடக்கு மாசிடோனியா)'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (மகாவ் எஸ்ஏஆர் சீனா)'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (மௌரிடானியா)'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (மாலத்தீவு)'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (நேபாளம்)'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (பாகிஸ்தான்)'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (சூடான்)'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (தெற்கு சூடான்)'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'ta-IN',
			language_name: 'குர்திஷ் (சிரியா)'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (சாட்)'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (தாய்லாந்து)'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (டுனிசியா)'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'ta-IN',
			language_name: 'போலிஷ் (உக்ரைன்)'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'ta-IN',
			language_name: 'ஆங்கிலம் (ஏமன்)'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (லெபனான்)'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'ta-IN',
			language_name: 'ஜெர்மன் (லிச்செண்ஸ்டெய்ன்)'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'ta-IN',
			language_name: 'தெற்கு ஸோதோ (லெசோதோ)'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (லக்ஸ்சம்பர்க்)'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (லிபியா)'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (மொராக்கோ)'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (மொனாக்கோ)'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'ta-IN',
			language_name: 'மோல்டாவியன்'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (செயின்ட் மார்ட்டீன்)'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (மகாவ் எஸ்ஏஆர் சீனா)'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (மார்டினிக்)'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (மௌரிடானியா)'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (மொரிசியஸ்)'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'ta-IN',
			language_name: 'மெக்ஸிகன் ஸ்பானிஷ்'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'ta-IN',
			language_name: 'போர்ச்சுகீஸ் (மொசாம்பிக்)'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'ta-IN',
			language_name: 'ஆஃப்ரிகான்ஸ் (நமீபியா)'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (நியூ கேலிடோனியா)'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'ta-IN',
			language_name: 'ஹௌஸா (நைஜர்)'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (நிகரகுவா)'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (ஓமன்)'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (பனாமா)'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (பெரு)'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (பிரெஞ்சு பாலினேஷியா)'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (செயின்ட் பியர் & மிக்வேலான்)'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (பியூர்டோ ரிகோ)'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (பாலஸ்தீனிய பிரதேசங்கள்)'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'ta-IN',
			language_name: 'ஐரோப்பிய போர்ச்சுகீஸ்'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (கத்தார்)'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (ரீயூனியன்)'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (சவுதி அரேபியா)'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (சீஷெல்ஸ்)'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (சூடான்)'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'ta-IN',
			language_name: 'நார்வேஜியன் பொக்மால் (ஸ்வல்பார்டு & ஜான் மேயன்)'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'ta-IN',
			language_name: 'இத்தாலியன் (சான் மரினோ)'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'ta-IN',
			language_name: 'டச்சு (சுரினாம்)'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (தெற்கு சூடான்)'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'ta-IN',
			language_name: 'போர்ச்சுகீஸ் (சாவ் தோம் & ப்ரின்சிபி)'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (எல் சால்வடார்)'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (சிரியா)'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (சாட்)'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (பிரெஞ்சு தெற்கு பிரதேசங்கள்)'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'ta-IN',
			language_name: 'ஸ்டாண்டர்ட் மொராக்கன் தமாசைட் (மொராக்கோ)'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (டோகோ)'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'ta-IN',
			language_name: 'போர்ச்சுகீஸ் (திமோர்-லெஸ்தே)'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (டுனிசியா)'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'ta-IN',
			language_name: 'ஸ்வாஹிலி (உகாண்டா)'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (உருகுவே)'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'ta-IN',
			language_name: 'இத்தாலியன் (வாடிகன் நகரம்)'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'ta-IN',
			language_name: 'வை (லைபீரியா)'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'ta-IN',
			language_name: 'ஸ்பானிஷ் (வெனிசுலா)'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'ta-IN',
			language_name: 'வியட்நாமீஸ் (வியட்நாம்)'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (வாலிஸ் மற்றும் ஃபுடுனா)'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'ta-IN',
			language_name: 'அரபிக் (ஏமன்)'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'ta-IN',
			language_name: 'பிரெஞ்சு (மயோட்)'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'ta-IN',
			language_name: 'உஸ்பெக் (ஆஃப்கானிஸ்தான்)'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'ta-IN',
			language_name: 'உஸ்பெக் (சீனா)'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'ta-IN',
			language_name: 'வென்டா (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'ta-IN',
			language_name: 'வினிசியன் (இத்தாலி)'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'ta-IN',
			language_name: 'Veps'
		},
		{
			locale_code: 'vls-BE',
			locale_id: 'ta-IN',
			language_name: 'மேற்கு ஃப்ளெமிஷ்'
		},
		{
			locale_code: 'vmf-DE',
			locale_id: 'ta-IN',
			language_name: 'பிரதான-பிரான்கோனியன்'
		},
		{
			locale_code: 'vmw-MZ',
			locale_id: 'ta-IN',
			language_name: 'மகுவா (மொசாம்பிக்)'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'ta-IN',
			language_name: 'வோட்க் (ரஷ்யா)'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'ta-IN',
			language_name: 'வோரோ'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'ta-IN',
			language_name: 'வுன்ஜோ (தான்சானியா)'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'ta-IN',
			language_name: 'ஒவாலூன் (பெல்ஜியம்)'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'ta-IN',
			language_name: 'வால்சேர் (ஸ்விட்சர்லாந்து)'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'ta-IN',
			language_name: 'வோலாய்ட்டா (எத்தியோப்பியா)'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'ta-IN',
			language_name: 'வாரே (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'was-US',
			locale_id: 'ta-IN',
			language_name: 'வாஷோ (அமெரிக்கா)'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'ta-IN',
			language_name: 'வல்பிரி (ஆஸ்திரேலியா)'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'ta-IN',
			language_name: 'வூ சீனம் (சீனா)'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'ta-IN',
			language_name: 'கல்மிக் (ரஷ்யா)'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'ta-IN',
			language_name: 'ஹோசா (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'ta-IN',
			language_name: 'மிங்ரேலியன்'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'ta-IN',
			language_name: 'காங்கிரி (இந்தியா)'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'ta-IN',
			language_name: 'சோகா (உகாண்டா)'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'ta-IN',
			language_name: 'யாவ் (மொசாம்பிக்)'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'ta-IN',
			language_name: 'யாபேசே (மைக்ரோனேஷியா)'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'ta-IN',
			language_name: 'யாங்பென் (கேமரூன்)'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'ta-IN',
			language_name: 'யெம்பா (கேமரூன்)'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'ta-IN',
			language_name: 'யோருபா (நைஜீரியா)'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'ta-IN',
			language_name: 'நஹீன்கட்டு (பிரேசில்)'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'ta-IN',
			language_name: 'காண்டோனீஸ் (ஹாங்காங் எஸ்ஏஆர் சீனா)'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'ta-IN',
			language_name: 'ஜாபோடெக் (மெக்சிகோ)'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'ta-IN',
			language_name: 'ஜீலாண்டிக்'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'ta-IN',
			language_name: 'ஜெனகா (மௌரிடானியா)'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (ஆஸ்திரேலியா)'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (புருனே)'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (யுனைடெட் கிங்டம்)'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (பிரெஞ்சு கயானா)'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (இந்தோனேசியா)'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (பனாமா)'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (பிரெஞ்சு பாலினேஷியா)'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (பிலிப்பைன்ஸ்)'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (சுரினாம்)'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (தாய்லாந்து)'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (அமெரிக்கா)'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'ta-IN',
			language_name: 'சீனம் (வியட்நாம்)'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'ta-IN',
			language_name: 'ஜுலு (தென் ஆப்பிரிக்கா)'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'ta-IN',
			language_name: 'ஜூனி (அமெரிக்கா)'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'ta-IN',
			language_name: 'ஜாஜா (துருக்கியே)'
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
