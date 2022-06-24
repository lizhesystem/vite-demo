import { createApp } from 'vue'
import App from './App.vue'
// style
import './styles/css/index.css'
import './styles/scss/reset.scss'

// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// vue Router
import router from './route/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

// 注册element Icons组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
