<template>
  <div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    document.documentElement.style.fontSize = "16px";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bottom_outer {
  // 公共底部背景样式
  height: 45px;
  width: 100%;
  background: #cccccc;
  .bottom_content {
    // 一个对齐的盒子
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
}
ul {
  //©Copyright 2016北京信达科技有限公司 京ICP备 16011621号
  width: 403px;
  margin: 0 auto;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  li {
    float: left;
    // margin-right: 5px;
    color: #000000;
    font-size: 14px;
    line-height: 45px;
    a {
      margin-left: 5px;
      margin-right: 5px;
      color: #000000;
      font-size: 14px;
      display: block;
      line-height: 45px;
    }
  }
}
</style>
