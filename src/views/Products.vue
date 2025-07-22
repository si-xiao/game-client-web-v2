<template>
  <ResponsiveContainer class="py-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-8">产品中心</h1>

    <!-- 产品筛选 -->
    <div class="mb-8 flex flex-col sm:flex-row gap-4">
      <input
          type="text"
          placeholder="搜索产品..."
          class="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
      >
      <select class="px-4 py-2 border rounded-lg bg-white">
        <option>所有分类</option>
        <option>科技产品</option>
        <option>家居用品</option>
      </select>
    </div>

    <!-- 产品列表 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </ResponsiveContainer>
</template>

<script setup>
import ResponsiveContainer from '@/components/layout/ResponsiveContainer.vue'
import ProductCard from '@/components/ProductCard.vue'
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: '智能手表',
    price: 899,
    category: '科技产品',
    image: 'https://via.placeholder.com/300'
  },
  // 更多产品数据...
])
</script>