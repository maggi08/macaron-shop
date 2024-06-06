<template>
  <div class="UiTagItem tag-item">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>
.tag-item {
  font-size: 14px;
  background-color: var(--pink);
  padding: 12px;
  text-align: center;
  border-radius: 100px;
  white-space: nowrap;
  cursor: pointer;

  transition:
    background-color,
    color 300ms;
}
.tag-item:hover {
  background-color: var(--blue-100);
  color: white;
}
</style>
