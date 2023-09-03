// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const auth = getAuth();
const btnSignUp = document.getElementById("buttonCreateAccount");
const txtEmail = document.getElementById("username");
const txtPassword = document.getElementById("pw1");

const createAccount = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
    // showErrorLogin();
    // showLoginError(error);
  }
};

btnSignUp.addEventListener("click", createAccount);
