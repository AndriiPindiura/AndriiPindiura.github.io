/// <reference path="../../../../../typings/jquery/jquery.d.ts" />


$(function() {
    var human = {
        name: '',
        age: 0,
        gender: '',
        height: 0,
        weight: 0
    }

    var worker = {
        job: '',
        salary: 0,
        work: function() {
            alert('work');
        }
    }

    var student = {
        university: '',
        scholarship: 0,
        watchSerials: function() {
            alert('watch');
        }
    }

    worker.__proto__ = human;
    student.___proto__ = human;

    var jhon = worker;
    jhon.name = 'Jhon';
    jhon.age = 30;
    //jhon.work();
    console.log(jhon);

    function search() {
        $.ajax({
            url: 'https://pixabay.com/api/?key=2668312-be09c273d04a440a3f3617dc4&per_page=100&q=' + $('.search input').val(),
            dataType: "jsonp",
            success: function(data) {
                $('.search-results').html(tmpl('result', data));
                $('.result__link').on('mouseenter', function() {
                    $('.modal img').attr('src', $('img:first', this).attr('src'));
                    $('.modal p').text($('img:first', this).attr('data-tags'));
                    var modalLeft;
                    var modalTop
                    if (($(this).position().left + $(this).width() + $('.modal').width()) > $('.wrapper').width()) {
                        modalLeft = $(this).position().left - $('.modal').width();
                    } else {
                        modalLeft = $(this).position().left + $(this).width();
                    }
                    if (($(this).position().top + $('.modal').height()) > $('.wrapper').height()) {
                        modalTop = $(this).position().top - $('.modal').height();

                    } else {
                        modalTop = $(this).position().top - $(this).height();
                    }
                    $('.modal').css({
                        'left': modalLeft + 'px',
                        'top': modalTop + 'px'
                    });
                    $('.modal').show();
                });
                $('.result__link').on('mouseleave', function() {
                    $('.modal').hide();
                });
            },
            error: function(error) {
                console.log(error);
            }
        });

    }

    $('.search').on('keypress', function(key) {
        if (key.keyCode == 13) {
            search();
        }
    });

    $('.search-btn').on('click', search);

    $('.result__link').on('mouseover', function() {
        console.log($(this));
    });
});