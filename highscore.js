// variables
var returnQuizEl = document.querySelector("#returnQuiz");
var clearScoreEl = document.querySelector("#clearScores");


returnQuizEl.addEventListener("click", function () {
    window.location.href = "index.html";
});

clearScoreEl.addEventListener("click", function () {
    window.localStorage.clear();
    window.localStorage.reload();
});