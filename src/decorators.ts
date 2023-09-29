import { User } from './namespaces';
function loggedMethod(prefix: string) {
  return function loggedMethod(originalMethod: any, _context: any) {
    function replacementMethod(this: any, ...args: any[]) {
        console.log(`${prefix} LOG: Entering method.`)
        const result = originalMethod.call(this, ...args);
        console.log(`${prefix} LOG: Entering method.`)
        return result;
    }
    return replacementMethod;
  }
}

// Это фича классов.
// Декорировать сами классы
// На методы
// На свойства
// На аргументы

const bigJsonObject = {
  username: 'nik',
  password: '12341235'
} // Схема валидации.

const bigJsonObjectSchema = Joi.object({
  username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

  password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

// @classDecorator()
class Person {
  name: string;
  constructor(name: string) {
      this.name = name;
  }

  @loggedMethod("Prefix")
  greet() {
    console.log(`Hello, my name is ${this.name}.`); 
  }

  @validationDecorator(bigJsonObjectSchema)
  applyFuncion(bigJsonObject) {
    // Сначала валидируем его bigJsonObject

    // const validationResult = bigJsonObjectSchema(bigJsonObject, bigJsonObjectSchema)
    // if (validationResult.errors.length !== 0) { throw new ValidationError('test')}
  }
}
const p = new Person("Ray");
p.greet();




// function classDecorator(constructor: Function,  _context: ClassMethodDecoratorContext) {
//   console.log('Class decorator');
// }

// @classDecorator
// class MyClass {
//   // Код класса
// }

// function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   console.log('Method decorator');
// }

// class MyClass {
//   @methodDecorator
//   myMethod() {
//     // Код метода
//   }
// }




// // Декоратор форматирования результата вызова метода
// function upperCase(target, key, descriptor) {
//   // Переопределяем дескриптор свойства
//   Object.defineProperty(target, key, {
//       ...descriptor,
//       value: function() {
//           return descriptor.value.call(this).toUpperCase();
//       }
//   });

//   // target будет использован как дескриптор свойства
//   return target;
// }

// class User {
//   // code...
  
//   // Применяем декоратор
//   @upperCase
//   getFullName(): string {
//       return this.firstname + ' ' + this.secondname;
//   }
// }

// const user = new User('John', 'Doue');
// console.log(user.getFullName());
