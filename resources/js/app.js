import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import axios from 'axios'

var run_path = '/'

axios.defaults.baseURL = run_path
Vue.prototype.$asset = run_path

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})