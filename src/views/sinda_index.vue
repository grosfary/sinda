<template>
    <div class="hello">
        <h3>这是首页</h3> 
    </div>
</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
export default {
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