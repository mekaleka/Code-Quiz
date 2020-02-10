//Reference to the questionn with getElementById.
const question = document.getElementById("question");
//Array of options with getElementByClassName.
const options = Array.from(document.getElementsByClassName("option-text"));
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
      question:
        "The condition in an if/else statement is enclosed within___.",
      option1: "Quotes",
      option2: "Curley Brackets",
      option3: "Parentheses",
      option4: "Square Brackets",
      answer: 3
    },
    {
      question: "Arrays in JavaScript can be used to store___.",
      option1: "Numbers and Strings",
      option2: "Other Arrays",
      option3: "Booleans",
      option4: "All of the above",
      answer: 4
    },
    {
     question: "String values must be enclosed within__ when being assigned to variables.",
     option1: "msgBox('Hello World');",
     option2: "alertBox('Hello World');",
     option3: "msg('Hello World');",
     option4: "alert('Hello World');",
     answer: 3
    },
    {
     question: "A very useful tool used during development and debugging for printing content to the debugger is.",
     option1: "JavaScript",
     option2: "terminal/Bash",
     option3: "for loops;",
     option4: "console.log",
     answer: 4
    }
  ],
  //A correct bonus for when a question is answered correctly.
  // const CORRECT_BONUS = 10;
  //How many questions the user gets..
  // const MAX_QUESTIONS = 3;

  //Start with a counter, score, and a copy of the avail questions array.
  startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
  };

//gets a new random question
getNewQuestion = () => {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  options.forEach(option => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  console.log(availableQuestions);
  acceptingAnswers = true;
};
options.forEach(option => {
  option.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];
    console.log(selectedAnswer);
    getNewQuestion();
  });
});

startGame();
