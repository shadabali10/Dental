/*-----------------------------------------------------------------------------------

    Theme Name: Insurs - Insurance HTML Template
    Description: Insurance HTML Template
    Author: Website Layout
    Version: 2.0
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        $("#preloader").fadeOut("normall",function(){$(this).remove()}),$window.on("scroll",function(){var o=$window.scrollTop(),a=$(".navbar-brand img"),e=$(".navbar-brand.logodefault img");o<=50?($("header").removeClass("scrollHeader").addClass("fixedHeader"),a.attr("src","img/logos/logo-inner.png")):($("header").removeClass("fixedHeader").addClass("scrollHeader"),a.attr("src","img/logos/logo.png")),e.attr("src","img/logos/logo.png")}),$window.on("scroll",function(){500<$(this).scrollTop()?$(".scroll-to-top").fadeIn(400):$(".scroll-to-top").fadeOut(400)}),$(".scroll-to-top").on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},600)});var wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0});wow.init();var pageSection=$(".parallax,.bg-img");pageSection.each(function(o){$(this).attr("data-background")&&$(this).css("background-image","url("+$(this).data("background")+")")}),$(".story-video").magnificPopup({delegate:".video",type:"iframe"}),$(".source-modal").magnificPopup({type:"inline",mainClass:"mfp-fade",removalDelay:160}),$(".current-year").text((new Date).getFullYear()),0!==$(".copy-clipboard").length&&(new ClipboardJS(".copy-clipboard"),$(".copy-clipboard").on("click",function(){var o=$(this);o.text();o.text("Copied"),setTimeout(function(){o.text("Copy")},2e3)}));

    // === when document ready === //
    $(document).ready(function(){

        $(".testimonial-carousel3").owlCarousel({items:1,loop:!0,responsiveClass:!0,autoplay:!0,smartSpeed:1500,mouseDrag:!0,nav:!1,navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],dots:!0,margin:50,animateIn:"fadeIn",animateOut:"fadeOut",responsive:{576:{dots:!1,nav:!0}}}),$(".testimonial-carousel4").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,smartSpeed:1500,nav:!1,dots:!0,center:!0,margin:30,responsive:{0:{items:1,margin:0},768:{items:1},992:{items:1},1200:{items:1}}}),$(".services-carousel").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,smartSpeed:1500,nav:!1,navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],dots:!1,center:!1,margin:30,responsive:{0:{items:1},768:{items:2},992:{items:2,nav:!0},1200:{items:3}}}),$(".slider-fade").owlCarousel({items:1,loop:!0,dots:!1,margin:0,nav:!1,autoplay:!0,smartSpeed:1500,mouseDrag:!0,animateIn:"fadeIn",animateOut:"fadeOut",responsive:{992:{nav:!1,dots:!1}}}),$(".owl-carousel").owlCarousel({items:1,loop:!0,dots:!1,margin:0,autoplay:!0,smartSpeed:500});var owl=$(".slider-fade");owl.on("changed.owl.carousel",function(a){a=a.item.index-2;$("span").removeClass("animated fadeInUp"),$("h1").removeClass("animated fadeInUp"),$("p").removeClass("animated fadeInUp"),$("a").removeClass("animated fadeInUp"),$(".owl-item").not(".cloned").eq(a).find("span").addClass("animated fadeInUp"),$(".owl-item").not(".cloned").eq(a).find("h1").addClass("animated fadeInUp"),$(".owl-item").not(".cloned").eq(a).find("p").addClass("animated fadeInUp"),$(".owl-item").not(".cloned").eq(a).find("a").addClass("animated fadeInUp")}),0!==$(".horizontaltab").length&&$(".horizontaltab").easyResponsiveTabs({type:"default",width:"auto",fit:!0,tabidentify:"hor_1",activate:function(a){var e=$(this),t=$("#nested-tabInfo");$("span",t).text(e.text()),t.show()}}),$(".countup").counterUp({delay:25,time:2e3}),$(".countdown").countdown({date:"01 Dec 2025 00:01:00",format:"on"});

        /*------------------------------------
            13. Cursor Helper
        --------------------------------------*/
        
        if ($(".cursor-helper").length) {

            var cursor = document.querySelector('.cursor-helper-outer');
            var cursorinner = document.querySelector('.cursor-helper-inner');
            var a = document.querySelectorAll('a');
            var footer = document.querySelectorAll('footer');
            var owlcarousel = document.querySelectorAll('.owl-carousel');
            
            document.addEventListener('mousemove', function (e) {
              var x = e.clientX;
              var y = e.clientY;
              cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
            });

            document.addEventListener('mousemove', function (e) {
              var x = e.clientX;
              var y = e.clientY;
              cursorinner.style.left = x + 'px';
              cursorinner.style.top = y + 'px';
            });

            document.addEventListener('mousedown', function () {
              cursor.classList.add('click');
              cursorinner.classList.add('cursor-helper-innerhover')
            });

            document.addEventListener('mouseup', function () {
              cursor.classList.remove('click')
              cursorinner.classList.remove('cursor-helper-innerhover')
            });

            a.forEach(item => {
              item.addEventListener('mouseover', () => {
                cursor.classList.add('cursor-link');
              });
              item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-link');
              });
            });

            footer.forEach(item => {
              item.addEventListener('mouseover', () => {
                cursor.classList.add('cursor-light');
              });
              item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-light');
              });
            });

            owlcarousel.forEach(item => {
              item.addEventListener('mouseover', () => {
                cursor.classList.add('cursor-slider');
              });
              item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-slider');
              });
            });

          }
      
    });

    $window.on("load",function(){var i=$(".portfolio-gallery-isotope").isotope({});$(".filtering").on("click","span",function(){var o=$(this).attr("data-filter");i.isotope({filter:o})}),$(".filtering").on("click","span",function(){$(this).addClass("active").siblings().removeClass("active")}),$(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(),$(".portfolio-link").on("click",o=>{o.stopPropagation()})});

})(jQuery);