import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue');
const Index = () => import('../views/Index.vue');
const Voice = () => import('../views/Voice.vue');
const Message = () => import('../views/Message.vue');
const Find = () => import('../views/Find.vue');
const Mine = () => import('../views/Mine.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: "/",
        redirect:'/index'
      },
      {
        path: '/index',
        component: Index
      },
      {
        path: '/message',
        component: Message
      },
      {
        path: '/voice',
        component: Voice
      },
      {
        path: '/find',
        component: Find
      },
      {
        path: '/mine',
        component: Mine
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
