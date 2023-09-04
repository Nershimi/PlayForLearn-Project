import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

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
    console.log("User is login");
  } catch (error) {
    console.log(error);
    showErrorLogin();
    // showLoginError(error);
  }
};

function showErrorLogin() {
  errorSpan.style = "display: block";
}

btnLogin.addEventListener("click", loginEmailPassword);

const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      showHomePage();
    } else {
      showErrorLogin();
    }
  });
};

monitorAuthState();

function showHomePage() {
  window.location.href = "HomePageScreen.html";
}
