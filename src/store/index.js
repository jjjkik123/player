import Vue from 'vue'
import Vuex from 'vuex'
import IndexModule from './modules/IndexModule';
import MessageModule from './modules/MessageModule';
import VoiceModule from './modules/VoiceModule';
import FindModule from './modules/FindModule';
import MineModule from './modules/MineModule';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    IndexModule,
    MessageModule,
    VoiceModule,
    FindModule,
    MineModule
  }
})
