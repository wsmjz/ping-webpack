// promise  承诺  有三种状态 等待（默认），失败， 成功
// 现在高版本浏览器默认支持Promise 或插件 polyfill
let Promise1 = require('./promiset.js');
let pp = new Promise1((resolve, reject) => {
    // 一旦成功就不会失败， 只有等待态时才可以改变状态
    resolve('成功了')
});
pp.then((data) => {
    console.log('success', data);
}, (err) => {
    console.log('err', err);
});