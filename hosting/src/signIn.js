import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const auth = getAuth();

const btnLogin = document.getElementById("buttonLogin");
const txtEmail = document.getElementById("username");
const txtPassword = document.getElementById("userPw");
const errorSpan = document.getElementById("errorLogin");

const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
    showErrorLogin();
    // showLoginError(error);
  }
};

function showErrorLogin(){
    errorSpan.style = "display: block"
}

btnLogin.addEventListener("click", loginEmailPassword);
