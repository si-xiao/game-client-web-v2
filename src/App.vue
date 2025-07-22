<template>
  <div :class="{'dark-mode': uiStore.darkMode}">
    <Header />
    <main class="min-h-screen">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { initResponsive } from '@/utils/responsive.js'
import { useUIStore } from '@/store/modules/ui.js'

const uiStore = useUIStore()

// 初始化响应式功能
const cleanup = initResponsive()

onUnmounted(() => {
  cleanup()
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>