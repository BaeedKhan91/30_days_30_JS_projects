const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Galileo Galilei", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    answers: [
     { text: "&lt;link&gt;", correct: false },
    { text: "&lt;a&gt;", correct: true },
    { text: "&lt;href&gt;", correct: false },
    { text: "&lt;hyper&gt;", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style System", correct: false },
      { text: "Colorful Style Syntax", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let questionIndex = 0;
let score = 0;

function startQuiz() {
  questionIndex = 0;
  score = 0;
  nextBtn.innerHTML ='Next'
  nextBtn.style.display = "none"
  showQuestion();
}

function showQuestion() {
  resetQuestions();
  let currentQuestion = questions[questionIndex];
  let questionNo = questionIndex + 1;
  questionElement.innerHTML = `${questionNo}.${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = answer.text;
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", (e) => {
      let selectedAnswer = e.target;
      if (selectedAnswer.dataset.correct) {
        selectedAnswer.classList.add("correct");
        score++;
      } else {
        selectedAnswer.classList.add("in-correct");
      }
      Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct) {
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextBtn.style.display = "block";
      
    });
  });
}

function showScore() {
  resetQuestions()
  questionElement.innerHTML = `Youe Scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Play Again"
  nextBtn.addEventListener('click',()=>startQuiz())
}


nextBtn.addEventListener("click", () => {
  questionIndex++;
  if (questionIndex < questions.length) {
    nextBtn.style.display = "none"
    showQuestion()
  } else {
    showScore()
    
  }
});

function resetQuestions() {
  answerButtons.innerHTML = "";
}

startQuiz();

