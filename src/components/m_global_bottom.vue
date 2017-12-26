<template>
  <!-- 公共页面底部 -->
  <div class="footer_outer">
    <div class="m_footer">
      <router-link tag="a" :to="i.src" v-for="(i,index) in btn" :key="i.name" >
        <div class="bg" :class="i.class"></div>
        <div>{{i.name}}</div>
      </router-link>
    </div>
  </div>
</template> 

<script>
export default {
  name: "m_sinda_bottom",
  data() {
    return {
      btn: {
        a: { name: "首页", src: "/m.sinda", class: "bg_index" },
        b: { name: "店铺", src: "/m_storelist", class: "bg_shop" },
        c: { name: "购物车", src: "/shoppingCard", class: "bg_cart" },
        d: { name: "我的", src: "/generic", class: "bg_my" }
      }
    };
  }
};
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  // 手机端样式调整

  .footer_content{
    display: none;
  }
  .m_footer {
    padding-top: 0.08rem;
    background: #fff;
    position: fixed;
    z-index: 1000;
    bottom:0;
    width: 100%;
    height: 0.88rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.24rem;
    color: #99999b;
    .bg {
      width: 0.34rem;
      height: 0.34rem;
      margin: 0 auto;
      // background-size: 33px 33px;
      //  background-size: 0.34rem 5.55rem;
    }
    .bg_index {
      background: url("../assets/kehu/icon_index_02.png") no-repeat 0 0;
      background-size: 100% 100%;
    }
    .bg_shop {
      background: url("../assets/kehu/icon_shop_02.png") no-repeat 0 0;
      background-size: 100% 100%;
    }
    .bg_cart {
      background: url("../assets/kehu/icon_cart_02.png") no-repeat 0 0;
      background-size: 100% 100%;
    }
    .bg_my {
      background: url("../assets/kehu/icon_my_02.gif") no-repeat 0 0;
      background-size: 100% 100%;
    }
  }

</style>
