<template>
  <div class="hello">
    <div class="vacancy"></div><br>
    <div class="register">
      <div class="registerI">
        <div class="registerfirst">
          <input class="box" type="number" @blur="onBlur" v-model="boxVal" placeholder="请输入手机号">
          <p class="boxtel" v-show="boxTC">*您输入的手机号不正确</p>
          <p class="boxtxt" v-show="boxtxt">*手机号不能为空</p>
          <div class="verify">
            <input class="boxI" type="text" placeholder="请输入验证码" v-model="imgV" @blur="verCode">
            <p class="vCode" v-show="boxCode">*您输入的验证码不正确</p>
            <p class="vcode" v-show="vcode">*验证码不能为空</p>
            <!-- 图片验证 -->
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl" alt="">
            </div>
          </div>
          <div class="acquire">
            <input class="boxI" type="text" placeholder="请输入验证码" v-model="sjCode" @blur="sjCodeI">
            <p class="sCode" v-show="sCode">*您输入的验证码不正确</p>
            <p class="tcode" v-show="tcode">*请获取手机验证码</p>
            <!-- 倒计时 -->
            <div @click="getCoBut">
              <button v-show="get" class="getblue">点击获取</button>
              <button v-show="getNew" class="getgray" disabled>重新获取{{count}}</button>
            </div>
          </div>
          <input :type="pswd" class="boxII" @blur="onBlurI" v-model="boxPasw" placeholder="请输入新密码">
          <div id="xianshi" @click="concealPS">
            <img id="cloImg" :src="closuo" alt="">
          </div>
          <p class="boxpas" v-show="boxPC">*密码长度6-16位且必须包含大小写字母、数字、字符</p>
          <p class="boxp" v-show="boxp">密码不能为空</p>
          <input  :type="pad" class="boxII" @blur="onBlurII" v-model="boxPaswI" placeholder="请再次确认密码">
          <div id="yincang" @click="concealPW">
            <img id="cloImg" :src="suo" alt="">
          </div>
          <p class="boxpasI" v-show="boxPCI">*两次输入密码不一致</p>
          <button class="boxIII" @click="affirm">确认修改</button>
        </div>
        <p class="division"></p>
        <!-- 中间分割线 -->
        <div class="registersecond">
          <span>想起密码来了？</span><br>
          <a class="dl" href="#/LoginRegister/login">返回登录>></a>
          <img src="../assets/pc/ren.jpg" alt="">
        </div>
      </div>
    </div><br>
    <div class="bottom"></div>
  </div>
</template>

<script>
import LRhead from "../components/sinda_LoginRegister_header";
//密码显示隐藏图片
const head = require("../assets/pc/suo.jpg");
const headO = require("../assets/pc/suoo.jpg");
export default {
  data() {
    return {
      //图片验证码
      imgUrl: "/xinda-api/ajaxAuthcode",
      imgCode: "",
      //手机验证
      boxVal: "",
      boxTC: false,
      //密码验证
      boxPasw: "",
      boxPC: false,
      boxPaswI: "",
      boxPCI: false,
      //验证码验证
      imgV: "",
      boxCode: false,
      //手机验证码
      sjCode: "",
      sCode: false,
      //密码显示隐藏
      pswd: "password",
      pad: "password",
      closuo: head,
      suo: head,
      //倒计时
      count: "60",
      get: true,
      getNew: false,
      boxtxt:false,
      vcode:false,
      tcode:false,
      boxp:false,
    };
  },
  methods: {
    //图片验证
    imgReflash() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    
    //手机验证
    onBlur() {
      if( this.boxVal!=""){
      if(this.boxVal!=""){
      if (/^1[34578]\d{9}$/.test(this.boxVal)) {
        this.boxTC = false;
      } else {
        this.boxTC = true;
        this.boxtxt=false;
        }
       }
      }else{
        this.boxtxt=true;
        this.boxTC=false;
      }
    },
    //密码显示隐藏
    concealPS() {
      if (this.pswd == "password") {
        this.pswd = "text";
        this.closuo = headO;
      } else {
        this.pswd = "password";
        this.closuo = head;
      }
    },
    //再次输入密码显示隐藏
    concealPW() {
      if (this.pad == "password") {
        this.pad = "text";
        this.suo = headO;
      } else {
        this.pad = "password";
        this.suo = head;
      }
    },
    onBlurI: function() {
      var pw = this.boxPasw;
      var md5 = require("md5");
      console.log(md5(pw));
      if(this.boxPasw!=""){
      if (
        /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,16}$/.test(
          this.boxPasw
        )
      ) {
        this.boxPC = false;
      } else {
        this.boxPC = true;
        this.boxp=false;
       }
      }else{
        this.boxp=true;
        this.boxPC=false;
      }
    },
    onBlurII() {
      var pw = this.boxPaswI;
      var md5 = require("md5");
      console.log(md5(pw));
      if (this.boxPaswI == this.boxPasw) {
        this.boxPCI = false;
      } else {
        this.boxPCI = true;
      }
    },
    verCode() {
      if(this.imgV!=""){
      if (/^[a-zA-Z0-9]{4}$/.test(this.imgV)) {
        this.boxCode = false;
      } else {
        this.boxCode = true;
        this.vcode=false;
       }
      }else{
        this.vcode=true;
        this.boxCode=false;
      }
    },
    sjCodeI() {
      if(this.sjCode){
      if (/^[0-9]{6}$/.test(this.sjCode)) {
        this.sCode = false;
      } else {
        this.sCode = true;
        this.tcode=false;
        }
       }else{
         this.tcode=true;
         this.sCode=false;
       }
    },
    getCoBut() {
      this.get = false;
      this.getNew = true;
      var that = this;
      var dic = setInterval(function() {
        that.count--;
        if (that.count == 1) {
          clearInterval(dic);
          that.get = true;
          that.getNew = false;
        }
      }, 1000);
    },
    affirm() {
      var md5 = require("md5");
      this.ajax
        .post(
          "/xinda-api/register/findpas",
          this.qs.stringify({
            cellphone: this.boxVal,
            smsType: 1,
            password: md5(this.boxPasw),
            validCode: 111111
          })
        )
        .then(data => {
          console.log("忘记密码121", data.data.msg, data.data.status);
          if (status == 1) {
            this.$router.push({ path: "/LoginRegister/login" });
          }
        });
    }
  },
  components: { LRhead }
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
  width: 150px;
  color: #fb81fd;
  font-size: 14px;
  top: 180px;
  left: 295px;
  position: absolute;
}
.boxp {
  width: 150px;
  color: #fb81fd;
  font-size: 14px;
  top: 180px;
  left: 295px;
  position: absolute;
}
.boxpasI {
  width: 150px;
  color: #fb81fd;
  font-size: 14px;
  top: 240px;
  left: 295px;
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
.vcode {
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
  width: 98px;
  height: 35px;
  border: 1px solid #2693d4;
  border-radius: 3px;
  background-color: #fff;
  color: #2693d4;
}
.getgray {
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
.boxII {
  width: 280px;
  height: 35px;
  margin-bottom: 27px;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
}
#xianshi {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 175px;
  left: 248px;
}
#yincang {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 239px;
  left: 248px;
}
#cloImg {
  width: 30px;
  height: 30px;
}
.boxIII {
  width: 280px;
  height: 35px;
  border: 1px solid #2693d4;
  color: #2693d4;
  border-radius: 3px;
  background-color: #fff;
}
.bottom {
  padding-bottom: 150px;
}
</style>