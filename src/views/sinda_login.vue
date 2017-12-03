<template>
  <div class="hello">
    <h3>这是登录页面</h3>
    <a href="#/LoginRegister/register">注册</a>
    <div class="login">
      <div class="loginI">
        <div class="loginfirst">
          <input class="box" type="text" placeholder="请输入手机号码">
          <input class="box" type="text" placeholder="请输入密码">
          <input class="boxI" type="text" placeholder="请输入验证码">
          <a href="">忘记密码</a>
          <input class="boxII" type="text" placeholder="立即登录">
        </div>
        <p></p>
        <div class="lofinsecond">
          <p>还没有账号？</p>
          <a href="">立即注册>></a>
          <img src="../assets/pc/ren.jpg" alt="">
        </div>
      </div>
    </div>
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
.login {
  width: 100%;
  height: 435px;
}
.loginI {
  width: 1200px;
  height: 435px;
  margin: 0 auto;
  display: flex;
  p{
    width: 1px;
    height: 260px;
    background-color: #cbcbcb;
  }
}
.loginfirst {
  width: 283px;
  height: 258px;
}
.lofinsecond {
  width: 283px;
  height: 258px;
}
.box{
  width: 280px;
  height: 35px;
  border: 1px solid #cbcbcb;
}
</style>