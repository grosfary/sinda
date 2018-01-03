<template>
    <div class="body" style="width:1200px">
        <!-- 支付头部 -->
        <div class="item-header">
            <a href="http://localhost:8080/#/">首页</a>/
            <p>支付</p>
            <span>订单详情</span>
        </div>
        <!-- 订单详情 -->
        <div class="itemorder">
            <ul>
                <li>订单编号：
                    <span>{{detail.businessNo}}</span>
                </li>
                <li>创建时间：{{detail.createTime}}</li>
                <li>订单总额：
                    <span>￥{{detail.totalPrice}}.00</span>元</li>
            </ul>
            <div class="Details">
                <span @click="sanjiao">订单明细
                    <span :class="{trans0:(show)}"></span>
                </span>
            </div>
        </div>
        <transition-group name="slide-fade">
            <div class="itemorder1" v-for="i in orderList" :key="i.id" v-if="(show)">
                <ul>
                    <li>服务名称：{{i.serviceName}}</li>
                    <li>单价：
                        <span>￥{{i.unitPrice}}.00元</span>
                    </li>
                    <li>数量：
                        <span>{{i.buyNum}}</span>
                    </li>
                    <li>服务总额：
                        <span>￥{{i.totalPrice}}.00元</span>
                    </li>
                </ul>
            </div>
        </transition-group>
        <!-- 支付方式 -->
        <div class="Payment">
            <span class="fangshi">支付方式</span>
            <p>非网银支付</p>
            <!--网银支付-->
            <div class="Non-bank">
                <span><input type="radio" name="pay" class="radioI" id="bank"></span>
            </div>
            <p>平台支付</p>
            <!--平台支付-->
            <div class="Platform-to-pay">
                <!-- 单选框 -->
                <span><input type="radio" name="pay" class="radioII" id="wechat" checked="checked">
                    <input type="radio" name="pay" class="radioIII" id="alipay"></span>
            </div>
            <div class="lages">
                <!--自助转账-->
                <p>自助转账</p>
                <p class="lageI">因限额不能支付时,建议自助转账</p>
            </div>
            <div class="Self-help">
                <span><input type="radio" name="pay" class="radioIV"></span>
                <p>注：转账时请将订单编号备注在付款信息里：转账完成后,请通知客服。</p>
            </div>
        </div>
        <div class="Settlement">
            <p>金额总计：
                <span>￥{{detail.totalPrice}}.00</span>
            </p><br>
            <button @click="jiesuan">去结算</button>
        </div>
        <div class="bigbox" v-if="bigbox">
            <div class="we-pay" id="weipay" v-if="weback">
                <div class="pay-header">
                    <p class="lageheader">微信支付</p>
                    <p class="cha" @click='cha'>&#10005</p>
                </div>
                <span class="QRcode"></span>
                <p class="wechatlage">请用微信扫一扫 进行扫码支付</p>
                <!-- <button id="success" @click="success">已完成支付</button><button>支付遇到问题</button> -->
                <div class="payfangshi">
                    <a href="javascript:void(0)" id="success" @click="success">已完成支付</a>
                    <a href="javascript:void(0)" id="failure" @click="failure">支付遇到问题</a>
                    <a class="footerlage" @click='cha'>返回重新选择支付方式</a>
                </div>
            </div>
        </div>
        <div class="feedback" v-if="feedback">
            <div class="feedheader">
                <p style="display:inline" class="feedlage">支付反馈</p>
                <a href="javascript:void(0)" class="clean" @click="clean">&#10005</a>
            </div>
            <p class="lagefeed">请您在新打开的页面完成订单付款</p>
            <p class="lagefeedI">根据您的支付完成情况,完成下步操作</p>
            <div class="feedbody">
                <a class="wancheng" href="javascript:void(0)" @click="success">已完成支付</a>
                <a class="shibai" href="javascript:void(0)" @click="failure">支付遇到问题</a>
            </div>
            <p class="lagefeedII" @click="clean">返回重新选择支付方式</p>
        </div>
    </div>

</template>

<script>
import sinda_header from "../components/sinda_global_header"; // 公共头部
import sinda_footer from "../components/sinda_global_footer"; //公共底部
export default {
  created() {
    var that = this;
    this.ajax
      .post(
        "http://123.58.241.146:8088/xinda/xinda-api/business-order/detail",
        this.qs.stringify({
          businessNo: "S1704040001075133085" //订单明细
        })
      )
      .then(function(data) {
        var item = data.data;
        console.log(item);
      });
    this.ajax
      .post(
        "http://123.58.241.146:8088/xinda/xinda-api/pay/detail",
        this.qs.stringify({
          businessNo: "S1704040001075133085" //订单详情
        })
      )
      .then(function(data) {});
    this.ajax
      .post(
        "http://123.58.241.146:8088/xinda/xinda-api/pay/china-pay",
        this.qs.stringify({
          businessNo: "S1704040001075133085" //银联支付
        })
      )
      .then(function(data) {});
    this.ajax
      .post(
        "http://123.58.241.146:8088/xinda/xinda-api/pay/ali-pay",
        this.qs.stringify({
          businessNo: "S1704040001075133085" //支付宝支付
        })
      )
      .then(function(data) {});
    this.ajax
      .post(
        "http://123.58.241.146:8088/xinda/xinda-api/pay/ weixin-pay",
        this.qs.stringify({
          businessNo: "S1704040001075133085" //微信支付
        })
      )
      .then(function(data) {});
  },

  data() {
    return {
      weback: false,
      feedback: false,
      bigbox: false,
      detail: {},
      orderList: {},
      show: false
    };
  },
  components: { sinda_header, sinda_footer }, //暴露头部底部
  methods: {
    sanjiao: function() {
      this.show ? (this.show = false) : (this.show = true);
    },
    cha: function() {
      this.weback = false;
      this.bigbox = false;
    },
    success: function() {
      location.href = "#/payment/success";
    },
    failure: function() {
      location.href = "#/payment/failure";
    },
    jiesuan: function() {
      // ---------------------------------------------------------
      if (wechat.checked == true) {
        //   微信支付
        this.weback = true;
        this.bigbox = true;
        // ------------------------------------------------------
      } else if (bank.checked == true) {
        //   银联支付
        this.feedback = true;
        this.bigbox = true;
        this.ajax
          .post(
            "/xinda-api/pay/china-pay",
            this.qs.stringify({
              businessNo: this.$route.query.id
            })
          )
          .then(data => {
            if (data.status === 200) {
              sessionStorage.setItem(
                "pay",
                data.data.substring(
                  data.data.indexOf("<form"),
                  data.data.indexOf("</form>") + 7
                )
              );
              window.open("#/pay");
            } else {
            }
          });
        //   -------------------------------------------------
      } else if (alipay.checked == true) {
        //   支付宝支付
        this.ajax
          .post(
            "/xinda-api/pay/ali-pay",
            this.qs.stringify({
              businessNo: this.$route.query.id
            })
          )
          .then(data => {
            if (data.status === 200) {
              sessionStorage.setItem(
                "pay",
                data.data.substring(
                  data.data.indexOf("<form"),
                  data.data.indexOf("</form>") + 7
                )
              );
              console.log();
              console.log();
              window.open("#/pay");
            } else {
            }
          });
        this.feedback = true;
        this.bigbox = true;
      }
      //   ---------------------------------------------------------
    },
    clean: function() {
      this.feedback = false;
      this.bigbox = false;
    }
  },
  created() {
    this.ajax // 判断当前用户是否登录ajax请求
      .post("/xinda-api/sso/login-info", this.qs.stringify({}))
      .then(data => {
        if (data.data.status === 0) {
          //   MessageBox.confirm("请您登陆后再继续操作").then(action => {
          this.$router.push({ path: "/LoginRegister/login" });
          //   });
        } else {
          this.ajax
            .post(
              "/xinda-api/business-order/detail",
              this.qs.stringify({
                businessNo: this.$route.query.id
              })
            )
            .then(data => {
              //获取列表信息
              if (data.data.status === 1) {
                //   console.log(data.data.data);
                this.detail = data.data.data.businessOrder;
                //   console.log(this.detail.createTime)
                var date = new Date(this.detail.createTime);
                this.detail.createTime =
                  date.toLocaleDateString().replace(/\//g, "-") +
                  " " +
                  date.toTimeString().substr(0, 8);

                this.orderList = data.data.data.serviceOrderList;
                console.log(this.orderList);
              } else {
                console.log("非常抱歉，系统正在开小差中，请稍后。");
              }
            });
        }
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 整体盒子样式
.body{
    // width:70%;
    height: 850px;;
    margin: 0 auto;
    .feedback{
        width: 453px;
        height: 279px;
        background: #fff;
        border:1px solid #ccc;
        border-left: none;
        border-top: none;
        margin-top: -300px;
        margin-left: 309px;
        font-size: 13px;
        position:relative;
        .feedbody{
            margin-top: 20px;
            text-align: center;
             .wancheng{
            margin-left: 13px;
            margin-top: 20px;
            color:#2693d4;
            border: #2693d4 1px solid;
            background: #fff;
            padding: 10px 40px;
            border-radius: 5px;
            font-size: 20px;
             &:hover{
                text-decoration: none;
            }
        }
        .shibai{
            margin-left: 13px;
            margin-top: 20px;
            color:#2693d4;
            border: #2693d4 1px solid;
            background: #fff;
            padding: 10px 40px;
            border-radius: 5px;
            font-size: 20px;
            &:hover{
                text-decoration: none;
            }
        }
        }
        .feedheader{
            width: 453px;
            height: 55px;
            background: #f8f8f8;
        }
        p{
            margin-left: 30px;
            line-height: 55px;
        }
        .clean{
            margin-left: 323px;
            line-height: 55px;
             &:hover{
                text-decoration: none;
            }
        }
        .lagefeed{
            font-size:20px;
             margin-left: 35px;
        }
        .lagefeedI{
            font-size: 15px;
              margin-left: 35px;
            color:#666666;
        }
        .lagefeedII{
        margin-left: 35px;
            font-size: 15px;
            color:#2693d4;
            margin-top: 20px;
             cursor: pointer;
        }
    }
    .bigbox{
        width:1000px;
        height:305px;
        // background:#000;
        margin-top: -340px;
        margin-left: 0px;
        position:absolute
        
    }
      .we-pay{
        width: 220px;
        height: 240px;
        background: #fff;
        border:1px solid #ccc;
        border-left: none;
        border-top: none;
        margin-left: 439px;
        font-size: 15px;
         position:relative;
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
                     cursor: pointer;
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
    margin-bottom: 30px;
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
.itemorder{
    position: relative;
    height: 60px;//盒子高度
    background: #f7f7f7;//背景颜色
    border:solid 1px #b6b6b6;//边框样式
    // margin-top: 30px;//距离顶部高度
    line-height: 60px;//文字垂直居中
    font-size:14px;//文字大小
    // 订单详情字体样式
    ul{
        display: flex;
        width: 1086px;
        margin: 0 auto;
        justify-content:space-between;
        span{
            color: #50a1d9;
        }
    }
    .lage{
        margin-left: 30px//;订单编号
    }
    // 订单明细
    .Details{
        position: absolute;
        top: 17px;
        right:88px;
        // margin-left:770px;//订单明细盒子距离左边距离
        // margin-top:-43px;//距离顶部距离
        >span{
            cursor: pointer;
            position: relative;
            color:red;//字体颜色
            font-size: 10px;//字体大小
        span{
            display: block;
            border: 5px solid red;
            border-left:rgba(0,0,0,0) 5px solid;
            border-top:rgba(0,0,0,0) 0px solid;
            border-right:rgba(0,0,0,0) 5px solid;
            position: absolute;
            top:6px;
            right:-14px;
            transform: rotate(180deg);
            &.trans0{transform: rotate(0deg);}
            transition: all 0.5s;
        }
        }
    }
}
.itemorder1{
    // transition: height 0.5s;
    // // display: block;
    // &.height0{
    //     // display: none;
    //     height: 0;
    //     font-size: 0;
    //     border: none;
    // }
    position: relative;
    height: 60px;//盒子高度
    background: #f7f7f7;//背景颜色
    border:solid 1px #b6b6b6;//边框样式
    border-top: none;
    line-height: 60px;//文字垂直居中
    font-size:14px;//文字大小
    // 订单详情字体样式
    ul{
        display: flex;
        width: 1086px;
        margin: 0 auto;
        justify-content:space-between;
        li{
            width: 25%;
            text-align: center;
            &:first-child{
                text-align: left;
            }
            &:last-child{
                text-align: right;
            }
            span{
                color: #50a1d9;
            }
        }
        
    }
    .lage{
        margin-left: 30px//;订单编号
    }
}

// 动画效果
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
//   transform: translateX(10px);
  opacity: 0;
  height: 0;
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
    p{
        text-align: right;
        span{
            color:#74b2df;//字体颜色
            font-size: 18px;
            }
    }
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