namespace MyNamespace {
  export interface Person {
    name: string;
    age: number;
  }

  export function greet(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
  }
}

// namespace MyNamespace {
//   // работает как extends
//   export interface Person {
//     key: string;
//   }
// }

const person = {
  name: 'nik',
  age: 33
}

MyNamespace.greet(person);

// Сторонние библиотеки
// Установить express
// npm install express
// npm install --save-dev @types/express

// Есть сторонние библиотеки которые написаны на чистом js.
// Js библиотека, а к ней нет типов.

// export interface User {
  //   name: string;
  //   age: number;
  // }
  
  // export interface Person extends User {
  //   key: string;
  // }
  
  
  // const person: Person = {
  //   name: "John",
  //   age: 25,
  //   key: 'value'
  // };
  