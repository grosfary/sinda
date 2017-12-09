<template>
    <div class="pro">
        <div class="pro_header">
            <div class="pro_img"></div>
            <div class="pro_info">
                <ul>
                    <li>
                        <h2>注册...</h2>
                    </li>
                    <li>营业执照五个公章...</li>
                    <li>
                        <div>
                            <p>
                                市场价：
                                <del>￥900.00</del>
                            </p>
                            <p>
                                价　格：
                                <strong>￥ 800.00</strong>
                                <span>元</span>
                            </p>
                        </div>
                    </li>
                    <li>类　型：
                        <span>注册分公司</span>
                    </li>
                    <li>地　区：北京—北京市—朝阳区</li>
                    <li>购买数量：
                        <button>-</button><input type="text" value="1">
                        <button>+</button>
                    </li>
                    <li>
                        <button>立即购买</button>
                        <button>加入购物车</button>
                    </li>
                </ul>
            </div>
            <div class="pro_server">
                <h2>顶级服务商</h2>
                <p>北京信达服务中心</p>
                <button>马上咨询</button>
                <div class="check_server">
                    <button>查看服务商</button>
                </div>
            </div>
        </div>
        <div class="banner">
        </div>
        <div class="pro_main">
            <div class="main_title">
                <ul>
                    <li v-for="(i,index) in proMainTitle" :key="i.tit">
                        {{i.tit}}
                    </li>
                </ul>
            </div>
            <div class="main_main" v-for="(i,key,index) in proMainTitle" :key="i.tit">
                {{i.info}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "sinda_buyCart",
  data() {
    return {
      proMainTitle: {
        a: { tit: "服务内容", info: "111" },
        b: { tit: "商品评价", info: "222" }
      }
    };
  },
  methods: {
    ...mapActions(["setlistName"])
  },
  created() {
    this.setlistName("商品详情");
    this.ajax
      .post(
        "/xinda-api/product/package/detail",
        this.qs.stringify({
          sId: "0cb85ec6b63b41fc8aa07133b6144ea3"
        })
      )
      .then(data => {
        console.log(data);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pro {
  // 商品详情页样式
  > div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .pro_header {
    //  产品头部
    display: flex;
    margin-top: 13px;
  }
}

.pro_img {
  // 商品图片
  width: 525px;
  height: 393px;
  background: red;
}
.pro_info {
  // 商品信息
  margin-left: 32px;
  width: 444px;
  height: 393px;
}
.pro_server {
  // 顶级服务商
  width: 197px;
  height: 223px;
  border: 1px solid #2793d4;
  text-align: center;
  position: relative;
  h2 {
    line-height: 50px;
  }
  p {
    line-height: 50px;
    font-size: 14px;
  }
  button {
    width: 88px;
    height: 28px;
    border: 1px solid #2693d4;
    border-radius: 1px;
    background: #fff;
    color: #2693d4;
  }
  .check_server {
    //查看服务商
    position: absolute;
    bottom: 0;
    width: 197px;
    height: 75px;
    background: #bdddf2;
    button {
      width: 110px;
      height: 30px;
      background: #2693d4;
      color: #fff;
      border: none;
      font-size: 14px;
      border-radius: 2px;
      vertical-align: middle;
      margin-top: 23px;
    }
  }
}

.banner {
  // 广告栏
  background: url("../../assets/pc/waiguoren.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  height: 98px;
  margin-top: 22px !important;
  margin-bottom: 38px !important;
}

.main_title {
  height: 41px;
  background: #f7f7f7;
  border: 1px solid #cccccc;
}
</style>