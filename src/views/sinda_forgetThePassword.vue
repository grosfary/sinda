<template>
  <div class="hello">
    <div class="vacancy"></div><br>
    <div class="register">
      <div class="registerI">
        <div class="registerfirst">
          <input class="box" type="text" placeholder="请输入手机号">
          <div class="verify">
            <input class="boxI" type="text" placeholder="请输入验证码">
            <div class="verifyI"></div>
          </div>
          <div class="acquire">
            <input class="boxI" type="text" placeholder="请输入验证码">
            <button>点击获取</button>
          </div>
          <input class="boxII" type="text" placeholder="请输入新密码">
          <input class="boxII" type="text" placeholder="请再次确认密码">
          <button class="boxIII">确认修改</button>
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
}
.verify {
  display: flex;
  justify-content: space-around;

  .verifyI {
    width: 85px;
    height: 35px;
    padding-left: 10px;
    background-color: pink;
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