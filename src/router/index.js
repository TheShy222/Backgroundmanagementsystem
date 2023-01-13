import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
    },
    //首页
    {
        path: '/home',
        component: Home,
        redirect: '/index', // 重定向到index路由
        children: [
            {
                path: '/index',
                component: Index,
                meta: { hidden: false },
            },
        ],
    },
    //人员管理模块
    {
        path: '/home1',
        meta: { title: '人员管理' },
        component: Home,
        children: [
            {
                path: '/user',
                component: () => import('@/views/User.vue'),
                meta: { hidden: true, title: '用户列表' },
            },
            {
                path: '/accountInfo',
                component: () => import('@/views/AccountInfo.vue'),
                meta: { hidden: true, title: '管理员列表' },
            }, 
        ],
    },
    //商品管理模块
    {
        path: '/home2',
        meta: { title: '商品管理' },
        component: Home,
        children: [
            {
                path: '/product',
                component: () => import('@/views/Product.vue'),
                meta: { hidden: true, title: '商品信息' },
            },

        ],
    },
    //未分类模块
    {
        path: '/home3',
        meta: { title: '随机管理' },
        component: Home,
        children: [
            {
                path: '/notWrite',
                component: () => import('@/views/NotWrite.vue'),
            },
            {
                path: '/alter',
                component: () => import('@/views/Alter.vue')
            },
            {
                path: '/customer',
                component: () => import('@/views/Customer.vue')
            },
            {
                path: '/reserve',
                component: () => import('@/views/Reserve.vue')
            },
            {
                path: '/order',
                component: () => import('@/views/Order.vue')
            },
            {
                path: '/assess',
                component: () => import('@/views/Assess.vue')
            },
        ],
    },
    // 404路由不存在匹配，放在路由最下面
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotPage.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
