import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "./router/index.js";
// createApp(App).mount('#app');
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')