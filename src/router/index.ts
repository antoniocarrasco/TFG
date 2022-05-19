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
  {
    path: '/SubViews/RPropias',
    component: () => import ('../views/SubViews/RPropias.vue'),
    meta:{
      title:'Recetas propias',
      showMenu: true
    }
  },
  {
    path: '/SubViews/RBeFit',
    component: () => import ('../views/SubViews/RBeFit.vue'),
    meta:{
      title:'Recetas BeFit',
      showMenu: true,
      isUser: false,
      url: 'RBeFit'
    }
  },
  {
    path: '/SubViews/RBeFit/:id',
    component: () => import ('../views/SubViews/RBeFitDetalle.vue'),
    meta:{
      title:'Detalle',
      showMenu: true,
      isUser: false
    }
  },
  {
    path: '/SubViews/RUsuario',
    component: () => import ('../views/SubViews/RBeFit.vue'),
    meta:{
      title:'Recetas del usuario',
      showMenu: true,
      isUser: true,
      url: 'RUsuario'
    }
  },
  {
    path: '/SubViews/crear-RUsuario',
    component: () => import ('../views/SubViews/RUsuario.vue'),
    meta:{
      title:'Crear Recetas del usuario',
      showMenu: true
    }
  },
  {
    path: '/SubViews/RUsuario/:id',
    component: () => import ('../views/SubViews/RBeFitDetalle.vue'),
    meta:{
      title:'Detalle',
      showMenu: true,
      isUser: true
    }
  },
  {
    path: '/SubViews/progresoDia',
    component: () => import ('../views/SubViews/progresoDia.vue'),
    meta:{
      title:'Progreso diario',
      showMenu: true
    }
  },
  {
    path: '/SubViews/listDias',
    component: () => import ('../views/SubViews/listDias.vue'),
    meta:{
      title:'Semana',
      showMenu: true
    }
  },
  {
    path: '/SubViews/listDeportes',
    component: () => import ('../views/SubViews/listDeportes.vue'),
    meta:{
      title:'Deportes',
      showMenu: true
    }
  },
  {
    path: '/SubViews/listalimentos',
    component: () => import ('../views/SubViews/listalimentos.vue'),
    meta:{
      title:'Alimentos',
      showMenu: true
    }
  },
  {
    path: '/SubViews/explicaReceta',
    component: () => import ('../views/SubViews/explicaReceta.vue'),
    meta:{
      title:'Descripción de receta',
      showMenu: true
    }
  },
  {
    path: '/SubViews/comidasDia',
    component: () => import ('../views/SubViews/comidasDia.vue'),
    meta:{
      title:'Alimentación diaria',
      showMenu: true
    }
  },
  {
    path: '/SubViews/añadirReceta',
    component: () => import ('../views/SubViews/añadirReceta.vue'),
    meta:{
      title:'Añadir Receta',
      showMenu: true
    }
  },
  {
    path: '/SubViews/añadirDeporte',
    component: () => import ('../views/SubViews/añadirDeporte.vue'),
    meta:{
      title:'Añadir deporte',
      showMenu: true
    }
  },
  {
    path: '/SubViews/recetAli',
    component: () => import ('../views/SubViews/recetAli.vue'),
    meta:{
      title:'',
      showMenu: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
