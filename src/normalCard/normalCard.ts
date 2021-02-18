import { Color, Mark } from './enums'
import { Deck } from './types'

function createDeck(): Deck {
    const deck: Deck = []
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    for (const mark of marks) {
        for (const color of colors) {
            deck.push({ mark, color })
        }
    }
    return deck
}
function printDeck (deck: Deck) {
    let result = '\n'
    deck.forEach((cark, i) => {
        let str = cark.color + cark.mark
        result += str + '\t'
        if ((i + 1) % 4 === 0) {
            result += '\n'
        }
    })
    console.log(result)
}

printDeck(createDeck())