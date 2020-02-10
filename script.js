//Reference to the questionn with getElementById.  
const question = document.getElementById("question");
//Array of choices with getElementByClassName.
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
    question: "???",
        option1: "answer options1",
        option2: "answer options2",
        option3: "answer options3",
        option4: "answer options4",
        answer: 3
},
{
    question: "How do you write 'Hello World' in an alert box?",
        option1: "answer options1",
        option2: "answer options2",
        option3: "answer options3",
        option4: "answer options4",
        answer: 4
}
],
//A correct bonus for when a question is answered correctly. 
const CORRECT_BONUS = 10;
//How many questions the user gets..
const MAX_QUESTIONS = 3;
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
//
    options.forEach( option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    });
},

startGame();