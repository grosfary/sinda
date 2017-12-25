
<template>
  <div class="phoneservice">
    <div class="center">
      <p>所有服务
        <span></span>
      </p>
    </div>
    <div class="below">
      <div @click="dianji(list.id)" class="shopleft" v-for="list in lists" :key='list.id'>
        <div class="picture">
          <img :src="'http://115.182.107.203:8088/xinda/pic' + list.providerImg" alt="">
        </div>
        <div class="shopright">
          <h3>{{list.serviceName}}</h3>
          <p title="list.serviceInfo">{{list.serviceInfo}}</p>
          <span>{{list.regionName}}</span>
          <span class="money">￥ {{list.marketPrice}}元</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    var that = this;
    that.ajax
      .post(
        //请求店铺商品信息
        "/xinda-api/product/package/grid",

        that.qs.stringify({
          start: 0,
          //不加限制条数的参数，获取所有数据
          // providerId: "9080f0c120a64eb3831d50ba93c33e78",
          providerId: this.$route.query.id,
          sort: 2
        })
      )
      .then(function(data) {
        // var shop = data.data.data;
        that.lists = data.data.data;
      });
  },

  data() {
    return {
      lists: [],
      number: [],
      page: 1,
      id: ["0cb85ec6b63b41fc8aa07133b6144ea3"]
    };
  },

  methods: {
    dianji: function(id) {
      this.$router.push({
        path: "../details",
        query: { id: id }
      });

      return;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.phoneservice {
  display: block;
  width: 7.5rem;
}
.center {
  position: relative;
}
.center p {
  font-size: 0.29rem;
  margin: 0.2rem 0;
  text-indent: 0.27rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #2693d4;
}
.center span {
  position: absolute;
  top: 0.4rem;
  left: 0.8rem;
  border-top: 0.05rem solid transparent;
  border-left: 0.05rem solid transparent;
  border-right: 0.05rem solid transparent;
  border-bottom: 0.05rem solid #2693d4;
}
.shopleft {
  border-bottom: 1px solid #cfcfcf;
  padding: 0.3rem 0.2rem;
  display: flex;
  .picture {
    display: flex;
    align-items: center;
  }

  .shopright {
    width: 5.08rem;
    margin-left: 0.25rem;
    .money {
      font-size: 0.18rem;
      color: red;
    }
  }
  h3 {
    font-size: 0.3rem;
    color: #010101;
  }
  p {
    font-size: 0.17rem;
    color: #010101;
  }
  span {
    font-size: 0.18rem;
    color: #010101;
  }
}
</style>