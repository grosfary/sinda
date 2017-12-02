<template>
    <div class="body">
        <div class="item-header">
            <a href="#">首页</a>/<p>支付</p>
            <span>订单详情</span>
      </div>
      <div class="item-order-number">
          <p class="lage">订单编号:</p><span></span><p>创建时间：</p><p>订单总额：</p>
          <div class="Details"> <span>订单明细</span></div>
         
      </div>
        <div class="Payment">
            <span>支付方式</span>
             <p>非网银支付</p>

        </div>
    </div>
 
</template>

<script>
import sinda_header from "../components/sinda_global_header";
import sinda_footer from "../components/sinda_global_footer";
export default {
  data() {
    return {};
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// @color: red;
// div {
//   color: @color;
// }
.body{
    width:70%;
    margin: 0 auto;
}
.item-header{
    a{
        text-decoration: none;
        color:#434343;
        font-size: 15px;
    }
    p{
        display: inline;
        color:#ccc;
        font-size: 15px;
    }
    span{
        display: block;
        font-size:15px;
        color:#74b2df;
        margin-top: 15px;
        border-bottom: solid 1px #ccc;
    }
}
.item-order-number{
    height: 60px;
    background: #f7f7f7;
    border:solid 1px #b6b6b6;
    margin-top: 30px;
    line-height: 60px;
    font-size:14px;
    p{
        display: inline;
        margin: 140px;
    }
    .lage{
        margin-left: 30px;
    }
    .Details{
        margin-left:770px;
        margin-top:-43px;
        span{
        color:red;
        font-size: 10px;
        }
    }
}
.Payment{
    span{
         display: block;
        font-size:15px;
        color:#74b2df;
        margin-top: 30px;
        border-bottom: solid 1px #ccc;
    }
    p{
        font-size: 14px;
        color:#000;
        margin-top:15px;
    }
}
</style> 