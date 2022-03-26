import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
 /* {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },*/
  {
    path: '/login',
    component: () => import ('../views/auth/login.vue'),
    meta:{
      title:'Login',
      showMenu: false
    },
  },
  {
    path: '/register',
    component: () => import ('../views/auth/register.vue'),
    meta:{
      title:'Registro',
      showMenu: false
    }
  },
  {
    path: '/folder/Inicio',
    component: () => import ('../views/inicio.vue'),
    meta:{
      title:'Inicio',
      showMenu: true
    },
  },
  {
    path: '/folder/Usuario',
    component: () => import ('../views/usuario.vue'),
    meta:{
      title:'Usuario',
      showMenu: true
    }
  },
  {
    path: '/folder/Progreso',
    component: () => import ('../views/progreso.vue'),
    meta:{
      title:'Progreso',
      showMenu: true
    }
  },

  {
    path: '/folder/Recetas',
    component: () => import ('../views/recetas.vue'),
    meta:{
      title:'Recetas',
      showMenu: true
    }
  },
  {
    path: '/folder/Menusemanal',
    component: () => import ('../views/menusemanal.vue'),
    meta:{title:'Menu Semanal',showMenu: true}
  },
  {
    path: '/folder/Ajustes',
    component: () => import ('../views/ajustes.vue'),
    meta:{
      title:'Ajustes',
      showMenu: true
    }
  },
  {
    path: '/folder/registro',
    component: () => import ('../views/registro.vue'),
    meta:{
      title:'Registro',
      showMenu: true
    }
  },
  {
    path: '/folder/Ayuda',
    component: () => import ('../views/ayuda.vue'),
    meta:{
      title:'Ayuda',
      showMenu: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
