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
      question: "Inside which HTML element do we put the JavaScript?",
      option1: "<script>",
      option2: "<javascript>",
      option3: "<js>",
      option4: "<scripting>",
      answer: 1
    },
    {
      question:
        "What is the correct syntax for reerring to an external script called 'xxx.js'?",
      option1: "<script href='xxx.js'>",
      option2: "<script name='xxx.js'>",
      option3: "<script src='xxx.js'>",
      option4: "<script file='xxx.js'>",
      answer: 3
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      option1: "msgBox('Hello World');",
      option2: "alertBox('Hello World');",
      option3: "msg('Hello World');",
      option4: "alert('Hello World');",
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
