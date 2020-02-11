//Reference to the questionn with getElementById.
const question = document.getElementById("question");
//Array of options with getElementByClassName.
const options = Array.from(document.getElementsByClassName("option-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
//variables
let currentQuestion = {};
//variable for creating a short delay after selecting answers.
let acceptingAnswers = true;
//Score variable
let score = 0;
//variable for a Counter
let questionCounter = 0;
//variable for accessing questions.
let availableQuestions = [];

//Questions with options for answers and a checker for correct answer.
let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    option1: "Strings",
    option2: "Booleans",
    option3: "Alerts",
    option4: "Numbers",
    answer: 3
  },
  {
    question: "The condition in an if/else statement is enclosed within___.",
    option1: "Quotes",
    option2: "Curley Brackets",
    option3: "Parentheses",
    option4: "Square Brackets",
    answer: 3
  },
  {
    question: "Arrays in JavaScript can be used to store___.",
    option1: "numbers and Strings",
    option2: "other Arrays",
    option3: "booleans",
    option4: "all of the above",
    answer: 4
  },
  {
    question:
      "String values must be enclosed within__ when being assigned to variables.",
    option1: "Commas",
    option2: "Curley Brackets",
    option3: "quotes",
    option4: "parentheses",
    answer: 4
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is.",
    option1: "JavaScript",
    option2: "terminal/Bash",
    option3: "for loops;",
    option4: "console.log",
    answer: 4
  }
];

// A bonus for when a question is answered correctly.
const CORRECT_BONUS = 10;
// How many questions the user gets..
const MAX_QUESTIONS = 5;

//Start game with a counter, score, and a copy of the avail questions array.
startGame = () => {
  questionCounter = 0;
  score = 0;
  //Grabs a full copy of all the questions within the array.
  availableQuestions = [...questions];
  getNewQuestion();
};

//question qounter to add 1.
getNewQuestion = () => {
  //allows for application to access the end quiz file after max questions reached.
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    return window.location.assign("/endQuiz.html");
  }

  //question qounter to add 1
  questionCounter++;
  //updates question counter as each new question is presented. 
  questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
  //gets a random question throught the questions array length.
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  //
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  //grabs the option out of the question.
  options.forEach(option => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });
  //allows for the correct option or answer to calculate properly.
  availableQuestions.splice(questionIndex, 1);
  console.log(availableQuestions);
  acceptingAnswers = true;
};
//Return to a new question after a question is accepted.
options.forEach(option => {
  option.addEventListener("click", e => {
    //keeps from clicking on answers too fast
    if (!acceptingAnswers) return;
    //if the accepted answer is false
    acceptingAnswers = false;

    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];
    //applies the incorrect answer and if not incorrect then answer is correct by default.
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    console.log(classToApply);

    if(classToApply == 'correct') {
      incrementScore(CORRECT_BONUS);
    }

    selectedOption.parentElement.classList.add(classToApply);

    //loads a new question after selected a question. Sets a call back function for a delay. Wait 1 sec.
    setTimeout(() => {
      selectedOption.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});
//updates score text with new score. 
incrementScore = num => {
  score +=num
  scoreText.innerText = score;
}
//star function.
startGame();
