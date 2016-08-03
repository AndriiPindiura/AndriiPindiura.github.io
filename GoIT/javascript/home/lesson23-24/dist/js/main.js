define(['jquery', 'models/model', 'views/view', 'controllers/controller'], function($, model, view, controller) {
    $(function() {
        model.addTask('task 1');
        model.addTask('task 2');
        model.addTask('task 3');
        model.showTasks();
        view.init();
        view.render({ tasks: model.tasks});

        $('.todo-list').on('click', '.destroy', function () {
            controller.removeTask($(this).parent().parent().attr('data-id'), model, view);
            console.log($(this));
        });

        $('.add').on('keypress', function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 13 && $(this).val().length > 0) {
                controller.addTask($(this).val(), model, view);
                $(this).val(' ');
            }
        });

        $('.todo-list').on('click', '.toggle', function () {
            if ($(this).is(':checked'))
            {
               $('.edit:first', $(this).parent().parent()).addClass('complete');
            }
            else {
               $('.edit:first', $(this).parent().parent()).removeClass('complete');
            }
        })
    });
});