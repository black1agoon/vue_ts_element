import Home from '@/pages/Home.vue'
import admin from '@/app/admin'
import { RouteConfig } from 'vue-router'

let extractRoutes = function (modules: any): RouteConfig[] {
  return ([...arguments]).reduce((routes, module) => {
    return routes.concat(Object.keys(module)
      .filter(k => module[k]._meta && module[k]._meta.path)
      .map(k => ({
        path: module[k]._meta.path,
        component: module[k],
        name: module[k].name,
        meta: module[k]._meta,
      })))
  }, [])
}
export default [
  {
    path: '',
    component: Home,
    name: 'Home',
    meta: {
      title: '主页',
    },
  },
  ...extractRoutes(admin),
]
