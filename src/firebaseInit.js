import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8gjXhfLzgpDG2k8jyCfhFAyrFaVanxS4",
    authDomain: "shopping-cart-f0f5f.firebaseapp.com",
    projectId: "shopping-cart-f0f5f",
    storageBucket: "shopping-cart-f0f5f.appspot.com",
    messagingSenderId: "710844881633",
    appId: "1:710844881633:web:205fd5c3be9150a342f5a0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);