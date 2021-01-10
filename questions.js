// variables
var questionIndex = 0;
var correctAnswer = 0;
var score = 0;
var remainTimeEl = document.querySelector("#remainTime");
var startQuizEl = document.querySelector("#startQuiz");
var quizQuestionsEl = document.querySelector("#quizQuestions");
var quizChoicesEl = document.querySelector("#quizChoices");
var storeScoreEl = document.querySelector("#storeScores");
var scoreBoardEl = document.querySelector("#scoreBoard");
var resultDisplayEl = document.querySelector("#resultDisplay");
var completedEl = document.querySelector("#completed");
var enterNameEl = document.querySelector("#enterName");
var buttonEl = document.createElement("div");

// Create questions for the quiz pulled from demo gif
var questions = [
    {
        questionText: "Question 1: Commonly used data types DO NOT include which of the following.",
        choices: ["Booleans", "Numbers", "Strings", "Alerts"],
        rightChoice: "Alerts"
    },

    {
        questionText: "Question 2: The condition in an if / else statement is enclosed within ______.",
        choices: ["Curly Brackets", "Quotes", "Parentheses", "Square Brackets"],
        rightChoice: "Parentheses"
    },

    {
        questionText: "Question 3: Arrays in Javascript can be used to store ______.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        rightChoice: "All of the above"
    },

    {
        questionText: "Question 4: String values must be enclosed within ______ when being assigned to variables.",
        choices: ["Curly Brackets", "Quotes", "Commas", "Parentheses"],
        rightChoice: "Quotes"
    },

    {
        questionText: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is.",
        choices: ["Javascript", "Terminal/Bash", "For loops", "Console log"],
        rightChoice: "Console log"
    },
];
// timer code setup
var count = questions.length * 15;
var quizStarted = false;
var timer = setInterval(function () {
    if (quizStarted) {
        count--;
        remainTimeEl.textContent = "Time remaining = " + count + " seconds";
        if (count <= 0) {
            clearInterval(timer);
            quizChoicesEl.innerHTML = "";
            quizQuestionsEl.innerHTML = "";
            resultDisplayEl.innerHTML = "";
            remainTimeEl.textContent = "Time remaining =  Time is up!";
            completedEl.textContent = ("Sorry you have ran out of time! You answered " + correctAnswer + " question(s) correctly!");
            // button for user to re-attempt survey if timer = 0
            var retryBtn = document.createElement("button");
            retryBtn.setAttribute("class", "choice-button");
            retryBtn.setAttribute("style", "background: #0275d8; padding: 10px; color: white; margin: 20px 10px; font-weight: bold")
            retryBtn.textContent ="Try Again!";
            completedEl.appendChild(retryBtn);
            retryBtn.addEventListener("click", function () {
                window.location.href = "index.html";
            })
        }
    }
}, 1000)
// Add eventlistener to start button
startQuizEl.addEventListener("click", function () {
    quizStarted = true;
    genQuizQuestions()
});
// function to generate questions/choices
function genQuizQuestions() {
    // clear data from page
    startScreen.innerHTML = "";
    buttonEl.innerHTML = "";
    // loop to pull in questions and choices
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].questionText;
        var userChoices = questions[questionIndex].choices;
        quizQuestionsEl.innerHTML = userQuestion;
    }
    // creating buttons and popualting with question choices
    userChoices.forEach(function (newItem) {
        var buttonItem = document.createElement("button");
        buttonItem.setAttribute("class", "choice-button");
        buttonItem.setAttribute("style", "background: #0275d8; padding: 10px; color: white; margin: 20px 10px; font-weight: bold")
        buttonItem.textContent = newItem;
        quizChoicesEl.appendChild(buttonEl);
        buttonEl.appendChild(buttonItem);
    })
    // click event to check answer for each button, was able to get the code to work after working with tutor
    document.querySelectorAll(".choice-button").forEach(function (checkChoice) {
        checkChoice.addEventListener("click", function () {
            let userSelect = checkChoice.innerText
            // if user seelcts correctly
            if (userSelect === questions[questionIndex].rightChoice) {
                resultDisplayEl.textContent = ("The previous answer was correct!");
                correctAnswer++
                questionIndex++;
            } 
            // if user selects incorrectly
            else {
                count = count - 10;
                resultDisplayEl.textContent = ("The previous answer was incorrect.");
                questionIndex++;
            }
            // When all questions have been answered conclude quiz, scores, etc.
            if (questionIndex >= questions.length) {
                // clear all elements (check with TA or Tutor to see if there is a simpler way)
                quizChoicesEl.innerHTML = "";
                quizQuestionsEl.innerHTML = "";
                resultDisplayEl.innerHTML = "";
                remainTimeEl.innerHTML = "";
                // new element to quiz conclusion
                completedEl.textContent = ("Quiz has been completed! You answered " + correctAnswer + " question(s) correctly!");
                // stop the timer count and display users final score
                clearInterval(timer);
                score = count;
                var scoreInfo = document.createElement("h3");
                scoreInfo.setAttribute("id", "scoreInfo");
                scoreInfo.setAttribute("style", "color: green; font-weight: bold; padding: 20px");
                scoreInfo.textContent = ("Final Score is: " + score);
                completedEl.appendChild(scoreInfo);
                // field for user to input in name or initials
                enterNameEl.textContent = ("Please enter in your name or initials: ");
                var input = document.createElement("input");
                input.setAttribute("id", "input");
                input.setAttribute("type", "text");
                input.textContent = "";
                enterNameEl.appendChild(input);
                // button to submit name or initials
                var submitBtn = document.createElement("button");
                submitBtn.setAttribute("class", "choice-button");
                submitBtn.setAttribute("style", "background: #0275d8; padding: 10px; color: white; margin: 20px 10px; font-weight: bold")
                submitBtn.textContent ="Submit";
                enterNameEl.appendChild(submitBtn);
                // event listener submit button to store names in local storage
                submitBtn.addEventListener("click", function () {
                    // get value from input field and trim
                    var name = input.value.trim();
                    // verify field is not blank
                    if (name === "") {
                        alert("Name/inital field cannot be blank.")
                        return false;
                    }else {
                        // retrieve saved scores from locale storage or empty array
                        var highScores= JSON.parse(window.localStorage.getItem("highscores")) || [];
                        // new score for current user
                        var userScore = {
                            score: score,
                            name: name
                        };     
                        //save current user score to locale storage
                        highScores.push(userScore);
                        window.localStorage.setItem("highScores", JSON.stringify(highScores));
                    }
                    // re-direct user to the highcore page
                    window.location.href = "highscore.html";
                })
            // if all questions are not answwered keep generating questions (was able to resovle issue with BCS support assistant)
            } else {
                genQuizQuestions();
            }
        })
    })
}
