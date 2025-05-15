import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 1. Definição das rotas da aplicação
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomeView.vue')
  },
  {
    path: '/layout-preview',
    name: 'LayoutPreview',
    component: () => import('@/layouts/DefaultLayout.vue')
  }
]

// 2. Criação de router com histórico HTML5 (sem # na URL)
export const router = createRouter({
  history: createWebHistory(),
  routes
})
