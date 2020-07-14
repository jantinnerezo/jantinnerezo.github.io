<template>
  <div>
    <div class="container">
      <About />
      <Works />
    </div>
    <Footer />
  </div>
</template>

<script>
import About from './components/About.vue'
import Works from './components/Works.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    About,
    Works,
    Footer
  }
}
</script>
