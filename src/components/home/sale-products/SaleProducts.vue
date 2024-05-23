<template>
  <div class="sale-products container">
    <p class="sale-products-title mont">Акции</p>

    <div class="sale-products-list">
      <Carousel
        class="sale-carousel"
        :transition="500"
        :items-to-show="4"
        :items-to-scroll="4"
        :snap-align="'start'"
      >
        <Slide v-for="item in saleProducts" :key="item">
          <div class="sale-products-item">
            <div class="sale-products-item-content" :style="`background-color: ${item.color}`">
              <img :src="item.img" alt="" />
              <p class="sale-products-item-tag" :style="`background-color: ${item.color}`">
                {{ item.tag }}
              </p>
              <p class="sale-products-item-title">{{ item.title }}</p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
  components: {
    Pagination,
    Carousel,
    Slide
  },
  data: () => ({
    saleProducts: [
      {
        tag: 'БЕСПЛАТНАЯ ДОСТАВКА',
        img: new URL('./img/1.png', import.meta.url).href,
        title: 'По СПб в районе КАД –  от 3000₽ По МСК – от 5000₽',
        link: '/',
        color: '#8CC4EC'
      },
      {
        tag: 'НОВИНКА',
        img: new URL('./img/2.png', import.meta.url).href,
        title: 'Шоколадное пирожное картошка на основе бисквита!',
        link: '/',
        color: '#FF4D6D'
      },
      {
        tag: 'НОВИНКА',
        img: new URL('./img/3.png', import.meta.url).href,
        title: 'Аппетитные конфеты на основе миндального печенья и крема',
        link: '/',
        color: '#FF4D6D'
      },
      {
        tag: 'СЛАДКАЯ НОВИНКА',
        img: new URL('./img/4.png', import.meta.url).href,
        title: 'Карамель на палочке из натуральных ингредиентов',
        link: '/',
        color: '#FF4D6D'
      },
      {
        tag: 'БЕСПЛАТНАЯ ДОСТАВКА',
        img: new URL('./img/1.png', import.meta.url).href,
        title: 'По СПб в районе КАД –  от 3000₽ По МСК – от 5000₽',
        link: '/',
        color: '#8CC4EC'
      },
      {
        tag: 'НОВИНКА',
        img: new URL('./img/2.png', import.meta.url).href,
        title: 'Шоколадное пирожное картошка на основе бисквита!',
        link: '/',
        color: '#FF4D6D'
      },
      {
        tag: 'НОВИНКА',
        img: new URL('./img/3.png', import.meta.url).href,
        title: 'Аппетитные конфеты на основе миндального печенья и крема',
        link: '/',
        color: '#FF4D6D'
      },
      {
        tag: 'СЛАДКАЯ НОВИНКА',
        img: new URL('./img/4.png', import.meta.url).href,
        title: 'Карамель на палочке из натуральных ингредиентов',
        link: '/',
        color: '#FF4D6D'
      }
    ]
  }),
  methods: {}
}
</script>

<style scoped>
.sale-products {
  margin: 94px 0;
}
.sale-products-title {
  font-weight: 600;
  font-size: 30px;
  text-align: center;
}
.sale-products-list {
  margin-top: 50px;
}

.sale-products-item {
  height: 380px;
  width: 100%;
  padding: 0 15px;
  /* overflow: hidd; */
}

.sale-products-item-content {
  position: relative;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.sale-products-item img {
  width: 100%;
  object-fit: cover;
  height: 270px;
}
.sale-products-item p {
  color: white;
}

.sale-products-item-tag {
  position: absolute;
  top: 16px;
  left: 0;
  padding: 4px 10px;
  font-weight: 600;
}
.sale-products-item-title {
  height: 100%;
  padding: 20px 20px 30px;
  font-weight: 600;
}

.carousel__pagination {
  margin-top: 36px;
  justify-content: flex-end;
  padding-right: 15px;
}
.carousel__pagination-button::after {
  width: 12px !important;
  height: 12px;
  background-color: white;
}
.carousel__pagination-item .carousel__pagination-button::after {
  width: 12px !important;
  height: 12px;
  background-color: white;
}
</style>
