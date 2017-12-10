<template>
    <div class="body">
        <!-- 支付头部 -->
        <div class="item-header">
            <a href="#">首页</a>/<p>支付</p>
            <span>订单详情</span>
      </div>
      <!-- 订单详情 -->
      <div class="item-order-number">
          <p class="lage">订单编号:</p><span></span><p>创建时间：</p><p>订单总额：</p>
          <div class="Details"> <span>订单明细</span></div>
         
      </div>
      <!-- 支付方式 -->
        <div class="Payment">
            <span class="fangshi">支付方式</span>
             <p>非网银支付</p><!--网银支付-->
             <div class="Non-bank">
                 <span ><input type="radio" name="pay" class="radioI" onclick= "if(this.c==1){this.c=0;this.checked=0}else{this.c=1}"   c="0"></span>
             </div>
             <p>平台支付</p><!--平台支付-->
              <div class="Platform-to-pay">
                  <!-- 单选框 -->
                 <span ><input type="radio" name="pay" class="radioII" id="wechat" checked="checked"onclick= "if(this.c==1){this.c=0;this.checked=0}else{this.c=1}"   c="0">
                 <input type="radio"  name="pay" class="radioIII" id="alipay" onclick= "if(this.c==1){this.c=0;this.checked=0}else{this.c=1}"   c="0"></span>
             </div>
             <div class="lages"><!--自助转账-->
             <p >自助转账</p><p class="lageI">因限额不能支付时,建议自助转账</p>
             </div>
             <div class="Self-help">
                  <span ><input type="radio" name="pay" class="radioIV" onclick= "if(this.c==1){this.c=0;this.checked=0}else{this.c=1}"   c="0"></span>
                   <p>注：转账时请将订单编号备注在付款信息里：转账完成后,请通知客服。</p>
             </div>
        </div>
        <div class="Settlement">
            <p>金额总计：</p><br>
            <button @click="jiesuan">去结算</button>
        </div>
        <div class="we-pay" id="weipay" style="display:none">
                <div class="pay-header">
                    <p class="lageheader">微信支付</p>
                    <p class="cha" @click='cha'>X</p>
                </div>
                <span class="QRcode"></span>
                <p class="wechatlage">请用微信扫一扫 进行扫码支付</p>
                <!-- <button id="success" @click="success">已完成支付</button><button>支付遇到问题</button> -->
                <div class="payfangshi">
                <a href="#" id="success" @click="success">已完成支付</a><a href="" id="failure" @click="failure">支付遇到问题</a>
                <a class="footerlage" @click='cha'>返回重新选择支付方式
                    <!-- {{message}} -->
                </a>
                </div>
            </div>
    </div>
 
</template>

<script>
import sinda_header from "../components/sinda_global_header";// 公共头部
import sinda_footer from "../components/sinda_global_footer";//公共底部
export default {
  data() {
    return {};
  },
  components: { sinda_header, sinda_footer },//暴露头部底部
  methods:{
      cha:function(){
      var weipay=document.getElementById('weipay');
        weipay.style.display="none";
      },
    success:function(){
        var success=document.getElementById('success');
        console.log(123)
        success.href='#/payment/success';
    },
      failure:function(){
        var success=document.getElementById('failure');
        console.log(123)
        success.href='#/payment/failure';
    },
    jiesuan:function(){
        var jiesuan=document.getElementById('weipay');
        var radioII=document.getElementById('wechat');
        if(wechat.checked==true){
        weipay.style.display="block";
        }
    }
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 整体盒子样式
.body{
    width:70%;
    height: 850px;;
    margin: 0 auto;
      .we-pay{
        width: 220px;
        height: 240px;
        background: #fff;
        border:1px solid #ccc;
        border-left: none;
        border-top: none;
        margin-top: -340px;
        margin-left: 439px;
        font-size: 13px;
        span{
            width: 115px;
            height: 111px;
            display: block;
            background: url("../assets/pc/weixin.jpg") no-repeat 0 0;
            margin: 0 auto;
            margin-top:15px;
        }
        a:hover{
            text-decoration: none;
        }
        .payfangshi{
            margin-top: 10px;
        }
        #success{
            margin-left: 13px;
            margin-top: 20px;
            color:#2693d4;
            border: #2693d4 1px solid;
            background: #fff;
            padding: 5px 4px;
            border-radius: 5px;
        }
        #failure{
            margin-left: 13px;
            margin-top: 20px;
            color:#2693d4;
            border: #2693d4 1px solid;
            background: #fff;
            padding: 5px 4px;
            border-radius: 5px;
        }
        .footerlage{
            font-size: 10px;
            color:#2693d4;
            margin-left:14px;
            display: block;
            margin-top: 20px;
        }
        .wechatlage{
            margin-left: 10px;
        }
        .pay-header{
            height: 22px;
            background: #f7f7f7;
        p{
            display: inline;
            line-height: 22px;
        }
           .cha{
                     margin-left: 140px;
                     font-size: 13px;
            }
            .lageheader{
                font-size: 13px;
                margin-left: 5px;
              
            }
           
        }
    }
}
// 支付头部样式
.item-header{
    // 支付头部标签样式
    a{
        text-decoration: none;//a标签下划线设置为空
        color:#434343;//字体颜色
        font-size: 15px;//字体大小
    }
    // 支付头部字体设置
    p{
        display: inline;//设置行内元素
        color:#ccc;//字体颜色
        font-size: 15px;//字体大小
    }
    span{
        display: block;//设置块级元素 
        font-size:15px;//字体大小
        color:#74b2df;//字体颜色
        margin-top: 15px;//距离顶部高度
        border-bottom: solid 1px #ccc;//下划线
    }
}
// 订单详情样式
.item-order-number{
    height: 60px;//盒子高度
    background: #f7f7f7;//背景颜色
    border:solid 1px #b6b6b6;//边框样式
    margin-top: 30px;//距离顶部高度
    line-height: 60px;//文字垂直居中
    font-size:14px;//文字大小
    // 订单详情字体样式
    p{
        display: inline;//设置行内元素
        margin: 140px;//文字外边距设置
    }
    .lage{
        margin-left: 30px//;订单编号
    }
    // 订单明细
    .Details{
        margin-left:770px;//订单明细盒子距离左边距离
        margin-top:-43px;//距离顶部距离
        span{
        color:red;//字体颜色
        font-size: 10px;//字体大小
        }
    }
}
// 支付样式
.Payment{
    // 自助转账头部字体样式
    .lages{
        margin-top: 15px;//距离顶部距离
        p{
            display: inline; // 设置行内元素
        }
        // 小字体样式
        .lageI{
            color:#ccc;
            font-size: 11px;
            margin-left: 10px;
        }
    }
    // 支付方式头部样式
    .fangshi{
         display: block;//设置块级元素
        font-size:15px;//字体大小
        color:#74b2df;//字体颜色
        margin-top: 30px;//距离顶部位置
        border-bottom: solid 1px #ccc;//下划线
    }
    // 支付字体设置
    p{
        font-size: 14px;//字体大小
        color:#000;//字体颜色
        margin-top:15px;//距离顶部距离
    }
}
// 非网银支付样式
.Non-bank{
    margin-top: 20px;
    // 非网银支付背景图
    span{
        width: 222px;
        height: 62px;//给背景设置宽高
        display: block;//设置为块级元素
        background: url("../assets/pc/yinlian.jpg") no-repeat 0 0;
    }
    .radioI{
        // 单选框设置
        // display: block;
        margin-left: 18px;
        margin-top: 24px;
    }
}
// 平台支付
.Platform-to-pay{
    margin-top: 20px;
    // 平台支付背景图
    span{
        width: 431px;//给背景设置宽高
        height: 63px;
        display: block;//设置为块级元素
        background: url("../assets/pc/weixinzhifu.jpg") no-repeat 0px 0px;
    }
//   单选框样式设置
    .radioII{
        // display: block;
        margin-left: 18px;
        margin-top: 24px;//设置格式样式
    }
    .radioIII{
        margin-left: 200px;
        margin-top: 24px;//设置格式样式
    }
}
.Self-help{
    margin-top: 20px;
    // 自助转账支付背景图
    span{
        width: 531px;
        height: 91px;//给背景设置宽高
        display: block;//设置为块级元素
        background: url("../assets/pc/zhaoshang.jpg") no-repeat 0 0;//背景图
    }
    .radioIV{
        // 单选框设置
        margin-left: 23px;
        margin-top: 42px;
    }
    p{
        font-size: 10px;
        color:red;
    }
}
.Settlement{
    float: right;
    margin-top: 80px;
    font-size: 13px;
    // button按钮样式
    button{
        width: 103px;//宽
        height: 26px;//高
        color: #74b2df;//字体颜色
        background: #ffffff;//背景颜色
        border: #74b2df 1px solid;//边框
        border-radius: 4px;//设置圆角边框
        margin-left: 60px;//位置
    }
  
}
</style>