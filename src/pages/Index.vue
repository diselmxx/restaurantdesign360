<template>
  <Layout>
    <g-image alt="Example image" src="~/favicon.png" width="135"/>

    <Header>
      <h1>Hello, world!</h1>
    </Header>

    <p class="bg-red-500 text-white">Tailwindcss</p>
    <p>Mouse position: {{ x }} {{ y }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
import { ref, onMounted, onUnmounted } from '@vue/composition-api'
import Header from '~/components/header/Header'

const useMousePosition = () => {
  const x = ref(0)
  const y = ref(0)

  const listener = event => {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', listener))
  onUnmounted(() => window.removeEventListener('mousemove', listener))

  return { x, y }
}

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    Header,
  },
  setup() {
    const { x, y } = useMousePosition()

    return { x, y }
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
