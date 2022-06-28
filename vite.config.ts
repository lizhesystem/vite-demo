import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src")
		}
	},
	server:{
		host:'0.0.0.0',
		port: 3301, // 服务器端口号
		// https: false, // is Https
		open: true, // 是否自动打开浏览器
	}
})
