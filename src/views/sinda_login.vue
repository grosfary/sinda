<template>
  <div class="hello">
    <div class="vacancy"></div><br>
    <div class="login">
      <div class="loginI">
        <div class="loginfirst">
          <input class="boxT" type="number" @blur="onBlur" v-model="boxVal" placeholder="请输入手机号码">
          <p class="boxtel" v-show="boxTC">*您输入的手机号不正确</p>
          <input :type="pswd" class="boxP" @blur="onBlurI" v-model="boxPasw" placeholder="请输入密码">
          <div id="xianshi" @click="concealPS">
            <img id="cloImg" :src="suo" alt="">
          </div>
          <p class="boxpas" v-show="boxPC">*密码长度6-16位且必须包含大小写字母、数字、字符</p>
          <div>
          <input class="boxI" type="text" placeholder="请输入验证码" v-model="imgV" @blur="verCode">
          <p class="vCode" v-show="boxCode">*您输入的验证码不正确</p>            
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
const head = require("../assets/pc/suo.jpg");
const headO = require("../assets/pc/suoo.jpg");
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
      imgV: "",
      boxCode:false,
      pswd: "password",
      suo: head,
    };
  },
  methods: {
    ...mapActions(["setloginState","setuserName"]),
    imgReflash: function() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    getCode() {
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
    onBlur() {
      if (/^1[34578]\d{9}$/.test(this.boxVal)) {
        this.boxTC = false;
      } else {
        this.boxTC = true;
      }
    },
    onBlurI() {
      var pw = this.boxPasw;
      var md5 = require("md5");
      console.log(md5(pw));
      if (/^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,16}$/.test(this.boxPasw)) {
        this.boxPC = false;
      } else {
        this.boxPC = true;
      }
    },
    concealPS() {
      if (this.pswd == "password") {
        this.pswd = "text";
        this.suo = headO;
      } else {
        this.pswd = "password";
        this.suo = head;
      }
    },
    iLogin() {
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
            sessionStorage.setItem("userName", this.boxVal);
            this.$router.push({ path: "/" });
          }
        });
    },
    verCode(){
      if(/^[a-zA-Z0-9]{4}$/.test(this.imgV)){
        this.boxCode = false;
      }else{
        this.boxCode = true;
      }
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
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.boxP {
  width: 280px;
  height: 35px;
  border: 1px solid #cbcbcb;
  margin-bottom: 24px;
  border-radius: 3px;
}
#xianshi {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 65px;
  left: 248px;
}
#cloImg {
  width: 30px;
  height: 30px;
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
  width: 180px;
  color: #fb81fd;
  font-size: 12px;
  top: 64px;
  left: 285px;
  position: absolute;
}
.vCode{
  width: 180px;
  color: #fb81fd;
  font-size: 12px;
  top: 129px;
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