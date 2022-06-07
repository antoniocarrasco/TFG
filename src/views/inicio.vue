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
        <ion-item>GRAFICO PROGRESO DIARIO-OBJETIVO</ion-item>
        <h2 expand="full">-</h2>
        <ion-item @click="goTo('/SubViews/comidasDia')"
          >Añadir calorias de comidas</ion-item
        >
        <ion-item @click="goTo('/SubViews/addDeporte')"
          >Añadir deporte</ion-item
        >
        <ion-item>KCAL Objetivo: </ion-item>
        <ion-item>KCAL Actuales: {{ comida - sports }}</ion-item>
        <ion-item>KCAL Deporte: {{ sports }}</ion-item>
        <ion-item>KCAL Consumidas: {{ comida }}</ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import CacheService from "@/services/CacheService";
import ApiService from "@/services/ApiService";

const sports = ref(0);
const comida = ref(0);
const LAST_DAY = 1000 * 60 * 60 * 24 * 7;
const currentDay = new Date().getDay();

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
    const user: any = CacheService.user;
    ApiService.getSport(user.uid)
      .then((s) => {
        return Object.values(s)
          .filter((s_: any) => s_.date > new Date().getTime() - LAST_DAY)
          .map((s_: any) => {
            return { ...s_, day: new Date(s_.date).getDay() };
          });
      })
      .then((s) => {
        const sportToday = s.filter((s_) => s_.day === currentDay);
        console.log(sportToday);
        let total = 0;
        total = sportToday.reduce(
          (prev, today) => prev + +today.minutes * +today.sport,
          0
        );
        console.log(total);
        sports.value = total;
      });
    ApiService.getRDU(user.uid, new Date().getDay())
      .then((r) => {
        return Object.values(r);
      })
      .then((recipes: any[]) => {
        console.log(recipes);
        let total = 0;
        total = recipes.reduce((prev: any, recipe: any) => prev + +recipe.kgcal, 0);
        comida.value = total;
      });
    return {
      sports,
      comida,
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
