// declaring a namespace for the plugin
var YSALLARS = YSALLARS || {};

YSALLARS = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    warning: {
        'fi': [
            'Yleisen suomalaisen asiasanaston YSAn ja sen ruotsinkielisen vastineen Allärsin ylläpito lakkautettiin vuonna 2019. YSAn ja Allärsin ylläpitoresurssit on siirretty <a href="https://finto.fi/yso/fi/">Yleisen suomalaisen ontologian YSOn</a> ylläpitoon. YSOon vuoden 2019 jälkeen tullut uusi sisältö ei enää päivity YSAan tai Allärsiin. YSO on kolmikielinen (suomi, ruotsi, englanti) linkitetyn datan ominaisuuksilla rikastettu koneymmärrettävä versio YSAsta ja Allärsista. YSAn käsitteet sisältävät linkin vastaaviin YSOn käsitteisiin.',
            'YSAsta YSOon siirtymästä löytyy lisätietoa <a href="https://www.kiwi.fi/x/BYd7B">täältä</a>. YSOon voi tehdä ehdotuksia <a href="https://ehdotus.finto.fi/">ehdotusjärjestelmässä</a>. Jos on kysyttävää, ota yhteys: <a href="mailto:finto-posti@helsinki.fi">finto-posti@helsinki.fi</a>.'
        ],
        'sv': [
            'Uppdateringen av Allärs - Allmän tesaurus på svenska och dess finska motsvarighet YSA upphörde år 2019. Resurserna för Allärs och YSA har överförts till underhållet av <a href="https://finto.fi/yso/sv/">Allmän finländsk ontologi</a> Nytt innehåll som tillkommit i ALLFO efter år 2019 uppdateras inte längre till Allärs eller YSA. ALLFO är en trespråkig (finska, svenska, engelska) version av Allärs och YSA som är maskinläsbar och berikad med egenskaper för länkad data. Begreppen i Allärs är försedda med länkar till motsvarande ALLFO-begrepp.',
            'Mer information om övergången från Allärs och YSA till ALLFO finns <a href="https://www.kiwi.fi/x/BYd7B">här</a>. Förslag till ALLFO kan göras <a href="https://ehdotus.finto.fi">i förslagssystemet</a>. För eventuella frågor kontakta: <a href="mailto:finto-posti@helsinki.fi">finto-posti@helsinki.fi</a>.'
        ],
        'en': [
            'The maintenance of General Finnish Thesaurus YSA and its Swedish language counterpart Allärs ended in 2019. The vocabulary replacing these two is <a href="https://finto.fi/yso/en/">General Finnish Ontology YSO</a>. Updates to YSO are no longer added to YSA or Allärs. YSO is a trilingual (Finnish, Swedish, English) machine-readable version of YSA and Allärs, enhanced with linked data capabilities. All YSA and Allärs concepts incude a link to a corresponding YSO concept.',
            'Find more information on the transition from YSA to YSO <a href="https://www.kiwi.fi/x/BYd7B">here</a> (in Finnish). Suggestions to YSO can be made <a href="https://ehdotus.finto.fi/">here</a>. For further information, please contact: <a href="mailto:finto-posti@helsinki.fi">finto-posti@helsinki.fi</a>'

        ]
    },
    renderWarning: function(params) {
        $('.content').prepend(Handlebars.compile($('#ysallars-template').html())({
            'warning-first': this.warning[lang][0],
            'warning-second': this.warning[lang][1]
        }));
    },
};

$(function() {
    window.ysallarsWarning = function(params) {
        if (params.page === 'page' && (vocab === 'ysa' || vocab === "allars") && (params.uri  || $('#vocab-info').length)) {
            YSALLARS.renderWarning(params);
        }
    };
});
