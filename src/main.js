import Vue from 'vue'
import App from './App.vue'
import {Vuelidate} from "vuelidate";
import {ValidationObserver, ValidationProvider} from "vee-validate";

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.config.productionTip = false
Vue.use(Vuelidate);
new Vue({
  render: h => h(App),
}).$mount('#app')
