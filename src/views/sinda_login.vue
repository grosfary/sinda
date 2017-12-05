<template>
  <div class="hello">
    <div class="vacancy"></div><br>
    <div class="login">
      <div class="loginI">
        <div class="loginfirst">
          <input class="box" name="phone" type="number" placeholder="请输入手机号码" v-model="phone" />
          <input class="box" type="text" placeholder="请输入密码">
          <div>
            <input class="boxI" type="text" placeholder="请输入验证码">
            <div class="verify"></div>
          </div>
          <a href="#/LoginRegister/forgetThePassword">忘记密码?</a><br>
          <button class="boxII">立即登录</button>
        </div>
        <p></p>
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
export default {
  data() {
    return {};
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
  p {
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
  div {
    display: flex;
    justify-content: space-around;
    div {
      width: 85px;
      height: 35px;
      padding-left: 10px;
      background-color: pink;
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
.box {
  width: 280px;
  height: 35px;
  border: 1px solid #cbcbcb;
  margin-bottom: 24px;
  border-radius: 3px;
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