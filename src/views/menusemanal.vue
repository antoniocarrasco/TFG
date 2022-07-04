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
         <center>SEMANA</center>
        <ion-list>
          <ion-item class="bg-green" @click="goTo('/folder/menusemanal/1')">LUNES</ion-item>
          <ion-item class="bg-green" @click="goTo('/folder/menusemanal/2')">MARTES</ion-item>
          <ion-item class="bg-green" @click="goTo('/folder/menusemanal/3')">MIERCOLES</ion-item>
          <ion-item class="bg-green" @click="goTo('/folder/menusemanal/4')">JUEVES</ion-item>
          <ion-item class="bg-green" @click="goTo('/folder/menusemanal/5')">VIERNES</ion-item>
          <ion-item class="bg-green" @click="goTo('/folder/menusemanal/6')">SABADO</ion-item>
          <ion-item class="bg-green" @click="goTo('/folder/menusemanal/0')">DOMINGO</ion-item>
        </ion-list>
        
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
center {
  margin: 30px;
  font-size: 25px;
  line-height: 22px;
  
  color: #067a0c;
  font-weight: 700;
}



</style>
