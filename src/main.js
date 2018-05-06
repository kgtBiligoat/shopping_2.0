// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import top from './top'
import left_aside from './left_aside'
import search from './search'
import picture from './picture'

Vue.config.productionTip = false

require('./assets/css/top.css')
require('./assets/css/search.css')
require('./assets/css/left_aside.css')
require('./assets/css/picture.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
  	"top":top,
  	"left_aside":left_aside,
  	"search":search,
  	"pictureC":picture
  },
  template: '<div id="app">'+'<top/> ' + '<search/>' + '<left_aside/>' + '<pictureC/>' + '</div>'
})
