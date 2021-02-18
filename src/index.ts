// interface User {
//   name: string,
//   age: number,
//   sayHello: () => void
// }
// // type User = {
// //   name: string,
// //   age: number
// // }
// let u: User = {
//   name: '123',
//   age: 123,
//   sayHello() {
//     console.log('12312312233213')
//   }
// }
// type Condition = {
//   (n: number): boolean
// }
// interface Condition {
//   (n: number): boolean
// }
// function sum(number: number[], callback: Condition) {
//   let s = 0
//   number.forEach(n => {
//     if (callback(n)) {
//       s += n
//     }
//   })
//   return s
// }

import { Interface } from "readline"

// let arr = [1,2,3,4,5]
// console.log(sum(arr, (n) => n < 3 ))

interface A {
  T1: string
}

interface B {
  T2: number
}

interface C extends A,B {
  T3: boolean
}

// type A = {
//   T1: string
// }
// type B = {
//   T2: number
// }
// type C = {
//   T3: boolean
// } & B & A

let u:C = {
  T2: 33,
  T1: '123',
  T3: true
}
