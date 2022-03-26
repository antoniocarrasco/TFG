<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot ="start">
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
        <ion-list>SEMANA</ion-list>
        <ion-item>LUNES</ion-item>
        <ion-item>MARTES</ion-item>
        <ion-item>MIERCOLES</ion-item>
        <ion-item>JUEVES</ion-item>
        <ion-item>VIERNES</ion-item>
        <ion-item>SABADO</ion-item>
        <ion-item>DOMINGO</ion-item>
        <H6>LINK A CADA DIA</H6>   
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background:  rgb(166, 228, 157);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  background:  rgb(166, 228, 157);
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  background:  rgb(166, 228, 157);
  margin: 0;
}
ion-title{
  color:#067a0c;
  font-weight: 700;
}

#container a {
  text-decoration: none;
  background:  rgb(166, 228, 157);
}
</style>