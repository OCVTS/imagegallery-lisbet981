//Select all images in the gallery
const galleryImages = document.querySelectorAll('#gallery-container img');
const images = Array.from(galleryImages); // convert nodeList to array
//Select elements forr lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;//Track the currently display image

//open lightbox and synchronizw currentIndex when an image is clicked
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = image.src;
        lightbox.classList.add('visible');

    });
});
//close lightbox when clicking outside the content
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox){
      lightbox.classList.remove('visible');    
    }
});

//show next image in the lightbox
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

//show previouse image in the lightbox
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

//kewyboard navigation for theh lightbox
