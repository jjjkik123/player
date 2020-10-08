import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import "./assets/style/reset.scss";
import "amfe-flexible";
import { Button, Tabbar, TabbarItem, Tab, Tabs, Icon, Swipe, SwipeItem, Toast } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')