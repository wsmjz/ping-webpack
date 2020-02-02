// 通用柯里化函数
function add(a,b,c,d) {
    return a+b+c+d
}
function curring(fn, arr=[]) {
    let len = fn.length
    return function(...args) {
        arr = arr.concat(args)
        if(arr.length < len) {
            return curring(fn, arr)
        } else {
            return fn(...arr)
        }
    }
}
let r = curring(add)(1)(2,3)(5)
console.log(r)
// 应用
function checkType(type, value) {
    // call改变了this指向
    return Object.prototype.toString.call(value) === `[object ${type}]`
}
let util = {}
let types = ['String', 'Number', 'Boolean', 'Null', 'Undefined']
types.forEach(type => {
    util[`is${type}`] = curring(checkType)(type)
})
// let isNumber = curring(checkType)('Number')
console.log(util.isString('11'))
console.log(util.isNull(11))

// 反柯里化？？