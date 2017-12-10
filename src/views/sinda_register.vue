<template>
  <div class="hello">
    <!-- <h3>这是注册页面</h3>
    <a href="#/LoginRegister/login">登录</a> -->
    <div class="vacancy"></div><br>
    <div class="register">
      <div class="registerI">
        <div class="registerfirst">
          <input class="box" @blur="onBlur" v-model="phone" type="tel" placeholder=" 请输入手机号">
          <p class="boxtel" v-show="boxTC">*您输入的手机号不正确</p>
          <div class="verify">
            <input class="boxI" type="text" v-model="imgCode" placeholder=" 请输入验证码">
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl" alt="">
            </div>
          </div>
          <div class="acquire">
            <input class="boxI" type="text" placeholder=" 请输入验证码">
            <button @click="getCode">点击获取</button>
          </div>
          <v-distpicker class="register-android-wheel" :placeholders="placeholders" @selected="selected"></v-distpicker>
          <input class="boxII" type="password" @blur="onBlurI" v-model="boxPasw" placeholder=" 请设置密码">
          <p class="boxpas" v-show="boxPC">*您输入的密码不正确</p>
          <button class="boxIII" @click="iregister">立即注册</button>
          <p>注册及同意遵守
            <a class="agreement" href="">《服务协议》</a>
          </p>
        </div>
        <p class="division"></p>
        <!-- 中间分割线 -->
        <div class="registersecond">
          <span>已有账号？</span><br>
          <a class="dl" href="#/LoginRegister/login">立即登录>></a>
          <img src="../assets/pc/u7967.jpg" alt="">
        </div>
      </div>
    </div><br>
    <div class="bottom"></div>
  </div>
</template>

<script>
import LRhead from "../components/sinda_LoginRegister_header";
import VDistpicker from "v-distpicker";
import { mapActions } from "vuex";
var md5 = require("md5");
export default {
  data() {
    return {
      imgUrl: "/xinda-api/ajaxAuthcode",
      imgCode: "",
      phone: "",
      boxTC: false,
      boxPasw: "",
      boxPC: false,
      distCode: "",
      placeholders: {
        province: " 省 ",
        city: " 市 ",
        area: " 区 "
      }
    };
  },
  methods: {
    ...mapActions(["setNum", "setloginState"]),
    selected: function(data) {
      this.distCode = data.area.code;
    },
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
      if (/^1[34578]\d{9}/.test(this.phone)) {
      } else {
        this.boxTC = true;
      }
    },
    onBlurI: function() {
      if (/^[a-zA-Z\d_]{8,}$/.test(this.boxPasw)) {
      } else {
        this.boxPC = true;
      }
    },
    iregister() {
      this.ajax
        .post(
          "/xinda-api/register/register",
          this.qs.stringify({
            cellphone: this.phone,
            smsType: 1,
            validCode: 111111,
            password: md5(this.boxPasw),
            regionId: this.distCode
          })
        )
        .then(data => {
          console.log("注册提交", data.data.msg, data.data.status);
        });
    }
  },
  created: function() {
    this.setloginState("注册");
  },
  components: { LRhead, VDistpicker }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  background-color: #f5f5f5;
}
.register {
  margin-top: 20px;
  width: 100%;
  height: 435px;
}
.registerI {
  width: 1200px;
  height: 435px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
.division {
  width: 1px;
  height: 260px;
  background-color: #cbcbcb;
  margin-top: 82px;
}
.registerfirst {
  width: 283px;
  height: 258px;
  margin-top: 50px;
  position: relative;
  p {
    margin-left: 20px;
    font-size: 14px;
    a {
      font-size: 14px;
      color: #2693d4;
      text-decoration: none;
    }
  }
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
  top: 240px;
  left: 295px;
  position: absolute;
}
.verify {
  display: flex;
  justify-content: space-between;

  .verifyI {
    width: 85px;
    height: 35px;
    padding-left: 10px;
    img {
      width: 85px;
      height: 35px;
    }
  }
}
.acquire {
  display: flex;
  justify-content: space-around;
  button {
    width: 98px;
    height: 35px;
    border: 1px solid #2693d4;
    border-radius: 3px;
    background-color: #fff;
    color: #2693d4;
  }
}
.registersecond {
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
.box {
  width: 280px;
  height: 35px;
  border: 1px solid #cbcbcb;
  margin-bottom: 20px;
  border-radius: 3px;
}
.boxI {
  width: 174px;
  height: 35px;
  border: 1px solid #cbcbcb;
  margin-bottom: 20px;
  border-radius: 3px;
}
.boxII {
  width: 280px;
  height: 35px;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
}
.boxIII {
  width: 280px;
  height: 35px;
  margin-top: 27px;
  border: 1px solid #2693d4;
  color: #2693d4;
  border-radius: 3px;
  background-color: #fff;
}
.bottom {
  padding-bottom: 150px;
}
</style>