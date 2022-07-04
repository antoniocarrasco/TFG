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
        
        <ion-list class="bg-green">
          <ion-item class="bg-green" style="padding: 0">
            <ion-label class="bg-green">
              <img class="imgPerfil" :src="data.profile" />
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <ion-label>
                <h1>Foto de perfil</h1>
              </ion-label>
              <input type="file" name="profile" id="profile" @change="upload($event)" />
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Nombre:</h1>
            </ion-label>
            <h1><ion-input v-model="data.name"></ion-input></h1>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Sexo: {{ data.sex === "H" ? "Hombre" : data.sex==='M'?"Mujer" : '-' }}</h1>

              <ion-select v-model="data.sex" placeholder="Select One">
                <ion-select-option value="M">Mujer</ion-select-option>
                <ion-select-option value="H">Hombre</ion-select-option>
              </ion-select>
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Peso (KG)</h1>
              <h1><ion-input v-model="data.currentWeight"></ion-input></h1>
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Altura (cm)</h1>
              <h1><ion-input v-model="data.high"></ion-input></h1>
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>Edad</h1>
              <h1><ion-input v-model="data.age"></ion-input></h1>
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>
                Objetivo:
                {{ data.obj === "S" ? "Subir de peso" : "Bajar de peso" }}
              </h1>

              <ion-select v-model="data.obj" placeholder="Select One">
                <ion-select-option value="B">Bajar de peso</ion-select-option>
                <ion-select-option value="S">Subir de peso</ion-select-option>
              </ion-select>
            </ion-label>
          </ion-item>
          <ion-item class="bg-green">
            <ion-label class="bg-green">
              <h1>
                Nivel de actividad física:
                {{ data.level === "A" ? "Alto" : data.level === "M" ? "Medio" : "Bajo" }}
              </h1>
              <ion-select v-model="data.level" placeholder="Select One">
                <ion-select-option value="A">Alto</ion-select-option>
                <ion-select-option value="M">Medio</ion-select-option>
                <ion-select-option value="B">Bajo</ion-select-option>
              </ion-select>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer class="bg-dark-green">
      <ion-toolbar class="bg-dark-green">
        <ion-buttons slot="secondary" class="bg-dark-green">
          <ion-button  class="bg-dark-green" color="secondary" @click="save()"> Guardar </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CacheService from "@/services/CacheService";
import ApiService from "@/services/ApiService";
import {
  IonInput,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const data: any = ref({});

export default defineComponent({
  name: "Folder",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
  },
  setup() {
    const userSession: any = CacheService.user;
    console.log(userSession);
    ApiService.getUser(userSession.uid).then((user: any) => {
      data.value = user || {};
    });
    return {
      data,
    };
  },
  methods: {
    upload(event: any) {
      ApiService.uploadFile(event)
        .then((fileBase64) => {
          data.value.profile = fileBase64;
        })
        .catch(() => {
          console.log("error");
        });
    },
    save() {
      console.log(data);
      const userSession: any = CacheService.user;
      ApiService.updateUser(userSession.uid, { ...data.value, uid: userSession.uid });
      this.$router.push("/folder/usuario");
    },
  },
});
</script>

<style scoped>
ion-title {
  color: rgb(214, 248, 209);
  font-weight: 700;
}

.imgPerfil {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  display: block;
  margin: auto;
}
</style>
