
// async function fetchUserInfo(userId: number, timeout: number = 500): Promise<{ name: string, age: 33 }> {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('do something async');

//       res({ name: 'nik', age: 33 });
//     }, timeout);
//   })
// }

// class User {
//   // protected - если мы задаем protected, то значит свойство или метод будут доступны в наследнике

//   static async make(userId: number) {
//     const { name, age } = await fetchUserInfo(userId);

//     return new User(name, age)
//   }

//   // Только синхронная штука
//   constructor(private name: string, private age: number) {}

//   // public async init() {
//   //   const { name, age } = await fetchUserInfo(500);

//   //   this.name = name;
//   //   this.age = age;
//   // }

//   public getInfo() {
//     return {
//       name: this.name,
//       age: this.age
//     }
//   }
// }

// ;(async() => {
//   const user = await User.make(100500);

//   console.log(user.getInfo());
// })();


// class User {
//   public info!: { name: string };

//   // Property 'name' has no initializer and is not definitely assigned in the constructor
//   constructor() {}
  

//   public setName(name: string) {
//     this.info = { name };
//   }
// }

// const user = new User();

// console.log(user.info.name);

// interface ICar {
//   getInfo(options: IOptions): any;
//   getInfo(name: string): any;
// }

// class Car {
//   Rent(type:string) : this {
//     console.log(`${type} has been rented.`);
//     return this;
//   }

//   Record() : this {
//     console.log(`Car was rented at ${new Date().toLocaleString()}`);
//     return this;
//   }

//   Return(type:string) : this {
//     console.log(`${type} has been returned.`);
//     return this;
//   }
// }
