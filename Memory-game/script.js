const gameContainer = document.getElementById('game-container');
const startButton = document.getElementById('start-btn');
const cards = generateCards(20);

let firstCard = null;
let secondCard = null;
let isFlipped = false;

startButton.addEventListener('click', startGame);

function startGame() {
    shuffle(cards);
    renderCards();
    startButton.disabled = true;
}

function generateCards(numPairs) {
    const pairs = [];
    for (let i = 1; i <= numPairs; i++) {
        pairs.push({ id: i, value: `#${i}` });
        pairs.push({ id: i, value: `#${i}` });
    }
    return pairs;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderCards() {
    gameContainer.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = isFlipped ? card.value : '';
        cardElement.addEventListener('click', () => flipCard(cardElement, card));
        gameContainer.appendChild(cardElement);
    });
}

function flipCard(cardElement, card) {
    if (!isFlipped) {
        firstCard = card;
        isFlipped = true;
    } else {
        secondCard = card;
        if (firstCard.id === secondCard.id && firstCard !== secondCard) {
            cardElement.classList.add('hidden');
            gameContainer.querySelector(`[id='${firstCard.id}']`).classList.add('hidden');
        } else {
            setTimeout(() => {
                gameContainer.querySelectorAll('.card').forEach(card => card.textContent = '');
            }, 1000);
        }
        isFlipped = false;
    }
}
