<template>
    <div class="call">
      <h3>工作时间：周一到周五</h3> 
      <h3>QQ咨询：453123484</h3>
        
    </div>
</template>

<script>
export default {
  created(){
    var shopList = JSON.parse(sessionStorage.getItem("shopping"));
    console.log(shopList)
    // this.ajax //请求客服
    //   .post(
    //     "http://115.182.107.203:8088/xinda/xinda-api/product/package/grid",
    //     this.qs.stringify({
    //       start: 0,
    //       limit: 6,
    //       providerId: "9080f0c120a64eb3831d50ba93c33e78",
    //       sort: 2
    //     })
    //   )
    //   .then(function(data) {
    //     console.log(data.data.data);
    //     var call = JSON.stringify(data.data.data);
    //     sessionStorage.setItem("call",call);
    //   });
  },
  data() {
   
    return {
      workTime:"",
      qq:"",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>