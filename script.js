
const toggleMenu = () => {
    document.body.classList.toggle("open");
};



const carousel = document.querySelector('.carousel');
const images = [
    '/assets/kemsan.JPG',
    '/residence-2219972.JPG',
    '/assets/bg3.JPG'
];

let currentIndex = 0;

function updateBackground(index) {
    carousel.style.backgroundImage = `url(${images[index]})`;
    carousel.style.backgroundPosition = `bottom`   
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground(currentIndex);
});

// Initial background setup
updateBackground(currentIndex);
