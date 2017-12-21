<template>
  <div class="hello">
    <div>
      <div class='top'>
        <div class='sort'></div>
      </div>
    <div class='back'>
      <div class='content'>
          <div class='img'>
            <div class='imgs'>

            </div>
            <div class='deta'>
                <span>新公司注册</span><br>
                <span>￥</span><br>
                <span class='doller'>购买数量</span><br>
                <span class='doller'>地区</span>
            </div>
          </div>
      </div>
    </div>
     </div>
  </div>
</template>

<script>
  
</script>

<style scoped lang="less">
.back{
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
  .sort{
    width:3.61rem;
    height: 0.65rem;
    background:#7b7b7b;
    margin:0 auto;    
  }
}
.content {
  width: 90%;
  height: 2.1rem;
  position: relative;
  margin:0 auto;
  border-bottom:1px solid #7b7b7b;
}
.img {
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1.7rem;
}
.imgs {
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 0.17rem;
}
.deta {
  width: 3.4rem;
  height: 1.7rem;
  span {
    line-height: 2;
  }
}
</style>
