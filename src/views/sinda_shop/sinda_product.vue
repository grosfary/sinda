<template>
    <div class="call">
      <!-- <div class="serviceItem" v-for="list in lists" :key="list.id"> -->
        <h3>工作时间：{{workTime}}</h3> 
        <h3>QQ咨询：{{qq}}</h3> 
      <!-- </div> -->
    </div>
</template>

<script>
import shop from "../sinda_shop";

export default {
  created(){
    var that=this;
    var shopList = JSON.parse(sessionStorage.getItem("shoppingID"));
    !(function(shopping) {
      that.workTime = shopping.workTime;
      that.qq = shopping.qq;
    })(shopList)
    
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
.call{
  padding:30px;
}
</style>