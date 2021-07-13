// 配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import user from '@/components/user'

// 1.通过Vue.use(插件)，安装这个插件
Vue.use(Router)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [ // 路由的嵌套使用
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: () => import('../components/HomeNews')
      },
      {
        path: 'message',
        component: () => import('../components/HomeMessage')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about') // 路由懒加载
  },
  {
    // 动态路由
    path: '/user/:userId',
    name: 'user',
    component: user
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../components/Profile')
  }
]
const router = new Router({
  // 配置路径和组件之间的映射关系
  routes,
  mode: 'history',
  // 统一修改active-class的属性名
  linkActiveClass: 'active',
})

// 3.将router对象传入到Vue实例中
export default router
