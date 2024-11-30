<template>
    <button @click="toggleTheme" class="theme-toggle">
      Switch to {{ isDark ? 'Light' : 'Dark' }} Theme
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isDark = ref(false);
  
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light');
  };
  </script>
  
  <style scoped>
  .theme-toggle {
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .theme-toggle:hover {
    background-color: var(--secondary-color);
  }
  </style>
  