<template>
    <div class="hello">
        <img :src="'http://115.182.107.203:8088/xinda/pic'+img1" alt="">
        <img :src="'http://115.182.107.203:8088/xinda/pic'+img2" alt="">
        <img :src="'http://115.182.107.203:8088/xinda/pic'+img3" alt="">
        <img :src="'http://115.182.107.203:8088/xinda/pic'+img4" alt="">
        <img :src="'http://115.182.107.203:8088/xinda/pic'+img5" alt="">

    </div>
</template>

<script>
export default {
  data() {
    return {
      img1:"",
      img2:"",
      img3:"",
      img4:"",
      img5:""
    };
  },
  created(){
    var img = JSON.parse(sessionStorage.getItem("shoppingID"));
    var that = this;
    console.log(img)
    !(function(shopping) {
      that.img1= shopping.businessCertPath;
      that.img2= shopping.hrCertPath;
      that.img3= shopping.orgCertPath;
      that.img4= shopping.providerImg;
      that.img5= shopping.taxCertPath;
    })(img)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>