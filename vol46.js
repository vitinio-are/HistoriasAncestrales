const slider3 = document.querySelector("#slider3");
let slider3Section = document.querySelectorAll(".slider3-section");
let slider3SectionLast = slider3Section[slider3Section.length - 1];

const btnLeft = document.querySelector("#btn3--left");
const btnRight = document.querySelector("#btn3--right");


slider3.insertAdjacentElement('afterbegin', slider3SectionLast);

function Next() {
    let slider3SectionFirst = document.querySelectorAll(".slider3-section")[0];
    slider3.style.marginLeft = "-200%"
    slider3.style.transition = "all 0.5s";
    setTimeout(function() {
        slider3.style.transition = "none";
        slider3.insertAdjacentElement('beforeend', slider3SectionFirst);
        slider3.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let slider3Section = document.querySelectorAll(".slider3-section");
    let slider3SectionLast = slider3Section[slider3Section.length - 1];
    slider3.style.marginLeft = "0";
    slider3.style.transition = "all 0.5s";
    setTimeout(function(){
        slider3.style.transition = "none";
        slider3.insertAdjacentElement('afterbegin', slider3SectionLast);
        slider3.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function (){
    Next();
});
btnLeft.addEventListener('click', function() {
    Prev();
});

setInterval(function(){
    Next();
}, 5000);