<template>
  <div class="UiBreadCrumbs bread-crumbs">
    <router-link
      :to="link.path"
      v-for="link in links"
      :key="link"
      class="bread-crumbs-item"
      :class="{ active: link.path === $route.path }"
    >
      <span>{{ link.text }}</span>
      <span v-if="link.path !== $route.path"> > </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.bread-crumbs {
  font-size: 14px;
  color: rgba(41, 41, 41, 0.46);
}
.bread-crumbs-item span {
  padding: 0 2px;
  color: inherit;
}
.bread-crumbs-item.active {
  color: var(--blue-100);
}
</style>
