import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false  //关闭生产模式下给出的提示

/* eslint-disable no-new */
new Vue({
    el: "#container",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
