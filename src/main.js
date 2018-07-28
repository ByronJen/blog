// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './router'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

// 全局自定义指令:事件
Vue.directive("rainbow",{ 
  bind(el,binding,vnode){
    el.style.backgroundColor = "#"+Math.random().toString(16).slice(2,8);
  }
})
Vue.directive("theme",{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth = "100%";
    }else{
      el.style.maxWidth = "560px";
    }
    if(binding.arg == 'black'){
      el.style.backgroundColor = "black";
    }
  }
})
// 全局自定义过滤器
Vue.filter('to-uppercase',function(val){
  return val.toUpperCase()
})

const router = new VueRouter({
  routes,
  mode:"history",
  scrollBehavior(to,from,savedPost){
    !savedPost?{x:0,y:0}:savedPost;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
