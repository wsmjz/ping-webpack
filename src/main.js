import Vue from 'vue'
import App from './App.vue'
import http from './api/index'
Vue.prototype.$http = http
import './style/home.css';
import router from './router/index'
import store from './store'

// 动态加载js 草案： import() 动态的 promise
let btn = document.createElement('button')
btn.addEventListener('click', () => {
    // 预抓取 rel="prefetch" as="script"
    // prefetch(主页加载完， 空闲时加载) preload defer async
    // 魔术字符串 /**/
    import(/* webpackChunkName: 'my'*//*webpackPrefetch: true*/'./util/video.js').then(data => {
        console.log(data.default)
    })
})
document.body.appendChild(btn)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')