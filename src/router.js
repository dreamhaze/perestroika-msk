import { createRouter, createWebHistory } from 'vue-router'

import TestPage from '@/components/TestPage.vue'
import SmatdeskPage from '@/components/SmatdeskPage.vue'

const routes = [
    {
        path: '/test',
        component: TestPage
    },
    {
        path: '/',
        component: SmatdeskPage
    },
]


// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// })


export default new createRouter(
    {
        // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
        history: createWebHistory(),
        routes, // short for `routes: routes`
    }
)
