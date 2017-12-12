<template>
  <div class="hello">
    <div class="vacancy"></div><br>
    <div class="login">
      <div class="loginI">
        <div class="loginfirst">
          <input class="boxT" type="tel" @blur="onBlur" v-model="boxVal" placeholder="请输入手机号码">
          <p class="boxtel" v-show="boxTC">*您输入的手机号不正确</p>
          <input class="boxP" type="password" @blur="onBlurI" v-model="boxPasw" placeholder="请输入密码">
          <p class="boxpas" v-show="boxPC">*您输入的密码不正确</p>
          <div>
            <input class="boxI" type="text" placeholder="请输入验证码" v-model="imgV">
            <div class="verify" @click="imgReflash">
              <img :src="imgUrl" alt="">
            </div>
          </div>
          <a href="#/LoginRegister/forgetPs">忘记密码?</a><br>
          <button class="boxII" @click='iLogin'>立即登录</button>
        </div>
        <p class="partition"></p>
        <!-- 中间分割线 -->
        <div class="lofinsecond">
          <span>还没有账号？</span><br>
          <a href="#/LoginRegister/register">立即注册>></a>
          <img src="../assets/pc/ren.jpg" alt="">
        </div>
      </div>
    </div><br>
    <div class="bottom"></div>
  </div>
</template>

<script>
import LRhead from "../components/sinda_LoginRegister_header";
import { mapActions } from "vuex";
var md5 = require("md5");
export default {
  data() {
    return {
      imgUrl: "/xinda-api/ajaxAuthcode",
      imgCode: "",
      phone: "",
      boxVal: "",
      boxTC: false,
      boxPasw: "",
      boxPC: false,
      imgV: ""
    };
  },
  methods: {
    ...mapActions(["setloginState","setuserName"]),
    imgReflash: function() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    getCode: function() {
      this.setNum(0);
      this.ajax
        .post(
          "/xinda-api/register/sendsms",
          this.qs.stringify({
            cellphone: this.phone,
            smsType: 1,
            imgCode: this.imgCode
          })
        )
        .then(data => {
          console.log(data);
        });
    },
    onBlur: function() {
      if (/^1[34578]\d{9}$/.test(this.boxVal)) {
      } else {
        this.boxTC = true;
      }
    },
    onBlurI: function() {
      var pw = this.boxPasw;
      var md5 = require("md5");
      console.log(md5(pw));
      if (/^[a-zA-Z\d_]{8,}$/.test(this.boxPasw)) {
      } else {
        this.boxPC = true;
      }
    },
    iLogin() {
      // this.$router.push({ path: "/" });
      this.ajax
        .post(
          "/xinda-api/sso/login",
          this.qs.stringify({
            loginId: this.boxVal,
            password: md5(this.boxPasw),
            imgCode: this.imgV
          })
        )
        .then(data => {
          console.log(data.data.msg, data.data.status);
          let status = data.data.status;
          if (status == 1) {
            this.setuserName(this.boxVal);
            this.$router.push({ path: "/" });
          }
        });
    }
  },
  created: function() {
    this.setloginState("登录");
  },
  components: { LRhead }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  background-color: #f5f5f5;
}
.login {
  margin-top: 20px;
  width: 100%;
  height: 435px;
}
.loginI {
  width: 1200px;
  height: 435px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  .partition {
    width: 1px;
    height: 260px;
    background-color: #cbcbcb;
    margin-top: 82px;
  }
}
.loginfirst {
  width: 283px;
  height: 258px;
  margin-top: 50px;
  position: relative;
  div {
    display: flex;
    justify-content: space-between;
    div {
      width: 85px;
      height: 35px;
      padding-left: 10px;
      img {
        width: 85px;
        height: 35px;
      }
    }
  }
  a {
    margin-left: 210px;
    font-size: 14px;
    color: #2693d4;
    text-decoration: none;
  }
}
.lofinsecond {
  width: 283px;
  height: 258px;
  margin-top: 40px;
  span {
    display: block;
  }
  a {
    font-size: 16px;
    color: #2693d4;
    text-decoration: none;
  }
  img {
    margin-left: -15px;
  }
}
.boxT {
  width: 280px;
  height: 35px;
  border: 1px solid #cbcbcb;
  margin-bottom: 24px;
  border-radius: 3px;
}
.boxP {
  width: 280px;
  height: 35px;
  border: 1px solid #cbcbcb;
  margin-bottom: 24px;
  border-radius: 3px;
}
.boxtel {
  width: 150px;
  color: #fb81fd;
  font-size: 14px;
  top: 8px;
  left: 295px;
  position: absolute;
}
.boxpas {
  width: 150px;
  color: #fb81fd;
  font-size: 14px;
  top: 69px;
  left: 295px;
  position: absolute;
}
.boxI {
  width: 174px;
  height: 35px;
  border: 1px solid #cbcbcb;
  margin-bottom: 24px;
  border-radius: 3px;
}
.boxII {
  width: 280px;
  height: 35px;
  margin-top: 23px;
  border: 1px solid #2693d4;
  color: #2693d4;
  border-radius: 3px;
  background-color: #fff;
}
.bottom {
  padding-bottom: 150px;
}
</style>