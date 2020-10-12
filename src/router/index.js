import Vue from 'vue'
import VueRouter from 'vue-router'
import { Toast } from 'vant'

const Home = () => import('../views/Home.vue');
const Index = () => import('../views/Index.vue');
const Voice = () => import('../views/Voice.vue');
const Message = () => import('../views/Message.vue');
const Find = () => import('../views/Find/Find.vue');
const Mine = () => import('../views/Mine.vue');
const BackYard = () => import('../views/index/Backyard.vue')
const Zoom = () => import('../views/index/Zoom.vue')
const Login = () => import('../views/Login.vue')
const NotFound = () => import('../views/NotFound.vue')
const Msgrecommend = () => import("../views/message/Msgrecommend.vue")
const Vip = () => import('../views/VIPcenter/VipCenter.vue')
// 去除重复点击时的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}




Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home,
  children: [{
    path: "/",
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/message',
    component: Message,

    children: [
      {
        path: '/message',
        redirect: '/chatting',

      },
      {
        path: '/chatting',
        meta: { needLogin: true },
        component: () =>
          import('../views/message/Chatting.vue')
      },
      {
        path: '/msgrecommend',
        meta: { needLogin: true },
        component: Msgrecommend
      },
    ]
  },
  {
    path: '/voice',
    component: Voice
  },
  {
    path: '/find',
    component: Find,
    children: [{
      path: "/find",
      redirect: '/friendcircle'
    },
    {
      path: '/friendcircle',
      component: () =>
        import('../views/Find/FriendCircle.vue')
    },
    {
      path: '/recommend',
      component: () =>
        import('../views/Find/Recommend.vue')
    },
    {
      path: '/focus',
      component: () =>
        import('../views/Find/Focus.vue')
    },
    ]

  },
  {
    path: '/mine',
    component: Mine
  },
  ]
},
{
  path: '/backyard',
  component: BackYard
},
{
  path: '/zoom',
  component: Zoom
},
{
  path: '/login',
  component: Login
},
{
  path: '/vipcenter',
  component: Vip,
},
{
  path: '/*',
  component: NotFound
},

]


const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta["needLogin"]) {
    if (sessionStorage.getItem('username')) {
      next();
    } else {
      Toast('您还没有登录，请先登录')
      next('/login')
    }
  } else {
    next();
  }
})

export default router