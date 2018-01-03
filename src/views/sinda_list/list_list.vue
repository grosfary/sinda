<template>
  <div class="cart">

    <div class="company">

      <div class="head">

        <div class="server">
          <div class="Server">服务分类</div>
          <div class="type" v-for="(itemList1,key,index) in itemLists" :key="itemList1.id" v-if="(index==indexs-1)">
            <span v-for="(itemListII,key,index) in itemList1.itemList" :key="itemListII.id" @click="nowIndexII(index,itemListII,itemListII.code)" :class="{title_bg:(index==IndexII)}">{{itemListII.name}}</span>
          </div>
        </div>

        <div>
          <div class="Server">类型</div>
          <div class="type" v-for="(itemList1,key,index) in itemLists" :key="itemList1.id" v-if="index==(indexs-1)">
            <div v-for="(itemListII,key,index) in itemList1.itemList" :key="itemListII.id" v-if="index==IndexII">
              <span v-for="(itemListIII,key,index) in itemListII.itemList" :key="itemListIII.id" @click="nowIndexIII(index,itemListIII.id)" :class="{title_bg:(index==IndexIII)}">{{itemListIII.name}}</span>
            </div>
          </div>
        </div>

        <div class="area">
          <div class="Server">服务区域</div>
          <div class="type">
            <dist></dist>
          </div>
        </div>

      </div>
      <div class="body">
        <div class="rank">
          <button class="sort">综合排序
          </button>
          <ul>
            <li v-for="(i,key,index) in sortObj" :key="key">
              <button @click="sortord(index)" v-if="index==sortIndex">{{i}}
                <span></span>
              </button>
            </li>
          </ul>

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
                  <img :src="('http://123.58.241.146:8088/xinda/pic' + product.productImg)" :onerror="errorImg">
                </div>
                <div class="details" @click="toDetail(product.id)">
                  <h3>{{product.providerName}}</h3>
                  <p>{{product.serviceName}}</p>
                  <span style="white-space:nowrap; max-width:400px;display:inline-block;text-overflow:ellipsis;overflow:hidden;" :title="product.serviceInfo">{{product.serviceInfo}}</span>
                  <span style="white-space:nowrap; max-width:200px;display:inline-block;text-overflow:ellipsis;overflow:hidden;">{{product.regionName}}</span>
                </div>
                <div class="shopright">
                  <p>￥ {{product.price}}.00</p>
                  <button @click="flag && nowBuy(product.id)">立即购买</button>
                  <button @click="cartAdd(product.id)">加入购物车</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="list">
        <button @click="beforeOption">上一页</button>
        <span v-for="(i,index) in limitArr" :key="i" @click="option(index)" :class="{bg_2693d4:(index==optionIndex)}">{{i}}</span>
        <button @click="nextOption">下一页</button>
      </div>
    </div>
    <div class="side">
    </div>
    <transition name="reversal">
      <div class="message" v-if="show">
        <div v-if="show">
          <h3>请您先登录</h3>
          <p>马上登录账号？</p>
          <button @click="queding">确定
            <span></span>
          </button>
          <button @click="quxiao">取消</button>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
const dist = resolve => require(["../../components/distpicker"], resolve);

export default {
  components: {
    dist
  },
  name: "sinda_taxServer",
  data() {
    return {
      itemLists: [],
      Rdata: [],
      IndexII: 0,
      IndexIII: 0,
      pro_type_id: this.$route.query.id,
      pro_type_code: this.$route.query.code,
      indexs: "",
      limit: 3,
      totalCount: "",
      limitArr: [],
      start: 0,
      sortObj: { a: "价格从高到低", b: "价格从低到高" },
      sortIndex: 0,
      sort: "",
      optionIndex: 0,
      errorImg: 'this.src="' + require("../../assets/pc/not_found.jpg") + '"',
      show: false,
      flag: true
    };
  },
  methods: {
    ...mapActions(["setlistName", "setNum"]),
    nowIndexII: function(index, i, code) {
      console.log(code);
      this.IndexII = index;
      var id = "";
      this.pro_type_id = id;
      this.pro_type_code = code;
      this.liebiao(id, code);
      this.IndexIII = -1;
      this.option(0);
      // var arr = [];
      // for (var j in i.itemList) {
      //   arr.push(i.itemList[j]);
      // }
      // this.nowIndexIII(0, arr[0].id); // 每当点击二级标题时，重置三级标题的商品
    },
    toDetail: function(id) {
      this.$router.push({ path: "/list/pro", query: { id: id } });
    },
    liebiaoxinxi: function() {
<<<<<<< HEAD
      this.ajax.post("/xinda-api/product/style/list").then(data => {
        //获取列表信息
        var obj = {};
        for (var i in data.data.data) {
          obj[data.data.data[i].code] = data.data.data[i];
        }
        this.itemLists = obj;
      });
=======
      this.ajax
        .post("/xinda-api/product/style/list")
        .then(data => {
          //获取列表信息
          var obj = {};
          for (var i in data.data.data) {
            obj[data.data.data[i].code] = data.data.data[i];
          }
          this.itemLists = obj;
        });
>>>>>>> 882434be73ca94e168a25fef1b3283ccab3e81a1
    },
    liebiao: function(id, code) {
      // 当前三级标题所选显示的商品
      this.ajax
        .post(
          //列表商品
          "/xinda-api/product/package/grid",
          this.qs.stringify({
            start: this.start,
            limit: this.limit,
            productTypeCode: code,
            productId: id,
            sort: this.sort
          })
        )
        .then(data => {
          this.limitArr = [1];
          this.Rdata = data.data.data;
          this.totalCount = Math.ceil(data.data.totalCount / this.limit);
          for (var i = 2; i < this.totalCount + 1; i++) {
            this.limitArr.push(i);
          }
        });
    },
    addtoCart(jump, id, num) {
      // 立即购买或者加入购物车
      // if (sessionStorage.getItem("userName")) {
      // 判断现在是否为登录状态
      this.ajax
        .post(
          "/xinda-api/cart/add",
          this.qs.stringify({
            id: id,
            num: num
          })
        )
        .then(data => {
          // 如果成功添加购物车，返回值为1 并将数量加入购物车当中
          if (data.data.status == 1) {
            this.setNum();
          } else {
            console.log("添加购物车失败提示信息===" + "非常抱歉，系统开小差了，请稍后再试");
          }
          if (jump) {
            this.$router.push({ path: "/list/cart" });
          }
        });
      // } else {
      //   this.show = true;
      // }
    },
    queding() {
      this.$router.push({ path: "/LoginRegister/login" });
    },
    quxiao() {
      this.show = false;
    },
    nowBuy(id) {
      if (sessionStorage.getItem("userName")) {
        this.flag = false;
        this.addtoCart(true, id, 1);
      } else {
        this.addtoCart(true, id, 1);
      }
    },
    cartAdd(id) {
      this.addtoCart(false, id, 1);
    },
    option(index) {
      // 列表索引 1 2 3 4 5 6 7 8 9
      if (this.optionIndex == index) {
        return;
      }
      this.optionIndex = index;
      this.start = index * this.limit;
      this.liebiao(this.pro_type_id, this.pro_type_code);
    },
    nextOption() {
      // 下一页按钮
      if (this.optionIndex < this.totalCount - 1) {
        this.optionIndex += 1;
        this.start += 3;
        this.liebiao(this.pro_type_id, this.pro_type_code);
      }
    },
    beforeOption() {
      // 上一页按钮
      if (this.optionIndex != 0) {
        this.optionIndex -= 1;
        this.start -= 3;
        this.liebiao(this.pro_type_id, this.pro_type_code);
      }
    },
    sortord(index) {
      index == 0 ? (this.sortIndex = 1) : (this.sortIndex = 0);
      index == 0 ? (this.sort = 2) : (this.sort = 3);
      this.liebiao(this.pro_type_id, this.pro_type_code);
    },
    nowIndexIII: function(index, id) {
      // 三级标题点击事件
      this.IndexIII = index;
      this.pro_type_id = id;
      console.log(id);
      var code = 0;
      this.liebiao(id, code);
      this.option(0);
    },
    shangpinxinxi: function() {
      // 获取全部产品的传参并设置当前三级商品id
      this.liebiao(this.$route.query.id, this.pro_type_code);
    }
  },

  watch: {
    $route: function() {
      // 路由监听
      this.setlistName(this.$route.query.name);
      console.log("code===", this.$route.query.code);
      console.log("index===", this.$route.query.index);
      console.log("id===", this.$route.query.id);
      console.log("ind===", this.$route.query.ind);
      if (!this.$route.query.id) {
        this.IndexII = this.$route.query.ind;
        this.IndexIII = -1;
      } else {
        // console.log("x===", this.$route.query.x);
        this.IndexII = this.$route.query.x;
        this.IndexIII = this.$route.query.z;
      }
      this.indexs = this.$route.query.index;
      this.pro_type_id = this.$route.query.id;
      this.pro_type_code = this.$route.query.code;
      // this.shangpinxinxi(); // 获取商品信息
      this.liebiaoxinxi(); // 获取列表信息
      this.shangpinxinxi(); // 获取商品信息
    }
  },
  created() {
    // this.setlistName(this.$route.query.name); // 设置本页名
    // console.log("code===", this.$route.query.code);
    // console.log("index===", this.$route.query.index);
    // console.log("id===", this.$route.query.id);
    // console.log("ind===", this.$route.query.ind);

    this.setlistName(this.$route.query.name); // 设置本页名
    if (!this.$route.query.id) {
      this.IndexII = this.$route.query.ind;
      this.IndexIII = -1;
    } else {
      // console.log("x===", this.$route.query.x);
      this.IndexII = this.$route.query.x;
    }
    this.indexs = this.$route.query.index; // 获取当前索引值
    this.pro_type_id = this.$route.query.id;
    this.pro_type_code = this.$route.query.code;
    this.liebiaoxinxi(); // 获取列表信息
    this.shangpinxinxi(); // 获取商品信息
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
    position: relative;
    ul {
      position: absolute;
      top: 0;
      left: 107px;
      button {
        cursor: pointer;
        &:hover {
          color: #2693d4;
        }
      }
    }
    button {
      width: 107px;
      height: 45px;
      background: #f7f7f7;
      border: none;
      outline: none;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url("../../assets/pc/icon_sort.gif") 0 0 no-repeat;
      }
    }
    .sort {
      background: #2693d4;
      color: #ffffff;
      position: relative;
      &::after {
        content: "";
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
      padding-top: 0;
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
  button {
    display: inline-block;
    width: 66px;
    height: 34px;
    color: #cbcbcb;
    border: 1px solid #cbcbcb;
    font-size: 14px;
    text-align: center;
    line-height: 34px;
    background: #fff;
  }
  span {
    margin: 3px;
    margin-top: 6px;
    display: inline-block;
    box-sizing: border-box;
    width: 37px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: #cbcbcb;
    border: 1px solid #cbcbcb;
    cursor: pointer;
  }

  .bg_2693d4 {
    border: 1px solid #2693d4;
    color: #2693d4;
  }
}
.side {
  width: 235px;
  height: 660px;
  border: 1px solid #cccccc;
  margin-bottom: 200px;
  background: url("../../assets/pc/left.png");
}

.cart .message {
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100%;
  > div {
    border-radius: 6px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 384px;
    height: 200px;
    h3 {
      line-height: 53px;
      text-align: center;
      background: #f2f2f2;
    }
    p {
      padding-left: 28px;
      line-height: 70px;
      color: #797a8b;
    }
    button {
      font-size: 18px;
      border-radius: 6px;
      width: 150px;
      height: 45px;
      background: #d8d8d8;
      border: none;
      margin-left: 28px;
      cursor: pointer;
    }
  }
}

.reversal-enter-active {
  transition: all 0.3s ease;
}
.reversal-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.reversal-enter {
  transform: translateX(100px);
  opacity: 0;
}
.reversal-leave-to {
  opacity: 0;
}
</style>