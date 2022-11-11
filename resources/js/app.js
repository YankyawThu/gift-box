import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import axios from 'axios'

var app_path = ''

axios.defaults.baseURL = app_path
Vue.prototype.$asset = app_path
Vue.prototype.$url = app_path

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})
