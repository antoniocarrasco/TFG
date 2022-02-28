import { createApp } from 'vue'
import App from './App.vue'
import router from './router';


import firebase from 'firebase/compat/app';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/*FIREBASE*/
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCndzDV67Z5R7nrD9DaVFHRu6fnmmdvsBI",
  authDomain: "befit-4b2b0.firebaseapp.com",
  projectId: "befit-4b2b0",
  storageBucket: "befit-4b2b0.appspot.com",
  messagingSenderId: "927015936227",
  appId: "1:927015936227:web:462a0c88555268d57865d6",
  measurementId: "G-5FFC90X7RG"
};

firebase.initializeApp(firebaseConfig);

//export const db = firebase.firestore();
//export const auth = firebase.auth();


const app = createApp(App)
  .use(IonicVue)
  .use(router);


// Initialize Firebase
/*const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app1); */



router.isReady().then(() => {
  app.mount('#app');
});
