

<template>
  <div class="Mobile">
    <div class="shopList">
      <div class="logo">
        <img :src="'http://115.182.107.203:8088/xinda/pic'+shopLOGO" alt="">
        <div class="remit">
          <h3>{{providerName}}</h3>
          <p>{{regionName}}</p>
        </div>
      </div>
      <div class="body">
        <div class="shopName">
          <div class="about">
            <h3>公司介绍</h3>
            <p>{{providerInfo}}</p>
          </div>
          <img src="../../images/pc/123.png" alt="">
        </div>

        <div class="commodityList">
          <div class="navgation">
            <router-link v-bind:to="{path:'/shop/service'}" class="jump" active-class="serving">服务产品</router-link>
            <router-link v-bind:to="{path:'/shop/product'}" class="jump" active-class="serving">客服</router-link>
            <router-link v-bind:to="{path:'/shop/certificate'}" class="jump" active-class="serving">资质证书</router-link>
          </div>
          <router-view></router-view>
        </div>
      </div>
      <div class=""></div>
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

    that.ajax
      .post(
        //请求店铺商品信息
        "http://115.182.107.203:8088/xinda/xinda-api/product/package/grid",
        that.qs.stringify({
          start: 0,
          //不加限制条数的参数，获取所有数据
          providerId: "9080f0c120a64eb3831d50ba93c33e78",
          sort: 2
        })
      )
      .then(function(data) {
        var shop = data.data.data;
        console.log(shop);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.shopList {
  width: 1200px;
  margin: 50px 170px;
  display: none;
}
.logo {
  border: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  img {
    margin-left: 40px;
    width: 220px;
  }
  .remit {
    margin-left: 20px;
    h3 {
      margin-top: 50px;
      font-size: 35px;
    }
    p {
      margin-top: 16px;
      margin-bottom: 60px;
      font-size: 14px;
      color: #676767;
    }
  }
}
.body {
  width: 1200px;
  height: 585px;
  margin: 23px 0 43px 0;
  display: flex;
  justify-content: space-between;
  .shopName {
    border: 1px solid #e9e9e9;
    width: 300px;
    position: relative;
    img {
      width: 300px;
      position: absolute;
      bottom: 0;
      border-top: 1px solid #e9e9e9;
    }
  }
  .about {
    h3 {
      font-size: 20px;
      color: #000000;
      font-weight: normal;
      margin: 15px 35px 0 10px;
    }
    p {
      font-size: 15px;
      color: #676767;
      margin: 40px 22px 0 26px;
      line-height: 28px;
      text-indent: 2rem;
    }
  }
}

.commodityList {
  border: 1px solid #e9e9e9;
  width: 878px;
}
.navgation {
  border-bottom: 1px solid #e9e9e9;
  width: 100%;
  height: 40px;
  .jump {
    font-size: 12px;
    color: #676767;
    display: inline-block;
    width: 110px;
    height: 40px;
    line-height: 50px;
    text-align: center;
    margin: 0 10px;
    text-decoration: none;
  }
  .serving {
    color: #2693d4;
    border-bottom: 2px solid #2693d4;
  }
}
</style>