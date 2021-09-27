import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Shell from '../views/Shell.vue'
import { AppContext } from '@/core'

export default (context: AppContext) => {

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
  
  const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    });

  return router;
}
