import {getIndexBarList,getDoubleList,getBulkList} from '../../utils/api';
const indexModules = {
  namespaced: true,
  state: {
    indexBar:[],
    double:[],
    bulk:[]
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
    
  }
}

export default indexModules;
