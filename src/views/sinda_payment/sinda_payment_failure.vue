<template>
  <div class="failure">
    <div class="headed">
        <p class="pay">支付失败</p> 
    </div>
    <div class="bodyed">
      <div class="logo"></div>
      <div class="right">
          <p class="alipay">支付失败!</p>
          <div class="payment">
              <p>支付未成功 ：让我们再试一次吧 ! </p>
              <a class="return" href="">返回支付页</a>
          </div>
          <div class="question">
              <span class="problem">如有问题，请联系客服：</span>
              <span class="phone">010-53380229</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import sinda_header from "../../components/sinda_global_header";
import sinda_footer from "../../components/sinda_global_footer";
export default {
  name: "payment_failure",
  data() {
    return {
      // filed
    };
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bodyed {
  height: 302px;
  background: #f7f7f7;
  margin: 20px -2px;
}
.logo {
  float: left;
  width: 210px;
  height: 210px;
  margin-top: 50px;
  margin-left: 133px;
  background: url(../../../images/pc/Sprites.png) no-repeat -600px 0px;
}
.pay {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  color: #4eb5ba;
}
.payment {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 70px;
  border-top: 1px solid #cccccc;
  p {
    color: #333333;
    font-size: 19px;
    margin-top: 10px;
  }
  a {
    border: 1px solid #4eb5ba;
    border-radius: 5px;
    width: 100px;
    text-align: center;
    color: #4eb5ba;
    margin: 10px 10px;
  }
}
.alipay {
  font-size: 30px;
  color: #4eb5ba;
  padding-top: 60px;
}
.problem {
  color: #666666;
  font-size: 15px;
}
.phone {
  color: #4ec3d6;
}
.right {
  margin-left: 400px;
}
.question {
  margin-top: 25px;
}
</style>


