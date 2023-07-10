// namespace MyNamespace {
//   export interface Person {
//     name: string;
//     age: number;
//   }

//   export function greet(person: Person) {
//     console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
//   }
// }

// namespace MyNamespace {
//   // работает как extends
//   export interface Person {
//     key: string;
//   }
// }

export interface User {
  name: string;
  age: number;
}

export interface Person extends User {
  key: string;
}


const person: Person = {
  name: "John",
  age: 25,
  key: 'value'
};

// MyNamespace.greet(person);
