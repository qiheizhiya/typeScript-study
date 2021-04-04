import { Mark, Color } from "./enums"
import { Card, NormalCard } from "./types"

interface ReturnResult {
    player1: Deck
    player2: Deck
    player3: Deck
    stash: Deck
}

export class Deck {
    cards: Card[] = []

    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards
        } else {
            this.init()
        }
    }

    private init() {
        const marks = Object.values(Mark)
        const colors = Object.values(Color)
        for (const mark of marks) {
            for (const color of colors) {
                const card: NormalCard = {
                    color,
                    mark,
                    getString() {
                        return this.color + this.mark
                    }
                }
                this.cards.push(card)
            }
        }
        this.cards.push({ type: 'small', getString() { return 'jo' } })
        this.cards.push({ type: 'big', getString() { return 'JO' } })
    }

    print() {
        let result = '\n'
        this.cards.forEach((cark, i) => {
            result += cark.getString() + '\t'
            if ((i + 1) % 4 === 0) {
                result += '\n'
            }
        })
        console.log(result)
    }

    /**
     * 洗牌
     */
    shuffle () {
        // this.cards.sort(() => Math.random() - 0.5)
        
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = this.getRandom(0, this.cards.length);
            ([this.cards[i], this.cards[targetIndex]] = [this.cards[targetIndex], this.cards[i]])
        }
    }

    /**
     * 发牌
     */

    publish (): ReturnResult {
        const player1 = new Deck(this.takeEvery(17))
        const player2 = new Deck(this.takeEvery(17))
        const player3 = new Deck(this.takeEvery(17))
        const stash = new Deck(this.cards)
        return {
            player1,
            player2,
            player3,
            stash
        }
    }

    private takeEvery (n: number): Card[] {
        const card: Card[] = []
        for (let i = 0; i < n; i++) {
            card.push(this.cards.shift() as Card)
        }
        return card
    }

    /**
     * 无法取到最大值
     */
    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * ( max - min ) + min)
    }
    
}