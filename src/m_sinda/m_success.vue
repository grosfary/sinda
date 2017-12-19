<template>
    <div class="success">
        <div class="top">
            <p class="payment">支付成功</p>
        </div>
        <div class="below">
            <div class="Logo">
               <img src="../../src/assets/gongyon/success.jpg" alt="">
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
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
export default {
  name: "m_success",
  data() {
    return {
      dingdan: "S7163637282821"
    };
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.success {
  width: 7.5rem;
  .top {
    margin: 0.26rem auto 0.09rem;
    width: 7.5rem;
    .payment {
      font-size:0.14rem;
      border-bottom: 1px solid #ccc;
      color: #2793d3;
    }
  }
  .below {
    background: #f7f7f7;
    height: 3.84rem;
     display: flex;
    .Logo {
      width: 1.33rem;
      height: 1.35rem;
    }
    .word{
      
      margin: 0.28rem 0 1.35rem 0.75rem;
        .Success{
          font-size:0.3rem;
          
        }
        .sure{
             font-size:0.18rem;
             line-height: 0.5rem;
        }
        .Question{
           font-size:0.14rem;
          .phone{
            font-weight: bold;
          }
        }
    }
  }
}
</style>