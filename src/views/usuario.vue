<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.meta.title }} </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.meta.title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div expand="full" id="container">
        <ion-title>Datos personales</ion-title>
        <ion-list>
          <ion-item>
            <ion-label>
              <img :src="data.profile" />
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Nombre</h1>
              <h2>{{data.name}}</h2>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Sexo</h1>
              <h2>{{data.sex === 'H' ? 'Hombre' : 'Mujer' }}</h2>
              </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Peso (KG)</h1>
              <h2>{{ data.currentWeight}}</h2>
            </ion-label>
            
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Altura (cm)</h1>
              <h2>{{data.high}}</h2>
            </ion-label>
            
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Edad</h1>
              <h2>{{data.age }}</h2>
             </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Nivel de actividad física</h1>
              <h2>{{data.level === 'A' ? 'Alto' : data.level === 'M' ? 'Medio' : 'Bajo'}}</h2>
             </ion-label>
          </ion-item>
           
        </ion-list>
      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button color="primary" @click="goTo('/folder/Usuario-edit')">
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

console.log(CacheService.user);
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
    const userSession: any = CacheService.user;
    ApiService.getUser(userSession.uid).then((user: any) => {
      console.log("user", user);
      data.value = user;
    });
    return {
      data,
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
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgb(255, 255, 255);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  background: rgb(166, 228, 157);
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  background: rgb(166, 228, 157);
  margin: 0;
}
ion-title {
  color: #067a0c;
  font-weight: 700;
}

#container a {
  text-decoration: none;
  background: rgb(166, 228, 157);
}
</style>
