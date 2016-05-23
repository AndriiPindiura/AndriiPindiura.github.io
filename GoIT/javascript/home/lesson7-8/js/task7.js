/// <reference path="../../../../../typings/jquery/jquery.d.ts" />

$(function () {
    $('.tabs__link').on('click', function (e) {
        e.preventDefault();
        if ($(this).attr('href') != undefined) {
            var selected = $(this).attr('data-tab');
            var $tabs = $('.tabs__tab');

            $.each($tabs, function (i, val) {
                $(this).removeClass('tabs__tab--selected');
                if ($(this).attr('data-tab') == selected) {
                    $(this).addClass('tabs__tab--selected');
                }
            });


            $.each($('.tabs__li'), function (i, val) {
                $(this)
                    .removeClass('tabs__item--selected')
                    .addClass('tabs__item');
            });
            $(this).parent()
                .removeClass('tabs__item')
                .addClass('tabs__item--selected');

            $.each($('.tabs__link'), function () {
                $(this).attr('href', '#');
            });
            $(this).removeAttr('href');
        }
    });

    $('.help').on('click', function () {
        // $('.tooltip').show();
        $('.tooltip').fadeIn();
    });

    $('input').on('mouseover', function (e) {
        // console.log($(this).attr('id'));
        var id = $(this).attr('id');
        $.each($('.tooltip'), function () {
            if ($(this).attr('data-tooltip') == id) {
                $(this).fadeIn();
            }
        });
    });


    $('input').on('mouseleave', function (e) {
        // console.log($(this).attr('id'));
        var id = $(this).attr('id');
        $.each($('.tooltip'), function () {
            if ($(this).attr('data-tooltip') == id) {
                var $tooltip = $(this);
                window.setTimeout(function () {
                    hideTooltip($tooltip);
                }, 200);
                //$(this).hide();
            }
        });
    });

    function hideTooltip($tooltip) {
        $tooltip.hide();
    }

    function showTooltip($tooltip) {
            $tooltip.fadeIn(500);
    }

    $.each($('.tabs__tab'), function (i, val) {
        if ($(this).attr('data-tab') == "nunc") {
            $(this).addClass('tabs__tab--selected');
        }
    });
});

