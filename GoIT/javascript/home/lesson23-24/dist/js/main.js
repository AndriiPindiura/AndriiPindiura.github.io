define(['jquery', 'models/model', 'views/view', 'controllers/controller'], function($, model, view, controller) {
    $(function() {
        
        if (!window.localStorage.js2324tasks) {
            model.addTask('task 1');
            model.addTask('task 2');
            model.addTask('task 3');
        }
        else {
            console.log(window.localStorage.js2324tasks);
            model.tasks = JSON.parse(window.localStorage.js2324tasks);
        }
        model.showTasks();
        view.init();
        view.render({ tasks: model.tasks});

        $('.todo-list').on('click', '.destroy', function () {
            controller.removeTask($(this).parent().parent().attr('data-id'), model, view);
            window.localStorage.js2324tasks = JSON.stringify(model.tasks);
            // console.log($(this));
        });

        $('.add').on('keypress', function (e) {
            // console.log(e.keyCode);
            if (e.keyCode == 13 && $(this).val().length > 0) {
                controller.addTask($(this).val(), model, view);
                window.localStorage.js2324tasks = JSON.stringify(model.tasks);
                $(this).val(' ');
            }
        });

        $('.todo-list').on('click', '.toggle', function () {
            //console.log($(this).attr('id'));
            // console.log($('.edit:first', $(this).parent().parent()));
            if ($(this).is(':checked'))
            {
               $('.edit:first', $(this).parent().parent()).addClass('complete');
               controller.toggleTask($(this).attr('id'), true, model, view);
            }
            else {
               $('.edit:first', $(this).parent().parent()).removeClass('complete');
               controller.toggleTask($(this).attr('id'), false, model, view);
            }
            window.localStorage.js2324tasks = JSON.stringify(model.tasks);
        });
    });
});