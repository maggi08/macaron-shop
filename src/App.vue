<script>
import MHero from '@/components/home/hero/MHero.vue'
import MFooter from '@/components/layouts/MFooter.vue'
import MHeader from '@/components/layouts/MHeader.vue'
import MainAbout from '@/components/about/MainAbout.vue'
import NewsCarousel from '@/components/news/NewsCarousel.vue'
import MCategories from '@/components/home/categories/MCategories.vue'
import SaleProducts from '@/components/home/sale-products/SaleProducts.vue'
import PopularProducts from '@/components/home/popular-products/PopularProducts.vue'

export default {
  components: {
    MHeader,
    MFooter,
    MHero,
    MCategories,
    SaleProducts,
    PopularProducts,
    NewsCarousel,
    MainAbout
  }
}
</script>

<template>
  <MHeader class="" />

  <main class="main">
    <MHero />

    <MCategories />

    <SaleProducts />

    <PopularProducts />

    <NewsCarousel class="main-news" />

    <MainAbout class="main-about" />
  </main>

  <MFooter class="footer" />
</template>

<style scoped>
.main {
  min-height: 100vh;
}
.main-news {
  margin-top: 85px;
  margin-bottom: 85px;
}
.main-about {
  margin-top: 85px;
  margin-bottom: 85px;
}
</style>
