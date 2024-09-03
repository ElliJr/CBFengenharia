//menu
function toggleMenu() {
  const menu = document.getElementById('menu')

  if (menu.style.left === '-400px') {
    menu.style.left = '0';
  } else {
    menu.style.left = '-400px'
  }
}
// area das imagems
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else {
        currentIndex = 0;
        carousel.style.transform = `translateX(0)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else {
        currentIndex = carousel.children.length - 1;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

function menuWhat(){
  alert("Voçê está solicitando um orçamento")
}