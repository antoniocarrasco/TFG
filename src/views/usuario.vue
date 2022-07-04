<template>
  <ion-page>
    <ion-header :translucent="true" class="bg-dark-green">
      <ion-toolbar class="bg-dark-green">
        <ion-buttons slot="start" class="bg-dark-green">
          <ion-menu-button color="secondary" class="bg-dark-green"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.meta.title }} </ion-title>
        <ion-buttons slot="end" class="bg-dark-green">
           <img  src="assets/logofondoverde.png" height="60" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.meta.title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div expand="full" id="container">
        
        <ion-list class="bg-green">
          <ion-item class="bg-green" style="padding: 0">
            <ion-label class="bg-green">
              <img class="imgPerfil" :src="data.profile" />
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Nombre</h1>
              <h2>{{data.name}}</h2>
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Sexo</h1>
              <h2>{{data.sex === 'H' ? 'Hombre' : 'Mujer' }}</h2>
              </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Peso (KG)</h1>
              <h2>{{ data.currentWeight}}</h2>
            </ion-label>
            
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Altura (cm)</h1>
              <h2>{{data.high}}</h2>
            </ion-label>
            
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Edad</h1>
              <h2>{{data.age }}</h2>
             </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Objetivo</h1>
              <h2>{{data.obj === 'S' ? 'Subir de peso' : 'Bajar de peso' }}</h2> 
             </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Nivel de actividad física</h1>
              <h2>{{data.level === 'A' ? 'Alto' : data.level === 'M' ? 'Medio' : 'Bajo'}}</h2>
             </ion-label>
          </ion-item>
           <ion-item v-if="isAdmin" class="bg-green">
            <ion-label class="bg-green" @click="goTo('/SubViews/listaUser')" >
              <h1 >Lista de usuarios</h1>
             </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
   
    <ion-footer class="bg-dark-green">
      <ion-toolbar class="bg-dark-green">
        <ion-buttons slot="secondary" class="bg-dark-green">
          <ion-button color="secondary" class="bg-dark-green" @click="goTo('/folder/Usuario-edit')">
            Editar
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CacheService from "@/services/CacheService";
const isAdmin = ref();
import ApiService from "@/services/ApiService";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const data: any = ref({});


export default defineComponent({
  name: "Folder",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel, 
  },
  setup() {
    setTimeout(() => {
      isAdmin.value = CacheService.isAdmin;
    }, 1000);
    const userSession: any = CacheService.user;
    ApiService.getUser(userSession.uid).then((user: any) => {
      
      data.value = user;
      isAdmin.value = CacheService.isAdmin;
    });
    return {
      data,
      isAdmin,
    };
  },
  methods:{
    goTo(url: string) {
      this.$router.push(url);
    },
  }
});
</script>

<style scoped>


ion-title {
  color: rgb(214, 248, 209);
  font-weight: 700;
}

ion-page{
  background: rgb(214, 248, 209);
  --background: rgb(214, 248, 209);
}
body{
  background: rgb(214, 248, 209);
  --background: rgb(214, 248, 209);
}
ion-app{
  background: rgb(214, 248, 209);
  --background: rgb(214, 248, 209);
}
background-content{
  background: rgb(214, 248, 209);
  --background: rgb(214, 248, 209);
}
.imgPerfil{
    width:300px;
    height:300px;
    border-radius:150px;
    display:block;
    margin:auto;
}
</style>
