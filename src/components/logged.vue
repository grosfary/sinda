<template>
  <div class="hello">
    <div class='generic'>
      <div class='head'>
        <img src="../assets/pc/u5086.png" alt="">
      </div>
      <div class='submit'>
        <div class='name'>{{userName}}</div>
      </div>
      <div class='set'>
        <a href="#/myOrder"><div class='myorder'>我的订单</div></a>
        <a href="#/generic"><div class='myset'><div>账户设置</div></div></a>
      </div>
      <input type="submit" value='退出登录' class='quit'>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: []
    };
  }
};
// created:{
//   var userName = sessionStorage.getItam('userName');
//   this.userName = userName;
// }
</script>
<style scoped lang="less">
html {
  width: 100%;
}
body {
  min-width: 300px;
}
.hello {
  width: 100%;
  .generic {
    width: 6.7rem;
    position: fixed;
    top: 45%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    .set {
      margin-top: 1.54rem;
      a {
        text-decoration: none;
        div {
          color: #000;
        }
      }
      div {
        margin: 0 auto;
        width: 5.7rem;
        height: 76px;
        margin-top: 10px;
        font-size: 22px;
        line-height: 76px;
      }
      .myset {
        background: #e9e9e9;
        div {
          width: 64px;
          margin: 0 0;
          background: url(../assets/pc/Sprites.png) no-repeat -410px -284px;
          white-space: nowrap;
        }
        text-indent: 83px;
      }
    }
  }
  .head {
    img {
      width: 100%;
      height: 100%;
      border-radius: 65px;
    }
    width: 1.6rem;
    height: 1.6rem;
    margin: auto auto;
  }
  .submit {
    text-align: center;
  }
}
.myorder {
  white-space: nowrap;
  text-indent: 83px;
  background: #e9e9e9 url(../assets/pc/Sprites.png) no-repeat -486px -284px;
}
.name {
  font-size: 22px;
}
.quit {
  width: 100%;
  height: 0.76rem;
  font-size: 0.31rem;
  background: #2693d4;
  color: #fff;
  border: 0;
  margin-top:1rem;
  border-radius: 4px;
}
@media screen and (max-width: 670px) {
  .hello > .generic > .set > div {
    width: 100%;
  }
  .hello > .generic {
    width: 73%;
  }
}
@media screen and (min-width: 380px) {
  .hello {
    width: 380px;
    height: 671px;
  }
}
</style>






