<template>
  <div class="ProductCard card">
    <img class="card-img" :src="product.img" alt="" />
    <div class="card-content">
      <div class="card-info">
        <p class="card-title mont">{{ product.title }}</p>
        <p class="card-descr">{{ product.description }}</p>
      </div>

      <div class="card-bottom">
        <div class="card-price">{{ product.price }} руб</div>
        <div class="card-cart mont"><IconCart class="card-icon" /> В корзину</div>
      </div>
    </div>
  </div>
</template>

<script>
import IconCart from './components/IconCart.vue'
export default {
  components: { IconCart },
  data() {
    return {
      product: {
        title: 'Сердце',
        description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
        img: new URL('@/assets/img/product1.png', import.meta.url).href,
        price: 2800
      }
    }
  }
}
</script>

<style scoped>
.card {
  border: 2px solid var(--gray);
  border-radius: 4px;
  overflow: hidden;
}
.card-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.card-content {
  background: white;
}
.card-info {
  padding: 20px 20px 36px;
}
.card-title {
  font-size: 18px;
  font-weight: 600;
}
.card-descr {
  margin-top: 14px;
  font-size: 14px;
}
.card-bottom {
  display: flex;
  align-items: center;
  border-top: 2px solid var(--gray);
}
.card-price {
  padding: 12px 20px 16px;
  width: 100%;
  border-right: 2px solid var(--gray);

  font-weight: 600;
  font-size: 18px;

  color: var(--red);
}
.card-cart {
  display: flex;
  align-items: center;
  padding: 12px 20px 16px;
  white-space: nowrap;

  font-weight: 600;
  font-size: 14px;
}
.card-icon {
  margin-right: 12px;
}
</style>
