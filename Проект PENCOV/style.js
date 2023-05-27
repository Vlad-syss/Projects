//buttons
$(document).ready(function() {
    $(".item__burger").click(function(event) {
        event.preventDefault();
        $(".item__burger").toggleClass("active");
        $(".header__top").toggleClass("active");
        $("body").toggleClass("lock");    
    })
});
$(document).ready(function() {
    $(".item__button").click(function(event) {
        event.preventDefault();
        $(".item__button").toggleClass("form");
        $(".header__top").toggleClass("form");
        $("body").toggleClass("lock");    

    })
});
$(document).ready(function() {
    $(".close").click(function(event) {
        event.preventDefault();
        $(".item__button").removeClass("form");
        $(".header__top").removeClass("form");
        $(".button").removeClass("sended");
        $(".login").removeClass("sended");
        $("body").removeClass("lock");
    })
});
$(document).ready(function() {
    $(".button").click(function(event) {
        event.preventDefault();
        setTimeout(function() {
            $(".button").toggleClass("sended");
            $(".login").toggleClass("sended");
        }, 2000); 
    })  
});
//slider
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.project__container', {
        slidesPerView: 4,
        keyboard: {
            enable: true,
            pageUpDown: true,
        },
        mousewheel: {
            sensitivity: 1,
        },
        spaceBetween: 15,
        breakpoints: {
            300:{
                slidesPerView: 1.5,
                spaceBetween: 10,
                initialSlide: 1,

            },
            600:{
                slidesPerView:2.5,
            },
            960:{
                slidesPerView:4,
                spaceBetween: 20,

            }
        }
    });
});