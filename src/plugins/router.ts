import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import Shell from '../views/shell.vue'
import { AppContext } from '@/core'

export default (context: AppContext) : Router => {
  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      component: Shell,
      children: [
        ...context.modules
          .flatMap(m => m.routes ?? [])
      ]
    },
  ]
  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
}
