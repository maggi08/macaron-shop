import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/HomePage.vue'
import Catalog from '@/views/catalog/CatalogPage.vue'
import ReadyBoxes from '@/views/ready-boxes/ReadyBoxesPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/ready-boxes',
    name: 'readyBoxes',
    component: ReadyBoxes
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
