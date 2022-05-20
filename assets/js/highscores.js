var highScoresEl = document.getElementById('highScores');
var highScores = JSON.parse(localStorage.getItem('highScores'));
var getHighScoresEl = document.getElementById('getHighScores');
var displayUsername = document.getElementById('display-name');
var displayScore = document.getElementById('display-score');
var displayUsername2 = document.getElementById('display-name2');
var displayScore2 = document.getElementById('display-score2');
var displayUsername3 = document.getElementById('display-name3');
var displayScore3 = document.getElementById('display-score3');

console.log(highScores);

var getHighScores = function() {
    highScoresEl.innerText= highScores.toString();
    console.log(highScores.score);
}

var displayHighScores = function(highScores) {
    for (var i = 0; i < highScores.length; i++) {
	//console.log("TESTING");
    displayUsername.textContent=("Username: " + highScores[0].name);
    displayScore.textContent=("Score: " + highScores[0].score); 

    displayUsername2.textContent=("Username: " + highScores[1].name);
    displayScore2.textContent=("Score: " + highScores[1].score); 

    displayUsername3.textContent=("Username: " + highScores[2].name);
    displayScore3.textContent=("Score: " + highScores[2].score); 
    }  
};

var getHighScoresBtn = function(event) {
var data = event.target.getAttribute("data");
if (data == 'getHighScores') {
  console.log("TESTING CLICK 1")
  displayHighScores(highScores);
}

}

//var getHighScores = function() {
    //if (highScores > '75') {
        //highScoresEl.innerHTML = highScores.name;
       // document.createElement("LI").append(highScores.username);
        //highScores.username
       //return `<li id="list-highscores">${highScores.username} - ${highScores.score}<li>`;
       //console.log(highScores);
    //} else {
       // console.log("No HIGH SCORES!");
    //}
//.join(" ");

//};
/*
highScoresEl.innerHTML =
highScores.map( score => {
    return `<li id="list-highscores">${score.username} - ${score.score}<li>`;
})
.join(" ");
;
*/
getHighScoresEl.addEventListener("click", getHighScoresBtn);
