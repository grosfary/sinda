<template>
  <div class="whole">
    <div class="top">
      <p class="topI"></p>
      <p class="topII">忘记密码</p>
    </div>
    <div class="middle">
      <div class="phone">
        <!-- <input class="box" type="number" placeholder="请输入手机号码" v-model="phone" @focus="Zphone" @blur="Cphone">
        <div class="yeahing" v-show="yphone">
          <p class="yeahP">请输入11位中国大陆手机号</p>
        </div>
        <div class="erping" v-show="ephone">
          <div class="erImg"></div>
          <p class="errP">{{Ephone}}</p>
        </div> -->
        <input type="number" @blur="onBlur" v-model="phone" placeholder="  请输入手机号码">
        <p class="phoneT" v-show="phoneA">*您输入的手机号不正确</p>
      </div>
      <div class="picture">
        <input type="text" placeholder="  请输入验证码">
        <div class="verifyI" @click="imgReflash">
          <img :src="imgUrl" alt="">
        </div>
      </div>
      <div class="message">
        <input type="text" placeholder="  请输入短信验证码">
        <div @click="getCoBut">
          <span v-show="show" @click="getCode" class="getblue">点击获取</span>
          <span v-show="!show" class="getgray">重新获取{{count}}s</span>
        </div>
      </div>
      <div class="password">
        <input type="password" placeholder="  请输入密码">
      </div>
      <div class="password">
        <input type="password" placeholder="  请输入密码">
      </div>
      <button class="promptly" @click="iregister">立即注册</button>
    </div>
  </div>
</template>

<script>
//三级联动调用
import dist from "../components/distpicker";
var md5 = require("md5");
export default {
  data() {
    return {
      //图片验证
      imgUrl: "/xinda-api/ajaxAuthcode",
      //倒计时
      show: true,
      count: "",
      timer: null,
      get: true,
      getNew: false,
      //手机号
      phone: "",
      phoneA: false
    };
  },
  methods: {
    //手机号
    onBlur() {
      if (/^1[34578]\d{9}$/.test(this.phone)) {
        this.phoneA = false;
      } else {
        this.phoneA = true;
      }
    },
    // Zphone: function() {
    //   this.ephone = false;
    //   this.yphone = true;
    // },
    // Cphone: function() {
    //   var phoneStyle = /^1[3|4|5|7|8]\d{9}$/;
    //   if (this.phone) {
    //     if (!phoneStyle.test(this.phone)) {
    //       this.yphone = false;
    //       this.ephone = true;
    //       this.Ephone = "请输入正确的手机号码";
    //     } else {
    //       this.ephone = false;
    //       this.yphone = false;
    //     }
    //   } else {
    //     this.yphone = false;
    //   }
    // },

    //三级联动
    selected(code) {
      this.distCode = code;
    },
    //图片验证
    imgReflash() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    //点击获取
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
        .then(data => {
          // console.log(data);
        });
    },
    //倒计时
    getCode() {
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
    },
    //立即注册
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
          console.log("立即注册", data.data.msg, data.data.status);
          if (status == 1) {
            this.$router.push({ path: "/LoginRegister/login" });
          }
        });
    }
  },

  components: { dist }
};
</script>

<style scoped lang="less">
.whole {
  width: 100%;
}
//顶部
.top {
  width: 100%;
  height: 0.77rem;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  position: relative;
}
.topI {
  width: 0.5rem;
  height: 0.6rem;
  background: url(/static/img/Sprites.7a5be37.png) no-repeat -5px -2px;
  position: absolute;
  top: 0.07rem;
  left: 0.2rem;
  background-size: 1000%;
}
.topII {
  font-size: 0.4rem;
  line-height: 0.77rem;
}
//手机格式
.middle {
  // margin-top: 0.7rem;
  width: 5.5rem;
  margin: 0.77rem auto 0;
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}
.phone {
  width: 5.5rem;
  height: 0.77rem;
  line-height: 0.2rem;
  input {
    width: 5.48rem;
    height: 0.75rem;
    border: 0.01rem solid #b0b0b0;
    font-size: 30%;
  }
}
.phoneT {
}
/*图片验证*/
.picture {
  width: 5.5rem;
  height: 0.77rem;
  margin-top: 0.32rem;
  line-height: 0.2rem;
  display: flex;
  justify-content: space-between;
  input {
    width: 2.73rem;
    height: 0.73rem;
    border: 0.01rem solid #b0b0b0;
    font-size: 30%;
  }
  .verifyI {
    width: 2.43rem;
    height: 0.66rem;
    padding-left: 0.1rem;
    img {
      width: 2.43rem;
      height: 0.66rem;
    }
  }
}
/*短信验证*/
.message {
  width: 5.5rem;
  height: 0.77rem;
  margin-top: 0.32rem;
  line-height: 0.2rem;
  display: flex;
  justify-content: space-between;
  input {
    width: 2.73rem;
    height: 0.75rem;
    border: 0.01rem solid #b0b0b0;
    font-size: 30%;
  }
}
/*点击获取*/
.getblue {
  line-height: 0.75rem;
  text-align: center;
  display: block;
  width: 2.45rem;
  height: 0.75rem;
  border-radius: 0.03rem;
  background-color: #2693d4;
  color: #fff;
  font-size: 30%;
}
/*倒计时*/
.getgray {
  line-height: 0.75rem;
  text-align: center;
  display: block;
  width: 2.45rem;
  height: 0.75rem;
  border-radius: 0.03rem;
  border: 0.01rem solid #aeadae;
  background-color: #aeadae;
  color: #fff;
  font-size: 30%;
}
/*密码*/
.password {
  width: 5.5rem;
  height: 0.77rem;
  margin-top: 0.32rem;
  line-height: 0.2rem;
  input {
    width: 5.48rem;
    height: 0.75rem;
    border: 0.01rem solid #b0b0b0;
    font-size: 30%;
  }
}
/*立即注册按钮*/
.promptly {
  width: 5.5rem;
  height: 0.77rem;
  background-color: #2693d4;
  border: 0.01rem solid #2693d4;
  font-size: 30%;
  margin: 0 auto;
  color: #fff;
}
</style>






