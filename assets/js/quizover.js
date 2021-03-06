// quiz over dom elements
var username = document.getElementById("username");
var savingScoreBtn = document.getElementById("saving-score");
var finalScore = document.getElementById("final-score");
var userRecentScore = localStorage.getItem('userRecentScore');

// array of high scores
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// setting max high scores
var highScoresMax = 5;
console.log(highScores);

finalScore.innerText = userRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
    // button is disabled if no username in text box
   savingScoreBtn.disabled = !username.value;
})

saveUserScore = e => {
    console.log("SAVE BUTTON CLICKED");
    e.preventDefault();

// object with username and score info
var score = {
    score: userRecentScore,
    name: username.value
};
// add object to high scores array
highScores.push(score);
console.log(score);

localStorage.setItem('score', JSON.stringify(highScores));


// sort scores from highest to lowest 
highScores.sort( (a, b) => b.score - a.score)

// set cut off for high scores
highScores.splice(3);

localStorage.setItem("highScores", JSON.stringify(highScores));
//go back home after saving score
window.location.assign("index.html");

console.log(highScores);

};
savingScoreBtn.addEventListener("click", saveUserScore);