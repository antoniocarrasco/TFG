import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/login'
  },
 /* {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },*/
  {
    path: '/folder/Inicio',
    component: () => import ('../views/inicio.vue'),
    meta:{title:'Inicio'},
  },
  {
    path: '/login',
    component: () => import ('../views/login.vue'),
    meta:{title:'Login'},
  },
  {
    path: '/folder/Usuario',
    component: () => import ('../views/usuario.vue'),
    meta:{title:'Usuario'}
  },
  {
    path: '/folder/Progreso',
    component: () => import ('../views/progreso.vue'),
    meta:{title:'Progreso'}
  },
  {
    path: '/folder/Registro',
    component: () => import ('../views/registro.vue'),
    meta:{title:'Registro'}
  },
  {
    path: '/folder/Recetas',
    component: () => import ('../views/recetas.vue'),
    meta:{title:'Recetas'}
  },
  {
    path: '/folder/MenuSemanal',
    component: () => import ('../views/menusemanal.vue'),
    meta:{title:'Menu Semanal'}
  },
  {
    path: '/folder/Ajustes',
    component: () => import ('../views/ajustes.vue'),
    meta:{title:'Ajustes'}
  },
  {
    path: '/folder/Ayuda',
    component: () => import ('../views/ayuda.vue'),
    meta:{title:'Ayuda'}
  },
  {
    path: '/folder/Login',
    component: () => import ('../views/login.vue'),
    meta:{title:'Login', /*requiresAuth: true*/}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
