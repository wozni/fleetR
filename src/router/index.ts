import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { moduleRoutes } from "../modules";
import Shell from '../views/Shell.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',    
    component: Shell,
    children: [
      ...moduleRoutes
    ]
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
