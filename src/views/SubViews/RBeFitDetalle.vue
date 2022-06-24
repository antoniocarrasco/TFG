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
        <ion-item>
          <ion-label>
            <img :src="recipe.image" />
          </ion-label>
        </ion-item>
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Kcal totales: {{ recipe.kgcal }}</ion-card-subtitle>
            <ion-card-title>{{ recipe.nombre }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            {{ "Tiempo: " + recipe.tiempo + " mins" }}
          </ion-card-content>
        </ion-card>
        <ion-item>
          <ion-label class="ion-text-wrap"> Pasos </ion-label>
        </ion-item>
        <ion-item v-for="(step, index) in recipe.steps" lines="none" :key="index">
          <ion-label class="ion-text-wrap">
            Paso {{ index + 1 }}: {{ step.descripcion }}
            <img :src="step.image" />
          </ion-label>
        </ion-item>
      </div>
    </ion-content>
    <ion-footer :translucent="true" v-if="isAdmin">
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button
            color="primary"
            expand="block"
            @click="goTo('/SubViews/editar-RBeFit/' + recipe.id)"
            >MODIFICAR</ion-button
          >
          <ion-button color="primary" expand="block" @click="deleteRBeFit()">
            ELIMINAR
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
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
const isAdmin = ref();
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
    if (this.$route.meta.isUser) {
      ApiService.get("recipesU/" + this.$route.params.id).then((r) => {
      
        recipe.value = r;
        isAdmin.value = CacheService.isAdmin;
      });
    } else {
      ApiService.get("recipes/" + this.$route.params.id).then((r) => {
        
        recipe.value = r;
        isAdmin.value = CacheService.isAdmin;
      });
    }
    return {
      recipe,
      isAdmin,
    };
  },
  methods: {
    goTo(url: string) {
      this.$router.push(url);
    },
    deleteRBeFit() {
      ApiService.deleteRBeFit(recipe.value.id).then((response) => {
        this.$router.push("/SubViews/RBeFit");
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
img {
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
