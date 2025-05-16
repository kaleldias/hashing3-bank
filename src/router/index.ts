import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 1. Definição das rotas da aplicação
const routes: RouteRecordRaw[] = [
  {
    path: '/layout-preview',
    name: 'LayoutPreview',
    component: () => import('@/layouts/DefaultLayout.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/criar-conta-bancaria',
    name: 'Cria Conta Bancária',
    component: () => import('@/pages/CriarContaBancaria.vue')
  },
  
]

// 2. Criação de router com histórico HTML5 (sem # na URL)
export const router = createRouter({
  history: createWebHistory(),
  routes
})
