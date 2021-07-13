<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>我是app组件</h2>
    <router-view/>
    <h2>hello,world</h2>
    <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about">关于</router-link>
    <br>
    <br>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <br>
    <br>
    <button @click="userClick">用户</button>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!--    tag:tag可以指定<router-link>之后渲染成什么组件-->
    <!--    replace:replace不会留下history记录，所以指定replace的情况下后退键返回不能返回到上一个页面中-->
    <!--    active-class:当<router-link>对应的路由匹配成功时，会自动给党庆的元素设置一个router-link-active的class，设置active-class可以修改默认的名称
              在进行行高亮显示的导航栏菜单或者底部的tab bar时，会使用该类
              但是通常不会修改该类的属性，会直接使用默认的router-link-active即可-->

    <!--    动态路由
            在某些情况下，一个页面的path路径可能是不确定的，比如我们进入用户界面时，希望是如下的路径：
            /user/aaa或者/user/bbb
            除了有前面的/user之外，后面还跟上了用户的ID
            这种path和Component的匹配关系，我们称之为动态路由（也是路由传递数据的一种方式）。-->

    <!--    路由的懒加载
            用到时再加载
            路由懒加载的主要作用就是将路由对应的组件打包成一个个js代码块
            只有在这个路由被访问到的时候，才加载对应的组件-->

    <!--    实现路由嵌套的步骤
            创建对应的子组件，并且在路由映射中配置对应的子路由
            在组件内部使用<router-view>标签-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路径 vue-router
      console.log('homeClick');
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick() {
      console.log('aboutClick');
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick() {
      // this.$router.replace('/user/zhangsan')
      this.$router.replace('/user/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: red;
}
</style>
