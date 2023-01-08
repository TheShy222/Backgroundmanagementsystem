import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        redirect: '/accountInfo', // 重定向到accountInfo路由
        children: [
            {
                path: '/accountInfo',
                component: () => import('@/views/AccountInfo.vue'),
            },
            {
                path: '/add',
                component: () => import('@/views/Add.vue'),
            },
            {
                path: '/notWrite',
                component: () => import('@/views/NotWrite.vue'),
            },
            {
                path: '/user',
                component: () => import('@/views/User.vue'),
            },
            {
                path: '/product',
                component: () => import('@/views/Product.vue'),
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
        path:'/:pathMatch(.*)*',
        component:()=>import('@/views/NotPage.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
