<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
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
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>

        <ion-list>
          <ion-item>
            <ion-label position="floating">Nombre</ion-label>
            <ion-input v-model="name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Sexo</ion-label>
            <ion-select v-model="sex" placeholder="Select One">
              <ion-select-option value="M">Mujer</ion-select-option>
              <ion-select-option value="H">Hombre</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Peso(kg)</ion-label>
            <ion-input v-model="currentWeight"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Altura(cm)</ion-label>
            <ion-input v-model="high"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Edad</ion-label>
            <ion-input v-model="age"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Nivel de actividad fisica</ion-label>
            <ion-select v-model="level" placeholder="Select One">
              <ion-select-option value="A">Alto</ion-select-option>
              <ion-select-option value="M">Medio</ion-select-option>
              <ion-select-option value="B">Bajo</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>

        <ion-button expand="block" @click="register">Registro</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonLabel,
  IonInput,
  IonItem,
  IonContent,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
} from "@ionic/vue";
import CacheService from "@/services/CacheService";
import { defineComponent } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ApiService from "@/services/ApiService";

export default defineComponent({
  components: {
    IonLabel,
    IonInput,
    IonItem,
    IonContent,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonPage,
  },
  data() {
    return {
      name: "",
      sex: "",
      email: "",
      password: "",
      age:"",
      currentWeight:"",
      high:"",
      level:"",
    };
  },
  methods: {
    register() {
      //Validate fields
      console.log("Login.vue", "test", this.password);

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User created", userCredential, userCredential.user);

          ApiService.postUser(userCredential.user.uid, {
            name: this.name,
            age: this.age,
            sex: this.sex,
            high: this.high,
            currentWeight: this.currentWeight,
            uid: userCredential.user.uid,
            email: userCredential.user.email,
          }).then(() => {
            CacheService.setUser(userCredential.user)
            this.$router.push("/folder/inicio");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  },
});
</script>
