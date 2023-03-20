"use strict";
// Сколько типов JS? 8
// 1. Undefined
// 2. Null
// 3. String
// 4. Number
// 5. Boolean
// 6. Object // Array, Function, Map, Set, Object бывает разный, как правило это определенная стуктура
// 7. BigInt
// 8. Symbol
// unknown - это когда тип не определен и мы его определим впоследствии
// any - это когда тип любой. Старайтесь избегать.
// void - это отсутсвие типа. Когда мы возвращаем из функции ничего.
// enum - это перечисление
// never - это недостижимость.
let a = 'test'; // String
const b = 'test'; // test
let d = [true, true, false]; // boolean[]
const d1 = [true, true, false]; // boolean[]
const d2 = [true]; // boolean[]
const e = { type: 'ficus' }; // Какой будет тип? { type: 'string' };
e.newKey = 'newValue';
;
const user = { name: 'Nik', email: 'email' }; // Вот так писать код.
const user2 = { name: 'Nik', email: 'email', phone: 'test' }; // Я знаю, что этот объект будет IUser
// Тесты. 
// const user3 = { name: 'Nik', email: 'email', phone: 'test' };
// const user3 = { name: 'Nik', email: 'email', phone: 'test' } as const;
// user3.newKey = 'test';
// user3.name = 'test';
// Record<string, string> => { [key: string]: string};
const user4 = {};
const colorObj = {
    red: 'red',
    green: 'green',
    blue: 'blue',
};
;
;
// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };
// interface IColor {
//   [P in Keys]: string;
// }
// interface ICalculator {
//   sum(a: number, b: number): number
//   sub(a: number, b: number): number
//   mul(a: number, b: number): number
// }
// class Calculator implements ICalculator {
//   public sum(a: number, b: number) {
//     return a + b
//   }
//   public sub(a: number, b: number) {
//     return a - b
//   }
//   public mul(a: number, b: number) {
//     return a * b;
//   }
//   protected protectedMethod() {
//     console.log('protected')
//   }
//   private privateMethod() {
//     console.log('private')
//   }
// }
// const calc = new Calculator()
// class SuperCalculate extends Calculator {
//   constructor() {
//     super()
//     this.protectedMethod()
//   }
// }
// setInterval(() => {
// }, 10000000)
