import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import "./assets/style/reset.scss";
import "amfe-flexible";
import { Button, Tabbar, TabbarItem, Grid, GridItem,Tab, Tabs, Swipe,Toast, SwipeItem,NavBar,List,Icon,Divider,Popup } from 'vant';

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
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Toast);
Vue.use(Popup);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')