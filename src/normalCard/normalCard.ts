import { Color, Mark } from './enums'
import { Deck, NormalCard } from './types'

function createDeck(): Deck {
    const deck: Deck = []
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    for (const mark of marks) {
        for (const color of colors) {
            const card: NormalCard = {
                color,
                mark,
                getString () {
                    return this.color + this.mark
                }
            }
            deck.push(card)
        }
    }
    deck.push({ type: 'small', getString() { return 'jo' } })
    deck.push({ type: 'big', getString() { return 'JO' } })
    return deck
}
function printDeck (deck: Deck) {
    let result = '\n'
    deck.forEach((cark, i) => {
        result += cark.getString() + '\t'
        if ((i + 1) % 4 === 0) {
            result += '\n'
        }
    })
    console.log(result)
}

printDeck(createDeck())