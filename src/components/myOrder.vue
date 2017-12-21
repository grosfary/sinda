<template>
  <div class="hello">
      <div class='top'>我的订单</div>
      <div class='information clear'>
        <div class='number'>订单号：</div>
        <div class='pay'>等待买家付款</div>
      </div>
      <div class='content'>
          <div class='img'>
            <div class='imgs'>

            </div>
            <div class='deta'>
                <span>新公司注册</span><br>
                <span>下单时间：</span><br>
                <span class='doller'>￥</span><span class='doller'>元</span>
            </div>
          </div>
      </div>
      <div class='balance'>
        <div class='num'>合计：</div>
        <div class='account'>
          <input type="submit" value='删除订单' class='delete'>
          <input type="submit" value='付款'>
        </div>
      </div>
  </div>
</template>

<script>


</script>

<style scoped lang="less">
      .clear:after{               /*清除浮动*/
          content: '';
          display: block;
          clear: both;
      }
      .hello{
        width:100%;
        font-size:0.22rem;
      }
      .top{
        width:100%;
        height:0.77rem;
        background:#e5e5e5;
        text-align:center;
        line-height:0.77rem;
      }
      .information{
        width:90%;
        margin:0 auto;
        height:0.74rem;
        line-height:0.74rem;
      }
      .number{
        float:left;
      }
      .pay{
        float:right;
      }
      .content{
        width:100%;
        height:2.65rem;
        background:#f8f8f8;
        position: relative;
      }
      .img{
        position: absolute;
        margin:auto;
        display: flex;        
        top:0;
        bottom:0;
        left: 0;
        right:0;
        width:100%;
        height:1.7rem;
        background:#fff;
      }
      .imgs{
        width:1.7rem;
        height:1.7rem;
        margin-left:0.17rem;
      }
      .deta{
        width:3.4rem;
        height:1.7rem;
        span{
          line-height: 2;
        }
        .doller{
          line-height: 5;
        }
      }
      .balance{
        height: 0.73rem;
        width:90%;
        margin:0 auto;
        .num{
          float:left;
          line-height:0.73rem;
        }
        .account{
          float:right;
          line-height:0.73rem;
          input{
            margin-right:0.2rem;
            width:0.8rem;
            height:0.47rem;
            font-size:0.19rem;
            border:0;
            background:#2693d4;
            color:#fff;
          }
          .delete{
            background:#fff;
            color:red;
          }
        }
      }
</style>
