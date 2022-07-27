import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src")
		}
	},
	// global css
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/styles/scss/var.scss";`
			}
		}
	},
	server:{
		hmr:true,
		host:'0.0.0.0',
		port: 3301, // 服务器端口号
		// https: false, // is Https
		open: true, // 是否自动打开浏览器
		// 代理跨域
		proxy: {
			"/api": {
				target: "http://127.0.0.1:8889",
				// changeOrigin 会影响到请求的Origin,
				// 默认情况下，代理时会保留主机头的来源，可以将 changeOrigin 设置为 true , 如果设置成true, 发送请求头中host会设置成target。
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			}
		}
	},
	plugins: [
		vue(),
		// gzip compress
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: "gzip",
			ext: ".gz"
		}),
		// 查看打包体积大小
		visualizer()
	],
	// build configure
	build: {
		outDir: "dist",
		// assetsDir: "assets",
		minify: "terser",
		terserOptions: {
			// delete console/debugger
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		},
		rollupOptions: {
			output: {
				// Static resource classification and packaging
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",
				assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
			}
		}
	}
})
