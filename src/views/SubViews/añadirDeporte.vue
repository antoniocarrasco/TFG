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
        <ion-item>
          <ion-label position="floating">Intensidad</ion-label>
          <ion-select v-model="intensity" placeholder="Select One">
            <!-- intensity subir y multiplicar en el resultado-->
            <ion-select-option value="1.5">Alto</ion-select-option>
            <ion-select-option value="1.25">Medio</ion-select-option>
            <ion-select-option value="1">Bajo</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-list>
          <ion-radio-group v-model="sport" value="biff">
            <ion-list-header>
              <ion-label>Deporte</ion-label>
            </ion-list-header>

            <ion-item v-for="(s, index) in sportList" lines="none" :key="index">
              <ion-label>{{ s.name }} </ion-label>
              <ion-radio slot="start" :value="s.coef"></ion-radio>
              <ion-button @click="goTo('/SubViews/editDeporteList/'+s.id)" color="primary" v-if="isAdmin" expand="block">
                <ion-icon slot="icon-only" :ios="pencil" :md="pencil"></ion-icon>
              </ion-button>
              <ion-button @click="deleteSport(s.id)" color="primary" v-if="isAdmin" expand="block">
                <ion-icon slot="icon-only" :ios="trash" :md="trash"></ion-icon>
              </ion-button>
            </ion-item>
          </ion-radio-group>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="secondary" v-if="isAdmin">
          <ion-button color="primary" expand="block" @click="goTo('/SubViews/addDeporteList')">AÑADIR NUEVO DEPORTE</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
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
import { pencil, trash } from "ionicons/icons";
import ApiService from "@/services/ApiService";
import CacheService from "@/services/CacheService";
const isAdmin = ref();
const minutes: any = ref(0);
const intensity: any = ref(0);
const sport: any = ref("");
const sportList: any = ref([]);
export default defineComponent({
  name: "Folder",
  components: {
    IonInput,
    IonRadio,
    IonIcon,
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
    isAdmin.value = CacheService.isAdmin;
    ApiService.get("sportList").then((sports) => {
     
      sportList.value = sports;
    });
    return {
      sportList,
      minutes,
      sport,
      intensity,
      isAdmin,
      pencil,
      trash,
    };
  },
  methods: {
    goTo(url: string) {
      this.$router.push(url);
    },
    crear() {
      const userSession: any = CacheService.user;

      ApiService.postSport(userSession.uid, {
        minutes: minutes.value,
        sport: sport.value,
        intensity: intensity.value,
      });

      this.$router.push("/folder/Inicio");
    },
    deleteSport(index: any) {
      ApiService.deleteSport(index).then((response) => {
        ApiService.get("sportList").then((sports) => {
          
          sportList.value = sports;
        });
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
