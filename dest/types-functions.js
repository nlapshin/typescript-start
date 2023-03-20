"use strict";
// Какие типы есть в Typescript чего нет в Javascript
// unknown - это когда тип ещё не определен
console.log(sum(2, 2));
console.log(sum('2', '2'));
var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["GREEN"] = "GREEN";
    Color["BLUE"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.RED); // 0
/*
let bool: boolean = true // bool может принимать true и false
let boolTrue: true | false = true // boolTrue - только true значение

bool = false
boolTrue = false
*/
const color = 'blue'; // ограничивать наши типы
const obj = {}; // Partial все ключи в необязательный режим
obj.key = 'name';
obj['key'] = 'name';
obj.test = 'test';
obj.tt12 = 123;
function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return `${a} plus ${b}`;
    }
}
// Функция без return то возвращает она void
function voidFn() {
    console.log('void');
}
const log = (namespace, message = 'log') => {
    console.log(`${namespace}: ${message}`);
};
const green = 'green';
setInterval(() => {
}, 10000000);
