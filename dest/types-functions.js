"use strict";
// Основы Typescript.
// 1. Кто работал с TS.
// 2. Поставьте оценку от 1 до 5, нравится не нравится.
// Зачем нам TS?
// 1. Типизация.
// 2. ООП.
// 3. Декораторов и т.д.
// Хочу иметь типизированный код.
// 1. Код более читабельный.
// 2. Код имеет меньше неопределенностей.
// 3. Код имеет явные связи.
// 4. В коде сложнее допустить ошибку.
// Вывод: код более поддерживаемый.
// Надо что-то изменить.
// Типы будут описаны. И если разработчик что-то делает не так, то
// он на старте получит ошибку.
// function processHardThings(arrObject, options, flags, additionalData) {
//   /* 100 кода строчек */
// }
// interface IUser {
//   name: string;
//   price?: string | number | null; // number или string или null или undefined;
//   cpm: any; // number или string или null;
//   revenue: any; // number или string или null;
// }
// const user: IUser = {
//   name: 'nik',
//   // price
// };
// user.price = '1.12'; // Либо преобразовывать в число и т.д.
// Код компилится -> мы можем отлавливать ошибки на стадии сборки проекта.
// Какие есть типы в JS?
// 1. undefined.
// 2. null.
// 3. number.
// 4. string.
// 5. boolean.
// 6. Object(array и другие сложные типы).
// 7. Symbol.
// 8. BigInt - для больших чисел.
// Typescript unknown.
// Чем отличается unknown от any?
// any мы отключаем типизацию для нашей переменной.
let anyVar;
anyVar = 'string';
anyVar = {};
let unknownVar = null; // Мы пока не знаем что за тип
unknownVar = 'string';
console.log(unknownVar);
unknownVar = 0;
let a = 1042; // number;
let b = 'apples and oranges'; // string
const c = 'pineapples'; // pineapples - тип как литеральная переменная
let d = [true, true, false]; // boolean[]
let e = { type: 'ficus' }; // { type: 'string' }
let f = [1, false]; // (number | boolean)[]
const g = [3]; // number[]
let h = null; // any
let role = 'admin';
// Сужать типы
role = 'user';
class Logger {
    constructor() {
    }
    info() {
        this.flush();
    }
    // private, но доступен при наследовании
    protectedMethod() {
    }
    // private - это внутренний метод не доступны в экземпляре
    flush() {
    }
}
class NewLogger extends Logger {
    publicMethod() {
        this.protectedMethod();
    }
}
const logger = new Logger();
let userKey = 'password';
const obj = {
    name: 'string'
};
let objKey = 'name';
// // Какие типы есть в Typescript чего нет в Javascript
// // unknown - это когда тип ещё не определен
// console.log(sum(2, 2))
// console.log(sum('2', '2'))
// enum Color {
//   RED = 'RED', // Ключ RED - значение RED
//   GREEN = 'GREEN', // Ключ GREEN - значение 1
//   BLUE = 'BLUE'
// }
// console.log(Color.RED) // 0
// /*
// let bool: boolean = true // bool может принимать true и false
// let boolTrue: true | false = true // boolTrue - только true значение
// bool = false
// boolTrue = false
// */
// const color: 'red' | 'green' | 'blue' = 'blue' // ограничивать наши типы
// // string[] - массив строк
// // Array<string> - типа генерик
// // const colorArray: readonly ('red' | 'green')[] = [
// //   'red',
// //   'green'
// // ] as const
// // const arr: number[] = []
// // colorArray.push('not-color')
// // colorArray.push('blue')
// type MyObject = {
//   [key: string]: string | number
// }
// const obj: Record<string, string | number> = {} // Partial все ключи в необязательный режим
// obj.key = 'name'
// obj['key'] = 'name'
// obj.test = 'test'
// obj.tt12 = 123
// function sum(a: unknown, b: unknown) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b
//   }
//   if (typeof a === 'string' && typeof b === 'string') {
//     return `${a} plus ${b}`
//   }
// }
// // Функция без return то возвращает она void
// function voidFn(): void {
//   console.log('void')
// }
// type Log = (n: string, m: string) => void
// type TypeColor = 'red' | 'black' | 'green'
// const log: Log = (namespace, message = 'log') => {
//   console.log(`${namespace}: ${message}`)
// }
// const green: TypeColor = 'green'
// setInterval(() => {
// }, 10000000)
