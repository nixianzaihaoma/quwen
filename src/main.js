import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './common/mreset.css'
import rem from './common/rem'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import gallery from 'img-vuer'
import './iconfont/iconfont.css'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(gallery, {
    swipeThreshold: 200, // default 100 ,new in 0.12.0
    isIndexShow: false, // show image index
    useCloseButton: false, // trigger gallery close with only close button
})
Vue.use(MintUI)
Vue.config.productionTip = false
rem()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')