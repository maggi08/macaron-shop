<script>
import MHero from '@/components/home/hero/MHero.vue'
import MFooter from '@/components/layouts/MFooter.vue'
import MHeader from '@/components/layouts/MHeader.vue'
import MCategories from '@/components/home/categories/MCategories.vue'
import SaleProducts from '@/components/home/sale-products/SaleProducts.vue'

export default {
  components: { MHeader, MFooter, MHero, MCategories, SaleProducts }
}
</script>

<template>
  <MHeader class="" />

  <main class="main">
    <MHero />

    <MCategories />

    <SaleProducts />
  </main>

  <MFooter class="footer" />
</template>

<style scoped>
.main {
  margin-top: 278px;
  min-height: 100vh;
}
</style>
