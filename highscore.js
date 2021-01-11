// variables
var returnQuizEl = document.querySelector("#returnQuiz");
var clearScoreEl = document.querySelector("#clearScores");
var highscoreEl = document.querySelector("#display-highscores");
// re-directs user to the index.html
returnQuizEl.addEventListener("click", function () {
    window.location.href = "index.html";
});
//event listener for clear button to clear scores in local storage and html
clearScoreEl.addEventListener("click", function () {
    highscoreEl.innerHTML = "";
    window.localStorage.clear();
    window.localStorage.reload();
});
// retrieve scores and names from local storage
var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
// put names and scores into list
if (highScores !== "") {
    // sort function to rank the scores from highest to lowest, shoutout to BCS learning for the help
    highScores.sort(function (a, b) {
        return parseInt(b.score) - parseInt(a.score);
    });
    // loop to pull in scores/names
    for (let i = 0; i < highScores.length; i++) {
        var listCreate = document.createElement("li");
        listCreate.setAttribute("class", "listCreate");
        listCreate.setAttribute("style", "font-weight: bold; padding: 5px")
        listCreate.textContent = highScores[i].name + " " + highScores[i].score;
        highscoreEl.appendChild(listCreate);
    };

}
