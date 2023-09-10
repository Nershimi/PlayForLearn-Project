// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "./index.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("No user!");
  }
});