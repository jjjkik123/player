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
      state.indexBar = payload[0].indexBar;
    },
    getDoubleList(state,payload) {
      state.double = payload[1].double
    },
    getBulkList(state,payload) {
      state.bulk = payload[2].bulk
    },
    getRecommendList(state,payload) {
      state.recommend = payload[3].recommend
    },
    getBackYardList(state,payload) {
      state.backyard = payload[4].backyard
    },
    login(state,payload) {
      state.login = payload.userInfo
      if(payload.state == 1) {
        sessionStorage.setItem('username',JSON.stringify(payload.userInfo));
      }
    },
  },
  actions: {
    async getIndexBarList({commit}) {
      const res = await getIndexBarList();
      commit('getIndexBarList',res)
      console.log(res)
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
      console.log(res)      
      commit('login',res)
    }
    
  }
}

export default indexModules;
