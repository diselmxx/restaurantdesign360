import '~/assets/style.css'
import '~/bootstrap'
import DefaultLayout from '~/layouts/Default.vue'
import Container from '~/components/base/Container.vue'

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Container', Container)
}
