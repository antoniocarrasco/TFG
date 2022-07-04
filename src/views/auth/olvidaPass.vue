<template>
  <ion-page>
    <ion-header class="bg-green"  :translucent="true">
      <ion-toolbar class="bg-green" >
        <ion-title >{{ $route.meta.title }} </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header  collapse="condense">
        
        <ion-toolbar>
          <ion-title class="bg-green" size="large">{{ $route.meta.title }}</ion-title>
        </ion-toolbar>
      </ion-header>
          <ion-card-header>          
            <ion-card-title class="bg-green"></ion-card-title>
            <ion-card-subtitle class="bg-green"></ion-card-subtitle>
            <ion-card-content class="bg-green">
             <ion-button class="bg-dark-green" expand="block" @click="loginG">Google</ion-button>
          </ion-card-content>
          </ion-card-header>
        </ion-card>
    </ion-content>
  </ion-page>
</template>