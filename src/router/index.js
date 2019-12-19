import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/MainPage'

Vue.use(VueRouter)

const Home = {template: '<div>Home</div>'}

const router =  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/main',
            name: 'main',
            component: Main
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
})

export default router