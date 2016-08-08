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
                window.localStorage.js2324tasks = JSON.stringify(this.tasks);
                return this.tasks;
            },

            editTask: function(id, task) {
                console.log(id);
                for (var i = 0, l = this.tasks.length; i < l; i++) {
                    if (this.tasks[i].id == id) {
                        this.tasks[i].description = task;
                    }
                }
                window.localStorage.js2324tasks = JSON.stringify(this.tasks);
            },

            toggleTask: function (id, state) {
                for (var i = 0, l = this.tasks.length; i < l; i++) {
                    if (this.tasks[i].id == id) {
                        this.tasks[i].complete = state;
                    }
                }
                window.localStorage.js2324tasks = JSON.stringify(this.tasks);
                console.log(id);
                //console.log(this.tasks);
            },

            showTasks: function () {
            },

            removeTask: function (id) {
                for (var i = 0; i < this.tasks.length; i++) {
                    if (this.tasks[i].id === id) {
                        this.tasks.splice(i, 1);
                    }
                }
                window.localStorage.js2324tasks = JSON.stringify(this.tasks);
                // this.tasks.forEach(function (val) {
                //     if (val.id === task)
                //     {
                //         this.tasks
                //     }
                //     console.log(val.id);
                // });
            }
        };
    });