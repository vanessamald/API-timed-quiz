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


savingScoreBtn.addEventListener("click", saveUserScore);

// object with username and score info
var score = {
    score: userRecentScore,
    name: username.value
};
// add object to high scores array
highScores.push(score);

// sort scores from highest to lowest 
highScores.sort( (a, b) => b.score - a.score)

// set cut off for high scores
highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
// go back home after saving score
//window.location.assign("");

console.log(highScores);
};
