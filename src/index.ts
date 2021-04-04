/* 
class user {
  readonly id: number
  gender: "男" | "女" = "男"
  pid?: string

  private publishNumber: number = 3
  private curNumber: number = 0

  constructor(public name: string, private _age?: number ) {
    this.id = Math.random()
    this.name = name;
    this._age = _age
  }

  print () {
    console.log(this.publishNumber, this.curNumber)
  }

  // set age (value: number) {
  //   if (value < 0) {
  //     this._age = 0
  //   } else if (value > 200) {
  //     this._age = 200
  //   } else {
  //     this._age = value
  //   }
  // }

  get age () {
    return this._age
  }
}

const u = new user('杰')
// u.age = 2000
console.log(u)

*/

import { Deck } from './normalCard/deck'

const deck = new Deck()

console.log('=================洗牌前===============')
deck.print()
deck.shuffle()
const { player1, player2, player3, stash } = deck.publish()
console.log('=================玩家一的牌===============')
player1.print()
console.log('=================玩家二的牌===============')
player2.print()
console.log('=================玩家三的牌===============')
player3.print()
console.log('=================玩家四的牌===============')
stash.print()