console.info(`\n%c           %c\n            Copyright (C) ${1900+new Date().getYear()} Artwork Hub\n`,`font-size:90px;background-image:url("https://i.ibb.co/Y8vKqK9/artworkhub-logo.png");background-size:512px;background-repeat:no-repeat`,'background:none;color:#00c0ff;font-size:18.8px');

const g_Languages = [
    ['us', 'English'],
    ['de', 'German (Deutsch)'],
    ['es', 'Spanish (Español)'],
    //['pt', 'Portuguese (Português)'],
    //['ru', 'Russian (Русский)'],
    ['pl', 'Polish (Polski)'],
    //['cn', 'Chinese (汉语)']
];

var headerMaxWidth;
const resize_ = function()
{
    if ($(window).width() < headerMaxWidth) $('#global-header-options-container').addClass('hidden'),$('#global-header-hm-container').removeClass('hidden');
    else $('#global-header-options-container').removeClass('hidden'),$('#global-header-hm-container').addClass('hidden');
};

const fn_ShowLangMenu=()=>{if($('#global-lang-menu').css('pointer-events')==='none')$('#global-lang-menu').css({'opacity':1,'pointer-events':'all'})}
const fn_HideLangMenu=()=>{if($('#global-lang-menu').css('opacity')>0)$('#global-lang-menu').css({'opacity': 0,'pointer-events':'none'})}
const fn_SetLanguage=(_)=>{document.cookie=`tl=${_}; path=/`,location.reload()}

function fn_OnReadyGlobal()
{
    //resize_();
    headerMaxWidth = 225 + document.getElementById('global-header-options-wrapper').clientWidth;
    resize_();

    $('#global-header-hm-button').click((e)=>{
        const el = $('#global-header-hm-options-container');
        if(el.hasClass('visible')) return el.removeClass('visible').css({'pointer-events': 'none', 'opacity': 0});
        else return el.addClass('visible').css({'pointer-events': 'all', 'opacity': 1});
    });

    $('#global-header-options-wrapper').children().each((i, e)=>{
        const el = $(e);
        $(`<a class="global-header-hm-option" onclick="${el.attr('onclick')}">${el.text()}</a>`).appendTo($('#global-header-hm-options-container'));
        //$('#global-header-hm-options-container').append();
    });

    for (const _ of g_Languages)
    {
        $(`<div d-tl="${_[0]}"><img class="global-footer-flag" crossorigin="anonymous" src="https://flagcdn.com/${_[0]}.svg"></img> ${_[1]}</div>`).click((e)=>{let lg = $(e.currentTarget).attr('d-tl'); if(typeof g_LangCodes[lg] !== 'undefined') lg = g_LangCodes[lg]; fn_SetLanguage(lg)}).appendTo('#global-lang-menu');
    }
    
    $('#global-lang-menu').click((e)=>{
        e.stopPropagation();
    });
    
    $('#global-footer-flag-button').click(fn_ShowLangMenu);
    $('body').click(fn_HideLangMenu);

    $('a.david').attr({'href':'https://steamcommunity.com/profiles/76561198209912688','target':'_blank'});
    $('a.foxy ').attr({'href':'https://steamcommunity.com/profiles/76561198134334813','target':'_blank'});

    $(window).bind('resize', resize_);

    if (typeof(fn_OnReady) !== 'undefined') fn_OnReady();
}