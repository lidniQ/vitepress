import { createRouter, createWebHistory } from "vue-router"

import Home from '../App.vue'


const routes = [
  { path: '/help', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
