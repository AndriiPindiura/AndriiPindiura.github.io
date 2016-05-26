/// <reference path="../../../../../typings/jquery/jquery.d.ts" />

$(function() {
    
    $('.jcarousel').jcarousel({
        animation: {
            duration: 400,
            easing:   'linear',
            complete: function() {
            },
            items: '.jcarousel li'
        }
    });
    
    // $(".pop-select").popSelect({
    //     showTitle: false,
    //     width: 600,
    //     maxAllowed: 10
    // });
    
    $('select').niceSelect();

   
    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
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
    
  
    $('img').on('click', function () {
        console.log('img');
        $('.jcarousel').jcarousel('scroll', '+=1');
    });
    
    $('.jcarousel-prev').jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });
            
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

        $('.jcarousel-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    

});
