define(['jquery', 'models/Model', 'views/View', 'controllers/Controller'], function($, Model, View, Controller) {
    $(function() {
        Model.addTask('task 1');
        Model.addTask('task 2');
        Model.addTask('task 3');
        Model.showTasks();
        View.init();
        View.render({ tasks: Model.tasks});

        $('.todo-list').on('click', '.destroy', function () {
            Controller.removeTask($(this).parent().parent().attr('data-id'), Model, View);
            console.log($(this));
        });

        $('.add').on('keypress', function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 13 && $(this).val().length > 0) {
                Controller.addTask($(this).val(), Model, View);
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