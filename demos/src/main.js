import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import  Vui from "@itshizhan/vui"
import "@itshizhan/vui/lib/index.css"
import router from './router'

const app = createApp(App)
app.use(Vui).use(router)
app.mount('#app')

