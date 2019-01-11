import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faFolderOpen,
  faCalendarPlus,
  faEnvelope,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

library.add(faBars, faFolderOpen, faCalendarPlus, faEnvelope, faCaretDown);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
