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
        <center>GRAFICO RESUMEN</center>
        
        <ChartBar class="bg-green"
          v-if="chart.labels.length > 0"
          :labels="chart.labels"
          :datasets="chart.datasets"
        ></ChartBar>
       
        
        
        
        <ion-item class="bg-green">Objetivo de calorias finales: 2200 KCAL</ion-item>
        <ion-item class="bg-green">Calorias actuales: {{ comida - sports }} KCAL</ion-item>
        <ion-item class="bg-green">Calorias gastadas: {{ sports }} KCAL</ion-item>
        <ion-item class="bg-green">Calorias consumidas: {{ comida }} KCAL</ion-item>
      
      <ion-button class="bg-blue" @click="goTo('/SubViews/addDeporte')">AÑADIR DEPORTE</ion-button>
     
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ChartBar from "./chart/chart-bar";
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
    const user: any = CacheService.user;

 
    console.log(user);
    ApiService.getUser(user.uid).then((info: any) => {
      if(!info){
      this.$router.push('/folder/Usuario-edit');
      }
    });

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
       
        let total = 0;
        total = sportToday.reduce(
          (prev, today) => prev + +today.minutes * +today.sport,
          0
        );
        
        sports.value = total;
      });
    ApiService.getRDUday(user.uid, new Date().getDay())
      .then((r) => {
        return Object.values(r);
      })
      .then((recipes: any[]) => {
        
        let total = 0;
        total = recipes.reduce((prev: any, recipe: any) => prev + +recipe.kgcal, 0);
        comida.value = total;
      }); 
      
      chart.value.labels =['KCAL'];
      
      chart.value.datasets = [
        {
          label: 'Objetivo',
          backgroundColor: '#bb1119',
          data: [2000]
        },
        {
          label: 'Actual',
          backgroundColor: '#8CC46E',
          data: [comida.value - sports.value]
        },
        {
          label: 'Deporte',
          backgroundColor: '#68C9F3',
          data: [-sports.value]
        },
        {
          label: 'Consumidas',
          backgroundColor: '#067a0c',
          data: [comida.value]
        },
      ];
      
    return {
      sports,
      comida,
      chart,
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
center {
  margin: 30px;
  font-size: 25px;
  line-height: 22px;
  color: #067a0c;
  font-weight: 700;
}

</style>
