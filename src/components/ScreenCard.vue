<template>
  <div
      class="rounded-xl p-6 text-center transition-transform hover:scale-105"
      :class="[bgColor, textColor]"
  >
    <div class="text-5xl mb-4">{{ icon }}</div>
    <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
    <p class="text-lg">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  bgColor: String,
  textColor: String
})
</script>