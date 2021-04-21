// const str = 'abcccccccccccdabbbbaeaeaeafgfaafafaabababaaa'

// function getMaxCharOrNum (str) {
//     const map = new Map()
//     for(let i = 0; i < str.length; i++) {
//         const char = str[i]
//         map.get(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1)
//     }
//     const [key, val] = Array.from(map.entries()).sort((a, b) => b[1] - a[1])[0]
//     console.log(`最多的字符是${key}次数是${val}`);
// }

// getMaxCharOrNum(str)

// 写一个函数, 参数是n, 要求得到 n个不重复的数字(为数组), 数字取值范围是[2, 32]
// 例如 n是5, 得到结果为 [2, 6, 20, 30, 16]

// function getRandom () {
//     return Math.floor(Math.random() * (32 - 2 + 1)) + 2
// }

// function getNum (arr) {
//     const num = getRandom()
//     if (!arr.includes(num)) {
//         arr.push(num)
//         return num
//     }
//     return getNum(arr)
// }


// function getResult (n) {
//     const arr = []
//     return new Array(n).fill(null).map(it => getNum(arr)).sort((a, b) => a - b)
// } 

// getResult(31);


// 单例模式

class Only {
    static instance = null
    constructor () {
        if (!Only.instance) {
            Only.instance = this
        }
        return Only.instance 
    }
}
