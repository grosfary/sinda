
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
          <img :src="list.providerImg" alt="">
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
    var id = this.$route.query.id;
    !(function() {
      if (!id) {
        location.href = "#/m_storelist";
      }
      that.ajax
        .post(
          //请求店铺商品信息
          "/xinda-api/product/package/grid",

          that.qs.stringify({
            start: 0,
            // providerId: "9080f0c120a64eb3831d50ba93c33e78",
            providerId: id,
            sort: 2
          })
        )
        .then(function(data) {
          // var lists = data.data.data;
          that.lists = data.data.data;
          for (var key in that.lists) {
            that.lists[key].providerImg =
              "http://123.58.241.146:8088/xinda/pic" +
              that.lists[key].providerImg;
          }
          //  console.log(that.lists)
          console.log(that.lists[0].providerImg);
        });
    })();
  },

  data() {
    return {
      lists: [],
    
      number: [],
      page: 1,
      id: "17a2bbe928104677952ef12d8faff685"
    };
  },

  methods: {
    dianji: function(providerId) {
      this.$router.push({
        path: "/details",
        query: { sId: providerId }
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