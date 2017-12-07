import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: { //状态集合
    num: 123,
    loginState: '',
  },
  mutations: { //突变集合
    SET_NUM(state, num) {
      state.num = num;
    },
    SET_LOGIN_STATE(state, loginState) {
      state.loginState = loginState;
    }
  },
  actions: { //操作集合
    setNum({
      commit
    }, num) {
      commit('SET_NUM', num);
    },
    setloginState({
      commit
    }, loginState) {
      commit('SET_LOGIN_STATE', loginState);
    }
  },
  getters: { //显示集合
    getNum: state => state.num,
    getloginState: state => state.loginState
  }
});
