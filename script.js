// script.js

// Array con las URLs de las imágenes del carrusel
const images = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4"
];

// Selección de elementos
const carouselImage = document.querySelector(".carousel-image");
let currentIndex = 0;

// Función para cambiar la imagen del carrusel
function changeImage(index) {
    carouselImage.src = images[index];
}

// Función para ir a la imagen siguiente
function moveSlide(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    changeImage(currentIndex);
}

