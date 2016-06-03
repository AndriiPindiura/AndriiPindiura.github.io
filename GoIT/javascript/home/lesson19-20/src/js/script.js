/// <reference path="jquery.d.ts" />

$(function() {
    $('.jcarousel').jcarousel({
        animation: {
            duration: 400,
            easing: 'linear',
            complete: function() {},
            items: '.jcarousel li'
        }
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '"></a>';
        }
    });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();


    $('.jcarousel img').on('click', function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });

    $('.services a').on('mouseover', function() {
        $('.glass', $(this).parent().parent()).addClass('hover');
    });

    $('.services a').on('mouseleave', function() {
        $('.glass', $(this).parent().parent()).removeClass('hover');
    });

    $('.banners .title').on('click', function() {
        $('.banners .title').each(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
    });

    // $('.jcarousel-prev').jcarouselControl({
    //     target: '-=1'
    // });

    // $('.jcarousel-prev')
    //     .on('jcarouselcontrol:active', function() {
    //         $(this).removeClass('inactive');
    //     })
    //     .on('jcarouselcontrol:inactive', function() {
    //         $(this).addClass('inactive');
    //     })
    //     .jcarouselControl({
    //         target: '-=1'
    //     });

    // $('.jcarousel-next').jcarouselControl({
    //     target: '+=1'
    // });

    // $('.jcarousel-next')
    //     .on('jcarouselcontrol:active', function() {
    //         $(this).removeClass('inactive');
    //     })
    //     .on('jcarouselcontrol:inactive', function() {
    //         $(this).addClass('inactive');
    //     })
    //     .jcarouselControl({
    //         target: '+=1'
    //     });
});