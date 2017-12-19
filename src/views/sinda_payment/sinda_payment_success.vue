<template>
  <div class="success">
      <div class="top">
        <p class="payment">支付成功</p>
      </div>
    <div class="below">
      <div class="Logo">
        <img src="../../assets/gongyon/success.jpg" alt="">
      </div>
      <div class="word">
        <p class="Success">支付成功！</p>
        
        <p class="sure">我们将尽快确认您的 （ 订单号：{{dingdan}}）付款信息</p>
        <div class="Question">
          <span class="Problem">如有问题，请联系客服：</span>
          <span class="phone">010-83421842</span>
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
      dingdan:"S7163637282821",
    };
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.payment{
  border-bottom: 1px solid #ccc;
  color:#2793d3;
}

.Logo {
  float: left;
  width: 210px;
  height: 210px;
  margin-top: 50px;
  margin-left: 133px;
  
}
.below{
  height: 302px;
  background: #f7f7f7;
  margin: 20px -2px;
  .Question{
      .Problem{
          font-size: 15px;
      }
        .phone{
        font-weight: bold;
        font-size: 16px;
      }
  } 
}
.Success{
  font-size: 35px;
  color:#2793d3;
  padding-top: 50px;
}

.word{
    margin-left: 340px;
}
.sure{
  margin:30px auto 25px;
  padding-bottom: 10px;
  font-size: 20px;
 
}
</style>