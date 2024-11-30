<template>
    <article class="border p-4 mb-4">
      <h2 class="text-xl font-bold">{{ title }}</h2>
      <p>{{ content }}</p>
    </article>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    content: String,
  });
  </script>
  