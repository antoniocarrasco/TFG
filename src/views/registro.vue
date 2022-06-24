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
        <ion-item>Calorias semanales</ion-item>
        <ChartBar
          v-if="chart.labels.length > 0"
          :labels="chart.labels"
          :datasets="chart.datasets"
        ></ChartBar>
        
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
import ChartBar from "./chart/chart-bar";

const sports: any = ref([]);
const comida: any = ref([]);
const LAST_DAY = 1000 * 60 * 60 * 24 * 7;
const currentDay = new Date().getDay();
const chart: any = ref({ labels: [], datasets: [] });

export default defineComponent({
  name: "Folder",
  components: {
    ChartBar,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    sports.value = new Array(7).fill(0);
    comida.value = new Array(7).fill(0);
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
        sports.value = sports.value.map((sport: any, i: number) => {
          sport = 0;
          s.forEach((s_) => {
            if (+s_.day === i) {
              sport += +s_.minutes * +s_.sport;
            }
          });
          return sport;
        });
      })
      .then(() => {
        ApiService.getRDU(user.uid)
          .then((r) => {
            return Object.values(r);
          })
          .then((recipes: any[]) => {
            recipes.forEach((recipesPerDay) => {
              Object.values(recipesPerDay).forEach((recipe: any) => {
                comida.value[+recipe.day] += +recipe.kgcal;
              });
            });
          })
          .then(() => {
            chart.value.labels = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            
            chart.value.datasets = [
              {
                label: "Objetivo",
                backgroundColor: "#bb1119",
                data: new Array(7).fill(2000),
              },
              {
                label: "Deporte",
                backgroundColor: "#0D52E7",
                data: sports.value,
              },
              {
                label: "Consumidas",
                backgroundColor: "#067a0c",
                data: comida.value,
              },
            ];
            
          });
      });

    return {
      sports,
      comida,
      chart,
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
  background: rgb(255, 255, 255);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  background: rgb(255, 255, 255);
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  background: rgb(255, 255, 255);
  margin: 0;
}
ion-title {
  color: #067a0c;
  font-weight: 700;
}

#container a {
  text-decoration: none;
  background: rgb(255, 255, 255);
}
</style>
