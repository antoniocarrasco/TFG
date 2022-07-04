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
        <ion-list>Añadido</ion-list>
        BFit
        <div v-for="recipe in recipes" :key="recipe">
          <ion-item @click="add(recipe)">
            {{ recipe.nombre }}
          </ion-item>
        </div>
        Públicas
        <div v-for="recipe in recipesP" :key="recipe">
          <ion-item @click="add(recipe)">
            {{ recipe.nombre }}
          </ion-item>
        </div>
        Usuario
        <div v-for="recipe in recipesU" :key="recipe">
          <ion-item @click="add(recipe)">
            {{ recipe.nombre }}
          </ion-item>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import ApiService from "@/services/ApiService";
import CacheService from "@/services/CacheService";
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
import { ref } from "vue";

const recipes: any = ref([]);
const recipesP: any = ref([]);
const recipesU: any = ref([]);

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
    recipes.value=[];
    recipesP.value=[];
    recipesU.value=[];
    const userSession: any = CacheService.user;
    
    ApiService.getRecipesUser(userSession.uid).then((r) => {
     ;
      const aux = Object.values(r).map((a: any) => {
        return { ...a, type: "USER" };
      });
      recipesU.value.push(...aux);
    });
    ApiService.get("recipesP").then((r) => {
      
      const aux = Object.values(r).map((a: any) => {
        return { ...a, type: "PUBLIC" };
      });
      recipesP.value.push(...aux);
    });
    ApiService.get("recipes").then((r) => {
      
      if (r && Array.isArray(r)) {
        const aux = r.map((a) => {
          return { ...a, type: "BFIT" };
        });
        recipes.value.push(...aux);
      }
    });
    return {
      recipes,
      recipesP,
      recipesU,
    };
  },
  methods: {
    add(recipe: any) {
      const userSession: any = CacheService.user;
      
      const day = this.$route.params.day;
      ApiService.postRDU(userSession.uid, day, {
        ...recipe,
        day,
        uid: userSession.uid,
      }).then(() => {
        const day = this.$route.params.day;
        this.$router.push(`/folder/menusemanal/${day}`);
      });
    },
  },
});
</script>

<style scoped>
ion-title {
  color: rgb(214, 248, 209);
  font-weight: 700;
}
</style>
