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
			language_name: 'అఫార్ (ఇథియోపియా)'
		},
		{
			locale_code: 'ab-GE',
			locale_id: 'te-IN',
			language_name: 'అబ్ఖాజియన్ (జార్జియా)'
		},
		{
			locale_code: 'ace-ID',
			locale_id: 'te-IN',
			language_name: 'ఆఖినీస్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'ach-UG',
			locale_id: 'te-IN',
			language_name: 'అకోలి (ఉగాండా)'
		},
		{
			locale_code: 'ada-GH',
			locale_id: 'te-IN',
			language_name: 'అడాంగ్మే (ఘనా)'
		},
		{
			locale_code: 'ady-RU',
			locale_id: 'te-IN',
			language_name: 'అడిగాబ్జే (రష్యా)'
		},
		{
			locale_code: 'ae-IR',
			locale_id: 'te-IN',
			language_name: 'అవేస్టాన్ (ఇరాన్)'
		},
		{
			locale_code: 'aeb-TN',
			locale_id: 'te-IN',
			language_name: 'టునీషియా అరబిక్ (ట్యునీషియా)'
		},
		{
			locale_code: 'af-ZA',
			locale_id: 'te-IN',
			language_name: 'ఆఫ్రికాన్స్ (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'afh-GH',
			locale_id: 'te-IN',
			language_name: 'అఫ్రిహిలి (ఘనా)'
		},
		{
			locale_code: 'agq-CM',
			locale_id: 'te-IN',
			language_name: 'అగేమ్ (కామెరూన్)'
		},
		{
			locale_code: 'ain-JP',
			locale_id: 'te-IN',
			language_name: 'ఐను (జపాన్)'
		},
		{
			locale_code: 'ak-GH',
			locale_id: 'te-IN',
			language_name: 'అకాన్ (ఘనా)'
		},
		{
			locale_code: 'akk-IQ',
			locale_id: 'te-IN',
			language_name: 'అక్కాడియాన్ (ఇరాక్)'
		},
		{
			locale_code: 'akz-US',
			locale_id: 'te-IN',
			language_name: 'అలబామా'
		},
		{
			locale_code: 'ale-US',
			locale_id: 'te-IN',
			language_name: 'అలియుట్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'alt-RU',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ ఆల్టై (రష్యా)'
		},
		{
			locale_code: 'am-ET',
			locale_id: 'te-IN',
			language_name: 'అమ్హారిక్ (ఇథియోపియా)'
		},
		{
			locale_code: 'an-ES',
			locale_id: 'te-IN',
			language_name: 'అరగోనిస్ (స్పెయిన్)'
		},
		{
			locale_code: 'ang-GB',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ఆంగ్లం (యునైటెడ్ కింగ్‌డమ్)'
		},
		{
			locale_code: 'ann-NG',
			locale_id: 'te-IN',
			language_name: 'ఒబోలో (నైజీరియా)'
		},
		{
			locale_code: 'anp-IN',
			locale_id: 'te-IN',
			language_name: 'ఆంగిక (భారతదేశం)'
		},
		{
			locale_code: 'ar-EG',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (ఈజిప్ట్)'
		},
		{
			locale_code: 'arc-IR',
			locale_id: 'te-IN',
			language_name: 'అరామైక్ (ఇరాన్)'
		},
		{
			locale_code: 'arc-IQ',
			locale_id: 'te-IN',
			language_name: 'అరామైక్ (ఇరాక్)'
		},
		{
			locale_code: 'arc-JO',
			locale_id: 'te-IN',
			language_name: 'అరామైక్ (జోర్డాన్)'
		},
		{
			locale_code: 'arc-SY',
			locale_id: 'te-IN',
			language_name: 'అరామైక్ (సిరియా)'
		},
		{
			locale_code: 'arn-CL',
			locale_id: 'te-IN',
			language_name: 'మపుచే (చిలీ)'
		},
		{
			locale_code: 'aro-BO',
			locale_id: 'te-IN',
			language_name: 'అరోనా'
		},
		{
			locale_code: 'arp-US',
			locale_id: 'te-IN',
			language_name: 'అరాపాహో (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'arq-DZ',
			locale_id: 'te-IN',
			language_name: 'అల్జీరియన్ అరబిక్'
		},
		{
			locale_code: 'ars-SA',
			locale_id: 'te-IN',
			language_name: 'నజ్ది అరబిక్ (సౌదీ అరేబియా)'
		},
		{
			locale_code: 'arw-SR',
			locale_id: 'te-IN',
			language_name: 'అరావాక్ (సూరినామ్)'
		},
		{
			locale_code: 'ary-MA',
			locale_id: 'te-IN',
			language_name: 'మొరాకో అరబిక్'
		},
		{
			locale_code: 'arz-EG',
			locale_id: 'te-IN',
			language_name: 'ఈజిప్షియన్ అరబిక్ (ఈజిప్ట్)'
		},
		{
			locale_code: 'as-IN',
			locale_id: 'te-IN',
			language_name: 'అస్సామీస్ (భారతదేశం)'
		},
		{
			locale_code: 'asa-TZ',
			locale_id: 'te-IN',
			language_name: 'అసు (టాంజానియా)'
		},
		{
			locale_code: 'ase-US',
			locale_id: 'te-IN',
			language_name: 'అమెరికన్ సంకేత భాష'
		},
		{
			locale_code: 'ast-ES',
			locale_id: 'te-IN',
			language_name: 'ఆస్టూరియన్ (స్పెయిన్)'
		},
		{
			locale_code: 'atj-CA',
			locale_id: 'te-IN',
			language_name: 'అతికామెక్వ (కెనడా)'
		},
		{
			locale_code: 'av-RU',
			locale_id: 'te-IN',
			language_name: 'అవారిక్ (రష్యా)'
		},
		{
			locale_code: 'awa-IN',
			locale_id: 'te-IN',
			language_name: 'అవధి (భారతదేశం)'
		},
		{
			locale_code: 'ay-BO',
			locale_id: 'te-IN',
			language_name: 'ఐమారా (బొలీవియా)'
		},
		{
			locale_code: 'az-AZ',
			locale_id: 'te-IN',
			language_name: 'అజర్బైజాని (అజర్బైజాన్)'
		},
		{
			locale_code: 'az-IR',
			locale_id: 'te-IN',
			language_name: 'అజర్బైజాని (ఇరాన్)'
		},
		{
			locale_code: 'az-IQ',
			locale_id: 'te-IN',
			language_name: 'అజర్బైజాని (ఇరాక్)'
		},
		{
			locale_code: 'az-RU',
			locale_id: 'te-IN',
			language_name: 'అజర్బైజాని (రష్యా)'
		},
		{
			locale_code: 'ba-RU',
			locale_id: 'te-IN',
			language_name: 'బాష్కిర్ (రష్యా)'
		},
		{
			locale_code: 'bal-PK',
			locale_id: 'te-IN',
			language_name: 'బలూచి (పాకిస్తాన్)'
		},
		{
			locale_code: 'ban-ID',
			locale_id: 'te-IN',
			language_name: 'బాలినీస్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'bar-AT',
			locale_id: 'te-IN',
			language_name: 'బవేరియన్'
		},
		{
			locale_code: 'bas-CM',
			locale_id: 'te-IN',
			language_name: 'బసా (కామెరూన్)'
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
			language_name: 'బెలారుషియన్ (బెలారస్)'
		},
		{
			locale_code: 'bej-SD',
			locale_id: 'te-IN',
			language_name: 'బేజా (సూడాన్)'
		},
		{
			locale_code: 'bem-ZM',
			locale_id: 'te-IN',
			language_name: 'బెంబా (జాంబియా)'
		},
		{
			locale_code: 'bew-ID',
			locale_id: 'te-IN',
			language_name: 'బెటావి'
		},
		{
			locale_code: 'bez-TZ',
			locale_id: 'te-IN',
			language_name: 'బెనా (టాంజానియా)'
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
			language_name: 'బల్గేరియన్ (బల్గేరియా)'
		},
		{
			locale_code: 'bgc-IN',
			locale_id: 'te-IN',
			language_name: 'హర్యాన్వి (భారతదేశం)'
		},
		{
			locale_code: 'bgn-PK',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ బలూచీ (పాకిస్తాన్)'
		},
		{
			locale_code: 'bho-IN',
			locale_id: 'te-IN',
			language_name: 'భోజ్‌పురి (భారతదేశం)'
		},
		{
			locale_code: 'bi-VU',
			locale_id: 'te-IN',
			language_name: 'బిస్లామా (వనాటు)'
		},
		{
			locale_code: 'bik-PH',
			locale_id: 'te-IN',
			language_name: 'బికోల్ (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'bin-NG',
			locale_id: 'te-IN',
			language_name: 'బిని (నైజీరియా)'
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
			language_name: 'సిక్సికా (కెనడా)'
		},
		{
			locale_code: 'blo-BJ',
			locale_id: 'te-IN',
			language_name: 'అని (బెనిన్)'
		},
		{
			locale_code: 'blt-VN',
			locale_id: 'te-IN',
			language_name: 'తాయ్ ఆనకట్ట'
		},
		{
			locale_code: 'bm-ML',
			locale_id: 'te-IN',
			language_name: 'బంబారా (మాలి)'
		},
		{
			locale_code: 'bn-BD',
			locale_id: 'te-IN',
			language_name: 'బంగ్లా (బంగ్లాదేశ్)'
		},
		{
			locale_code: 'bo-CN',
			locale_id: 'te-IN',
			language_name: 'టిబెటన్ (చైనా)'
		},
		{
			locale_code: 'bpy-IN',
			locale_id: 'te-IN',
			language_name: 'బిష్ణుప్రియ (భారతదేశం)'
		},
		{
			locale_code: 'bqi-IR',
			locale_id: 'te-IN',
			language_name: 'భక్తియారీ'
		},
		{
			locale_code: 'br-FR',
			locale_id: 'te-IN',
			language_name: 'బ్రెటన్ (ఫ్రాన్స్‌)'
		},
		{
			locale_code: 'bra-IN',
			locale_id: 'te-IN',
			language_name: 'బ్రాజ్ (భారతదేశం)'
		},
		{
			locale_code: 'brh-PK',
			locale_id: 'te-IN',
			language_name: 'బ్రాహుయ్'
		},
		{
			locale_code: 'brx-IN',
			locale_id: 'te-IN',
			language_name: 'బోడో (భారతదేశం)'
		},
		{
			locale_code: 'bs-BA',
			locale_id: 'te-IN',
			language_name: 'బోస్నియన్ (బోస్నియా & హెర్జిగోవినా)'
		},
		{
			locale_code: 'bss-CM',
			locale_id: 'te-IN',
			language_name: 'అకూస్'
		},
		{
			locale_code: 'bua-RU',
			locale_id: 'te-IN',
			language_name: 'బురియట్ (రష్యా)'
		},
		{
			locale_code: 'bug-ID',
			locale_id: 'te-IN',
			language_name: 'బుగినీస్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'bum-CM',
			locale_id: 'te-IN',
			language_name: 'బులు'
		},
		{
			locale_code: 'byn-ER',
			locale_id: 'te-IN',
			language_name: 'బ్లిన్ (ఎరిట్రియా)'
		},
		{
			locale_code: 'byv-CM',
			locale_id: 'te-IN',
			language_name: 'మేడుంబ'
		},
		{
			locale_code: 'ca-ES',
			locale_id: 'te-IN',
			language_name: 'కాటలాన్ (స్పెయిన్)'
		},
		{
			locale_code: 'cad-US',
			locale_id: 'te-IN',
			language_name: 'కేడ్డో (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'car-VE',
			locale_id: 'te-IN',
			language_name: 'కేరిబ్ (వెనిజులా)'
		},
		{
			locale_code: 'cay-CA',
			locale_id: 'te-IN',
			language_name: 'సేయుగా (కెనడా)'
		},
		{
			locale_code: 'cch-NG',
			locale_id: 'te-IN',
			language_name: 'అట్సామ్ (నైజీరియా)'
		},
		{
			locale_code: 'ccp-BD',
			locale_id: 'te-IN',
			language_name: 'చక్మా (బంగ్లాదేశ్)'
		},
		{
			locale_code: 'ce-RU',
			locale_id: 'te-IN',
			language_name: 'చెచెన్ (రష్యా)'
		},
		{
			locale_code: 'ceb-PH',
			locale_id: 'te-IN',
			language_name: 'సెబువానో (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'cgg-UG',
			locale_id: 'te-IN',
			language_name: 'చిగా (ఉగాండా)'
		},
		{
			locale_code: 'ch-GU',
			locale_id: 'te-IN',
			language_name: 'చమర్రో (గ్వామ్)'
		},
		{
			locale_code: 'chb-CO',
			locale_id: 'te-IN',
			language_name: 'చిబ్చా (కొలంబియా)'
		},
		{
			locale_code: 'chg-TM',
			locale_id: 'te-IN',
			language_name: 'చాగటై (టర్క్‌మెనిస్తాన్)'
		},
		{
			locale_code: 'chk-FM',
			locale_id: 'te-IN',
			language_name: 'చూకీస్ (మైక్రోనేషియా)'
		},
		{
			locale_code: 'chm-RU',
			locale_id: 'te-IN',
			language_name: 'మారి (రష్యా)'
		},
		{
			locale_code: 'chn-US',
			locale_id: 'te-IN',
			language_name: 'చినూక్ జార్గన్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'cho-US',
			locale_id: 'te-IN',
			language_name: 'చక్టా (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'chp-CA',
			locale_id: 'te-IN',
			language_name: 'చిపెవ్యాన్ (కెనడా)'
		},
		{
			locale_code: 'chr-US',
			locale_id: 'te-IN',
			language_name: 'చెరోకీ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'chy-US',
			locale_id: 'te-IN',
			language_name: 'చేయేన్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'cic-US',
			locale_id: 'te-IN',
			language_name: 'చికాసా'
		},
		{
			locale_code: 'ckb-IQ',
			locale_id: 'te-IN',
			language_name: 'సెంట్రల్ కర్డిష్ (ఇరాక్)'
		},
		{
			locale_code: 'clc-CA',
			locale_id: 'te-IN',
			language_name: 'చిల్కటిన్ (కెనడా)'
		},
		{
			locale_code: 'co-FR',
			locale_id: 'te-IN',
			language_name: 'కోర్సికన్ (ఫ్రాన్స్‌)'
		},
		{
			locale_code: 'cop-EG',
			locale_id: 'te-IN',
			language_name: 'కోప్టిక్ (ఈజిప్ట్)'
		},
		{
			locale_code: 'cps-PH',
			locale_id: 'te-IN',
			language_name: 'కాపిజ్నోన్'
		},
		{
			locale_code: 'cr-CA',
			locale_id: 'te-IN',
			language_name: 'క్రి (కెనడా)'
		},
		{
			locale_code: 'crg-CA',
			locale_id: 'te-IN',
			language_name: 'మిచిఫ్ (కెనడా)'
		},
		{
			locale_code: 'crh-UA',
			locale_id: 'te-IN',
			language_name: 'క్రిమియన్ టర్కిష్ (ఉక్రెయిన్)'
		},
		{
			locale_code: 'crj-CA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ తూర్పు క్రీ (కెనడా)'
		},
		{
			locale_code: 'crk-CA',
			locale_id: 'te-IN',
			language_name: 'ప్లెయిన్స్ క్రీ (కెనడా)'
		},
		{
			locale_code: 'crl-CA',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర తూర్పు క్రీ (కెనడా)'
		},
		{
			locale_code: 'crm-CA',
			locale_id: 'te-IN',
			language_name: 'మూస్ క్రీ (కెనడా)'
		},
		{
			locale_code: 'crs-SC',
			locale_id: 'te-IN',
			language_name: 'సెసేల్వా క్రియోల్ ఫ్రెంచ్ (సీషెల్స్)'
		},
		{
			locale_code: 'cs-CZ',
			locale_id: 'te-IN',
			language_name: 'చెక్ (చెకియా)'
		},
		{
			locale_code: 'csb-PL',
			locale_id: 'te-IN',
			language_name: 'కషుబియన్ (పోలాండ్)'
		},
		{
			locale_code: 'csw-CA',
			locale_id: 'te-IN',
			language_name: 'స్వాంపీ క్రీ (కెనడా)'
		},
		{
			locale_code: 'cu-RU',
			locale_id: 'te-IN',
			language_name: 'చర్చ్ స్లావిక్ (రష్యా)'
		},
		{
			locale_code: 'cu-BG',
			locale_id: 'te-IN',
			language_name: 'చర్చ్ స్లావిక్ (బల్గేరియా)'
		},
		{
			locale_code: 'cv-RU',
			locale_id: 'te-IN',
			language_name: 'చువాష్ (రష్యా)'
		},
		{
			locale_code: 'cy-GB',
			locale_id: 'te-IN',
			language_name: 'వెల్ష్ (యునైటెడ్ కింగ్‌డమ్)'
		},
		{
			locale_code: 'da-DK',
			locale_id: 'te-IN',
			language_name: 'డానిష్ (డెన్మార్క్)'
		},
		{
			locale_code: 'dak-US',
			locale_id: 'te-IN',
			language_name: 'డకోటా (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'dar-RU',
			locale_id: 'te-IN',
			language_name: 'డార్గ్వా (రష్యా)'
		},
		{
			locale_code: 'dav-KE',
			locale_id: 'te-IN',
			language_name: 'టైటా (కెన్యా)'
		},
		{
			locale_code: 'de-DE',
			locale_id: 'te-IN',
			language_name: 'జర్మన్ (జర్మనీ)'
		},
		{
			locale_code: 'del-US',
			locale_id: 'te-IN',
			language_name: 'డెలావేర్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'den-CA',
			locale_id: 'te-IN',
			language_name: 'స్లేవ్ (కెనడా)'
		},
		{
			locale_code: 'dgr-CA',
			locale_id: 'te-IN',
			language_name: 'డోగ్రిబ్ (కెనడా)'
		},
		{
			locale_code: 'din-SS',
			locale_id: 'te-IN',
			language_name: 'డింకా (దక్షిణ సూడాన్)'
		},
		{
			locale_code: 'dje-NE',
			locale_id: 'te-IN',
			language_name: 'జార్మా (నైజర్)'
		},
		{
			locale_code: 'doi-IN',
			locale_id: 'te-IN',
			language_name: 'డోగ్రి (భారతదేశం)'
		},
		{
			locale_code: 'dsb-DE',
			locale_id: 'te-IN',
			language_name: 'లోయర్ సోర్బియన్ (జర్మనీ)'
		},
		{
			locale_code: 'dtp-MY',
			locale_id: 'te-IN',
			language_name: 'సెంట్రల్ డుసున్'
		},
		{
			locale_code: 'dua-CM',
			locale_id: 'te-IN',
			language_name: 'డ్యూలా (కామెరూన్)'
		},
		{
			locale_code: 'dum-NL',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ డచ్ (నెదర్లాండ్స్)'
		},
		{
			locale_code: 'dv-MV',
			locale_id: 'te-IN',
			language_name: 'దివేహి (మాల్దీవులు)'
		},
		{
			locale_code: 'dyo-SN',
			locale_id: 'te-IN',
			language_name: 'జోలా-ఫోనయి (సెనెగల్)'
		},
		{
			locale_code: 'dyu-BF',
			locale_id: 'te-IN',
			language_name: 'డ్యులా (బుర్కినా ఫాసో)'
		},
		{
			locale_code: 'dz-BT',
			locale_id: 'te-IN',
			language_name: 'జోంఖా (భూటాన్)'
		},
		{
			locale_code: 'dzg-TD',
			locale_id: 'te-IN',
			language_name: 'డాజాగా (చాద్)'
		},
		{
			locale_code: 'ebu-KE',
			locale_id: 'te-IN',
			language_name: 'ఇంబు (కెన్యా)'
		},
		{
			locale_code: 'ee-GH',
			locale_id: 'te-IN',
			language_name: 'యూ (ఘనా)'
		},
		{
			locale_code: 'efi-NG',
			locale_id: 'te-IN',
			language_name: 'ఎఫిక్ (నైజీరియా)'
		},
		{
			locale_code: 'egl-IT',
			locale_id: 'te-IN',
			language_name: 'ఎమిలియన్'
		},
		{
			locale_code: 'egy-EG',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ఈజిప్షియన్ (ఈజిప్ట్)'
		},
		{
			locale_code: 'eka-NG',
			locale_id: 'te-IN',
			language_name: 'ఏకాజక్ (నైజీరియా)'
		},
		{
			locale_code: 'el-GR',
			locale_id: 'te-IN',
			language_name: 'గ్రీక్ (గ్రీస్)'
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
			language_name: 'ఇంగ్లీష్ (భారతదేశం)'
		},
		{
			locale_code: 'enm-GB',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ ఆంగ్లం (యునైటెడ్ కింగ్‌డమ్)'
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
			language_name: 'ఎస్టోనియన్ (ఎస్టోనియా)'
		},
		{
			locale_code: 'eu-ES',
			locale_id: 'te-IN',
			language_name: 'బాస్క్యూ (స్పెయిన్)'
		},
		{
			locale_code: 'ewo-CM',
			locale_id: 'te-IN',
			language_name: 'ఎవోండొ (కామెరూన్)'
		},
		{
			locale_code: 'ext-ES',
			locale_id: 'te-IN',
			language_name: 'విపరీతమైన'
		},
		{
			locale_code: 'fa-IR',
			locale_id: 'te-IN',
			language_name: 'పర్షియన్ (ఇరాన్)'
		},
		{
			locale_code: 'fan-GQ',
			locale_id: 'te-IN',
			language_name: 'ఫాంగ్ (ఈక్వటోరియల్ గినియా)'
		},
		{
			locale_code: 'ff-SN',
			locale_id: 'te-IN',
			language_name: 'ఫూలా (సెనెగల్)'
		},
		{
			locale_code: 'ff-GN',
			locale_id: 'te-IN',
			language_name: 'ఫూలా (గినియా)'
		},
		{
			locale_code: 'fi-FI',
			locale_id: 'te-IN',
			language_name: 'ఫిన్నిష్ (ఫిన్లాండ్)'
		},
		{
			locale_code: 'fil-PH',
			locale_id: 'te-IN',
			language_name: 'ఫిలిపినో (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'fit-SE',
			locale_id: 'te-IN',
			language_name: 'టోర్నెడలెన్ ఫిన్నిష్'
		},
		{
			locale_code: 'fj-FJ',
			locale_id: 'te-IN',
			language_name: 'ఫిజియన్ (ఫిజీ)'
		},
		{
			locale_code: 'fo-FO',
			locale_id: 'te-IN',
			language_name: 'ఫారోస్ (ఫారో దీవులు)'
		},
		{
			locale_code: 'fon-BJ',
			locale_id: 'te-IN',
			language_name: 'ఫాన్ (బెనిన్)'
		},
		{
			locale_code: 'fr-FR',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (ఫ్రాన్స్‌)'
		},
		{
			locale_code: 'frc-US',
			locale_id: 'te-IN',
			language_name: 'కాజున్ ఫ్రెంచ్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'frm-FR',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ ప్రెంచ్ (ఫ్రాన్స్‌)'
		},
		{
			locale_code: 'fro-FR',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ఫ్రెంచ్ (ఫ్రాన్స్‌)'
		},
		{
			locale_code: 'frp-FR',
			locale_id: 'te-IN',
			language_name: 'అర్పితన్'
		},
		{
			locale_code: 'frr-DE',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర ఫ్రిసియన్ (జర్మనీ)'
		},
		{
			locale_code: 'frs-DE',
			locale_id: 'te-IN',
			language_name: 'తూర్పు ఫ్రిసియన్ (జర్మనీ)'
		},
		{
			locale_code: 'fur-IT',
			locale_id: 'te-IN',
			language_name: 'ఫ్రియులియన్ (ఇటలీ)'
		},
		{
			locale_code: 'fy-NL',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ ఫ్రిసియన్ (నెదర్లాండ్స్)'
		},
		{
			locale_code: 'ga-IE',
			locale_id: 'te-IN',
			language_name: 'ఐరిష్ (ఐర్లాండ్)'
		},
		{
			locale_code: 'gaa-GH',
			locale_id: 'te-IN',
			language_name: 'గా (ఘనా)'
		},
		{
			locale_code: 'gag-MD',
			locale_id: 'te-IN',
			language_name: 'గాగౌజ్ (మోల్డోవా)'
		},
		{
			locale_code: 'gan-CN',
			locale_id: 'te-IN',
			language_name: 'గాన్ చైనీస్ (చైనా)'
		},
		{
			locale_code: 'gay-ID',
			locale_id: 'te-IN',
			language_name: 'గాయో (ఇండోనేషియా)'
		},
		{
			locale_code: 'gba-CF',
			locale_id: 'te-IN',
			language_name: 'గ్బాయా (సెంట్రల్ ఆఫ్రికన్ రిపబ్లిక్)'
		},
		{
			locale_code: 'gbz-IR',
			locale_id: 'te-IN',
			language_name: 'జొరాస్ట్రియన్ డారి'
		},
		{
			locale_code: 'gd-GB',
			locale_id: 'te-IN',
			language_name: 'స్కాటిష్ గేలిక్ (యునైటెడ్ కింగ్‌డమ్)'
		},
		{
			locale_code: 'gez-ET',
			locale_id: 'te-IN',
			language_name: 'జీజ్ (ఇథియోపియా)'
		},
		{
			locale_code: 'gil-KI',
			locale_id: 'te-IN',
			language_name: 'గిల్బర్టీస్ (కిరిబాటి)'
		},
		{
			locale_code: 'gl-ES',
			locale_id: 'te-IN',
			language_name: 'గాలిషియన్ (స్పెయిన్)'
		},
		{
			locale_code: 'glk-IR',
			locale_id: 'te-IN',
			language_name: 'గిలాకి'
		},
		{
			locale_code: 'gmh-DE',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ హై జర్మన్ (జర్మనీ)'
		},
		{
			locale_code: 'gn-PY',
			locale_id: 'te-IN',
			language_name: 'గ్వారనీ (పరాగ్వే)'
		},
		{
			locale_code: 'goh-DE',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన హై జర్మన్ (జర్మనీ)'
		},
		{
			locale_code: 'gon-IN',
			locale_id: 'te-IN',
			language_name: 'గోండి (భారతదేశం)'
		},
		{
			locale_code: 'gor-ID',
			locale_id: 'te-IN',
			language_name: 'గోరోంటలా (ఇండోనేషియా)'
		},
		{
			locale_code: 'got-UA',
			locale_id: 'te-IN',
			language_name: 'గోథిక్ (ఉక్రెయిన్)'
		},
		{
			locale_code: 'grb-LR',
			locale_id: 'te-IN',
			language_name: 'గ్రేబో (లైబీరియా)'
		},
		{
			locale_code: 'grc-GR',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన గ్రీక్ (గ్రీస్)'
		},
		{
			locale_code: 'gsw-CH',
			locale_id: 'te-IN',
			language_name: 'స్విస్ జర్మన్ (స్విట్జర్లాండ్)'
		},
		{
			locale_code: 'gu-IN',
			locale_id: 'te-IN',
			language_name: 'గుజరాతీ (భారతదేశం)'
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
			language_name: 'గుస్సీ (కెన్యా)'
		},
		{
			locale_code: 'gv-IM',
			locale_id: 'te-IN',
			language_name: 'మాంక్స్ (ఐల్ ఆఫ్ మాన్)'
		},
		{
			locale_code: 'gwi-CA',
			locale_id: 'te-IN',
			language_name: 'గ్విచిన్ (కెనడా)'
		},
		{
			locale_code: 'ha-NG',
			locale_id: 'te-IN',
			language_name: 'హౌసా (నైజీరియా)'
		},
		{
			locale_code: 'ha-CM',
			locale_id: 'te-IN',
			language_name: 'హౌసా (కామెరూన్)'
		},
		{
			locale_code: 'ha-SD',
			locale_id: 'te-IN',
			language_name: 'హౌసా (సూడాన్)'
		},
		{
			locale_code: 'hai-CA',
			locale_id: 'te-IN',
			language_name: 'హైడా (కెనడా)'
		},
		{
			locale_code: 'hak-CN',
			locale_id: 'te-IN',
			language_name: 'హక్కా చైనీస్ (చైనా)'
		},
		{
			locale_code: 'hak-TW',
			locale_id: 'te-IN',
			language_name: 'హక్కా చైనీస్ (తైవాన్)'
		},
		{
			locale_code: 'haw-US',
			locale_id: 'te-IN',
			language_name: 'హవాయియన్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'hax-CA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ హైదా (కెనడా)'
		},
		{
			locale_code: 'he-IL',
			locale_id: 'te-IN',
			language_name: 'హీబ్రూ (ఇజ్రాయెల్)'
		},
		{
			locale_code: 'hi-IN',
			locale_id: 'te-IN',
			language_name: 'హిందీ (భారతదేశం)'
		},
		{
			locale_code: 'hif-FJ',
			locale_id: 'te-IN',
			language_name: 'ఫిజీ హిందీ'
		},
		{
			locale_code: 'hil-PH',
			locale_id: 'te-IN',
			language_name: 'హిలిగెనాన్ (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'hit-TR',
			locale_id: 'te-IN',
			language_name: 'హిట్టిటే (తుర్కియె)'
		},
		{
			locale_code: 'hmn-CN',
			locale_id: 'te-IN',
			language_name: 'మోంగ్ (చైనా)'
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
			language_name: 'హిరి మోటు (పాపువా న్యూ గినియా)'
		},
		{
			locale_code: 'hr-HR',
			locale_id: 'te-IN',
			language_name: 'క్రొయేషియన్ (క్రొయేషియా)'
		},
		{
			locale_code: 'hsb-DE',
			locale_id: 'te-IN',
			language_name: 'అప్పర్ సోర్బియన్ (జర్మనీ)'
		},
		{
			locale_code: 'hsn-CN',
			locale_id: 'te-IN',
			language_name: 'జియాంగ్ చైనీస్ (చైనా)'
		},
		{
			locale_code: 'ht-HT',
			locale_id: 'te-IN',
			language_name: 'హైటియన్ క్రియోల్ (హైతీ)'
		},
		{
			locale_code: 'hu-HU',
			locale_id: 'te-IN',
			language_name: 'హంగేరియన్ (హంగేరీ)'
		},
		{
			locale_code: 'hup-US',
			locale_id: 'te-IN',
			language_name: 'హుపా (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'hur-CA',
			locale_id: 'te-IN',
			language_name: 'హల్కోమెలెమ్ (కెనడా)'
		},
		{
			locale_code: 'hy-AM',
			locale_id: 'te-IN',
			language_name: 'ఆర్మీనియన్ (ఆర్మేనియా)'
		},
		{
			locale_code: 'hz-NA',
			locale_id: 'te-IN',
			language_name: 'హెరెరో (నమీబియా)'
		},
		{
			locale_code: 'iba-MY',
			locale_id: 'te-IN',
			language_name: 'ఐబాన్ (మలేషియా)'
		},
		{
			locale_code: 'ibb-NG',
			locale_id: 'te-IN',
			language_name: 'ఇబిబియో (నైజీరియా)'
		},
		{
			locale_code: 'id-ID',
			locale_id: 'te-IN',
			language_name: 'ఇండోనేషియన్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'ie-EE',
			locale_id: 'te-IN',
			language_name: 'ఇంటర్లింగ్ (ఎస్టోనియా)'
		},
		{
			locale_code: 'ig-NG',
			locale_id: 'te-IN',
			language_name: 'ఇగ్బో (నైజీరియా)'
		},
		{
			locale_code: 'ii-CN',
			locale_id: 'te-IN',
			language_name: 'శిషువన్ ఈ (చైనా)'
		},
		{
			locale_code: 'ik-US',
			locale_id: 'te-IN',
			language_name: 'ఇనుపైయాక్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'ikt-CA',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ కెనేడియన్ ఇన్నూక్‌టిటూట్ (కెనడా)'
		},
		{
			locale_code: 'ilo-PH',
			locale_id: 'te-IN',
			language_name: 'ఐలోకో (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'inh-RU',
			locale_id: 'te-IN',
			language_name: 'ఇంగుష్ (రష్యా)'
		},
		{
			locale_code: 'is-IS',
			locale_id: 'te-IN',
			language_name: 'ఐస్లాండిక్ (ఐస్లాండ్)'
		},
		{
			locale_code: 'it-IT',
			locale_id: 'te-IN',
			language_name: 'ఇటాలియన్ (ఇటలీ)'
		},
		{
			locale_code: 'iu-CA',
			locale_id: 'te-IN',
			language_name: 'ఇనుక్టిటుట్ (కెనడా)'
		},
		{
			locale_code: 'izh-RU',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్రియన్'
		},
		{
			locale_code: 'ja-JP',
			locale_id: 'te-IN',
			language_name: 'జపనీస్ (జపాన్)'
		},
		{
			locale_code: 'jam-JM',
			locale_id: 'te-IN',
			language_name: 'జమైకన్ క్రియోల్ ఇంగ్లీష్'
		},
		{
			locale_code: 'jgo-CM',
			locale_id: 'te-IN',
			language_name: 'గోంబా (కామెరూన్)'
		},
		{
			locale_code: 'jmc-TZ',
			locale_id: 'te-IN',
			language_name: 'మకొమ్ (టాంజానియా)'
		},
		{
			locale_code: 'jpr-IL',
			locale_id: 'te-IN',
			language_name: 'జ్యుడియో-పర్షియన్ (ఇజ్రాయెల్)'
		},
		{
			locale_code: 'jrb-IL',
			locale_id: 'te-IN',
			language_name: 'జ్యుడియో-అరబిక్ (ఇజ్రాయెల్)'
		},
		{
			locale_code: 'jut-DK',
			locale_id: 'te-IN',
			language_name: 'జుటిష్'
		},
		{
			locale_code: 'jv-ID',
			locale_id: 'te-IN',
			language_name: 'జావనీస్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'ka-GE',
			locale_id: 'te-IN',
			language_name: 'జార్జియన్ (జార్జియా)'
		},
		{
			locale_code: 'kaa-UZ',
			locale_id: 'te-IN',
			language_name: 'కారా-కల్పాక్ (ఉజ్బెకిస్తాన్)'
		},
		{
			locale_code: 'kab-DZ',
			locale_id: 'te-IN',
			language_name: 'కాబిల్ (అల్జీరియా)'
		},
		{
			locale_code: 'kac-MM',
			locale_id: 'te-IN',
			language_name: 'కాచిన్ (మయన్మార్)'
		},
		{
			locale_code: 'kaj-NG',
			locale_id: 'te-IN',
			language_name: 'జ్యూ (నైజీరియా)'
		},
		{
			locale_code: 'kam-KE',
			locale_id: 'te-IN',
			language_name: 'కంబా (కెన్యా)'
		},
		{
			locale_code: 'kaw-ID',
			locale_id: 'te-IN',
			language_name: 'కావి (ఇండోనేషియా)'
		},
		{
			locale_code: 'kbd-RU',
			locale_id: 'te-IN',
			language_name: 'కబార్డియన్ (రష్యా)'
		},
		{
			locale_code: 'kbl-TD',
			locale_id: 'te-IN',
			language_name: 'కనెంబు'
		},
		{
			locale_code: 'kcg-NG',
			locale_id: 'te-IN',
			language_name: 'ట్యాప్ (నైజీరియా)'
		},
		{
			locale_code: 'kde-TZ',
			locale_id: 'te-IN',
			language_name: 'మకొండే (టాంజానియా)'
		},
		{
			locale_code: 'kea-CV',
			locale_id: 'te-IN',
			language_name: 'కాబువేర్దియను (కేప్ వెర్డె)'
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
			language_name: 'కోరో (కోట్ డి ఐవోర్)'
		},
		{
			locale_code: 'kg-CD',
			locale_id: 'te-IN',
			language_name: 'కోంగో (కాంగో- కిన్షాసా)'
		},
		{
			locale_code: 'kgp-BR',
			locale_id: 'te-IN',
			language_name: 'కైన్‌గ్యాంగ్ (బ్రెజిల్)'
		},
		{
			locale_code: 'kha-IN',
			locale_id: 'te-IN',
			language_name: 'ఖాసి (భారతదేశం)'
		},
		{
			locale_code: 'kho-IR',
			locale_id: 'te-IN',
			language_name: 'ఖోటనీస్ (ఇరాన్)'
		},
		{
			locale_code: 'khq-ML',
			locale_id: 'te-IN',
			language_name: 'కొయరా చీన్నీ (మాలి)'
		},
		{
			locale_code: 'khw-PK',
			locale_id: 'te-IN',
			language_name: 'ఖోవార్'
		},
		{
			locale_code: 'ki-KE',
			locale_id: 'te-IN',
			language_name: 'కికుయు (కెన్యా)'
		},
		{
			locale_code: 'kiu-TR',
			locale_id: 'te-IN',
			language_name: 'కిర్మంజ్కి'
		},
		{
			locale_code: 'kj-NA',
			locale_id: 'te-IN',
			language_name: 'క్వాన్యామ (నమీబియా)'
		},
		{
			locale_code: 'kk-KZ',
			locale_id: 'te-IN',
			language_name: 'కజఖ్ (కజకిస్తాన్)'
		},
		{
			locale_code: 'kk-AF',
			locale_id: 'te-IN',
			language_name: 'కజఖ్ (ఆఫ్ఘనిస్తాన్)'
		},
		{
			locale_code: 'kk-CN',
			locale_id: 'te-IN',
			language_name: 'కజఖ్ (చైనా)'
		},
		{
			locale_code: 'kk-IR',
			locale_id: 'te-IN',
			language_name: 'కజఖ్ (ఇరాన్)'
		},
		{
			locale_code: 'kk-MN',
			locale_id: 'te-IN',
			language_name: 'కజఖ్ (మంగోలియా)'
		},
		{
			locale_code: 'kkj-CM',
			locale_id: 'te-IN',
			language_name: 'కాకో (కామెరూన్)'
		},
		{
			locale_code: 'kl-GL',
			locale_id: 'te-IN',
			language_name: 'కలాల్లిసూట్ (గ్రీన్‌ల్యాండ్)'
		},
		{
			locale_code: 'kln-KE',
			locale_id: 'te-IN',
			language_name: 'కలెంజిన్ (కెన్యా)'
		},
		{
			locale_code: 'km-KH',
			locale_id: 'te-IN',
			language_name: 'ఖ్మేర్ (కంబోడియా)'
		},
		{
			locale_code: 'kmb-AO',
			locale_id: 'te-IN',
			language_name: 'కిమ్బుండు (అంగోలా)'
		},
		{
			locale_code: 'kn-IN',
			locale_id: 'te-IN',
			language_name: 'కన్నడ (భారతదేశం)'
		},
		{
			locale_code: 'ko-KR',
			locale_id: 'te-IN',
			language_name: 'కొరియన్ (దక్షిణ కొరియా)'
		},
		{
			locale_code: 'koi-RU',
			locale_id: 'te-IN',
			language_name: 'కోమి-పర్మాక్ (రష్యా)'
		},
		{
			locale_code: 'kok-IN',
			locale_id: 'te-IN',
			language_name: 'కొంకణి (భారతదేశం)'
		},
		{
			locale_code: 'kos-FM',
			locale_id: 'te-IN',
			language_name: 'కోస్రేయన్ (మైక్రోనేషియా)'
		},
		{
			locale_code: 'kpe-LR',
			locale_id: 'te-IN',
			language_name: 'పెల్లే (లైబీరియా)'
		},
		{
			locale_code: 'kr-NG',
			locale_id: 'te-IN',
			language_name: 'కానురి (నైజీరియా)'
		},
		{
			locale_code: 'krc-RU',
			locale_id: 'te-IN',
			language_name: 'కరచే-బల్కార్ (రష్యా)'
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
			language_name: 'కరేలియన్ (రష్యా)'
		},
		{
			locale_code: 'kru-IN',
			locale_id: 'te-IN',
			language_name: 'కూరుఖ్ (భారతదేశం)'
		},
		{
			locale_code: 'ks-IN',
			locale_id: 'te-IN',
			language_name: 'కాశ్మీరి (భారతదేశం)'
		},
		{
			locale_code: 'ksb-TZ',
			locale_id: 'te-IN',
			language_name: 'శంబాలా (టాంజానియా)'
		},
		{
			locale_code: 'ksf-CM',
			locale_id: 'te-IN',
			language_name: 'బాఫియ (కామెరూన్)'
		},
		{
			locale_code: 'ksh-DE',
			locale_id: 'te-IN',
			language_name: 'కొలోనియన్ (జర్మనీ)'
		},
		{
			locale_code: 'ku-TR',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్ (తుర్కియె)'
		},
		{
			locale_code: 'ku-AM',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్ (ఆర్మేనియా)'
		},
		{
			locale_code: 'ku-IQ',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్ (ఇరాక్)'
		},
		{
			locale_code: 'ku-AZ',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్ (అజర్బైజాన్)'
		},
		{
			locale_code: 'ku-GE',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్ (జార్జియా)'
		},
		{
			locale_code: 'ku-IR',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్ (ఇరాన్)'
		},
		{
			locale_code: 'ku-LB',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్ (లెబనాన్)'
		},
		{
			locale_code: 'ku-TM',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్ (టర్క్‌మెనిస్తాన్)'
		},
		{
			locale_code: 'kum-RU',
			locale_id: 'te-IN',
			language_name: 'కుమ్యిక్ (రష్యా)'
		},
		{
			locale_code: 'kut-CA',
			locale_id: 'te-IN',
			language_name: 'కుటేనై (కెనడా)'
		},
		{
			locale_code: 'kv-RU',
			locale_id: 'te-IN',
			language_name: 'కోమి (రష్యా)'
		},
		{
			locale_code: 'kw-GB',
			locale_id: 'te-IN',
			language_name: 'కోర్నిష్ (యునైటెడ్ కింగ్‌డమ్)'
		},
		{
			locale_code: 'kwk-CA',
			locale_id: 'te-IN',
			language_name: 'క్వాక్‌వాలా (కెనడా)'
		},
		{
			locale_code: 'kxv-IN',
			locale_id: 'te-IN',
			language_name: 'కువి (భారతదేశం)'
		},
		{
			locale_code: 'ky-KG',
			locale_id: 'te-IN',
			language_name: 'కిర్గిజ్ (కిర్గిజిస్తాన్)'
		},
		{
			locale_code: 'ky-CN',
			locale_id: 'te-IN',
			language_name: 'కిర్గిజ్ (చైనా)'
		},
		{
			locale_code: 'ky-TR',
			locale_id: 'te-IN',
			language_name: 'కిర్గిజ్ (తుర్కియె)'
		},
		{
			locale_code: 'la-VA',
			locale_id: 'te-IN',
			language_name: 'లాటిన్ (వాటికన్ నగరం)'
		},
		{
			locale_code: 'lad-IL',
			locale_id: 'te-IN',
			language_name: 'లాడినో (ఇజ్రాయెల్)'
		},
		{
			locale_code: 'lag-TZ',
			locale_id: 'te-IN',
			language_name: 'లాంగీ (టాంజానియా)'
		},
		{
			locale_code: 'lah-PK',
			locale_id: 'te-IN',
			language_name: 'లాహండా (పాకిస్తాన్)'
		},
		{
			locale_code: 'lam-ZM',
			locale_id: 'te-IN',
			language_name: 'లాంబా (జాంబియా)'
		},
		{
			locale_code: 'lb-LU',
			locale_id: 'te-IN',
			language_name: 'లక్సెంబర్గిష్ (లక్సెంబర్గ్)'
		},
		{
			locale_code: 'lez-RU',
			locale_id: 'te-IN',
			language_name: 'లేజ్ఘియన్ (రష్యా)'
		},
		{
			locale_code: 'lg-UG',
			locale_id: 'te-IN',
			language_name: 'గాండా (ఉగాండా)'
		},
		{
			locale_code: 'li-NL',
			locale_id: 'te-IN',
			language_name: 'లిమ్బర్గిష్ (నెదర్లాండ్స్)'
		},
		{
			locale_code: 'lij-IT',
			locale_id: 'te-IN',
			language_name: 'లిగూరియన్ (ఇటలీ)'
		},
		{
			locale_code: 'lil-CA',
			locale_id: 'te-IN',
			language_name: 'లిలూయెట్ (కెనడా)'
		},
		{
			locale_code: 'liv-LV',
			locale_id: 'te-IN',
			language_name: 'లివోనియన్'
		},
		{
			locale_code: 'lkt-US',
			locale_id: 'te-IN',
			language_name: 'లకొటా (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'lmo-IT',
			locale_id: 'te-IN',
			language_name: 'లొంబార్ద్ (ఇటలీ)'
		},
		{
			locale_code: 'ln-CD',
			locale_id: 'te-IN',
			language_name: 'లింగాల (కాంగో- కిన్షాసా)'
		},
		{
			locale_code: 'lo-LA',
			locale_id: 'te-IN',
			language_name: 'లావో (లావోస్)'
		},
		{
			locale_code: 'lol-CD',
			locale_id: 'te-IN',
			language_name: 'మొంగో (కాంగో- కిన్షాసా)'
		},
		{
			locale_code: 'lou-US',
			locale_id: 'te-IN',
			language_name: 'లూసియానా క్రియోల్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'loz-ZM',
			locale_id: 'te-IN',
			language_name: 'లోజి (జాంబియా)'
		},
		{
			locale_code: 'lrc-IR',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర లూరీ (ఇరాన్)'
		},
		{
			locale_code: 'lsm-UG',
			locale_id: 'te-IN',
			language_name: 'సామియా (ఉగాండా)'
		},
		{
			locale_code: 'lt-LT',
			locale_id: 'te-IN',
			language_name: 'లిథువేనియన్ (లిథువేనియా)'
		},
		{
			locale_code: 'ltg-LV',
			locale_id: 'te-IN',
			language_name: 'లాట్గాలియన్'
		},
		{
			locale_code: 'lu-CD',
			locale_id: 'te-IN',
			language_name: 'లూబ-కటాంగ (కాంగో- కిన్షాసా)'
		},
		{
			locale_code: 'lua-CD',
			locale_id: 'te-IN',
			language_name: 'లుబా-లులువ (కాంగో- కిన్షాసా)'
		},
		{
			locale_code: 'lui-US',
			locale_id: 'te-IN',
			language_name: 'లుయిసెనో (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'lun-ZM',
			locale_id: 'te-IN',
			language_name: 'లుండా (జాంబియా)'
		},
		{
			locale_code: 'luo-KE',
			locale_id: 'te-IN',
			language_name: 'లువో (కెన్యా)'
		},
		{
			locale_code: 'lus-IN',
			locale_id: 'te-IN',
			language_name: 'మిజో (భారతదేశం)'
		},
		{
			locale_code: 'luy-KE',
			locale_id: 'te-IN',
			language_name: 'లుయియ (కెన్యా)'
		},
		{
			locale_code: 'lv-LV',
			locale_id: 'te-IN',
			language_name: 'లాట్వియన్ (లాత్వియా)'
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
			language_name: 'మాదురీస్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'maf-CM',
			locale_id: 'te-IN',
			language_name: 'మాఫా'
		},
		{
			locale_code: 'mag-IN',
			locale_id: 'te-IN',
			language_name: 'మగాహి (భారతదేశం)'
		},
		{
			locale_code: 'mai-IN',
			locale_id: 'te-IN',
			language_name: 'మైథిలి (భారతదేశం)'
		},
		{
			locale_code: 'mak-ID',
			locale_id: 'te-IN',
			language_name: 'మకాసార్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'man-GM',
			locale_id: 'te-IN',
			language_name: 'మండింగో (గాంబియా)'
		},
		{
			locale_code: 'man-GN',
			locale_id: 'te-IN',
			language_name: 'మండింగో (గినియా)'
		},
		{
			locale_code: 'mas-KE',
			locale_id: 'te-IN',
			language_name: 'మాసై (కెన్యా)'
		},
		{
			locale_code: 'mde-TD',
			locale_id: 'te-IN',
			language_name: 'మాబా'
		},
		{
			locale_code: 'mdf-RU',
			locale_id: 'te-IN',
			language_name: 'మోక్ష (రష్యా)'
		},
		{
			locale_code: 'mdr-ID',
			locale_id: 'te-IN',
			language_name: 'మండార్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'men-SL',
			locale_id: 'te-IN',
			language_name: 'మెండే (సియెర్రా లియాన్)'
		},
		{
			locale_code: 'mer-KE',
			locale_id: 'te-IN',
			language_name: 'మెరు (కెన్యా)'
		},
		{
			locale_code: 'mfe-MU',
			locale_id: 'te-IN',
			language_name: 'మొరిస్యేన్ (మారిషస్)'
		},
		{
			locale_code: 'mg-MG',
			locale_id: 'te-IN',
			language_name: 'మలగాసి (మడగాస్కర్)'
		},
		{
			locale_code: 'mga-IE',
			locale_id: 'te-IN',
			language_name: 'మధ్యమ ఐరిష్ (ఐర్లాండ్)'
		},
		{
			locale_code: 'mgh-MZ',
			locale_id: 'te-IN',
			language_name: 'మక్వా-మిట్టో (మొజాంబిక్)'
		},
		{
			locale_code: 'mgo-CM',
			locale_id: 'te-IN',
			language_name: 'మెటా (కామెరూన్)'
		},
		{
			locale_code: 'mh-MH',
			locale_id: 'te-IN',
			language_name: 'మార్షలీస్ (మార్షల్ దీవులు)'
		},
		{
			locale_code: 'mi-NZ',
			locale_id: 'te-IN',
			language_name: 'మావొరీ (న్యూజిలాండ్)'
		},
		{
			locale_code: 'mic-CA',
			locale_id: 'te-IN',
			language_name: 'మికమాక్ (కెనడా)'
		},
		{
			locale_code: 'min-ID',
			locale_id: 'te-IN',
			language_name: 'మినాంగ్‌కాబో (ఇండోనేషియా)'
		},
		{
			locale_code: 'mk-MK',
			locale_id: 'te-IN',
			language_name: 'మాసిడోనియన్ (ఉత్తర మాసిడోనియా)'
		},
		{
			locale_code: 'ml-IN',
			locale_id: 'te-IN',
			language_name: 'మలయాళం (భారతదేశం)'
		},
		{
			locale_code: 'mn-MN',
			locale_id: 'te-IN',
			language_name: 'మంగోలియన్ (మంగోలియా)'
		},
		{
			locale_code: 'mn-CN',
			locale_id: 'te-IN',
			language_name: 'మంగోలియన్ (చైనా)'
		},
		{
			locale_code: 'mnc-CN',
			locale_id: 'te-IN',
			language_name: 'మంచు (చైనా)'
		},
		{
			locale_code: 'mni-IN',
			locale_id: 'te-IN',
			language_name: 'మణిపురి (భారతదేశం)'
		},
		{
			locale_code: 'moe-CA',
			locale_id: 'te-IN',
			language_name: 'ఇన్ను-ఐమున్ (కెనడా)'
		},
		{
			locale_code: 'moh-CA',
			locale_id: 'te-IN',
			language_name: 'మోహాక్ (కెనడా)'
		},
		{
			locale_code: 'mos-BF',
			locale_id: 'te-IN',
			language_name: 'మోస్సి (బుర్కినా ఫాసో)'
		},
		{
			locale_code: 'mr-IN',
			locale_id: 'te-IN',
			language_name: 'మరాఠీ (భారతదేశం)'
		},
		{
			locale_code: 'mrj-RU',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ మారి'
		},
		{
			locale_code: 'ms-MY',
			locale_id: 'te-IN',
			language_name: 'మలయ్ (మలేషియా)'
		},
		{
			locale_code: 'ms-CC',
			locale_id: 'te-IN',
			language_name: 'మలయ్ (కోకోస్ [కీలింగ్] దీవులు)'
		},
		{
			locale_code: 'mt-MT',
			locale_id: 'te-IN',
			language_name: 'మాల్టీస్ (మాల్టా)'
		},
		{
			locale_code: 'mua-CM',
			locale_id: 'te-IN',
			language_name: 'మండాంగ్ (కామెరూన్)'
		},
		{
			locale_code: 'mus-US',
			locale_id: 'te-IN',
			language_name: 'క్రీక్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'mwl-PT',
			locale_id: 'te-IN',
			language_name: 'మిరాండిస్ (పోర్చుగల్)'
		},
		{
			locale_code: 'mwr-IN',
			locale_id: 'te-IN',
			language_name: 'మార్వాడి (భారతదేశం)'
		},
		{
			locale_code: 'mwv-ID',
			locale_id: 'te-IN',
			language_name: 'మెంటావై'
		},
		{
			locale_code: 'my-MM',
			locale_id: 'te-IN',
			language_name: 'బర్మీస్ (మయన్మార్)'
		},
		{
			locale_code: 'mye-GA',
			locale_id: 'te-IN',
			language_name: 'మైనే'
		},
		{
			locale_code: 'myv-RU',
			locale_id: 'te-IN',
			language_name: 'ఎర్జియా (రష్యా)'
		},
		{
			locale_code: 'mzn-IR',
			locale_id: 'te-IN',
			language_name: 'మాసన్‌దెరాని (ఇరాన్)'
		},
		{
			locale_code: 'na-NR',
			locale_id: 'te-IN',
			language_name: 'నౌరు (నౌరు)'
		},
		{
			locale_code: 'nan-CN',
			locale_id: 'te-IN',
			language_name: 'మిన్ నాన్ చైనీస్ (చైనా)'
		},
		{
			locale_code: 'nan-TW',
			locale_id: 'te-IN',
			language_name: 'మిన్ నాన్ చైనీస్ (తైవాన్)'
		},
		{
			locale_code: 'nan-MO',
			locale_id: 'te-IN',
			language_name: 'మిన్ నాన్ చైనీస్ (మకావ్ SAR చైనా)'
		},
		{
			locale_code: 'nap-IT',
			locale_id: 'te-IN',
			language_name: 'నియాపోలిటన్ (ఇటలీ)'
		},
		{
			locale_code: 'naq-NA',
			locale_id: 'te-IN',
			language_name: 'నమ (నమీబియా)'
		},
		{
			locale_code: 'nb-NO',
			locale_id: 'te-IN',
			language_name: 'నార్వేజియన్ బొక్మాల్ (నార్వే)'
		},
		{
			locale_code: 'nd-ZW',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర దెబెలె (జింబాబ్వే)'
		},
		{
			locale_code: 'nds-DE',
			locale_id: 'te-IN',
			language_name: 'లో జర్మన్ (జర్మనీ)'
		},
		{
			locale_code: 'ne-NP',
			locale_id: 'te-IN',
			language_name: 'నేపాలీ (నేపాల్)'
		},
		{
			locale_code: 'new-NP',
			locale_id: 'te-IN',
			language_name: 'నెవారి (నేపాల్)'
		},
		{
			locale_code: 'ng-NA',
			locale_id: 'te-IN',
			language_name: 'డోంగా (నమీబియా)'
		},
		{
			locale_code: 'nia-ID',
			locale_id: 'te-IN',
			language_name: 'నియాస్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'niu-NU',
			locale_id: 'te-IN',
			language_name: 'నియాన్ (నియూ)'
		},
		{
			locale_code: 'njo-IN',
			locale_id: 'te-IN',
			language_name: 'అయో నాగా'
		},
		{
			locale_code: 'nl-NL',
			locale_id: 'te-IN',
			language_name: 'డచ్ (నెదర్లాండ్స్)'
		},
		{
			locale_code: 'nmg-CM',
			locale_id: 'te-IN',
			language_name: 'క్వాసియె (కామెరూన్)'
		},
		{
			locale_code: 'nn-NO',
			locale_id: 'te-IN',
			language_name: 'నార్వేజియాన్ న్యోర్స్క్ (నార్వే)'
		},
		{
			locale_code: 'nnh-CM',
			locale_id: 'te-IN',
			language_name: 'గింబూన్ (కామెరూన్)'
		},
		{
			locale_code: 'no-NO',
			locale_id: 'te-IN',
			language_name: 'నార్వేజియన్ (నార్వే)'
		},
		{
			locale_code: 'nog-RU',
			locale_id: 'te-IN',
			language_name: 'నోగై (రష్యా)'
		},
		{
			locale_code: 'non-SE',
			locale_id: 'te-IN',
			language_name: 'ప్రాచిన నోర్స్ (స్వీడన్)'
		},
		{
			locale_code: 'nqo-GN',
			locale_id: 'te-IN',
			language_name: 'న్కో (గినియా)'
		},
		{
			locale_code: 'nr-ZA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ దెబెలె (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'nso-ZA',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర సోతో (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'nus-SS',
			locale_id: 'te-IN',
			language_name: 'న్యుర్ (దక్షిణ సూడాన్)'
		},
		{
			locale_code: 'nv-US',
			locale_id: 'te-IN',
			language_name: 'నవాజొ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'nwc-NP',
			locale_id: 'te-IN',
			language_name: 'సాంప్రదాయ న్యూయారీ (నేపాల్)'
		},
		{
			locale_code: 'ny-MW',
			locale_id: 'te-IN',
			language_name: 'న్యాన్జా (మలావీ)'
		},
		{
			locale_code: 'nym-TZ',
			locale_id: 'te-IN',
			language_name: 'న్యంవేజి (టాంజానియా)'
		},
		{
			locale_code: 'nyn-UG',
			locale_id: 'te-IN',
			language_name: 'న్యాన్కోలె (ఉగాండా)'
		},
		{
			locale_code: 'nyo-UG',
			locale_id: 'te-IN',
			language_name: 'నేయోరో (ఉగాండా)'
		},
		{
			locale_code: 'nzi-GH',
			locale_id: 'te-IN',
			language_name: 'జీమా (ఘనా)'
		},
		{
			locale_code: 'oc-FR',
			locale_id: 'te-IN',
			language_name: 'ఆక్సిటన్ (ఫ్రాన్స్‌)'
		},
		{
			locale_code: 'oj-CA',
			locale_id: 'te-IN',
			language_name: 'చేవా (కెనడా)'
		},
		{
			locale_code: 'ojb-CA',
			locale_id: 'te-IN',
			language_name: 'వాయువ్య ఓజిబ్వా (కెనడా)'
		},
		{
			locale_code: 'ojc-CA',
			locale_id: 'te-IN',
			language_name: 'సెంట్రల్ ఓజిబ్వా (కెనడా)'
		},
		{
			locale_code: 'ojs-CA',
			locale_id: 'te-IN',
			language_name: 'ఓజి-క్రీ (కెనడా)'
		},
		{
			locale_code: 'ojw-CA',
			locale_id: 'te-IN',
			language_name: 'పశ్చిమ ఓజిబ్వా (కెనడా)'
		},
		{
			locale_code: 'oka-CA',
			locale_id: 'te-IN',
			language_name: 'ఒకానగన్ (కెనడా)'
		},
		{
			locale_code: 'om-ET',
			locale_id: 'te-IN',
			language_name: 'ఒరోమో (ఇథియోపియా)'
		},
		{
			locale_code: 'or-IN',
			locale_id: 'te-IN',
			language_name: 'ఒడియా (భారతదేశం)'
		},
		{
			locale_code: 'os-GE',
			locale_id: 'te-IN',
			language_name: 'ఒసేటిక్ (జార్జియా)'
		},
		{
			locale_code: 'osa-US',
			locale_id: 'te-IN',
			language_name: 'ఒసాజ్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'ota-TR',
			locale_id: 'te-IN',
			language_name: 'ఒట్టోమన్ టర్కిష్ (తుర్కియె)'
		},
		{
			locale_code: 'pa-IN',
			locale_id: 'te-IN',
			language_name: 'పంజాబీ (భారతదేశం)'
		},
		{
			locale_code: 'pa-PK',
			locale_id: 'te-IN',
			language_name: 'పంజాబీ (పాకిస్తాన్)'
		},
		{
			locale_code: 'pag-PH',
			locale_id: 'te-IN',
			language_name: 'పంగాసినాన్ (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'pal-IR',
			locale_id: 'te-IN',
			language_name: 'పహ్లావి (ఇరాన్)'
		},
		{
			locale_code: 'pal-CN',
			locale_id: 'te-IN',
			language_name: 'పహ్లావి (చైనా)'
		},
		{
			locale_code: 'pam-PH',
			locale_id: 'te-IN',
			language_name: 'పంపన్గా (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'pap-CW',
			locale_id: 'te-IN',
			language_name: 'పపియమేంటో (క్యూరసో)'
		},
		{
			locale_code: 'pau-PW',
			locale_id: 'te-IN',
			language_name: 'పలావెన్ (పాలావ్)'
		},
		{
			locale_code: 'pcd-FR',
			locale_id: 'te-IN',
			language_name: 'పికార్డ్'
		},
		{
			locale_code: 'pcm-NG',
			locale_id: 'te-IN',
			language_name: 'నైజీరియన్ పిడ్గిన్ (నైజీరియా)'
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
			language_name: 'ప్రాచీన పర్షియన్ (ఇరాన్)'
		},
		{
			locale_code: 'pfl-DE',
			locale_id: 'te-IN',
			language_name: 'పాలటైన్ జర్మన్'
		},
		{
			locale_code: 'phn-LB',
			locale_id: 'te-IN',
			language_name: 'ఫోనికన్ (లెబనాన్)'
		},
		{
			locale_code: 'pi-GB',
			locale_id: 'te-IN',
			language_name: 'పాలీ (యునైటెడ్ కింగ్‌డమ్)'
		},
		{
			locale_code: 'pi-IN',
			locale_id: 'te-IN',
			language_name: 'పాలీ (భారతదేశం)'
		},
		{
			locale_code: 'pi-LK',
			locale_id: 'te-IN',
			language_name: 'పాలీ (శ్రీలంక)'
		},
		{
			locale_code: 'pi-MM',
			locale_id: 'te-IN',
			language_name: 'పాలీ (మయన్మార్)'
		},
		{
			locale_code: 'pi-TH',
			locale_id: 'te-IN',
			language_name: 'పాలీ (థాయిలాండ్)'
		},
		{
			locale_code: 'pis-SB',
			locale_id: 'te-IN',
			language_name: 'పిజిన్ (సోలమన్ దీవులు)'
		},
		{
			locale_code: 'pl-PL',
			locale_id: 'te-IN',
			language_name: 'పోలిష్ (పోలాండ్)'
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
			language_name: 'పోహ్న్పెయన్ (మైక్రోనేషియా)'
		},
		{
			locale_code: 'pqm-CA',
			locale_id: 'te-IN',
			language_name: 'మలిసీట్-పస్సమాక్వొడ్డీ (కెనడా)'
		},
		{
			locale_code: 'prg-PL',
			locale_id: 'te-IN',
			language_name: 'ప్రష్యన్ (పోలాండ్)'
		},
		{
			locale_code: 'pro-FR',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ప్రోవెంసాల్ (ఫ్రాన్స్‌)'
		},
		{
			locale_code: 'ps-AF',
			locale_id: 'te-IN',
			language_name: 'పాష్టో (ఆఫ్ఘనిస్తాన్)'
		},
		{
			locale_code: 'pt-BR',
			locale_id: 'te-IN',
			language_name: 'బ్రెజీలియన్ పోర్చుగీస్'
		},
		{
			locale_code: 'qu-PE',
			locale_id: 'te-IN',
			language_name: 'కెచువా (పెరూ)'
		},
		{
			locale_code: 'quc-GT',
			locale_id: 'te-IN',
			language_name: 'కిచే (గ్వాటిమాలా)'
		},
		{
			locale_code: 'qug-EC',
			locale_id: 'te-IN',
			language_name: 'చింబోరాజో హైలాండ్ క్విచువా'
		},
		{
			locale_code: 'raj-IN',
			locale_id: 'te-IN',
			language_name: 'రాజస్తానీ (భారతదేశం)'
		},
		{
			locale_code: 'rap-CL',
			locale_id: 'te-IN',
			language_name: 'రాపన్యుయి (చిలీ)'
		},
		{
			locale_code: 'rar-CK',
			locale_id: 'te-IN',
			language_name: 'రారోటొంగాన్ (కుక్ దీవులు)'
		},
		{
			locale_code: 'rgn-IT',
			locale_id: 'te-IN',
			language_name: 'రోమాగ్నోల్'
		},
		{
			locale_code: 'rhg-MM',
			locale_id: 'te-IN',
			language_name: 'రోహింగ్యా (మయన్మార్)'
		},
		{
			locale_code: 'rif-MA',
			locale_id: 'te-IN',
			language_name: 'రిఫియన్'
		},
		{
			locale_code: 'rm-CH',
			locale_id: 'te-IN',
			language_name: 'రోమన్ష్ (స్విట్జర్లాండ్)'
		},
		{
			locale_code: 'rn-BI',
			locale_id: 'te-IN',
			language_name: 'రుండి (బురుండి)'
		},
		{
			locale_code: 'ro-RO',
			locale_id: 'te-IN',
			language_name: 'రొమేనియన్ (రోమేనియా)'
		},
		{
			locale_code: 'rof-TZ',
			locale_id: 'te-IN',
			language_name: 'రోంబో (టాంజానియా)'
		},
		{
			locale_code: 'rom-RO',
			locale_id: 'te-IN',
			language_name: 'రోమానీ (రోమేనియా)'
		},
		{
			locale_code: 'rtm-FJ',
			locale_id: 'te-IN',
			language_name: 'రోటుమాన్'
		},
		{
			locale_code: 'ru-RU',
			locale_id: 'te-IN',
			language_name: 'రష్యన్ (రష్యా)'
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
			language_name: 'ఆరోమేనియన్ (రోమేనియా)'
		},
		{
			locale_code: 'rw-RW',
			locale_id: 'te-IN',
			language_name: 'కిన్యర్వాండా (రువాండా)'
		},
		{
			locale_code: 'rwk-TZ',
			locale_id: 'te-IN',
			language_name: 'ర్వా (టాంజానియా)'
		},
		{
			locale_code: 'sa-IN',
			locale_id: 'te-IN',
			language_name: 'సంస్కృతం (భారతదేశం)'
		},
		{
			locale_code: 'sad-TZ',
			locale_id: 'te-IN',
			language_name: 'సండావి (టాంజానియా)'
		},
		{
			locale_code: 'sah-RU',
			locale_id: 'te-IN',
			language_name: 'సాఖా (రష్యా)'
		},
		{
			locale_code: 'sam-PS',
			locale_id: 'te-IN',
			language_name: 'సమారిటన్ అరామైక్ (పాలస్తీనియన్ ప్రాంతాలు)'
		},
		{
			locale_code: 'saq-KE',
			locale_id: 'te-IN',
			language_name: 'సంబురు (కెన్యా)'
		},
		{
			locale_code: 'sas-ID',
			locale_id: 'te-IN',
			language_name: 'ససక్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'sat-IN',
			locale_id: 'te-IN',
			language_name: 'సంతాలి (భారతదేశం)'
		},
		{
			locale_code: 'saz-IN',
			locale_id: 'te-IN',
			language_name: 'సౌరాష్ట్ర'
		},
		{
			locale_code: 'sba-TD',
			locale_id: 'te-IN',
			language_name: 'గాంబే (చాద్)'
		},
		{
			locale_code: 'sbp-TZ',
			locale_id: 'te-IN',
			language_name: 'సాంగు (టాంజానియా)'
		},
		{
			locale_code: 'sc-IT',
			locale_id: 'te-IN',
			language_name: 'సార్డీనియన్ (ఇటలీ)'
		},
		{
			locale_code: 'scn-IT',
			locale_id: 'te-IN',
			language_name: 'సిసిలియన్ (ఇటలీ)'
		},
		{
			locale_code: 'sco-GB',
			locale_id: 'te-IN',
			language_name: 'స్కాట్స్ (యునైటెడ్ కింగ్‌డమ్)'
		},
		{
			locale_code: 'sd-PK',
			locale_id: 'te-IN',
			language_name: 'సింధీ (పాకిస్తాన్)'
		},
		{
			locale_code: 'sd-IN',
			locale_id: 'te-IN',
			language_name: 'సింధీ (భారతదేశం)'
		},
		{
			locale_code: 'sdc-IT',
			locale_id: 'te-IN',
			language_name: 'సస్సారెస్ సార్డినియన్'
		},
		{
			locale_code: 'sdh-IR',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ కుర్డిష్ (ఇరాన్)'
		},
		{
			locale_code: 'se-NO',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర సామి (నార్వే)'
		},
		{
			locale_code: 'see-US',
			locale_id: 'te-IN',
			language_name: 'సెనెకా'
		},
		{
			locale_code: 'seh-MZ',
			locale_id: 'te-IN',
			language_name: 'సెనా (మొజాంబిక్)'
		},
		{
			locale_code: 'sei-MX',
			locale_id: 'te-IN',
			language_name: 'సెరి'
		},
		{
			locale_code: 'sel-RU',
			locale_id: 'te-IN',
			language_name: 'సేల్కప్ (రష్యా)'
		},
		{
			locale_code: 'ses-ML',
			locale_id: 'te-IN',
			language_name: 'కోయోరాబోరో సెన్నీ (మాలి)'
		},
		{
			locale_code: 'sg-CF',
			locale_id: 'te-IN',
			language_name: 'సాంగో (సెంట్రల్ ఆఫ్రికన్ రిపబ్లిక్)'
		},
		{
			locale_code: 'sga-IE',
			locale_id: 'te-IN',
			language_name: 'ప్రాచీన ఐరిష్ (ఐర్లాండ్)'
		},
		{
			locale_code: 'sgs-LT',
			locale_id: 'te-IN',
			language_name: 'సమోగిటియన్'
		},
		{
			locale_code: 'shi-MA',
			locale_id: 'te-IN',
			language_name: 'టాచెల్‌హిట్ (మొరాకో)'
		},
		{
			locale_code: 'shn-MM',
			locale_id: 'te-IN',
			language_name: 'షాన్ (మయన్మార్)'
		},
		{
			locale_code: 'shu-TD',
			locale_id: 'te-IN',
			language_name: 'చాడియన్ అరబిక్'
		},
		{
			locale_code: 'si-LK',
			locale_id: 'te-IN',
			language_name: 'సింహళం (శ్రీలంక)'
		},
		{
			locale_code: 'sid-ET',
			locale_id: 'te-IN',
			language_name: 'సిడామో (ఇథియోపియా)'
		},
		{
			locale_code: 'sk-SK',
			locale_id: 'te-IN',
			language_name: 'స్లోవక్ (స్లొవేకియా)'
		},
		{
			locale_code: 'sl-SI',
			locale_id: 'te-IN',
			language_name: 'స్లోవేనియన్ (స్లోవేనియా)'
		},
		{
			locale_code: 'slh-US',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ లూషూట్‌సీడ్ (యునైటెడ్ స్టేట్స్)'
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
			language_name: 'సమోవన్ (సమోవా)'
		},
		{
			locale_code: 'sma-SE',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ సామి (స్వీడన్)'
		},
		{
			locale_code: 'smj-SE',
			locale_id: 'te-IN',
			language_name: 'లులే సామి (స్వీడన్)'
		},
		{
			locale_code: 'smn-FI',
			locale_id: 'te-IN',
			language_name: 'ఇనారి సామి (ఫిన్లాండ్)'
		},
		{
			locale_code: 'sms-FI',
			locale_id: 'te-IN',
			language_name: 'స్కోల్ట్ సామి (ఫిన్లాండ్)'
		},
		{
			locale_code: 'sn-ZW',
			locale_id: 'te-IN',
			language_name: 'షోన (జింబాబ్వే)'
		},
		{
			locale_code: 'snk-ML',
			locale_id: 'te-IN',
			language_name: 'సోనింకి (మాలి)'
		},
		{
			locale_code: 'so-SO',
			locale_id: 'te-IN',
			language_name: 'సోమాలి (సోమాలియా)'
		},
		{
			locale_code: 'sog-UZ',
			locale_id: 'te-IN',
			language_name: 'సోగ్డియన్ (ఉజ్బెకిస్తాన్)'
		},
		{
			locale_code: 'sq-AL',
			locale_id: 'te-IN',
			language_name: 'అల్బేనియన్ (అల్బేనియా)'
		},
		{
			locale_code: 'sr-RS',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్ (సెర్బియా)'
		},
		{
			locale_code: 'sr-ME',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్ (మాంటెనెగ్రో)'
		},
		{
			locale_code: 'sr-RO',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్ (రోమేనియా)'
		},
		{
			locale_code: 'sr-TR',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్ (తుర్కియె)'
		},
		{
			locale_code: 'srn-SR',
			locale_id: 'te-IN',
			language_name: 'స్రానన్ టోంగో (సూరినామ్)'
		},
		{
			locale_code: 'srr-SN',
			locale_id: 'te-IN',
			language_name: 'సెరేర్ (సెనెగల్)'
		},
		{
			locale_code: 'ss-ZA',
			locale_id: 'te-IN',
			language_name: 'స్వాతి (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'ssy-ER',
			locale_id: 'te-IN',
			language_name: 'సాహో (ఎరిట్రియా)'
		},
		{
			locale_code: 'st-ZA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ సోతో (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'stq-DE',
			locale_id: 'te-IN',
			language_name: 'సాటర్లాండ్ ఫ్రిసియన్'
		},
		{
			locale_code: 'str-CA',
			locale_id: 'te-IN',
			language_name: 'స్ట్రెయిట్స్ సలీష్ (కెనడా)'
		},
		{
			locale_code: 'su-ID',
			locale_id: 'te-IN',
			language_name: 'సండానీస్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'suk-TZ',
			locale_id: 'te-IN',
			language_name: 'సుకుమా (టాంజానియా)'
		},
		{
			locale_code: 'sus-GN',
			locale_id: 'te-IN',
			language_name: 'సుసు (గినియా)'
		},
		{
			locale_code: 'sv-SE',
			locale_id: 'te-IN',
			language_name: 'స్వీడిష్ (స్వీడన్)'
		},
		{
			locale_code: 'sw-TZ',
			locale_id: 'te-IN',
			language_name: 'స్వాహిలి (టాంజానియా)'
		},
		{
			locale_code: 'swb-YT',
			locale_id: 'te-IN',
			language_name: 'కొమొరియన్ (మాయొట్)'
		},
		{
			locale_code: 'syc-TR',
			locale_id: 'te-IN',
			language_name: 'సాంప్రదాయ సిరియాక్ (తుర్కియె)'
		},
		{
			locale_code: 'syr-IQ',
			locale_id: 'te-IN',
			language_name: 'సిరియాక్ (ఇరాక్)'
		},
		{
			locale_code: 'szl-PL',
			locale_id: 'te-IN',
			language_name: 'సైలీషియన్ (పోలాండ్)'
		},
		{
			locale_code: 'ta-IN',
			locale_id: 'te-IN',
			language_name: 'తమిళం (భారతదేశం)'
		},
		{
			locale_code: 'tce-CA',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ టుట్చోన్ (కెనడా)'
		},
		{
			locale_code: 'tcy-IN',
			locale_id: 'te-IN',
			language_name: 'తుళు (భారతదేశం)'
		},
		{
			locale_code: 'te-IN',
			locale_id: 'te-IN',
			language_name: 'తెలుగు (భారతదేశం)'
		},
		{
			locale_code: 'tem-SL',
			locale_id: 'te-IN',
			language_name: 'టిమ్నే (సియెర్రా లియాన్)'
		},
		{
			locale_code: 'teo-UG',
			locale_id: 'te-IN',
			language_name: 'టెసో (ఉగాండా)'
		},
		{
			locale_code: 'ter-BR',
			locale_id: 'te-IN',
			language_name: 'టెరెనో (బ్రెజిల్)'
		},
		{
			locale_code: 'tet-TL',
			locale_id: 'te-IN',
			language_name: 'టేటం (టిమోర్-లెస్టె)'
		},
		{
			locale_code: 'tg-TJ',
			locale_id: 'te-IN',
			language_name: 'తజిక్ (తజికిస్తాన్)'
		},
		{
			locale_code: 'tg-PK',
			locale_id: 'te-IN',
			language_name: 'తజిక్ (పాకిస్తాన్)'
		},
		{
			locale_code: 'tgx-CA',
			locale_id: 'te-IN',
			language_name: 'టాగీష్ (కెనడా)'
		},
		{
			locale_code: 'th-TH',
			locale_id: 'te-IN',
			language_name: 'థాయ్ (థాయిలాండ్)'
		},
		{
			locale_code: 'tht-CA',
			locale_id: 'te-IN',
			language_name: 'ట్యాల్టాన్ (కెనడా)'
		},
		{
			locale_code: 'ti-ET',
			locale_id: 'te-IN',
			language_name: 'టిగ్రిన్యా (ఇథియోపియా)'
		},
		{
			locale_code: 'tig-ER',
			locale_id: 'te-IN',
			language_name: 'టీగ్రె (ఎరిట్రియా)'
		},
		{
			locale_code: 'tiv-NG',
			locale_id: 'te-IN',
			language_name: 'టివ్ (నైజీరియా)'
		},
		{
			locale_code: 'tk-TM',
			locale_id: 'te-IN',
			language_name: 'తుర్క్‌మెన్ (టర్క్‌మెనిస్తాన్)'
		},
		{
			locale_code: 'tkl-TK',
			locale_id: 'te-IN',
			language_name: 'టోకెలావ్ (టోకెలావ్)'
		},
		{
			locale_code: 'tkr-AZ',
			locale_id: 'te-IN',
			language_name: 'త్సఖుర్'
		},
		{
			locale_code: 'tl-PH',
			locale_id: 'te-IN',
			language_name: 'ఫిలిపినో (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'tli-US',
			locale_id: 'te-IN',
			language_name: 'ట్లింగిట్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'tly-AZ',
			locale_id: 'te-IN',
			language_name: 'తాలిష్'
		},
		{
			locale_code: 'tmh-NE',
			locale_id: 'te-IN',
			language_name: 'టామషేక్ (నైజర్)'
		},
		{
			locale_code: 'tn-ZA',
			locale_id: 'te-IN',
			language_name: 'స్వానా (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'to-TO',
			locale_id: 'te-IN',
			language_name: 'టాంగాన్ (టోంగా)'
		},
		{
			locale_code: 'tog-MW',
			locale_id: 'te-IN',
			language_name: 'న్యాసా టోన్గా (మలావీ)'
		},
		{
			locale_code: 'tpi-PG',
			locale_id: 'te-IN',
			language_name: 'టోక్ పిసిన్ (పాపువా న్యూ గినియా)'
		},
		{
			locale_code: 'tr-TR',
			locale_id: 'te-IN',
			language_name: 'టర్కిష్ (తుర్కియె)'
		},
		{
			locale_code: 'tru-TR',
			locale_id: 'te-IN',
			language_name: 'తురోయో'
		},
		{
			locale_code: 'trv-TW',
			locale_id: 'te-IN',
			language_name: 'తరోకో (తైవాన్)'
		},
		{
			locale_code: 'trw-PK',
			locale_id: 'te-IN',
			language_name: 'తోర్వాలి'
		},
		{
			locale_code: 'ts-ZA',
			locale_id: 'te-IN',
			language_name: 'సోంగా (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'tsd-GR',
			locale_id: 'te-IN',
			language_name: 'త్సాకోనియన్'
		},
		{
			locale_code: 'tsi-CA',
			locale_id: 'te-IN',
			language_name: 'శింషీయన్ (కెనడా)'
		},
		{
			locale_code: 'tt-RU',
			locale_id: 'te-IN',
			language_name: 'టాటర్ (రష్యా)'
		},
		{
			locale_code: 'ttm-CA',
			locale_id: 'te-IN',
			language_name: 'ఉత్తర టుట్చోన్ (కెనడా)'
		},
		{
			locale_code: 'ttt-AZ',
			locale_id: 'te-IN',
			language_name: 'ముస్లిం టాట్'
		},
		{
			locale_code: 'tum-MW',
			locale_id: 'te-IN',
			language_name: 'టుంబుకా (మలావీ)'
		},
		{
			locale_code: 'tvl-TV',
			locale_id: 'te-IN',
			language_name: 'టువాలు (టువాలు)'
		},
		{
			locale_code: 'twq-NE',
			locale_id: 'te-IN',
			language_name: 'టసావాఖ్ (నైజర్)'
		},
		{
			locale_code: 'ty-PF',
			locale_id: 'te-IN',
			language_name: 'తహితియన్ (ఫ్రెంచ్ పోలినీషియా)'
		},
		{
			locale_code: 'tyv-RU',
			locale_id: 'te-IN',
			language_name: 'టువినియన్ (రష్యా)'
		},
		{
			locale_code: 'tzm-MA',
			locale_id: 'te-IN',
			language_name: 'సెంట్రల్ అట్లాస్ టామాజైట్ (మొరాకో)'
		},
		{
			locale_code: 'udm-RU',
			locale_id: 'te-IN',
			language_name: 'ఉడ్ముర్ట్ (రష్యా)'
		},
		{
			locale_code: 'ug-CN',
			locale_id: 'te-IN',
			language_name: 'ఉయ్‌ఘర్ (చైనా)'
		},
		{
			locale_code: 'ug-KZ',
			locale_id: 'te-IN',
			language_name: 'ఉయ్‌ఘర్ (కజకిస్తాన్)'
		},
		{
			locale_code: 'ug-MN',
			locale_id: 'te-IN',
			language_name: 'ఉయ్‌ఘర్ (మంగోలియా)'
		},
		{
			locale_code: 'uga-SY',
			locale_id: 'te-IN',
			language_name: 'ఉగారిటిక్ (సిరియా)'
		},
		{
			locale_code: 'uk-UA',
			locale_id: 'te-IN',
			language_name: 'ఉక్రెయినియన్ (ఉక్రెయిన్)'
		},
		{
			locale_code: 'umb-AO',
			locale_id: 'te-IN',
			language_name: 'ఉమ్బుండు (అంగోలా)'
		},
		{
			locale_code: 'ca-AD',
			locale_id: 'te-IN',
			language_name: 'కాటలాన్ (ఆండోరా)'
		},
		{
			locale_code: 'ar-AE',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (యునైటెడ్ అరబ్ ఎమిరేట్స్)'
		},
		{
			locale_code: 'fa-AF',
			locale_id: 'te-IN',
			language_name: 'డారి'
		},
		{
			locale_code: 'pt-AO',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్ (అంగోలా)'
		},
		{
			locale_code: 'es-AR',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (అర్జెంటీనా)'
		},
		{
			locale_code: 'ms-BN',
			locale_id: 'te-IN',
			language_name: 'మలయ్ (బ్రూనే)'
		},
		{
			locale_code: 'ur-GB',
			locale_id: 'te-IN',
			language_name: 'ఉర్దూ (యునైటెడ్ కింగ్‌డమ్)'
		},
		{
			locale_code: 'ms-ID',
			locale_id: 'te-IN',
			language_name: 'మలయ్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'ur-IN',
			locale_id: 'te-IN',
			language_name: 'ఉర్దూ (భారతదేశం)'
		},
		{
			locale_code: 'ur-MU',
			locale_id: 'te-IN',
			language_name: 'ఉర్దూ (మారిషస్)'
		},
		{
			locale_code: 'ur-PK',
			locale_id: 'te-IN',
			language_name: 'ఉర్దూ (పాకిస్తాన్)'
		},
		{
			locale_code: 'fa-TJ',
			locale_id: 'te-IN',
			language_name: 'పర్షియన్ (తజికిస్తాన్)'
		},
		{
			locale_code: 'sm-AS',
			locale_id: 'te-IN',
			language_name: 'సమోవన్ (అమెరికన్ సమోవా)'
		},
		{
			locale_code: 'de-AT',
			locale_id: 'te-IN',
			language_name: 'ఆస్ట్రియన్ జర్మన్'
		},
		{
			locale_code: 'nl-AW',
			locale_id: 'te-IN',
			language_name: 'డచ్ (అరుబా)'
		},
		{
			locale_code: 'sv-AX',
			locale_id: 'te-IN',
			language_name: 'స్వీడిష్ (ఆలాండ్ దీవులు)'
		},
		{
			locale_code: 'nl-BE',
			locale_id: 'te-IN',
			language_name: 'ఫ్లెమిష్'
		},
		{
			locale_code: 'fr-BF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (బుర్కినా ఫాసో)'
		},
		{
			locale_code: 'ar-BH',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (బహ్రెయిన్)'
		},
		{
			locale_code: 'fr-BJ',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (బెనిన్)'
		},
		{
			locale_code: 'fr-BL',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (సెయింట్ బర్థెలిమి)'
		},
		{
			locale_code: 'es-BO',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (బొలీవియా)'
		},
		{
			locale_code: 'zh-TW',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (తైవాన్)'
		},
		{
			locale_code: 'pap-BQ',
			locale_id: 'te-IN',
			language_name: 'పపియమేంటో (కరీబియన్ నెదర్లాండ్స్)'
		},
		{
			locale_code: 'no-BV',
			locale_id: 'te-IN',
			language_name: 'నార్వేజియన్ (బువై దీవి)'
		},
		{
			locale_code: 'ru-BY',
			locale_id: 'te-IN',
			language_name: 'రష్యన్ (బెలారస్)'
		},
		{
			locale_code: 'fr-CD',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (కాంగో- కిన్షాసా)'
		},
		{
			locale_code: 'fr-CG',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (కాంగో- బ్రాజావిల్లి)'
		},
		{
			locale_code: 'de-CH',
			locale_id: 'te-IN',
			language_name: 'స్విస్ హై జర్మన్'
		},
		{
			locale_code: 'fr-CI',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (కోట్ డి ఐవోర్)'
		},
		{
			locale_code: 'es-CL',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (చిలీ)'
		},
		{
			locale_code: 'fr-CM',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (కామెరూన్)'
		},
		{
			locale_code: 'zh-CN',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (చైనా)'
		},
		{
			locale_code: 'es-CO',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (కొలంబియా)'
		},
		{
			locale_code: 'und-CY',
			locale_id: 'te-IN',
			language_name: 'root (సైప్రస్)'
		},
		{
			locale_code: 'es-CR',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (కోస్టా రికా)'
		},
		{
			locale_code: 'es-CU',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (క్యూబా)'
		},
		{
			locale_code: 'pt-CV',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్ (కేప్ వెర్డె)'
		},
		{
			locale_code: 'el-CY',
			locale_id: 'te-IN',
			language_name: 'గ్రీక్ (సైప్రస్)'
		},
		{
			locale_code: 'kaa-AF',
			locale_id: 'te-IN',
			language_name: 'కారా-కల్పాక్ (ఆఫ్ఘనిస్తాన్)'
		},
		{
			locale_code: 'mk-AL',
			locale_id: 'te-IN',
			language_name: 'మాసిడోనియన్ (అల్బేనియా)'
		},
		{
			locale_code: 'sr-BA',
			locale_id: 'te-IN',
			language_name: 'సెర్బియన్ (బోస్నియా & హెర్జిగోవినా)'
		},
		{
			locale_code: 'mk-GR',
			locale_id: 'te-IN',
			language_name: 'మాసిడోనియన్ (గ్రీస్)'
		},
		{
			locale_code: 'kaa-IR',
			locale_id: 'te-IN',
			language_name: 'కారా-కల్పాక్ (ఇరాన్)'
		},
		{
			locale_code: 'uk-MD',
			locale_id: 'te-IN',
			language_name: 'ఉక్రెయినియన్ (మోల్డోవా)'
		},
		{
			locale_code: 'bg-RO',
			locale_id: 'te-IN',
			language_name: 'బల్గేరియన్ (రోమేనియా)'
		},
		{
			locale_code: 'uk-SK',
			locale_id: 'te-IN',
			language_name: 'ఉక్రెయినియన్ (స్లొవేకియా)'
		},
		{
			locale_code: 'kbd-TR',
			locale_id: 'te-IN',
			language_name: 'కబార్డియన్ (తుర్కియె)'
		},
		{
			locale_code: 'uz-UZ',
			locale_id: 'te-IN',
			language_name: 'ఉజ్బెక్ (ఉజ్బెకిస్తాన్)'
		},
		{
			locale_code: 'ne-BT',
			locale_id: 'te-IN',
			language_name: 'నేపాలీ (భూటాన్)'
		},
		{
			locale_code: 'bho-MU',
			locale_id: 'te-IN',
			language_name: 'భోజ్‌పురి (మారిషస్)'
		},
		{
			locale_code: 'fr-DJ',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (జిబౌటి)'
		},
		{
			locale_code: 'es-DO',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (డొమినికన్ రిపబ్లిక్)'
		},
		{
			locale_code: 'ar-DZ',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (అల్జీరియా)'
		},
		{
			locale_code: 'es-EC',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (ఈక్వడార్)'
		},
		{
			locale_code: 'ar-EH',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (పడమటి సహారా)'
		},
		{
			locale_code: 'ti-ER',
			locale_id: 'te-IN',
			language_name: 'టిగ్రిన్యా (ఎరిట్రియా)'
		},
		{
			locale_code: 'fr-GA',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (గేబన్)'
		},
		{
			locale_code: 'wo-SN',
			locale_id: 'te-IN',
			language_name: 'ఉలూఫ్ (సెనెగల్)'
		},
		{
			locale_code: 'fr-GF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (ఫ్రెంచ్ గియానా)'
		},
		{
			locale_code: 'fr-GN',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (గినియా)'
		},
		{
			locale_code: 'fr-GP',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (గ్వాడెలోప్)'
		},
		{
			locale_code: 'es-GQ',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (ఈక్వటోరియల్ గినియా)'
		},
		{
			locale_code: 'es-GT',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (గ్వాటిమాలా)'
		},
		{
			locale_code: 'pt-GW',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్ (గినియా-బిస్సావ్)'
		},
		{
			locale_code: 'yue-CA',
			locale_id: 'te-IN',
			language_name: 'కాంటనీస్ (కెనడా)'
		},
		{
			locale_code: 'yue-CN',
			locale_id: 'te-IN',
			language_name: 'కాంటనీస్ (చైనా)'
		},
		{
			locale_code: 'yi-SE',
			locale_id: 'te-IN',
			language_name: 'ఇడ్డిష్ (స్వీడన్)'
		},
		{
			locale_code: 'yi-UA',
			locale_id: 'te-IN',
			language_name: 'ఇడ్డిష్ (ఉక్రెయిన్)'
		},
		{
			locale_code: 'yi-US',
			locale_id: 'te-IN',
			language_name: 'ఇడ్డిష్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'zh-HK',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (హాంకాంగ్ SAR చైనా)'
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
			language_name: 'స్పానిష్ (హోండురాస్)'
		},
		{
			locale_code: 'ar-IQ',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (ఇరాక్)'
		},
		{
			locale_code: 'ar-JO',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (జోర్డాన్)'
		},
		{
			locale_code: 'sw-KE',
			locale_id: 'te-IN',
			language_name: 'స్వాహిలి (కెన్యా)'
		},
		{
			locale_code: 'ar-KM',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (కొమొరోస్)'
		},
		{
			locale_code: 'ko-KP',
			locale_id: 'te-IN',
			language_name: 'కొరియన్ (ఉత్తర కొరియా)'
		},
		{
			locale_code: 'ar-KW',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (కువైట్)'
		},
		{
			locale_code: 'ru-KZ',
			locale_id: 'te-IN',
			language_name: 'రష్యన్ (కజకిస్తాన్)'
		},
		{
			locale_code: 'en-AE',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (యునైటెడ్ అరబ్ ఎమిరేట్స్)'
		},
		{
			locale_code: 'tk-AF',
			locale_id: 'te-IN',
			language_name: 'తుర్క్‌మెన్ (ఆఫ్ఘనిస్తాన్)'
		},
		{
			locale_code: 'en-BD',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (బంగ్లాదేశ్)'
		},
		{
			locale_code: 'en-BG',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (బల్గేరియా)'
		},
		{
			locale_code: 'en-BT',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (భూటాన్)'
		},
		{
			locale_code: 'en-CC',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (కోకోస్ [కీలింగ్] దీవులు)'
		},
		{
			locale_code: 'za-CN',
			locale_id: 'te-IN',
			language_name: 'జువాన్ (చైనా)'
		},
		{
			locale_code: 'tr-CY',
			locale_id: 'te-IN',
			language_name: 'టర్కిష్ (సైప్రస్)'
		},
		{
			locale_code: 'fr-DZ',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (అల్జీరియా)'
		},
		{
			locale_code: 'en-EG',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (ఈజిప్ట్)'
		},
		{
			locale_code: 'en-ER',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (ఎరిట్రియా)'
		},
		{
			locale_code: 'en-ET',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (ఇథియోపియా)'
		},
		{
			locale_code: 'en-GR',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (గ్రీస్)'
		},
		{
			locale_code: 'en-HK',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (హాంకాంగ్ SAR చైనా)'
		},
		{
			locale_code: 'en-IL',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (ఇజ్రాయెల్)'
		},
		{
			locale_code: 'en-IQ',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (ఇరాక్)'
		},
		{
			locale_code: 'tk-IR',
			locale_id: 'te-IN',
			language_name: 'తుర్క్‌మెన్ (ఇరాన్)'
		},
		{
			locale_code: 'en-JO',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (జోర్డాన్)'
		},
		{
			locale_code: 'fr-KM',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (కొమొరోస్)'
		},
		{
			locale_code: 'en-KZ',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (కజకిస్తాన్)'
		},
		{
			locale_code: 'en-LB',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (లెబనాన్)'
		},
		{
			locale_code: 'en-LK',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (శ్రీలంక)'
		},
		{
			locale_code: 'fr-MA',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (మొరాకో)'
		},
		{
			locale_code: 'sq-MK',
			locale_id: 'te-IN',
			language_name: 'అల్బేనియన్ (ఉత్తర మాసిడోనియా)'
		},
		{
			locale_code: 'en-MO',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (మకావ్ SAR చైనా)'
		},
		{
			locale_code: 'fr-MR',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (మారిటేనియా)'
		},
		{
			locale_code: 'en-MV',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (మాల్దీవులు)'
		},
		{
			locale_code: 'en-NP',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (నేపాల్)'
		},
		{
			locale_code: 'en-PK',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (పాకిస్తాన్)'
		},
		{
			locale_code: 'en-SD',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (సూడాన్)'
		},
		{
			locale_code: 'en-SS',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (దక్షిణ సూడాన్)'
		},
		{
			locale_code: 'ku-SY',
			locale_id: 'te-IN',
			language_name: 'కుర్దిష్ (సిరియా)'
		},
		{
			locale_code: 'fr-TD',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (చాద్)'
		},
		{
			locale_code: 'en-TH',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (థాయిలాండ్)'
		},
		{
			locale_code: 'fr-TN',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (ట్యునీషియా)'
		},
		{
			locale_code: 'pl-UA',
			locale_id: 'te-IN',
			language_name: 'పోలిష్ (ఉక్రెయిన్)'
		},
		{
			locale_code: 'en-YE',
			locale_id: 'te-IN',
			language_name: 'ఇంగ్లీష్ (యెమెన్)'
		},
		{
			locale_code: 'ar-LB',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (లెబనాన్)'
		},
		{
			locale_code: 'de-LI',
			locale_id: 'te-IN',
			language_name: 'జర్మన్ (లిక్టెన్‌స్టెయిన్)'
		},
		{
			locale_code: 'st-LS',
			locale_id: 'te-IN',
			language_name: 'దక్షిణ సోతో (లెసోతో)'
		},
		{
			locale_code: 'fr-LU',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (లక్సెంబర్గ్)'
		},
		{
			locale_code: 'ar-LY',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (లిబియా)'
		},
		{
			locale_code: 'ar-MA',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (మొరాకో)'
		},
		{
			locale_code: 'fr-MC',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (మొనాకో)'
		},
		{
			locale_code: 'ro-MD',
			locale_id: 'te-IN',
			language_name: 'మొల్డావియన్'
		},
		{
			locale_code: 'fr-MF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (సెయింట్ మార్టిన్)'
		},
		{
			locale_code: 'zh-MO',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (మకావ్ SAR చైనా)'
		},
		{
			locale_code: 'fr-MQ',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (మార్టినీక్)'
		},
		{
			locale_code: 'ar-MR',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (మారిటేనియా)'
		},
		{
			locale_code: 'fr-MU',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (మారిషస్)'
		},
		{
			locale_code: 'es-MX',
			locale_id: 'te-IN',
			language_name: 'మెక్సికన్ స్పానిష్'
		},
		{
			locale_code: 'pt-MZ',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్ (మొజాంబిక్)'
		},
		{
			locale_code: 'af-NA',
			locale_id: 'te-IN',
			language_name: 'ఆఫ్రికాన్స్ (నమీబియా)'
		},
		{
			locale_code: 'fr-NC',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (కొత్త కాలెడోనియా)'
		},
		{
			locale_code: 'ha-NE',
			locale_id: 'te-IN',
			language_name: 'హౌసా (నైజర్)'
		},
		{
			locale_code: 'es-NI',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (నికరాగువా)'
		},
		{
			locale_code: 'ar-OM',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (ఓమన్)'
		},
		{
			locale_code: 'es-PA',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (పనామా)'
		},
		{
			locale_code: 'es-PE',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (పెరూ)'
		},
		{
			locale_code: 'fr-PF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (ఫ్రెంచ్ పోలినీషియా)'
		},
		{
			locale_code: 'fr-PM',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (సెయింట్ పియెర్ మరియు మికెలాన్)'
		},
		{
			locale_code: 'es-PR',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (ప్యూర్టో రికో)'
		},
		{
			locale_code: 'ar-PS',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (పాలస్తీనియన్ ప్రాంతాలు)'
		},
		{
			locale_code: 'pt-PT',
			locale_id: 'te-IN',
			language_name: 'యూరోపియన్ పోర్చుగీస్'
		},
		{
			locale_code: 'ar-QA',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (ఖతార్)'
		},
		{
			locale_code: 'fr-RE',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (రీయూనియన్)'
		},
		{
			locale_code: 'ar-SA',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (సౌదీ అరేబియా)'
		},
		{
			locale_code: 'fr-SC',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (సీషెల్స్)'
		},
		{
			locale_code: 'ar-SD',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (సూడాన్)'
		},
		{
			locale_code: 'nb-SJ',
			locale_id: 'te-IN',
			language_name:
				'నార్వేజియన్ బొక్మాల్ (స్వాల్‌బార్డ్ మరియు జాన్ మాయెన్)'
		},
		{
			locale_code: 'it-SM',
			locale_id: 'te-IN',
			language_name: 'ఇటాలియన్ (శాన్ మారినో)'
		},
		{
			locale_code: 'nl-SR',
			locale_id: 'te-IN',
			language_name: 'డచ్ (సూరినామ్)'
		},
		{
			locale_code: 'ar-SS',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (దక్షిణ సూడాన్)'
		},
		{
			locale_code: 'pt-ST',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్ (సావో టోమ్ మరియు ప్రిన్సిపి)'
		},
		{
			locale_code: 'es-SV',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (ఎల్ సాల్వడోర్)'
		},
		{
			locale_code: 'ar-SY',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (సిరియా)'
		},
		{
			locale_code: 'ar-TD',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (చాద్)'
		},
		{
			locale_code: 'fr-TF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (ఫ్రెంచ్ దక్షిణ ప్రాంతాలు)'
		},
		{
			locale_code: 'zgh-MA',
			locale_id: 'te-IN',
			language_name: 'ప్రామాణిక మొరొకన్ టామజైట్ (మొరాకో)'
		},
		{
			locale_code: 'fr-TG',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (టోగో)'
		},
		{
			locale_code: 'pt-TL',
			locale_id: 'te-IN',
			language_name: 'పోర్చుగీస్ (టిమోర్-లెస్టె)'
		},
		{
			locale_code: 'ar-TN',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (ట్యునీషియా)'
		},
		{
			locale_code: 'sw-UG',
			locale_id: 'te-IN',
			language_name: 'స్వాహిలి (ఉగాండా)'
		},
		{
			locale_code: 'es-UY',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (ఉరుగ్వే)'
		},
		{
			locale_code: 'it-VA',
			locale_id: 'te-IN',
			language_name: 'ఇటాలియన్ (వాటికన్ నగరం)'
		},
		{
			locale_code: 'vai-LR',
			locale_id: 'te-IN',
			language_name: 'వాయి (లైబీరియా)'
		},
		{
			locale_code: 'es-VE',
			locale_id: 'te-IN',
			language_name: 'స్పానిష్ (వెనిజులా)'
		},
		{
			locale_code: 'vi-VN',
			locale_id: 'te-IN',
			language_name: 'వియత్నామీస్ (వియత్నాం)'
		},
		{
			locale_code: 'fr-WF',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (వాల్లిస్ మరియు ఫుటునా)'
		},
		{
			locale_code: 'ar-YE',
			locale_id: 'te-IN',
			language_name: 'అరబిక్ (యెమెన్)'
		},
		{
			locale_code: 'fr-YT',
			locale_id: 'te-IN',
			language_name: 'ఫ్రెంచ్ (మాయొట్)'
		},
		{
			locale_code: 'uz-AF',
			locale_id: 'te-IN',
			language_name: 'ఉజ్బెక్ (ఆఫ్ఘనిస్తాన్)'
		},
		{
			locale_code: 'uz-CN',
			locale_id: 'te-IN',
			language_name: 'ఉజ్బెక్ (చైనా)'
		},
		{
			locale_code: 've-ZA',
			locale_id: 'te-IN',
			language_name: 'వెండా (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'vec-IT',
			locale_id: 'te-IN',
			language_name: 'వెనీషియన్ (ఇటలీ)'
		},
		{
			locale_code: 'vep-RU',
			locale_id: 'te-IN',
			language_name: 'Veps'
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
			language_name: 'మఖువా (మొజాంబిక్)'
		},
		{
			locale_code: 'vot-RU',
			locale_id: 'te-IN',
			language_name: 'వోటిక్ (రష్యా)'
		},
		{
			locale_code: 'vro-EE',
			locale_id: 'te-IN',
			language_name: 'వోరో'
		},
		{
			locale_code: 'vun-TZ',
			locale_id: 'te-IN',
			language_name: 'వుంజొ (టాంజానియా)'
		},
		{
			locale_code: 'wa-BE',
			locale_id: 'te-IN',
			language_name: 'వాలూన్ (బెల్జియం)'
		},
		{
			locale_code: 'wae-CH',
			locale_id: 'te-IN',
			language_name: 'వాల్సర్ (స్విట్జర్లాండ్)'
		},
		{
			locale_code: 'wal-ET',
			locale_id: 'te-IN',
			language_name: 'వాలేట్టా (ఇథియోపియా)'
		},
		{
			locale_code: 'war-PH',
			locale_id: 'te-IN',
			language_name: 'వారే (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'was-US',
			locale_id: 'te-IN',
			language_name: 'వాషో (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'wbp-AU',
			locale_id: 'te-IN',
			language_name: 'వార్లపిరి (ఆస్ట్రేలియా)'
		},
		{
			locale_code: 'wuu-CN',
			locale_id: 'te-IN',
			language_name: 'వు చైనీస్ (చైనా)'
		},
		{
			locale_code: 'xal-RU',
			locale_id: 'te-IN',
			language_name: 'కల్మిక్ (రష్యా)'
		},
		{
			locale_code: 'xh-ZA',
			locale_id: 'te-IN',
			language_name: 'షోసా (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'xmf-GE',
			locale_id: 'te-IN',
			language_name: 'మింగ్రేలియన్'
		},
		{
			locale_code: 'xnr-IN',
			locale_id: 'te-IN',
			language_name: 'కాంగ్‌డీ (భారతదేశం)'
		},
		{
			locale_code: 'xog-UG',
			locale_id: 'te-IN',
			language_name: 'సొగా (ఉగాండా)'
		},
		{
			locale_code: 'yao-MZ',
			locale_id: 'te-IN',
			language_name: 'యాయే (మొజాంబిక్)'
		},
		{
			locale_code: 'yap-FM',
			locale_id: 'te-IN',
			language_name: 'యాపిస్ (మైక్రోనేషియా)'
		},
		{
			locale_code: 'yav-CM',
			locale_id: 'te-IN',
			language_name: 'యాంగ్‌బెన్ (కామెరూన్)'
		},
		{
			locale_code: 'ybb-CM',
			locale_id: 'te-IN',
			language_name: 'యెంబా (కామెరూన్)'
		},
		{
			locale_code: 'yo-NG',
			locale_id: 'te-IN',
			language_name: 'యోరుబా (నైజీరియా)'
		},
		{
			locale_code: 'yrl-BR',
			locale_id: 'te-IN',
			language_name: 'నేహ్‌గటు (బ్రెజిల్)'
		},
		{
			locale_code: 'yue-HK',
			locale_id: 'te-IN',
			language_name: 'కాంటనీస్ (హాంకాంగ్ SAR చైనా)'
		},
		{
			locale_code: 'zap-MX',
			locale_id: 'te-IN',
			language_name: 'జపోటెక్ (మెక్సికో)'
		},
		{
			locale_code: 'zea-NL',
			locale_id: 'te-IN',
			language_name: 'జీలాండిక్'
		},
		{
			locale_code: 'zen-MR',
			locale_id: 'te-IN',
			language_name: 'జెనాగా (మారిటేనియా)'
		},
		{
			locale_code: 'zh-AU',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (ఆస్ట్రేలియా)'
		},
		{
			locale_code: 'zh-BN',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (బ్రూనే)'
		},
		{
			locale_code: 'zh-GB',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (యునైటెడ్ కింగ్‌డమ్)'
		},
		{
			locale_code: 'zh-GF',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (ఫ్రెంచ్ గియానా)'
		},
		{
			locale_code: 'zh-ID',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (ఇండోనేషియా)'
		},
		{
			locale_code: 'zh-PA',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (పనామా)'
		},
		{
			locale_code: 'zh-PF',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (ఫ్రెంచ్ పోలినీషియా)'
		},
		{
			locale_code: 'zh-PH',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (ఫిలిప్పైన్స్)'
		},
		{
			locale_code: 'zh-SR',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (సూరినామ్)'
		},
		{
			locale_code: 'zh-TH',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (థాయిలాండ్)'
		},
		{
			locale_code: 'zh-US',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'zh-VN',
			locale_id: 'te-IN',
			language_name: 'చైనీస్ (వియత్నాం)'
		},
		{
			locale_code: 'zu-ZA',
			locale_id: 'te-IN',
			language_name: 'జూలూ (దక్షిణ ఆఫ్రికా)'
		},
		{
			locale_code: 'zun-US',
			locale_id: 'te-IN',
			language_name: 'జుని (యునైటెడ్ స్టేట్స్)'
		},
		{
			locale_code: 'zza-TR',
			locale_id: 'te-IN',
			language_name: 'జాజా (తుర్కియె)'
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
