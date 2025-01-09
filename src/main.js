// import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "./router/index.js";


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas);
library.add(fab);

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBpqEtHOJHYUeAj17e3NEpv_B-xnYJKXpo",
//   authDomain: "ip-project-469e5.firebaseapp.com",
//   projectId: "ip-project-469e5",
//   storageBucket: "ip-project-469e5.firebasestorage.app",
//   messagingSenderId: "800295359616",
//   appId: "1:800295359616:web:f0d72ad68e159d5fab0265"
// };

// initializeApp(firebaseConfig);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
