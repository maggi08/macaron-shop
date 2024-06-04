<template>
  <div class="container category">
    <router-link :to="cat.link" v-for="cat in categories" :key="cat">
      <div class="category-item" :style="`background-color: #${cat.color}`">
        <img class="category-item-icon" :src="cat.img" alt="" />
        <p class="category-item-title mont">{{ cat.title }} <img src="./img/arrow.svg" alt="" /></p>
        <p class="category-item-descr" v-html="cat.descr"></p>
        <div class="category-item-cover" :style="`clip-path: polygon(${cat.cover})`"></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          img: new URL('./img/cat-1.svg', import.meta.url).href,
          title: 'Готовые наборы',
          descr: 'Готовые наборы со скидкой.<br/> Вы можете подобрать набор на подходящий случай.',
          color: 'FFDBC3',
          cover: '0 0, 100% 0, 0 100%',
          link: '/catalog'
        },
        {
          img: new URL('./img/cat-2.svg', import.meta.url).href,
          title: 'Собрать свой набор',
          descr: 'Выбрать количество макарун, и выбрать вкусы',
          color: 'FFC2CC',
          cover: '0 0, 100% 0, 100% 100%',
          link: '/create-box'
        },
        {
          img: new URL('./img/cat-3.svg', import.meta.url).href,
          title: 'Набор с индивидуальной печатью',
          descr: 'Собрать набор макарон с уникальным дизайном. ',
          color: 'B4EAB3',
          cover: '0 0, 0 100%, 100% 100%',
          link: '/print'
        },
        {
          img: new URL('./img/cat-4.svg', import.meta.url).href,
          title: 'Свадебные предложения',
          descr:
            'Нежные пирожные макаронс с разными вкусами <br/> для украшения вашего свадебного торжества',
          color: 'FDD5CD',
          cover: '100% 0, 100% 100%, 0 100%',
          link: '/wedding'
        },
        {
          img: new URL('./img/cat-5.svg', import.meta.url).href,
          title: 'Корпоративные подарки',
          descr:
            'От 85 руб за шт. С уникальным дизайном. <br/>Приятный комплимент для коллег и партнеров',
          color: 'A8DCDF',
          cover: '0 0, 100% 0, 0 100%',
          link: '/gifts'
        },
        {
          img: new URL('./img/cat-6.svg', import.meta.url).href,
          title: 'Оптовые поставки',
          descr:
            'Предложение для кофеен, кафе, отелей и т.д. <br/>Посмотрите условия сотрудничества и отзывы.',
          color: 'C4C6EC',
          cover: '0 0, 100% 0, 100% 100%',
          link: '/supplies'
        }
      ]
    }
  }
}
</script>

<style scoped>
.category {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px 30px;
  margin-bottom: 94px;
}
.category-item {
  position: relative;
  text-align: center;
  padding: 37px 12px 34px;
  height: 100%;
}
.category-item-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
}
.category-item-title {
  margin-top: 20px;
  font-weight: 600;
  font-size: 20px;
}
.category-item-title img {
  margin-left: 12px;
}
.category-item-descr {
  margin-top: 10px;
}
</style>
