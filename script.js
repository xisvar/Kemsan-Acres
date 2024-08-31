
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 750); 
  });

const toggleMenu = () => {
    document.body.classList.toggle("open");
};

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.navbar-burger');

    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        document.body.classList.remove("open");
    }
});

// Close menu when pressing the ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.body.classList.remove("open");
    }
});


const carousel = document.querySelector('.carousel');
const images = [
    '/assets/kemsan.JPG',
    '/residence-2219972.jpg',
    '/assets/wide.jpg',
    '/assets/wider.jpg'
];

let currentIndex = 0;

function updateBackground(index) {
    carousel.style.backgroundImage = `url(${images[index]})`;
    carousel.style.backgroundPosition = 'bottom';  
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground(currentIndex);
});

// Automatically change background every 30 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground(currentIndex);
}, 7500); // 30000 milliseconds = 30 seconds

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


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



function openVideo() {
    const videoPopup = document.querySelector('.video-popup');
    const videoFrame = document.getElementById('video-frame');
    
    // Set the YouTube video URL
    videoFrame.src = "https://www.youtube.com/embed/yfF5Pc4NxIA?si=lTzoi14g4t5AKxBV?autoplay=1";  // Replace VIDEO_ID with Mr. Beast video ID
    
    // Show the popup
    videoPopup.style.display = "flex";
}

function closeVideo() {
    const videoPopup = document.querySelector('.video-popup');
    const videoFrame = document.getElementById('video-frame');
    
    // Stop the video
    videoFrame.src = "";
    
    // Hide the popup
    videoPopup.style.display = "none";
}

// Attach the close function to the close button
document.querySelector('.close').addEventListener('click', closeVideo);

// Close the popup if the user clicks outside the video content
document.querySelector('.video-popup').addEventListener('click', function(e) {
    const videoContent = document.querySelector('.video-popup-content');
    if (!videoContent.contains(e.target)) {
        closeVideo();
    }
});

// Close the popup if the user presses the Esc key
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        closeVideo();
    }
});

