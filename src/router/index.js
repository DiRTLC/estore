import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home.vue'
import classify from '../pages/classify/classify.vue'
import shopcart from '../pages/shopcart/shopcart.vue'
import myepet from '../pages/myepet/myepet.vue'
import classifydetail from '../pages/classify/classifydetail/classifydetail.vue'
import brand from '../pages/classify/brand/brand.vue'
import register from '../pages/myepet/register/register.vue'
import login1 from '../pages/myepet/login/login1.vue'
import login2 from '../pages/myepet/login/login2.vue'
import place from '../pages/place/place.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/classify',
      component: classify,
      children: [
        {
          path: '',
          redirect: 'classifydetail'
        },
        {
          path: 'classifydetail',
          component: classifydetail
        },
        {
          path: 'brand',
          component: brand
        }
      ]
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/myepet',
      component: myepet,
      children: [
        {
          path: '',
          redirect: 'login1'
        },
        {
          path: 'register',
          component: register
        },
        {
          path: 'login1',
          component: login1
        },
        {
          path: 'login2',
          component: login2
        }
      ]
    },
    {
      path: '/place',
      component: place
    }
  ]
})
