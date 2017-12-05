<template>
<div class="body">
    <div class="hello">
        <a href="#/">首页</a>
        <p>/</p>
        <a href="#/">支付</a>
        <router-view/>
    </div>
</div>
</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
export default {
  name: "payment",
  data() {
    return {};
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  margin: 20px 197px;
}
.hello a{
  display: inline;
  color: #696969;
  font-size: 14px;
  text-decoration: none;
}
.hello p{
  display: inline;
   color: #696969;
}
</style>