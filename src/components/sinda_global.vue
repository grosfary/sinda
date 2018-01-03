<template>
  <div class="hello">
    <div class="top_outer">
      <div class="top_content">
        <ul class="top_welcome">
          <li>
            <span>欢迎来到信达！</span>
          </li>
          <!-- <div v-if="show" style="display:inline-block"> -->
          <li v-if="show">
            <ul>
              <li v-if="!getuserName">
                <a href="#/LoginRegister/login">登录</a>
              </li>
              <li v-if="!getuserName">
                <a href="#/LoginRegister/register">快速注册</a>
              </li>
              <li v-if="getuserName" style="margin-left:20px;">Hi,
                <a href="#/member/setting">{{getuserName}}</a>
              </li>
              <li v-if="getuserName">
                <a @click="logOutBox" style="cursor: pointer;">退出登录</a>
                <div name="logOutX" class="logOut" v-if="logshow">
                  <p :key="'a'">您确定要
                    <a @click="logOutBtn">退出</a>当前登录吗？
                    <span @click="shut" :key="'a'">×</span>
                  </p>
                  <div :key="'a'"></div>
                </div>
              </li>
            </ul>
          </li>
          <!-- </div> -->
        </ul>
        <ul>
          <li>
            <span class="icon_gouwuche"></span>
          </li>
          <li>
            <span>购物车</span>
          </li>
          <li>
            <a class="gouwuche_number" @click="loginState">{{getNum}}</a>
          </li>
          <li>
            <span>件</span>
          </li>
          <li>
            <a href="">服务商入口</a>
          </li>
        </ul>
      </div>
    </div>
    <sinda_header></sinda_header>
    <router-view/>
    <sinda_footer></sinda_footer>
    <div class="bottom_outer">
      <div class="bottom_content">
        <ul>
          <li>©Copyright</li>
          <li>
            <a href="">2016北京信达科技有限公司</a>
          </li>
          <li>京ICP备</li>
          <li>
            <a href="">16011621号</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import sinda_header from "./sinda_global_header";
// import sinda_footer from "./sinda_global_footer";
// import sinda_top from "../components/sinda_top";
// import sinda_bottom from "../components/sinda_bottom";
export default {
  name: "sinda_global",
  data() {
    return {
      state: -1,
      show: true,
      logshow: false,
      zero: 0
    };
  },
  created() {
    document.documentElement.style.fontSize = "16px";
  },
  computed: {
    ...mapGetters(["getNum", "getuserName"])
  },
  methods: {
    ...mapActions(["setuserName", "setNum"]),
    loginState: function() {
      this.$router.push({ path: "/list/cart" });
    },
    logOutBox: function() {
      this.logshow = true;
    },
    shut: function() {
      this.logshow = !this.logshow;
    },
    logOutBtn: function() {
      this.logshow = false;
      // 退出当前登录
      this.ajax.post("/xinda-api/sso/logout").then(data => {
        // 发送一个退出登录请求
        if (data.data.status === 1) {
          // 如果请求返回为1，则成功退出
          sessionStorage.setItem("userName", ""); // 退出时，清空缓存用户名
          this.setuserName(""); // 清空vuex显示的用户名
          // sessionStorage.setItem("cartNumber",this.zero); // 清空购物车
          this.state = 0;
          this.$router.go(0); // 刷新当前页面
        }
      });
    },
    cart_num: function() {
      this.ajax.post("/xinda-api/cart/cart-num").then(data => {
        this.state = data.data.status;
        if (this.state == 1) {
          this.setNum(data.data.data.cartNum);
          // console.log(data)
        }
      });
    }
  },
  created() {
    this.cart_num();
    // this.setNum(sessionStorage.getItem("cartNumber"));
  },
  updated() {
    sessionStorage.setItem("cartNumber", this.getNum);
  },
  // components: { sinda_header, sinda_footer, sinda_top, sinda_bottom }
  components: {
    sinda_header: () => import("./sinda_global_header"),
    sinda_footer: () => import("./sinda_global_footer"),
    sinda_top: () => import("../components/sinda_top")
    // sinda_bottom: () => import("../components/sinda_bottom")
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top_outer {
  //公共顶部背景样式
  height: 35px;
  width: 100%;
  background: #f2f2f2;
  color: #2a2a2a;
  .top_content {
    // 1200px居中的盒子
    width: 1200px;
    margin: 0 auto;
    &::after {
      //清除浮动
      content: "";
      display: block;
      clear: both;
    }
    .top_welcome {
      // 欢迎来到信达部分样式
      float: left;
      a {
        margin: 0 12px;
      }
    }
    ul {
      // 服务商入口和购物车样式
      float: right;
      // font-size: 0;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      li {
        float: left;
        height: 35px;
        line-height: 35px;
        a {
          display: inline-block;
          font-size: 14px;
          color: #2693d4;
          line-height: 35px;
          margin-left: 17px;
        }
        a.gouwuche_number {
          margin: 0;
          cursor: pointer;
        }
      }
    }
  }
}

.icon_gouwuche {
  display: block;
  height: 20px;
  width: 26px;
  background: url("../assets/pc/Sprites.png") 0 -72px no-repeat;
  margin-top: 7px;
}

.logOut {
  padding-left: 25px;
  position: relative;
  width: 250px;
  height: 35px;
  background: #f3e390;
  z-index: 10;
  color: #736c45;
  p {
    position: relative;
    a {
      color: #cd9100;
      margin: 0 2px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }
  }
  span {
    position: absolute;
    right: 10px;
    font-size: 22px;
    line-height: 35px;
    cursor: pointer;
  }
  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    background: #e1d69a;
    z-index: 100;
  }
}

.bottom_outer {
  // 公共底部背景样式
  height: 45px;
  width: 100%;
  background: #cccccc;
  .bottom_content {
    // 一个对齐的盒子
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  ul {
    //©Copyright 2016北京信达科技有限公司 京ICP备 16011621号
    width: 403px;
    margin: 0 auto;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    li {
      float: left;
      // margin-right: 5px;
      color: #000000;
      font-size: 14px;
      line-height: 45px;
      a {
        margin-left: 5px;
        margin-right: 5px;
        color: #000000;
        font-size: 14px;
        display: block;
        line-height: 45px;
      }
    }
  }
}
</style>






