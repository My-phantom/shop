import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'take-out',
        component:() =>import('../views/home/take-out.vue')
      },
      {
        path:'search',
        component:() =>import('../views/home/search.vue')
      },
      {
        path:'order',
        component:() =>import('../views/home/order.vue')
      },
      {
        path:'mine',
        component:() =>import('../views/home/mine.vue')
      },


    ]
  },
  {
    path:'/datils/:id',
    component:() =>import('../components/take-out/datils.vue'),
    children:[
      {
        path:'menu/:id',
        component:() =>import('../components/take-out/datils/conten.vue')
      },
      {
        path:'talk/:id',
        component:() =>import('../components/take-out/datils_talk/tab_con.vue')
      }
    ]
  },


  {
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    children:[
      {
        path:'mesg',
        component: ()=>import('../components/login/meglon.vue')
      },
      {
        path:'psw',
        component: ()=>import('../components/login/psw.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
