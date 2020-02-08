let Arr = {
    a: 1,
    test: function(cb) {
        console.log(this)
    }
}
let Arr1 = 'dxfgdfvghgf'
Arr.test(() => {
    Arr.call(Arr1, 1, 2)
    
})