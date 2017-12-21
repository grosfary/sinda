<template>
    <div class="">
        <div class="top">
            <p class="topI"></p>
            <p class="topII">注册</p>
        </div>
        <div class="middle">
            <input type="number">
            <input type="text">
            <input type="text">
            <input type="text">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
//顶部
.top {
  width: 100%;
  height: 0.77rem;
  background-color: #e5e5e5;
  display: flex;
  position: relative;
}
.topI {
  width: 0.5rem;
  height: 0.5rem;
  background: url(/static/img/Sprites.7a5be37.png) no-repeat -5px -2px;
  position: absolute;
  top: 0.2rem;
  left: 0.05rem;
}
.topII {
  text-align: center;
  font-size: 0.4rem;
  line-height: 0.77rem;
}
//手机格式
.middle {
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}
</style>






