<template>
  <div class="hello">
    <div class='generic'>
      <div class='head'>
        <img src="../assets/pc/u5086.jpg" alt="">
      </div>
      <div class='submit'>
        <div class='name'>ajax</div>
      </div>
      <div class='set'>
        <div class='myorder'>我的订单</div>
        <div class='myset'><div>账户设置</div></div>
      </div>
      <input type="submit" value='退出登录' class='quit'>
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
      width:6.7rem;
      overflow-x: scroll;
      position: fixed;
      top: 45%;
      left: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      .set{
        width:100%;
        margin-top:0.5rem;
        div{
          margin:0 auto;
          width:6.7rem;
          height:0.76rem;
          margin-top:10px;
          font-size:22px;
          line-height:0.76rem;
        }
         .myset{
           background:#e9e9e9;
            div{
              width:64px;
              margin:0 0;
              background:url(../assets/pc/Sprites.png) no-repeat -410px -288px;
              white-space:nowrap;
            }
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
  }
 }
 .myorder{
   white-space:nowrap;
   text-indent:83px;
   background:#e9e9e9 url(../assets/pc/Sprites.png) no-repeat -486px -286px;
 }
 .name{
   font-size:22px;
 }
 .quit{
   width:100%;
   height:0.76rem;
   font-size:0.31rem;
   background:#2693d4;
   color:#fff;
   border:0;
   border-radius:4px;
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






