import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
<<<<<<< HEAD
  state: { //状态集合
    num: 123,
    loginState: '',
    listName: 'listName',
    userName: '',
  },
  mutations: { //突变集合
    SET_NUM(state, num) { // 购物车数量
      state.num = num;
=======
    state: { //状态集合
        num: 123,
        loginState: '',
        listName: 'listName',
>>>>>>> b4b890d08acfa1886dc4b8f0b45872b770bfc2fd
    },
    mutations: { //突变集合
        SET_NUM(state, num) { // 购物车数量
            state.num = num;
        },
        SET_LOGIN_STATE(state, loginState) { // 登录状态
            state.loginState = loginState;
        },
        SET_LIST_NAME(state, listName) { // 当前列表页
            state.listName = listName;
        }
    },
<<<<<<< HEAD
    SET_LIST_NAME(state, listName) { // 当前列表页
      state.listName = listName;
    },
    SET_USER_NAME(state, userName) { // 当前用户
      state.userName = userName;
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
    }
  },
  getters: { //显示集合
    getNum: state => state.num,
    getloginState: state => state.loginState,
    getlistName: state => state.listName,
    getuserName: state => state.userName
  }
});
=======
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
>>>>>>> b4b890d08acfa1886dc4b8f0b45872b770bfc2fd
