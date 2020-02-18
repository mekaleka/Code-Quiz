//Grabbs the initials id.
const initials = document.getElementById("initials");
//Gets the save score id to save score.
const saveScoreBtn = document.getElementById("saveScoreBtn");

const finalScore = document.getElementById("finalScore");
//puts the final score into local storage.
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

//allows for the save button to be disabled if initials is not activated.
initials.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !initials.value;
});
//defining the saveHighScore function.
saveHighScore = e => {
  e.preventDefault(e);

  //allows for a max of the top 5 initials logged
  const score = {
    score: Math.floor(Math.random() * 100),
    name: initials.Value
  };
  highScores.push(score);

  highScores.sort((a, b) => b.score - a.score);
  //allows for a max of 5 initials logged.
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("highScores.html");
};
