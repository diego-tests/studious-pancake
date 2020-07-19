import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import store from '../store'
import { getUser } from '../store/api/actions'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    beforeEnter(to, from, next) {
      const id = to.params.id
      const user = to.params.user
      if (user) {
        store.dispatch(getUser, { user })
      }
      if (id) {
        store.dispatch(getUser, { id })
      }
      next()
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
