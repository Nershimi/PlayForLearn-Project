// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
// } from "firebase/auth";
import { firebaseConfig } from "./index.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp);
const signInButton = document.getElementById("googleLogIn");

signInButton.addEventListener("click", () => signInWithPopup(auth, provider))
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
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
