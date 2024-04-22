$(document).ready(function () {
    if (
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html"
    ) {
        $(window).on("load", function () {
            $(".progressBar")
                .animate(
                    {
                        width: "100%",
                    },
                    1600
                )
                .animate(
                    {
                        height: "100%",
                    },
                    900
                )
                .animate(
                    {
                        left: "80%",
                    },
                    1100
                );

            $(".preloader .numbers")
                .delay(2700)
                .animate(
                    {
                        height: $(".offer__numbers").height(),
                    },
                    1100
                );
            $(".preloader")
                .delay(2700)
                .animate(
                    {
                        background: "transparent",
                    },
                    300
                )
                .delay(1100)
                .fadeOut(500);
            setTimeout(function () {
                AOS.init({
                    once: true,
                    offset: -50,
                });

                //NOTE - Слайдер на главной в оффере

                const autoplaySeparator = `<svg class='swiper-pagination-separator'>
    <line x1="0" y1="0" x2="30" y2="0" stroke-width="40" />
    </svg>`;

                const offerSwiper = new Swiper(".offer__slider", {
                    slidesPerView: 1,
                    effect: "creative",
                    loop: true,
                    grabCursor: true,
                    creativeEffect: {
                        prev: {
                            opacity: 0,
                            trancslate: [-50, -70],
                        },
                        next: {
                            opacity: 0,
                            trancslate: [50, 70],
                        },
                    },
                    autoplay: {
                        delay: $(".offer__slider").data("autoplay-delay"),
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".offer__slider .swiper-pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                            return (
                                '<span class="' +
                                className +
                                '">' +
                                (index + 1) +
                                "</span>" +
                                autoplaySeparator
                            );
                        },
                    },
                    on: {
                        init() {
                            $(
                                ".swiper-pagination-separator-active"
                            ).removeClass("swiper-pagination-separator-active");
                            $(".swiper-pagination-bullet-active")
                                .next()
                                .addClass("swiper-pagination-separator-active");
                        },
                        slideChange() {
                            $(
                                ".swiper-pagination-separator-active"
                            ).removeClass("swiper-pagination-separator-active");
                            $(".swiper-pagination-bullet-active")
                                .next()
                                .addClass("swiper-pagination-separator-active");
                        },
                    },
                });
            }, 3600);
            setTimeout(function () {
                $("html, body").css("overflow", "auto");
            }, 4100);
        });
    } else {
        $(".preloader").css("display", "none");
        $("html, body").css("overflow", "auto");
    }

    //NOTE - Функционал работы аккордеонов

    

    let accordeons = $(".accordeon");

    $(".accordeon.active").find(".accordeon__body").slideDown();

    function accordeonsCheck() {

        if (!$(this).hasClass("active")) {

            accordeons.removeClass("active").find(".accordeon__body").slideUp(600);

            $(this).addClass("active").find(".accordeon__body").slideDown(600);

        }

    }

    accordeons.click(accordeonsCheck);

    
    let footerNav = $(".footer__nav ul");
    let footerNavWidth = footerNav.width();
    let footerNavChildsWidth = 0;
    footerNav
        .children()
        .slice(0, 3)
        .each(function () {
            footerNavChildsWidth += $(this).width();
        });
    footerNav.css("columnGap", (footerNavWidth - footerNavChildsWidth) / 2);
    
    const headerSwiper = new Swiper(".header__slider", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        grabCursor: true,
        // If we need pagination
        pagination: {
            el: ".header__slider .swiper-pagination",
            clickable: true,
        },
        // // Navigation arrows
        navigation: {
            nextEl: ".header__slider .swiper-button-next",
            prevEl: ".header__slider .swiper-button-prev",
        },
    });
    
    const teamSwiper = new Swiper(".team__slider", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: true,
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    const reviewsSwiper = new Swiper(".reviews__slider", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        grabCursor: true,
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    const blogSwiper = new Swiper(".blog__slider", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        grabCursor: true,
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    $(".float__burger").click(function () {
        $(this).toggleClass("active");
    
        if ($(this).hasClass("active")) {
            $(".header__menu").animate(
                {
                    left: "0",
                },
                "slow",
                function () {
                    $(".header__menu").css("dispaly", "block");
                }
            );
        } else {
            $(".header__menu").animate(
                {
                    left: "-200%",
                },
                "slow",
                function () {
                    $(".header__menu").css("dispaly", "none");
                }
            );
        }
    });
    

    //NOTE - Добавление сепараторов между ссылками в хлебных крошках

    let breadcrumbsSeparator = $(
        "<span class='breadcrumbs__separator'></span>"
    );
    $(".breadcrumbs a").after(breadcrumbsSeparator);

    //NOTE - Фиксирование офферной картинки в зависимости от ширины

    if ($(".offer__image").width() > 600) {
        $(".offer__image").css(
            "right",
            "-" +
                (document.body.clientWidth - $(".container").width()) / 2 +
                "px"
        );
        $(".offer__content").width(550);
    }

    //NOTE - Функционал кнопки слайда на следующий блок

    $(".slideDown").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(this).closest("section").next("section").offset()
                    .top,
            },
            "slow"
        );
    });

    //NOTE - Функционал кастомного чекбокса

    $(".check-label").on("click", function () {
        let isChecked = $(this).children("input").prop("checked");
        if (isChecked) {
            $(this).find(".fakecheck").addClass("checked");
        } else {
            $(this).find(".fakecheck").removeClass("checked");
        }
    });

    //NOTE - Маска для инпутов номера телефона

    let $telInput = $("[type='tel']");
    let isTelInput = false;

    $telInput.inputmask({
        mask: "+7 (999) 999 – 99 – 99",
        placeholder: "+7 (xxx) xxx – xx – xx",
    });
    $telInput.on("focus", function () {
        $(this).css("color", "#ffffff");
        isTelInput = true;
    });
    $telInput.on("blur", function () {
        if (!$(this).val()) {
            $(this).css("color", "#686767");
        }
        isTelInput = false;
    });
    $telInput.on("mouseover", function () {
        if (!$(this).val()) {
            $(this).css("color", "#ffffff");
        }
    });
    $telInput.on("mouseleave", function () {
        if (!$(this).val() && !isTelInput) {
            $(this).css("color", "#686767");
        }
    });
    $telInput.on("input", function () {
        if ($(this).val()) {
            isTelInput = true;
            $(this).css("color", "#ffffff");
        } else {
            isTelInput = false;
        }
    });

    //NOTE - Изменение блока обратной связи на странице контактов

    if ($(".feedback").closest(".contacts-page").length) {
        $(".feedback__contacnts .txt").text(
            "Заполните форму ниже и наш специалист свяжеться с вами чтобы ответить на все ваши вопросы!"
        );
    }

    if ($(".post-single").length) {
        const headers = [];
        const indexes = [0];
        // функция для получения предыдущего header
        const getPrevHeader = (diff = 0) => {
            if (indexes.length - diff === 0) {
                return null;
            }
            let header = headers[indexes[0]];
            for (let i = 1, length = indexes.length - diff; i < length; i++) {
                header = header.contains[indexes[i]];
            }
            return header;
        };
        // функция для добавления item в headers
        const addItemToHeaders = (el, diff) => {
            let header = headers;
            if (diff === 0) {
                header =
                    indexes.length > 1 ? getPrevHeader(1).contains : header;
                indexes.length > 1
                    ? indexes[indexes.length - 1]++
                    : indexes[0]++;
            } else if (diff > 0) {
                header = getPrevHeader().contains;
                indexes.push(0);
            } else if (diff < 0) {
                const parentHeader = getPrevHeader(Math.abs(diff) + 1);
                for (let i = 0; i < Math.abs(diff); i++) {
                    indexes.pop();
                }
                header = parentHeader ? parentHeader.contains : header;
                parentHeader ? indexes[indexes.length - 1]++ : indexes[0]++;
            }
            header.push({ el, contains: [] });
        };
        // добавим заголовки в headers
        document
            .querySelectorAll(".post-content__text h3, .post-content__text h4")
            .forEach((el, index) => {
                if (!el.id) {
                    el.id = `id-${index}`;
                }
                if (!index) {
                    addItemToHeaders(el);
                    return;
                }
                const diff =
                    el.tagName.substring(1) -
                    getPrevHeader().el.tagName.substring(1);
                addItemToHeaders(el, diff);
            });
        // сформируем оглавление страницы для вставки его на страницу
        let html = "";
        const createTableOfContents = (items) => {
            html += "<ol>";
            for (let i = 0, length = items.length; i < length; i++) {
                const url = `#${items[i].el.id}`;
                html += `<li><a href="${url}">${items[i].el.textContent}</a>`;
                if (items[i].contains.length) {
                    createTableOfContents(items[i].contains);
                }
                html += "</li>";
            }
            html += "</ol>";
        };
        createTableOfContents(headers);
        html = `<nav><h3>Содержание:</h3>${html}</nav>`;
        // вставим оглавление в тег <aside>
        document.querySelector("aside").insertAdjacentHTML("afterbegin", html);
    }

    $(".post-content__aside nav a").click(function (event) {
        event.preventDefault();
        let target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top - 200,
                },
                1000
            );
        }
    });

    //NOTE - Слайдер на главной в блоке "О нас"

    const aboutSwiper = new Swiper(".about__slider", {
        effect: "creative",
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        // If we need pagination
        creativeEffect: {
            prev: {
                scale: 0,
                origin: "left bottom",
            },
            next: {
                scale: 1,
                origin: "left bottom",
            },
        },
        pagination: {
            el: ".about__slider .swiper-pagination",
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".about__slider .swiper-button-next",
            prevEl: ".about__slider .swiper-button-prev",
        },
    });

    //NOTE - Слайдер на странице адвоката в блоке "Документация"

    let docsSliderWidth =
        $(".docs__slide-width").width() *
            $(".docs__slider").data("slides-per-view") +
        20 * ($(".docs__slider").data("slides-per-view") - 1);
    $(".docs__slider").width(docsSliderWidth);

    const docsSlider = new Swiper(".docs__slider", {
        loop: true,
        slidesPerView: $(".docs__slider").data("slides-per-view"),
        spaceBetween: 20,
        grabCursor: true,
        // If we need pagination
        pagination: {
            el: ".docs__slider .swiper-pagination",
            clickable: true,
        },
        // // Navigation arrows
        navigation: {
            nextEl: ".docs__slider .swiper-button-next",
            prevEl: ".docs__slider .swiper-button-prev",
        },
    });

    //NOTE - Галлерея на странице адвоката в блоке "Документация"

    Fancybox.bind("[data-fancybox]", {
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close",
        ],
        thumbs: {
            autoStart: true, // Автоматический запуск слайд-шоу
        },
    });
});
