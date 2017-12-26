<template>
  <div class="hello">
    <div class='bottom'>
      <div class='top'>购物车内共有件商品</div>
    <div class='back' v-for = 'product in products' :key='product.data'>
      <div class='content'>
          <div class='img'>
            <div class='imgs'>
                <img v-bind:src="('http://115.182.107.203:8088/xinda/pic'+product.providerImg)">
            </div>
            <div class='deta'>
                <span>新公司注册</span><br>
                <span>￥{{product.unitPrice}}</span><br>
                <span class='doller'>购买数量:

                  </span><br>
                <span class='doller'>地区</span>
            </div>
            <div class='delet'>删除订单</div>
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
          <input type="submit" value='确定' class='color' @mouseenter='submit(1)' @click='hidedate'>
          <input type="submit" value='取消'  @mouseenter='submit(2)' @click='hide'>
        </div>
      </div>
     </div>
     </div>
     <div class='bottomInfor'>
       <div class='aggre'>合计：</div>
       <div class='pay'>去结算</div>
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
    this.ajax.post("/xinda-api/cart/list", {}).then(data => {
      data = data.data.data;
      that.products = data;
      console.log(data);
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
  background: #f8f8f8;
}
.hello {
  width: 100%;
  font-size: 0.22rem;
}
.top {
  width: 100%;
  height: 0.77rem;
  background: #e5e5e5;
  text-indent: 0.5rem;
  line-height: 0.77rem;
}
.content {
  width: 90%;
  height: 2.1rem;
  position: relative;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid #7b7b7b;
}
.img {
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1.7rem;
  align-self: center;
  .delet{
    line-height:1.7rem;
    position:absolute;
    right:0;
    color:red;
  }
}
.imgs {
  width: 1.6rem;
  img {
    width: 90%;
    height: 100%;
  }
}
.deta {
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
.bottom {
  margin-bottom: 1.1rem;
}
.bottomInfor {
  width: 100%;
  height: 1.1rem;
  display:flex;
  font-size:31px;
  position: fixed;
  bottom:0;
  .aggre{
    background:#e5e5e5;
    width:70%;
    height:1.1rem;
    line-height:1.1rem;
    text-indent:0.3rem;
  }
  .pay{
    background:red;
    width:30%;
    height:1.1rem;
    text-align:center;
    margin:0 auto;
    line-height:1.1rem;
  }
}
</style>
