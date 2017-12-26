<template>
  <div class="hel">
    <div class='generic'>
      <div class='head'>
        <img src="../assets/pc/u5086.png" alt="">
      </div>
      <div class='submit'>
        <nobr>
            <router-link :to="{path:'/registerP'}"><input type="submit" value="注册"></router-link>
            <router-link :to="{path:'/loginP'}"><input type="submit" value="登录"></router-link>
        </nobr>
      </div>
      <div class='set'>
        <router-link :to="{path:'/loginP'}"><div class='myorder'>我的订单</div></router-link>
        <router-link :to="{path:'/loginP'}"><div class='myset'><div>账户设置</div></div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  created(){
    //     if(sessionStorage.getItem("userName")){
    //   return this.$router.push({path:'/logged'})
    // }
  }
}

</script>

<style scoped lang="less">
html {
  width: 100%;
}
body {
  min-width: 300px;
}
.hel {
  width: 100%;
  .generic {
    width: 90%;
    overflow-x: scroll;
    position: fixed;
    top: 38%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    .set {
      margin-top:1.63rem;
      div {
        margin: 0 auto;
        height: 0.86rem;
        margin-top: 10px;
        font-size: 22px;
        line-height: 0.89rem;
      }
      .myset {
        div {
          width: 64px;
          margin: 0 0;
          background: url(../assets/pc/Sprites.png) no-repeat -410px -300px;
          white-space: nowrap;
        }
        background: #e9e9e9;
        text-indent: 83px;
      }
    }
  }
  .head {
    img {
      width: 100%;
      height: 100%;
      margin-top:2.82rem;
    }
    width: 1.6rem;
    height: 1.6rem;
    margin: auto auto;
  }
  .submit {
    text-align: center;
    margin-top:2.7rem;
    input {
      width: 1.58rem;
      height: 0.59rem;
      font-size: 22px;
      background: #2693d4;
      color: #fff;
      border: 0;
      border-radius: 0.08rem;
      line-height:0.59rem;
    }
  }
}
.myorder {
  white-space: nowrap;
  text-indent: 83px;
  background: #e9e9e9 url(../assets/pc/Sprites.png) no-repeat -486px -300px;
}
//  @media screen and (max-width: 730px) {
//     .hello>.generic>.set>div{
//       width:90%;
//     }
// }
@media screen and (min-width: 468px) {
  .hello > .generic {
    width: 4.68rem;
    height: 6.71rem;
  }
  .hello > .generic > .set div {
    height: 67px;
    line-height: 67px;
  }
}
</style>






