import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const checkSession = (to: any, from: any, next: any) => {
  const session = Object.keys(localStorage).find((key) =>
    key.includes("SESSION")
  );
  const isLogin = session ? true : false;
  if (to.path !== 'login' && !isLogin) next({ path: '/login' })
  else next()
}

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
    component: () => import('../views/auth/login.vue'),
    meta: {
      title: 'Login',
      showMenu: false
    },
  },
  {
    path: '/register',
    component: () => import('../views/auth/register.vue'),
    meta: {
      title: 'Registro',
      showMenu: false
    }
  },
  {
    path: '/folder/Inicio',
    component: () => import('../views/inicio.vue'),
    meta: {
      title: 'Inicio',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/folder/Usuario',
    component: () => import('../views/usuario.vue'),
    meta: {
      title: 'Usuario',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/folder/Usuario-edit',
    component: () => import('../views/usuario-edit.vue'),
    meta: {
      title: 'Editar usuario',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/folder/Progreso',
    component: () => import('../views/progreso.vue'),
    meta: {
      title: 'Progreso',
      showMenu: true
    },
    beforeEnter: checkSession,
  },

  {
    path: '/folder/Recetas',
    component: () => import('../views/recetas.vue'),
    meta: {
      title: 'Recetas',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/folder/Menusemanal',
    component: () => import('../views/menusemanal.vue'),
    meta: { title: 'Menu Semanal', showMenu: true },
    beforeEnter: checkSession,
  },
  {
    path: '/folder/Menusemanal/:day',
    component: () => import('../views/menudiario.vue'),
    meta: { title: 'Menu Diario', showMenu: true },
    beforeEnter: checkSession,
  },
  {
    path: '/folder/Menusemanal/:day/recetas',
    component: () => import('../views/menudiariorecetas.vue'),
    meta: { title: 'Menu Diario Recetas', showMenu: true },
    beforeEnter: checkSession,
  },
  {
    path: '/folder/Ajustes',
    component: () => import('../views/ajustes.vue'),
    meta: {
      title: 'Ajustes',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/folder/registro',
    component: () => import('../views/registro.vue'),
    meta: {
      title: 'Registro',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/folder/Ayuda',
    component: () => import('../views/ayuda.vue'),
    meta: {
      title: 'Ayuda',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/RBeFit',
    component: () => import('../views/SubViews/RBeFit.vue'),
    meta: {
      title: 'Recetas BeFit',
      showMenu: true,
      isUser: false,
      url: 'RBeFit'
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/RBeFit/:id',
    component: () => import('../views/SubViews/RBeFitDetalle.vue'),
    meta: {
      title: 'Detalle',
      showMenu: true,
      isUser: false
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/RPublicas/:id',
    component: () => import('../views/SubViews/RPublicaDetalle.vue'),
    meta: {
      title: 'Detalle',
      showMenu: true,
      isUser: false
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/RUsuario/:id',
    component: () => import('../views/SubViews/RUsuarioDetalle.vue'),
    meta: {
      title: 'Detalle',
      showMenu: true,
      isUser: false
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/RUsuario',
    component: () => import('../views/SubViews/RUsuario.vue'),
    meta: {
      title: 'Recetas del usuario',
      showMenu: true,
      isUser: true,
      url: 'RUsuario'
    },
    beforeEnter: checkSession,
  },
  // {
  //   path: '/SubViews/Usuario',
  //   component: () => import('../views/SubViews/RUsuario.vue'),
  //   meta: {
  //     title: 'Crear Recetas del usuario',
  //     showMenu: true
  //   },
  //   beforeEnter: checkSession,
  // },
  
  {
    path: '/SubViews/crear-RUsuario',
    component: () => import('../views/SubViews/crear-RUsuario.vue'),
    meta: {
      title: 'Crear Recetas del usuario',
      showMenu: true,
      beforeEnter: checkSession
    }
  },  {
    path: '/SubViews/crear-RPublicas',
    component: () => import('../views/SubViews/crear-RPublicas.vue'),
    meta: {
      title: 'Crear Recetas públicas',
      showMenu: true,
      beforeEnter: checkSession,
    }
  },
  {
    path: '/SubViews/RBeFit',
    component: () => import('../views/SubViews/crear-RBeFit.vue'),
    meta: {
      title: 'Crear Recetas BeFit',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  
  {
    path: '/SubViews/crear-RBeFit',
    component: () => import('../views/SubViews/crear-RBeFit.vue'),
    meta: {
      title: 'Crear Recetas BeFit',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/editar-RBeFit/:id',
    component: () => import('../views/SubViews/editar-RBeFit.vue'),
    meta: {
      title: 'Editar Recetas BeFit',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/RUsuario/:id',
    component: () => import('../views/SubViews/RUsuarioDetalle.vue'),
    meta: {
      title: 'Detalle',
      showMenu: true,
      isUser: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/comidasDia',
    component: () => import('../views/SubViews/comidasDia.vue'),
    meta: {
      title: 'Alimentación diaria',
      showMenu: true,
      url: 'RUsuario'
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/comidasDiaP',
    component: () => import('../views/SubViews/comidasDia.vue'),
    meta: {
      title: 'Recetas Públicas',
      showMenu: true,
      url: 'RPublicas'
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/RPublicas',
    component: () => import('../views/SubViews/RPublicas.vue'),
    meta: {
      title: 'Recetas Públicas',
      showMenu: true,
      url: 'RPublicas'
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/listaUser',
    component: () => import('../views/SubViews/listaUser.vue'),
    meta: {
      title: 'Lista de usuarios',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/addDeporte',
    component: () => import('../views/SubViews/añadirDeporte.vue'),
    meta: {
      title: 'Añadir deporte',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/addDeporteList',
    component: () => import('../views/SubViews/añadirNuevoDeporte.vue'),
    meta: {
      title: 'Añadir nuevo deporte',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/editDeporteList/:id',
    component: () => import('../views/SubViews/editarNuevoDeporte.vue'),
    meta: {
      title: 'Editar nuevo deporte',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
  {
    path: '/SubViews/userListEdit/:id',
    component: () => import('../views/SubViews/userListEdit.vue'),
    meta: {
      title: 'Editar usuario',
      showMenu: true
    },
    beforeEnter: checkSession,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
