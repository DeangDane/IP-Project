// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "./router/index.js";

import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
