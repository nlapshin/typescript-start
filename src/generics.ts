// Пример 1


// T - это обобщение, буква любая
// function reverseArray<T>(arr: T[]): T[] {
//   return arr.reverse();
// }

// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = reverseArray(numbers); // тип: number[]

// const strings: string[] = ['a', 'b', 'c'];
// const reversedStrings = reverseArray<string>(strings); // тип: string[]

// const arrayOfUsers: { name: string }[] = [{ name: 'nik' }];
// const reversedArrayOfUsers = reverseArray(arrayOfUsers); // тип: string[]


// T - это будет обощение объекта. T - это любой объект
// K - это будет обощение ключе. K - это ключи не просто ключи, а ключи, этого объекта

// 
// function pickObjectKeys<T extends object, K extends keyof T>(obj: T, keys: K[]) {
//   let result = {} as Pick<T, K>
//   for (const key of keys) {
//     if (key in obj) {
//       result[key] = obj[key]
//     }
//   }
//   return result
// }

// const language = {
//   name: "TypeScript",
//   age: 8,
//   extensions: ['ts', 'tsx']
// }
// // Через функцию оставит только указанные ключи и создаст его в копии.

// // keyof object - получить ключи объекта -Ю

// pickObjectKeys(null, ['age', 'extensions'])
// pickObjectKeys(language, ['age', 'extension'])

// const ageAndExtensions = pickObjectKeys(language, ['age', 'extensions'])
// keys = ("age" | "extensions")[]



// type User = {
//   name: string;
// }

// async function fetchApi<ResultType>(path: string): Promise<ResultType> {
//   const response = await fetch(`https://example.com/api${path}`); // Response

//   return await response.json();
// }

// const data = await fetchApi<User[]>('/users')






// function reverseArray<T = null[]>(array: T[]): T[] {
//   return array.reverse();
// }






// function transformToString<T extends Object>(value: T): string {
//   return value.toString()
// }

// interface IQueue<T> {
//   enqueue(item: T): void;
//   dequeue(): T | undefined;
// }

// // Пример 2
// class Queue<T> implements IQueue<T> {
//   private items: T[] = [];

//   enqueue(item: T) {
//     this.items.push(item);
//   }

//   dequeue(): T | undefined {
//     return this.items.shift();
//   }
// }

// const numberQueue = new Queue<number>();
// numberQueue.enqueue(1);
// numberQueue.enqueue(2);
// numberQueue.enqueue(3);

// console.log(numberQueue.dequeue()); // выводит: 1
// console.log(numberQueue.dequeue()); // выводит: 2

// const stringQueue = new Queue<string>();
// stringQueue.enqueue('a');
// stringQueue.enqueue('b');
// stringQueue.enqueue('c');

// console.log(stringQueue.dequeue()); // выводит: 'a'
// console.log(stringQueue.dequeue()); // выводит: 'b'

// interface Lengthy {
//   length: number;
// }

// function getLength<T extends Lengthy>(item: T): number {
//   return item.length;
// }

// const stringLength = getLength('hello'); // тип: number (5)
// const arrayLength = getLength([1, 2, 3, 4, 5]); // тип: number (5)
// const objectLength = getLength({ length: 10 }); // тип: number (10)
// const notLength = getLength({ length100: 10 }); // тип: number (10)

// Поставили библиотеку. И надо 
// Ситуация - пакет написан на javascript
// В этом случае создают так называемые файлы с декларация.
// @types/node.

// experimentalDecorators: true

// function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
//   let result = {} as Pick<T, K>
//   for (const key of keys) {
//     if (key in obj) {
//       result[key] = obj[key]
//     }
//   }
//   return result
// }

// const language = {
//   name: "TypeScript",
//   age: 8,
//   extensions: ['ts', 'tsx']
// }

// const ageAndExtensions = pickObjectKeys(language, ['age', 'extensions'])



// type User = {
//   name: string;
// }

// async function fetchApi<ResultType>(path: string): Promise<ResultType> {
//   const response = await fetch(`https://example.com/api${path}`);
//   return response.json();
// }

// const data = await fetchApi<User[]>('/users')
