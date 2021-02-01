type Deck = NormalCard[]
type Color = "♥"|"♠"|"♦"|"♣"
type NormalCard = {
    color: Color,
    mark: number
}

function createDeck(): Deck {
    const deck: Deck = []
    for (let i = 0; i <= 13; i++) {
        deck.push({
            color: "♠",
            mark: i
        })
        deck.push({
            color: "♣",
            mark: i
        })
        deck.push({
            color: "♥",
            mark: i
        })
        deck.push({
            color: "♦",
            mark: i
        })
    }
    return deck
}

function printDeck (deck: Deck) {
    let result = '\n'
    deck.forEach((cark, i) => {
        let str = cark.color
        if (cark.mark <= 10) {
            str += cark.mark
        } else if (cark.mark === 11) {
            str += "J"
        } else if (cark.mark === 12) {
            str += 'Q'
        } else if (cark.mark === 13) {
            str +="K"
        }
        result += str + '\t'
        if ((i + 1) % 4 === 0) {
            result += '\n'
        }
    })
    console.log(result)
}

printDeck(createDeck())