// variables
var returnQuizEl = document.querySelector("#returnQuiz");
var clearScoreEl = document.querySelector("#clearScores");
var highscoreEl = document.querySelector("#display-highscores");

// var highscores= JSON.parse(window.localStorage.getItem("highscores")) || [];

// highscoreEl.appendChild(highscores);

// re-directs user to the index.html
returnQuizEl.addEventListener("click", function () {
    window.location.href = "index.html";
});
//event listener for clear button to clear scores
clearScoreEl.addEventListener("click", function () {
    window.localStorage.clear();
    window.localStorage.reload();
});