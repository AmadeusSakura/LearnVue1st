// 配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import about from '@/components/about'

// 1.通过Vue.use(插件)，安装这个插件
Vue.use(Router)

// 2.创建VueRouter对象
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]
const router = new Router({
  // 配置路径和组件之间的映射关系
  routes
})

// 3.将router对象传入到Vue实例中
export default router
