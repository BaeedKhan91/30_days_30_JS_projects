let wordList = [
  {
    word: "python",
    hint: "programming language",
  },
  {
    word: "guitar",
    hint: "a musical instrument",
  },
  {
    word: "aim",
    hint: "a purpose or intention",
  },
  {
    word: "venus",
    hint: "planet of our solar system",
  },
  {
    word: "gold",
    hint: "a yellow precious metal",
  },
  {
    word: "ebay",
    hint: "online shopping site",
  },
  {
    word: "golang",
    hint: "programming language",
  },
  {
    word: "coding",
    hint: "related to programming",
  },
  {
    word: "matrix",
    hint: "science fiction movie",
  },
  {
    word: "bugs",
    hint: "related to programming",
  },
  {
    word: "avatar",
    hint: "epic science fiction film",
  },
  {
    word: "gif",
    hint: "a file format for image",
  },
  {
    word: "mental",
    hint: "related to the mind",
  },
  {
    word: "map",
    hint: "diagram represent of an area",
  },
  {
    word: "island",
    hint: "land surrounded by water",
  },
  {
    word: "hockey",
    hint: "a famous outdoor game",
  },
  {
    word: "chess",
    hint: "related to a indoor game",
  },
  {
    word: "viber",
    hint: "a social media app",
  },
  {
    word: "github",
    hint: "code hosting platform",
  },
  {
    word: "png",
    hint: "a image file format",
  },
  {
    word: "silver",
    hint: "precious greyish-white metal",
  },
  {
    word: "mobile",
    hint: "an electronic device",
  },
  {
    word: "gpu",
    hint: "computer component",
  },
  {
    word: "java",
    hint: "programming language",
  },
  {
    word: "google",
    hint: "famous search engine",
  },
  {
    word: "venice",
    hint: "famous city of waters",
  },
  {
    word: "excel",
    hint: "microsoft product for windows",
  },
  {
    word: "mysql",
    hint: "a relational database system",
  },
  {
    word: "nepal",
    hint: "developing country name",
  },
  {
    word: "flute",
    hint: "a musical instrument",
  },
  {
    word: "crypto",
    hint: "related to cryptocurrency",
  },
  {
    word: "tesla",
    hint: "unit of magnetic flux density",
  },
  {
    word: "mars",
    hint: "planet of our solar system",
  },
  {
    word: "proxy",
    hint: "related to server application",
  },
  {
    word: "email",
    hint: "related to exchanging message",
  },
  {
    word: "html",
    hint: "markup language for the web",
  },
  {
    word: "air",
    hint: "related to a gas",
  },
  {
    word: "idea",
    hint: "a thought or suggestion",
  },
  {
    word: "server",
    hint: "related to computer or system",
  },
  {
    word: "svg",
    hint: "a vector image format",
  },
  {
    word: "jpeg",
    hint: "a image file format",
  },
  {
    word: "search",
    hint: "act to find something",
  },
  {
    word: "key",
    hint: "small piece of metal",
  },
  {
    word: "egypt",
    hint: "a country name",
  },
  {
    word: "joker",
    hint: "psychological thriller film",
  },
  {
    word: "dubai",
    hint: "developed country name",
  },
  {
    word: "photo",
    hint: "representation of person or scene",
  },
  {
    word: "nile",
    hint: "largest river in the world",
  },
  {
    word: "rain",
    hint: "related to a water",
  },
];
let resetBtn = document.getElementById("btn");
let inputsElem = document.querySelector(".inputs");
let hintEle = document.querySelector(".hint span");
let keyInput = document.querySelector("#keyinput");
let incorrectElem = document.querySelector(".wrong-ans span");
let guessRemainElem = document.querySelector(".remaining-guess span");

let word,
  incorrect = [],
  correct = [],
  guesses;

function randomWord() {
  let randObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = randObj.word;
  let hint = randObj.hint;
  console.log(word);
  guesses = 8;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `  <input type="text"  disabled>`;
  }
  hintEle.innerHTML = hint;
  incorrect = [];
  correct =[]
  guessRemainElem.innerHTML = 8;
  incorrectElem.innerHTML = "";
  inputsElem.innerHTML = html;
}

function initGame(e) {
  let key = e.target.value;
  if (key.match(/^[a-zA-Z]$/) && !incorrect.includes(` ${key}`) && !correct.includes(key)) {
    
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          inputsElem.querySelectorAll("input")[i].value = key;
          correct.push(key);
          console.log(key);
          
          
        }
      }
    } else {
      guesses--;
      incorrect.push(` ${key}`);
      incorrectElem.innerHTML = incorrect;
      guessRemainElem.innerHTML = guesses;
    }
  }

  keyInput.value = "";

  if (guesses < 1) {
    Toastify({
      text: `❌ Tries over! The word was "${word}".`,
      duration: 3000,
      gravity: "top", // "top" or "bottom"
      position: "center", // "left", "center" or "right"
      backgroundColor: "linear-gradient(to right, #8e0e00, #e60d0dff)",
      stopOnFocus: true,
      className: "game-toast",
    }).showToast();
    for (let i = 0; i < word.length; i++) {  
        inputsElem.querySelectorAll("input")[i].value = word[i];
    }
}else if (correct.length === word.length) {
    Toastify({
      text: `✅ Correct! You guessed the word "${word}" 🎉`,
      duration: 3000,
      gravity: "top", // "top" or "bottom"
      position: "center", // "left", "center" or "right"
      backgroundColor: "linear-gradient(to right, #0f9d58, #034d26)",
      stopOnFocus: true,
      className: "game-toast",
    }).showToast();
    
    setTimeout(()=>{
        randomWord()
    },3000)

  }
}

resetBtn.addEventListener("click", randomWord);
keyInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => keyInput.focus());
