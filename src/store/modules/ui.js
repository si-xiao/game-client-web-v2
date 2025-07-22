import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
    state: () => ({
        darkMode: false,
        screenSize: 'sm', // 默认小屏
        mobileMenuOpen: false
    }),
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
            document.documentElement.classList.toggle('dark-mode', this.darkMode)
        },
        setScreenSize(size) {
            this.screenSize = size
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
        }
    }
})