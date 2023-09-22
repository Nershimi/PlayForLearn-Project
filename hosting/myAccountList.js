function showListOfMyAccount(id) {
  let myList = document.getElementById(id).classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches("accountListBut")) {
    let dropDown = document.getElementsByClassName("listGetDown");
    let lengthOfList = dropDown.length();
    for (let i = 0; i < lengthOfList; i++) {
      let currentVal = dropDown[i];
      if (currentVal.classList.contains("show")) {
        currentVal.classList.remove("show");
      }
    }
  }
};
