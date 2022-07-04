<template>
  <ion-page>
    <ion-header :translucent="true" class="bg-dark-green">
      <ion-toolbar class="bg-dark-green">
        <ion-buttons slot="start" class="bg-dark-green">
          <ion-menu-button color="secondary" class="bg-dark-green"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.meta.title }} {{ recipe.nombre }} </ion-title>
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
        <ion-item>
          <ion-label>
            <img class="imgCard" :src="recipe.image" />
          </ion-label>
        </ion-item>
        <ion-card>
          <ion-card-header>
            <ion-card-title class="bg-green">{{ recipe.nombre }}</ion-card-title>
            <ion-card-subtitle class="bg-green">Kcal totales: {{ recipe.kgcal }} KCal</ion-card-subtitle>
            <ion-card-content class="bg-green">
            {{ "Tiempo: " + recipe.tiempo + " mins" }}
          </ion-card-content>
          </ion-card-header>
        </ion-card>
        <ion-item class="bg-green">
          <ion-label class="ion-text-wrap"> Pasos a seguir: </ion-label>
        </ion-item>
        <ion-item class="bg-green" v-for="(step, index) in recipe.steps" lines="none" :key="index">
          <ion-label class="ion-text-wrap">
            Paso {{ index + 1 }}: {{ step.descripcion }}
            <img class="imgCard" :src="step.image" />
          </ion-label>
        </ion-item>
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

import ApiService from "@/services/ApiService";

import { defineComponent } from "vue";

import { ref } from "vue";
import CacheService from "@/services/CacheService";

const recipe: any = ref({});
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
    const userSession: any = CacheService.user;
    ApiService.get("recipesU/"+ userSession.uid + '/' + this.$route.params.id).then((r) => {
      
      recipe.value = r;
    });
    return {
      recipe,
    };
  },
});
</script>

<style scoped>
ion-title {
  color: rgb(214, 248, 209);
  font-weight: 700;
}

.imgCard {
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

</style>
