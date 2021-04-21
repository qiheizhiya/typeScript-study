// # 继承
// class Tank {
//     protected name:string = '坦克'

//     sayHello () {
//         console.log(this.name)
//     }
// }

// class PlayerTank extends Tank {
//     name:string = '玩家坦克'
//     life:number = 5

//     test () {
//         super.sayHello()
//     }
// }
// class EnemyTank extends Tank {
//     name:string = '敌方坦克'
//     health: number = 1
// }
// class BossTank extends EnemyTank {
//     name: string = 'Boss坦克'
// }

// const p = new BossTank()

// 抽象类
// abstract class Chess {
//     x: number = 0
//     y: number = 0

//     abstract readonly name: string;

//     move (targetX:number, targetY:number): boolean {
//         console.log('1. 边界判断')
//         console.log('2. 目标位置是否有乙方棋子')
//         console.log('3. 棋子移动规则判断')

//         if (this.rule(targetX, targetY)) {
//             this.x = targetX
//             this.y = targetY
//             console.log(`${this.name}移动成功`)
//             return true
//         }
//         console.log(`${this.name}XXXXXXXXXXXXXXXXXXX`)
//         return false
//     }

//     protected isOutSize (): boolean {
//         return false
//     }

//     protected targetHasMengyou (): boolean {
//         return false
//     }

//     protected abstract rule(targetX: number, targetY: number): boolean
// }

// class Horse extends Chess {
//     protected rule(targetX: number, targetY: number): boolean {
//         return true
//     }
    
//     readonly name: string = '马';
// }

// class Pao extends Chess {
//     protected rule(targetX: number, targetY: number): boolean {
//         return false
//     }
    
//     readonly name: string = '炮';
// }

// class Soldier extends Chess {
//     protected rule(targetX: number, targetY: number): boolean {
//         return true
//     }
    
//     readonly name: string = '兵';
// }

// const h = new Horse()
// const p = new Pao()
// const s = new Soldier()

// h.move(1, 2)
// p.move(3, 4)
// s.move(5, 6)

// # 静态成员

// class User {
//     static users: User[] = []
//     constructor (public loginId: string, public loginPwd: string, public name: string, public age: number) {
//         User.users.push(this)
//     }
//     sayHello () {
//         console.log(`大家好，我叫${this.name}，今年${this.age}，我的账号是${this.loginId}`)
//     }
//     static login(loginId: string, loginPwd: string): User | undefined {
//         return User.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd)
//     }
// }

// const u1 = new User('a1', '123', '瓜瓜', 11)

// const u2 = new User('a2', '123', '瓜瓜2', 15)

// const u3 = new User('a3', '123', '瓜瓜3', 16);

// const user = User.login('a4', '123')

// if (user) {
//     user.sayHello()
// } else {
//     console.log('登录失败')
// }

// class Board {
    // private static _board?: Board
    // static readonly board: Board = new Board()
    // width: number = 500
    // height: number = 700

    // init () {
    //     console.log('初始化棋盘')
    // }

    // private constructor () {}

    // static createBoard () {
    //     if (this._board) return this._board
    //     this._board = new Board()
    //     return this._board
    // }
// }

// const board1 = Board.createBoard()

// const board2 = Board.createBoard()

// const board = Board.board
// console.log(board)

// # 接口

// import { Animal, Dog, Lion, Monkey, Tiger } from './animals'
// import { IFireShow, IWisdomShow } from './iterfaces'

// const animals: Animal[] = [
//     new Lion('王富贵', 11),
//     new Tiger('坤坤', 21),
//     new Monkey('小六', 1),
//     new Dog('旺财', 3),
//     new Dog('狗剩', 6)
// ]

// function hasFireShow (ani: object): ani is IFireShow{
//     if ((ani as IFireShow).singleFire || (ani as IFireShow).doubleFire) {
//         return true
//     }
//     return false
// }

// // 1. 所有动物打招呼
// animals.forEach(it => it.sayHello())

// // 2. 所有会进行火圈表演的动物，完成火圈表演
// animals.forEach(it => {
//     if (hasFireShow(it)) {
//         it.singleFire()
//         it.doubleFire()
//     }
// })

// // 3. 所有会智慧表演的动物，完成智慧表演

// function hasWisdomShow (ani: object): ani is IWisdomShow {
//     if ((ani as IWisdomShow).suanshu || (ani as IWisdomShow).dance) {
//         return true
//     }
//     return false
// }

// animals.forEach(it => {
//     if (hasWisdomShow(it)) {
//         it.suanshu()
//         it.dance()
//     }
// })

// class A {
//     a1: string = ''
//     a2: string = ''
// }

// class B {
//     b1: string = ''
//     b2: string = ''
// }

// interface C extends A, B {}

// const c: C = {
//     a1: '1',
//     a2: '1',
//     b1: '1',
//     b2: '1'
// }

// # 索引器

// class User {
//     [prop: string]: any
//     constructor (public name: string, public age: number) {}

//     sayHello() {

//     }
// }

// const u = new User('aa', 22)
// u.pid = '123'

// class MyArray {
//     [index: number]: any
//     0 = 1
//     1 = 'asdf'
//     2 = 'asdsasda'
// }

// const my = new MyArray()
// my[4] = 5

// class A {
//     [index: number]: any
//     [index: string]: any
// }

// const a = new A()

// a[0] = 'sdsdada'
// a['abc'] = 'abc'

// this指向

// interface IUser {
//     name: string,
//     sayHello(this: IUser): void
// }


// const obj: IUser = {
//     name: '杰',
//     sayHello () {
//         console.log(this.name)
//     }
// }

// const func = obj.sayHello

// obj.sayHello()

class User {
    constructor (public name: string) {}

    sayHello (this: User) {
        console.log(this, this.name)
    }
}

const u = new User('杰')
const say = u.sayHello