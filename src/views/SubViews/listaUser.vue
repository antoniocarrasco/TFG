<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot ="start">
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
