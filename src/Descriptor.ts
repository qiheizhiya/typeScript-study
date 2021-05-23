type constructor = new (...args: any[]) => Object
export function classDescriptor(description: string) {
    return function (target: constructor) {
        target.prototype.$classDescription = description
    }
}

export function propDescriptor(description: string) {
    return function (target: any, propName: string) {
        if (!target.$propDescriptions) {
            target.$propDescriptions = []
        }
        target.$propDescriptions.push({
            propName,
            description
        })
    }
}

export function printObj (obj: any) {
    if (obj.$classDescription) {
        console.log(obj.$classDescription)
    } else {
        console.log(Object.getPrototypeOf(obj).constructor.name)
    }
    if (!obj.$propDescriptions) {
        obj.$propDescriptions = []
    }
    for (const key in obj) {
        // 属性名称
        if (obj.hasOwnProperty(key)) {
            const prop = obj.$propDescriptions.find((p: any) => p.propName === key)
            if (prop) {
                console.log(`\t${prop.description}:${obj[key]}`)
            } else {
                console.log(`\t${key}:${obj[key]}`)
            }
        }
    }
}