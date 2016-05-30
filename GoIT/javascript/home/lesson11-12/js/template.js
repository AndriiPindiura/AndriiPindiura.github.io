window.addEventListener('DOMContentLoaded', function() {
    // alert('test');
    var data = {
        name: 'Пиндюра Андрей Викторович',
        jobtitle: 'Инженер в аграрной компании',
        reasons: ['Инженерить надоело и не интересно',
            'Платят не так что бы мало, но хочу больше и в валюте',
            'Хочу профессию не привязанную к местности, стране'],
        phone: '+380674478086',
        fb: 'http://facebook.com/aydnep',
        feedback: 'Если нужно, могу помочь советом'
    }
    document.body.innerHTML = tmpl('template', data);
});