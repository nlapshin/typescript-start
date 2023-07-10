namespace MyNamespace {
  export interface Person {
    name: string;
    age: number;
  }

  export function greet(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
  }
}

const person: MyNamespace.Person = {
  name: "John",
  age: 25
};

MyNamespace.greet(person);
