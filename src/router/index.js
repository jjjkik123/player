import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue');
const Index = () => import('../views/Index.vue');
const Voice = () => import('../views/Voice.vue');
const Message = () => import('../views/Message.vue');
const Find = () => import('../views/Find/Find.vue');
const Mine = () => import('../views/Mine.vue');
const BackYard = () => import('../views/index/Backyard.vue')
const Zoom = () => import('../views/index/Zoom.vue')
const Vip= ()=> import('../views/VIPcenter/VipCenter.vue')
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
            component: Message
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
                        import ('../views/Find/FriendCircle.vue')
                },
                {
                    path: '/recommend',
                    component: () =>
                        import ('../views/Find/Recommend.vue')
                },
                {
                    path: '/focus',
                    component: () =>
                        import ('../views/Find/Focus.vue')
                },
            ]

        },
        {
            path: '/mine',
            component: Mine, 
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
    path: '/vipcenter',
    component: Vip,
  }
]


const router = new VueRouter({
    routes
})

export default router