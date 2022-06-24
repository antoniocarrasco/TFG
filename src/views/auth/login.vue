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
        
        <ion-item>
          <ion-label router-link ="/register">No estoy registrado</ion-label>
        </ion-item>
        <ion-item>
          <ion-label router-link ="/login">He olvidado mi contraseña</ion-label>
        </ion-item>
        
        

            
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
      
      const auth = getAuth();
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              CacheService.setUser(user);
              this.$router.push("/folder/inicio");
              
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
<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
  transform: translateY(-50%);
  background:  rgb(255, 255, 255);
}

#container p{
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 130%;
  transform: translateY(-50%);
  background:  rgb(255, 255, 255);
  color:#067a0c;
  font-weight: 500;
  text-align: center;
  position: absolute;
  opacity: 0.9;
}
h4 {
    color:#067a0c;
  font-weight: 500;
}
ion-title{
  color:#067a0c;
  font-weight: 700;
  text-align: center;
  position: absolute;
}
ion-item {
  background-color: #ffffff;
}



#container a {
  text-decoration: none;
  background:  rgb(166, 228, 157);
}
</style>
