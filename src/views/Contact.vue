<template>
  <ResponsiveContainer class="py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- 联系表单 -->
      <div>
        <h1 class="text-3xl md:text-4xl font-bold mb-8">联系我们</h1>
        <form class="space-y-4">
          <div>
            <label class="block mb-1">姓名</label>
            <input
                type="text"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            >
          </div>
          <div>
            <label class="block mb-1">邮箱</label>
            <input
                type="email"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            >
          </div>
          <div>
            <label class="block mb-1">留言</label>
            <textarea
                rows="4"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
              type="submit"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            提交
          </button>
        </form>
      </div>

      <!-- 联系信息 -->
      <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
        <h2 class="text-2xl font-bold mb-6">联系方式</h2>
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="text-primary mr-4 mt-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">电话</h3>
              <p class="text-gray-600 dark:text-gray-300">+86 123-4567-8910</p>
            </div>
          </div>
          <!-- 更多联系信息... -->
        </div>
      </div>
    </div>
  </ResponsiveContainer>
</template>

<script setup>
import ResponsiveContainer from '@/components/layout/ResponsiveContainer.vue'
</script>