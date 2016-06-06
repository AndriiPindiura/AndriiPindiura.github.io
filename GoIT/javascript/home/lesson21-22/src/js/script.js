/// <reference path="jquery.d.ts" />
'use strict';

$(function() {

    try {
        localStorage.setItem('ITtest', JSON.stringify(hw13.test));
    } catch (e) {
        alert(e);
    }

    try {
        document.body.innerHTML = _.template(document.getElementById('template').innerHTML)(JSON.parse(localStorage.getItem('ITtest')));
        //tmpl('test', JSON.parse(localStorage.getItem('ITtest')));
    } catch (e) {
        alert(e);
    }

    $('.form__test').on('submit', function(e) {
        e.preventDefault();
        let userAnswers = hw13.serializeUserAnswers($(this).serialize());
        let rigthAnswers = hw13.serializeCorrectAnswers(JSON.parse(localStorage.getItem('ITtest')));
        //console.log($(this).serialize());
        // console.log(JSON.parse(localStorage.getItem('ITtest')));
        // console.log(userAnswers);
        // console.log(rigthAnswers);
        let result = hw13.checkAnswers(userAnswers, rigthAnswers);
        // console.log(result);
        $('body').append('<div class="modal-overlay"><div class="modal ' + (result ? 'right' : 'wrong') + '"><h2>Your answers are ' + (result ? 'correct' : 'wrong') + '!</h2></div></div>');
        localStorage.clear();

        $('.modal').one('click', function() {
            $(this).parent().remove();
            try {
                localStorage.setItem('ITtest', JSON.stringify(hw13.test));
            } catch (e) {
                alert(e);
            }
        });
        document.querySelector('.form').reset();
    });
});