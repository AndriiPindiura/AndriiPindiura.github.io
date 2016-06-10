define(
    'model',
    ['guid'],
    function(data) {
        'use strict';
        let self = this;
        self.task = data;
        self.id = guid();
        console.log(self.id);
});