import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/InicioPage.vue'
import Canciones from '../views/CancionesPage.vue'
import Registro from '../views/RegistroPage.vue'
import LogIn from '../views/LogInPage.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Canciones',
    name: 'Canciones',
    component: Canciones
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
