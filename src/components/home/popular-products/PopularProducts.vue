<template>
  <div class="popular container">
    <p class="popular-title mont">Популярные наборы</p>

    <ProductCatalog class="popular-catalog">
      <template #bottom-btn> Все праздничные наборы </template>
    </ProductCatalog>
  </div>
</template>

<script>
import ProductCatalog from '@/components/product/ProductCatalog.vue'
export default {
  components: { ProductCatalog }
}
</script>

<style scoped>
.popular-title {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}
.popular-catalog {
  margin-top: 42px;
}
</style>
