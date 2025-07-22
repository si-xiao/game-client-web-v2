import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig((env) => {
  const evnMap = loadEnv(env.mode, process.cwd());
  console.log(`当前运行环境配置信息 evnMap = ${JSON.stringify(evnMap)}`);

  return {
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径别名
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
        '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
        // 打包时防止 lottie-web/build/player/lottie.js 警告(Use of eval in "node_modules/lottie-web/build/player/lottie.js" is strongly discouraged as it poses security risks and may cause issues with minification.)
        // 这里设置 lottie-web 的引入别名，默认引入 lottie_light.js， 避免使用 eval 函数使用（After Effects 的复杂表达式）导致xss攻击
        // "lottie-web": path.resolve(__dirname, "node_modules/lottie-web/build/player/lottie_light.js")
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'
        }
      }
    },
    define: {
      // 屏蔽 Feature flag __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ is not explicitly defined 警告
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    },
    plugins: [
      vue(),
      // AutoImport({
      //   resolvers: [],
      // }),
      // Components({
      //   resolvers: [],
      // }),
      VitePWA({
        // 开发环境禁用 PWA
        disable: evnMap.VITE_ENV_MODE === 'dev',
        registerType: 'autoUpdate', // 自动更新策略
        injectRegister: 'auto', // 自动注入注册逻辑
        manifest: {
          name: 'CC Game',
          short_name: 'cc',
          description: 'An awesome Progressive Web App',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone', // 隐藏浏览器UI
          start_url: '/', // 启动路径
          icons: [
            {
              src: '/logo-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/logo-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg}'], // 缓存策略
          runtimeCaching: [ // 自定义API缓存
            {
              urlPattern: /^https:\/\/client\.kkgametop\.xyz/,
              // urlPattern: /^http:\/\/192\.168\.50\.224:9212/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 24 * 60 * 60 // 24小时
                }
              },
            },
          ],
          clientsClaim: true, // 立即被新 Service Worker 控制，使用新版本内容
          cleanupOutdatedCaches: true, // 自动清理旧缓存
          skipWaiting: true // 新SW立即接管
        },
        devOptions: {
          enabled: evnMap.VITE_ENV_MODE === 'dev', // 开发模式启用
          type: 'module', // 使用模块模式
          navigateFallback: 'index.html' // 单页应用回退
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`
        }
      }
    },
    server: {
      port: 80,
      host: '0.0.0.0',
      open: false,
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        [evnMap.VITE_APP_PROXY_BASE_API]: {
          // 被代理的目标真实请求地址
          target: evnMap.VITE_DOMAIN,
          changeOrigin: true,
          rewrite: (p) => p.replace(new RegExp('^' + evnMap.VITE_APP_PROXY_BASE_API), ''),
          bypass: (req, res, options) => {
            const proxyUrl = options.target + options.rewrite(req.url);
            console.log(`真实请求的完整地址proxyUrl: ${proxyUrl}`);
          },
          // configure: (proxy, options) => {
          //     proxy.on('proxyReq', (proxyReq, req, res) => {
          //         // 修改请求头的origin
          //         proxyReq.setHeader('origin', 'http://192.168.1.111');
          //     });
          // }
        }
      }
    },
  };
})
