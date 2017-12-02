<template>
  <div>
    <div class="bottom_outer">
      <div class="bottom_content">
        <ul>
          <li>©Copyright</li>
          <li><a href="">2016北京信达科技有限公司</a></li>
          <li>京ICP备</li>
          <li><a href="">16011621号</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
ul { //©Copyright 2016北京信达科技有限公司 京ICP备 16011621号
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
