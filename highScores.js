const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const score = JSON.parse(localStorage.getItem("mostRecentScore"));
console.log(highScores);
console.log("recentScore", score)
// highScores.innerHTML = highScores
//   .map(score => {
//     return `<li class="high-score">${score.name} - ${score.score}</li>`;
//   })
//   .join("");
  var list = "";
for (let index = 0; index < highScores.length; index++) {
    list += `<li class="high-score">${highScores[index].score}</li>`
}

highScoresList.innerHTML = list