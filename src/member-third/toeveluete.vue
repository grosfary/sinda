<template>
    <div class="hello">
      <div class="top clear">
        <div class='assess'>
          <div>我的订单</div>
        </div>
        <div class='order'>
          <div class='ordero'>
            <div class='ordert'>订单号：</div>
            <div class='ordert'>创建时间：</div>
          </div>
          <div class='inputf'>
            <div>
              <input type="text" class='input' placeholder="请输入订单号查询" v-model="number">
              <input type="submit" class='submit' @click='num'>
              </div>
            <div class='date'>
              <input type="date"  v-model='changes'>
              <input type="date" class='data' v-model='onchanges'>
              <p class='box' v-show="box">时间格式不正确</p>
            </div>
          </div>
          <div class='details'>
            <div class='name'><div>商品名称</div></div>
            <div class='unit'><div>单价</div></div>
            <div class='num'><div>数量</div></div>
            <div class='sum'><div>总金额</div></div>
            <div class='state'><div>订单状态</div></div>
            <div class='operation'><div>订单操作</div></div>
          </div>
        <div v-for='product in products' :key='product.rData'>
          <div class='wares'>
              <input type='checkbox' class='checkbox'>
              <span>订单号：{{product.businessNo}}</span>
            <div>
              <span class='floot'>下单时间：{{product.createTime | formatDate}}</span>
            </div>
          </div>
          <div v-for="prod in product.subItem" :key="prod.id">
            <div class='deta'>
              <div class='name'>
                <div>{{prod.serviceName}}</div>
                <div class='img'>
                  <!-- <img src="../assets/pc/1212.gif" alt=""> -->
                </div>
              </div>
              <div class='unit'><div>{{prod.status}}</div></div>
              <div class='num'><div>{{prod.buyNum}}</div></div>
              <div class='sum'><div >{{prod.totalPrice}}</div></div>
              <div class='state'><div>{{prod.unit}}</div></div>
              <div class='operation'>
                <div>
                  <a href="#/line_item"><input type="submit" class='pay' value="付款"></a>
                  <input type="submit" class = 'delet' value="删除订单" @click="alert(product.id)">
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class='inputcopy' v-show='ned'>
            <input type="submit" class='previous' value='上一页' @click='previous'>
            <div :class='col==bum?"page":"pages"' v-for='(button,bum) in buttons' :key='button' @click='skip(bum)'>{{button}}</div>           
            <input type="submit" class='next' value='下一页' @click='next'>
          </div>
        </div>
      </div>
     <div class='informations' v-show='show'>
      <div class='hint'>
        <div class='infor'>
            <div class='for'>信息</div>
            <div class='err' @click='hide'>x</div>
        </div>
        <div class='information'>确认删除订单吗</div>
        <div class='ok'>
          <input type="submit" value='确定' :class='index==1?"color":""' @mouseenter='submit(1)' @click='hidedate'>
          <input type="submit" value='取消' :class='index==2?"color":""' @mouseenter='submit(2)' @click='hide'>
        </div>
      </div>
     </div>
    </div>
</template>
<script>
import member from "../views/sinda_member";
import { mapGetters } from "vuex";
import { formatDate } from "../../config/date";
export default {
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  methods: {
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
    alert: function(code) {
      this.show = true;
      this.code = code;
    },
    submit: function(index) {
      this.index = index;
    },
    previous: function() {
      if (this.col == 0) {
        this.col = 0;
      } else {
        this.col = this.col - 1;
        var array = [];
        this.product = []; //清除数据
        array.push(this.rData[(this.col + 1) * 2 - 2]);
        array.push(this.rData[(this.col + 1) * 2 - 1]); //添加数据
        this.products = array; //将所有数据添加
      }
    },
    next: function() {
      if (this.col == this.abb - 1) {
        this.col = this.col;
      } else {
        this.col = this.col + 1;
        var array = [];
        this.product = []; //清除数据
        if ((this.col + 1) * 2 - 1 == this.rData.length) {
          //判断products里元素是否跟要加入数组的最后一个元素相同
          array.push(this.rData[(this.col + 1) * 2 - 2]); //添加数据
        } else {
          array.push(this.rData[(this.col + 1) * 2 - 2]);
          array.push(this.rData[(this.col + 1) * 2 - 1]); //添加数据
        }
        this.products = array; //将所有数据添加
      }
    },
    num: function() {
      var that = this;
      this.ajax
        .post(
          "/xinda-api/service-order/grid",
          this.qs.stringify({
            businessNo: that.number,
            startTime: that.changes,
            endTime: that.onchanges
          })
        )
        .then(function(data) {
          var data = data.data.data;
          console.log(data);
          var tempData = {};
          that.products = [];
          for (var key in data) {
            var businessNo = data[key].businessNo;
            if (!tempData[businessNo]) {
              tempData[businessNo] = data[key];
              tempData[businessNo].subItem = [];
            }
            tempData[businessNo].subItem.push(data[key]);
            that.products = tempData;
          }
        });
    },
    skip: function(bum) {
      this.product = []; //清除数据
      var array = [];
      console.log(this);
      if ((bum + 1) * 2 - 1 == this.rData.length) {
        //判断products里元素是否跟要加入数组的最后一个元素相同

        array.push(this.rData[(bum + 1) * 2 - 2]); //添加数据
      } else {
        console.log(this.rData[(bum + 1) * 2 - 2]);
        array.push(this.rData[(bum + 1) * 2 - 2]);
        array.push(this.rData[(bum + 1) * 2 - 1]);
        // array.push(this.rData[(bum+1)*2-1]);//添加数据
      }
      this.products = array; //将所有数据添加
      this.col = bum;
    }
  },
  created() {
    var that = this;
    this.ajax.post("/xinda-api/service-order/grid", {}).then(function(data) {
      data = data.data.data;
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
      that.ajax.post("/xinda-api/business-order/grid", {}).then(function(data) {
        var data = data.data.data;
        for (var key in data) {
          if (tempData[data[key].businessNo]) {
            tempData[data[key].businessNo].id = data[key].id;
          }
        }
      });

      var aaa = [];
      for (key in tempData) {
        aaa.push(tempData[key]);
      }
      that.rData = aaa; //所需的数据
      if (aaa.length > 2) {
        //判断数据长度是否大于2
        that.array.push(that.rData[0]);
        that.ned = true;
        var arr = [];
        arr.push(that.rData[0]); //一二条数据相加
        arr.push(that.rData[1]);
        that.products = arr;
        var numeral = Math.ceil(aaa.length / 2); //判断应该产生多少按钮
        for (let i = 1; i <= numeral; i++) {
          //循环button按钮
          (function(j) {
            that.buttons.push(i); //每个按钮编号
            that.abb = numeral; //按钮号
          })(i);
        }
      } else {
        that.products = that.rData; //小于二时，将所有数据添加
        that.ned = false;
      }
    });
  },
  data() {
    return {
      products: [],
      pay: false,
      index: "",
      show: false,
      number: "",
      numeral: "",
      buttons: [],
      bum: "",
      abb: "",
      col: 0,
      rData: [],
      changes: "",
      onchanges: "",
      ned: true,
      date: "",
      array: [],
      arr: [],
      data: [],
      code: [],
      box: false
    };
  },
  computed: {
    ...mapGetters(["getNum"])
  },
  components: { member }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.clear:after {
  /*清除浮动*/
  content: "";
  display: block;
  clear: both;
}
.img {
  height: 100%;
  width: 78px;
  img {
    width: 100%;
    height: 100%;
  }
}
.inputcopy {
  display: flex;
  margin-top: 36px;
  justify-content: center;
  input {
    background: #fff;
    border: 1px solid #ccc;
  }
  .page {
    width: 39px;
    height: 34px;
    color: #2592d3;
    background: #2592d3;
    line-height: 34px;
    margin-left: 10px;
    text-indent: 11px;
    border: 1px solid #2592d3;
  }
  .pages {
    width: 39px;
    height: 34px;
    color: #ccc;
    line-height: 34px;
    margin-left: 10px;
    text-indent: 11px;
    border: 1px solid #ccc;
  }
}
.previous {
  width: 68px;
  height: 36px;
}
.next {
  .previous;
  margin-left: 10px;
}
.informations {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  filter: alpha(opacity=0);
}
.information {
  height: 92px;
  line-height: 105px;
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
.infor {
  height: 32px;
  background: #e8e8e8;
}
.hint {
  width: 306px;
  height: 176px;
  float: left;
  margin-top: 128px;
  margin-left: 589px;
  background: #fff;
  border: 1px solid #000;
}
.pay {
  margin-top: 0px;
  margin-left: 92px;
  background: #2693d4;
  color: #fff;
  width: 56px;
  height: 24px;
  border: 2px solid #2693d4;
}
.delet {
  margin-top: 0px;
  margin-left: 92px;
  background: #fff;
  border: 0;
  color: red;
}
.checkbox {
  margin-left: 12px;
}
.assess {
  width: 875px;
  height: 34px;
  border-bottom: 2px solid #e9e9e9;
  float: left;
  margin-top: -474px;
  margin-left: 541px;
  div {
    width: 111px;
    height: 34px;
    color: #abcfe9;
    border-bottom: 2px solid #2693d4;
    line-height: 34px;
    text-align: center;
  }
}
.order {
  width: 877px;
  float: left;
  margin-top: -438px;
  margin-left: 496px;
  .ordero {
    width: 77px;
    height: 114px;
    line-height: 57px;
    font-size: 13px;
    color: #676767;
    text-indent: 6px;
    .ordert {
      width: 77px;
      height: 57px;
    }
  }
}
.inputf {
  float: left;
  margin-top: -99px;
  margin-left: 77px;
}
.input {
  width: 265px;
  height: 25px;
  float: left;
  margin-top: 0;
  margin-left: 0;
}
.submit {
  width: 71px;
  height: 27px;
  margin-left: 13px;
  color: #75b2ef;
  background: #fff;
  border: 1px solid #2693d4;
  border-radius: 2px;
  margin-top: 1px;
  margin-left: 17px;
}
.date {
  width: 287px;
  height: 26px;
  margin-top: 30px;
  position: relative;
  p {
    position: absolute;
    top: 5%;
    left: 100%;
    white-space: nowrap;
    color: red;
  }
}
.details {
  width: 935px;
  height: 35px;
  background: #f7f7f7;
  font-weight: 700;
  border: 1px solid #2693d4;
  div {
    line-height: 35px;
    float: left;
    div {
      float: right;
    }
  }
  .name {
    width: 178px;
    height: 35px;
    text-indent: 10px;
  }
  .unit {
    width: 191px;
    height: 35px;
  }
  .num {
    width: 114px;
    height: 35px;
  }
  .sum {
    width: 127px;
    height: 35px;
  }
  .state {
    width: 141px;
    height: 35px;
  }
  .operation {
    width: 136px;
    height: 35px;
  }
}
.top {
  margin-top: 233px;
  margin-left: -64px;
}
.wares {
  .details;
  margin-top: 12px;
  line-height: 35px;
  font-weight: 400;
  font-size: 12px;
  border: 1px solid #e8e8e8;
  div {
    width: 200px;
    margin-left: 20px;
  }
  input {
    margin-top: 1px;
  }
}
.deta {
  display: flex;
  width: 935px;
  background: #fff;
  font-weight: 400;
  border: 1px solid #e8e8e8;
  div {
    line-height: 35px;
    float: left;
    div {
      float: right;
    }
  }
  .name {
    width: 178px;
    margin: auto 0;
  }
  .unit {
    width: 191px;
    margin-top: 2%;
  }
  .num {
    width: 114px;
    margin-top: 2%;
  }
  .sum {
    width: 127px;
    margin-top: 2%;
  }
  .state {
    width: 141px;
    margin-top: 2%;
  }
  .operation {
    width: 136px;
  }
}
</style>
