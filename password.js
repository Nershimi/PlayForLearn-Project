const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 20;

/**
 * Create let that holding value of the element pw1 of the type password
 * and change the type form password to text and backward
 */
function showAndHidePassword(id) {
  let typeOfPass = document.getElementById(id);
  typeOfPass.type = typeOfPass.type == "password" ? "text" : "password";
}

/**
 * Create let that holding value of the element pw1.
 * Create let that holding value of the element pw2.
 * Create let that holding value of the element errorMassageNotEqualsTwoPw.
 * Compare the value of pw1 and pw2 if they are equals errorMassageNotEqualsTwoPw empty
 * else errorMassageNotEqualsTwoPw = password are not match
 */
function compareFirstAndSecondPw(pw1, pw2) {
  // TODO need to check why it's not jump an Error
  let errorElement = document.getElementById("errorMassageNotEqualsTwoPw");
  let pw1Val = document.getElementById(pw1).value;
  let pw2Val = document.getElementById(pw2).value;
  if (pw1Val != pw2Val) {
    if(pw2Val.length > 0){
      errorElement.innerHTML = "הסיסמאות אינן תואמות <br>";
      return false;
    }
  } else {
    errorElement.innerHTML = "";
    return true;
  }
}

/**
 * Create let firstPw that holding value of html element - pw1.
 * Create let that holding value of html element - passwordNotValid.
 * Create boolean that using the function isLengthOfPasswordValid() on firstPW .
 * Create boolean that using the function isPasswordContainUpperCase() on firstPW .
 * Create boolean that using the function isPasswordContainLowerCase() on firstPW .
 * Create boolean that using the function isThereNoSpace() on firstPW.
 * Checking if all the boolean value equal to true, if yes
 */
function isPasswordValid(pass) {
  let firstPw = document.getElementById(pass).value;
  let errorPassNotValid = document.getElementById("passwordNotValid");
  let isLengthValid = isLengthOfPasswordValid(firstPw);
  let isContainUpper = isPasswordContainUpperCase(firstPw);
  let isContainLower = isPasswordContainLowerCase(firstPw);
  let isContainSpace = isThereNoSpace(firstPw);
  if (isContainUpper && isContainLower && isContainSpace && isLengthValid) {
    errorPassNotValid.innerHTML = "";
    return true;
  } else {
    errorPassNotValid.innerHTML =
      "נדרש לכתוב סיסמה הכוללת אות גדולה, אות קטנה, ומספרים <br>";
    return false;
  }
}

/**
 * @param {*} password
 * @returns true if the length of password bigger or equal to 8 or smaller or equal to 20.
 */
function isLengthOfPasswordValid(password) {
  let lenOfPassword = password.length;
  if (
    lenOfPassword < MIN_PASSWORD_LENGTH ||
    lenOfPassword > MAX_PASSWORD_LENGTH
  ) {
    return false;
  }
  return true;
}

/**
 * Checking by using test function if password contain at least one upper case.
 * @param {*} password
 * @returns true if password contain upper case.
 */
function isPasswordContainUpperCase(password) {
  let upperCase = /[A-Z]/;
  if (upperCase.test(password)) {
    return true;
  }
  return false;
}

/**
 * Checking by using test function if password contain at least one lower case.
 * @param {*} password
 * @returns true if password contain lower case.
 */
function isPasswordContainLowerCase(password) {
  let lowerCase = /[a-z]/;
  if (lowerCase.test(password)) {
    return true;
  }
  return false;
}

/**
 * Checking by using test function if password contain digit
 * @param {*} password
 * @returns true if password contain digit.
 */
function isThisPassContainsNumber(password) {
  return /\d/.test(password);
}

/**
 * Checking if the password contain space.
 * @param {*} password
 * @returns true if password not contain any space
 */
function isThereNoSpace(password) {
  if (password.includes(" ")) {
    return false;
  }
  return true;
}
