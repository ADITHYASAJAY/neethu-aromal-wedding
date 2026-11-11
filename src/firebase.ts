import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0dzx_qoRXh6MerbgScH2jT1H0p7naiRU",
  authDomain: "aromal-neethu-wedding-2612a.firebaseapp.com",
  projectId: "aromal-neethu-wedding-2612a",
  storageBucket: "aromal-neethu-wedding-2612a.firebasestorage.app",
  messagingSenderId: "356129384294",
  appId: "1:356129384294:web:83f7a0d862acb462900aa7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);