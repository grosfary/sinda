<template>
<div class="hello">
  <div class='top'>
    <div class='assess'>
          <div>评价</div>
    </div>
    <div>
    <div class='evaluate'>
      <div>
        <span>服务单号：{{setnumtoeva}}</span>
        <span></span>
      </div>
      <div>
        <span>购买内容：{{abc}}</span>
        <span></span>
      </div>
      <div>
        <span>购买时间：{{cre | formatDate}}</span>
        <span></span>
      </div>
    </div>
    <div class='evalu'>
      <span>评价：</span>
      <input type="radio" name='radio' @click="sum(3)">
      <span>好评</span>
      <input type="radio" name='radio' @click="sum(2)">
      <span>中评</span>
      <input type="radio" name='radio' @click="sum(1)" checked="checked">
      <span>差评</span>
    </div>
    <div class='score'>
      <a>评分：</a>
      <span :class='index>=0?"active":""' @click='image(0)'></span>
      <span :class='index>=1?"active":""' @click='image(1)'></span>
      <span :class='index>=2?"active":""' @click='image(2)'></span>
      <span :class='index>=3?"active":""' @click='image(3)'></span>
      <span :class='index>=4?"active":""' @click='image(4)'></span>
    </div>
    <div class='feel'>
      <span>感受：</span> 
      <textarea class='textarea' v-model="textarea"></textarea>   
    </div>
    <div class='sub'>
      <a href="#/member/evalu"><input type='submit' class='judge' @click='judge'></input></a>
    </div>
   </div>    
  </div>
</div>
</template>
<script>
import member from "../views/sinda_member";
import { formatDate } from "../global_js/date.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      index: -1,
      buys: [],
      sumes: 1,
      textarea: "",
      abc:"",
      cre:''
    };
  },
  computed: {
    ...mapGetters(["setnumtoeva"]),
  },
  components: { member },
    filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  methods: {
    image: function(index) {
      this.index = index;
    },
    judge: function() {
      var that = this;
      that.ajax
        .post(
          "/xinda-api/service/judge/submit",
          that.qs.stringify({
            id: that.$route.query.id,
            type: that.sumes,
            score: that.index + 1,
            content: that.textarea
          })
        )
        .then(function(data) {
          console.log(data.data);
        });
    },
    sum: function(sumes) {
      // console.log(sumes)
      this.sumes = sumes;
    }
  },
  created() {
    var that = this;
    this.abc=that.$route.query.abc,
    this.cre=that.$route.query.cre,
    this.ajax.post("/xinda-api/business-order/detail", {}).then(function(data) {
      var Data = data.data.data;
      that.buys.push(Data);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.assess {
  width: 875px;
  height: 34px;
  border-bottom: 2px solid #e9e9e9;
  float: left;
  margin-top: -474px;
  margin-left: 541px;
  div {
    width: 86px;
    height: 34px;
    color: #abcfe9;
    border-bottom: 2px solid #2693d4;
    line-height: 34px;
    text-align: center;
  }
}
.evaluate {
  width: 644px;
  height: 36px;
  margin-top: -438px;
  margin-left: 569px;
  float: left;
  span {
    width: 200px;
    font-size: 10px;
    line-height: 36px;
    float: left;
    margin-left: 10px;
  }
}
.evalu {
  .evaluate;
  margin-top: -401px;
  width: 300px;
  span {
    float: left;
    width: 40px;
  }
  input {
    margin-top: 11px;
    margin-left: -63px;
  }
}
.score {
  .evaluate;
  margin-top: -363px;
  margin-left: 579px;
  width: 180px;
}
.feel {
  .evaluate;
  margin-top: -326px;
  width: 590px;
  height: 103px;
}
.sub {
  .evaluate;
  margin-top: -222px;
}
.textarea {
  width: 536px;
  height: 101px;
  margin-top: -30px;
  margin-left: 55px;
}
.judge {
  width: 105px;
  height: 30px;
  float: right;
  background: #169bd5;
  border: 0;
  margin-top: 17px;
  border-radius: 4px;
  color: #fff;
}
.top {
  margin-top: 233px;
}
.score > span {
  width: 13px;
  height: 13px;
  background: url("../assets/pc/Sprites.png") no-repeat -198px -261px;
  margin-top: 12px;
  &.active {
    background-position: -221px -261px;
  }
}
.score > a {
  line-height: 36px;
  float: left;
  font-size: 10px;
}
</style>
