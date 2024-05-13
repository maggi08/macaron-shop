<script>
import MFooter from '@/components/layouts/MFooter.vue'
import MHeader from '@/components/layouts/MHeader.vue'
import MHero from '@/components/home/hero/MHero.vue'
export default {
  components: { MHeader, MFooter, MHero }
}
</script>

<template>
  <MHeader class="" />

  <main class="main">
    <MHero />
    <h1>macaron shop</h1>
    <h1>macaron shop</h1>
    <h1>macaron shop</h1>
  </main>

  <MFooter class="footer" />
</template>

<style scoped>
.main {
  margin-top: 278px;
  min-height: 100vh;
}
</style>
