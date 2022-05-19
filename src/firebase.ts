
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCndzDV67Z5R7nrD9DaVFHRu6fnmmdvsBI",
    authDomain: "befit-4b2b0.firebaseapp.com",
    databaseURL: "https://befit-4b2b0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "befit-4b2b0",
    storageBucket: "befit-4b2b0.appspot.com",
    messagingSenderId: "927015936227",
    appId: "1:927015936227:web:462a0c88555268d57865d6",
    measurementId: "G-5FFC90X7RG"
};

const app = initializeApp(firebaseConfig);

export default app;