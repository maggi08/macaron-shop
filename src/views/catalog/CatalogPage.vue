<template>
  <UiBreadCrumbs class="catalog-bread-crumbs" :links="links" />
</template>

<script>
import UiBreadCrumbs from '@/components/ui/UiBreadCrumbs.vue'
export default {
  components: { UiBreadCrumbs },
  data() {
    return {
      links: [
        {
          text: 'Главная',
          path: '/'
        },
        {
          text: 'Каталог',
          path: '/catalog'
        }
        // { text: 'Готовые наборы',
        //   path: '/catalog/ready-boxes'
        // }
      ]
    }
  }
}
</script>

<style scoped>
.catalog-bread-crumbs {
  margin-top: 50px;
}
</style>
