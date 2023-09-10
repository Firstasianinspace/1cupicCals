import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/svg-ionicons-v6'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import About from './views/About.vue'

// Import icon libraries
import '@quasar/extras/ionicons-v4/ionicons-v4.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import './assets/styles/main.scss'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/about', component: About }
  ]
})

myApp.use(router)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  iconSet: quasarIconSet,
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')