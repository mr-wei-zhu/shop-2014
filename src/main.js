import { createApp } from 'vue'
import App from './App.vue'

import { Button } from 'vant';
import 'vant/lib/index.css';
import router from './router/index'
import vant from 'vant';





const app = createApp(App)
// app.prototype.$http = https;
app.use(Button);
app.use(router)
app.use(vant)
app.mount('#app')
