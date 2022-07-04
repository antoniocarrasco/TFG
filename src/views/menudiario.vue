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
        <ion-list class="bg-green"></ion-list>
        <ion-card v-for="recipe in recipes" :key="recipe">
          <img class="imgCard" :src="recipe.image" />
          <ion-card-header class="bg-green">
            <ion-card-title class="bg-green">{{ recipe.nombre }}</ion-card-title>
          </ion-card-header>
          <ion-card-content class="bg-green"> {{ recipe.tiempo}} min</ion-card-content>
          <ion-card-content class="bg-green"> {{ recipe.kgcal}} KCAL</ion-card-content>
        </ion-card>
      </div>
    </ion-content>
    <ion-footer class="bg-dark-green" :translucent="true">
      <ion-toolbar class="bg-dark-green">
        <ion-buttons slot="secondary" class="bg-dark-green">
          <ion-button color="secondary" class="bg-dark-green" @click="goTo('/folder/menusemanal/'+$route.params.day+'/recetas')">
            Añadir
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="secondary" class="bg-dark-green" @click="deleteRecipe()">
          <ion-button font-weight="700" color="danger" class="deleteAll"> Borrar todo </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import ApiService from "@/services/ApiService";
import CacheService from "@/services/CacheService";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonFooter,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { ref } from "vue";

const recipes: any = ref([]);

export default defineComponent({
  name: "Folder",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonFooter,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  methods: {
    goTo(url: string) {
      this.$router.push(url);
    },
    deleteRecipe() {
      const userSession: any = CacheService.user;
      const day = this.$route.params.day;
      ApiService.deleteRDU(userSession.uid, day)
      
    },
  },
  data() {
    const userSession: any = CacheService.user;
    const day = this.$route.params.day;
    ApiService.getRDUday(userSession.uid, day).then((r) => {
      if (r) {
        
        recipes.value = Object.values(r);
      }
    });
    return {
      recipes,
    };
  },
});
</script>

<style scoped>
ion-title {
  color: rgb(214, 248, 209);
  font-weight: 700;
}
.deleteAll{
  font-weight: 700;
  ;
  
}
.imgCard {
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
