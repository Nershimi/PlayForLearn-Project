// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {firebaseConfig } from "./index.js"
import { setUserDetails } from "./setUserDetails.js";
const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp);
const btnSignUp = document.getElementById("buttonCreateAccount");
const txtEmail = document.getElementById("username");
const txtPassword = document.getElementById("pw1");
const secTxtPassword = document.getElementById("pw2");
const first = document.getElementById("firstName").value;
const last = document.getElementById("lastName").value;
const birthday = document.getElementById("birthday").value;

const createAccount = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  const secondPass = secTxtPassword.value;

  try {
    if (isDetailsAreValid(loginEmail, loginPassword, secondPass)) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setUserDetails(loginEmail, first, last, birthday);
      console.log("User succeeded to sign up");
    }
  } catch (error) {
    console.log(error);
  }
};

function isDetailsAreValid(email, firstPass, secondPass) {
  if (
    isEmailValid(email) &&
    isPasswordValid(firstPass) &&
    compareFirstAndSecondPw(firstPass, secondPass)
  ) {
    return true;
  }
  return false;
}

btnSignUp.addEventListener("click", createAccount);
