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
        <ion-title>Datos personales</ion-title>
        <ion-list>
          <ion-item>
            <ion-label>
              <img :src="data.profile" />
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-label>
                <h1>Foto de perfil</h1>
              </ion-label>
              <input type="file" name="profile" id="profile" @change="upload($event)" />
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Nombre:</h1>
            </ion-label>
            <h1><ion-input v-model="data.name"></ion-input></h1>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Sexo: {{ data.sex === "H" ? "Hombre" : "Mujer" }}</h1>

              <ion-select v-model="data.sex" placeholder="Select One">
                <ion-select-option value="M">Mujer</ion-select-option>
                <ion-select-option value="H">Hombre</ion-select-option>
              </ion-select>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Peso (KG)</h1>
              <h1><ion-input v-model="data.currentWeight"></ion-input></h1>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Altura (cm)</h1>
              <h1><ion-input v-model="data.high"></ion-input></h1>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Edad</h1>
              <h1><ion-input v-model="data.age"></ion-input></h1>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
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
    <ion-footer>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button color="primary" @click="save()"> Guardar </ion-button>
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

console.log(CacheService.user);
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
    ApiService.getUser(userSession.uid).then((user: any) => {
      console.log("user", user);
      data.value = user;
    });
    return {
      data,
    };
  },
  methods: {
    upload(event: any) {
      console.log(event);
      ApiService.uploadFile(event)
        .then((fileBase64) => {
          data.value.profile = fileBase64;
        })
        .catch(() => {
          console.log("HAY UN ERROR");
        });
    },
    save() {
      ApiService.updateUser(data.value.uid, data.value);
      this.$router.push("/folder/usuario");
      console.log(data.value);
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
  background: rgb(255, 255, 255);
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
