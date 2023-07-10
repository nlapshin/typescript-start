function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers); // тип: number[]

const strings = ['a', 'b', 'c'];
const reversedStrings = reverseArray(strings); // тип: string[]

class Queue<T> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);

console.log(numberQueue.dequeue()); // выводит: 1
console.log(numberQueue.dequeue()); // выводит: 2

const stringQueue = new Queue<string>();
stringQueue.enqueue('a');
stringQueue.enqueue('b');
stringQueue.enqueue('c');

console.log(stringQueue.dequeue()); // выводит: 'a'
console.log(stringQueue.dequeue()); // выводит: 'b'

interface Lengthy {
  length: number;
}

function getLength<T extends Lengthy>(item: T): number {
  return item.length;
}

const stringLength = getLength('hello'); // тип: number (5)
const arrayLength = getLength([1, 2, 3, 4, 5]); // тип: number (5)
const objectLength = getLength({ length: 10 }); // тип: number (10)
