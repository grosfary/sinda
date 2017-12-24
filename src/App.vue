<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import sinda_top from "./components/sinda_top"; // 用变量sinda_top来接收sinda_top.vue里的html内容
// import sinda_bottom from "./components/sinda_bottom"; // 作用同上
export default {
  name: "app",
  mounted() {  document.body.removeChild(document.getElementById('Loading'))   
}
};
</script>
<style lang="less">

* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
