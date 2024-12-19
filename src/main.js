import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Main from './components/Main.vue'
import VueSmoothScroll from 'v-smooth-scroll'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: Main },
  { path: '/rutube/:id', name: 'rutube', component: Main },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

const app = createApp(App)

app.use(router)
app.use(VueSmoothScroll, {
  updateHistory: false,
})
app.mount('#app')
