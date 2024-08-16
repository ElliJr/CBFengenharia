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


//comentario
// Função para carregar os comentários do localStorage
function loadComments() {
  const commentList = document.getElementById('comment-list');
  const comments = JSON.parse(localStorage.getItem('comments')) || [];

  // Limpa a lista de comentários
  commentList.innerHTML = '';

  // Adiciona os comentários armazenados
  comments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.textContent = comment;
    commentList.appendChild(commentElement);
  });
}

// Função para salvar um comentário no localStorage
function saveComment(comment) {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.push(comment);
  localStorage.setItem('comments', JSON.stringify(comments));
}

// Adiciona o evento de clique para o botão de envio
document.getElementById('submit-comment').addEventListener('click', function () {
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();

  if (commentText !== "") {
    // Salva o comentário e atualiza a lista
    saveComment(commentText);
    loadComments();

    // Limpa o campo de entrada
    commentInput.value = '';
  }
});

// Carrega os comentários ao carregar a página
window.onload = loadComments;

