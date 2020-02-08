var questionIndex = 0;
var rightAnswer = 0;
var wrongAnswer = 0;
var questions = [
  {
    question: "Is the sky Blue?",
    answers: ["yes", "no", "maybe"],
    answerIndex: "yes"
  },

  {
    question: "Is the sky Blue?",
    answers: ["yes", "no", "maybe"],
    answerIndex: "yes"
  }
  // //or use
  // {
  //     question: "Is the Sky Blue?",
  //     answers: [
  //         {text: "yes", isCorrect: true},
  //         {text: "no", isCorrect: false},
  //         {text: "no", isCorrect: false}
  //     ]
  // }
];

$("#startButton").on("click", function(event) {
  event.preventDefault();
  $("#startButton").hide();
  displayQuestions();
});
$(".questions").on("click", ".choices", function(event) {
  event.preventDefault();
  var userChoice = $(this).attr("data-choice");
  var correctAnswer = $(this).attr("data-answer");
  if (userChoice === correctAnswer) {
    rightAnswer++;
  } else {
    wrongAnswer++;
  }
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    displayQuestions();
  } else {
    //hide the questions container and in the results container you will write the right answer and wrong answer variables lines 37 and 40.
  }
});

function displayQuestions() {
  $(".questions").empty();
  $(".questions").append(`<h6>${questions[questionIndex].question}</h6>`);
  for (let i = 0; i < questions[questionIndex].answers.length; i++) {
    $(".questions").append(
      `<button class="choices" data-choice="${questions[questionIndex].answers[i]}" data-answer="${questions[questionIndex].answerIndex}">${questions[questionIndex].answers[i]}</button>`
    );
  }
}

//create timer functions and then calling them..
