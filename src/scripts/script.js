// Acha o contêiner de rolagem e o botão
const carousel = document.querySelector(".carousel");
const scrollButtonNext = document.getElementById("btn-next");
const scrollButtonPrev = document.getElementById("btn-prev");

// Duplicar os cards para permitir a rolagem infinita
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  const clone = card.cloneNode(true); // Cria uma cópia de cada card
  carousel.appendChild(clone); // Adiciona a cópia ao final
});

// Função para rolar o contêiner para o próximo card
scrollButtonNext.addEventListener("click", () => {
  // Rola o contêiner para a próxima posição com base no tamanho de cada card
  const cardWidth = carousel.querySelector(".card").offsetWidth;
  carousel.scrollBy({
    left: cardWidth + 10, // move a largura de um card + margem
    behavior: "smooth", // rolagem suave
  });

  // Quando chegar ao final, volta para o início
  if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
    setTimeout(() => {
      carousel.scrollLeft = 0; // Volta para o início
    }, 300); // Espera o tempo da rolagem suave
  }
});

// Função para rolar o contêiner para o próximo card
scrollButtonPrev.addEventListener("click", () => {
  // Rola o contêiner para a próxima posição com base no tamanho de cada card
  const cardWidth = carousel.querySelector(".card").offsetWidth;
  carousel.scrollBy({
    left: -(cardWidth + 10), // move a largura de um card + margem
    behavior: "smooth", // rolagem suave
  });

  // Quando chegar ao início, vai para o final
  if (carousel.scrollLeft <= 0) {
    setTimeout(() => {
      carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth; // Vai para o final
    }, 300); // Espera o tempo da rolagem suave
  }
});