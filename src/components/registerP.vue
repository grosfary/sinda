<template>
  <div class="whole">
    <div class="top">
      <p class="topI"></p>
      <p class="topII">注册</p>
    </div>
    <div class="middle">
      <div class="phone">
        <input type="number" placeholder="  请输入手机号码">
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
      <dist class="linkage" @selected="selected"></dist>
      <div class="password">
        <input type="password" placeholder="  请输入密码">
      </div>
      <button class="promptly" @click="iregister">立即注册</button>
    </div>
  </div>
</template>

<script>
import dist from "../components/distpicker";
var md5 = require("md5");
export default {
  data() {
    return {
      imgUrl: "/xinda-api/ajaxAuthcode",
      show: true,
      count: "",
      timer: null,
      get: true,
      getNew: false
    };
  },
  methods: {
    selected(code) {
      this.distCode = code;
    },
    imgReflash() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
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
        .then(data => {
          // console.log(data);
        });
    },
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
          if (status == 1) {
            this.$router.push({ path: "/LoginRegister/login" });
          }
        });
    }
  },

  components: { dist }
};
</script>

<style lang="less">
.whole .middle .linkage {
  width: 5.5rem;
  height: 0.77rem;
  font-size: 0.1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.32rem;
  .province,
  .city,
  .area {
    font-size: 0.25rem;
    height: 0.75rem;
    width: 1.69rem;
    margin-bottom: 26px;
  }
}
</style>

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
.promptly {
  width: 5.5rem;
  height: 0.77rem;
  background-color: #2693d4;
  border: 0.01rem solid #2693d4;
  font-size: 30%;
  margin: 0 auto;
  color:#fff;
}
</style>






