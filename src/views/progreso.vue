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
        <ion-item>Peso actual: {{ data.currentWeight }}</ion-item>
        <ion-item>Peso objetivo: {{ weights[0] - 5 }}</ion-item>
        <ion-item>
          <ion-label position="floating">Introducir peso actual: </ion-label>
          <ion-input v-model="currentWeight"></ion-input>
          <ion-button @click="updateWeight()">Actualizar</ion-button>
        </ion-item>
        
         <center>GRAFICO BAJADA DE PESO</center> 
        <!-- <ul id="example-1">
          <li v-for="weight in weights" :key="weight">
            {{ weight }}
          </li>
        </ul> -->
        <ChartLine
          v-if="chart.labels.length > 0"
          :labels="chart.labels"
          :datasets="chart.datasets"
        ></ChartLine>
        <div>
          <div>
            <!-- <button type="button" @click="shuffleData">Add data</button>
      <button type="button" @click="switchLegend">Swicth legends</button> -->
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import CacheService from "@/services/CacheService";

import ApiService from "@/services/ApiService";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { ref } from "vue";
import ChartLine from "./chart/chart-line";

const data: any = ref({});
const weights: any = ref([]);
const currentWeight: any = ref(0);
const chart: any = ref({ labels: [], datasets: [] });

export default {
  name: "Folder",
  components: {
    ChartLine,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonInput,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    const userSession: any = CacheService.user;
    ApiService.getUser(userSession.uid).then((user: any) => {
     
      weights.value = user.weights && Array.isArray(user.weights) ? user.weights : [];
      data.value = user;
      chart.value.labels = weights.value.map((w: any, i: any) => "Día " + i);
      
      chart.value.datasets = [
        {
          label: "Pesos",
          backgroundColor: "#067a0c",
          data: weights.value,
        },
        {
          label: "Objetivo",
          backgroundColor: "#bb1119",
          data: new Array(weights.value.length).fill(weights.value[0] - 5 ),
        },
      ];
      
    });
    return {
      currentWeight,
      data,
      weights,
      chart,
    };
  },
  methods: {
    updateWeight() {
      ApiService.postPeso(data.value.uid, [...weights.value, currentWeight.value]).then(
        (response) => {
          const userSession: any = CacheService.user;

          ApiService.getUser(userSession.uid).then((user: any) => {
            weights.value =
              user.weights && Array.isArray(user.weights) ? user.weights : [];
            data.value = user;
            chart.value.labels = [];
            chart.value.datasets = [
              {
                label: "Pesos",
                backgroundColor: "#067a0c",
                data: weights.value,
              },
              {
                label: "Objetivo",
                backgroundColor: "#bb1119",
                data: new Array(weights.value.length).fill(weights.value[0] - 5),
              },
            ];
            setTimeout(() => {
              chart.value.labels = weights.value.map((w: any, i: any) => "Día " + i);
            }, 0);
          });
        }
      );
    },
  },
};
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
center {
  margin: 30px;
  font-size: 25px;
  line-height: 22px;
  color: #067a0c;
  font-weight: 700;
}

#container a {
  text-decoration: none;
  background: rgb(255, 255, 255);
}
</style>
