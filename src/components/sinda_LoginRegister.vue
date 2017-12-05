<template>
    <div class="hello">
        <LRhead></LRhead>
        <!-- <h3>这是登录注册部分</h3>   -->
        <router-view/>
    </div>
</template>

<script>
import LRhead from "./sinda_LoginRegister_header";
export default {
  name: "sinda_LoginRegister",
  data() {
    return {};
  },
  components: { LRhead }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>