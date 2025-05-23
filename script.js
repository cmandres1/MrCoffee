// script.js

// Array con las URLs de las imágenes del carrusel
const images = [
    "images/Mr. Coffee main.png",
    "images/Mr. Coffee 1.png",
    "images/Mr. Coffee 2.png",
    "images/Mr. Coffee 3.png",
    "images/Mr. Coffee 4.png"
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

/* promociones */
const modal = document.getElementById('img-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('#promo-gallery img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
