<template>
  <div class="hello">
    <div class='generic'>
      <div class='head'>
        <img src="../assets/pc/u5086.png" alt="">
      </div>
      <div class='submit'>
        <div class='name' v-if="mark">{{userName}}</div>
        <nobr v-if="!mark">
            <router-link :to="{path:'/registerP'}"><input type="submit" value="注册"></router-link>
            <router-link :to="{path:'/loginP'}"><input type="submit" value="登录"></router-link>
        </nobr>
      </div>
      <div class='set'>
        <a href="#/myOrder"><div class='myorder'>我的订单</div></a>
        <a href="#/set" v-if="mark"><div class='myset'><div>账户设置</div></div></a>
        <a href="#/loginP" v-if="!mark"><div class='myset'><div>账户设置</div></div></a>
      </div>
      <input type="submit" value='退出登录' class='quit' @click='quit' v-if="mark">
    </div>
        <div class='informations' v-show='show'>
      <div class='hint'>
        <div class='infor'>
            <div class='for'>信息</div>
            <div class='err' @click='hide'>x</div>
        </div>
        <div class='information'>确认退出登录吗</div>
        <div class='ok'>
          <input type="submit" value='确定' class='color' @mouseenter='submit(1)' @click='hidedate'>
          <input type="submit" value='取消' @mouseenter='submit(2)' @click='hide'>
        </div>
      </div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "请先登录",
      show:false,
      mark:false,
    };
  },
  created() {
    this.userName = sessionStorage.getItem("userName");
    if(sessionStorage.getItem("userName")){
    this.mark=true;
    }
    
  },
  methods: {
    quit: function() {
      this.show = true;
    },
    hide: function() {
      this.show = false;
    },
    submit: function(index) {
      this.index = index;
    },
    hidedate: function(code) {
      this.show = false;
      this.userName= "请先登录";
      var that = this;
      this.ajax
        .post(
          "/xinda-api/sso/ logout",
          this.qs.stringify({
          })
        )
        .then(function(data) {
          console.log(data)
      sessionStorage.clear();
      that.$router.go(0)
        });
    },
  }
};
</script>
<style scoped lang="less">
html {
  width: 100%;
}
body {
  min-width: 300px;
}
.informations {
  font-size:0.22rem;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  filter: alpha(opacity=0);
}
.hint {
  width: 306px;
  height: 176px;
  float: left;
  background: #fff;
  border: 1px solid #000;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
}
.infor {
  height: 32px;
  background: #e8e8e8;
}
.for {
  float: left;
  width: 40px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  font-weight: 700;
  text-indent: 10px;
}
.err {
  float: right;
  width: 24px;
  height: 32px;
  line-height: 32px;
}
.information {
  height: 92px;
  line-height: 105px;
  text-align: center;
}
.ok {
  margin-left: 24px;
  input {
    background: #fff;
    border: 1px solid #e7e7e7;
    width: 115px;
    height: 30px;
    margin-left: 10px;
  }
  .color {
    background: #2693d4;
    color: #fff;
  }
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
  margin-top: 1rem;
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






