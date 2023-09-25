function initPlugins() {
    //	Mmenuind

    // var menu = new MmenuLight(
    //     document.querySelector('#menu'),
    //     'all'
    // );

    // var navigator = menu.navigation({});
    // var drawer = menu.offcanvas({
    //     position: "right"
    // });

    // document.querySelector('a[href="#menu"]')
    //     .addEventListener('click', evnt => {
    //         evnt.preventDefault();
    //         drawer.open();
    //     });


    //	эффект появления fixed шапки 
    // if (document.querySelector("header")) {
    //     const headerGap = document.querySelector(".hero").offsetHeight;
    //     const FollowScrollHeader = menuContainer => {
    //         let lastScrollPosition = window.scrollY;
    //         window.addEventListener('scroll', () => {
    //             const currentScrollPosition = window.scrollY;
    //             const direction = Math.sign(currentScrollPosition - lastScrollPosition);
    //             lastScrollPosition = currentScrollPosition;
    //             const shouldBeCollapsed = direction > 0 && currentScrollPosition > headerGap;
    //             const shouldBeHidden = currentScrollPosition > headerGap;
    //             menuContainer.classList.toggle('site-header_collapsed', shouldBeCollapsed);
    //             menuContainer.classList.toggle('site-header_scrolled', shouldBeHidden);
    //         })
    //     }
    //     FollowScrollHeader(document.querySelector('header'));
    // }


    // //	кастомные селект оптионс

    // $(function () {
    //     jcf.replaceAll();
    // });

}

window.addEventListener('load', function () {
    initPlugins();

    //	Configurator

    if ($('#cnfg-v1').length > 0) {

        var toTop = document.querySelector('#main-wrapper');
        var CnfgOpeners = document.querySelectorAll('[data-activate-config="true"]');
        var CnfgCloser = document.querySelectorAll('[data-deactivate-config="true"]');
        var departureWindow = document.getElementById('main-departure');
        var configWindow = document.getElementById('cnfg-v1');
        var siteHeader = document.querySelector('.site-header');
        var tabsExcludeCnfg = document.querySelectorAll('#main-departure [data-tab-anchor]:not([data-activate-config="true"])');

        var bttns = document.querySelector('.is-button-active');
        var body = document.querySelector('body');
        var buttons_wrap = document.querySelector('.tabs__buttons_wrap');
        var modal = document.getElementById('modal-container');

        function toggleConfig(e) {


            function afterModal() {
                buttons_wrap.classList.add('modal-fixed');
                body.classList.add('modal-active');
                configWindow.classList.add('cnfg-active');
            }

            function beforeModal() {
                body.classList.remove('modal-active');
                siteHeader.classList.remove('hide-head');
                departureWindow.scrollIntoView({ behavior: 'smooth' });
            }

            e.preventDefault();
            e.stopPropagation();
            configWindow.classList.remove('tab-active');
            modal.className = '';
            modal.classList.add('one');
            siteHeader.classList.add('hide-head');
            setTimeout(afterModal, 1000);

            CnfgCloser.forEach(function (e) {
                e.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    configWindow.classList.remove('cnfg-active');
                    modal.classList.add('out');
                    buttons_wrap.classList.remove('modal-fixed');
                    bttns.classList.remove('is-button-active');
                    setTimeout(beforeModal, 500);
                });
            })
        }

        // scroll to Top 
        document.querySelector('.js-scrollIntoView').addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toTop.scrollIntoView({ behavior: 'smooth' });
        });

        // scroll to Configurator 
        document.querySelector('.js-scroll').addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            departureWindow.scrollIntoView({ behavior: 'smooth' });
        });

        // open configurator 
        CnfgOpeners.forEach(function (e) {
            e.addEventListener('click', toggleConfig);
        });

        // open tab
        tabsExcludeCnfg.forEach(function (e) {
            e.addEventListener('click', function (e) {
                e.preventDefault();
                configWindow.classList.add('tab-active');
                departureWindow.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
});

// 

// Multiple sliders // // // // TODO rewrite



// ajax подгрузка вопросов конфигуратора
$(function () {

    var questions = $('#questions');

    function refreshSelects() {
        var selects = questions.find('select');

        // Улучшаем элемент selects с помощью плагина Chose
        selects.chosen();

        // Ждем изменений
        selects.unbind('change').bind('change', function () {

            // Выбранная опция
            var selected = $(this).find('option').eq(this.selectedIndex);
            // Ищем атрибут data-connection
            var connection = selected.data('connection');


            // Удаляем следующий контейнер li (к=если есть)
            selected.closest('#questions li').nextAll().remove();

            if (connection) {
                fetchSelect(connection);
            }

        });
    }

    var working = false;

    function fetchSelect(val) {

        if (working) {
            return false;
        }
        working = true;

        // TODO получение всех услуг и подбор как "ШЕФ монтаж"
        // $.getJSON('dsasdasd', { key: val }, function (r) {

        //     var connection, options = '';

        //     $.each(r.items, function (k, v) {
        //         connection = '';
        //         if (v) {
        //             connection = 'data-connection="' + v + '"';
        //         }

        //         options += '<option value="' + k + '" ' + connection + '>' + k + '</option>';
        //     });

        //     if (r.defaultText) {

        //         // Плагин Chose требует, чтобы был добавлен пустой элемент опции
        //         // если нужно выводить текст "Пожалуйста, выберите"

        //         options = '<option></option>' + options;
        //     }

        //     // Строим разметку для раздела select

        //     $('<li>\
        // 		<p>' + r.title + '</p>\
        // 		<select data-placeholder="' + r.defaultText + '">\
        // 			' + options + '\
        // 		</select>\
        // 		<span class="divider"></span>\
        // 	</li>').appendTo(questions);

        //     refreshSelects();

        //     working = false;
        // });

    }

    $('#preloader').ajaxStart(function () {
        $(this).show();
    }).ajaxStop(function () {
        $(this).hide();
    });

    // В начале загружаем выбор продукта
    fetchSelect('productSelect');
});


// if (document.getElementsByClassName("opener").size != 0) {

// let coll = document.getElementsByClassName("filter-opener");
// let i;

// function initAllOpeners(...OpenersArray) {
//     for (let opener of Openers) {
//         i++;
//         opener[i].addEventListener("click", function () {
//             this.classList.toggle("active");
//             var content = this.nextElementSibling;
//             if (content.style.maxHeight) {
//                 content.style.maxHeight = null;
//             } else {
//                 content.style.maxHeight = content.scrollHeight + "px";
//             }
//         });
//     }
// }
// initAllOpeners(coll.length);

// }

