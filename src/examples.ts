// // Сколько типов JS? 8
// // 1. Undefined
// // 2. Null
// // 3. String
// // 4. Number
// // 5. Boolean
// // 6. Object // Array, Function, Map, Set, Object бывает разный, как правило это определенная стуктура
// // 7. BigInt
// // 8. Symbol



// // unknown - это когда тип не определен и мы его определим впоследствии
// // any - это когда тип любой. Старайтесь избегать.
// // void - это отсутсвие типа. Когда мы возвращаем из функции ничего.
// // enum - это перечисление
// // never - это недостижимость.


// // Интересная особенность typescript
// // Typescript любит определять типы самостояльно

// // const str = 'value' // Какой тип будет у str с точки TS

// // // Мы TS.
// // // Мы можем менять переменную str
// // // str = 'new_value';

// // let str1 = 'value'; // string
// // str1 = 'new_value';

// // const str2 = null;

// // // str2 = 'new_value';

// // let str3: string | null = null;

// // str3 = 'new_value';
// // // str3 = 3;
// // // str3 = {};

// // let str4: string;

// // str4 = 'new_value';
// // // str4 = 4;


// const bool: boolean = true;
// const num: number = 3;

// const bool1 = true;
// const num1 = 3;

// const arr1 = [true, true, false]; // boolean[]
// const arr2: [true, true, false] = [true, true, false]; // [true, true, false] - это tuple
// const arr3 = [true, true, false] as const; // readonly [true, true, false]

// // Сложный тип становится не изменяем.

// // Объект - это не примитив и он может изменяться даже если const obj = {};
// // Как сделать константами сложные типы? as const.

// // const obj = {};

// /*
// {
//     username: string;
//     email: string;
//     age: number;
//     developer: boolean;
// }
// */

// // Или интерфейс для объекта
// // interface IUser {
// //   readonly username: string;
// //   email: string;
// //   age: number;
// //   developer: boolean;
// //   skills?: string[]; // ? - Параметр опциональный
// // }

// // // Или тип для объекта
// // type User = {
// //   username: string;
// //   email: string;
// //   age: number;
// //   developer: boolean;
// //   skills: string[]; // ? - Параметр опциональный
// // }

// // const user: IUser = {
// //   username: 'nik',
// //   email: 'nik@email.com',
// //   age: 33,
// //   developer: true,
// //   skills: []
// // };

// // user.username = 'test'
// // user.email = 'test'

// // // if (true) {
// // //   user.skills = ['JS', 'TS', 'GoLang'];
// // // }

// // // delete user.email;

// // interface IKeyValue {
// //   [key: string]: string | number; // значение строка или число
// // }

// // // : IKeyValue
// // // ИЛИ - |
// // // И - &

// // const keyValue: Record<string, string | number> = {
// //   a: 'value_a'
// // };

// // // Ключ - это строка, а значение тоже строка

// // keyValue.b = 'value_b';
// // keyValue.c = 'value_c';
// // keyValue.d = 'value_d';
// // keyValue['100_50000'] = 'value_100';
// // keyValue['100_500002'] = 1;

// enum CarColor {
//   red = '#FF0000', // 0
//   blue = 'blue', // 1
//   green = 'green' // 2
// }

// // enum CarColor {
// //   black = 'black',
// //   white = 'white'
// // }

// // console.log(CarColor.red);

// function sum(a: number, b: number): number {
//   return a + b;
// }

// function delay(timeout = 1000): Promise<unknown> {
//   return new Promise((res) => {
//     setTimeout(res, timeout);
//   })
// }

// export interface ICar {
//   name: string | null;
//   getInfo: () => { name: string, color: CarColor };
//   getName: () => string;
// }

// // base class;
// class Car implements ICar {
//   // // public, private, protected, static.
//   // private name: string; // Приватное свойство.
//   // public color: CarColor;

//   public name: string | null = null;
//   protected color: CarColor | null = null;

//   // static async make() {
//   //   await delay();

//   //   return new Car({ name: 'car', color: CarColor.white})
//   // }
  
//   // для инициализации класса
//   constructor(name: string, color: CarColor) {
//     this.name = name;
//     this.color = color; 
//     // this.color = color;

//     // console.log(this.name);
//   }

//   static staticMethod() {
//     return 'static-method';
//   }

//   public getInfo() {
//     return this.info;
//   }
// }

// class Audi extends Car {
//   constructor(
//     name: string = 'audi',
//     color: CarColor = CarColor.red
//   ) {
//     // super - это обращение к родителю(в данном случае конструктор)
//     super(name, color);
//   }

//   public getInfo() {
//     // super - это обращение к методу родителю
//     // свой код
//     return super.getInfo();
//   }
// }

// // public по умолчанию.
// // private закрыто полностью. 
// // protected закрыт, но допустен при наследовании

// // static только допусти при обращению к классу

// const car = new Car();
// Car.staticMethod(); // Это статический метод.

// Чистый JS #privateMethod 





// let a = 'test'; // String
// const b = 'test'; // test

// let d = [true, true, false]; // boolean[]
// const d1 = [true, true, false]; // boolean[]
// const d2 = [true] as const; // boolean[]


// const e: { [p: string]: string }  = {type: 'ficus'} // Какой будет тип? { type: 'string' };

// e.newKey = 'newValue';


// interface IUser {
//   name: string;
//   email: string;
// };

// type User = {
//   name?: string;
//   email?: string; // ? - это опциональный ключ
// };

// const user: IUser = { name: 'Nik', email: 'email' }; // Вот так писать код.
// const user2 = { name: 'Nik', email: 'email', phone: 'test' } as IUser; // Я знаю, что этот объект будет IUser

// // Тесты. 

// // const user3 = { name: 'Nik', email: 'email', phone: 'test' };

// // const user3 = { name: 'Nik', email: 'email', phone: 'test' } as const;

// // user3.newKey = 'test';
// // user3.name = 'test';

// // Record<string, string> => { [key: string]: string};

// const user4: Record<string, string> = {};

// type Keys = 'red' | 'green' | 'blue';

// const colorObj: Record<Keys, string> = {
//   red: 'red',
//   green: 'green',
//   blue: 'blue',
// }

// type UserKeys = keyof IUser;

// type Colors = { [K in Keys]: string }

// // Partial<IUser> - сделает весь интефейс опциональным
// // 


// interface IPublicUser {
//   name: string;
//   email: string;
// };

// interface IPrivateUser extends IPublicUser {
//   password: string;
// };

// type PublicUser = Omit<IPrivateUser, 'password'>;


// // type Record<K extends keyof any, T> = {
// //   [P in K]: T;
// // };

// // interface IColor {
// //   [P in Keys]: string;
// // }


// Классы

// enum CarColor {
//   black = 'black',
//   white = 'white'
// }

// async function delay(timeout = 100) {
//   return new Promise((res) => setTimeout(res, timeout));
// }

// export interface ICar {
//   name: string;
//   getInfo: () => { name: string, color: CarColor };
// }

// base class;
// class Car implements ICar {
//   // // public, private, protected, static.
//   // private name: string; // Приватное свойство.
//   // public color: CarColor;

//   public name!: string;

//   static async make() {
//     await delay();

//     return new Car({ name: 'car', color: CarColor.white})
//   }
  
//   // для инициализации класса
//   constructor(private info: { name: string, color: CarColor }) {
//     // this.name = name;
//     // this.color = color;

//     console.log(this.name);
//   }

//   public getInfo() {
//     return this.info
//   }
// }

// ;(async() => {
//   const car = await Car.make();

//   console.log(car.getInfo());
// })()

// class Audi extends Car {
//   constructor(
//     name: string = 'audi', 
//     public color = CarColor.white
//   ) {
//     super(name, color);
//   }

//   public getInfo() {
//     return super.getInfo();
//   }
// }

// const car = new Car();

// car.name;
// car.color;
// car.getInfo();

// const audi = new Audi();

// audi.getInfo();





















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

// interface Todo {
//   title: string;
//   description: string;
// }


// type TodoOptions = Partial<Todo>;


// interface PrivateUser {
//   username: string;
//   password: string;
//   superSecret: string;
// }

// type PublicUser = Pick<PrivateUser, 'username'>;
