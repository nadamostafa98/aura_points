import Vue from 'vue'
import App from './App.vue'
import router from './router'

console.log("henaa");
new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");