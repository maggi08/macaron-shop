import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/HomePage.vue'
import Catalog from '@/views/catalog/CatalogPage.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/catalog',
    component: Catalog
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
