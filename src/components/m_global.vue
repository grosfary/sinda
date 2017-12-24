<template>
  <div>
    <!-- <h3>这是公共页面部分</h3>       -->
    <router-view/>
    <m_bottom></m_bottom>
  </div>
</template>

<script>
import m_bottom from "./m_global_bottom";
export default {
  name: "sinda_global",
  data() {
    return {};
  },
  components: {  m_bottom }
};
</script>

<style scoped lang="less">
</style>






