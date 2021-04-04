// function take<T>(arr: T[], n: number) {
//   if (n >= arr.length) {
//     return arr
//   }
//   const newArr: T[] = []
//   for (let i = 0; i < n; i++) {
//     newArr.push(arr[i])
//   }
//   return newArr
// }

// const result = take<number>([1,2,3,4], 2)

// const arr = [1,2,3,4]

// type callback<T> = (n: T, i: number) => boolean
// interface callback<T> {
//   (n: T, i: number): boolean
// }

// function filter<T>(arr: T[], callback: callback<T>) {
//   const newArr:T[] = []
//   arr.forEach((n, i) => {
//     if (callback(n, i)) {
//       newArr.push(n)
//     }
//   })
//   return newArr
// }

// const arr = [1,2,3,4]

// console.log(filter(arr, n => n % 2 !== 0))

import { ArrayHelper } from './ArrayHelper'
const helper = new ArrayHelper([3, 4, 5, 6, 7])

helper.shuffle()