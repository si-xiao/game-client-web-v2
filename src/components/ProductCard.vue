<template>
  <div class="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
    <div class="aspect-w-16 aspect-h-9 bg-gray-100">
      <img
          :src="product.image"
          :alt="product.name"
          class="object-cover w-full h-48"
      >
    </div>
    <div class="p-4">
      <h3 class="font-bold text-lg mb-1">{{ product.name }}</h3>
      <p class="text-gray-500 text-sm mb-2">{{ product.category }}</p>
      <div class="flex justify-between items-center">
        <span class="font-bold text-primary">¥{{ product.price }}</span>
        <button class="px-3 py-1 bg-primary text-white text-sm rounded hover:bg-primary-dark transition">
          加入购物车
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>