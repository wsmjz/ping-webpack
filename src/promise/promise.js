const PENFING = 'PENFING'; // 宏 有提示 不容易写错
const RESOLVE = 'RESOLVE';
const REJECT = 'REJECT';
class Promise1 {
    constructor(executor) { // executor 会立即执行
        this.status = PENFING;
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value) => { // 给每一个实例都添加  箭头函数保证this指向当前实例 function() {} this谁调用就指向谁 可能是window
            if(this.status === PENFING) {
                this.status = RESOLVE;
                this.value = value;
            }
        };
        let reject = (reason) => {
            if(this.status === PENFING) {
                this.status = REJECT;
                this.reason = reason;
            }
        };
        try {
            executor(resolve, reject);
        } catch(e) {
            reject(e);
        };
    };
    // resolve() {} 不能放在原型上
    then(onf, onr) {
        if(this.status === RESOLVE) {
            return onf(this.value);
        }
        if(this.status === REJECT) {
            return onr(this.resolve);
        }
    }
}
module.exports = Promise1;