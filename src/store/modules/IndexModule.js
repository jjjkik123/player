import {getIndexBarList,getDoubleList,getBulkList,getRecommendList,getBackYardList,login} from '../../utils/api';
const indexModules = {
  namespaced: true,
  state: {
    indexBar:[],
    double:[],
    bulk:[],
    recommend:[],
    backyard:[],
    login:{}
  },
  mutations: {
    getIndexBarList(state,payload) {
      state.indexBar = payload.indexBar;
    },
    getDoubleList(state,payload) {
      state.double = payload.double
    },
    getBulkList(state,payload) {
      state.bulk = payload.bulk
    },
    getRecommendList(state,payload) {
      state.recommend = payload.recommend
    },
    getBackYardList(state,payload) {
      state.backyard = payload.backyard
    },
    login(state,payload) {
      state.login = payload.data.userInfo
      if(payload.data.userInfo) {
        sessionStorage.setItem('username',JSON.stringify(payload.data.userInfo));
      }
    },
  },
  actions: {
    async getIndexBarList({commit}) {
      const res = await getIndexBarList();
      commit('getIndexBarList',res)
    },
    async getDoubleList({commit}) {
      const res = await getDoubleList();
      commit('getDoubleList',res)
    },
    async getBulkList({commit}) {
      const res = await getBulkList();
      commit('getBulkList',res)
    },
    async getRecommendList({commit}) {
      const res = await getRecommendList();
      commit('getRecommendList',res)
    },
    async getBackYardList({commit}) {
      const res = await getBackYardList();
      commit('getBackYardList',res)
    },
    async login({commit},payload) {
      const res = await login(payload);
      commit('login',res)
    }
    
  }
}

export default indexModules;
