const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const arrow4 = document.getElementById("arrow4");
const dropdown1 = document.getElementById("drop1");
const dropdown2 = document.getElementById("drop2");
const dropdown3 = document.getElementById("drop3");
const dropdown4 = document.getElementById("drop4");
const line1 = document.getElementById("topline");
const line2 = document.getElementById("midline");
const line3 = document.getElementById("botline");

burger.addEventListener("click", function() {showMenu()});
arrow1.addEventListener("click", function() {showDrop(dropdown1, arrow1)});
arrow2.addEventListener("click", function() {showDrop(dropdown2, arrow2)});
arrow3.addEventListener("click", function() {showDrop(dropdown3, arrow3)});
arrow4.addEventListener("click", function() {showDrop(dropdown4, arrow4)});

var active = false;

function showMenu() {
    if (!active) {
        menu.style.display = "flex";
        active = true;
        line1.classList.remove("topoff");
        line2.classList.remove("midoff");
        line3.classList.remove("botoff");
        line1.classList.add("topon");
        line2.classList.add("midon");
        line3.classList.add("boton");
    }
    else{
        menu.style.display = "none";
        active = false;
        resetMenu();
        line1.classList.add("topoff");
        line2.classList.add("midoff");
        line3.classList.add("botoff");
        line1.classList.remove("topon");
        line2.classList.remove("midon");
        line3.classList.remove("boton");
    }
}

function resetMenu(){
    arrow1.classList.remove("arrowactive");
    dropdown1.classList.remove("dropdownactive");
    arrow2.classList.remove("arrowactive");
    dropdown2.classList.remove("dropdownactive");
    arrow3.classList.remove("arrowactive");
    dropdown3.classList.remove("dropdownactive");
    arrow4.classList.remove("arrowactive");
    dropdown4.classList.remove("dropdownactive");
}

function showDrop(dropnum, arrownum) {
    if (!arrownum.classList.contains("arrowactive")) {
        resetMenu();
        arrownum.classList.add("arrowactive");
        dropnum.classList.add("dropdownactive");
    }
    else{
        resetMenu();
    }
}