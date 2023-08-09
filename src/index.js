import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAr6V2pSlphIWgPGiYVmV_4EAkxxHCacMg",
  authDomain: "learntoplay-f2f2c.firebaseapp.com",
  projectId: "learntoplay-f2f2c",
  storageBucket: "learntoplay-f2f2c.appspot.com",
  messagingSenderId: "717817592020",
  appId: "1:717817592020:web:646e69e6d01d8c91fca341",
  measurementId: "G-4QRWQJ1KXX",
});

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("No user!");
  }
});
