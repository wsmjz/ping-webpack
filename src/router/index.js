let Vue
class Router {
    constructor() {
        this.a = 1
    }
}
// Vue.prototype.aa = ss
Router.install = (_Vue) => {
    // 扩展属性，或者组件， 或者指令
    Vue = _Vue
    Vue.mixins({ // 内部会把这个对象给每个组件的属性 混合在一起
        beforeCreate() {
            // 判断根组件是谁
            if(this.$options && this.$options.router) {
                this._router = this.$options.router
            } else {
                this._router = this.$parent && this.$parent.router
            }
            // 每个组件 $router $route
            Object.defineProperty(this, '$route', {
                value: {}
            })
            Object.defineProperty(this, '$router', {
                value: {}
            })
            Vue.component('router-link', {
                props: {
                    to: String
                },
                render() {
                    return <a href={`#${this.to}`}>{this.$slots.default}</a>
                },
            })
        },
    })
}