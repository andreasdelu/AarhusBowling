const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const dropdown1 = document.getElementById("drop1");
const dropdown2 = document.getElementById("drop2");
const dropdown3 = document.getElementById("drop3");
const line1 = document.getElementById("topline");
const line2 = document.getElementById("midline");
const line3 = document.getElementById("botline");

burger.addEventListener("click", showMenu);

arrow1.addEventListener("click", function() {showDrop(1)});
arrow2.addEventListener("click", function() {showDrop(2)});
arrow3.addEventListener("click", function() {showDrop(3)});

var active = false;
var dropnum = 0;

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
        arrow1.classList.remove("arrowactive");
        dropdown1.classList.remove("dropdownactive");
        arrow2.classList.remove("arrowactive");
        dropdown2.classList.remove("dropdownactive");
        arrow3.classList.remove("arrowactive");
        dropdown3.classList.remove("dropdownactive");
        line1.classList.add("topoff");
        line2.classList.add("midoff");
        line3.classList.add("botoff");
        line1.classList.remove("topon");
        line2.classList.remove("midon");
        line3.classList.remove("boton");
    }
}

function showDrop(dropnum) {
    if (dropnum === 1) {
        if (!arrow1.classList.contains("arrowactive")) {
        arrow1.classList.add("arrowactive");
        dropdown1.classList.add("dropdownactive");
        arrow2.classList.remove("arrowactive");
        dropdown2.classList.remove("dropdownactive");
        arrow3.classList.remove("arrowactive");
        dropdown3.classList.remove("dropdownactive");
        }
        else{
        arrow1.classList.remove("arrowactive");
        dropdown1.classList.remove("dropdownactive");
        }
    }
    if (dropnum === 2) {
        if (!arrow2.classList.contains("arrowactive")) {
        arrow2.classList.add("arrowactive");
        dropdown2.classList.add("dropdownactive");
        arrow1.classList.remove("arrowactive");
        dropdown1.classList.remove("dropdownactive");
        arrow3.classList.remove("arrowactive");
        dropdown3.classList.remove("dropdownactive");
        }
        else{
        arrow2.classList.remove("arrowactive");
        dropdown2.classList.remove("dropdownactive");
        }
    }
    if (dropnum === 3) {
        if (!arrow3.classList.contains("arrowactive")) {
        arrow3.classList.add("arrowactive");
        dropdown3.classList.add("dropdownactive");
        arrow2.classList.remove("arrowactive");
        dropdown2.classList.remove("dropdownactive");
        arrow1.classList.remove("arrowactive");
        dropdown1.classList.remove("dropdownactive");
        }
        else{
        arrow3.classList.remove("arrowactive");
        dropdown3.classList.remove("dropdownactive");
        }
    }
}