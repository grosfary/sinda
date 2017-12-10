<template>
  <div class="cart">
      <div class="all_pro">
          <p>全部商品（1）</p>
          <span></span>
      </div>
      <div class="hot_server">
          <p>热门服务</p>
          <span></span>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "sinda_buyCart",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setlistName"])
  },
  created() {
    this.setlistName("购物车");
    this.ajax
      .post(
        "/xinda-api/cart/list",
        this.qs.stringify({
        //   sId: "0cb85ec6b63b41fc8aa07133b6144ea3"
        })
      )
      .then(data => {
        console.log(data);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cart{
    >div{
        width: 1200px;
        margin: 0 auto;
    }
}
.all_pro{
    span{
        display: block;
        height: 1px;
        width: 100%;
        background: #bdbdbd;
    }
}
.hot_server{
    span{
        display: block;
        height: 1px;
        width: 100%;
        background: #bdbdbd;
    }
}
</style>