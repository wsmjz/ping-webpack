let fs = require('fs')
let school = {}
// 计数器方式（解决异步并发）
// let index = 0
// function out() {
//     index++
//     if(index == 2) {
//         console.log(school)
//     }
// }
// =================高阶函数
function after(times, callback) {
    return function() {
        if(--times == 0) {
            callback()
        }
    }
}
let out = after(2, function() { // 将数量内置到after函数中， 闭包 1.解决了index全局变量的问题
    console.log(school)
})
// ===================== 发布 订阅（中介去房东哪儿订阅，租客触发中介） 两者没有关系 可以不订阅 直接发布 只是发布的时候没有信息
fs.readFile('./src/promise/name.txt', 'utf8', function(err, data) { // 两个并发的异步 一起执行 不知谁慢谁快
    school['name'] = data
    out()
})
fs.readFile('./src/promise/age.txt', 'utf8', function(err, data) {
    school['age'] = data
    out()
})