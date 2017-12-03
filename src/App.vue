<template>
  <div id="app"> 
    <!-- 在这里的这个app就是整个项目用来展示的页面 index.html里的app -->
    <sinda_top></sinda_top>
    <!-- sinda_top是指整个项目的公共顶部 -->
    <router-view/>
    <!-- router-view 整个项目用来来回切换试图的部分 -->
    <sinda_bottom></sinda_bottom>
    <!-- sinda_top是指整个项目的公共底部 -->
  </div>
</template>

<script>
import sinda_top from "./components/sinda_top"; // 用变量sinda_top来接收sinda_top.vue里的html内容
import sinda_bottom from "./components/sinda_bottom"; // 作用同上
export default {
  // ES6：export default暴露 模块、函数、变量、文件
  // 想知道原理自己看
  // http://es6.ruanyifeng.com/?search=export&x=0&y=0#docs/module#export-default-命令
  name: "app",
  components: { sinda_top, sinda_bottom }
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
