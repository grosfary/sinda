<template>
  <div class="header_outer">
    <!-- 头部外部盒子 -->
    <div class="header_content">
      <div class="header_logo" @click="index_url">
        <!-- 头部logo部分 -->
        <div class="icon_global">
          <!-- logo图片 -->
          <!-- window.location.href='#/'; -->
        </div>
        <p>信达</p>
      </div>
      <div class="header_city">
        <!-- 头部城市部分 -->
        <ul>
          <li>北京市</li>
          <li>
            <a href="">[切换城市]</a>
          </li>
        </ul>
      </div>
      <div class="header_search">
        <!-- 头部搜索部分 -->
        <ul>
          <li>
            <a href="">产品</a>
            <span>|</span>
            <a href="">服务商</a>
          </li>
          <li>
            <input type="text" placeholder="搜索您需要的服务或服务商">
            <button>
              <span class="icon_global"></span>
            </button>
          </li>
          <li class="hotServer">
            <span>热门服务：</span>
            <a href="">社保客户</a>
            <a href="">公司注册</a>
          </li>
        </ul>
      </div>
      <div class="header_phone">
        <!-- 头部电话部分 -->
        <span class="phone_pic icon_global"></span>
        <span>010-83421842</span>
      </div>

    </div>

    <!-- <transition name="fade"> -->
    <div class="header_nav" ref="header_nav">
      <!-- 头部导航栏部分 -->
      <ul>
        <li>
          <router-link tag="a" :to="ind.src" :key="ind.id" v-for="(ind,key,index) in btn" active-class="active" @click="a(index)">
            <span v-if="index==0" v-on:mousemove="mark = true" v-on:mouseout="mark = false" style="display:block">{{ind.name}}</span>
            <span v-else>{{ind.name}}</span>
          </router-link>
        </li>
      </ul>

      <transition name="fade">
        <div class="header_sidebar" v-if="mark" @mouseout="mark=false" @mouseover="mark=true" >
          <!-- 头部侧导航部分 -->
          <div v-for="(i,index) in sortListarr" :key="i.code" style="font-size:16px;" >
            <div class="sidebar_left" @mouseover="relationClick(index)" @mouseout="nowIndex=-1" @click="linkHref(sortListarr,index)" v-bind:class="{sidebar_left_active:(nowIndex==index)}">
              <!-- 侧导航左半边 -->
              <div class="icon_global sidebar_icon"></div>
              <!-- 侧导航图标 -->
              <div class="sidebar_title">
                <!-- 侧导航标题 -->
                {{i.name}}
                <ul>
                  <li v-for="(i,key,index) in i.itemList" :key="i.name" style="font-size:14px;">
                    {{i.name}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="sidebar_right" v-show="index===nowIndex" @mousemove="relationClick(index)" @mouseout="nowIndex=-1">
              <!-- 侧导航右边 -->
              <ul>
                <li v-for="(i,key,index) in i.itemList" :key="i.name">
                  <span class="sidebar_subnav">
                    <!-- 侧部导航的子导航 -->
                    <span>{{i.name}}></span>
                    <div>
                      <span v-for="(i,key,index) in i.itemList" :key="i.name">
                        <span style="margin:0 5px;">|</span>
                        {{i.name}}
                      </span>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "sinda_header",
  data() {
    return {
      btn: {
        a: { name: "全部产品",  src: "/index" },
        b: { name: "财税服务", src: "/list/tax" },
        c: { name: "公司工商", src: "/list/com" },
        d: { name: "加盟我们", src: "/Join_Us" },
        e: { name: "店铺", src: "/store_list" }
      },
      indexs: 0,
      a: function(n) {
        this.indexs = n;
      },
      listarr: [],
      mark: false,
      nowIndex: -1
    };
  },
  created() {
    var that = this;
    this.ajax
      .post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list")
      .then(function(data) {
        var data = data.data.data;
        that.listarr = data;
      });
  },
  mounted() {},
  methods: {
    relationClick: function(index) {
      this.nowIndex = index;
    },
    index_url: () => {
      window.location.href = "#/";
    },
    linkHref: function(sortListarr, index) {
      var obj = sortListarr[index].itemList;
      var id = "";
      for (var i in obj) {
        if (obj[i].name == "审计报告") id = "0ed787f42fe94b30b85e6a88f56e4614";
        if (obj[i].name == "公司注册") id = "19b94314bc1a4b078d2402f8727c388b";
        if (obj[i].name == "专利申请") id = "24d919ba0eb545dd9a3132dfb87cf599";
        if (obj[i].name == "企业社保") id = "0e46c4b27e2a41aab572e11837ea0c9f";
      }
      console.log(index)
      this.$router.push({
        path: "/list/list",
        query: { name: sortListarr[index].name, id: id ,index:index}
      });
    }
  },
  computed: {
    sortListarr: function() {
      var listarr = this.listarr;
      var obj = {};
      for (var i in listarr) {
        obj[listarr[i].code] = listarr[i];
      }
      return obj;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 雪碧图----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.icon_global {
  background-image: url("../assets/pc/Sprites.png");
}
// 雪碧图-----------end-------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 头部整体----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.header_outer {
  height: 148px;
  border-bottom: 1px solid #2693d4;
  > div {
    width: 1200px;
    margin: 0 auto;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    > div {
      float: left;
      // 最后的电话部分给一个右浮动
      &.header_phone {
        float: right;
      }
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
}
// 头部整体-----------end-------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 头部logo部分----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.header_logo {
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  div,
  p {
    float: left;
    line-height: 56px;
    margin-top: 39px;
  }
  div {
    // logo图片
    width: 52px;
    height: 56px;
    background-position: 0 0;
    margin-right: 12px;
  }
}
// 头部logo部分-----------end-------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 头部城市部分----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.header_city {
  // 当前城市
  padding-top: 10.5px;
  margin-top: 39px;
  margin-left: 28px;
  font-size: 14px;
  line-height: 21px;
  width: 171px;
  a {
    // 切换城市
    color: #2693d4;
    line-height: 21px;
  }
}
// 头部城市部分-----------end-------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 头部搜索部分----------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.header_search {
  margin-top: 19px;
  li {
    font-size: 14px;
    line-height: 25px;
    a {
      color: #000;
      line-height: 25px;
    }
    span {
      margin-left: 8px;
      margin-right: 8px;
    }
  }
  input {
    // 搜索框部分
    margin-left: 1px;
    outline: none;
    padding-left: 10px;
    width: 471px;
    height: 37px;
    border: 2px solid #2693d4;
    border-right: 0;
    vertical-align: top;
    &::-webkit-input-placeholder {
      // 搜索框占位符颜色设置
      /* WebKit browsers */
      color: #a3a3a3;
    }
    &:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #a3a3a3;
    }
    &::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #a3a3a3;
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #a3a3a3;
    }
  }
  button {
    // 搜索按钮部分
    width: 103px;
    height: 41px;
    background: #2693d4;
    border: none;
    vertical-align: top;
    cursor: pointer;
    outline: none;
    span {
      // 搜索按钮的放大镜图片
      width: 24px;
      height: 24px;
      position: relative;
      top: 2px;
      display: inline-block;
      background-position: 0 -111px;
    }
  }
  .hotServer {
    // 热门服务部分
    margin-left: 14px;
    font-size: 12px;
    color: #c7c7c7;
    line-height: 26px;
    span {
      margin: 0;
    }
    a {
      font-size: 12px;
      color: #c7c7c7;
      line-height: 26px;
      margin-left: 7px;
      margin-right: 7px;
    }
  }
}
// 头部搜索部分-----------end-------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 头部联系电话部分--------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.header_phone {
  width: 180px;
  height: 49px;
  span {
    margin-top: 35px;
    display: inline-block;
    height: 49px;
    line-height: 49px;
    vertical-align: top;
    color: #a3a3a3;
    font-size: 17px;
    font-weight: 700;
  }
  .phone_pic {
    background-position: -78px 0;
    width: 48px;
  }
}
// 头部联系电话部分-----------end-------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 头部导航栏部分--------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.header_nav {
  a {
    margin-left: 61px;
    margin-right: 61px;
    padding-left: 3px;
    padding-right: 3px;
    display: inline-block;
    text-decoration: none;
    color: #000;
    height: 38px;
    text-align: center;
    line-height: 38px;
    box-sizing: border-box;
    &:hover {
      color: #2693d4;
    }
  }
}
.header_nav .active {
  color: #2693d4;
  text-decoration: none;
  border-bottom: 3px solid #2693d4;
}
// 头部导航栏部分-----------end-------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 头部侧导航部分--------start------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
.header_sidebar {
  position: absolute;
  z-index: 100000000;
  width: 1200px;
  height: 400px;
  color: #e2e4e6;
  > div {
    display: flex;
  }
}
.sidebar_left {
  // 侧部导航左边
  width: 199px;
  cursor: pointer;
  background: #16263c;
  vertical-align: top;
  &.sidebar_left_active {
    // 侧部导航hover效果
    background: #2693d4;
  }
}
.sidebar_icon {
  // 侧部导航图标
  width: 49px;
  margin-top: 17px;
  margin-left: 14px;
  height: 26px;
  width: 26px;
  display: inline-block;
  vertical-align: top;
}
.sidebar_title {
  // 侧部导航标题
  width: 150px;
  font-size: 16px;
  margin-top: 13px;
  margin-bottom: 14px;
  line-height: 34px;
  display: inline-block;
  vertical-align: top;
  ul {
    li {
      float: left;
      line-height: 26px;
      margin-right: 14px;
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
}

.sidebar_right {
  // 侧部导航右边
  cursor: pointer;
  height: inherit;
  display: inline-block;
  vertical-align: top;
  width: 1001px;
  background: rgba(255, 255, 255, 0.6);
  ul {
    margin-top: 9.5px;
    li {
      font-size: 14px;
      > span {
        display: inline-block;
        width: 1001px;
      }
    }
  }
}
.sidebar_subnav {
  // 侧部导航的子导航
  > span {
    display: inline-block;
    width: 99px;
    vertical-align: top;
    text-align: center;
  }
  > div {
    line-height: 20px;
    font-size: 14px;
    width: 902px;
    vertical-align: top;
    float: right;
    span {
      display: inline-block;
    }
  }
}
.fade-enter-active{
  transition: all 0.5s;
  animation: bounce-in .3s;
}
.fade-leave-active {
  transition: all 0.3s;
  // animation: bounce-in .5s reverse;
}
.fade-enter{
  // transform: translateX(150px);
}
.fade-leave-to {
  opacity:0;
}

@keyframes bounce-in {
  0% {
    transform: translateX(100px);
  }
  20% {
    transform: translateX(-25px);
  }
  100% {
    transform: translateX(0px);
  }
}
// 头部侧导航部分-----------end-------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
</style>
