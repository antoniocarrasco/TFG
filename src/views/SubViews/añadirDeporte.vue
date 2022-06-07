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
          <ion-label position="floating">Tiempo(minutos)</ion-label>
          <ion-input v-model="minutes"></ion-input>
        </ion-item>

        <ion-list>
          <ion-radio-group v-model="sport" value="biff">
            <ion-list-header>
              <ion-label>Deporte</ion-label>
            </ion-list-header>
            <ion-item>
              <ion-label>Futbol</ion-label>
              <ion-radio slot="start" value="3"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Beisbol</ion-label>
              <ion-radio slot="start" value="1.5"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Baloncesto</ion-label>
              <ion-radio slot="start" value="2"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Natacion</ion-label>
              <ion-radio slot="start" value="2.5"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Tenis</ion-label>
              <ion-radio slot="start" value="1.8"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Padel</ion-label>
              <ion-radio slot="start" value="1.5"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Running</ion-label>
              <ion-radio slot="start" value="1.7"></ion-radio>
            </ion-item>
          </ion-radio-group>
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
  IonMenuButton,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import ApiService from "@/services/ApiService";
import CacheService from "@/services/CacheService";

const minutes: any = ref(0);
const sport: any = ref("");
export default defineComponent({
  name: "Folder",
  components: {
    IonInput,
    IonRadio,
    IonRadioGroup,
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
      minutes,
      sport,
    };
  },
  methods: {
    crear() {
      const userSession: any = CacheService.user;

      ApiService.postSport(userSession.uid, {
        minutes: minutes.value,
        sport: sport.value,
      });
      this.$router.push("/folder/Inicio");
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
