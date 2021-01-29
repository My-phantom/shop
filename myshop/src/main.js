import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// rem适配
import  urits from './assets/js/utils'

// 样式重置文件
import './assets/css/clear.css'
// 图标
import './assets/css/icon/iconfont.css'
import './assets/css/font_x6uucpx854/iconfont.css'
//  vant 组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// 轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  mounted(){
    urits.setRem();
    window.onresize  = urits.setRem
  },
  render: h => h(App)
}).$mount('#app')
