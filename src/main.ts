import { createApp } from 'vue'
import App from './App.vue'
// style
import './styles/css/index.css'
import './styles/scss/reset.scss'
import './styles/scss/common.scss'

// iconfont css
import '@/assets/iconfont/iconfont.scss'

// Custom directives
import directives from '@/directives/index'

// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// vue Router
import router from './router/index'

import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

// cerate Pinia
const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)
app.use(ElementPlus).use(router).use(pinia).use(directives).mount('#app')

// 注册element Icons组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
