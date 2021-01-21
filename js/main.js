$('.success_slider').slick({
    dots: true,
    infinity: true,
    autoplay: true,
    autplaySpeed: 5000,
    pauseOnHover: true,

    responsive:[
        {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        }
    ]
});

$('.gallery_slider').slick({
    dots: true,
    infinity: true,
    autoplay: true,
    autplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive:[
        {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        },{
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },{
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:false
            }
        }
    ]
});

$(".news_slider").slick({
    infinity: true,
    autoplay: true,
    autplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive:[
        {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        },{
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
    
});

$(document).ready(function(){
    $.ajax({
        url: 'test.html',
        success: function(data){
            loadEvents(data);
            loadCompetitions(data);
            loadNews(data);

            function loadEvents(data){
                for(var i = 1; i < 7; i++){
                    var eventCard = $(data).find('#activityMainTab_announcements > div.activity-list > div:nth-child(' + i + ')' );
                    var event = $('#previews_tab > div > div:nth-child(' + i + ')');

                    if(eventCard.text() === ""){
                        $(event).attr('style', 'display:none');
                    }
                    else{
                        $(event).find('div > div > p.date').text($(eventCard).find('span > h4').text());
                        $(event).find('div > div > p.month').text($(eventCard).find('span > month').text());
                        $(event).find('div > p.year').text($(eventCard).find('span > year').text());
                        $(event).find('#preview' + i).text($(eventCard).find('h4 > a').text());
                        $(event).find('#preview' + i).attr('href', $(eventCard).find('h4 > a').attr('href'));
                    }
                }
            }

            function loadCompetitions(data){
                for(var i = 1; i < 7; i++){
                    var competitionCard = $(data).find('#activityMainTab_contests > div.activity-list > div:nth-child(' + i + ')');
                    var competition = $('body > main > div > div > div > div > div:nth-child(2) > div > div:nth-child(' + i + ')');

                    if(competitionCard.text() === ""){
                        $(event).attr('style', 'display:none');
                    }
                    else{
                        $(competition).find('div > div:nth-child(1) > div > p.date').text($(competitionCard).find('span:nth-child(1) > h4').text());
                        $(competition).find('div > div:nth-child(2) > div > p.date').text($(competitionCard).find('span:nth-child(3) > h4').text());
                        $(competition).find('div > div:nth-child(1) > div > p.month').text($(competitionCard).find('span:nth-child(1) > month').text());
                        $(competition).find('div > div:nth-child(2) > div > p.month').text($(competitionCard).find('span:nth-child(3) > month').text());
                        $(competition).find('div > div:nth-child(1) > p.year').text($(competitionCard).find('span:nth-child(1) > year').text());
                        $(competition).find('div > div:nth-child(2) > p.year').text($(competitionCard).find('span:nth-child(3) > year').text());
                        $(competition).find('#competition' + i).text($(competitionCard).find('h4 > a').text());
                        $(competition).find('#competition' + i).attr('href', $(competitionCard).find('h4 > a').attr('href'));
                    }
                }
            }
        }
    });
});

// intro-btn
// enrolle-btn
// student-btn
// scientist-btn
// partner-btn
// startup-btn
// company-btn
$("#previews-btn").click(function(){
    window.location.href = "https://news.itmo.ru/ru/events/";
});
$("#contests-btn").click(function(){
    window.location.href = "https://news.itmo.ru/ru/events/?tab=2";
});
$('#news-btn').click(function(){
    window.location.href = "https://news.itmo.ru/ru/";
});

// activities_tabs
$(".act_tab_item:nth-child(1)").click(function(){
    // block nav
    $(this).addClass('act_tab_item-active');
    $(".act_tab_item:nth-child(2)").removeClass('act_tab_item-active');

    // tabs animation
    $(".tab_block:nth-child(2)").removeClass("tab_block-show");
    $(".tab_block:nth-child(2)").removeClass("tab_block-active");
    $(".tab_block:nth-child(1)").addClass("tab_block-active");
    setTimeout(function(){$(".tab_block:nth-child(1)").addClass("tab_block-show");}, 100);
});

$(".act_tab_item:nth-child(2)").click(function(){
    // block nav
    $(this).addClass('act_tab_item-active');
    $(".act_tab_item:nth-child(1)").removeClass('act_tab_item-active');

    // tabs animation
    $(".tab_block:nth-child(1)").removeClass("tab_block-show");
    $(".tab_block:nth-child(1)").removeClass("tab_block-active");
    $(".tab_block:nth-child(2)").addClass("tab_block-active");
    setTimeout(function(){$(".tab_block:nth-child(2)").addClass("tab_block-show");}, 100);
});

$("#news-link").click(function(){
    // block nav
    $(this).addClass("news_tab-active");
    $("#tab-ads-link").removeClass("news_tab-active");

    // change slider content
    $('#news-btn').text("все новости")
    $('#news-btn').click(function(){
        window.location.href = "https://news.itmo.ru/ru/";
    });

    $.ajax({
        url: 'test.html',
        success: function(data){
            loadNews(data);
        }
    });
});

$("#tab-ads-link").click(function(){
    // block nav
    $(this).addClass("news_tab-active");
    $("#news-link").removeClass("news_tab-active");

    // change slider content
    $('#news-btn').text("все объявления");
    $('#news-btn').click(function(){
        window.location.href = "https://news.itmo.ru/ru/university_live/ads/";
    });

    $.ajax({
        url: 'test.html',
        success: function(data){
            loadAds(data);

            function loadAds(data){
                for(var i = 1; i < 13; i++){
                    var newsITMO = $(data).find('#newsMainTab_ads_wrap > div > div:nth-child(' + i + ')');
                    var newsCard = $('body > main > section.news > div > div.news_tab_block.tab_block-show.tab_block-active > div > div > div > div:nth-child(' + (i+3) + ')');
            
                    if(newsITMO.text() === ''){
                        $(newsCard).attr('style', 'display: none');
                    }
                    else{
                        $(newsCard).find('a > div.news_tab-thumb > div.news_thumb-date > div > p.date').text(
                            getDate($(newsITMO).find('a > span.date').text())
                        );
                        $(newsCard).find('a > div.news_tab-thumb > div.news_thumb-date > div > p.month').text(
                            getMonth($(newsITMO).find('a > span.date').text())
                        );
                        $(newsCard).find('a > div.news_tab-thumb > div.news_thumb-tag > p').text('#Объявления');
                        $(newsCard).find('a > div.news_tab_desc > p').text($(newsITMO).find('a > h4').text());
                        $(newsCard).find('a').attr('href', $(newsITMO).find('a').attr('href'));
                        $(newsCard).find('a > div.news_tab-thumb').attr('style', $(newsITMO).find('a > div').attr('style'));
                    }
                }   
            }
        }
    });
});

$(".header_burger").click(function(){
    $(".burger_menu").addClass("burger_menu-active");
});

$(".header_nav-close").click(function(){
    $(".burger_menu").removeClass("burger_menu-active");
});

function loadNews(data){
    for(var i = 1; i < 13; i++){
        var newsITMO = $(data).find('#newsMainTab_news_wrap > div > div:nth-child(' + i + ')');
        var newsCard = $('body > main > section.news > div > div.news_tab_block.tab_block-show.tab_block-active > div > div > div > div:nth-child(' + (i+3) + ')');

        if(newsITMO.text() === ''){
            $(newsCard).attr('style', 'display: none');
        }
        else{
            $(newsCard).find('a > div.news_tab-thumb > div.news_thumb-date > div > p.date').text(
                getDate($(newsITMO).find('a > span.date').text())
            );
            $(newsCard).find('a > div.news_tab-thumb > div.news_thumb-date > div > p.month').text(
                getMonth($(newsITMO).find('a > span.date').text())
            );
            $(newsCard).find('a > div.news_tab-thumb > div.news_thumb-tag > p').text('#' + $(newsITMO).find('a > span.label.label-red').text());
            $(newsCard).find('a > div.news_tab_desc > p').text($(newsITMO).find('a > h4').text());
            $(newsCard).find('a').attr('href', $(newsITMO).find('a').attr('href'));
            $(newsCard).find('a > div.news_tab-thumb').attr('style', $(newsITMO).find('a > div').attr('style'));
        }
    }   
}

function getDate(string){
    return string.substring(string.indexOf(',') + 2, string.indexOf(',') + 4);
}

function getMonth(string){
    return string.substring(string.indexOf(',') + 5, string.indexOf(',') + 8);
}

function show_overlay(id, src){
    var overlay = document.getElementById(id)
    var img = document.querySelector("#slider_overlay img")
    img.src = src
    overlay.style.display = "block"
    
    document.body.classList.add("scroll_off")

    overlay.children[0].onclick = () => {
        overlay.style.display = "none"
        document.body.classList.remove("scroll_off")
    }
}

var imgs = document.querySelectorAll(".gallery_slider-pic img")
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = () => {
        show_overlay("slider_overlay", imgs[i].src)
    }
}