import { useUIStore } from '@/store/modules/ui'

export function initResponsive() {
    const uiStore = useUIStore()

    const updateScreenSize = () => {
        const width = window.innerWidth
        if (width < 640) uiStore.setScreenSize('sm')
        else if (width < 1024) uiStore.setScreenSize('md')
        else uiStore.setScreenSize('lg')
    }

    // 初始检测
    updateScreenSize()

    // 监听窗口变化
    window.addEventListener('resize', updateScreenSize)

    // 清理函数
    return () => {
        window.removeEventListener('resize', updateScreenSize)
    }
}