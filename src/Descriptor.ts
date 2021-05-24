type constructor = new (...args: any[]) => Object

const key = Symbol('key')
export function descriptor(description: string) {
    return Reflect.metadata(key, description)
}

export function printObj (obj: any) {
    const cons = Object.getPrototypeOf(obj)
    // 输出类的名字
    if (Reflect.hasMetadata(key, cons)) {
        console.log(Reflect.getMetadata(key, cons))
    } else {
        console.log(cons.constructor.name)
    }
    for (const k in obj) {
        // 属性名称
        if (Reflect.hasMetadata(key, obj, k)) {
            console.log(`\t${Reflect.getMetadata(key, cons, k)}:${obj[k]}`)
        } else {
            console.log(`\t${k}:${obj[k]}`)
        }
    }
}