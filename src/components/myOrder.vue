<template>
  <div class="hello">
      <div class='top'>我的订单</div>
    <div >
      <div class='numberpay clear'>
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
          <input type="submit" value='删除订单' class='delete' @click="alert">
          <input type="submit" value='付款'>
        </div>
      </div>
      <div class='line'></div>
    </div>
    <div class='informations' v-show='show'>
      <div class='hint'>
        <div class='infor'>
            <div class='for'>信息</div>
            <div class='err' @click='hide'>x</div>
        </div>
        <div class='information'>确认删除订单吗</div>
        <div class='ok'>
          <input type="submit" value='确定' class='color' @mouseenter='submit(1)' @click='hidedate'>
          <input type="submit" value='取消'  @mouseenter='submit(2)' @click='hide'>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      show: false,
      index: "",
      inde: "",
      products: []
    };
  },
  created() {
    var that = this;
    this.ajax
      .post("/xinda-api/service-order/grid", {
        //数据整合
      })
      .then(function(data) {
        data = data.data.data;
        console.log(tempData);
        var tempData = {};
        for (var key in data) {
          var businessNo = data[key].businessNo;
          if (!tempData[businessNo]) {
            tempData[businessNo] = data[key];
            tempData[businessNo].subItem = [];
          }
          tempData[businessNo].subItem.push(data[key]);
          that.products = tempData;
        }
        // that.ajax.post(
        //       '/xinda-api/business-order/grid',{//业务订单与服务订单联系
        //       }).then(
        //         function(data){
        //           var data = data.data.data;
        //           for (var key in data) {
        //             if(tempData[data[key].businessNo]){
        //                tempData[data[key].businessNo].id = data[key].id;
        //             }
        //           }
        //         }
        //       )
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
.line {
  width: 100%;
  height: 0.2rem;
  background: #e5e5e5;
}
.hello {
  width: 100%;
  font-size: 0.22rem;
}
.top {
  width: 100%;
  height: 0.77rem;
  background: #e5e5e5;
  text-align: center;
  line-height: 0.77rem;
}
.numberpay {
  width: 90%;
  height: 0.74rem;
  text-align: center;
  line-height: 0.74rem;
}
.number {
  float: left;
}
.pay {
  float: right;
}
.content {
  width: 100%;
  height: 2.1rem;
  background: #f8f8f8;
  position: relative;
}
.img {
  position: absolute;
  margin: auto;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1.7rem;
  background: #fff;
}
.imgs {
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 0.17rem;
}
.deta {
  width: 3.4rem;
  height: 1.7rem;
  span {
    line-height: 2;
  }
  .doller {
    line-height: 5;
  }
}
.balance {
  height: 0.73rem;
  width: 90%;
  margin: 0 auto;
  .num {
    float: left;
    line-height: 0.73rem;
  }
  .account {
    float: right;
    line-height: 0.73rem;
    input {
      margin-right: 0.2rem;
      width: 0.8rem;
      height: 0.47rem;
      font-size: 0.19rem;
      border: 0;
      background: #2693d4;
      color: #fff;
    }
    .delete {
      background: #fff;
      color: red;
    }
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
</style>
