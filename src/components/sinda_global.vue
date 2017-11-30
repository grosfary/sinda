<template>
    <div class="hello">
        <sinda_header></sinda_header>
        <h3>这是公共页面部分</h3>  
        <router-view/>
    </div>
</template>

<script>
import sinda_header from "./sinda_header";
export default {
  name: "sinda_global",
  data() {
    return {};
  },
  components: { sinda_header }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// @color: red;
// div {
//   color: @color;
// }
</style>






