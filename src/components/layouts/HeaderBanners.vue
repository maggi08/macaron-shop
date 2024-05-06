<template>
  <div class="banners">
    <div class="banners-content container">
      <carousel :autoplay="1000" :transition="500" wrapAround>
        <slide v-for="banner in banners" :key="banner">
          <div class="banner-item">
            <img :src="banner.icon" alt="" />
            <p>{{ banner.title }}</p>
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'HeaderBanners',
  components: {
    Navigation,
    Carousel,
    Slide
  },
  data() {
    return {
      banners: [
        {
          icon: new URL('./icons/bannericon1.svg', import.meta.url).href,
          title: 'МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ'
        },
        {
          icon: new URL('./icons/bannericon2.svg', import.meta.url).href,
          title: 'ВСЕГДА СВЕЖЕЕ'
        },
        {
          icon: new URL('./icons/bannericon3.svg', import.meta.url).href,
          title: 'ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ'
        },
        {
          icon: new URL('./icons/bannericon4.svg', import.meta.url).href,
          title: 'ДОСТАВКА В ДЕНЬ ЗАКАЗА'
        }
      ]
    }
  }
}
</script>

<style scoped>
.banners {
  background: var(--blue-secondary);
  padding: 9px 0;
}
.banner-item {
  display: flex;
  align-items: center;
}
.banner-item img {
  margin-right: 12px;
}
</style>
