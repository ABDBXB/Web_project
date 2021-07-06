$(function(){
    if($('.gallery-wrapper').length){
        var galleryThumbs = new Swiper('.gallery-wrapper .content .gallery.thumb .swiper-container', {
            speed: 900,
            effect: 'slide',
            slidesPerView: 'auto',
            spaceBetween: 12,
            grabCursor: false,
            simulateTouch: true,
            loop: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.gallery-wrapper .content .gallery.thumb .swiper-next-button',
                prevEl: '.gallery-wrapper .content .gallery.thumb .swiper-prev-button',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                414: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 7,
                    spaceBetween: 10
                }
            }
        });

        var galleryFull = new Swiper('.gallery-wrapper .content .gallery.full .swiper-container', {
            speed: 900,
            effect: 'slide',
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
                stopOnLastSlide: false
            },
            keyboard: {
                enabled: true,
            },
            grabCursor: false,
            simulateTouch: false,
            loop: true,
            navigation: {
                nextEl: '.gallery-wrapper .content .gallery.full .swiper-next-button',
                prevEl: '.gallery-wrapper .content .gallery.full .swiper-prev-button',
            },
            thumbs: {
                swiper: galleryThumbs
            },
            on: {
                slideChangeTransitionStart: function () {
                    $('.gallery-wrapper .content .gallery.full .swiper-slide .overlay').removeClass('show');
                },
                slideChangeTransitionEnd: function () {
                    $('.gallery-wrapper .content .gallery.full .swiper-slide-active .overlay').addClass('show');
                }
            }
        });
    }
});


$(window).on("load", function(){
        $('.loader').fadeOut();
    });
