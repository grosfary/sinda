<template>
  <div>
    <div class="list">
      <a href="">首页</a>/
      <a href="">{{getlistName}}</a>
    </div>
    <router-view/>
  </div>

</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getlistName"]) //{getNum:function(){}}
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>