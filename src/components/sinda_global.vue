<template>
  <div class="hello">
    <sinda_header></sinda_header>
    <!-- <h3>这是公共页面部分</h3>       -->
    <router-view/>
    <sinda_footer></sinda_footer>
  </div>
</template>

<script>
import sinda_header from "./sinda_global_header";
import sinda_footer from "./sinda_global_footer";
export default {
  name: "sinda_global",
  data() {
    return {};
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// @color: red;
// div {
//   color: @color;
// }
</style>






