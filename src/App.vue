<script>
import MFooter from '@/components/layouts/MFooter.vue'
import MHeader from '@/components/layouts/MHeader.vue'
import MHero from '@/components/home/hero/MHero.vue'
import MCategories from '@/components/home/categories/MCategories.vue'
export default {
  components: { MHeader, MFooter, MHero, MCategories }
}
</script>

<template>
  <MHeader class="" />

  <main class="main">
    <MHero />

    <MCategories />
  </main>

  <MFooter class="footer" />
</template>

<style scoped>
.main {
  margin-top: 278px;
  min-height: 100vh;
}
</style>
