import { createApp } from 'vue'
import App from './App.vue'

import { Button } from 'vant';
import 'vant/lib/index.css';
import router from './router/index'
import vant from 'vant';
// import rem from './assets/js/rem.js'

const app = createApp(App)
// app.use(rem)
// app.prototype.$http = https;
app.use(Button);
app.use(router)
app.use(vant)
app.mount('#app')
