<template>
    <div>
        <input type="text" v-model="mes">
        {{mes}}
        <p class="test">测试文本{{this.$store.state}}</p>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            mes: '欢迎进入首页'
        }
    },
    mounted() {
        this.$store.dispatch('setUsername')
    }
}
</script>

<style>
    
</style>


