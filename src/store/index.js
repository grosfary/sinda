import Vue from 'vue'
import Vue from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: { //状态集合
    num: 123
  },
  muttions: { //突变集合
    SET_NUM (state, num) {
      state.num = num;
    }
  },
  actions: { //操作集合
    setNUM({commit},num){
        commit('SET_NUM',num);
    }
  },
  getters: { //显示集合
    getNum:state=>state.num
  }
});
