<template>
  <button class="UiButton ui-button mont">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.ui-button {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
  border: 1px solid var(--blue-100);

  font-weight: 600;
  font-size: 14px;
  background-color: transparent;

  cursor: pointer;

  transition: all 300ms;
}

.ui-button:hover {
  background-color: var(--blue-100);
  color: white;
}
</style>
