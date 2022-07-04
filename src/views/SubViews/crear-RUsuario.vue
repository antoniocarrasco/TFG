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
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <img class="imgCard" :src="recipe.image" />
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <ion-label class="bg-green">
                <h1>Foto</h1>
              </ion-label>
              <input
                type="file"
                name="image"
                id="image"
                @change="upload($event, 'recipe')"
              />
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green" position="floating">Nombre</ion-label>
            <ion-input v-model="recipe.nombre"></ion-input>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green" position="floating">Kg/Cal</ion-label>
            <ion-input v-model="recipe.kgcal"></ion-input>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green" position="floating">Tiempo</ion-label>
            <ion-input v-model="recipe.tiempo"></ion-input>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label position="floating">Descripción</ion-label>
            <ion-textarea v-model="recipe.descripcion"></ion-textarea>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Pasos</ion-label>
            <ion-button slot="end" @click="addStep()"> Agregar </ion-button>
          </ion-item>
          <hr />
          <ion-item
            class="bg-green"
            v-for="(step, index) in steps"
            lines="none"
            :key="index"
          >
            <ion-label class="bg-green" position="floating"
              >Paso {{ index + 1 }}
            </ion-label>
            <ion-textarea v-model="step.descripcion"></ion-textarea>
            <img class="imgCard" :src="step.image" />
            <input type="file" name="image" id="image" @change="upload($event, index)" />
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
import CacheService from "@/services/CacheService";

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
    upload(event: any, imagen: any) {
      ApiService.uploadFile(event)
        .then((fileBase64) => {
          if (imagen === "recipe") {
            recipe.value.image = fileBase64;
          } else {
            steps.value[imagen].image = fileBase64;
          }
        })
        .catch(() => {
          console.log("");
        });
    },
    crear() {
      const id = new Date().getTime();

      const userSession: any = CacheService.user;
      console.log(recipe.value);
      ApiService.updateRecipeU(id,
        userSession.uid, {
        id,
        nombre: recipe.value.nombre,
        kgcal: recipe.value.kgcal,
        tiempo: recipe.value.tiempo,
        descripcion: recipe.value.descripcion,
        image: recipe.value.image,
        steps: steps.value,
      }).then(() => {
        this.$router.push("/SubViews/RUsuario");
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

.imgCard {
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
