<template>
  <div>
    <div class="list">
      <ul>
        <li>
          <a href="/#/">首页</a>
        </li>
        <li>/</li>
        <li>
          {{getlistName}}
        </li>
      </ul>
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
.list {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 42px;
  position: relative;
  ul {
    position: absolute;
    bottom: 0;
    &::after{
      content: '';
      display: block;
      clear: both;
    }
    li{
      float: left;
      font-size: 14px;
      a{
        color: #000;
        font-size: 14px;
      }
    }
  }
}
</style>