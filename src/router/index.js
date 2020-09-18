import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/profil',
        name: 'profil',
        component: () => import('../views/Profil.vue')
    },
    {
        path: '/kemitraan',
        name: 'kemitraan',
        component: () => import('../views/Kemitraan.vue')
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('../views/Order.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
