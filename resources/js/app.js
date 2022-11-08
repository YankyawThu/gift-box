import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'

Vue.prototype.$assetUrl = '/'

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})