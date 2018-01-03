<template>
  <div class="hello">
    <div class="top">
      <div class="topI">
        <div class="topII">
          <div @click="toIndex">
            <span class="logo"></span>
            <img src="../assets/pc/xinda.jpg" alt="">
          </div>
          <p>欢迎{{getloginState}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getloginState"]) //{getNum:function(){}}
  },
  methods: {
    toIndex() {
      console.log(1);
      this.$router.push("/index");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top {
  width: 100%;
  height: 97px;
}
.topI {
  width: 1200px;
  height: 97px;
  margin: 0 auto;
}
.topII {
  width: 295px;
  height: 97px;
  display: flex;
  div {
    cursor: pointer;
    margin-top: 15px;
    width: 174px;
    height: 56px;
    display: flex;
    border-right: 1px solid #b4b4b4;
    img {
      margin-top: 10px;
      padding-left: 5px;
      width: 76px;
      height: 41px;
    }
  }
  p {
    padding-left: 26px;
    font-size: 18px;
    line-height: 85px;
  }
}
.logo {
  display: block;
  width: 52px;
  height: 56px;
  background: url(../assets/pc/Sprites.png) no-repeat 0 0;
}
</style>