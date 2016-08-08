/// <reference path="../jquery.d.ts" />

define([
    '../models/model',
    '../controllers/controller',
    '../libs/resig',
    'jquery'
], function(model, controller, resig, $) {
    'use strict';
    return {
        ul: null,
        init: function () {
            var template = $('#wrapper').html();
            $('body').html(tmpl(template, {  }));
            this.ul = $('.todo-list');
            // console.log(this.ul);
        },
        render: function (model) {
            // console.log(model);
            // console.log(this.ul);
            var template = $('#tasks').html();
            this.ul.html(tmpl(template, model));
        }
    };
});