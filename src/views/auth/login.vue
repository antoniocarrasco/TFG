<template>
  <ion-page>
    <ion-header class="bg-green"  :translucent="true">
      <ion-toolbar class="bg-green" >
        <ion-title >{{ $route.meta.title }} </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header  collapse="condense">
        
        <ion-toolbar>
          <ion-title class="bg-green" size="large">{{ $route.meta.title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <div class="logo-container"> 
          <img src="assets/logo fondo blanco.png" />
        </div>
          <ion-card-header>          
            
            <center class="bg-green">BeFit</center>
            <ion-card-subtitle class="bg-green"></ion-card-subtitle>
            <ion-card-content class="bg-green">
             <ion-button class="bg-dark-green" expand="block" @click="loginG">Google</ion-button>
          </ion-card-content>
          </ion-card-header>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {

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
  getAuth
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default defineComponent({
  components: {
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
    loginG() {
      const provider = new GoogleAuthProvider();
      //Validate fields
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential: any = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user, token);
          CacheService.setUser(user);
          CacheService.setSession(user);
          this.$router.push("/folder/inicio");
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
  },
});
</script>
<style scoped>


ion-title {
  color: #067a0c;
  font-weight: 700;
  text-align: center;
  position: absolute;
}
img {
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
