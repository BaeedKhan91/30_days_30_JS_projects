let cards = document.querySelectorAll(".card");
let timeElem = document.getElementById("timer");
let movesElem = document.getElementById("moves");

let cardOne, cardTwo;
let disableDeck = false;
let matchPairs = 0;
let time = 30;
let timer;
let moves = 20;

function startTimer() {
  timer = setInterval(() => {
    time--;
    timeElem.textContent = `⏱ Time: ${time} left`;
    if (time < 1) {
      clearInterval(timer);
      showToast("⏳ Time Over!", "#e74c3c");
      setTimeout(() => {
        shuffleCards();
        resetCard();
        time = 60;
        moves = 20;
        movesElem.textContent = `🎯 Moves: ${moves} left`;
        startTimer();
      }, 1000);
    }
  }, 1000);
}

shuffleCards();

setTimeout(() => {
  startTimer();
}, 2000);

function matchCard(img1, img2) {
  return img1 === img2;
}

function flipCard(e) {
  let clickedCard = e.currentTarget;
  if (
    clickedCard === cardOne ||
    disableDeck ||
    clickedCard.classList.contains("flip")
  )
    return;
  clickedCard.classList.add("flip");
  if (!cardOne) {
    return (cardOne = clickedCard);
  }
  cardTwo = clickedCard;
  disableDeck = true;

  let cardOneImg = cardOne.querySelector("img").src;
  let cardTwoImg = cardTwo.querySelector("img").src;

  if (matchCard(cardOneImg, cardTwoImg)) {
    matchPairs++;

    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);

    resetCard();

    if (matchPairs === cards.length / 2) {
      setTimeout(() => {
        showToast("🎉 You Found All Cards!", "#27ae60");
        shuffleCards();
        time = 60;
        moves = 20;
        movesElem.textContent = `🎯 Moves: ${moves} left`;
      }, 500);
    }
  } else {
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
      moves--;
      movesElem.textContent = `🎯 Moves: ${moves} left`;

      if (moves < 1) {
        showToast("🎯 Out of Moves!", "#e67e22");
        moves = 20;
        // resetCard()
      }
    }, 400);
    setTimeout(() => {
      cardOne.classList.remove("shake", "flip");
      cardTwo.classList.remove("shake", "flip");
      resetCard();
    }, 1200);
  }
}

function showToast(message, bgColor = "#333") {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top", // top or bottom
    position: "center", // left, center, right
    backgroundColor: bgColor,
    stopOnFocus: true,
    style: {
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "15px",
      padding: "10px 20px",
    },
  }).showToast();
}

function resetCard() {
  cardOne = null;
  cardTwo = null;
  disableDeck = false;
}

function shuffleCards() {
  matchPairs = 0;
  disableDeck = false;
  cardOne = cardTwo = null;

  let arr = [];
  for (let i = 1; i <= cards.length / 2; i++) {
    arr.push(i, i);
  }
  arr.sort(() => Math.random() - 0.5);

  cards.forEach((card, i) => {
    card.classList.remove("flip", "shake");
    let imgtag = card.querySelector("img");
    imgtag.src = `./Memory Card Game Images/img-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
    //
  });
}
