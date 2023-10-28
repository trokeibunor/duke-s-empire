import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(TawkMessengerVue, {
    propertyId : '653d4c7cf2439e1631e97146',
    widgetId : '1hdrn5hri'
})
app.use(createPinia())
app.use(router)

app.mount('#app')
