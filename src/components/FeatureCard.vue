<template>
  <div class="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
    <div class="text-4xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p class="text-gray-600 dark:text-gray-300">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String
})
</script>