import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from "./utils/axios"
import '@/assets/scss/index.scss'
import '@/utils/vant'
import 'vant/lib/index.css';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import '@/assets/swiper.css'
import FastClick from 'fastclick'
FastClick.attach(document.body)

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
// Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
