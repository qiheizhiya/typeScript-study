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

// import { ArrayHelper } from './ArrayHelper'
// const helper = new ArrayHelper([3, 4, 5, 6, 7])

// helper.shuffle()


// interface hasNameProperty {
//     name: string
// }

// function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
//     obj.name = obj.name.split(" ").map(s => s[0].toUpperCase() + s.substr(1)).join(" ")
//     return obj
// }

// const o = {
//     name: 'jie jie',
//     age: 18
// }

// const nO = nameToUpperCase(o)
// console.log(nO)


// function mixinArray<T, K> (arr1: T[], arr2: K[]): (T | K)[] {
//     if (arr1.length !== arr2.length) throw new Error('数组长度不相等')
//     let result: (T | K)[] = []
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i])
//         result.push(arr2[i])
//     }
//     return result
// }

import { Dictionary } from './dictionary'

const dict = new Dictionary<string, number>()

dict.add('1', 1)
dict.add('2', 2)
console.log(dict.size)
dict.forEach((k, v) => {
    console.log(k, ':', v)
})

dict.delete('1')
console.log(dict.size)

dict.clear()

console.log(dict.size)