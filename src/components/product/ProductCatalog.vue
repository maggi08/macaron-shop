<template>
  <div class="ProductCatalog catalog">
    <div class="catalog-list">
      <ProductCard v-for="item in 9" :key="item" />
    </div>
    <UiButton class="catalog-btn"> <slot name="bottom-btn"> button </slot> </UiButton>
  </div>
</template>

<script>
import UiButton from '@/components/ui/UiButton.vue'
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard, UiButton }
}
</script>

<style scoped>
.catalog-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px 30px;
}

.catalog-btn {
  max-width: 292px;
  margin: 36px auto 0;
  display: flex;
}
</style>
