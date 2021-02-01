function printKeys(obj: object) {
    const vals = Object.keys(obj)
    vals.forEach(v => console.log(v))
}

printKeys({
    name: 'fab',
    age: 33
})

// let n:string = undefined

function throwError(msg: string): never {
    throw new Error(msg)
}



// let gender: "男" | "女"

// gender = '男'

// gender = '女'

// let arr: []

// let user: {
//     name: string,
//     age: number
// }

// user = {
//     name: '123',
//     age: 33
// }

// let arr2: [string, number, any]

// arr2 = ['1', 2, 3]

type Gender = "男" | "女"

type User = {
    name: string,
    age: number,
    gender: Gender
}

function getUser(g: Gender): User[] {
    console.log(123)
    return []
}


function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b
    }
    throw new Error('a和b必须是相同类型')
}

const result = combine(2, 3)
// const result2 = combine('2', '3')


function sum(a: number, b: number, c: number = 0) {
    return a + b + c
}

sum(3, 4)
sum(3, 4, 5)


