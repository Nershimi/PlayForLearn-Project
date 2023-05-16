/**
 * return - void
 * The function getting date element covert to JavaScript Date Object.
 * checking if the age is bigger than 13 years old.
 * If yes - errorMassage will be empty else it will jump error massage
 * to the user saying the age is not compatible
 */
function CheckAgeOverThirteen() {
  let birthDate = new Date(document.getElementById("dateOfBirth").value);
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let errorMassageOfDate = document.getElementById("errorMassageNotRightAge");
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  if (age <= 13) {
    errorMassageOfDate.innerHTML = "גיל לא תואם את הנדרש <br>";
  } else {
    errorMassageOfDate.innerHTML = "";
  }
}
