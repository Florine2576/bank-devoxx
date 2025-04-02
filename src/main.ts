import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import services from './plugins/services'

const app = createApp(App)
app.use(router)
app.use(services)
app.mount('#app')
