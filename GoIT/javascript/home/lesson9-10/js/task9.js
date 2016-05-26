/// <reference path="../../../../../typings/jquery/jquery.d.ts" />

$(function() {
    $('select').niceSelect();
    
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
    
    
    /* CHECKBOX */
        $(".nice-check").mousedown(
        /* при клике на чекбоксе меняем его вид и значение */
            function() {

                changeCheck($(this));
                
        });


        $(".nice-check").each(
        /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
            function() {
                
                changeCheckStart($(this));
            
        });

        function changeCheck(el)
        /* 
            функция смены вида и значения чекбокса
            el - span контейнер дял обычного чекбокса
            input - чекбокс
        */
        {
            var el = el,
                input = el.find("input").eq(0);
            if(!input.attr("checked")) {
                el.css("background-position","0 -17px");	
                input.attr("checked", true)
            } else {
                el.css("background-position","0 0");	
                input.attr("checked", false)
            }
            return true;
        }

        function changeCheckStart(el)
        /* 
            если установлен атрибут checked, меняем вид чекбокса
        */
        {
        var el = el,
                input = el.find("input").eq(0);
            if(input.attr("checked")) {
                el.css("background-position","0 -17px");	
                }
            return true;
        }



        $('.submenu').hide();
        
        $('.submenu').parent().addClass('arrow');
        
        $('.menu li').on('mouseover', function (e) {
            e.stopPropagation();
            console.log($(this).width());
            $submenu = $('div:first', this);
            if ($(this).parent().parent().hasClass('submenu'))
            {
                $submenu.css({top: $(this).position().top - 5, left: $(this).position().left + $(this).width()});
                $submenu.fadeIn(600);
            }
            else
            {
                $submenu.css({top: $(this).height() - 5, left: $(this).position().left});
                $submenu.slideDown();
            }
            // $(this).fadeIn
            // $(this).slideDown
            
        });
        
        $('.menu li').on('mouseleave', function (e) {
            //$('div:first', this).hide();
            if ($(this).parent().parent().hasClass('submenu'))
            {
                $('div:first', this).fadeOut(600);
            }
            else
            {
                $('div:first', this).slideUp();
            }

        });
        
        // $('.menu li').hover(function () {
        //     $('div:first', this).show();
        // },
        // function () {
        //     $('ul:first', this).hide();
        // });



});
