export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',
                secondary: '#10b981',
                dark: '#1e293b',
                light: '#f8fafc',
                aa: `linear-gradient(to right, #3b82f6, #10b981) !important`,
            },
            spacing: {
                // 直接用 px 单位 p-*、m-*、w-*、h-*
                '1px': '1px',
                '2px': '2px',
                '4px': '4px',
                '8px': '8px',
                '16px': '16px',
            },
            fontSize: {
                // 直接用 px 单位 text-12px
                '12px': '12px',
                '14px': '14px',
                '16px': '16px',
                '18px': '18px',
            },
            borderRadius: {
                // 直接用 px 单位 rounded-8px
                '4px': '4px',
                '8px': '8px',
            },
        },
        screens: {
            'sm': '640px',     // 小屏设备
            'md': '768px',     // 中屏设备
            'lg': '1024px',    // 大屏设备
            'xl': '1280px',    // 超大屏设备
        },
    },
    plugins: [],
}