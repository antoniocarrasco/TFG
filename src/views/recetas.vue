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

      <div id="container">
        <ion-card @click="goTo('/SubViews/comidasDia')">
          <img src="../../public/assets/comida2.jpg" />
          <ion-card-header>
            <ion-card-title>RECETAS DE USUARIO</ion-card-title>
          </ion-card-header>
          <ion-card-content> Listado de recetas personales del usuario. </ion-card-content>
        </ion-card>
        <ion-card @click="goTo('/SubViews/comidasDiaP')">
          <img src="../../public/assets/pasta.jpg" />
          <ion-card-header>
            <ion-card-title>RECETAS PUBLICAS</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Listado de recetas de usuarios que las comparten publicamente.
          </ion-card-content>
        </ion-card>
        <ion-card @click="goTo('/SubViews/RBeFit')">
          <img src="../../public/assets/comida3.jpeg" />
          <ion-card-header>
            <ion-card-title>RECETAS BEFIT</ion-card-title>
          </ion-card-header>
          <ion-card-content> Listado de recetas propias de la aplicación. </ion-card-content>
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
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgb(214, 248, 209);
}

ion-title {
  color: #067a0c;
  font-weight: 700;
}

#container a {
  text-decoration: none;
  background:  rgb(255, 255, 255);
}
ion-card {
  border: #8c8c8c;
  background: rgb(255, 255, 255);
  text-decoration-color: black;
}

img {
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
