<template>
  <ion-content>
    <ion-item>
      <ion-label position="floating">Email</ion-label>
      <ion-input v-model="email"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="floating">Password</ion-label>
      <ion-input type="password" v-model="password"></ion-input>
    </ion-item>

    <ion-button expand="block" @click="login">Block Button</ion-button>
  </ion-content>
</template>

<script>
import { IonLabel, IonInput, IonItem, IonContent, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonLabel, IonInput, IonItem,IonContent,IonButton },
  data(){
    return {
      email:'',
      password: ''
    }
  },
  methods:{
    login(){
      console.log("login", this.email, this.password)
    }
  }
});
</script>
