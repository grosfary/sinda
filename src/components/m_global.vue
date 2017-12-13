<template>
  <div class="hello">
    <!-- <h3>这是公共页面部分</h3>       -->
    <router-view/>
    <m_footer></m_footer>
  </div>
</template>

<script>
import m_footer from "./m_global_footer";
export default {
  name: "sinda_global",
  data() {
    return {};
  },
  components: {  m_footer }
};
</script>

<style scoped lang="less">
</style>






