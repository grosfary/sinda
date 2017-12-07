<template>
    <div class="hello">

      <h3>资质证书</h3> 
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created(){
    var img = sessionStorage.getItem("shoppingID");
    console.log(img)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>