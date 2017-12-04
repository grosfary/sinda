<template>
    <div class="hello">
        <!-- <h3>这是店铺首页</h3> -->
        <div class="logo">
            <img src="" alt="">
            <p>{{providerName}}</p>
            <p>{{regionName}}</p>
        </div>
        <div class="body">
            <div class="shopName">
                <div>
                    <h3>公司介绍</h3>
                    <p>{{providerInfo}}</p>
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="shangList">
                <div class="navgation"></div>
                <!-- <shopMenu></shopMenu> -->
            </div>
        </div>
    </div>
</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
export default {
  data() {
    return {
        providerName:"",
        regionName:"",
        providerInfo:""
    };
  },
  components: { sinda_header, sinda_footer },
  created() {
    var that=this
    this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/provider/grid", {//请求店铺信息
        productId: "8a82f52b674543e298d2e5f685946e6e"
      }).then(function(data){
        console.log(data.data.data);
        var shop = data.data.data[0];
        // console.log(shop);
        that.providerName=shop.providerName;
        that.regionName=shop.regionName;
        that.providerInfo=shop.providerInfo;
      });
    // this.ajax //请求店铺商品
    //   .post(
    //     "http://115.182.107.203:8088/xinda/xinda-api/product/package/grid",
    //     {
    //       start: 0,
    //       limit: 8,
    //       productTypeCode: "1",
    //       productId: "8a82f52b674543e298d2e5f685946e6e",
    //       sort: 2
    //     }
    //   )
    //   .then(function(data) {
    //     console.log(data.data.data);
    //   });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

