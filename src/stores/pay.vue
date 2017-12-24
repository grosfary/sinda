<template>
  <div v-html="html">{{html}}</div>
</template>

<script>
import Vue from "vue";
export default {
  name: "pay",
  data() {
    return {
      html: ""
    };
  },
  created() {
    console.log((this.html = sessionStorage.getItem("pay")));
  },
  mounted: function() {
    if (document.getElementById("alipaysubmit")) {
      document.getElementById("alipaysubmit").submit();
    } else {
      document.getElementById("pay_form").submit();
    }
  }
};
</script>

<style scoped lang="less">

</style>






