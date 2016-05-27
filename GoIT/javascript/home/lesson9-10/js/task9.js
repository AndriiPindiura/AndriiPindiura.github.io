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
	$('.nice-check').mousedown(
function() {

	changeCheck($(this));

});


	$('.nice-check').each(
function() {

	changeCheckStart($(this));

});

	function changeCheck(el)
{
		var input = el.find('input').eq(0);
		if(!input.attr('checked')) {
			el.css('background-position','0 -17px');	
			input.attr('checked', true);
		} else {
			el.css('background-position','0 0');	
			input.attr('checked', false);
		}
		return true;
	}

	function changeCheckStart(el)
{
		var input = el.find('input').eq(0);
		if(input.attr('checked')) {
			el.css('background-position','0 -17px');	
		}
		return true;
	}



	$('.submenu').hide();

	$('.submenu').parent().addClass('arrow');

	$('.menu li').on('mouseover', function (e) {
		e.stopPropagation();
		// console.log($(this).top());
		var $submenu = $('div:first', this);
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
	});

	$('.menu li').on('mouseleave', function () {
		if ($(this).parent().parent().hasClass('submenu'))
{
			$('div:first', this).fadeOut(600);
		}
		else
{
			$('div:first', this).slideUp();
		}

	});
});
