






















// tsc - это typescript cli. Для сборки и прочего.
// ts-node - компилит и запускает. Подходит под dev режим.
// ts-node + nodemon или ts-node-dev.
// tsup - для быстрой сборки, она esbuild
// swc
// eslint + plugins для typescript.


<!-- 1. Какой тип выведет TypeScript для каждого из этих значений?
a) let a = 1042
б) let b = 'apples and oranges'
в) const c = 'pineapples'
г) let d = [true, true, false]
д) let e = {type: 'ficus'}
е) let f = [1, false]
ж) const g = [3]
з) let h = null (выполните это в редакторе, если результат вас уди-
вит, то перейдите к подразделу «Расширение типов» на с. 155).
2. Почему каждый из этих примеров выдает ошибку?
a)
let i: 3 = 3
i = 4
// Ошибка TS2322: тип '4' не может
// быть присвоен типу '3'.
б)
let j = [1, 2, 3]
j.push(4)
j.push('5')
// Ошибка TS2345: аргумент типа '5'
// не может быть присвоен параметру
// типа 'number'.
в)
let k: never = 4
// Ошибка TSTS2322: тип '4' не может
// быть присвоен типу 'never'.
г)
let l: unknown = 4
let m = l * 2
// Ошибка TS2571: объект имеет тип
// 'unknown'. -->


typescript -> собрали получили js. d.ts - декларируем как наш код работает.
@types/node
@types/jest
@types/mocha и т.д.

или index.d.ts

// declare files
