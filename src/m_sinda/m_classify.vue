<template>
  <div class="classify">
    <div class="titleI">
      <div v-for="(i,key,index) in  list" :key="i.code" :class="{bg:(listBG==index)}" @click="picktitle(key,index)">{{i.name}}</div>
    </div>
    <div class="titleII">
      <div v-for="i in  listII" :key="i.code">
        <p>{{i.name}}</p>
        <ul class="titleIII">
          <li v-for="i in  i.itemList" :key="i.code" @click="toDetail(i.id)">
            {{i.name}}
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m_list",
  data() {
    return {
      list: {},
      listII: {},
      listBG: 0
    };
  },
  methods: {
    picktitle(key, index) {
      this.listBG = index;
      this.listII = this.list[key].itemList;
    },toDetail(id){
      this.$router.push({ path: "/listPage", query: { id: id } });
    }
  },
  created() {
    var that = this;
    if (!sessionStorage.getItem("classify")) {
      this.ajax.post("/xinda-api/product/style/list").then(function(data) {
        var data = data.data.data;
        var obj = {};
        for (var i in data) {
          obj[data[i].showOrder] = data[i];
        }
        that.list = obj;
        sessionStorage.setItem("classify", JSON.stringify(that.list));
        that.listII = that.list[1].itemList;
      });
    } else {
      var classify = JSON.parse(sessionStorage.getItem("classify"));
      that.list = classify;
      that.listII = classify[1].itemList;
      
        console.log(that.list)
    }
  },
  mounted() {},
  destroyed: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.classify {
  width: 7.5rem;
  margin: 0 auto;
  margin-bottom: 0.96rem;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  height: 100%;
  .titleI {
    float: left;
    width: 2.22rem;
    > div {
      font-size: 0.26rem;
      line-height: 0.94rem;
      padding-left: 0.28rem;
      font-weight: 700;
      &.bg {
        background: #f3f4f6;
      }
    }
  }
  // --------------------------------------------------------------------------------------------------------------
  .titleII {
    // 二级标题样式
    float: left;
    font-size: 0.28rem;
    width: 5.28rem;
    background: #f3f4f6;
    > div {
      color: #5a5955;
      margin-left: 0.21rem;
      margin-right: 0.21rem;
      p {
        line-height: 0.77rem;
        padding-left: 0.05rem;
        border-bottom: #cbcbcd 0.01rem solid;
      }
    }
    //------------------------------------------------------------------------------------------------------
    .titleIII {
      // 三级标题样式
      font-size: 0.24rem;
      li {
        position: relative;
        margin-left: 0.72rem;
        line-height: 0.74rem;
        border-bottom: #cbcbcd 0.01rem solid;
        span {
          width: 0.16rem;
          height: 0.16rem;
          border: 1px solid #5a5955;
          border-left: none;
          border-bottom: none;
          transform: rotate(45deg);
          position: absolute;
          right: 0.25rem;
          top: 0.3rem;
        }
      }
    }
  }
}
</style>