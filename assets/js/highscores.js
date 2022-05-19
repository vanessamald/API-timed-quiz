var highScoresEl = document.getElementById('highScores');
var highScores = JSON.parse(localStorage.getItem('highScores'));
var getHighScoresEl = document.getElementById('getHighScores');

console.log(highScores);

console.log(highScores[3].name);

var getHighScores = function() {
    if (highScores > '75') {
        highScoresEl.innerHTML = highScores.name;
       // document.createElement("LI").append(highScores.username);
        //highScores.username
       //return `<li id="list-highscores">${highScores.username} - ${highScores.score}<li>`;
       console.log(highScores);
    } else {
        console.log("No HIGH SCORES!");
    }
//.join(" ");

};
/*
highScoresEl.innerHTML =
highScores.map( score => {
    return `<li id="list-highscores">${score.username} - ${score.score}<li>`;
})
.join(" ");
;
*/
getHighScoresEl.addEventListener("click", getHighScores);
