const slider2 = document.querySelector("#slider2");
let slider2Section = document.querySelectorAll(".slider2-section");
let slider2SectionLast = slider2Section[slider2Section.length - 1];

const btnLeft = document.querySelector("#btn2--left");
const btnRight = document.querySelector("#btn2--right");


slider2.insertAdjacentElement('afterbegin', slider2SectionLast);

function Next() {
    let slider2SectionFirst = document.querySelectorAll(".slider2-section")[0];
    slider2.style.marginLeft = "-200%"
    slider2.style.transition = "all 0.5s";
    setTimeout(function() {
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('beforeend', slider2SectionFirst);
        slider2.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let slider2Section = document.querySelectorAll(".slider2-section");
    let slider2SectionLast = slider2Section[slider2Section.length - 1];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.5s";
    setTimeout(function(){
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('afterbegin', slider2SectionLast);
        slider2.style.marginLeft = "-100%";
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
