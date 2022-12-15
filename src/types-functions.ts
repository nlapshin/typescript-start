// Какие типы есть в Typescript чего нет в Javascript

// unknown - это когда тип ещё не определен

console.log(sum(2, 2))
console.log(sum('2', '2'))

enum Color {
  RED = 'RED', // Ключ RED - значение RED
  GREEN = 'GREEN', // Ключ GREEN - значение 1
  BLUE = 'BLUE'
}

console.log(Color.RED) // 0

/*
let bool: boolean = true // bool может принимать true и false
let boolTrue: true | false = true // boolTrue - только true значение

bool = false
boolTrue = false
*/

const color: 'red' | 'green' | 'blue' = 'blue' // ограничивать наши типы

// string[] - массив строк
// Array<string> - типа генерик

// const colorArray: readonly ('red' | 'green')[] = [
//   'red',
//   'green'
// ] as const

// const arr: number[] = []

// colorArray.push('not-color')
// colorArray.push('blue')

type MyObject = {
  [key: string]: string | number
}

const obj: Record<string, string | number> = {} // Partial все ключи в необязательный режим

obj.key = 'name'
obj['key'] = 'name'

obj.test = 'test'
obj.tt12 = 123


function sum(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return `${a} plus ${b}`
  }
}

// Функция без return то возвращает она void
function voidFn(): void {
  console.log('void')
}

type Log = (n: string, m: string) => void
type TypeColor = 'red' | 'black' | 'green'

const log: Log = (namespace, message = 'log') => {
  console.log(`${namespace}: ${message}`)
}

const green: TypeColor = 'green'

setInterval(() => {

}, 10000000)
