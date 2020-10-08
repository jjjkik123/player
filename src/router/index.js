import Vue from 'vue'
import VueRouter from 'vue-router'

// 去除重复点击时的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const Home = () =>
    import ('../views/Home.vue');
const Index = () =>
    import ('../views/Index.vue');
const Voice = () =>
    import ('../views/Voice.vue');
const Message = () =>
    import ('../views/Message.vue');
const Find = () =>
    import ('../views/Find/Find.vue');
const Mine = () =>
    import ('../views/Mine.vue');

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
            component: Mine
        },
    ]
}, ]

const router = new VueRouter({
    routes
})

export default router