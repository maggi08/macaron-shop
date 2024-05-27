<template>
  <div class="NewsCard">
    <div class="card">
      <img class="card-img" :src="newsItem.img" alt="" />
      <div class="card-info">
        <p class="card-date mont">{{ newsItem.date }}</p>
        <p class="card-title mont">{{ newsItem.title }}</p>
        <p class="card-descr">{{ newsItem.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  props: {
    newsItem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 2px solid var(--gray);
  border-radius: 4px;
  overflow: hidden;
  text-align: start;
}
.card-img {
  width: 100%;
  height: 210px;
  object-fit: cover;
}
.card-date {
  font-size: 14px;
}
.card-info {
  padding: 20px 20px 36px;
  background: white;
}
.card-title {
  margin-top: 12px;
  font-size: 18px;
  font-weight: 600;
}
.card-descr {
  margin-top: 12px;
  font-size: 14px;
}
</style>
