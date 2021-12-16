function toggleMenu() {
    document.getElementsByClassName("menubar")[0].classList.toggle("hide");
    let menuText = document.getElementsByClassName("menuText")[0]
    if (menuText.innerHTML == "☰ Menu") {
        menuText.innerHTML = "X";
    } else {
        menuText.innerHTML = "&#9776; Menu";
    }
}