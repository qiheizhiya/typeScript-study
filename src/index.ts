// const a = 'asdff'

// let b: typeof a = 'asdff'

// class User {
//     loginId!: string
//     loginPwd!: string
// }

// const u = new User()
// const u2 = u

// const A = User

// function createUser(cls: typeof User): User {
//     return new cls()
// }

// const u = createUser(User)


// keyof

// interface User {
//     loginId: string
//     loginPwd: string
//     age: number
// }

// function printUserProperty (obj: User, prop: keyof User) {
//     console.log(obj[prop])
// }

// in

// interface User {
//     loginId: string
//     loginPwd: string
// }

// interface Article {
//     title: string
//     description: string
// }

// type Obj = {
//     [p in keyof User]: User[p]
// }

// type UserReadonly = {
//     readonly [p in keyof User]: User[p]
// }

// type UserPartial = {
//     [p in keyof User]?: User[p]
// }

// type Partialo<T> = {
//     [p in keyof T]: T[p]
// }

// const u: Partialo<Article> = {
//     title: '123',
//     description: '123'
// }


// 预定义的类型演算

// interface User {
//     age: number
//     name: string
// }

// const u: Exclude<'a'|'b'|'c', 'b'|'c'> = 'a'

// type T = '男' | '女' | null | undefined

// const u: Exclude<T, null | undefined>

// const u: Extract<T, null | undefined> = null

// const u: NonNullable<T> = '女'

// type func = () => number

// function sum(a: number) {
//     return a
// }

// type returnTypes = ReturnType<typeof sum>

// class User {
//     loginId!: string
// }
// let u: InstanceType<typeof User>

// type twoParamsCon = new (args1: any, arg2: any) => User

// const A:twoParamsCon = class Text{
//     loginId: string = '123'
//     constructor(a: any, b: any) {}
// }

// type Inst = InstanceType<twoParamsCon>