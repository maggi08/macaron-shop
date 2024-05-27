<template>
  <div class="MainAbout about container">
    <p class="about-title mont">Мы обо всём позаботились</p>

    <div class="about-catalog">
      <div class="about-item" v-for="item in aboutCatalog" :key="item">
        <img :src="item.img" class="about-item-img" />
        <p class="about-item-title mont">{{ item.title }}</p>
        <p class="about-item-description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      aboutCatalog: [
        {
          title: 'Лучшие ингрединты',
          description: 'Что-то про суперкачество, лучших поваров, свежесть и т.д.',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        },
        {
          title: 'Лучшие ингрединты',
          description: 'Что-то про суперкачество, лучших поваров, свежесть и т.д.',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        },
        {
          title: 'Лучшие ингрединты',
          description: 'Что-то про суперкачество, лучших поваров, свежесть и т.д.',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        },
        {
          title: 'Лучшие ингрединты',
          description: 'Что-то про суперкачество, лучших поваров, свежесть и т.д.',
          img: new URL('@/assets/img/news-1.png', import.meta.url).href
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-title {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}
.about-catalog {
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.about-item {
  width: 100%;
  max-width: 270px;
}
.about-item-img {
  width: 100%;
  height: 270px;
  object-fit: cover;
}
.about-item-title {
  font-size: 18px;
  font-weight: 600;
  margin-top: 28px;
}
.about-item-description {
  margin-top: 12px;
  font-size: 14px;
}
</style>
