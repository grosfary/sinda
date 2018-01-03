<template>
  <div class="hello" v-if="mark">
    <div class="empoty" v-if="!allProObj.length">
      <img src="../assets/kehu/gouwu.png" alt="">
      <div>
        <p>购物车空空如也，去首页逛逛吧！</p>
      </div>
      <a href="/#/m.sinda">
        <button>去首页</button>
      </a>
    </div>
    <div v-if="allProObj.length">
      <div class='top'>购物车内共有{{allProObj.length}}件商品</div>

      <div class='back'>
        <div class='content' v-for="(i,index) in allProObj" :key="i.id">
          <p class=" title" style="height:0.69rem;line-height:0.69rem;font-size:0.3rem">{{i.providerName}}</p>
          <div class='img'>
            <div class='imgs'>
              <img :src="'http://115.182.107.203:8088/xinda/pic'+i.providerImg" alt="" style="width:100%;height:100%">
            </div>
            <div class='deta'>
              <span style="font-size:0.3rem;line-height:0.35rem;display:block">{{i.serviceName}}</span>
              <div style="font-size:0.14rem;">
                <span style="font-size:0.24rem;color:red;">￥{{i.totalPrice}} </span>元
              </div>
              <span class='doller' style="font-size:0rem;">
                <span style="font-size:0.14rem;">购买数量：</span>
                <button style="font-size:0.24rem;width:0.33rem;height:0.31rem;background:#ededed;color:#585453;border:1px solid #c7c7c7;vertical-align:top;" @click="nAdd(i.serviceId,-1,i.buyNum,index)">-</button>
                <span style="font-size:0.12rem;width:0.33rem;height:0.29rem;background:#fff;color:#585453;border:1px solid #c7c7c7;display:inline-block;text-align:center;vertical-align:top;border-left:none;border-right:none;line-height:0.29rem;">{{i.buyNum}}</span>
                <button style="font-size:0.24rem;width:0.33rem;height:0.31rem;background:#ededed;color:#585453;border:1px solid #c7c7c7;vertical-align:top;" @click="nAdd(i.serviceId,1,i.buyNum,index)">+</button>
              </span><br>
              <span class='doller'>地区：{{diqu}}</span>
            </div>

          </div>
          <span class="delOrder" @click="delOrder(i.serviceId,index)">删除订单</span>
        </div>
      </div>
      <div class="footer">
        <div class="totalPrice">合计：
          <span>￥{{totalPrice}}.00</span>
        </div>
        <div class="settle">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  methods: {
    alert: function(code) {
      this.show = true;
      this.code = code;
    },
    submit: function(index) {
      this.index = index;
    },
    hidedate: function(code) {
      this.show = false;
      var that = this;
      this.ajax
        .post(
          "/xinda-api/ business-order/del",
          this.qs.stringify({
            id: this.code
          })
        )
        .then(function(data) {
          that.$router.go(0);
        });
    },
    hide: function() {
      this.show = false;
    },
    cartList() {
      this.ajax
        .post("/xinda-api/cart/list", this.qs.stringify({}))
        .then(data => {
          this.allProObj = data.data.data; // 定义一个变量接受返回的数据
          var totalPrice = 0; // 初始一个总价
          for (var i in this.allProObj) {
            totalPrice += this.allProObj[i].totalPrice;
          }
          this.diqu = "北京-北京市-朝阳区";
          this.totalPrice = totalPrice;
        });
    },
    nAdd(id, num, count, index) {
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({
            id: id,
            num: num
          })
        )
        .then(data => {
          if (data.data.status == 1) {
            this.allProObj[index].buyNum += num;
            var unit = this.allProObj[index].unitPrice;
            var total = this.allProObj[index].totalPrice;
            num === 1 ? (total += unit) : (total -= unit);
            this.allProObj[index].totalPrice = total;
            num === 1 ? (this.totalPrice += unit) : (this.totalPrice -= unit);
          }
        });
    },
    delOrder(id, index) {
      MessageBox.confirm("不再考虑考虑了？", "确定删除?").then(action => {
        this.ajax
          .post(
            "/xinda-api/cart/del",
            this.qs.stringify({
              id: id
            })
          )
          .then(data => {
            if (data.data.status === 1) {
              // 如果成功删除订单 刷新当前页面
              this.$router.go(0);
            } else {
              console.log("系统正在开小差中，请稍后重试");
            }
          });
      });
    }
  },
  data() {
    return {
      show: true,
      index: "",
      inde: "",
      products: [],
      totalPrice: 0,
      allProObj: {},
      diqu: {},
      mark:false,
    };
  },
  created() {
    this.ajax // 判断当前用户是否登录ajax请求
      .post("/xinda-api/sso/login-info", this.qs.stringify({}))
      .then(data => {
        if (data.data.status === 0) {
          // MessageBox.confirm("请您登陆后再继续操作").then(action => {
            this.$router.push({ path: "/loginP" });
          // });
        } else {
          this.cartList();
          this.mark=true;
        }
      });
  }
};
</script>

<style scoped lang="less">
.clear:after {
  /*清除浮动*/
  content: "";
  display: block;
  clear: both;
}
.back {
  margin-top: 0.77rem;
  margin-bottom: 2.06rem;
}
.hello {
  width: 7.5rem;
  font-size: 0.22rem;
  margin: 0 auto;
}
.top {
  width: 7.5rem;
  margin: 0 auto;
  position: fixed;
  top: 0;
  z-index: 100;
  height: 0.77rem;
  background: #e5e5e5;

  text-indent: 0.5rem;
  line-height: 0.77rem;
}
.content {
  width: 90%;
  position: relative;
  margin: 0 auto;
  border-bottom: 1px solid #cfcfcf;
  .delOrder {
    position: absolute;
    right: 0;
    top: 0.55rem;
    color: red;
  }
}
.img {
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin-bottom: 0.21rem;
}
.imgs {
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 0.17rem;
  margin-right: 0.18rem;
  border: 1px solid #e3e3e3;
}
.deta {
  width: 3.4rem;
  span {
    line-height: 2;
  }
}
.informations {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  filter: alpha(opacity=0);
}
.hint {
  width: 306px;
  height: 176px;
  float: left;
  background: #fff;
  border: 1px solid #000;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
}
.infor {
  height: 32px;
  background: #e8e8e8;
}
.for {
  float: left;
  width: 40px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  font-weight: 700;
  text-indent: 10px;
}
.err {
  float: right;
  width: 24px;
  height: 32px;
  line-height: 32px;
}
.information {
  height: 92px;
  line-height: 105px;
  text-align: center;
}
.ok {
  margin-left: 24px;
  input {
    background: #fff;
    border: 1px solid #e7e7e7;
    width: 115px;
    height: 30px;
    margin-left: 10px;
  }
  .color {
    background: #2693d4;
    color: #fff;
  }
}
//----------------------------------------------------------------------------------------
// 去结算&&总价
.footer {
  position: fixed;
  bottom: 0.96rem;
  display: flex;
  .totalPrice {
    background: #e5e5e5;
    padding-left: 0.3rem;
    width: 4.91rem;
    height: 1.1rem;
    font-size: 0.3rem;
    line-height: 1.1rem;
    color: #4d4d4d;
    span {
      color: red;
    }
  }
  .settle {
    width: 2.59rem;
    background: red;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1.1rem;
  }
}

//-------------------------------------------------------------------------------------------------------------
// 空购物车
.empoty {
  width: 7.5rem;
  margin: 0 auto;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  p {
    font-size: 0.5rem;
    color: #2693d4;
  }
  button {
    width: 2.6rem;
    height: 0.9rem;
    font-size: 0.4rem;
    background: #2693d4;
    border: 1px solid #2693d4;
    border-radius: 3px;
    color: #fff;
    text-align: center;
  }
}
</style>
