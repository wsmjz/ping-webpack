function checkType(type) {
    return function(value) { // 这是一个闭包
        return Object.prototype.toString.call(value) === `[object ${type}]`
    }
    // 这儿是当前作用域
}
// 当前这个函数可以不在当前作用域下执行 这个就叫闭包
let isString = checkType('String')
console.log(isString('hello')) // 是在这儿执行的

// 反驳：说法1.函数返回函数  checkType()() 函数执行完了 作用域销毁了 就不叫闭包了