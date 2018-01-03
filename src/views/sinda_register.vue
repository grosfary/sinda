<template>
  <div class="hello">
    <!-- <h3>这是注册页面</h3>
    <a href="#/LoginRegister/login">登录</a> -->
    <div class="vacancy"></div><br>
    <div class="register">
      <div class="registerI">
        <div class="registerfirst">
          <input class="box" @blur="onBlur" v-model="phone" type="number" placeholder=" 请输入手机号">
          <p class="boxtel" v-show="boxTC">*您输入的手机号不正确</p>
          <p class="boxtxt" v-show="boxtxt">*手机号不能为空</p>
          <div class="verify">
            <input class="boxI" type="text" v-model="imgCode" placeholder=" 请输入验证码" @blur="verCode">
            <p class="vCode" v-show="boxCode">*您输入的验证码不正确</p>
            <p class="code" v-show="vcode">*验证码不能为空</p>
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl" alt="">
            </div>
          </div>
          <div class="acquire">
            <input class="boxI" type="text" placeholder=" 请输入手机验证码" v-model="sjCode" @blur="sjCodeI">
            <p class="sCode" v-show="sCode">*您输入的验证码不正确</p>
            <p class="tcode" v-show="tcode">*请获取手机验证码</p>
            <div @click="getCoBut">
              <span v-show="show" @click="getCode" class="getblue">获取验证码</span>
              <span v-show="!show" class="getgray">重新获取{{count}}s</span>
            </div>
          </div>
          <!-- <v-distpicker class="register-android-wheel" :placeholders="placeholders" @selected="selected"></v-distpicker> -->
          <dist @selected="selected"></dist>
          <input :type="pswd" id="boxII" @blur="onBlurI" v-model="boxPasw" placeholder=" 请设置密码">
          <div id="xianshi" @click="concealPS">
            <img id="cloImg" :src="suo" alt="">
          </div>
          <p class="boxpas" v-show="boxPC">*密码长度6-16位且必须包含大小写字母、数字、字符</p>
          <p class="boxp" v-show="boxp">*密码不能为空</p>
          <div v-if="ifmsg" style="color:red;">{{msg}}</div>
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
const LRhead = resolve =>
  require(["../components/sinda_LoginRegister_header"], resolve);
const dist = resolve => require(["../components/distpicker"], resolve);
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
      boxTC: false,
      boxPasw: "",
      boxPC: false,
      imgCode: "",
      boxCode: false,
      sjCode: "",
      sCode: false,
      pswd: "password",
      suo: head,
      show: true,
      count: "",
      timer: null,
      get: true,
      getNew: false,
      boxtxt: false,
      vcode: false,
      tcode: false,
      boxp: false,
      msg: "提示信息",
      ifmsg: false
    };
  },
  methods: {
    ...mapActions(["setNum", "setloginState"]),

    selected(code) {
      this.distCode = code;
    },
    imgReflash() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    verCode() {
      //验证码
      if (this.boxCode) {
        return;
      }
      if (this.imgCode != "") {
        this.vcode = false;
        if (/^[a-zA-Z0-9]{4}$/.test(this.imgCode)) {
        } else {
          this.vcode = false;
        }
      } else {
        this.vcode = true;
      }
    },
    sjCodeI() {
      if (this.sjCode) {
        this.tcode = false;
        if (/^[0-9]{6}$/.test(this.sjCode)) {
          this.sCode = false;
        } else {
          this.sCode = true;
          this.tcode = false;
        }
      } else {
        this.tcode = true;
        this.sCode = false;
      }
    },
    onBlur() {
      if (this.phone != "") {
        this.boxtxt = false;
        if (/^1[34578]\d{9}$/.test(this.phone)) {
          this.boxTC = false;
        } else {
          this.boxTC = true;
          this.boxtxt = false;
        }
      } else {
        this.boxtxt = true;
        this.boxTC = false;
      }
    },
    onBlurI() {
      if (this.boxPasw) {
        this.boxp = false;
        if (
          /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,16}$/.test(
            this.boxPasw
          )
        ) {
          this.boxPC = false;
        } else {
          this.boxPC = true;
          this.boxp = false;
        }
      } else {
        this.boxp = true;
        this.boxPC = false;
      }
    },
    getCoBut() {
      this.setNum(0);
      this.get = false;
      this.getNew = true;
      this.ajax
        .post(
          "/xinda-api/register/sendsms",
          this.qs.stringify({
            cellphone: this.phone,
            smsType: 1,
            imgCode: this.imgCode
          })
        )
        .then(data => {});
    },
    getCode() {
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
          if (data.data.status == -1 && this.vcode == false) {
            this.boxCode = true;
            this.imgReflash();
          } else if (data.data.status !== -1) {
            this.boxCode = false;
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.show = false;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--;
                } else {
                  this.show = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000);
            }
          }
        });
    },
    iregister() {
      this.onBlur();
      this.verCode();
      this.sjCodeI();
      this.onBlurI();
      if (!this.distCode) {
        this.msg = "请选择城市";
        this.ifmsg = true;
        return;
      }
      this.ifmsg = false;
      if (
        !this.boxTC &&
        !this.boxtxt &&
        !this.boxcode &&
        !this.vcode &&
        !this.sCode &&
        !this.tcode &&
        !this.boxPC &&
        !this.boxp
      ) {
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
            var status = data.data.status;
            if (status == 1) {
              this.$router.push({ path: "/LoginRegister/login" });
            } else {
              this.msg = data.data.msg;
              this.ifmsg = true;
            }
          });
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
    }
  },
  created() {
    this.setloginState("注册");
  },
  components: { LRhead, dist }
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
.boxtxt {
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
  top: 230px;
  left: 275px;
  position: absolute;
}
.boxp {
  width: 180px;
  color: #fb81fd;
  font-size: 12px;
  top: 230px;
  left: 275px;
  position: absolute;
}
.vCode {
  width: 180px;
  color: #fb81fd;
  font-size: 12px;
  top: 65px;
  left: 295px;
  position: absolute;
}
.code {
  width: 180px;
  color: #fb81fd;
  font-size: 12px;
  top: 65px;
  left: 295px;
  position: absolute;
}
.sCode {
  width: 180px;
  color: #fb81fd;
  font-size: 12px;
  top: 125px;
  left: 295px;
  position: absolute;
}
.tcode {
  width: 180px;
  color: #fb81fd;
  font-size: 12px;
  top: 125px;
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
}
.getblue {
  line-height: 35px;
  text-align: center;
  display: block;
  width: 98px;
  height: 35px;
  border: 1px solid #2693d4;
  border-radius: 3px;
  background-color: #fff;
  color: #2693d4;
}
.getgray {
  line-height: 35px;
  text-align: center;
  display: block;
  width: 98px;
  height: 35px;
  border-radius: 3px;
  border: 1px solid #aeadae;
  background-color: #aeadae;
  color: #fff;
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
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.boxI {
  width: 174px;
  height: 35px;
  border: 1px solid #cbcbcb;
  margin-bottom: 20px;
  border-radius: 3px;
}
#boxII {
  width: 280px;
  height: 35px;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
  background-size: 20px 20px;
}
.boxIII {
  width: 280px;
  height: 35px;
  margin-top: 27px;
  border: 1px solid #2693d4;
  color: #2693d4;
  border-radius: 3px;
  background-color: #fff;
  position: relative;
}
#xianshi {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 240px;
  left: 248px;
}
#cloImg {
  width: 30px;
  height: 20px;
}
.bottom {
  padding-bottom: 150px;
}
</style>