import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: { //状态集合
    num: 0,
    loginState: '',
    listName: 'listName',
    userName: '',
    toeva:'',//去评价
  },
  mutations: { //突变集合
    SET_NUM(state, num) { // 购物车数量
      state.num -= -(num);
    },
    SET_LOGIN_STATE(state, loginState) { // 登录状态
      state.loginState = loginState;
    },
    SET_LIST_NAME(state, listName) { // 当前列表页
      state.listName = listName;
    },
    SET_USER_NAME(state, userName) { // 当前用户
      state.userName = userName;
      // if (sessionStorage.getItem("userName")) {
      //   state.userName = sessionStorage.getItem("userName");
      // } else {
      //   state.userName = userName;
      // }
    },
    SET_NUM_TOEVA(state,toeva){//去评价
      state.toeva = toeva;
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
    },
    setuserName({
      commit
    }, userName) {
      commit('SET_USER_NAME', userName);
    },
    setnumtoeva({//去评价
      commit
    },toeva){
      commit('SET_NUM_TOEVA',toeva)
    }
  },
  getters: { //显示集合
    getNum: state => state.num,
    getloginState: state => state.loginState,
    getlistName: state => state.listName,
    getuserName: state => {
      if (state.userName) {
        return state.userName
      } else {
        return sessionStorage.getItem("userName");
      }
    },
    setnumtoeva: state => state.toeva
  }
});
