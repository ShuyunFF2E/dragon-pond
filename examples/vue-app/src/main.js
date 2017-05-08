import 'element-theme-default';
import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';

Vue.use(Element);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
