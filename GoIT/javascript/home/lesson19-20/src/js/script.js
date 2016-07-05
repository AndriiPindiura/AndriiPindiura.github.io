/// <reference path="jquery.d.ts" />


$(function() {
    // var data = {};

    var data = $.ajax({
        async: false,
        url: 'js/data.json',
        dataType: 'json'
    }).responseJSON;

    console.log(data);
    var skills = _.sortBy(_.uniq(_.flatten(_.map(data, 'skills'))));
    console.log(skills);
    var names = _.map(_.sortBy(data, ['friends']), 'name');
    console.log(names);
    var friends = _.uniq(_.map(_.flattenDeep(_.map(data, 'friends')), 'name'));
    console.log(friends);


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

    $('.glass').on('click', function() {
        $('.services figure').each(function(){
            if ($(this).hasClass('active')) {
                 $(this).removeClass('active');
            }
        });
        console.log($(this));
        $(this).parent().parent().toggleClass('active');
        // console.log($(this).hasClass('.active'));
        // if ($(this).hasClass('active')) {
        //     $(this).removeClass('active');
        // } else {
        //     $(this).addClass('active');
        // }
    });

    $('.services a').on('mouseover', function() {
        $('.glass', $(this).parent().parent()).addClass('hover');
    });

    $('.services a').on('mouseleave', function() {
        $('.glass', $(this).parent().parent()).removeClass('hover');
    });

    $('.readmore').on('click', function(e) {
        e.preventDefault();
        var $p = $('p:first', $(this).parent());
        if ($p.hasClass('readmore')) {
            // $p.removeClass('readmore');
            $(this).text('Read More');
        } else {
            // $p.addClass('readmore');
            $(this).text('collapse');
        }
        $p.toggleClass('readmore');
    });

    $('.banners .title').on('click', function() {
        // $('.banners .title').each(function() {
        //     if ($(this).hasClass('active')) {
        //         $(this).removeClass('active');
        //     }
        // });
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

});