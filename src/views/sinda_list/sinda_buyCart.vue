<template>
  <div class="hello">
    <div class="company">
      <div class="top">
          <p class="index">首页</p>
          <span>/</span>
          <p class="business">公司工商</p>
      </div>
      <div class="head">
        <div class="left">
          <div class="server">服务分类</div>
          <div class="type">类型</div>
          <div class="area">服务区域</div>
        </div>
        <div class="right">
          <div>
              <a class="register">公司注册</a>
              <span>公司变更</span>
          </div>
          <div>
            <a href="">分公司注册</a>
            <p>公司注册地址</p>
            <p>合伙注册地址</p>
            <p>外商独资公司注册</p>
            <p>VIE架构</p>
            <p>股份公司注册</p>
            <p>有限公司注册</p>
            <p>一般纳税注册地址</p>
          </div>
          <div>
            <select>
              <option value="">省</option>
              <option value="">市</option>
              <option value="">区</option>
            </select>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="synthesize">
          <p>综合排序</p>
          <span>价格</span>
          <img src="" alt="">
        </div>
        <div class=" commodity">
          <p>商品</p>
          <span>价格</span>
        </div>
        <div class="filiale">
            <div>
              <img src="" alt="">
            </div>
            <div>
              <h3></h3>
              <p></p>
              <span></span>
              <span></span>
            </div>
            <div>
              <p>￥ 800.00</p>
              <a href="">立即购买</a>
              <a href="">加入购物车</a>
            </div>
        </div> 
        <div class="filiale">
            <div>
              <img src="" alt="">
            </div>
            <div>
              <h3></h3>
              <p></p>
              <span></span>
              <span></span>
            </div>
            <div>
              <p>￥ 800.00</p>
              <a href="">立即购买</a>
              <a href="">加入购物车</a>
            </div>
        </div> 
        <div class="filiale">
            <div>
              <img src="" alt="">
            </div>
            <div>
              <h3></h3>
              <p></p>
              <span></span>
              <span></span>
            </div>
            <div>
              <p>￥ 800.00</p>
              <a href="">立即购买</a>
              <a href="">加入购物车</a>
            </div>
        </div> 
      </div>
      <div class="picture"></div>
      <div class="below"></div>
    </div>
  </div>
</template>

<script>
import sinda_header from "../../components/sinda_global_header";
import sinda_footer from "../../components/sinda_global_footer";
export default {
  name: "sinda_buyCart",
  data() {
    return {
      // filed
    };
  },
  components: { sinda_header, sinda_footer }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
    padding:26px 344px 195px;
}
.top{
  
}
</style>