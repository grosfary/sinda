<template>
  <div class="whole">
    <div class="top">
      <p class="topI" @click="back()"></p>
      <p class="topII">登录</p>
    </div>
    <div class="middle">
      <div class="phone">
        <input type="number" @blur="phonBlur" v-model="phone" placeholder="  请输入手机号码">
      </div>
      <div class="password">
        <input :type="pswd" @blur="pawOnBlur" v-model="boxPasw" placeholder="  请输入密码">
        <div @click="concealPS">
          <img :src="suo" alt="">
        </div>
      </div>
      <div class="picture">
        <input type="text" v-model="imgCode" @blur="verCode" placeholder="  请输入验证码">
        <div class="verifyI" @click="imgReflash">
          <img :src="imgUrl" alt="">
        </div>
      </div>
      <button class="promptly" @click="iregister">立即登录</button>
    </div>
    <div class="bottom">
      <p>还没有薪客账号</p>
      <button @click="enroll()">立即注册</button>
    </div>
    
  </div>
</template>

<script>
//三级联动调用
import dist from "../components/distpicker";
import { MessageBox } from "mint-ui";
var md5 = require("md5");
const head = require("../assets/pc/suo.jpg");
const headO = require("../assets/pc/suoo.jpg");
export default {
  data() {
    return {
      //图片验证
      imgUrl: "/xinda-api/ajaxAuthcode",
      boxPasw: "",
      imgV: "",
      phone:"",
      //手机
      phone:"",
      //验证码
      imgCode: "",
      //密码
      boxPasw: "",
      suo: head,
      pswd: "password",
    };
  },
  methods: {
     back(){
      this.$router.go(-1);
     },
    //手机号
    phonBlur() {
      if(this.phone !=""){
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        MessageBox("提示", "请输入正确的手机号");
      }
      }else{       
        MessageBox("提示", "手机号不能为空");
      }
    },
    //密码
    pawOnBlur() {
      if(this.boxPasw !=""){
      if (
        !/^\d{6,16}$/.test(
          this.boxPasw
        )
      ) {
        MessageBox("提示", "密码错误");
      }
      }
      else{       
        MessageBox("提示", "密码不能为空");
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
    //图片验证
    imgReflash() {
      this.imgUrl = this.imgUrl + "?t=" + new Date().getTime();
    },
    enroll(){
      this.$router.push({
        path:"/registerP"
      })
    },
    //立即注册
    //验证码
    verCode() {
      if(this.imgCode !=""){
      if (!/^[a-zA-Z0-9]{4}$/.test(this.imgCode)) {
        MessageBox("提示", "您输入验证码不正确");
      }
     }else{
       MessageBox("提示","验证码不能为空")
     }
    },
    //立即登录
    iregister() {
      if(this.phone!=''){
        if(this.boxPasw!=''){
          this.ajax.post("/xinda-api/sso/login",this.qs.stringify({
            loginId: this.phone,
            password: md5(this.boxPasw),
            imgCode: this.imgCode
          })
        ).then(data => {
          // console.log(data);
          // console.log(data.data.msg, data.data.status);
          let status = data.data.status;
          if (status == 1) {
            // this.setuserName(this.phone);
            // sessionStorage.setItem("userName", this.phone);
            this.$router.push({ path: "/m.sinda" });
          }
          else{
            MessageBox("提示","验证码错误")
          }
        });
        }else{
          MessageBox("提示","密码不能为空")
        }
      }else{
         MessageBox("提示","账号不能为空")
      }
      
    }
  },

  components: {}
};
</script>

<style scoped lang="less">
.whole {
  width: 7.5rem;
  margin: 0 auto;
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
  position: relative;
  input {
    width: 5.48rem;
    height: 0.75rem;
    border: 0.01rem solid #b0b0b0;
    font-size: 30%;
  }
  img {
    position: absolute;
    top: 0.15rem;
    left: 4.7rem;
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
.bottom{
  width: 7.5rem;
  background: #4d4d4d;
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  height: 0.7rem;
  // text-align: center;
  p{
    font-size: 0.3rem;
    padding-left: 0.8rem;
    line-height: 0.7rem;
    color: #d6d6d6;
  }
  button{
      position: fixed;
    color: #000;
    bottom: 0.05rem;
    left:5.5rem;
    padding:0.15rem 0.4rem;
    background: #2693d4;
    color:#fff;
    font-size: 0.25rem;
    font-family: "黑体";
    border:none;
    border-radius: 4px;
  }
}
</style>






