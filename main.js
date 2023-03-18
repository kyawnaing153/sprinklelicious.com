$(document).ready(function ($) {
    "use strict";


    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .breakfast, .lunch, .dinner",
                    },
                });
            },
        };
        filterList.init();
    });

    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);


});


jQuery(window).on('load', function () {
    $('body').removeClass('body-fixed');

    //activating tab of filter
    let targets = document.querySelectorAll(".filter");
    let activeTab = 0;
    let old = 0;
    let dur = 0.4;
    let animation;

    for (let i = 0; i < targets.length; i++) {
        targets[i].index = i;
        targets[i].addEventListener("click", moveBar);
    }

    // initial position on first === All 
    gsap.set(".filter-active", {
        x: targets[0].offsetLeft,
        width: targets[0].offsetWidth
    });

    function moveBar() {
        if (this.index != activeTab) {
            if (animation && animation.isActive()) {
                animation.progress(1);
            }
            animation = gsap.timeline({
                defaults: {
                    duration: 0.4
                }
            });
            old = activeTab;
            activeTab = this.index;
            animation.to(".filter-active", {
                x: targets[activeTab].offsetLeft,
                width: targets[activeTab].offsetWidth
            });

            animation.to(targets[old], {
                color: "#0d0d25",
                ease: "none"
            }, 0);
            animation.to(targets[activeTab], {
                color: "#fff",
                ease: "none"
            }, 0);

        }

    }
});


let cartButton = document.querySelector('.cart');
let closeCartButton = document.querySelector('#close-cart')

document.querySelector('#cartButton').onclick = () =>{
    cartButton.classList.toggle('open');
    loginForm.classList.remove('open');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#loginButton').onclick = () =>{
    loginForm.classList.toggle('open');
    cartButton.classList.remove('open');
}

document.querySelector('#cart-cancel-button').onclick = () =>{
    loginForm.classList.toggle('close');
    cartButton.classList.remove('open');
}

// let loginFormRemove = document.querySelector('.login-form');

// document.querySelector('#removeLoginButton').onclick = () =>{
//     loginFormRemove.classList.toggle('open');
// }

window.onscroll = () =>{
    cartButton.classList.remove('open');
}

document.querySelector('.feed-back1').onclick = () =>{
    document.querySelector('.feed-back1').classList.toggle('open1');
}

document.querySelector('.feed-back2').onclick = () =>{
    document.querySelector('.feed-back1').classList.remove('open1');

    document.querySelector('.feed-back1').classList.toggle('open1');
    document.querySelector('.feed-back2').classList.toggle('open2');
}

document.querySelector('.feed-back3').onclick = () =>{
    document.querySelector('.feed-back1').classList.remove('open1');
    document.querySelector('.feed-back2').classList.remove('open2');

    document.querySelector('.feed-back1').classList.toggle('open1');
    document.querySelector('.feed-back2').classList.toggle('open2');   
    document.querySelector('.feed-back3').classList.toggle('open3');
}

document.querySelector('.feed-back4').onclick = () =>{
    document.querySelector('.feed-back1').classList.remove('open1');
    document.querySelector('.feed-back2').classList.remove('open2');
    document.querySelector('.feed-back3').classList.remove('open3');

    document.querySelector('.feed-back1').classList.toggle('open1');
    document.querySelector('.feed-back2').classList.toggle('open2');
    document.querySelector('.feed-back3').classList.toggle('open3');
    document.querySelector('.feed-back4').classList.toggle('open4');
}

document.querySelector('.feed-back5').onclick = () =>{
    document.querySelector('.feed-back1').classList.remove('open1');
    document.querySelector('.feed-back2').classList.remove('open2');
    document.querySelector('.feed-back3').classList.remove('open3');
    document.querySelector('.feed-back4').classList.remove('open4');

    document.querySelector('.feed-back1').classList.toggle('open1');
    document.querySelector('.feed-back2').classList.toggle('open2');
    document.querySelector('.feed-back3').classList.toggle('open3');
    document.querySelector('.feed-back4').classList.toggle('open4');
    document.querySelector('.feed-back5').classList.toggle('open5');
}