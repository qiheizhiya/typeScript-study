/**
 * 键值对数据的特点：
 * - 键(key)可以是任何类型，但不允许重复
 * - 值(value)可以是任何类型
 * 每个键对应一个值
 * 所有的键类型相同
 */

/**
 * 字典类中对键值对数据的操作：
 * - 按照键，删除对应的键值对
 * - 循环每一个键值对 OK
 * - 得到当前键值对的数量 OK
 * - 判断某个键是否存在 OK
 * - 重新设置某个键对应的值，如果不存在，则添加 OK
 */

interface Callback<T, K> {
    (k: T, val: K): void
}

export class Dictionary<T, K> {
    private keys: T[] = []
    private vals: K[] = []

    get size () {
        return this.keys.length
    }

    add (key: T, val: K) {
        const index = this.keys.indexOf(key)
        if (index !== -1) {
            this.vals[index] = val
            return
        }
        this.keys.push(key)
        this.vals.push(val)
    }

    has (key: T) {
        return this.keys.includes(key)
    }

    forEach (callback: Callback<T, K>) {
        this.keys.forEach((it, i) => callback(it, this.vals[i]))
    }

    delete (key: T) {
        const index = this.keys.indexOf(key)
        if (index === -1) return
        this.keys.splice(index, 1)
        this.vals.splice(index, 1)
    }

    clear () {
        this.vals = []
        this.keys = []
    }

}