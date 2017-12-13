<template>
  <div class="hello">
    <sinda_top></sinda_top>
    <LRhead></LRhead>
    <!-- <h3>这是登录注册部分</h3>   -->
    <router-view/>
    <sinda_bottom></sinda_bottom>
  </div>
</template>

<script>
import LRhead from "./sinda_LoginRegister_header";
import sinda_top from "../components/sinda_top";
import sinda_bottom from "../components/sinda_bottom";
export default {
  name: "sinda_LoginRegister",
  data() {
    return {};
  },
  components: { LRhead, sinda_top, sinda_bottom }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>