//Grabbs the initials id.
const initials = document.getElementById("initials");
//Gets the save score id to save score.
const saveScoreBtn = document.getElementById("saveScoreBtn");
//puts the final score into local storage. 
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;
//allows for the save button to be disabled if initials is not activated.
initials.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !initials.value;
});
//defining the saveHighScore function. 
saveHighScore = e => {
  e.preventDefault(e);
};
