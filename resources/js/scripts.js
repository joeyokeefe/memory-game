const cards = document.querySelectorAll(".card");
const cardFronts = document.querySelectorAll(".cardFront");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("flip");
  });
});

/*
cards.forEach((card) => {
  card.addEventListener("click", function () {
    if (card.style.backgroundColor === "red") {
      card.style.backgroundColor = "blue";
    } else {
      card.style.backgroundColor = "red";
    }
  });
});
*/
