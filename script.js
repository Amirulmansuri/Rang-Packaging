// JavaScript to cycle through background images every 5 seconds
const homeSection = document.querySelector(".home-section");

// Array of background images
const images = [
    'cp1.jpg',    // Replace with the path to your image
    'film1.jpg', // Replace with the path to your image
    'Packaging RollsBG.jpg' ,
    'BubbleWrapbg.jpg'
];

let currentImageIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    homeSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Set initial background image
changeBackgroundImage();

// Change background image every 5 seconds
setInterval(changeBackgroundImage, 5000);
