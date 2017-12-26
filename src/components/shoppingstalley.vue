<template>
    <div class="empoty">
      
          <img src="../assets/kehu/gouwu.png" alt="">
      
      <div>
          <p>购物车空空如也，去首页逛逛吧！</p>
      </div>
      <a href=""><button>去首页</button></a>
    </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  created() {

  }
};
</script> 
<style scoped lang="less">

 .empoty{
     width:7.5rem;
     margin: 0 auto;
     text-align: center;
       img{
           width: 100%;
           height: 100%;
           margin:0 auto;
       
    }
    p{
        font-size:0.5rem;
        color:#2693d4;
    }
    button{
        width:2.60rem;
        height: 0.90rem;
        font-size:0.4rem;
        background: #2693d4;
        border:1px solid #2693d4;
        border-radius:3px;
        color:#fff;
         text-align: center;

    }
 }
    



</style>
