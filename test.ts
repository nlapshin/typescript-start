// // 1. Какой тип выведет TypeScript для каждого из этих значений?


// let a = 1042 // number
// let b = 'apples and oranges' // string
// const c = 'pineapples' // pineapples
// let d = [true, true, false] // boolean[]
// let e = {type: 'ficus'} // { type: string };
// let f = [1, false] // (number | boolean)[]
// const g: (number | string)[] = [3] // number[]
// let h = null // any


// const arrayAsConst = [3] as const;
// const objAsConst = { key: 'value' } as const;

// const bool: boolean = true;
// const num: number = 3;
// const str: string = 'string';

// const obj: Record<string, number | string> = { key: 'value' };

// interface IUser {
//   email: string;
//   name: string;
//   year: number;
// }

// type User = {
//   /* это email */
//   email: string;
//   name: string;
//   year: number;
// }

// interface IRandomKeys {
//   [key: string]: string;
// } // Record<string, string>

// const user: IUser = {
//   email: 'test@test.com',
//   name: 'nik',
//   year: 1989
// };

// // ограничить ему ключи
// type ColorKeys = 'red' | 'green' | 'blue';
// type Color = Partial<Record<ColorKeys, string>>;

// const color: Color = {};

// color.red = 'red';
// // color.white = 'asf'

// enum ColorKeyEnum {
//   red = 'red',
//   green = 'green',
//   blue = 'blue'
// }

// console.log(ColorKeyEnum.red);
// console.log(ColorKeyEnum.green);
// console.log(ColorKeyEnum.blue);

// type Keys = 'red' | 'green' | 'blue';

// block scoped



// 2. Почему каждый из этих примеров выдает ошибку?

// a)
// let i: 3 = 3
// i = 4
// // Ошибка TS2322: тип '4' не может
// // быть присвоен типу '3'.

// б)
// let j = [1, 2, 3]
// j.push(4)
// j.push('5')
// // Ошибка TS2345: аргумент типа '5'
// // не может быть присвоен параметру
// // типа 'number'.

// в)
// let k: never = 4
// // Ошибка TSTS2322: тип '4' не может
// // быть присвоен типу 'never'.

// г)
// let l: unknown = 4
// let m = l * 2
// // Ошибка TS2571: объект имеет тип
// // 'unknown'.
