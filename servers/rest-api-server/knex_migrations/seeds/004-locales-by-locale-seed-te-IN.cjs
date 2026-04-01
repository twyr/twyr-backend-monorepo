/* eslint-disable security/detect-object-injection */
/**
 * Static seed for locale_by_locale with te-IN locale data
 *
 * This is a static version of the seed that includes pre-generated
 * locale names (language + country) for the te-IN locale.
 *
 * This seed depends on:
 * - 002-locales-seed.cjs (populates locale_master)
 *
 * @category REST API Server/Data
 * @subcategory Seed Data
 */

exports.seed = async function (knex) {
	console.log('Processing 004-locales-by-locale-seed-te-IN.cjs');
	const now = knex.fn.now();

	// Check if data already exists to skip re-seeding
	const byLocaleCount = await knex?.raw?.(
		`SELECT count(*) AS cnt FROM locale_by_locale WHERE locale_id = 'te-IN'`
	);
	if (Number?.(byLocaleCount?.rows?.[0]?.cnt) > 0) return;

	// Static data for te-IN locale
	const rows = [
		{
			locale_code: 'aa-ET',
			locale_id: 'te-IN',
			language_name: 'అఫార్'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'te-IN',
			language_name: 'అబ్ఖాజియన్'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'te-IN',
			language_name: 'ఆఖినీస్'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'te-IN',
			language_name: 'అకోలి'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'te-IN',
			language_name: 'అడాంగ్మే'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'te-IN',
			language_name: 'అడిగాబ్జే'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'te-IN',
			language_name: 'అవేస్టాన్'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'te-IN',
			language_name: 'టునీషియా అరబిక్'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'te-IN',
			language_name: 'ఆఫ్రికాన్స్'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'te-IN',
			language_name: 'అఫ్రిహిలి'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'te-IN',
			language_name: 'అగేమ్'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'te-IN',
			language_name: 'ఐను'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'te-IN',
			language_name: 'అకాన్'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'te-IN',
			language_name: 'అక్కాడియాన్'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'te-IN',
			language_name: 'అలబామా'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'te-IN',
			language_name: 'అలియుట్'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ ఆల్టై'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'te-IN',
			language_name: 'అమ్హారిక్'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'te-IN',
			language_name: 'అరగోనిస్'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ఆంగ్లం'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'te-IN',
			language_name: 'ఒబోలో'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'te-IN',
			language_name: 'ఆంగిక'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'te-IN',
			language_name: 'అరామైక్'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'te-IN',
			language_name: 'అరామైక్'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'te-IN',
			language_name: 'అరామైక్'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'te-IN',
			language_name: 'అరామైక్'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'te-IN',
			language_name: 'మపుచే'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'te-IN',
			language_name: 'అరోనా'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'te-IN',
			language_name: 'అరాపాహో'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'te-IN',
			language_name: 'అల్జీరియన్ అరబిక్'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'te-IN',
			language_name: 'నజ్ది అరబిక్'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'te-IN',
			language_name: 'అరావాక్'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'te-IN',
			language_name: 'మొరాకో అరబిక్'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'te-IN',
			language_name: 'ఈజిప్షియన్ అరబిక్'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'te-IN',
			language_name: 'అస్సామీస్'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'te-IN',
			language_name: 'అసు'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'te-IN',
			language_name: 'అమెరికన్ సంకేత భాష'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'te-IN',
			language_name: 'ఆస్టూరియన్'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'te-IN',
			language_name: 'అతికామెక్వ'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'te-IN',
			language_name: 'అవారిక్'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'te-IN',
			language_name: 'అవధి'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'te-IN',
			language_name: 'ఐమారా'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'te-IN',
			language_name: 'అజర్బైజాని'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'te-IN',
			language_name: 'అజర్బైజాని'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'te-IN',
			language_name: 'అజర్బైజాని'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'te-IN',
			language_name: 'అజర్బైజాని'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'te-IN',
			language_name: 'బాష్కిర్'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'te-IN',
			language_name: 'బలూచి'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'te-IN',
			language_name: 'బాలినీస్'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'te-IN',
			language_name: 'బవేరియన్'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'te-IN',
			language_name: 'బసా'
		},
		{
			locale_code: 'bax-CM',
			locale_id: 'te-IN',
			language_name: 'బామున్'
		},
		{
			locale_code: 'bbc-ID',
			locale_id: 'te-IN',
			language_name: 'బటక్ తోబా'
		},
		{
			locale_code: 'bbj-CM',
			locale_id: 'te-IN',
			language_name: 'ఘోమల'
		},
		{
			locale_code: 'be-BY',
			locale_id: 'te-IN',
			language_name: 'బెలారుషియన్'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'te-IN',
			language_name: 'బేజా'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'te-IN',
			language_name: 'బెంబా'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'te-IN',
			language_name: 'బెటావి'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'te-IN',
			language_name: 'బెనా'
		},
		{
			locale_code: 'bfd-CM',
			locale_id: 'te-IN',
			language_name: 'బఫుట్'
		},
		{
			locale_code: 'bfq-IN',
			locale_id: 'te-IN',
			language_name: 'బడగ'
		},
		{
			locale_code: 'bg-BG',
			locale_id: 'te-IN',
			language_name: 'బల్గేరియన్'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'te-IN',
			language_name: 'హర్యాన్వి'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ బలూచీ'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'te-IN',
			language_name: 'భోజ్‌పురి'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'te-IN',
			language_name: 'బిస్లామా'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'te-IN',
			language_name: 'బికోల్'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'te-IN',
			language_name: 'బిని'
		},
		{
			locale_code: 'bjn-ID',
			locale_id: 'te-IN',
			language_name: 'బంజర్'
		},
		{
			locale_code: 'bkm-CM',
			locale_id: 'te-IN',
			language_name: 'కోమ్'
		},
		{
			locale_code: 'bla-CA',
			locale_id: 'te-IN',
			language_name: 'సిక్సికా'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'te-IN',
			language_name: 'అని'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'te-IN',
			language_name: 'తాయ్ ఆనకట్ట'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'te-IN',
			language_name: 'బంబారా'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'te-IN',
			language_name: 'బంగ్లా'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'te-IN',
			language_name: 'టిబెటన్'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'te-IN',
			language_name: 'బిష్ణుప్రియ'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'te-IN',
			language_name: 'భక్తియారీ'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'te-IN',
			language_name: 'బ్రెటన్'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'te-IN',
			language_name: 'బ్రాజ్'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'te-IN',
			language_name: 'బ్రాహుయ్'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'te-IN',
			language_name: 'బోడో'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'te-IN',
			language_name: 'బోస్నియన్'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'te-IN',
			language_name: 'అకూస్'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'te-IN',
			language_name: 'బురియట్'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'te-IN',
			language_name: 'బుగినీస్'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'te-IN',
			language_name: 'బులు'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'te-IN',
			language_name: 'బ్లిన్'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'te-IN',
			language_name: 'మేడుంబ'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'te-IN',
			language_name: 'కాటలాన్'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'te-IN',
			language_name: 'కేడ్డో'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'te-IN',
			language_name: 'కేరిబ్'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'te-IN',
			language_name: 'సేయుగా'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'te-IN',
			language_name: 'అట్సామ్'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'te-IN',
			language_name: 'చక్మా'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'te-IN',
			language_name: 'చెచెన్'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'te-IN',
			language_name: 'సెబువానో'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'te-IN',
			language_name: 'చిగా'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'te-IN',
			language_name: 'చమర్రో'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'te-IN',
			language_name: 'చిబ్చా'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'te-IN',
			language_name: 'చాగటై'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'te-IN',
			language_name: 'చూకీస్'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'te-IN',
			language_name: 'మారి'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'te-IN',
			language_name: 'చినూక్ జార్గన్'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'te-IN',
			language_name: 'చక్టా'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'te-IN',
			language_name: 'చిపెవ్యాన్'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'te-IN',
			language_name: 'చెరోకీ'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'te-IN',
			language_name: 'చేయేన్'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'te-IN',
			language_name: 'చికాసా'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'te-IN',
			language_name: 'సెంట్రల్ కర్డిష్'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'te-IN',
			language_name: 'చిల్కటిన్'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'te-IN',
			language_name: 'కోర్సికన్'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'te-IN',
			language_name: 'కోప్టిక్'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'te-IN',
			language_name: 'కాపిజ్నోన్'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'te-IN',
			language_name: 'క్రి'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'te-IN',
			language_name: 'మిచిఫ్'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'te-IN',
			language_name: 'క్రిమియన్ టర్కిష్'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ తూర్పు క్రీ'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'te-IN',
			language_name: 'ప్లెయిన్స్ క్రీ'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర తూర్పు క్రీ'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'te-IN',
			language_name: 'మూస్ క్రీ'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'te-IN',
			language_name: 'సెసేల్వా క్రియోల్ ఫ్రెంచ్'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'te-IN',
			language_name: 'చెక్'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'te-IN',
			language_name: 'కషుబియన్'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'te-IN',
			language_name: 'స్వాంపీ క్రీ'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'te-IN',
			language_name: 'చర్చ్ స్లావిక్'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'te-IN',
			language_name: 'చర్చ్ స్లావిక్'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'te-IN',
			language_name: 'చువాష్'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'te-IN',
			language_name: 'వెల్ష్'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'te-IN',
			language_name: 'డానిష్'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'te-IN',
			language_name: 'డకోటా'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'te-IN',
			language_name: 'డార్గ్వా'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'te-IN',
			language_name: 'టైటా'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'te-IN',
			language_name: 'జర్మన్'
		},
		{
			locale_code: 'del-US',
			locale_id: 'te-IN',
			language_name: 'డెలావేర్'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'te-IN',
			language_name: 'స్లేవ్'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'te-IN',
			language_name: 'డోగ్రిబ్'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'te-IN',
			language_name: 'డింకా'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'te-IN',
			language_name: 'జార్మా'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'te-IN',
			language_name: 'డోగ్రి'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'te-IN',
			language_name: 'లోయర్ సోర్బియన్'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'te-IN',
			language_name: 'సెంట్రల్ డుసున్'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'te-IN',
			language_name: 'డ్యూలా'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ డచ్'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'te-IN',
			language_name: 'దివేహి'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'te-IN',
			language_name: 'జోలా-ఫోనయి'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'te-IN',
			language_name: 'డ్యులా'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'te-IN',
			language_name: 'జోంఖా'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'te-IN',
			language_name: 'డాజాగా'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'te-IN',
			language_name: 'ఇంబు'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'te-IN',
			language_name: 'యూ'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'te-IN',
			language_name: 'ఎఫిక్'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'te-IN',
			language_name: 'ఎమిలియన్'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ఈజిప్షియన్'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'te-IN',
			language_name: 'ఏకాజక్'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'te-IN',
			language_name: 'గ్రీక్'
		},
		{
			locale_code: 'en-US',
			locale_id: 'te-IN',
			language_name: 'అమెరికన్ ఇంగ్లీష్'
		},
		{
			locale_code: 'en-GB',
			locale_id: 'te-IN',
			language_name: 'బ్రిటిష్ ఇంగ్లీష్'
		},
		{
			locale_code: 'en-IN',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ ఆంగ్లం'
		},
		{
			locale_code: 'es-ES',
			locale_id: 'te-IN',
			language_name: 'యూరోపియన్ స్పానిష్'
		},
		{
			locale_code: 'esu-US',
			locale_id: 'te-IN',
			language_name: 'సెంట్రల్ యుపిక్'
		},
		{
			locale_code: 'et-EE',
			locale_id: 'te-IN',
			language_name: 'ఎస్టోనియన్'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'te-IN',
			language_name: 'బాస్క్యూ'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'te-IN',
			language_name: 'ఎవోండొ'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'te-IN',
			language_name: 'విపరీతమైన'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'te-IN',
			language_name: 'పర్షియన్'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'te-IN',
			language_name: 'ఫాంగ్'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'te-IN',
			language_name: 'ఫూలా'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'te-IN',
			language_name: 'ఫూలా'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'te-IN',
			language_name: 'ఫిన్నిష్'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'te-IN',
			language_name: 'ఫిలిపినో'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'te-IN',
			language_name: 'టోర్నెడలెన్ ఫిన్నిష్'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'te-IN',
			language_name: 'ఫిజియన్'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'te-IN',
			language_name: 'ఫారోస్'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'te-IN',
			language_name: 'ఫాన్'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'te-IN',
			language_name: 'కాజున్ ఫ్రెంచ్'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ ప్రెంచ్'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ఫ్రెంచ్'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'te-IN',
			language_name: 'అర్పితన్'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర ఫ్రిసియన్'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'te-IN',
			language_name: 'తూర్పు ఫ్రిసియన్'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'te-IN',
			language_name: 'ఫ్రియులియన్'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ ఫ్రిసియన్'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'te-IN',
			language_name: 'ఐరిష్'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'te-IN',
			language_name: 'గా'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'te-IN',
			language_name: 'గాగౌజ్'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'te-IN',
			language_name: 'గాన్ చైనీస్'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'te-IN',
			language_name: 'గాయో'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'te-IN',
			language_name: 'గ్బాయా'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'te-IN',
			language_name: 'జొరాస్ట్రియన్ డారి'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'te-IN',
			language_name: 'స్కాటిష్ గేలిక్'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'te-IN',
			language_name: 'జీజ్'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'te-IN',
			language_name: 'గిల్బర్టీస్'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'te-IN',
			language_name: 'గాలిషియన్'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'te-IN',
			language_name: 'గిలాకి'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ హై జర్మన్'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'te-IN',
			language_name: 'గ్వారనీ'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన హై జర్మన్'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'te-IN',
			language_name: 'గోండి'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'te-IN',
			language_name: 'గోరోంటలా'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'te-IN',
			language_name: 'గోథిక్'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'te-IN',
			language_name: 'గ్రేబో'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన గ్రీక్'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'te-IN',
			language_name: 'స్విస్ జర్మన్'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'te-IN',
			language_name: 'గుజరాతీ'
		},
		{
			locale_code: 'guc-CO',
			locale_id: 'te-IN',
			language_name: 'వాయువు'
		},
		{
			locale_code: 'gur-GH',
			locale_id: 'te-IN',
			language_name: 'ఫ్రాఫ్రా'
		},
		{
			locale_code: 'guz-KE',
			locale_id: 'te-IN',
			language_name: 'గుస్సీ'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'te-IN',
			language_name: 'మాంక్స్'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'te-IN',
			language_name: 'గ్విచిన్'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'te-IN',
			language_name: 'హౌసా'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'te-IN',
			language_name: 'హౌసా'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'te-IN',
			language_name: 'హౌసా'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'te-IN',
			language_name: 'హైడా'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'te-IN',
			language_name: 'హక్కా చైనీస్'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'te-IN',
			language_name: 'హక్కా చైనీస్'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'te-IN',
			language_name: 'హవాయియన్'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ హైదా'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'te-IN',
			language_name: 'హీబ్రూ'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'te-IN',
			language_name: 'హిందీ'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'te-IN',
			language_name: 'ఫిజీ హిందీ'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'te-IN',
			language_name: 'హిలిగెనాన్'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'te-IN',
			language_name: 'హిట్టిటే'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'te-IN',
			language_name: 'మోంగ్'
		},
		{
			locale_code: 'hnj-US',
			locale_id: 'te-IN',
			language_name: 'మోంగ్ న్జువా'
		},
		{
			locale_code: 'hnj-LA',
			locale_id: 'te-IN',
			language_name: 'మోంగ్ న్జువా'
		},
		{
			locale_code: 'ho-PG',
			locale_id: 'te-IN',
			language_name: 'హిరి మోటు'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'te-IN',
			language_name: 'క్రొయేషియన్'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'te-IN',
			language_name: 'అప్పర్ సోర్బియన్'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'te-IN',
			language_name: 'జియాంగ్ చైనీస్'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'te-IN',
			language_name: 'హైటియన్ క్రియోల్'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'te-IN',
			language_name: 'హంగేరియన్'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'te-IN',
			language_name: 'హుపా'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'te-IN',
			language_name: 'హల్కోమెలెమ్'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'te-IN',
			language_name: 'ఆర్మీనియన్'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'te-IN',
			language_name: 'హెరెరో'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'te-IN',
			language_name: 'ఐబాన్'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'te-IN',
			language_name: 'ఇబిబియో'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'te-IN',
			language_name: 'ఇండోనేషియన్'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'te-IN',
			language_name: 'ఇంటర్లింగ్'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'te-IN',
			language_name: 'ఇగ్బో'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'te-IN',
			language_name: 'శిషువన్ ఈ'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'te-IN',
			language_name: 'ఇనుపైయాక్'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ కెనేడియన్ ఇన్నూక్‌టిటూట్'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'te-IN',
			language_name: 'ఐలోకో'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'te-IN',
			language_name: 'ఇంగుష్'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'te-IN',
			language_name: 'ఐస్లాండిక్'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'te-IN',
			language_name: 'ఇటాలియన్'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'te-IN',
			language_name: 'ఇనుక్టిటుట్'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్రియన్'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'te-IN',
			language_name: 'జపనీస్'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'te-IN',
			language_name: 'జమైకన్ క్రియోల్ ఇంగ్లీష్'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'te-IN',
			language_name: 'గోంబా'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'te-IN',
			language_name: 'మకొమ్'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'te-IN',
			language_name: 'జ్యుడియో-పర్షియన్'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'te-IN',
			language_name: 'జ్యుడియో-అరబిక్'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'te-IN',
			language_name: 'జుటిష్'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'te-IN',
			language_name: 'జావనీస్'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'te-IN',
			language_name: 'జార్జియన్'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'te-IN',
			language_name: 'కారా-కల్పాక్'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'te-IN',
			language_name: 'కాబిల్'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'te-IN',
			language_name: 'కాచిన్'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'te-IN',
			language_name: 'జ్యూ'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'te-IN',
			language_name: 'కంబా'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'te-IN',
			language_name: 'కావి'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'te-IN',
			language_name: 'కబార్డియన్'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'te-IN',
			language_name: 'కనెంబు'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'te-IN',
			language_name: 'ట్యాప్'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'te-IN',
			language_name: 'మకొండే'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'te-IN',
			language_name: 'కాబువేర్దియను'
		},
		{
			locale_code: 'kek-GT',
			locale_id: 'te-IN',
			language_name: 'Qʼeqchiʼ'
		},
		{
			locale_code: 'ken-CM',
			locale_id: 'te-IN',
			language_name: 'కెన్యాంగ్'
		},
		{
			locale_code: 'kfo-CI',
			locale_id: 'te-IN',
			language_name: 'కోరో'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'te-IN',
			language_name: 'కోంగో'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'te-IN',
			language_name: 'కైన్‌గ్యాంగ్'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'te-IN',
			language_name: 'ఖాసి'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'te-IN',
			language_name: 'ఖోటనీస్'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'te-IN',
			language_name: 'కొయరా చీన్నీ'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'te-IN',
			language_name: 'ఖోవార్'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'te-IN',
			language_name: 'కికుయు'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'te-IN',
			language_name: 'కిర్మంజ్కి'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'te-IN',
			language_name: 'క్వాన్యామ'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'te-IN',
			language_name: 'కజఖ్'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'te-IN',
			language_name: 'కజఖ్'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'te-IN',
			language_name: 'కజఖ్'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'te-IN',
			language_name: 'కజఖ్'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'te-IN',
			language_name: 'కజఖ్'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'te-IN',
			language_name: 'కాకో'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'te-IN',
			language_name: 'కలాల్లిసూట్'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'te-IN',
			language_name: 'కలెంజిన్'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'te-IN',
			language_name: 'ఖ్మేర్'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'te-IN',
			language_name: 'కిమ్బుండు'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'te-IN',
			language_name: 'కన్నడ'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'te-IN',
			language_name: 'కొరియన్'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'te-IN',
			language_name: 'కోమి-పర్మాక్'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'te-IN',
			language_name: 'కొంకణి'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'te-IN',
			language_name: 'కోస్రేయన్'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'te-IN',
			language_name: 'పెల్లే'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'te-IN',
			language_name: 'కానురి'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'te-IN',
			language_name: 'కరచే-బల్కార్'
		},
		{
			locale_code: 'kri-SL',
			locale_id: 'te-IN',
			language_name: 'క్రియో'
		},
		{
			locale_code: 'krj-PH',
			locale_id: 'te-IN',
			language_name: 'కినారయ్-ఎ'
		},
		{
			locale_code: 'krl-RU',
			locale_id: 'te-IN',
			language_name: 'కరేలియన్'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'te-IN',
			language_name: 'కూరుఖ్'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'te-IN',
			language_name: 'కాశ్మీరి'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'te-IN',
			language_name: 'శంబాలా'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'te-IN',
			language_name: 'బాఫియ'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'te-IN',
			language_name: 'కొలోనియన్'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'te-IN',
			language_name: 'కుమ్యిక్'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'te-IN',
			language_name: 'కుటేనై'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'te-IN',
			language_name: 'కోమి'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'te-IN',
			language_name: 'కోర్నిష్'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'te-IN',
			language_name: 'క్వాక్‌వాలా'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'te-IN',
			language_name: 'కువి'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'te-IN',
			language_name: 'కిర్గిజ్'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'te-IN',
			language_name: 'కిర్గిజ్'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'te-IN',
			language_name: 'కిర్గిజ్'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'te-IN',
			language_name: 'లాటిన్'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'te-IN',
			language_name: 'లాడినో'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'te-IN',
			language_name: 'లాంగీ'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'te-IN',
			language_name: 'లాహండా'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'te-IN',
			language_name: 'లాంబా'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'te-IN',
			language_name: 'లక్సెంబర్గిష్'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'te-IN',
			language_name: 'లేజ్ఘియన్'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'te-IN',
			language_name: 'గాండా'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'te-IN',
			language_name: 'లిమ్బర్గిష్'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'te-IN',
			language_name: 'లిగూరియన్'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'te-IN',
			language_name: 'లిలూయెట్'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'te-IN',
			language_name: 'లివోనియన్'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'te-IN',
			language_name: 'లకొటా'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'te-IN',
			language_name: 'లొంబార్ద్'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'te-IN',
			language_name: 'లింగాల'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'te-IN',
			language_name: 'లావో'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'te-IN',
			language_name: 'మొంగో'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'te-IN',
			language_name: 'లూసియానా క్రియోల్'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'te-IN',
			language_name: 'లోజి'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర లూరీ'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'te-IN',
			language_name: 'సామియా'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'te-IN',
			language_name: 'లిథువేనియన్'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'te-IN',
			language_name: 'లాట్గాలియన్'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'te-IN',
			language_name: 'లూబ-కటాంగ'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'te-IN',
			language_name: 'లుబా-లులువ'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'te-IN',
			language_name: 'లుయిసెనో'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'te-IN',
			language_name: 'లుండా'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'te-IN',
			language_name: 'లువో'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'te-IN',
			language_name: 'మిజో'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'te-IN',
			language_name: 'లుయియ'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'te-IN',
			language_name: 'లాట్వియన్'
		},
		{
			locale_code: 'lzh-CN',
			locale_id: 'te-IN',
			language_name: 'సాహిత్య చైనీస్'
		},
		{
			locale_code: 'lzz-TR',
			locale_id: 'te-IN',
			language_name: 'లాజ్'
		},
		{
			locale_code: 'lzz-GE',
			locale_id: 'te-IN',
			language_name: 'లాజ్'
		},
		{
			locale_code: 'mad-ID',
			locale_id: 'te-IN',
			language_name: 'మాదురీస్'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'te-IN',
			language_name: 'మాఫా'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'te-IN',
			language_name: 'మగాహి'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'te-IN',
			language_name: 'మైథిలి'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'te-IN',
			language_name: 'మకాసార్'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'te-IN',
			language_name: 'మండింగో'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'te-IN',
			language_name: 'మండింగో'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'te-IN',
			language_name: 'మాసై'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'te-IN',
			language_name: 'మాబా'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'te-IN',
			language_name: 'మోక్ష'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'te-IN',
			language_name: 'మండార్'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'te-IN',
			language_name: 'మెండే'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'te-IN',
			language_name: 'మెరు'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'te-IN',
			language_name: 'మొరిస్యేన్'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'te-IN',
			language_name: 'మలగాసి'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ ఐరిష్'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'te-IN',
			language_name: 'మక్వా-మిట్టో'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'te-IN',
			language_name: 'మెటా'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'te-IN',
			language_name: 'మార్షలీస్'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'te-IN',
			language_name: 'మావొరీ'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'te-IN',
			language_name: 'మికమాక్'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'te-IN',
			language_name: 'మినాంగ్‌కాబో'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'te-IN',
			language_name: 'మాసిడోనియన్'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'te-IN',
			language_name: 'మలయాళం'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'te-IN',
			language_name: 'మంగోలియన్'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'te-IN',
			language_name: 'మంగోలియన్'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'te-IN',
			language_name: 'మంచు'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'te-IN',
			language_name: 'మణిపురి'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'te-IN',
			language_name: 'ఇన్ను-ఐమున్'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'te-IN',
			language_name: 'మోహాక్'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'te-IN',
			language_name: 'మోస్సి'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'te-IN',
			language_name: 'మరాఠీ'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ మారి'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'te-IN',
			language_name: 'మలయ్'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'te-IN',
			language_name: 'మలయ్'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'te-IN',
			language_name: 'మాల్టీస్'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'te-IN',
			language_name: 'మండాంగ్'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'te-IN',
			language_name: 'క్రీక్'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'te-IN',
			language_name: 'మిరాండిస్'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'te-IN',
			language_name: 'మార్వాడి'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'te-IN',
			language_name: 'మెంటావై'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'te-IN',
			language_name: 'బర్మీస్'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'te-IN',
			language_name: 'మైనే'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'te-IN',
			language_name: 'ఎర్జియా'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'te-IN',
			language_name: 'మాసన్‌దెరాని'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'te-IN',
			language_name: 'నౌరు'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'te-IN',
			language_name: 'మిన్ నాన్ చైనీస్'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'te-IN',
			language_name: 'మిన్ నాన్ చైనీస్'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'te-IN',
			language_name: 'మిన్ నాన్ చైనీస్'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'te-IN',
			language_name: 'నియాపోలిటన్'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'te-IN',
			language_name: 'నమ'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'te-IN',
			language_name: 'నార్వేజియన్ బొక్మాల్'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర దెబెలె'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'te-IN',
			language_name: 'లో జర్మన్'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'te-IN',
			language_name: 'నేపాలీ'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'te-IN',
			language_name: 'నెవారి'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'te-IN',
			language_name: 'డోంగా'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'te-IN',
			language_name: 'నియాస్'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'te-IN',
			language_name: 'నియాన్'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'te-IN',
			language_name: 'అయో నాగా'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'te-IN',
			language_name: 'డచ్'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'te-IN',
			language_name: 'క్వాసియె'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'te-IN',
			language_name: 'నార్వేజియాన్ న్యోర్స్క్'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'te-IN',
			language_name: 'గింబూన్'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'te-IN',
			language_name: 'నార్వేజియన్'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'te-IN',
			language_name: 'నోగై'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'te-IN',
			language_name: 'ప్రాచిన నోర్స్'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'te-IN',
			language_name: 'న్కో'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ దెబెలె'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర సోతో'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'te-IN',
			language_name: 'న్యుర్'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'te-IN',
			language_name: 'నవాజొ'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'te-IN',
			language_name: 'సాంప్రదాయ న్యూయారీ'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'te-IN',
			language_name: 'న్యాన్జా'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'te-IN',
			language_name: 'న్యంవేజి'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'te-IN',
			language_name: 'న్యాన్కోలె'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'te-IN',
			language_name: 'నేయోరో'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'te-IN',
			language_name: 'జీమా'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'te-IN',
			language_name: 'ఆక్సిటన్'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'te-IN',
			language_name: 'చేవా'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'te-IN',
			language_name: 'వాయువ్య ఓజిబ్వా'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'te-IN',
			language_name: 'సెంట్రల్ ఓజిబ్వా'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'te-IN',
			language_name: 'ఓజి-క్రీ'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ ఓజిబ్వా'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'te-IN',
			language_name: 'ఒకానగన్'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'te-IN',
			language_name: 'ఒరోమో'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'te-IN',
			language_name: 'ఒడియా'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'te-IN',
			language_name: 'ఒసేటిక్'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'te-IN',
			language_name: 'ఒసాజ్'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'te-IN',
			language_name: 'ఒట్టోమన్ టర్కిష్'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'te-IN',
			language_name: 'పంజాబీ'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'te-IN',
			language_name: 'పంజాబీ'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'te-IN',
			language_name: 'పంగాసినాన్'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'te-IN',
			language_name: 'పహ్లావి'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'te-IN',
			language_name: 'పహ్లావి'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'te-IN',
			language_name: 'పంపన్గా'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'te-IN',
			language_name: 'పపియమేంటో'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'te-IN',
			language_name: 'పలావెన్'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'te-IN',
			language_name: 'పికార్డ్'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'te-IN',
			language_name: 'నైజీరియన్ పిడ్గిన్'
		},
		{
			locale_code: 'pdc-US',
			locale_id: 'te-IN',
			language_name: 'పెన్సిల్వేనియా జర్మన్'
		},
		{
			locale_code: 'pdt-CA',
			locale_id: 'te-IN',
			language_name: 'ప్లౌట్డీట్ష్'
		},
		{
			locale_code: 'peo-IR',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన పర్షియన్'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'te-IN',
			language_name: 'పాలటైన్ జర్మన్'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'te-IN',
			language_name: 'ఫోనికన్'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'te-IN',
			language_name: 'పాలీ'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'te-IN',
			language_name: 'పాలీ'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'te-IN',
			language_name: 'పాలీ'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'te-IN',
			language_name: 'పాలీ'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'te-IN',
			language_name: 'పాలీ'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'te-IN',
			language_name: 'పిజిన్'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'te-IN',
			language_name: 'పోలిష్'
		},
		{
			locale_code: 'pms-IT',
			locale_id: 'te-IN',
			language_name: 'పీడ్మోంటెస్'
		},
		{
			locale_code: 'pnt-GR',
			locale_id: 'te-IN',
			language_name: 'పాంటిక్'
		},
		{
			locale_code: 'pnt-RU',
			locale_id: 'te-IN',
			language_name: 'పాంటిక్'
		},
		{
			locale_code: 'pnt-TR',
			locale_id: 'te-IN',
			language_name: 'పాంటిక్'
		},
		{
			locale_code: 'pon-FM',
			locale_id: 'te-IN',
			language_name: 'పోహ్న్పెయన్'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'te-IN',
			language_name: 'మలిసీట్-పస్సమాక్వొడ్డీ'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'te-IN',
			language_name: 'ప్రష్యన్'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ప్రోవెంసాల్'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'te-IN',
			language_name: 'పాష్టో'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'te-IN',
			language_name: 'బ్రెజీలియన్ పోర్చుగీస్'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'te-IN',
			language_name: 'కెచువా'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'te-IN',
			language_name: 'కిచే'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'te-IN',
			language_name: 'చింబోరాజో హైలాండ్ క్విచువా'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'te-IN',
			language_name: 'రాజస్తానీ'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'te-IN',
			language_name: 'రాపన్యుయి'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'te-IN',
			language_name: 'రారోటొంగాన్'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'te-IN',
			language_name: 'రోమాగ్నోల్'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'te-IN',
			language_name: 'రోహింగ్యా'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'te-IN',
			language_name: 'రిఫియన్'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'te-IN',
			language_name: 'రోమన్ష్'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'te-IN',
			language_name: 'రుండి'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'te-IN',
			language_name: 'రొమేనియన్'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'te-IN',
			language_name: 'రోంబో'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'te-IN',
			language_name: 'రోమానీ'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'te-IN',
			language_name: 'రోటుమాన్'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'te-IN',
			language_name: 'రష్యన్'
		},
		{
			locale_code: 'rue-UA',
			locale_id: 'te-IN',
			language_name: 'రుసిన్'
		},
		{
			locale_code: 'rug-SB',
			locale_id: 'te-IN',
			language_name: 'రోవియానా'
		},
		{
			locale_code: 'rup-RO',
			locale_id: 'te-IN',
			language_name: 'ఆరోమేనియన్'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'te-IN',
			language_name: 'కిన్యర్వాండా'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'te-IN',
			language_name: 'ర్వా'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'te-IN',
			language_name: 'సంస్కృతం'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'te-IN',
			language_name: 'సండావి'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'te-IN',
			language_name: 'సాఖా'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'te-IN',
			language_name: 'సమారిటన్ అరామైక్'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'te-IN',
			language_name: 'సంబురు'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'te-IN',
			language_name: 'ససక్'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'te-IN',
			language_name: 'సంతాలి'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'te-IN',
			language_name: 'సౌరాష్ట్ర'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'te-IN',
			language_name: 'గాంబే'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'te-IN',
			language_name: 'సాంగు'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'te-IN',
			language_name: 'సార్డీనియన్'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'te-IN',
			language_name: 'సిసిలియన్'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'te-IN',
			language_name: 'స్కాట్స్'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'te-IN',
			language_name: 'సింధీ'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'te-IN',
			language_name: 'సింధీ'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'te-IN',
			language_name: 'సస్సారెస్ సార్డినియన్'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ కుర్డిష్'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర సామి'
		},
		{
			locale_code: 'see-US',
			locale_id: 'te-IN',
			language_name: 'సెనెకా'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'te-IN',
			language_name: 'సెనా'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'te-IN',
			language_name: 'సెరి'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'te-IN',
			language_name: 'సేల్కప్'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'te-IN',
			language_name: 'కోయోరాబోరో సెన్నీ'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'te-IN',
			language_name: 'సాంగో'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ఐరిష్'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'te-IN',
			language_name: 'సమోగిటియన్'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'te-IN',
			language_name: 'టాచెల్‌హిట్'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'te-IN',
			language_name: 'షాన్'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'te-IN',
			language_name: 'చాడియన్ అరబిక్'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'te-IN',
			language_name: 'సింహళం'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'te-IN',
			language_name: 'సిడామో'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'te-IN',
			language_name: 'స్లోవక్'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'te-IN',
			language_name: 'స్లోవేనియన్'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ లూషూట్‌సీడ్'
		},
		{
			locale_code: 'sli-PL',
			locale_id: 'te-IN',
			language_name: 'దిగువ సిలేసియన్'
		},
		{
			locale_code: 'sly-ID',
			locale_id: 'te-IN',
			language_name: 'సెలయర్'
		},
		{
			locale_code: 'sm-WS',
			locale_id: 'te-IN',
			language_name: 'సమోవన్'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ సామి'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'te-IN',
			language_name: 'లులే సామి'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'te-IN',
			language_name: 'ఇనారి సామి'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'te-IN',
			language_name: 'స్కోల్ట్ సామి'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'te-IN',
			language_name: 'షోన'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'te-IN',
			language_name: 'సోనింకి'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'te-IN',
			language_name: 'సోమాలి'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'te-IN',
			language_name: 'సోగ్డియన్'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'te-IN',
			language_name: 'అల్బేనియన్'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'te-IN',
			language_name: 'స్రానన్ టోంగో'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'te-IN',
			language_name: 'సెరేర్'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'te-IN',
			language_name: 'స్వాతి'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'te-IN',
			language_name: 'సాహో'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ సోతో'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'te-IN',
			language_name: 'సాటర్లాండ్ ఫ్రిసియన్'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'te-IN',
			language_name: 'స్ట్రెయిట్స్ సలీష్'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'te-IN',
			language_name: 'సండానీస్'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'te-IN',
			language_name: 'సుకుమా'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'te-IN',
			language_name: 'సుసు'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'te-IN',
			language_name: 'స్వీడిష్'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'te-IN',
			language_name: 'స్వాహిలి'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'te-IN',
			language_name: 'కొమొరియన్'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'te-IN',
			language_name: 'సాంప్రదాయ సిరియాక్'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'te-IN',
			language_name: 'సిరియాక్'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'te-IN',
			language_name: 'సైలీషియన్'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'te-IN',
			language_name: 'తమిళం'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ టుట్చోన్'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'te-IN',
			language_name: 'తుళు'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'te-IN',
			language_name: 'తెలుగు'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'te-IN',
			language_name: 'టిమ్నే'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'te-IN',
			language_name: 'టెసో'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'te-IN',
			language_name: 'టెరెనో'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'te-IN',
			language_name: 'టేటం'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'te-IN',
			language_name: 'తజిక్'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'te-IN',
			language_name: 'తజిక్'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'te-IN',
			language_name: 'టాగీష్'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'te-IN',
			language_name: 'థాయ్'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'te-IN',
			language_name: 'ట్యాల్టాన్'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'te-IN',
			language_name: 'టిగ్రిన్యా'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'te-IN',
			language_name: 'టీగ్రె'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'te-IN',
			language_name: 'టివ్'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'te-IN',
			language_name: 'తుర్క్‌మెన్'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'te-IN',
			language_name: 'టోకెలావ్'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'te-IN',
			language_name: 'త్సఖుర్'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'te-IN',
			language_name: 'ఫిలిపినో'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'te-IN',
			language_name: 'ట్లింగిట్'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'te-IN',
			language_name: 'తాలిష్'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'te-IN',
			language_name: 'టామషేక్'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'te-IN',
			language_name: 'స్వానా'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'te-IN',
			language_name: 'టాంగాన్'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'te-IN',
			language_name: 'న్యాసా టోన్గా'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'te-IN',
			language_name: 'టోక్ పిసిన్'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'te-IN',
			language_name: 'టర్కిష్'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'te-IN',
			language_name: 'తురోయో'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'te-IN',
			language_name: 'తరోకో'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'te-IN',
			language_name: 'తోర్వాలి'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'te-IN',
			language_name: 'సోంగా'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'te-IN',
			language_name: 'త్సాకోనియన్'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'te-IN',
			language_name: 'శింషీయన్'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'te-IN',
			language_name: 'టాటర్'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర టుట్చోన్'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'te-IN',
			language_name: 'ముస్లిం టాట్'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'te-IN',
			language_name: 'టుంబుకా'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'te-IN',
			language_name: 'టువాలు'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'te-IN',
			language_name: 'టసావాఖ్'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'te-IN',
			language_name: 'తహితియన్'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'te-IN',
			language_name: 'టువినియన్'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'te-IN',
			language_name: 'సెంట్రల్ అట్లాస్ టామాజైట్'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'te-IN',
			language_name: 'ఉడ్ముర్ట్'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'te-IN',
			language_name: 'ఉయ్‌ఘర్'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'te-IN',
			language_name: 'ఉయ్‌ఘర్'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'te-IN',
			language_name: 'ఉయ్‌ఘర్'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'te-IN',
			language_name: 'ఉగారిటిక్'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'te-IN',
			language_name: 'ఉక్రెయినియన్'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'te-IN',
			language_name: 'ఉమ్బుండు'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'te-IN',
			language_name: 'కాటలాన్'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'te-IN',
			language_name: 'డారి'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'te-IN',
			language_name: 'మలయ్'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'te-IN',
			language_name: 'ఉర్దూ'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'te-IN',
			language_name: 'మలయ్'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'te-IN',
			language_name: 'ఉర్దూ'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'te-IN',
			language_name: 'ఉర్దూ'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'te-IN',
			language_name: 'ఉర్దూ'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'te-IN',
			language_name: 'పర్షియన్'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'te-IN',
			language_name: 'సమోవన్'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'te-IN',
			language_name: 'ఆస్ట్రియన్ జర్మన్'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'te-IN',
			language_name: 'డచ్'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'te-IN',
			language_name: 'స్వీడిష్'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'te-IN',
			language_name: 'ఫ్లెమిష్'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'te-IN',
			language_name: 'పపియమేంటో'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'te-IN',
			language_name: 'నార్వేజియన్'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'te-IN',
			language_name: 'రష్యన్'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'te-IN',
			language_name: 'స్విస్ హై జర్మన్'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'te-IN',
			language_name: 'root'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'te-IN',
			language_name: 'గ్రీక్'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'te-IN',
			language_name: 'కారా-కల్పాక్'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'te-IN',
			language_name: 'మాసిడోనియన్'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'te-IN',
			language_name: 'మాసిడోనియన్'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'te-IN',
			language_name: 'కారా-కల్పాక్'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'te-IN',
			language_name: 'ఉక్రెయినియన్'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'te-IN',
			language_name: 'బల్గేరియన్'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'te-IN',
			language_name: 'ఉక్రెయినియన్'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'te-IN',
			language_name: 'కబార్డియన్'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'te-IN',
			language_name: 'ఉజ్బెక్'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'te-IN',
			language_name: 'నేపాలీ'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'te-IN',
			language_name: 'భోజ్‌పురి'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'te-IN',
			language_name: 'టిగ్రిన్యా'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'te-IN',
			language_name: 'ఉలూఫ్'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'te-IN',
			language_name: 'కాంటనీస్'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'te-IN',
			language_name: 'కాంటనీస్'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'te-IN',
			language_name: 'ఇడ్డిష్'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'te-IN',
			language_name: 'ఇడ్డిష్'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'te-IN',
			language_name: 'ఇడ్డిష్'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'hnj-AU',
			locale_id: 'te-IN',
			language_name: 'మోంగ్ న్జువా'
		},
		{
			locale_code: 'hnj-FR',
			locale_id: 'te-IN',
			language_name: 'మోంగ్ న్జువా'
		},
		{
			locale_code: 'hnj-GF',
			locale_id: 'te-IN',
			language_name: 'మోంగ్ న్జువా'
		},
		{
			locale_code: 'hnj-MM',
			locale_id: 'te-IN',
			language_name: 'మోంగ్ న్జువా'
		},
		{
			locale_code: 'hnj-SR',
			locale_id: 'te-IN',
			language_name: 'మోంగ్ న్జువా'
		},
		{
			locale_code: 'hnj-TH',
			locale_id: 'te-IN',
			language_name: 'మోంగ్ న్జువా'
		},
		{
			locale_code: 'es-HN',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'te-IN',
			language_name: 'స్వాహిలి'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'te-IN',
			language_name: 'కొరియన్'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'te-IN',
			language_name: 'రష్యన్'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'te-IN',
			language_name: 'తుర్క్‌మెన్'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'te-IN',
			language_name: 'జువాన్'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'te-IN',
			language_name: 'టర్కిష్'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'te-IN',
			language_name: 'తుర్క్‌మెన్'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'te-IN',
			language_name: 'అల్బేనియన్'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'te-IN',
			language_name: 'పోలిష్'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'te-IN',
			language_name: 'జర్మన్'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ సోతో'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'te-IN',
			language_name: 'మొల్డావియన్'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'te-IN',
			language_name: 'మెక్సికన్ స్పానిష్'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'te-IN',
			language_name: 'ఆఫ్రికాన్స్'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'te-IN',
			language_name: 'హౌసా'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'te-IN',
			language_name: 'యూరోపియన్ పోర్చుగీస్'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'te-IN',
			language_name: 'నార్వేజియన్ బొక్మాల్'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'te-IN',
			language_name: 'ఇటాలియన్'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'te-IN',
			language_name: 'డచ్'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'te-IN',
			language_name: 'ప్రామాణిక మొరొకన్ టామజైట్'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'te-IN',
			language_name: 'స్వాహిలి'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'te-IN',
			language_name: 'ఇటాలియన్'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'te-IN',
			language_name: 'వాయి'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'te-IN',
			language_name: 'వియత్నామీస్'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'te-IN',
			language_name: 'అరబిక్'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'te-IN',
			language_name: 'ఉజ్బెక్'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'te-IN',
			language_name: 'ఉజ్బెక్'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'te-IN',
			language_name: 'వెండా'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'te-IN',
			language_name: 'వెనీషియన్'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'te-IN',
			language_name: 'వెప్స్'
		},
		{
			locale_code: 'vls-BE',
			locale_id: 'te-IN',
			language_name: 'వెస్ట్ ఫ్లెమిష్'
		},
		{
			locale_code: 'vmf-DE',
			locale_id: 'te-IN',
			language_name: 'ప్రధాన-ఫ్రాంకోనియన్'
		},
		{
			locale_code: 'vmw-MZ',
			locale_id: 'te-IN',
			language_name: 'మఖువా'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'te-IN',
			language_name: 'వోటిక్'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'te-IN',
			language_name: 'వోరో'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'te-IN',
			language_name: 'వుంజొ'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'te-IN',
			language_name: 'వాలూన్'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'te-IN',
			language_name: 'వాల్సర్'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'te-IN',
			language_name: 'వాలేట్టా'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'te-IN',
			language_name: 'వారే'
		},
		{
			locale_code: 'was-US',
			locale_id: 'te-IN',
			language_name: 'వాషో'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'te-IN',
			language_name: 'వార్లపిరి'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'te-IN',
			language_name: 'వు చైనీస్'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'te-IN',
			language_name: 'కల్మిక్'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'te-IN',
			language_name: 'షోసా'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'te-IN',
			language_name: 'మింగ్రేలియన్'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'te-IN',
			language_name: 'కాంగ్‌డీ'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'te-IN',
			language_name: 'సొగా'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'te-IN',
			language_name: 'యాయే'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'te-IN',
			language_name: 'యాపిస్'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'te-IN',
			language_name: 'యాంగ్‌బెన్'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'te-IN',
			language_name: 'యెంబా'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'te-IN',
			language_name: 'యోరుబా'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'te-IN',
			language_name: 'నేహ్‌గటు'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'te-IN',
			language_name: 'కాంటనీస్'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'te-IN',
			language_name: 'జపోటెక్'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'te-IN',
			language_name: 'జీలాండిక్'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'te-IN',
			language_name: 'జెనాగా'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'te-IN',
			language_name: 'చైనీస్'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'te-IN',
			language_name: 'జూలూ'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'te-IN',
			language_name: 'జుని'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'te-IN',
			language_name: 'జాజా'
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
