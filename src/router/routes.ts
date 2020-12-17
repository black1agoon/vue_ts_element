import Login from '@/pages/Login.vue'
import DashView from '@/pages/Dash.vue'
import NotFoundView from '@/pages/404.vue'
import TabsView from '@/components/views/TabsView.vue'
import AppRoutes from '@/app/app.routes'
import { RouteConfig } from 'vue-router'
// Routes
const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      tab: false
    }
  }, {
    path: '/',
    component: DashView,
    children: [
      {
        path: '',
        component: TabsView,
        children: AppRoutes   // 如果是/ 就打开首页homeview
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView,
    meta: {
      tab: false
    }
  }
]
export default routes
