/**
 * return - void
 * The function getting email element covert to JavaScript String.
 * crate value that checking if the email is write correct by the format.
 * If yes - errorMassage will be empty else it will jump error massage
 * to the user saying the email is not valid.
 */
function isEmailValid(email) {
  let isEmailCorrect = mailFormatValid(email);
  let errorEmailNotCorrect = document.getElementById("emailNotValid");
  errorEmailNotCorrect.innerHTML = "כתובת מייל לא חוקית <br>";
  if (isEmailCorrect) {
    errorEmailNotCorrect.style.display = "none";
    return true;
  } else {
    errorEmailNotCorrect.style.display = "block";
    console.log("email is not valid");
    return false;
  }
}

/**
 *
 * @param {*} email
 * @returns true if the email element is equals to the format.
 */
function mailFormatValid(email) {
  let mailFormat =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email.match(mailFormat)) {
    return true;
  }
  return false;
}
