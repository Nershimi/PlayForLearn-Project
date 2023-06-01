let buttonOfSignUp = document.getElementById("createAccountAction");
buttonOfSignUp.addEventListener("click", performAction);

function CreateNewUser(pw1, pw2, email) {
  if (checkingAllParameters(pw1, pw2, email)) {
    // do something.
  } else {
  }
}

// TODO need to fix this - don't work
function checkingAllParameters(pw1, pw2, email) {
  let isPassValid = isPasswordValid(pw1);
  let isEqualPassword = compareFirstAndSecondPw(pw1, pw2);
  let emailIsLegal = isEmailValid(email);
  let isDateValid = CheckAgeOverThirteen();
  if (isPassValid && isEqualPassword && emailIsLegal && isDateValid) {
    return true;
  } else {
    return false;
  }
}
