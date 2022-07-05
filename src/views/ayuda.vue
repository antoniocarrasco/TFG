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
            <ion-label class="bg-green">
              <h1 class="bg-green">Contacta con nosotros:</h1>
              <h2 class="bg-green">antoniocarrasco@usal.es</h2>
              <h2 class="bg-green">+34 676120498</h2>
              <button class="bg-green" color="secondary" href="assets/Guia de usuario.pdf" download="Guía de usuario BeFit"> Descargar guia de usuario</button>
              
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
ion-title {
  color: rgb(214, 248, 209);
  font-weight: 700;
}
a{
  background: rgb(214, 248, 209);
  --background: rgb(214, 248, 209);
}


</style>