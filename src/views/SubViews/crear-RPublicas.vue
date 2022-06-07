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
            <ion-label>
              <img :src="recipe.image" />
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-label>
                <h1>Foto</h1>
              </ion-label>
              <input type="file" name="image" id="image" @change="upload($event)" />
            </ion-label>
          </ion-item>
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
          <ion-item>
            <ion-label position="floating">Pasos</ion-label>
            <ion-button slot="end" @click="addStep()"> Agregar </ion-button>
          </ion-item>
          <hr />
          <ion-item v-for="(step, index) in steps" lines="none" :key="index">
            <ion-label position="floating">Paso {{index + 1}} </ion-label>
            <ion-textarea v-model="step.descripcion"></ion-textarea>
            <ion-button slot="end" @click="removeStep(index)"> Borrar </ion-button>
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
const steps: any = ref([]);
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
    return { recipe, steps };
  },
  methods: {
    addStep() {
      steps.value.push({});
    },
    removeStep(i: number) {
      steps.value.splice(i, 1);
    },
    goTo(url: string) {
      this.$router.push(url);
    },
    upload(event: any) {
      ApiService.uploadFile(event)
        .then((fileBase64) => {
          recipe.value.image = fileBase64;
        })
        .catch(() => {
          console.log("HAY UN ERROR");
        });
    },
    crear() {
      console.log(recipe.value);
      const id = new Date().getTime();
      this.$router.push("/SubViews/RPublicas");

      ApiService.updateRecipeP(id, {
        id,
        nombre: recipe.value.nombre,
        kgcal: recipe.value.kgcal,
        tiempo: recipe.value.tiempo,
        descripcion: recipe.value.descripcion,
        image: recipe.value.image,
        steps: steps.value
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

input {
   background-color: #067a0c;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto 0;
  min-height: 15px;
  overflow: hidden;
  padding: 10px;
  position: relative;
  text-align: center;
  width: 400px;
}
</style>
