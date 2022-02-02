var btnBaseLine = document.querySelectorAll(".btn")[0];
var sanckbar1 = document.querySelector(".sanckbar1");
var btnExit = document.querySelector(".exit");

btnExit.addEventListener("click", onExit);
btnBaseLine.addEventListener("click", onToggle);

function onExit() {
    sanckbar1.style.visibility = "hidden";
}

function onToggle() {
    sanckbar1.style.visibility = "visible";
    setTimeout(function () {
        sanckbar1.style.visibility = "hidden";
    }, 5000);
}