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
        <ion-item v-for="recipe in recipes" :key="recipe">
          {{ recipe.nombre }}
        </ion-item>
      </div>
    </ion-content>
    <ion-footer :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button color="primary" @click="goTo('/folder/menusemanal/'+$route.params.day+'/recetas')">
            Añadir
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary" @click="deleteRecipe()">
          <ion-button color="danger"> Borrar todo </ion-button>
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
    ApiService.getRDU(userSession.uid, day).then((r) => {
      if (r) {
        console.log(Object.values(r));
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
