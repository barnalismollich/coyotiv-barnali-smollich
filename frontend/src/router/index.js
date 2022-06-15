import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/profile.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import PrivacyPolicy from '../views/privacy-policy.vue'
import TermsOfUse from '../views/terms-of-use.vue'
import CookiesPolicy from '../views/cookies-policy.vue'
import Disclaimer from '../views/disclaimer.vue'
import TestPage from '../views/test-page.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Homepage',
        component: Profile,
      },
      {
        path: '/users/:id',
        name: 'UserDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.

        component: () => import(/* webpackChunkName: "about" */ '../views/user-detail.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        },
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        },
      },
      {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicy,
      },
      {
        path: '/terms-of-use',
        name: 'terms-of-use',
        component: TermsOfUse,
      },
      {
        path: '/cookies-policy',
        name: 'cookies-policy',
        component: CookiesPolicy,
      },
      {
        path: '/disclaimer',
        name: 'disclaimer',
        component: Disclaimer,
      },
      {
        path: '/test-page',
        name: 'test-page',
        component: TestPage,
      },
    ],
  })
}
