//Reference to the questionn with getElementById.  
const question = document.getElementById("question");
//Reference to the choices with getElementByClassName.
const choices = Array.from(document.getElementsByClassName("choice-text"));
//

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
question: "Inside which HTML element do we put the JavaScript?",
choice1: "<script>",
choice2: "<javascript>",
choice3: "<js>",
choice4: "<scripting>",
answer: 1
},
{
    question: "???",
choice1: "<script href='xxx.js'>",
choice2: "<script name='xxx'>",
choice3: "<script src='xxx.js'>",
choice4: "<script file='xxx.js'>",
answer: 3
},
{
    question: "How do you write 'Hello World' in an alert box?",
choice1: "msgBox('Hello');",
choice2: "alertBox('Hello');",
choice3: "msg('Hello');",
choice4: "alert('Hello');",
answer: 4
}
],
