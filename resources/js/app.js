import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import axios from 'axios'
import createAlert from './pages/modals/alert/Create'
import updateAlert from './pages/modals/alert/Update'
import deleteAlert from './pages/modals/alert/Delete'
import validateAlert from './pages/modals/alert/Validate'

Vue.component('createAlert', createAlert)
Vue.component('updateAlert', updateAlert)
Vue.component('deleteAlert', deleteAlert)
Vue.component('validateAlert', validateAlert)

Vue.mixin(require('./base'))

var app_path = '/gift_box_lucky_draw/public'
//var app_path = ''


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
