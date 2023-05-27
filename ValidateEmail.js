/**
 * return - void
 * The function getting email element covert to JavaScript String.
 * crate value that checking if the email is write correct by the format.
 * If yes - errorMassage will be empty else it will jump error massage
 * to the user saying the email is not valid.
 */
function isEmailValid(email) {
  // let userEmail = document.getElementById("username").value;
  let isEmailCorrect = mailFormatValid(email);
  let errorEmailNotCorrect = document.getElementById("emailNotValid");
  if (isEmailCorrect) {
    errorEmailNotCorrect.innerHTML = "";
    return true;
  } else {
    errorEmailNotCorrect.innerHTML = "כתובת מייל לא חוקית <br>";
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
