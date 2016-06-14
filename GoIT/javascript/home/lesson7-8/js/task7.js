/// <reference path="../../../../../typings/jquery/jquery.d.ts" />

$(function() {
    let tooltipHtml = '<div class="tooltip"><p>$hint</p></div>'

    $('.tabs__link').on('click', function(e) {
        e.preventDefault();
        if ($(this).attr('href') != undefined) {
            var selected = $(this).attr('data-tab');
            var $tabs = $('.tabs__tab');

            $.each($tabs, function(i, val) {
                $(this).removeClass('tabs__tab--selected');
                if ($(this).attr('data-tab') == selected) {
                    $(this).addClass('tabs__tab--selected');
                }
            });


            $.each($('.tabs__li'), function(i, val) {
                $(this)
                    .removeClass('tabs__item--selected')
                    .addClass('tabs__item');
            });
            $(this).parent()
                .removeClass('tabs__item')
                .addClass('tabs__item--selected');

            $.each($('.tabs__link'), function() {
                $(this).attr('href', '#');
            });
            $(this).removeAttr('href');
        }
    });

    $('.help').on('click', function() {
        $.each($('input'), function() {
            showTooltip($(this));
        });
        $('.tooltip').fadeIn();
    });

    $('input').on('mouseover', function(e) {
        e.preventDefault();
        showTooltip($(this));
    });


    $('input').on('mouseleave', function(e) {
        let $tooltip = $('div:first', $(this).parent());
        window.setTimeout(function() {
            hideTooltip($tooltip);
        }, 200);
        $(this).attr('title', $('p:first', $(this).parent()).text());
    });

    function hideTooltip($tooltip) {
        $tooltip.hide();
        $tooltip.remove();
    }

    function showTooltip($tooltip) {
        var tooltipText = $tooltip.attr('title');
        console.log(tooltipText);
        $tooltip.removeAttr('title');
        if ($('.tooltip:first', $tooltip.parent())[0] === undefined) {
            //console.log($tooltip);
            $tooltip.after(tooltipHtml.replace('$hint', tooltipText));
            $('.tooltip:first', $tooltip.parent()).fadeIn(500);
        }
    }

    $.each($('.tabs__tab'), function(i, val) {
        if ($(this).attr('data-tab') == "nunc") {
            $(this).addClass('tabs__tab--selected');
        }
    });
});