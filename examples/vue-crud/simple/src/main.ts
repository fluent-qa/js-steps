import { createApp } from 'vue'
import App from './App.vue'
// import {store} from './store'
import {state} from './store/nameState'
import router from './router'

createApp(App).provide('state',state).use(router).mount('#app')
