<template>
  <div class="whole">
    <div class="top">
      <p class="topI"></p>
      <p class="topII">登录</p>
    </div>
    <div class="middle">
      <div class="phone">
        <input type="number" v-model="boxVal" placeholder="  请输入手机号码">
      </div>
      <div class="password">
        <input type="password" v-model="boxPasw" placeholder="  请输入密码">
      </div>
      <div class="picture">
        <input type="text" v-model="imgV" placeholder="  请输入验证码">
        <div class="verifyI" @click="imgReflash">
          <img :src="imgUrl" alt="">
        </div>
      </div>
      <button class="promptly" @click="iregister">立即登录</button>
    </div>
  </div>
</template>

<script>
//三级联动调用
import dist from "../components/distpicker";
export default {
  data() {
    return {
      //图片验证
      imgUrl: "/xinda-api/ajaxAuthcode",
      boxPasw: "",
      imgV: "",
      boxVal:"",
    };
  },
  methods: {
    //图片验证
    imgReflash() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    //立即注册
    iregister() {
      var that = this
      var pw = this.boxPasw;
      var md5 = require("md5");
      this.ajax
        .post(
          "/xinda-api/sso/login",
          this.qs.stringify({
            loginId: this.boxVal,
            password: md5(pw),
            imgCode: this.imgV
          })
        )
        .then(data => {
          console.log(data.data.msg, data.data.status);
          let status = data.data.status;
          if (status == 1) {
            // this.setuserName(that.boxVal);
            sessionStorage.setItem("userName", this.boxVal);
            this.$router.push({ path: "/m.sinda" });
          }
        });
    }
  },

  components: {}
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
/*立即登录按钮*/
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






