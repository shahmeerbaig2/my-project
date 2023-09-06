import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useRoute } from 'vue-router';
import router from './router'; 

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(useRoute).mount('#app');
