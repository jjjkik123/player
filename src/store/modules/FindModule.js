import { getComment, getDyanamicList,getPageList } from '../../utils/api'
import { getFoucsList } from '../../utils/api'
const FindModule = {
    namespaced: true,
    state: {
        dynamicList: [],
        focusList: [],
        commentList:[],
        pageList:[]
    },
    mutations: {
        getDyanamic(state, payload) {
            state.dynamicList = payload.result
                console.log(payload);
        },
        getFoucsList(state, payload) {
            state.focusList = payload.result
                // console.log(state.focusList);
        },
        getPageList(state, payload) {
            state.pageList = payload.result
                // console.log(state.focusList);
        },
        comment(state,payload){
          state.commentList=payload.result
        }
    },
    actions: {
        async getDyanamic({ commit }) {
            const res = await getDyanamicList();
            commit('getDyanamic', { result: res[1].result })
        },
        async getFocusClassify({ commit }) {
            const res = await getFoucsList();
            // console.log(res);
            commit('getFoucsList', {
                result: res[0].result
            })
        },
        async getPageList({ commit }) {
            const res = await getPageList();
            console.log(res);
            commit('getPageList', {
                result: res
            })
        },
        async comment({commit}) {
          const res = await getComment();
          commit ('comment',{
            result:res
          })
        }

    },
    modules: {}
}

export default FindModule;