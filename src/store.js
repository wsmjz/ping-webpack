import Vue from 'vue'
import Vuex from './vuex/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: 'huanying vuex'
    },
    mutations: {
        setUsername(state) {
            state.name = 'gaibian l'
        }
    },
    actions: {
        setUsername({commit}) {
            setTimeout(() => {
                commit('setUsername')
            }, 1000);
        }
    }
})