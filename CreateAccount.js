let buttonOfSignUp = document.getElementById("createAccountAction");
buttonOfSignUp.addEventListener("click", performAction);

// TODO need to fix this - don't work
function checkingAllParameters(pw1, pw2, email){
    let isPassValid = isPasswordValid(pw1);
    let isEqualPassword = compareFirstAndSecondPw(pw1, pw2);
    let emailIsLegal = isEmailValid(email)
    let isDateValid = CheckAgeOverThirteen();
    if(isPassValid && isEqualPassword && emailIsLegal && isDateValid){
        // doSomething
        
    }else{
        buttonOfSignUp.setAttribute("disabled")
    }
}


function performAction() {
  // Perform your action here
  console.log("Action executed successfully.");
  // Add your code here to perform the desired action
}
