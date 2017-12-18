<template>
  <div>
    <div class="hello">
      <h1 class="content">
        服务内容
      </h1>
      <div class="shopping">
        <div class="serviceItem" v-for="list in lists" :key="list.id">
          <h3>{{list.serviceName}}</h3>
          <span></span>
          <p>{{list.serviceInfo}}</p>
          <p>销量:</p>
          <h2>￥ {{list.marketPrice}}.00</h2>
          <del>原价：￥{{list.price}}.00</del>
          <a  @click="detail(list.id)">查看详情>></a>
        </div>
      </div>
      <div class="number">
        <button @click="getPage(page-1,dat)" class="page">上一页</button>
        <button @click="getPage(num,dat)" v-for="num in number" :key="num">{{num}}</button>
        <button @click="getPage(page+1,dat)" class="page">下一页</button>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  created() {
    var that = this;
    // console.log('this.$route.query.Name==',that.$route.query.Name)
    that.ajax
      .post(
        //请求店铺商品信息
        "/xinda-api/product/package/grid",

        that.qs.stringify({
          start: 0,
          //不加限制条数的参数，获取所有数据
          providerId: that.$route.query.id,
          providerName: that.$route.query.Name,
          providerImg: that.$route.query.img,
          sort: 2
        })
      )
      .then(function(data) {
        var shop = data.data.data;
        shops(shop);
        pages(shop);
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
    },
    detail: function(id) {
      // console.log(id);
      this.$router.push({
        path: "/list/pro",
        query: { id: id }
      });
    }
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content {
  width: 878px;
  height: 95px;
  text-align: center;
  line-height: 95px;
  font-size: 26px;
  color: #2693d4;
  border-bottom: 1px solid #e9e9e9;
}
.shopping {
  padding: 15px;
  padding-right: 0;
  display: flex;
  flex-wrap: wrap;
  .serviceItem {
    width: 255px;
    height: 180px;
    border: 1px solid #b6b6b6;
    margin-bottom: 15px;
    margin-right: 13px;
    padding: 8px;
    a {
      float: right;
    }
  }
  h3 {
    font-weight: normal;
  }
  span {
    display: block;
    background: url("../../../images/pc/Sprites.png") no-repeat -210px -486px;
    width: 165px;
    height: 10px;
  }
  p {
    line-height: 32px;
    font-size: 15px;
    color: #555555;
  }
  h2 {
    color: #2693d4;
  }
  del {
    font-size: 15px;
    line-height: 40px;
  }
  a {
    font-size: 15px;
    color: #2693d4;
    line-height: 40px;
  }
}
.hello {
  position: relative;
  // display: none;
}
.number {
  position: absolute;
  top: 560px;
  left: 50px;
  button {
    width: 30px;
    height: 30px;
    vertical-align: bottom;
    background: #ffffff;
  }
  .page {
    width: 60px;
  }
}
</style>