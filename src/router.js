import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Test from './views/test.vue'
import Fuyin from './views/fuyin.vue'
import Contact from './views/contact.vue'
import Type from './views/type.vue'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/fuyin',
      name: 'fuyin',
      component: Fuyin
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/type',
      name: 'type',
      component: Type
    },
  ]
})
