$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');

        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);
        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0 1 2
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.product_slide').slick({
        slidesToShow: 3,
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    // 왼쪽글 오른쪽 이미지 같이 슬라이드 들어가는거 만들때
    // 큰이미지 작은이미지 슬라이드 착시현상 할때
    $('.pic_slide').slick({
        vertical: true,
        asNavFor: ".product_slide",
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;

        $('html, body').animate({ scrollTop: st }, 900);
    });
});