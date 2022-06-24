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
