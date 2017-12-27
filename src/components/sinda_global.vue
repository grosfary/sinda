<template>
  <div class="hello">

    <sinda_top></sinda_top>
    <sinda_header></sinda_header>
    <router-view/>
    <sinda_footer></sinda_footer>
    <sinda_bottom></sinda_bottom>
  </div>
</template>

<script>
// import sinda_header from "./sinda_global_header";
// import sinda_footer from "./sinda_global_footer";
// import sinda_top from "../components/sinda_top";
// import sinda_bottom from "../components/sinda_bottom";
export default {
  name: "sinda_global",
  data() {
    return {};
  },
  created() {},
  // components: { sinda_header, sinda_footer, sinda_top, sinda_bottom }
  components: {
    sinda_header: () => import("./sinda_global_header"),
    sinda_footer: () => import("./sinda_global_footer"),
    sinda_top: () => import("../components/sinda_top"),
    sinda_bottom: () => import("../components/sinda_bottom"),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>






