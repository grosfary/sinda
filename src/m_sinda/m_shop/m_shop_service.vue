<template>
    <div class="phoneservice">
        <div class="center">
            <p>所有服务
                <span></span>
            </p>
        </div>
        <div class="below">
            <div class="shopleft" v-for="list in lists" :key='list.id'>
                <div class="picture">
                    <img :src="'http://115.182.107.203:8088/xinda/pic' + list.providerImg" alt="">
                </div>
                <div class="shopright">
                    <h3>{{list.providerName}}</h3>
                    <p>{{list.serviceInfo}}</p>
                    <span></span>
                    <span>{{list.regionName}}</span>
                    <del>￥ {{list.marketPrice}}元</del>
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
          providerId: "9080f0c120a64eb3831d50ba93c33e78",
          sort: 2
        })
      )
      .then(function(data) {
        var shop = data.data.data;
        shops(shop);
        // pages(shop);
      });
    //数据处理函数
    var shops = function(shopping) {
      for (var key in shopping) {
        shopping[key].price = Math.floor(shopping[key].marketPrice * 1.2);
        if (shopping[key].serviceName.length > 11) {
          shopping[key].serviceName =
            shopping[key].serviceName.substr(0, 11) + "...";
        }
        if (shopping[key].serviceInfo.length > 16) {
          shopping[key].serviceInfo = shopping[key].serviceInfo.substr(0, 14);
        }
      }
      that.getPage(1, shopping); //调用页数跳转函数
      that.dat = shopping; //所有数据存储在dat里面
    };
    //分页函数
    var pages = function(shopping) {
      var len = shopping.length;
      var nu = len % 6;
      if (nu == 0) {
        var page = len / 6;
      } else {
        var page = (len - nu) / 6 + 1;
      }
      for (var i = 0; i < page; i++) {
        that.number.push(i + 1);
      }
    };
  },

  data() {
    return {
      lists: [],
      dat: [],
      number: [],
      page: 1
      // shop:[],
    };
  },

  methods: {
    //页数跳转函数
    getPage(num, data) {
      var len = data.length; //总数据长度
      var nu = len % 6; //余数
      if (nu == 0) {
        var page = len / 6; //共分几页
      } else {
        var page = (len - nu) / 6 + 1;
      }
      if (num < 1) {
        //如果页数小于1，则修改为第一页
        num = 1;
      } else if (num > page) {
        //判断如果输入的页面超过了最大页数，则修改为最后一页
        num = page;
      }
      var a = (num - 1) * 6; //a为当前跳转页的起始条目
      var b = a + 6; //b为终止条目
      if (b > len) {
        //判断如果b的值超出了数据长度，则重新赋值为数据长度
        b = len;
      }
      this.lists = []; //清除原有内容
      for (var i = a; i < b; i++) {
        this.lists.push(data[i]); //根据页数重新填充数据
      }
      this.page = num; //重新记录页数数据，以便下次调用
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.phoneservice{
  width: 7.5rem;
  margin: 0 auto;
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
    border: 1px solid #cfcfcf;
  }
  .picture img {
    align-items: center;
    display: inline-block;
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
  del {
    font-size: 0.18rem;
    color: red;
  }
}
</style>