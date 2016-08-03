/// <reference path="../jquery.d.ts" />

define([
    '../models/model',
    '../views/view',
    'jquery'
], function(model, view, $) {
    'use strict';
    return {

        addTask: function (task, model, view) {
            model.addTask(task);
            view.render(model);
        },

        removeTask: function (taskid, model, view) {
            model.removeTask(taskid);
            view.render(model);
        }
    }
});