import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import note from './components/Note.vue'
import threejs from './components/Threejs.vue'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: threejs },
    { path: '/note', name: 'Main', component: note }
  ]
})