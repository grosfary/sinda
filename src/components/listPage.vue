<template>
  <div class="hello">
    <div>
      <div class='top'>
        <div class='sort'>
          <div :class='number==1?"collation":"price"' @click='aaa(1)'>默认排序</div>
          <div :class='number==2?"collation":"price"' @click='aaa(2)'>价格</div>
        </div>
      </div>
   <div class='back' v-for='product in products' :key="product.data">
      <router-link :to="{path:'/details',query:{sId:product.id}}" @click='ccc'>
      <div class='content'>
          <div class='img'>
            <div class='imgs'>
                <img :src="('http://115.182.107.203:8088/xinda/pic'+product.productImg)" alt="">
            </div>
            <div class='deta'>
                <span>{{product.serviceName}}</span><br>
                <span style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">{{product.serviceInfo}}</span><br>
                <span class='area'>地区：{{product.regionName}}</span>
                <span class='doller'>￥{{product.price}}</span>
            </div>
          </div>
      </div>
          </router-link>
    </div>
     </div>
     <div class='bottom'>
       <div class='sort'>
          <button @click='previous'>上一页</button>
          <button @click='next'>下一页</button>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      index: 0,
      number: 1,
      sort: "",
      num: 0
    };
  },
  methods: {
    ccc:function(){
      this.$router.query.id;
    },
    aaa: function(number) {
      //sort背景颜色
      this.number = number;
      if (this.number == 2) {
        if (this.num == 0) {
          this.index = 0;
          this.index = this.index + 1;
          this.sort = 2;
          this.sum();
          this.num = 1;
        } else {
          this.index = 0;
          this.index = this.index + 2;
          this.sort = 3;
          this.sum();
          this.num = 0;
        }
      } else {
        this.index = 0;
        this.num = 0;
        this.index = this.index;
        this.sort = "";
        this.sum();
      }
    },
    next: function() {
      //下一页
      this.index = this.index + 3;
      this.sum();
    },
    previous: function() {
      //上一页
      if (this.index != 0) {
        this.index = this.index - 3;
        this.sum();
      } else {
        this.index = 0;
      }
    },
    sum() {
      //封装调用函数
      if (sessionStorage.getItem(this.index) != null) {
        this.products = JSON.parse(sessionStorage.getItem(this.index))[
          this.index
        ];
      } else {
        if (this.index % 3 == 0) {
          var that = this;
          var str = {};
          this.ajax
            .post(
              //列表商品
              "/xinda-api/product/package/grid",
              this.qs.stringify({
                start: this.index,
                limit: 3,
                productTypeCode: this.$route.query.code,
                productId: this.$route.query.id,
                sort: this.sort
              })
            )
            .then(data => {
              console.log(this.$route.query.id,this.$route.query.code)
              var data = data.data.data;
              that.products = data;
              if (!str[this.index]) {
                str[this.index] = data;
              }
              sessionStorage.setItem(this.index, JSON.stringify(str));
            });
        } else if (this.index % 3 == 1) {
          var that = this;
          var str = {};
          this.ajax
            .post(
              //列表商品
              "/xinda-api/product/package/grid",
              this.qs.stringify({
                start: this.index - 1,
                limit: 3,
                productTypeCode: this.$route.query.code,
                productId: this.$route.query.id,
                sort: this.sort
              })
            )
            .then(data => {
              var data = data.data.data;
              that.products = data;
              if (!str[this.index]) {
                str[this.index] = data;
              }
              sessionStorage.setItem(this.index, JSON.stringify(str));
            });
        } else if (this.index % 3 == 2) {
          var that = this;
          var str = {};
          this.ajax
            .post(
              //列表商品
              "/xinda-api/product/package/grid",
              this.qs.stringify({
                start: this.index - 2,
                limit: 3,
                productTypeCode: this.$route.query.code,
                productId: this.$route.query.id,
                sort: this.sort
              })
            )
            .then(data => {
              var data = data.data.data;
              that.products = data;
              if (!str[this.index]) {
                str[this.index] = data;
              }
              sessionStorage.setItem(this.index, JSON.stringify(str));
            });
        }
      }
    }
  },
  created() {
    this.sum();
  },destroyed: function() {
    // 生命周期销毁钩子
    sessionStorage.clear()
  }

};
</script>
<style scoped lang="less">
.back {
  background: #f8f8f8;
}
.hello {
  width: 100%;
  font-size: 0.22rem;
}
.top {
  width: 100%;
  height: 1.44rem;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  .sort {
    width: 3.61rem;
    height: 0.65rem;
    background: #7b7b7b;
    border-radius: 0.08rem;
    display: flex;
    .price {
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 0.65rem;
      border-top-left-radius: 0.08rem;
      border-bottom-left-radius: 0.08rem;
    }
    .collation {
      .price;
      background: #2693d4;
      color: #fff;
      border-top-right-radius: 0.08rem;
      border-bottom-right-radius: 0.08rem;
    }
    button {
      width: 50%;
      height: 100%;
      font-size: 0.3rem;
    }
  }
}
.content {
  width: 90%;
  height: 2.1rem;
  position: relative;
  margin: 0 auto;
  border-bottom: 1px solid #7b7b7b;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  display: flex;
  width: 100%;
  height: 1.7rem;
  align-items: center;
}
.imgs {
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 0.17rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.deta {
  width: 5rem;
  height: 1.7rem;
  margin-left: 0.5rem;
  position: relative;
  .area {
    position: absolute;
    bottom: 0;
  }
  span {
    line-height: 2;
  }
  .doller {
    margin-left: 2.8rem;
    font-size: 0.3rem;
    color: red;
    position: absolute;
    bottom: 0;
  }
}
.bottom {
  .top;
  background: #f8f8f8;
}
</style>
