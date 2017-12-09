<template>
  <!-- 公共页面底部 -->
  <div class="footer_outer">
    <div class="footer_content">
      <ul>
        <li class="footer_title">关于我们</li>
        <li>联系我们：contact@xinkeher.com</li>
        <li>公司地址：北京市朝阳区大望路soho现代城</li>
        <li>官方客服电话：010-83421842</li>
      </ul>
    </div>
    <div class="m_footer">
      <div v-for="(i,index) in btn" :key="i.name" >
        <div class="bg" :class="i.class"></div>
        <div>{{i.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sinda_footer",
  data() {
    return {
      btn: {
        a: { name: "首页", src: "#/", class: "bg_index" },
        b: { name: "店铺", src: "#/list", class: "bg_shop" },
        c: { name: "购物车", src: "#/", class: "bg_cart" },
        d: { name: "我的", src: "#/Join_Us", class: "bg_my" }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer_outer {
  // 底部背景样式
  height: 201px;
  width: 100%;
  background: #f8f8f8;
}
.footer_content {
  // 底部内容
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  li {
    line-height: 26px;
    margin-left: 3px;
    font-size: 14px;
  }
  .footer_title {
    // 标题 关于我们
    line-height: 71px;
    margin-left: 0;
    font-size: 16px;
    color: #000000;
  }
}
@media screen and (min-width: 1200px){
  .m_footer{
    display: none;
  }
}
@media screen and (max-width: 1200px) {
  // 手机端样式调整
  .footer_outer{
    height: auto;
  }
  .footer_content{
    display: none;
  }
  .m_footer {
    width: 100%;
    height: 0.88rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.24rem;
    color: #99999b;
    .bg {
      width: 0.34rem;
      height: 0.34rem;
      background: url("../assets/kehu/Sprites.png") no-repeat;
      margin: 0 auto;
      // background-size: 100%;
    }
    .bg_index {
      background-position: -12px -317px;
    }
    .bg_shop {
      background-position: -72px -317px;
    }
    .bg_cart {
      background-position: -129px -317px;
    }
    .bg_my {
      background-position: -206px -317px;
    }
  }
}
</style>
