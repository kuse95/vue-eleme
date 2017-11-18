import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/components/Msite'
import Discover from '@/components/Discover'
import Order from '@/components/Order'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Msite',
      component: Msite
    }, {
      path: '/msite',
      name: 'Msite',
      component: Msite
    }, {
      path: '/discover',
      name: 'Discover',
      component: Discover
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
