<template>
    <div class="m-body">
        <div class="pay" style="width:100%">
            <p>选择支付方式</p>
            
                <span class="no-bank"><input type="radio" name="pay" id="bank"></span>
                <span class="wechat"><input type="radio" name="pay" id="wechat" checked="checked"></span>
                <span class="alipay"><input type="radio" name="pay" id="alipay"></span>
                <span class="bank"><input type="radio" name="pay"></span>
        
        </div>
        <div class="Clearing">  
            <p>
                金额总计：
            </p>
            <button @click="close">确认支付</button>
        </div>
        <div class="wcpay" v-if="wcpay">
            <p>请使用微信扫一扫支付</p>
            <span></span>
            <div>
            <a href="javascript:void(0)" @click="fork">重新选择支付方式</a>
            </div>
        </div> 
        <div class="feedback" v-if="feedback">
           <p>请您在新打开的页面完成订单付款</p>
           <span>根据您的支付完成情况,完成下步操作</span>
           <a class="wancheng" href="javascript:void(0)" >已完成支付</a><a class="shibai" href="javascript:void(0)" >支付遇到问题</a>
                <div class="bottom">
                    <p  @click="fork">返回重新选择支付方式</p>
                </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            wcpay:false,
            feedback:false,
        };
    },
    methods:{
        fork:function(){
            this.wcpay=false;
            this.feedback=false;
        },
     close: function() {
      // ---------------------------------------------------------
      if (wechat.checked == true) {
        //   微信支付
        this.wcpay=true;
        // ------------------------------------------------------
      } else if (bank.checked == true || alipay.checked==true) {
        //   银联支付
        this.feedback=true
        
        //   -------------------------------------------------
      } 
      //   ---------------------------------------------------------
    },
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.m-body{
    width:7.5rem;
    margin:0 auto;
    position: relative;
    .pay{
        p{text-align: center;
        font-size: 0.5rem;
        color:#2693d4;
        border-bottom: 0.01rem solid #ccc ;
        }
        span{
            position: relative;
        }
        input{
            position: absolute;
            top: 0.5rem;
            left: 0.3rem;
        }
    .no-bank{
        margin-top: 0.4rem;
            width: 100%;
            height: 62px;//给背景设置宽高
            display: block;//设置为块级元素
            background: url("../assets/pc/yinlian.jpg") no-repeat 0 0;
             border-bottom: 0.01rem solid #ccc ;
        
            }
    .wechat{
         margin-top: 0.4rem;
            width: 100%;
            height: 62px;//给背景设置宽高
            display: block;//设置为块级元素
            background: url("../assets/pc/wechat.png") no-repeat;
             border-bottom: 0.01rem solid #ccc ;
        
    }
    .alipay{
         margin-top: 0.4rem;
            width: 100%;
            height: 62px;//给背景设置宽高
            display: block;//设置为块级元素
            background: url("../assets/pc/alipay.png") no-repeat ;
             border-bottom: 0.01rem solid #ccc ;
        
    }
    .bank{
         margin-top: 0.4rem;
            width: 100%;
            height: 62px;//给背景设置宽高
            display: block;//设置为块级元素
            background: url("../assets/pc/zhaoshang.png") no-repeat 50px;
             border-bottom: 0.01rem solid #ccc ;
        
    }
    }
    .Clearing{
         margin-top: 0.5rem;
        text-align: center;
        font-size: 0.5rem;
        button{
            margin-top: 0.3rem;
            font-size: 0.5rem;
            border: 0.01rem solid #fff;
            background: #2693d4;
            padding: 0.1rem;
            border-radius: 5px;
            color:#fff;
        }
    }
    .feedback{
        width:7.5rem;
        height: 100%;
        background: #f1f1f1;
        position: absolute;
        top: 0rem;
        margin: 0 auto;
        p{
             font-size: 0.5rem;
            text-align: center;
            margin-top: 1rem;
        }
        span{
            font-size: 0.4rem;
        
        }
      
        .wancheng{
              margin-left: 0.1rem;
            color:#2693d4;
            border: #2693d4 1px solid;
            background: #fff;
             padding: 0.1rem 0.3rem;
            border-radius:0.05rem;
            font-size: 0.5rem;
             &:hover{
                text-decoration: none;
            }
        }
         .shibai{
             margin-left: 0.5rem;
            color:#2693d4;
            border: #2693d4 1px solid;
            background: #fff;
            padding: 0.1rem 0.3rem;
            border-radius:0.05rem;
            font-size: 0.5rem;
            &:hover{
                text-decoration: none;
            }
        }
        .bottom{
         
            p{
            font-size: 0.5rem;
         }
        }
    }
    .wcpay{
        width:7.5rem;
        height: 100%;
        background: #f1f1f1;
        position: absolute;
        top: 0rem;
        margin: 0 auto;
        p{
            font-size: 0.5rem;
            text-align: center;
            margin-top: 1rem;
            
        }
        div{
          position: absolute;
          top:6rem;
          left: 1.5rem;;
        a{
           
            font-size: 0.5rem;
            margin: 0.1rem;
            text-decoration: none;
            color:#000;
            

        }
        }
        span{
            width: 100%;
            height: 111px;
            display: block;
            background: url("../assets/pc/weixin.jpg") no-repeat 0 0;
            position: absolute;
            top: 2.7rem;
            left: 2.5rem;
        }
        
    }
}
</style>