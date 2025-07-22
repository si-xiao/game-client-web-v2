import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: '首页' }
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
        meta: { title: '产品中心' }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: { title: '联系我们' }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// 设置页面标题
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `${to.meta.title} | 响应式应用` : '响应式应用'
    next()
})

export default router