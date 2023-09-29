//.d.ts
declare module 'lodash' {
  export function chunk<T>(array: T[], size?: number): T[][];
  export function compact<T>(array: T[]): T[];
  // Другие объявления функций и типов...
}

// Создают свои файлы декларации
// @types - @ - неймспейс
// @types/express, @types/node

// Современный способ
// Кладем declaration file в репозиторий
// package.json
// "types": "./index.d.ts"

// Что будет, если есть js пакет, а декларации нет или она старая
// Описываем сам


