
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description ......
 * @date 2025-04-29
 */

import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router/router'
import store from './store'

const app = createApp(App)

app.use(router);
app.use(store);

app.mount('#app');


//createApp(App).mount('#app')


