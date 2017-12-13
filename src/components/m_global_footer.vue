<template>
  <!-- 公共页面底部 -->
  <div class="footer_outer">
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

</style>
