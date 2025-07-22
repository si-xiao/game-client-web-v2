<template>
  <div class="min-h-screen">
    <section class="py-12 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <ResponsiveContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-1px bg-">
              现代化响应式应用
            </h1>
            <p class="text-xl opacity-90 mb-8">
              基于Vue3 + Vite + Tailwind CSS + Pinia构建，完美适配所有屏幕尺寸
            </p>
            <div class="flex flex-wrap gap-4">
              <button class="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
                开始使用
              </button>
              <button class="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition">
                了解更多
              </button>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <div class="absolute -top-6 -left-6 w-full h-full rounded-2xl border-4 border-white opacity-30"></div>
              <div class="relative bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <span class="text-gray-500">主视觉图</span>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </section>

    <section class="py-16 bg-white dark:bg-gray-800">
      <ResponsiveContainer>
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">响应式设计优势</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
              v-for="(feature, index) in features"
              :key="index"
              :title="feature.title"
              :description="feature.description"
              :icon="feature.icon"
          />
        </div>
      </ResponsiveContainer>
    </section>

    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <ResponsiveContainer>
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">屏幕尺寸适配展示</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScreenCard
              title="小屏设备"
              description="640px以下 (手机)"
              bgColor="bg-red-100"
              textColor="text-red-700"
              icon="📱"
          />
          <ScreenCard
              title="中屏设备"
              description="768px以上 (平板)"
              bgColor="bg-blue-100"
              textColor="text-blue-700"
              icon="💻"
          />
          <ScreenCard
              title="大屏设备"
              description="1024px以上 (桌面)"
              bgColor="bg-green-100"
              textColor="text-green-700"
              icon="🖥️"
          />
        </div>
      </ResponsiveContainer>
    </section>
  </div>
</template>

<script setup>
import ResponsiveContainer from '@/components/layout/ResponsiveContainer.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import ScreenCard from '@/components/ScreenCard.vue'

const features = [
  {
    title: '完美适配',
    description: '针对小屏、中屏、大屏设备提供最佳用户体验',
    icon: '📱💻🖥️'
  },
  {
    title: '高性能',
    description: '基于Vite构建，极速热更新，开发体验流畅',
    icon: '⚡'
  },
  {
    title: '现代化UI',
    description: 'Tailwind CSS提供美观且一致的界面设计',
    icon: '🎨'
  },
  {
    title: '状态管理',
    description: 'Pinia提供简洁高效的状态管理方案',
    icon: '📊'
  }
]
</script>