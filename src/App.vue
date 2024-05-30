<script>
import MFooter from '@/components/layouts/MFooter.vue'
import MHeader from '@/components/layouts/MHeader.vue'

export default {
  components: {
    MHeader,
    MFooter
  }
}
</script>

<template>
  <MHeader class="" />

  <main class="main">
    <RouterView />
  </main>

  <MFooter class="footer" />
</template>

<style scoped>
.main {
  min-height: 100vh;
}
</style>
