(function($) {
    $.fn.carousel = function(options) {

        var defaults = {
            leftControl: '.carousel-arrow-left',
            rightControl: '.carousel-arrow-right',
            elementsList: '.carousel',
            pixelsOffset: 125,
            currentLeftValue: 0,
            elementsCount: 0,
            maximumOffset: 0,
            minimumOffset: 0
        }
        
        var settings = $.extend(defaults, options);
        var $leftScroll = $(settings.leftControl);
        var $rightScroll = $(settings.rightControl);
        var $carousel = $(settings.elementsList);
        settings.elementsCount = $carousel.find('li').length;
        settings.minimumOffset = -((settings.elementsCount - 5) * settings.pixelsOffset);

        $leftScroll.on('click', function () {
            if (settings.currentLeftValue != settings.maximumOffset) {
                settings.currentLeftValue += 125;
                $carousel.animate({
                    left: settings.currentLeftValue + "px"
                }, 500);
            }
        });

        $rightScroll.on('click', function() {
            if (settings.currentLeftValue != settings.minimumOffset) {
                settings.currentLeftValue -= 125;
                $carousel.animate({
                    left: settings.currentLeftValue + "px"
                }, 500);
            }
        });
    }
})(jQuery);