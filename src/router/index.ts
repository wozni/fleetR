import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Shell from '../views/Shell.vue'
import { shellRoutes  } from "../views"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',    
    component: Shell,
    children: [
      ...shellRoutes
    ]
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
