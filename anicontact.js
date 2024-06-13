const images = document.querySelectorAll('.hero_figure');

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('img');

        image.classList.toggle('unset', entry.isIntersecting);
    })
}

const options ={
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // Cambié a 0.5 para que la animación ocurra cuando la imagen esté 50% visible
}

const observer = new IntersectionObserver(triggerAnimation, options); 

images.forEach(image =>{
    observer.observe(image);
});

