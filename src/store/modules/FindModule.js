import { getDyanamicList } from '../../utils/api'
import { getFoucsList } from '../../utils/api'
const FindModule = {
    namespaced: true,
    state: {
        dynamicList: [],
        focusList: []
    },
    mutations: {
        getDyanamic(state, payload) {
            state.dynamicList = payload.result
                // console.log(state.dynamicList);
        },
        getFoucsList(state, payload) {
            state.focusList = payload.result
                // console.log(state.focusList);
        }
    },
    actions: {
        async getDyanamic({ commit }) {
            const res = await getDyanamicList();
            // console.log(res);
            commit('getDyanamic', { result: res.result })
        },
        async getFocusClassify({ commit }) {
            const res = await getFoucsList();
            // console.log(res);
            commit('getFoucsList', {
                result: res.result
            })

        }

    },
    modules: {}
}

export default FindModule;