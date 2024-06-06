<template>
  <div class="CatalogPage container">
    <UiBreadCrumbs class="catalog-bread-crumbs" :links="links" />

    <h1 class="catalog-title mont">Готовые наборы</h1>

    <div class="catalog-tags">
      <UiTagItem v-for="tag in tags" :key="tag.id" :text="tag.name" class="catalog-tag-item" />
    </div>

    <ProductCatalog class="catalog-products">
      <template #bottom-btn>Показать ещё</template>
    </ProductCatalog>
  </div>
</template>

<script>
import UiBreadCrumbs from '@/components/ui/UiBreadCrumbs.vue'
import UiTagItem from '@/components/ui/UiTagItem.vue'
import ProductCatalog from '@/components/product/ProductCatalog.vue'
export default {
  components: { UiBreadCrumbs, UiTagItem, ProductCatalog },
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
      ],
      tags: [
        {
          id: 1,
          name: 'Свадьба'
        },
        {
          id: 2,
          name: 'Девичник'
        },
        {
          id: 3,
          name: 'День рождения'
        },
        {
          id: 4,
          name: '8 марта'
        },
        {
          id: 5,
          name: '23 февраля'
        },
        {
          id: 6,
          name: 'Новый год'
        },
        {
          id: 7,
          name: 'День учителя'
        },
        {
          id: 8,
          name: 'День тренера'
        },
        {
          id: 9,
          name: '1 сентября'
        },
        {
          id: 10,
          name: 'Пасха'
        },
        {
          id: 10,
          name: 'Без печати'
        }
      ]
    }
  }
}
</script>

<style scoped>
.catalog-bread-crumbs {
  display: flex;
  justify-content: center;
  margin: 40px auto 0;
}
.catalog-title {
  margin-top: 20px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}

.catalog-tags {
  margin-top: 36px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
.catalog-products {
  margin-bottom: 80px;
  margin-top: 40px;
}
</style>
