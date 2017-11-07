// declaring a namespace for the plugin
var MUSA = MUSA || {};

MUSA = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    warning: {
        'fi': ['Musiikin asiasanasto MUSA yhdistetään Yleiseen suomalaiseen asiasanastoon YSAan loppuvuoden 2017 aikana. MUSAa ei enää päivitetä. Uusia musiikkitermejä voi ehdottaa', 'YSAn ehdotusjärjestelmällä', '. MUSA poistuu käytöstä itsenäisenä sanastona vuoden 2018 alussa. Ruotsinkielinen musiikin asiasanasto CILLA yhdistetään vastaavasti Allärsiin.'],
        'sv': ['CILLA - Specialtesaurus för musik uppgår i Allärs - Allmän tesaurus på svenska i slutet av år 2017. Cilla uppdateras inte längre. Förslag till nya musiktermer kan ges via', 'blanketten för begreppsförslag till Allärs och ALLFO', '. Cilla upphör som separat tesaurus i början av år 2018. Den finskspråkiga musiktesaurusen MUSA uppgår på motsvarande sätt i YSA.']
    },
    link: "http://ehdotus.finto.fi/#/new",
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
