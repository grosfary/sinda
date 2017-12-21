<template>
  <div class="failure">
    <div class="headed">
      <p class="pay">支付失败</p>
    </div>
    <div class="bodyed">
      <div class="logo">
        <img src="../../src/assets/gongyon/failure.jpg" alt="">
        <p class="alipay">支付失败!</p>

      </div>
      <div class="right">
        <div class="payment">
          <p class="no">支付未成功 ：让我们再试一次吧 ! </p>
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
export default {
  name: "m_failure",
  data() {
    return {};
  },
};
</script> 
<style scoped lang="less">
.failure {
  width: 7.5rem;
  padding-bottom: 0.5rem;
  .headed {
    margin: 0.26rem 0.09rem;
    .pay {
      font-size: 0.14rem;
      border-bottom: 1px solid #ccc;
      color: #2793d3;
    }
  }
  .bodyed {
    background: #f7f7f7;
    padding-bottom: 0.2rem;
    height: 3.84rem;
    .logo {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        display: inline;
        font-size: 0.5rem;
      }
      img {
        width: 1.83rem;
        height: 1.95rem;
      }
    }
    .right {
      padding: 0.5rem;
      .alipay {
        font-size: 0.3rem;
      }
      .payment {
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;
        .no {
          font-size: 0.18rem;
        }
        .return {
          border: 1px solid #2793d3;
          border-radius: 0.05rem;
          text-align: center;
          text-decoration: none;
          line-height: 0.38rem;
          color: #2793d3;
          display: inline-block;
          font-size: 0.13rem;
          margin: 0 0.1rem;
          padding:0.05rem 0.1rem;
        }
      }

      .question {
        font-size: 0.18rem;
        margin-bottom: 0.5rem;
        text-align: center;
        .phone {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
