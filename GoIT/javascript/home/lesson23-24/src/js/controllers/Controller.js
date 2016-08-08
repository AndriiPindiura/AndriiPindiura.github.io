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

        editTask: function(id, task, model, view) {
            console.log(model);
            model.editTask(id, task);
            view.render(model);
        },

        toggleTask: function (id, state, model, view) {
            model.toggleTask(id, state);
            view.render(model);
        },

        removeTask: function (taskid, model, view) {
            model.removeTask(taskid);
            view.render(model);
        }
    };
});