// burger-menu
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .navigation__list').toggleClass('active');
    });
});

