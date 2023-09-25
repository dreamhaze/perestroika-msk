// Прибиваем меню при скролле

(function () {
    $(window).scroll(function () {
        if ((window.pageYOffset > 250) && (window.innerWidth <= 768)) {
            $('.js-top-panel-fixed').addClass('fixed');
            $('.top-panel-wrapper').addClass('z-index');
        } else {
            $('.js-top-panel-fixed').removeClass('fixed');
            $('top-panel-wrapper').removeClass('z-index');
        }
    });

    $('.js-arrow-up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
        $(this).blur();
    });
})();

//	Промо слайдер на главной

var swiperMain = new Swiper('.hero__slider', {
    loop: true,
    speed: 3500,
    slidersPerView: 1,
    effect: "fade",
    autoplay: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.hero .swiper-button-next',
        prevEl: '.hero .swiper-button-prev',
    },
});

/**
 * PRODUCT_TABS
 */
$(document).ready(function () {
    $(".js-tabs").dataTabs({
        state: "tab", // роль плагина tab/accordion
        event: "click",
        activeIndex: 1, // активный элемент
        speedSwitching: 5000, // скорость авто переключения
        useToggle: false, // Скрытие активных вкладок
        autoSwitching: false, // авто переключение
        hideOnClosest: false, // hide on closest
        hideOnMouseout: false, // hide on Mouseout
        prevent: true, // preventDefault
        debug: false, // дебагер
        useHash: true, // использовать window.location.hash
        useJqMethods: true, // использовать jq методы анимаций?
        loop: false, // замкнуть цикл при переключении?
        initOpenTab: true, // инициализировать активный таб?
        pauseVideoAudio: true, // ставить на паузу аудио и видео при переключении табов?
        mouseoutTimeOut: false, // таймаут после снятия курсора
        jqMethodOpenSpeed: 300, // скорость открытия табы
        jqMethodOpen: "fadeIn", // jq метод открытия табы
        jqMethodCloseSpeed: 0, // скорость закрытия табы
        jqMethodClose: "slideUp", // jq метод закрытия табы
        onInit: function () { }, // плагин инициализировался (onInit)
        onTab: function (e) {
            if (e.states.activeIndex == 2) {
                setTimeout(() => {
                    document.getElementById("maintab").classList.add("is-button-active");
                }, 100);
            }
        }, // переключили таб (self)
        onMouseover: function () { }, // навели на блок табов (event, self)
        onMouseout: function () { } // убрали курсор с блока табов (event, self)
    });
});


//   $(document).ready(function() {
//     $(document).on("click", ".js-scroll", function(event) {
//         var scrollTo = $(this).attr('href');
//         var destination = $(scrollTo).offset().top - 20;
//         event.preventDefault();
//         $("html:not(:animated),body:not(:animated)").animate({
//             scrollTop: destination
//         }, 800);
//     });
//   });


/**
 * SCROLL_TOP
 */
// $(document).ready(function() {
//     var scroll_top = new DetectiveScroll({
//       trigger: {
//         el: $(".js-scroll_top"),
//         scroll: $(window).height() / 3
//       }
//     });

//     $(document).on("click", ".js-scroll_top", function(event) {
//       event.preventDefault();
//       window.scroll({ top: 0, left: 0, behavior: "smooth" });
//     });
//   });