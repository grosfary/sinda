<template>
  <div class="hello">
    <div class="vacancy"></div><br>
    <div class="register">
      <div class="registerI">
        <div class="registerfirst">
          <input class=" box" type="tel" @blur="onBlur" v-model="boxVal" placeholder="请输入手机号">
          <p class="boxtel" v-show="boxTC">*您输入的手机号不正确</p>
          <div class="verify">
            <input class="boxI" type="text" placeholder="请输入验证码" v-model="imgV" @blur="verCode">
            <p class="vCode" v-show="boxCode">*您输入的验证码不正确</p>
            <div class="verifyI" @click="imgReflash">
              <img :src="imgUrl" alt="">
            </div>
          </div>
          <div class="acquire">
            <input class="boxI" type="text" placeholder="请输入验证码" v-model="sjCode" @blur="sjCodeI" @click="mobile">
            <p class="sCode" v-show="sCode">*您输入的验证码不正确</p>
            <button @click="getcode">点击获取</button>
          </div>
          <input class="boxII" type="password" @blur="onBlurI" v-model="boxPasw" placeholder="请输入新密码">
          <p class="boxpas" v-show="boxPC">*密码长度6-16位且必须包含大小写字母、数字、字符</p>
          <input class="boxII" type="password" @blur="onBlurII" v-model="boxPaswI" placeholder="请再次确认密码">
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
export default {
  data() {
    return {
      imgUrl: "/xinda-api/ajaxAuthcode",
      imgCode: "",
      boxVal: "",
      boxTC: false,
      boxPasw: "",
      boxPC: false,
      boxPaswI: "",
      boxPCI: false,
      imgV: "",
      boxCode: false,
      sjCode: "",
      sCode: false
    };
  },
  methods: {
    imgReflash: function() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    onBlur: function() {
      if (/^1[34578]\d{9}$/.test(this.boxVal)) {
        this.boxTC = false;
      } else {
        this.boxTC = true;
      }
    },
    getcode() {
      this.ajax.post(
        "/xinda-api/register/sendsms",
        this.qs
          .stringify({
            cellphone: this.boxVal,
            smsType: 1,
            imgCode: this.imgV
          }))
          .then(data => {
            console.log("点击验证码", data.data.msg, data.data.status);
          }
      );
    },
    onBlurI: function() {
      var pw = this.boxPasw;
      var md5 = require("md5");
      console.log(md5(pw));
      if (
        /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,16}$/.test(
          this.boxPasw
        )
      ) {
        this.boxPC = false;
      } else {
        this.boxPC = true;
      }
    },
    onBlurII: function() {
      var pw = this.boxPaswI;
      var md5 = require("md5");
      console.log(md5(pw));
      if (this.boxPaswI == this.boxPasw) {
        this.boxPCI = false;
      } else {
        this.boxPCI = true;
      }
    },
    // getCode: function() {
    //   this.setNum(0);
    //   this.ajax
    //     .post(
    //       "/xinda-api/register/sendsms",
    //       this.qs.stringify({
    //         cellphone: this.boxVal,
    //         smsType: 1,
    //         imgCode: this.imgCode
    //       })
    //     )
    //     .then(data => {
    //       console.log(data);
    //     });
    // },
    
    verCode() {
      if (/^[a-zA-Z0-9]{4}$/.test(this.imgV)) {
        this.boxCode = false;
      } else {
        this.boxCode = true;
      }
    },
    sjCodeI() {
      if (/^[0-9]{6}$/.test(this.sjCode)) {
        this.sCode = false;
      } else {
        this.sCode = true;
      }
    },
    mobile() {
      // this.ajax.post(
      //   "/xinda-api/register/findpas",
      //   this.qs.stringify({
      //     cellphone: this.boxVal,
      //     smsType: 1,
      //     validCode:111111
      //   })
      // );
    },
    affirm() {
      var md5 = require('md5');
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
    },
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
.boxpas {
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
.sCode {
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
  margin-bottom: 27px;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
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