<template>
  <div class="hello">
    <div class='generic'>
      <div class='head'>
        <img src="../assets/pc/u5086.jpg" alt="">
      </div>
      <div class='submit'>
        <nobr>
            <input type="submit" value="注册">
            <input type="submit" value="登录">
        </nobr>
      </div>
      <div class='set'>
        <div class='myorder'>我的订单</div>
        <div class='myset'><div>账户设置</div></div>
      </div>
    </div>
  </div>
</template>

<script>
import m_footer from "./m_global_footer";
export default {
  name: "sinda_global",
  data() {
    return {};
  },
  components: {  m_footer }
};
</script>

<style scoped lang="less">
  html{
    width: 100%;
  }
  body{
    min-width: 300px;
  }
  .hello{
    width:100%;
  .generic{
      width:100%;
      overflow-x: scroll;
      position: fixed;
      top: 40%;
      left: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      .set{
        div{
          margin:0 auto;
          width:6.7rem;
          height:0.76rem;
          margin-top:10px;
          font-size:22px;
          line-height:0.76rem;
        }
         .myset{
            div{
              width:64px;
              margin:0 0;
              background:url(../assets/pc/Sprites.png) no-repeat -410px -288px;
              white-space:nowrap;
            }
              background:#e9e9e9;
              text-indent:83px;
        }
      }
  }
  .head{
    img{
      width:100%;
      height:100%;
    }
    width:1.6rem;
    height:1.6rem;
    margin:auto auto;
  }
  .submit{
    text-align:center;
    input{
      width:1.56rem;
      height:0.6rem;
      font-size:22px;
      background:#2693d4;
      color:#fff;
      border:0;
      border-radius:4px;
    }
  }
 }
 .myorder{
   white-space:nowrap;
   text-indent:83px;
   background:#e9e9e9 url(../assets/pc/Sprites.png) no-repeat -486px -286px;
 }
 @media screen and (max-width: 670px) {
    .hello>.generic>.set>div{
      width:100%;
    }
}
 @media screen and (max-width: 380px) {
    .hello{
      width:380px;
      height:671px;
    }
}
</style>






