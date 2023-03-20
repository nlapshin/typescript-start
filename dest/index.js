"use strict";
// 1. npm install typscript - локально или глобально.
// 2. Настраиваем tsconfig.json
// 3. tsc
console.log('test');
// Получили javascript код без типов.
// Мы хотим чтобы наш код использовали
// В других проектах с типами.
// d.ts файлы - файлы с декларациями.
// Мы хотим подключить какую-то популярную либу
// Откуда можно взять типы?
// 1. Разработчик библиотеки подключил их через types.
// 2. @types/<> - видели такой вариант? Взять из специального репозитория
// 3. Ни там ни там нет описания. Вам придется описывать самостоятельно.
// enum Color {
//   RED = 0,
//   GREEN = 1,
// }
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "ADMIN";
    UserRoles["USER"] = "USER";
    UserRoles["ANON"] = "ANON";
})(UserRoles || (UserRoles = {})); // уже строковый enum
console.log(UserRoles.ADMIN);
