<template>
    <div>
        <router-view to="/">首页</router-view>
        <home></home>
    </div>
</template>
<script>
import home from './views/home.vue'
export default {
    components: {
        home
    }
}
</script>
