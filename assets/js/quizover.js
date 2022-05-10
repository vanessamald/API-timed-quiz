// quiz over dom elements
var username = document.getElementById("username");
var savingScoreBtn = document.getElementById("saving-score");
var finalScore = document.getElementById("final-score");
var userRecentScore = localStorage.getItem('userRecentScore');
finalScore.innerText = userRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
    // button is disabled if no username in text box
    savingScoreBtn.disabled = !username.value;
})

saveUserScore = e => {
    console.log("SAVE BUTTON CLICKED");
    e.preventDefault();
};

savingScoreBtn.addEventListener("click", saveUserScore);