/// <reference path="../jquery.d.ts" />

define([
    '../models/Model',
    '../views/View',
    'jquery'
], function(Model, View, $) {
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