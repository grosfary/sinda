<template>
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
          <a href="">查看详情>></a>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  created() {
    var that = this;
    var shopList = JSON.parse(sessionStorage.getItem("shopping"));
    !(function(shopping) {
      for (var key in shopping) {
        shopping[key].price = Math.floor(shopping[key].marketPrice * 1.2);
        if (shopping[key].serviceName.length > 11) {
          shopping[key].serviceName = shopping[key].serviceName.substr(0, 11) + "...";
        }
        if (shopping[key].serviceInfo.length > 16) {
          shopping[key].serviceInfo = shopping[key].serviceInfo.substr(0, 14);
        }
      }
      that.lists = shopping;
    })(shopList);
  },
  data() {
    return {
      lists: []
    };
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .serviceItem {
    width: 260px;
    height: 180px;
    border: 1px solid #b6b6b6;
    margin-bottom: 15px;
    padding: 8px;
    a{
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

</style>