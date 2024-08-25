
const toggleMenu = () => {
    document.body.classList.toggle("open");
};



const carousel = document.querySelector('.carousel');
const images = [
    '/assets/kemsan.JPG',
    '/residence-2219972.jpg',
    '/assets/bg3.jpg',
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




document.addEventListener('DOMContentLoaded', () => {
    const paginationContent = document.querySelector('.pagination-content');
    const pages = document.querySelectorAll('.page');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentPage = 0;

    function updatePagination() {
        paginationContent.style.transform = `translateX(-${currentPage * 100}%)`;
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === pages.length - 2;
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updatePagination();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePagination();
        }
    });

    updatePagination();
});
