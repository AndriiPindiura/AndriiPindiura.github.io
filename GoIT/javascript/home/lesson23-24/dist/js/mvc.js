function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


function Model () {
    let self = this;
    self.tasks = [{id: guid(), description: 'task 1'}, {id: guid(), description: 'task 2'}, {id: guid(), description: 'task 3'}];

    self.addTask = function (task) {
        self.tasks.push({id: guid(), description: task});
        return self;
    }

    return self;
}

function View(model){
    let self = this;
    self.init = function () {
        $('body').add(tmpl($('#wrapper')));
    }
    self.init();
    //console.log(model);
}

$(function(){
    
    console.log(Model);
});
