<template>
  <div class="cart">

    <div class="company">

      <div class="head">

        <div class="server">
          <div class="Server">服务分类</div>
          <div class="type" v-for="(itemList1,key,index) in itemLists" :key="itemList1.id" v-if="index==1">
            <a v-for="itemListII in itemList1.itemList" :key="itemListII.id" href="javascript:viod(0)">{{itemListII.name}}</a>
          </div>
        </div>

        <div>
          <div class="Server">类型</div>
          <div class="type" v-for="(itemList1,key,index) in itemLists" :key="itemList1.id" v-if="index==1">
            <div v-for="(itemListII,key,index) in itemList1.itemList" :key="itemListII.id" v-if="index==1">
              <a v-for="itemListIII in itemListII.itemList" :key="itemListIII.id" href="javascript:viod(0)">{{itemListIII.name}}</a>
            </div>
          </div>
        </div>

        <div class="area">
          <div class="Server">服务区域</div>
          <div class="type">
            <select>
              <option value="">省</option>
            </select>
            <select>
              <option value="">市</option>
            </select>
            <select>
              <option value="">区</option>
            </select>
          </div>
        </div>

      </div>
      <div class="body">
        <div class="rank">
          <button class="sort">综合排序
            <span></span>
          </button>
          <button>价格↑↑
            <span></span>
          </button>
        </div>
        <div class="shop">
          <div class="shoptop">
            <p>商品</p>
            <p>价格</p>
          </div>
          <div class="shopbody">
            <div class="first">
              <div class="shopleft" v-for="(product,key,index) in Rdata" :key='product.id'>
                <div>
                  <img :src="'http://115.182.107.203:8088/xinda/pic' + product.productImg" alt="">
                </div>
                <div class="details">
                  <h3>{{product.providerName}}</h3>
                  <p>{{product.serviceName}}</p>
                  <span>{{product.serviceInfo}}</span>
                  <span>{{product.regionName}}</span>
                </div>
                <div class="shopright">
                  <p>￥ {{product.marketPrice}}</p>
                  <button>立即购买</button>
                  <button>加入购物车</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div class="list">
        这是页面标签
      </div>
    </div>
    <div class="side">
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "sinda_buyCart",
  data() {
    return {
      itemLists: [],
      Rdata: []
    };
  },
  methods: {
    ...mapActions(["setlistName"])
  },
  created() {
    this.setlistName("购物车");
    this.ajax
      .post(
<<<<<<< HEAD
        "/xinda-api/cart/list",
        this.qs.stringify({
          // sId: "0cb85ec6b63b41fc8aa07133b6144ea3"
=======
        //列表商品
        "http://115.182.107.203:8088/xinda/xinda-api/product/package/grid",
        this.qs.stringify({
          start: 0,
          limit: 8,
          productTypeCode: "1",
          productId: "8a82f52b674543e298d2e5f685946e6e",
          sort: 2
>>>>>>> b4b890d08acfa1886dc4b8f0b45872b770bfc2fd
        })
      )
      .then(data => {
        this.Rdata = data.data.data;
      });
    this.ajax
      .post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list")
      .then(data => {
        //列表信息
        console.log(data.data.data);
        var rData = data.data.data;
        this.itemLists = rData;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.head {
  width: 953px;
  background: #f7f7f7;
  border: 1px solid #cccccc;

  > div {
    display: flex;
    border-bottom: 1px solid #ccc;
    width: 950px;
    .Server {
      border-right: 1px solid #ccc;
      text-align: center;
      line-height: 42px;
      width: 100px;
    }
  }
  > div:nth-child(3) {
    border-bottom: none;
  }
}
.cart {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.type {
  padding: 10px;
  width: 849px;
  a {
    display: inline-block;
    height: 25px;
    text-decoration: none;
    color: #333333;
    padding: 2px 5px;
  }
  a:nth-child(1) {
    background: #2693d4;
    color: #ffffff;
    border-radius: 5px;
  }
}
.body {
  border: 1px solid #cccccc;
  margin-top: 25px;
  .rank {
    height: 45px;
    border-bottom: 1px solid #cccccc;
    background: #f7f7f7;
    button {
      width: 107px;
      height: 45px;
      background: #f7f7f7;
      border: none;
      outline: none;
    }
    .sort {
      background: #2693d4;
      color: #ffffff;
      position: relative;
      span {
        position: absolute;
        display: block;
        left: 48px;
        top: 45px;
        border-top: 7px solid #2693d4;
        border-left: 7px solid #ffffff;
        border-right: 7px solid #ffffff;
        border-bottom: 7px solid #ffffff;
      }
    }
  }
  .shop {
    // padding: 0 8px;
    .shopbody {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      p {
        font-size: 14px;
        color: #676767;
        line-height: 55px;
      }
      span {
        font-size: 14px;
        color: #676767;
      }
      .shopleft {
        border-bottom: 1px solid #eaeaea;
        display: flex;
        .details {
          width: 560px;
          padding: 15px 10px;
        }
        img {
          border: 1px solid #eaeaea;
          width: 100px;
          height: 100px;
          margin: 15px;
        }
      }
      .shopright{
        padding: 20px 5px;
      }
      .shopright p {
        color: red;
        font-size: 15px;
        text-align: center;
        font-size: 24px;
      }
      .shopright button {
        width: 89px;
        height: 30px;
        text-align: center;
        border-radius: 3px;
        color: #fff;
      }
    }

    button {
      background: #2693d4;
      border: none;
    }
    .shoptop {
      height: 45px;
      padding: 0 60px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eaeaea;
      p {
        line-height: 45px;
        font-size: 14px;
        color: #333333;
      }
    }
  }
}
.list {
  text-align: center;
  margin-bottom: 200px;
}
.side {
  width: 235px;
  height: 660px;
  border: 1px solid #cccccc;
  margin-bottom: 200px;
  background: url("../../../images/pc/left.png");
}
</style>