<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
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
    console.log(this.$route.meta.isUser);
    ApiService.getRecipesUser(userSession.uid).then((r) => {
      console.log('USER:',r);
      const aux = Object.values(r).map((a: any) => {
        return { ...a, type: "USER" };
      });
      recipesU.value.push(...aux);
    });
    ApiService.get("recipesP").then((r) => {
      console.log(r);
      const aux = Object.values(r).map((a: any) => {
        return { ...a, type: "PUBLIC" };
      });
      recipesP.value.push(...aux);
    });
    ApiService.get("recipes").then((r) => {
      console.log(r);
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
      console.log(userSession);
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
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgb(166, 228, 157);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  background: rgb(166, 228, 157);
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  background: rgb(166, 228, 157);
  margin: 0;
}
ion-title {
  color: #067a0c;
  font-weight: 700;
}

#container a {
  text-decoration: none;
  background: rgb(166, 228, 157);
}
</style>
