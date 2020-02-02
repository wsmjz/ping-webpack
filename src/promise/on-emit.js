let fs = require('fs')
// 房东先将房子 挂载到中介上 订阅
// 发布订阅 可以解耦合
// ===================== 发布 订阅（中介去房东哪儿订阅，租客触发中介） 两者没有关系 可以不订阅 直接发布 只是发布的时候没有信息
let school = {}
let event = {
    arr: [], // 中介
    on(fn) { // 订阅
        this.arr.push(fn)
    },
    emit: function() {
        this.arr.forEach(fn => fn())
    }

}

event.on(function() {
    if(Object.keys(school).length == 2) {
        console.log(school)
    }
})
// event.on(function() {
//     console.log(school)
// })
fs.readFile('./src/promise/name.txt', 'utf8', function(err, data) { // 两个并发的异步 一起执行 不知谁慢谁快
    school['name'] = data
    event.emit() // 发布
})
fs.readFile('./src/promise/age.txt', 'utf8', function(err, data) {
    school['age'] = data
    event.emit()
})