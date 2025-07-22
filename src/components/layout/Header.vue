<template>
  <header class="bg-white dark:bg-gray-800 shadow-md py-4 sticky top-0 z-50">
    <ResponsiveContainer class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">
          <span class="text-white font-bold text-xl">R</span>
        </div>
        <h1 class="text-xl font-bold text-primary">响应式应用</h1>
      </div>

      <!-- 桌面导航 -->
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li v-for="route in routes" :key="route.name">
            <router-link
                :to="route.path"
                class="font-medium hover:text-primary transition-colors"
                :class="{'text-primary': $route.path === route.path}"
            >
              {{ route.meta.title }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- 右侧操作区 -->
      <div class="flex items-center space-x-4">
        <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg v-if="darkMode" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
          </svg>
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>

        <!-- 移动端菜单按钮 -->
        <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </ResponsiveContainer>

    <!-- 移动端导航菜单 -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 shadow-lg">
      <ResponsiveContainer class="py-4">
        <ul class="space-y-3">
          <li v-for="route in routes" :key="route.name">
            <router-link
                :to="route.path"
                class="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                :class="{'text-primary font-bold': $route.path === route.path}"
                @click="toggleMobileMenu"
            >
              {{ route.meta.title }}
            </router-link>
          </li>
        </ul>
      </ResponsiveContainer>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ResponsiveContainer from './ResponsiveContainer.vue'
import { useUIStore } from '@/store/modules/ui'

const router = useRouter()
const uiStore = useUIStore()

const routes = computed(() => router.options.routes)
const darkMode = computed(() => uiStore.darkMode)
const mobileMenuOpen = ref(false)

const toggleDarkMode = () => {
  uiStore.toggleDarkMode()
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>