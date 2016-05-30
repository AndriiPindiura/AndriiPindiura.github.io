/// <reference path="../../../../../typings/jquery/jquery.d.ts" />

'use strict';

$(function() {
    var test = {
        questions: [{
            name: 'q0',
            title: 'Вопрос №1',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q0a0', 'q0a4']
        }, {
            name: 'q1',
            title: 'Вопрос №2',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q1a1', 'q1a3']
        }, {
            name: 'q2',
            title: 'Вопрос №3',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q2a2', 'q2a3']
        }, {
            name: 'q3',
            title: 'Вопрос №4',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q3a3', 'q3a4']
        }, {
            name: 'q4',
            title: 'Вопрос №5',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q4a4', 'q4a1']
        }, ]
    }

    try {
        localStorage.setItem('ITtest', JSON.stringify(test));
    } catch (e) {
        alert(e);
    }

    try {
        document.body.innerHTML = tmpl('test', JSON.parse(localStorage.getItem('ITtest')));
    } catch (e) {
        alert(e);
    }

    $('.form__test').on('submit', function(e) {
        e.preventDefault();
        var $userAnswers = $(this).serialize().split('&');
        var answers = [];
        $userAnswers.forEach(function(answer) {
            answers.push(answer.replace('=on', ''));
        });
        //answers.sort();
        var rigthAnswers = [];
        var localTest = JSON.parse(localStorage.getItem('ITtest'));
        localTest.questions.forEach(function(question) {
            // console.log(answers.filter(function (name, element) {
            //     return element.indexOf(name) != -1;
            // }));
            question.correct.forEach(function(correct) {
                rigthAnswers.push(correct);
            });
        });
        console.log(answers);
        console.log(rigthAnswers);
        rigthAnswers.sort();
        answers.sort();
        var result = (answers.length === rigthAnswers.length) && rigthAnswers.every(function(e, i) {
            return e === answers[i];
        });
        console.log(result);
        $('body').append('<div class="modal__overlay"><div class="modal ' + (result ? 'right' : 'wrong') + '"><h2>Your answers are ' + (result ? 'correct' : 'wrong') + '!</h2></div></div>');
        localStorage.clear();

        $('.modal').one('click', function() {
            $(this).parent().remove();
            try {
                localStorage.setItem('ITtest', JSON.stringify(test));
            } catch (e) {
                alert(e);
            }
        });
        document.querySelector('.form__test').reset();
        // alert('form');
    });
});