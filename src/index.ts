// import { printObj, descriptor } from './Descriptor'
import { IsNotEmpty, MinLength, validate } from 'class-validator'
import 'reflect-metadata'
import { plainToClass, Type } from 'class-transformer'
// @descriptor('用户')
// class User {
//     @descriptor('账户')
//     loginId!: string

//     @descriptor('密码')
//     loginPwd!: string
// }


// const u = new User()
// u.loginId = '123'
// u.loginPwd = '123'
// printObj(u)


// @Reflect.metadata('a', '一个类')
// class A {
//     @Reflect.metadata('prop', '一个参数')
//     prop1: string | undefined
// }
// const aaa = new A()
// a.prop1 = '123'
// console.log(Reflect.getMetadata('a', A))
// console.log(Reflect.getMetadata('prop', aaa, 'prop1'))

// class RegUser {
//     @IsNotEmpty({ message: '账号不能为空' })
//     @MinLength(5, { message: '账号至少有五个字符' })
//     loginId!: string
//     loginPwd!: string
//     age!: number
//     gender!: '男' | '女'
// }

// const post = new RegUser()
// validate(post).then(res => {
//     console.log(res)
// })

// class User {
//     id!: number
//     firstName!: string
//     lastName!: string
//     @Type(() => Number)
//     age!: number

//     getName() {
//         return this.firstName + '  ' + this.lastName
//     }

//     isAdult () {
//         return this.age > 36 && this.age < 60
//     }
// }

// const datas = [
//     { id: 1, firstName: 'Johny', lastName: 'Cage', age: 27 },
//     { id: 2, firstName: 'Ismoil', lastName: 'Somoni', age: 50 },
//     { id: 3, firstName: 'Luke', lastName: 'Decascos', age: 12 }
// ]

// datas.forEach((data) => {
//     const user = plainToClass(User, data)
//     console.log(user)
//     console.log(user.getName())
// })


// class MyMath {

//     sum(a: number, @test b: number) {
//         return a + b
//     }
// }

// function test(target: any, method: string, index: number) {
//     console.log(target, method, index)
// }

class User {
    @Reflect.metadata('a', 'b')
    loginId!: number

    @Reflect.metadata('b', 'b')
    loginPwd!: number
}