<script>
import MHero from '@/components/home/hero/MHero.vue'
import MFooter from '@/components/layouts/MFooter.vue'
import MHeader from '@/components/layouts/MHeader.vue'
import MCategories from '@/components/home/categories/MCategories.vue'
import SaleProducts from '@/components/home/sale-products/SaleProducts.vue'
import PopularProducts from './components/home/popular-products/PopularProducts.vue'

export default {
  components: { MHeader, MFooter, MHero, MCategories, SaleProducts, PopularProducts }
}
</script>

<template>
  <MHeader class="" />

  <main class="main">
    <MHero />

    <MCategories />

    <SaleProducts />

    <PopularProducts />
  </main>

  <MFooter class="footer" />
</template>

<style scoped>
.main {
  min-height: 100vh;
}
</style>
