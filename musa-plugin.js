// declaring a namespace for the plugin
var MUSA = MUSA || {};

MUSA = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    warning: {
        'fi': ['Musiikin asiasanasto MUSA on yhdistetty Yleiseen suomalaiseen asiasanastoon YSAan ja ruotsinkielinen musiikin asiasanasto CILLA vastaavasti Allärsiin. Uusia musiikkitermejä voi ehdottaa', 'YSAn ehdotusjärjestelmällä', '. Tässä sanastossa olevia termejä ei enää päivitetä. Musiikkikirjallisuuden kuvailussa käytetään YSAn termejä. MUSA poistuu käytöstä itsenäisenä sanastona viimeistään siinä vaiheessa, kun YSA yhdistetään YSOon (kesällä 2019).'],
        'sv': ['CILLA - Specialtesaurus för musik har uppgått i Allärs - Allmän tesaurus på svenska och den finskspråkiga musiktesaurusen MUSA har på motsvarande sätt uppgått i YSA. Förslag till nya musiktermer kan ges i', 'Allärs förslagssystem', '. Termer i CILLA uppdateras inte längre. För beskrivning av musiklitteratur används Allärs-termer. CILLA läggs ned senast då Allärs sammanslås ned ALLFO (sommaren 2019).']
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
