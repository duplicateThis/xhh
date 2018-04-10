import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  }
]

export default new Router({
  mode: 'history',
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
