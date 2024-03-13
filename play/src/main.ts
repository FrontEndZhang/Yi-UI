import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import YiUi from '@yi-ui/global-component'

const app = createApp(App)

app.use(YiUi)

app.mount('#app')
