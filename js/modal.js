var modal1 = document.querySelector(".modal1");
var btn1 = document.querySelector(".btn1");

var span = document.querySelector(".close");
var exit1 = document.querySelector(".exit1");
var exit2 = document.querySelector(".exit2");

btn1.onclick = function () {
    modal1.style.display = "block";
};
exit1.onclick = function () {
    modal1.style.display = "none";
};
exit2.onclick = function () {
    modal1.style.display = "none";
};

span.onclick = function () {
    modal1.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
};