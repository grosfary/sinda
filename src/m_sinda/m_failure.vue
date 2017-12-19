<template>
  <div class="failure">
    <div class="headed">
        <p class="pay">支付失败</p> 
    </div>
    <div class="bodyed">
      <div class="logo">
        <img src="../../src/assets/gongyon/failure.jpg" alt="">
      </div>
      <div class="right">
          <p class="alipay">支付失败!</p>
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
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
export default {
  name: "m_failure",
  data() {
    return {
    
    };
  },
  components: { sinda_header, sinda_footer }
};
</script>










<style scoped lang="less">
.failure {
  width: 7.5rem;
  .headed {
    margin: 0.26rem auto 0.09rem;
    width: 7.5rem;
    .pay{
      font-size:0.14rem;
      border-bottom: 1px solid #ccc;
      color: #2793d3;
    }
  }
  .bodyed {
    background: #f7f7f7;
    height: 3.84rem;
     display: flex;
    .logo {
      width: 1.33rem;
      height: 1.35rem;
    }
    .right{
      
      margin: 0.28rem 0 1.35rem 0.75rem;

        .alipay{
          font-size:0.3rem;
          
        }
        .payment{
          display: flex;
           width:500px;
            .no{
                 font-size:0.18rem;
                 line-height: 0.5rem;
            }
            .return{
               border: 1px solid #2793d3;
                border-radius: 0.05rem;
                width: 1rem;
                text-align: center;
                text-decoration: none;
                line-height: 0.38rem;
                color: #2793d3;
                margin: 0.10rem  0.10rem;
                display: inline-block;
                font-size:0.13rem;
            }
        }
       
        .question{
           font-size:0.14rem;
          .phone{
            font-weight: bold;
          }
        }
    }
  }
}




// .bodyed {
//   height: 302px;
//   background: #f7f7f7;
//   margin: 20px -2px;
// }
// .logo {
//   float: left;
//   width: 210px;
//   height: 210px;
//   margin-top: 50px;
//   margin-left: 133px;

// }
// .pay {
//   padding: 10px 0;
//   border-bottom: 1px solid #ccc;
//   color: #2793d3;
// }
// .payment {
//   display: flex;
//   flex-wrap: nowrap;
//   margin-top: 20px;

//   p {
//     color: #333333;
//     font-size: 18px;
//     line-height: 50px;
//   }
//   a {
//    
//   }
// }
// .alipay {
//   font-size: 30px;
//   color: #2793d3;
//   padding-top: 60px;
// }
// .problem {
//   color: #020202;
//   font-size: 14px;
// }
// .phone {
//   color: #000;
//   font-weight: bold;
// }
// .right {
//   margin-left: 400px;
// }

</style>
