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
        <ion-card
          @click="goTo('/SubViews/' + $route.meta.url + '/' + recipe.id)"
          v-for="recipe in recipes"
          :key="recipe"
        >
          <img class="imgCard" :src="recipe.image" />
          <ion-card-header>
            <ion-card-title class="bg-green">{{ recipe.nombre }}</ion-card-title>
          </ion-card-header>
          <ion-card-content class="bg-green"> {{ recipe.tiempo }} min</ion-card-content>
          <ion-card-content class="bg-green"> {{ recipe.kgcal }} KCAL</ion-card-content>
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

import ApiService from "@/services/ApiService";

import { defineComponent } from "vue";

import { ref } from "vue";
import CacheService from "@/services/CacheService";

const recipes: any = ref([]);
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
    console.log('r');
    ApiService.get("/recipesU/" + userSession.uid).then((r) => {
      console.log(r);
      recipes.value = r;
    });
    return {
      recipes,
    };
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

.imgCard {
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
