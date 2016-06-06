var hw13 = require('../src/js/hw13.js');

describe("hm13", function() {
    it("it should parse form data to array", function() {
        //prepare
        var result;
        // act
        result = hw13.serializeUserAnswers('h1=on&h2=on&h3=on');
        // console.log(result);
        expect(result).toEqual(['h1', 'h2', 'h3']);
    });
    it("it should parse js object to array of rigth answers", function() {
        //prepare
        var result;
        // act
        result = hw13.serializeCorrectAnswers(JSON.parse('{"questions":[{"name":"q0","title":"Вопрос №1","answers":["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3","Вариант ответа №4","Вариант ответа №5"],"correct":["q0a0","q0a4"]},{"name":"q1","title":"Вопрос №2","answers":["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3","Вариант ответа №4","Вариант ответа №5"],"correct":["q1a1","q1a3"]},{"name":"q2","title":"Вопрос №3","answers":["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3","Вариант ответа №4","Вариант ответа №5"],"correct":["q2a2","q2a3"]}]}'));
        // console.log(result);
        expect(result).toEqual(['q0a0', 'q0a4', 'q1a1', 'q1a3', 'q2a2', 'q2a3']);
    });
    it("it should compare two arrays", function() {
        //prepare
        var result;
        // act
        result = hw13.checkAnswers(['test1', 'test3', 'test2'], ['test3', 'test2', 'test1']);
        // console.log(result);
        expect(result).toBe(true);
    });

});