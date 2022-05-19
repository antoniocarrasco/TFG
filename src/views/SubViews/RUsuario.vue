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
      <div expand="full" id="container">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Nombre</ion-label>
            <ion-input v-model="recipe.nombre"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Kg/Cal</ion-label>
            <ion-input v-model="recipe.kgcal"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Tiempo</ion-label>
            <ion-input v-model="recipe.tiempo"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Descripción</ion-label>
            <ion-textarea v-model="recipe.descripcion"></ion-textarea>
          </ion-item>
        </ion-list>
        <ion-button expand="block" @click="crear">Añadir</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonInput,
  IonTextarea,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import { defineComponent } from "vue";
import { ref } from "vue";
import ApiService from "@/services/ApiService";

const recipe: any = ref({});
export default defineComponent({
  name: "Folder",
  components: {
    IonButtons,
    IonContent,
    IonInput,
    IonTextarea,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    return { recipe };
  },
  methods: {
    goTo(url: string) {
      this.$router.push(url);
    },
    crear(){
        console.log(recipe.value)
        const id = new Date().getTime();
        this.$router.push('/SubViews/RUsuario');
        
        ApiService.updateRecipe(id, {
            id,
            nombre: recipe.value.nombre,
            kgcal: recipe.value.kgcal,
            tiempo: recipe.value.tiempo,
            descripcion: recipe.value.descripcion,
        })
    }
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
