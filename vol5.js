const slider4 = document.querySelector("#slider4");
let slider4Section = document.querySelectorAll(".slider4-section");
let slider4SectionLast = slider4Section[slider4Section.length - 1];

const btnLeft = document.querySelector("#btn4--left");
const btnRight = document.querySelector("#btn4--right");


slider4.insertAdjacentElement('afterbegin', slider4SectionLast);

function Next() {
    let slider4SectionFirst = document.querySelectorAll(".slider4-section")[0];
    slider4.style.marginLeft = "-200%"
    slider4.style.transition = "all 0.5s";
    setTimeout(function() {
        slider4.style.transition = "none";
        slider4.insertAdjacentElement('beforeend', slider4SectionFirst);
        slider4.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let slider4Section = document.querySelectorAll(".slider4-section");
    let slider4SectionLast = slider4Section[slider4Section.length - 1];
    slider4.style.marginLeft = "0";
    slider4.style.transition = "all 0.5s";
    setTimeout(function(){
        slider4.style.transition = "none";
        slider4.insertAdjacentElement('afterbegin', slider4SectionLast);
        slider4.style.marginLeft = "-100%";
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