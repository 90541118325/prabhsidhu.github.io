<template>
  <header class="header">
    <h1>My Personal Site</h1>
    <ThemeToggle />
  </header>
</template>

<script setup>
import ThemeToggle from '~/components/ThemeToggle.vue';
</script>

<style scoped>
.header {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
