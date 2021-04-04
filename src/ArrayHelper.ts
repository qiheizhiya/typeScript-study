export class ArrayHelper<T> {

    constructor (private arr:T[]) {}

    take(n: number): T[] {
        if (n >= this.arr.length) {
            return this.arr
        }
        const newArr: T[] = []
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i])
        }
        return newArr
    }

    shuffle<T>() {
        return this.arr.sort(() => Math.random() - 0.5)
    }
}