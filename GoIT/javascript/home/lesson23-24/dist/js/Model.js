define('model',
    ['guid'],
    function () {
        var Task = function () {
            let self = this;
            self.tasks = [{id: guid(), description: 'task1'}, {id: guid(), description: 'task2'}, {id: guid(), description: 'task3'}];
            console.log(self.id);
            self.add = function (task) {
                if (task.length == 0) {
                    return;
                }
                self.tasks.push({id: guid(), description: task});
                return self.tasks;
            }

        }
        console.log(Task.tasks);
    });