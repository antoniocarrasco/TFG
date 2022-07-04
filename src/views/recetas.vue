<template>
  <ion-page>
    <ion-header :translucent="true" class="bg-dark-green">
      <ion-toolbar class="bg-dark-green">
        <ion-buttons slot="start" class="bg-dark-green">
          <ion-menu-button color="secondary" class="bg-dark-green"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.meta.title }} </ion-title>
        <ion-buttons slot="end" class="bg-dark-green">
           <img src="assets/logofondoverde.png" height="60" />
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
        <ion-card @click="goTo('/SubViews/comidasDia')">
          <img class="imgCard" src="../../public/assets/comida2.jpg" />
          <ion-card-header>
            <ion-card-title>RECETAS DE USUARIO</ion-card-title>
          </ion-card-header>
          <ion-card-content> Listado de recetas personales del usuario </ion-card-content>
        </ion-card>
        <ion-card @click="goTo('/SubViews/comidasDiaP')">
          <img class="imgCard" src="../../public/assets/pasta.jpg" />
          <ion-card-header>
            <ion-card-title>RECETAS PUBLICAS</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Listado de recetas de usuarios que las comparten publicamente
          </ion-card-content>
        </ion-card>
        <ion-card @click="goTo('/SubViews/RBeFit')">
          <img class="imgCard" src="../../public/assets/comida3.jpeg" />
          <ion-card-header>
            <ion-card-title>RECETAS BEFIT</ion-card-title>
          </ion-card-header>
          <ion-card-content> Listado de recetas propias de la aplicación </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import { defineComponent } from "vue";
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
  },
  data() {
    return {};
  },
  methods: {
    goTo(url: string) {
      this.$router.push(url);
    },
  },
});
</script>

<style scoped> 

ion-title {
  color: rgb(214, 248, 209);
  font-weight: 700;
}


ion-card {
  border: #8c8c8c;
  background: rgb(255, 255, 255);
  text-decoration-color: black;
}

.imgCard {
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
