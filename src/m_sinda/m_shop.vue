<template>
    <div class="mobile">
      <div class="top">
        <div class="Logo">
              <img :src="'http://115.182.107.203:8088/xinda/pic'+shopLOGO" alt="">
        </div>
        <div class="Remit">
            <h3>{{providerName}}</h3>
            <p>{{providerInfo}}</p>
            <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "sinda_shop",
  data() {
    return {
      providerName: "",
      regionName: "",
      providerInfo: "",
      shopLOGO: ""
    };
  },
  created() {
    var that = this;
    this.ajax
      .post(
        "/xinda-api/provider/detail",
        this.qs.stringify({
          id: "9080f0c120a64eb3831d50ba93c33e78"
          //请求店铺信息
        })
      )
      .then(function(data) {
        var shop = data.data.data;
        sessionStorage.setItem("shoppingID", JSON.stringify(shop));
        that.providerName = shop.name;
        that.regionName = shop.regionName;
        that.providerInfo = shop.providerInfo;
        that.shopLOGO = shop.providerImg;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .mobile {
    display: none;
    margin: 0.64rem auto;
    .Logo img{
      display:block;
      justify-content: center;
      margin: 0 auto;
    }
    .Remit{
      font-size: 0.35rem;
      h3{
        display: block;
        text-align: center;
        line-height: 1.27rem;
      }
      p{
        font-size: 0.29rem;
        color:#000000;
        text-indent:0.6rem;
        margin: 0 0.27rem;
        line-height: 0.55rem;
      }
      
    }
    
  }
</style>