// 观察者模式 基于发布订阅  vue 是观察者模式  eventBus 发布订阅
class Subject { // 被观察者
    constructor() {
        this.arr = [] // 存放的是观察者的实例 也即是 订阅的是观察者的实例
        this.state = '初始值'
    }
    setState(newState) {
        this.state = newState
        this.arr.forEach(o => o.updata(this)) // 触发updata 也即是 发布的是 调实例上的方法
    }
    attach(o) { // 挂载观察者   所以有关系 不同于 发布订阅
        this.arr.push(o)
    }
}
// Subject.prototype.attach = function() {}
class Observer { // 观察者
    constructor(name) {
        this.name = name
    }
    updata(s) { // 当前被观察者的状态发生了变化，需要更新状态了
        console.log(s.state, this.name)
    }
}
// 1. 将观察者放到被观察者之上
// 2 添加一个被观察者 初始状态 =》 开心
// 3. 多个观察者 观察状态
// 4 被观察者 状态变化  =》 通知观察者 （发布订阅）
let s = new Subject('被观察者')
let o1 = new Observer('观察者1')
let o2 = new Observer('观察者2')
s.attach(o1)
s.attach(o2)
s.setState('状态改变了')