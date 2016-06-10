define(    
    ['../guid'],
    function (guid) {
        return {
            tasks: null,
            addTask: function (task) {
                if (this.tasks != null)
                {
                    this.tasks.push({id: guid(), description: task});
                }
                else {
                    this.tasks = [{id: guid(), description: task}];
                }
                return this.tasks;
            },

            showTasks: function () {
            },

            removeTask: function (id) {
                for (var i = 0; i < this.tasks.length; i++) {
                    if (this.tasks[i].id === id) {
                        this.tasks.splice(i, 1);
                    }
                }
                // this.tasks.forEach(function (val) {
                //     if (val.id === task)
                //     {
                //         this.tasks
                //     }
                //     console.log(val.id);
                // });
            }
        }
    });