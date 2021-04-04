import { Color, Mark } from './enums'

export type Deck = (NormalCard | Joker)[]

export interface Card {
    type?: string
    getString(): string
    [k: string]: any
}

export interface NormalCard extends Card {
    color: Color,
    mark: Mark
}

export interface Joker extends Card {
    type: 'big' | 'small'
}