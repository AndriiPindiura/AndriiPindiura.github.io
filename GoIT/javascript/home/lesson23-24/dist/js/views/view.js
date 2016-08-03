/// <reference path="../jquery.d.ts" />

define([
    '../models/model',
    '../libs/resig',
    'jquery'
], function(model, resig, $) {
    'use strict';
    return {
        ul: null,
        init: function () {
            let template = $('#wrapper').html();
            $('body').html(tmpl(template, {  }));
            this.ul = $('.todo-list');
            // console.log(this.ul);
        },
        render: function (model) {
            // console.log(model);
            // console.log(this.ul);
            let template = $('#tasks').html();
            this.ul.html(tmpl(template, model));
            // console.log(tmpl(template, model));
        }
    }
});