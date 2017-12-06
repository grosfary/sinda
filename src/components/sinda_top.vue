<template>
  <div>
    <div class="top_outer">
      <div class="top_content">
        <ul class="top_welcome">
          <li><span>欢迎来到信达！</span></li>
          <li><a href="#/LoginRegister/login">登录</a></li>
          <li><a href="#/LoginRegister/register">快速注册</a></li>
        </ul>
        <ul>
          <li><span class="icon_gouwuche"></span></li>
          <li><span>购物车</span></li>
          <li><a href="" class="gouwuche_number">{{getNum}}</a></li>
          <li><span>件</span></li>
          <li><a href="">服务商入口</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
    ...mapGetters(['getNum'])//{getNum:function(){}}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top_outer {
  //公共顶部背景样式
  height: 35px;
  width: 100%;
  background: #f2f2f2;
  color: #2a2a2a;
  .top_content {
    // 1200px居中的盒子
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    &::after {
      //清除浮动
      content: "";
      display: block;
      clear: both;
    }
  }
}
.top_welcome {
  // 欢迎来到信达部分样式
  float: left;
  a {
    margin: 0 12px;
  }
}
ul {
  // 服务商入口和购物车样式
  float: right;
  // font-size: 0;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  li {
    float: left;
    height: 35px;
    line-height: 35px;
    a {
      display: block;
      font-size: 14px;
      color: #2693d4;
      line-height: 35px;
      margin-left: 17px;
    }
    a.gouwuche_number {
      margin: 0;
    }
  }
}
.icon_gouwuche {
  display: block;
  height: 20px;
  width: 26px;
  background: url("../assets/pc/Sprites.png") 0 -72px no-repeat;
  margin-top: 7px;
}
</style>
