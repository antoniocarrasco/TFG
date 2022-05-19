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
          <ion-input v-model="email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>

        <ion-button expand="block" @click="login">Login</ion-button>

        <p>
          <ion-item router-link="/register"> No estoy registrado. </ion-item>
        </p>
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
import { defineComponent } from "vue";
import CacheService from "@/services/CacheService";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";

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
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      //Validate fields
      console.log("login", this.email, this.password);
      const auth = getAuth();
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              CacheService.setUser(user);
              this.$router.push("/folder/inicio");
              console.log("User logeado");
            })
            .catch((error) => {
              this.$router.push("/register");
              
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
  },
});
</script>
