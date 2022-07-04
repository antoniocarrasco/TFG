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
        
        <ion-item>TRAER LISTA USUARIO CON RADIO BUTTON</ion-item>
        <ion-item v-for="(u, index) in userList" lines="none" :key="index">
              <ion-label>{{ u.name }} {{  }} </ion-label>
              <ion-radio slot="start" :value="u.coef"></ion-radio>
              <ion-button @click="goTo('/SubViews/userListEdit/'+ u.uid)" color="primary"  expand="block">
                <ion-icon slot="icon-only" :ios="pencil" :md="pencil"></ion-icon>
              </ion-button>
              <ion-button @click="deleteUser(u.uid)" color="primary" expand="block">
                <ion-icon slot="icon-only" :ios="trash" :md="trash"></ion-icon>
              </ion-button>
            </ion-item>
        <ion-footer>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button color="primary" @click="goTo('/folder/Usuario-edit')">
            AÑADIR
          </ion-button>         
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">import { defineComponent, ref } from "vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRadio,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { pencil, trash } from "ionicons/icons";
import ApiService from "@/services/ApiService";

const userList: any = ref([]);
export default defineComponent({
  name: "Folder",
  components: {
    IonRadio,
    IonIcon,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    
    ApiService.get("user").then((users) => {
      userList.value = users;
    });
    return {
      userList,
      pencil,
      trash,
    };
  },
  methods: {
    goTo(url: string) {
      this.$router.push(url);
    },
    deleteUser(index: any) {
      ApiService.deleteUser(index).then((response) => {
        ApiService.get("user").then((users) => {
          
          userList.value = users;
        });
      });
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
