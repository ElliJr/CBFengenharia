//menu
function toggleMenu() {
  const menu = document.getElementById('menu')

  if (menu.style.left === '-200px') {
    menu.style.left = '0';
  } else {
       menu.style.left = '-200px'    
  }
}

// area das imagems
document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel-inner');
  let currentIndex = 0;
  const items = carouselInner.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  
  setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 5000); // Muda a imagem a cada 5 segundos
});


