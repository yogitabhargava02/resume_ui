const cardContainer = document.querySelector('.card-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pageNumber = document.querySelector('.page-number');

const resumeData = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Helen",
  "Ivy",
  "Jack",
  "Kate",
  "Leo",
  "Mary",
  "Nick",
  "Olivia",
  "Paul",
  "Queen",
  "Roy",
  "Sarah",
  "Tom"
];

const cardsPerPage = 10;
let currentPage = 1;
function createCards(data) {
    cardContainer.innerHTML = '';
    data.forEach(name => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const content = document.createElement('div');
      content.classList.add('card-content');
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = name;
      content.appendChild(nameElement);
  
      card.appendChild(content);
  
      // Add click event listener and specify the target URL
      card.addEventListener('click', () => {
        window.location.href = 'https://example.com'; // Replace with your desired URL
      });
  
      // Add hover effect (optional)
      card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.2)';
      });
      card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)'; // Reset shadow
      });
  
      cardContainer.appendChild(card);
    });
  }

function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const currentPageData = resumeData.slice(startIndex, endIndex);

  createCards(currentPageData);

  pageNumber.textContent = currentPage;
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < Math.ceil(resumeData.length / cardsPerPage)) {
    currentPage++;
    showPage(currentPage);
  }
});

showPage(currentPage);