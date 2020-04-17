// declaring a namespace for the plugin
var MUSA = MUSA || {};

MUSA = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    warning: {
        'fi': ['Musiikin asiasanasto MUSA on poistunut käytöstä itsenäisenä sanastona. Sanastoa ei enää ylläpidetä eikä sen termejä päivitetä. Musiikkikirjallisuuden kuvailussa käytetään YSOn käsitteitä. Uusia musiikkialan termejä voi ehdottaa YSOon ', 'ehdotusjärjestelmällä', '.'],
        'sv': ['CILLA - Specialtesaurus för musik har upphört som en självständig vokabulär. Tesauren upprätthålls inte längre och termerna i den uppdateras inte. Vid beskrivning av musiklitteratur används ALLFO-begrepp. Nya termer gällande musik föreslås till ALLFO via ', 'förslagssystemet', '.']
    },
    link: "http://ehdotus.finto.fi/#!/list#%2Fnew",
    renderWarning: function(params) {
        $('.content').prepend(Handlebars.compile($('#musa-template').html())({
            'warning-first': this.warning[lang][0], 
            'warning-middle': this.warning[lang][1], 
            'warning-last': this.warning[lang][2],
            'warning-link': this.link
        }));
    },
};

$(function() {
    window.musaWarning = function(params) {
        if (params.page === 'page' && vocab == 'musa' && (params.uri  || $('#vocab-info').length)) {
            MUSA.renderWarning(params);
        }
    };
});
