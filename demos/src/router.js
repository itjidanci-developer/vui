import { createRouter,createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

import { menus } from './menus'

const routes = [
  { path: '/', component: Home },
  // 构建组件 ../lib/ 目录
  ...menus,
  // { path: '/inputDemo', component: InputDemo },
  // 以下为本地测试组件，/components目录
  // ...menusTest,
  // { path: '/slotdemo', component: SlotDemo },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
