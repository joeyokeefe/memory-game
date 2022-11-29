const cards = document.querySelectorAll(".card");
const startButton = document.getElementById("startButton");

//initialize global variables
let cardOne, cardTwo;
let lock = true;
let hasFlipped = false;

function flipCard() {
  if (lock) return;
  if (this === cardOne) return;
  //flips card
  this.classList.add("flip");

  //checks if this is the first or second card to be flipped
  if (!hasFlipped) {
    hasFlipped = true;
    cardOne = this;
    return;
  }

  cardTwo = this;
  lock = true;

  //checks for match between two cards
  checkMatch();
}

const checkMatch = () => {
  //if the datasets of the cards match, event listener is removed and cards remain face up
  if (cardOne.dataset.number === cardTwo.dataset.number) {
    cardOne.removeEventListener("click", flipCard());
    cardTwo.removeEventListener("click", flipCard());
    resetBoard();
    return;
  }

  //flips cards back over if they are not a match
  resetCards();
};

const resetCards = () => {
  lock = true;
  //cards flip back over after a second if they are not a match
  setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    resetBoard();
  }, 1000);
};

const resetBoard = () => {
  //resets game board between attempts regardless of match
  hasFlipped = false;
  lock = false;
  cardOne = null;
  cardTwo = null;
};

//gives each card a random value from 1-16 and positions them accordingly
(function shuffleCards() {
  cards.forEach((card) => {
    let randPosition = Math.floor(Math.random() * 16);
    card.style.order = randPosition;
  });
})();

//adds event listener for card flip on click
cards.forEach((card) => card.addEventListener("click", flipCard));

startButton.addEventListener("click", function () {
  lock = false;
});
