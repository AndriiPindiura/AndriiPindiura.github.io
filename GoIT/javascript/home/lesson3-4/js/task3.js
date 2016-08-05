var dom = {
    body: document.body,
    selectedElement: null,
    workElement: null,
    select: function (params) {
        this.selectedElement = document.querySelectorAll(params);
        console.log(this.selectedElement);
    },
    create: function (tag) {
        this.workElement = document.createElement(tag);
    },
    inner: function (html) {
        this.workElement.innerHTML = html;
    },
    append: function (index) {
        this.selectedElement[index].appendChild(this.workElement);
    },
    addClass: function (className) {
        this.workElement.classList.add(className);
    },
    setAttr: function (attr, value) {
        this.workElement.setAttribute(attr, value);
    },
    createBase: function () {
        this.select('body');
        this.create('form');
        this.append(0);
        this.select('form');
        this.create('h2');
        this.inner('Тест по программированию');
        this.append(0);
        this.create('ol');
        this.append(0);
        this.select('ol');
        var ol = this.selectedElement;
        for (var i = 0; i < 3; i++) {
            this.selectedElement = ol;
            this.create('li');
            this.append(0);
            this.select('li');
            this.create('h5');
            this.inner('Вопрос №' + (i + 1));
            this.append(i);
            for (var j = 0; j < 3; j++) {
                this.create('input');
                this.setAttr('type', 'checkbox');
                this.setAttr('id', 'input' + (j + 1));
                console.log(this.workElement);
                this.append(i);
                this.create('label');
                this.setAttr('for', 'input' + (j + 1));
                // document.body.innerText
                this.workElement.innerText = 'Вариант ответа №' + (j + 1);
                // dom.inner = 'Вариант ответа №' + (j + 1);
                console.log(this.workElement);
                this.append(i);
                this.create('div');
                this.addClass('clearfix');
                console.log(this.workElement);
                this.append(i);
            }
        }
        this.select('body');
        this.create('input');
        this.setAttr('type', 'submit');
        this.setAttr('value', 'Проверить мои результаты');
        this.addClass('btn');
        this.append(0);
    }
};


dom.createBase();
