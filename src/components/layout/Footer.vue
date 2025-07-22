<template>
  <footer class="bg-gray-800 text-white py-8">
    <ResponsiveContainer>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 公司信息 -->
        <div>
          <h3 class="text-xl font-bold mb-4">响应式应用</h3>
          <p class="text-gray-300">
            基于Vue3 + Tailwind CSS构建的现代化响应式Web应用
          </p>
        </div>

        <!-- 快速链接 -->
        <div>
          <h4 class="text-lg font-semibold mb-4">快速链接</h4>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.name">
              <router-link
                  :to="link.path"
                  class="text-gray-300 hover:text-white transition"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div>
          <h4 class="text-lg font-semibold mb-4">联系我们</h4>
          <p class="text-gray-300 mb-2">邮箱：contact@example.com</p>
          <p class="text-gray-300">电话：+86 123-4567-8910</p>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        &copy; 2023 响应式应用. 保留所有权利.
      </div>
    </ResponsiveContainer>
  </footer>
</template>

<script setup>
import ResponsiveContainer from './ResponsiveContainer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const links = router.options.routes.map(route => ({
  name: route.meta?.title || route.name,
  path: route.path
}))
</script>