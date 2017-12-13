<template>
  <div class="cart">

    <div class="company">

      <div class="head">

        <div class="server">
          <div class="Server">服务分类</div>
          <div class="type" v-for="(itemList1,key,index) in itemLists" :key="itemList1.id" v-if="index==1">
            <span v-for="(itemListII,key,index) in itemList1.itemList" :key="itemListII.id" @click="nowIndexII(index)" :class="{title_bg:(index==IndexII)}">{{itemListII.name}}</span>
          </div>
        </div>

        <div>
          <div class="Server">类型</div>
          <div class="type" v-for="(itemList1,key,index) in itemLists" :key="itemList1.id" v-if="index==1">
            <div v-for="(itemListII,key,index) in itemList1.itemList" :key="itemListII.id" v-if="index==IndexII">
              <span v-for="(itemListIII,key,index) in itemListII.itemList" :key="itemListIII.id" @click="nowIndexIII(index,itemListIII.id)" :class="{title_bg:(index==IndexIII)}">{{itemListIII.name}}</span>
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
                <div class="details" @click="toDetail(product.id)">
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
      Rdata: [],
      IndexII: 0,
      IndexIII: 0,
      pro_type_id: ""
    };
  },
  methods: {
    ...mapActions(["setlistName"]),
    nowIndexII: function(index) {
      this.IndexII = index;
      this.IndexIII = 0;
    },
    nowIndexIII: function(index, id) {
      var that = this;
      this.IndexIII = index;
      this.pro_type_id = id;
      this.ajax
        .post(
          //列表商品
          "http://115.182.107.203:8088/xinda/xinda-api/product/package/grid",
          this.qs.stringify({
            start: 0,
            limit: 800,
            productTypeCode: "0",
            productId: that.pro_type_id,
            sort: 3
          })
        )
        .then(data => {
          that.Rdata = data.data.data;
          console.log(that.Rdata);
        });
    },
    toDetail: function(id) {
      this.$router.push({path:'/list/pro',query:{id:id}});
    }
  },
  created() {
    var that = this;
    this.setlistName("财税服务");
    this.ajax
      .post(
        //列表商品
        "http://115.182.107.203:8088/xinda/xinda-api/product/package/grid",
        this.qs.stringify({
          start: 0,
          limit: 800,
          productTypeCode: "0",
          productId: "2cc17cc0fb7e4b79b3d961cdcb57c260",
          sort: 3
        })
      )
      .then(data => {
        this.Rdata = data.data.data;
        console.log(that.pro_type_id);
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
  cursor: pointer;
  span {
    display: inline-block;
    height: 25px;
    text-decoration: none;
    color: #333333;
    padding: 2px 5px;
  }
  // span {
  //   background: #2693d4;
  //   color: #ffffff;
  //   border-radius: 5px;
  // }
  .title_bg {
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
          cursor: pointer;
          padding: 15px 10px;
        }
        img {
          border: 1px solid #eaeaea;
          width: 100px;
          height: 100px;
          margin: 15px;
        }
      }
      .shopright {
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