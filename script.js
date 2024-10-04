
const images = document.querySelectorAll('.gallery .image img');
const popUp = document.querySelector('.pop-up');
const popUpImage = document.querySelector('.pop-up img');
const leftBtn = document.querySelector('.pop-up .left');
const rightBtn = document.querySelector('.pop-up .right');
const closeBtn = document.querySelector(' .pop-up .cross-icon');

// Variable to keep track of the current image index
let currentIndex = 0;

// Function to open the pop-up
function openPopUp(index) {
    currentIndex = index;
    popUpImage.src = images[currentIndex].src;
    popUp.style.display = 'flex'; // Show the pop-up
}

// Function to close the pop-up
function closePopUp() {
    popUp.style.display = 'none'; // Hide the pop-up
}

// Function to update the image in the pop-up
function updatePopUpImage() {
    popUpImage.src = images[currentIndex].src;
}

// Event listeners for gallery images
images.forEach((image, index) => {
    image.parentElement.addEventListener('click', () => openPopUp(index));
});

// Event listener for the close button
closeBtn.addEventListener('click', closePopUp);

// Event listener for the left button
leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updatePopUpImage();
});

// Event listener for the right button
rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updatePopUpImage();
});

