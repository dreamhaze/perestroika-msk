import { createRouter, createWebHistory } from 'vue-router'

import IndexView from '@/views/index.vue'
import ResultComponent from '@/components/ResultComponent.vue'

const routes = [
    {
        path: '/result',
        component: ResultComponent
    },
    {
        path: '/',
        component: IndexView
    },
]

export default new createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)
