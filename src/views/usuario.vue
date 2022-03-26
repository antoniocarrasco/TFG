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
      <div expand = "full" id="container"> 
        <ion-title>Datos personales</ion-title> 
         <ion-list>
          <ion-item>
            <ion-label position="floating">Nombre</ion-label>
            <ion-input ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Sexo</ion-label>
            <ion-input ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Peso(kg)</ion-label>
            <ion-input ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Altura(cm)</ion-label>
            <ion-input ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Edad</ion-label>
            <ion-input ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Nivel de actividad fisica</ion-label>
            <ion-input type="NivelAct" v-model="password"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Objetivo</ion-label>
            <ion-input type="Objetivo" v-model="Objetivo"></ion-input>
          </ion-item>
        
          
        </ion-list>
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