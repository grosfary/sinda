<template>
  <div class="success">
      <div class="top">
        <p class="payment">支付成功</p>
      </div>
    <div class="below">
      <div class="Logo"></div>
      <div class="word">
        <p class="Success">支付成功！</p>
        <span class="thanks">感谢您的购买 !</span>
        <p class="sure">我们将尽快确认您的 （ S订单号：{{dingdan}}）付款信息</p>
        <div class="Question">
          <span class="Problem">如有问题，请联系客服：</span>
          <span>010-53380229</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sinda_header from "../../components/sinda_global_header";
import sinda_footer from "../../components/sinda_global_footer";
export default {
  name:'payment_success',
  data() {
    return {
      dingdan:"161028000108.....",
    };
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.payment{
  border-bottom: 1px solid #ccc;
  color:#39a591;
}

.Logo {
  float: left;
  width: 210px;
  height: 210px;
  margin-top: 50px;
  margin-left: 133px;
  background: url(../../../images/pc/Sprites.png) no-repeat -353px 0px;
}
.below{
  height: 302px;
  background: #f7f7f7;
  margin: 20px -2px;
}
.Success{
  font-size: 35px;
  color:#39a591;
  padding-top: 50px;
}
.thanks{
  font-size: 29px;
}
.word{
    margin-left: 400px;
}
.sure{
  margin: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  border-bottom: 1px solid #e3e3e1;
}
</style>