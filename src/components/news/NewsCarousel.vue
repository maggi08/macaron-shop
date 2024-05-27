<template>
  <div class="NewsCarousel news container">
    <p class="news-title mont">Новости</p>

    <Carousel
      class="news-carousel"
      :transition="500"
      :items-to-show="3"
      :items-to-scroll="3"
      :snap-align="'start'"
    >
      <Slide v-for="item in news" :key="item">
        <!-- <pre>{{ item }}</pre> -->
        <NewsCard :news-item="item" class="news-carousel-item" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <UiButton class="news-btn"> Все новости </UiButton>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import NewsCard from './NewsCard.vue'
import UiButton from '../ui/UiButton.vue'

export default {
  components: {
    Pagination,
    Carousel,
    Slide,
    NewsCard,
    UiButton
  },
  data() {
    return {
      news: [
        {
          title: 'Скоро главный праздник весны!',
          description:
            'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
          date: '25.02.2023',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        },
        {
          title: 'Скоро главный праздник весны!',
          description:
            'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
          date: '25.02.2023',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        },
        {
          title: 'Скоро главный праздник весны!',
          description:
            'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
          date: '25.02.2023',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        },
        {
          title: 'Скоро главный праздник весны!',
          description:
            'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
          date: '25.02.2023',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        },
        {
          title: 'Скоро главный праздник весны!',
          description:
            'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
          date: '25.02.2023',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        },
        {
          title: 'Скоро главный праздник весны!',
          description:
            'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
          date: '25.02.2023',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        }
      ]
    }
  }
}
</script>

<style scoped>
.news-title {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}
.news-catalog {
  margin-top: 42px;
}
.news-carousel {
  margin-top: 40px;
}
.news-carousel-item {
  width: 100%;
  padding: 0 15px;
  /* overflow: hidd; */
}
.news-btn {
  max-width: 192px;
  margin: 36px auto 0;
  display: flex;
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
