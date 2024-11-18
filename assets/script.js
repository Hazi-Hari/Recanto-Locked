/* Ja vou deixar bem obvio aqui em cima. Nenhum script foi feito por mim. Nao quero ser injusto e ganhar creditos de algo que eu nao fiz.*/

function toggleAnswer(button) {
    const answer = button.nextElementSibling; // Seleciona a resposta
    answer.classList.toggle('open'); // Alterna a classe 'open'
  }


  const carrosselInner = document.querySelector('.carrossel-inner');
  const items = document.querySelectorAll('.carrossel-item');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  function updateCarrossel() {
    const offset = -currentIndex * 100; // Deslocamento para o item atual
    carrosselInner.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Avança ao próximo item
    updateCarrossel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Volta ao item anterior
    updateCarrossel();
  });