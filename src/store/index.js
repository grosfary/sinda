import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: { //状态集合
    num: 123,
    loginState: '',
    listName: 'listName',
  },
  mutations: { //突变集合
    SET_NUM(state, num) { // 购物车数量
      state.num = num;
<<<<<<< HEAD
    }, 
    SET_LOGIN_STATE(state, loginState) {
=======
    },
    SET_LOGIN_STATE(state, loginState) { // 登录状态
>>>>>>> 49eb3f56bebc26833967a36a1a2eac9a4c6089e5
      state.loginState = loginState;
    },
    SET_LIST_NAME(state, listName) { // 当前列表页
      state.listName = listName;
    }
  },
  actions: { //操作集合
    setNum({ // 改变购物车数量
      commit
    }, num) {
      commit('SET_NUM', num);
    },
    setloginState({ // 改变登录状态
      commit
    }, loginState) {
      commit('SET_LOGIN_STATE', loginState);
    },
    setlistName({
      commit
    }, listName) {
      commit('SET_LIST_NAME', listName);
    }
  },
  getters: { //显示集合
    getNum: state => state.num,
    getloginState: state => state.loginState,
    getlistName: state => state.listName
  }
});
