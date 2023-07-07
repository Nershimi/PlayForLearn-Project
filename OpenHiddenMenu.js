function openAndCloseMenu() {
  let toggleVal = document.getElementById("rightMenuToggle");
  var menu = document.getElementById("rightMenuInner");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    toggleVal.classList.toggle("change");
  } else {
    toggleVal.classList.toggle("change");
    menu.style.display = "block";
  }
}
