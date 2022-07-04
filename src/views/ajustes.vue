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

      
        
            <ion-button class="buttonLogOut" @click=logOut()>Log Out</ion-button>
            <!-- Borrar usuario del log y devolver a página login-->
         </div>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { pencil } from "ionicons/icons";
import { defineComponent } from "vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
 
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

export default defineComponent({
  name: "Ajustes",
  mounted() {
    document.title = "page title";
    
    return {
      
      pencil
      
    };
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },

  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
   
    IonToolbar,
  },
});
</script>

<style scoped>
ion-title {
  color: rgb(214, 248, 209);
  font-weight: 700;
}

.buttonLogOut{
  width: 33.33%;
  display: flex;
  justify-content: center;
  transform: translateX(100%);
}
</style>
