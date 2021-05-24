// import { printObj, descriptor } from './Descriptor'
import { IsNotEmpty, validate } from 'class-validator'
import 'reflect-metadata'

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

class RegUser {
    @IsNotEmpty({ message: '账号不能为空' })
    loginId!: string
    loginPwd!: string
    age!: number
    gender!: '男' | '女'
}

const post = new RegUser()

validate(post).then(res => {
    console.log(res)
})