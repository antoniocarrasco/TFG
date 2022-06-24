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
              <img :src="user.profile" />
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
            <h1><ion-input v-model="user.name"></ion-input></h1>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Sexo: {{ user.sex === "H" ? "Hombre" : "Mujer" }}</h1>

              <ion-select v-model="user.sex" placeholder="Select One">
                <ion-select-option value="M">Mujer</ion-select-option>
                <ion-select-option value="H">Hombre</ion-select-option>
              </ion-select>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Peso (KG)</h1>
              <h1><ion-input v-model="user.currentWeight"></ion-input></h1>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Altura (cm)</h1>
              <h1><ion-input v-model="user.high"></ion-input></h1>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Edad</h1>
              <h1><ion-input v-model="user.age"></ion-input></h1>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Objetivo:
                {{user.obj === 'S' ? 'Subir de peso' : 'Bajar de peso' }}
              </h1>
             
             
            
            <ion-select v-model="user.obj" placeholder="Select One">
              <ion-select-option value="B">Bajar de peso</ion-select-option>
              <ion-select-option value="S">Subir de peso</ion-select-option>
            </ion-select>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>
                Nivel de actividad física:
                {{ user.level === "A" ? "Alto" : user.level === "M" ? "Medio" : "Bajo" }}
              </h1>
              <ion-select v-model="user.level" placeholder="Select One">
                <ion-select-option value="A">Alto</ion-select-option>
                <ion-select-option value="M">Medio</ion-select-option>
                <ion-select-option value="B">Bajo</ion-select-option>
              </ion-select>
            </ion-label>
            
          </ion-item>
          <ion-item>
            <ion-label>
              <h1>Editar contraseña</h1>
              
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content> 
    <ion-footer :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button expand="block" @click="editar">Editar</ion-button>
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
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import ApiService from "@/services/ApiService";
const user: any = ref({});
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
    ApiService.get("user/"+this.$route.params.id).then((users) => {
    user.value = users;
    });
    return {
      user,
    };
  },
  methods: {
    upload(event: any) {
      
      ApiService.uploadFile(event)
        .then((fileBase64) => {
          user.value.profile = fileBase64;
        })
        .catch(() => {
          
        });
    },
    editar() { 
      ApiService.updateUser(user.value.uid, user.value);
        
      this.$router.push("/SubViews/listaUser");
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

img{
    width:300px;
    height:300px;
    border-radius:150px;
    display:block;
    margin:auto;
}
</style>
