### 步骤
1. 下载安装依赖
   npm install element-plus --save

2. 自动按需导入组件
   vite构建工具插件
   npm install -D unplugin-vue-components unplugin-auto-import

3. vite.config.js
    ```js
      // vite.config.js
        import { defineConfig } from 'vite'
        import AutoImport from 'unplugin-auto-import/vite'
        import Components from 'unplugin-vue-components/vite'
        import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

        export default defineConfig({
        // ...
        plugins: [
            // ...
            AutoImport({
            resolvers: [ElementPlusResolver()],
            }),
            Components({
            resolvers: [ElementPlusResolver()],
            }),
        ],
        })
    ```