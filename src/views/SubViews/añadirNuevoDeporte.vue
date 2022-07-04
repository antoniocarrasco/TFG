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
        <ion-list> 
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input v-model="sport.name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Coef</ion-label>
          <ion-input v-model="sport.coef"></ion-input>
        </ion-item>
        </ion-list>
      </div>
    </ion-content> 
    <ion-footer :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button expand="block" @click="crear">Añadir</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import ApiService from "@/services/ApiService";
const sport: any = ref({});
export default defineComponent({
  name: "Folder",
  components: {
    IonInput,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      sport,
    };
  },
  methods: {
    crear() { 
      ApiService.postSportList({
        name: sport.value.name,
        coef: sport.value.coef
      });

      this.$router.push("/SubViews/addDeporte");
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
