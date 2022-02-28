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

        <ion-button expand="block" @click="register">Registro</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonLabel, IonInput, IonItem, IonContent, IonButton, IonHeader, IonTitle, IonToolbar,IonPage} from '@ionic/vue';
import { defineComponent } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  components: { IonLabel, IonInput, IonItem,IonContent,IonButton,IonHeader,IonTitle,IonToolbar,IonPage},
  data(){
    return {
      email:'',
      password: ''
    }
  },
  methods:{
    register(){
      //Validate fields
      console.log("Login.vue", this.email, this.password)



      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User created")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
  }
});
</script>
