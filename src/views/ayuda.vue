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
            <ion-label>
              <h1>Contacta con nosotros:</h1>
              <h2>antoniocarrasco@usal.es</h2>
              <h2>+34 676120498</h2>
              <a href="assets/maqueta anexo ii tfg.pdf" download="Guía de usuario BeFit"> Descargar guia de usuario</a>
            </ion-label>
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
ion-title{
  color:#067a0c;
  font-weight: 700;
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgb(255, 255, 255);
}
ion-content {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgb(255, 255, 255);
}

</style>