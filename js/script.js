$(document).ready(function () {
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

    $(".slideDown").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(this).closest("section").next("section").offset()
                    .top,
            },
            "slow"
        );
    });
});
