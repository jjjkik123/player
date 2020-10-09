import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import "./assets/style/reset.scss";
import "amfe-flexible";
import { Button, Tabbar, TabbarItem, Grid, GridItem, Swipe, SwipeItem,NavBar,List,Icon,Divider } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(List);
Vue.use(Icon);
Vue.use(Divider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
