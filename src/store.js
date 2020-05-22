import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header_title: "首页",
    act: 0
  },
  mutations: {
    changeTitle(state,name){
        state.header_title=name
    },
    changeTitleActive(state,index){
        state.act=index
    }
  },
  actions: {

  }
})
