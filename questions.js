// variables
var questionIndex = 0;
var correctAnswer = 0;
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

// Create questions for the quiz
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
            clearInterval(timer);
            score = count;
            var createP = document.createElement("p");
            createP.setAttribute("id", "createP");
            createP.textContent = ("Your final score is: " + score);
            completedEl.appendChild(createP);
        }
    }
}, 1000)
// Add eventlistener to start button
startQuizEl.addEventListener("click", function () {
    quizStarted = true;
    genQuizQuestions()
});

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
    // click event to check answer for each button
    document.querySelectorAll(".choice-button").forEach(function (checkChoice) {
        checkChoice.addEventListener("click", function () {
            let userSelect = checkChoice.innerText
            if (userSelect === questions[questionIndex].rightChoice) {
                resultDisplayEl.textContent = ("The previous answer was correct!");
                correctAnswer++
                questionIndex++;
            } else {
                count = count - 10;
                resultDisplayEl.textContent = ("The previous answer was incorrect.");
                questionIndex++;
            }
            if (questionIndex >= questions.length) {

                quizChoicesEl.innerHTML = "";
                quizQuestionsEl.innerHTML = "";
                resultDisplayEl.innerHTML = "";
                remainTimeEl.innerHTML = "";

                completedEl.textContent = ("Quiz has been completed! You answered " + correctAnswer + " question(s) correctly!");

                clearInterval(timer);
                score = count;
                var scoreInfo = document.createElement("h3");
                scoreInfo.setAttribute("id", "scoreInfo");
                scoreInfo.setAttribute("style", "color: green");
                scoreInfo.textContent = ("Your final score is: " + score);
                completedEl.append(scoreInfo);

                enterNameEl.textContent = ("Please enter in your name or initials: ");

                var input = document.createElement("input");
                input.setAttribute("id", "input");
                input.setAttribute("type", "text");
                input.textContent = "";
                enterNameEl.appendChild(input);

                var submitBtn = document.createElement("button");
                submitBtn.setAttribute("class", "choice-button");
                submitBtn.setAttribute("style", "background: #0275d8; padding: 10px; color: white; margin: 20px 10px; font-weight: bold")
                submitBtn.textContent ="Submit";
                enterNameEl.appendChild(submitBtn);
                
            } else {
                genQuizQuestions();
            }
        })
    })
}

// reccomended
// this static and determined by dev before someone plays
// var questions = [
// 	{
// 		question: 'what color is the sun?',
// 		choices: ['blue', 'yellow', 'red'],
// 		rightChoice: 'yellow'
// 	},
// 	{
// 		question: 'what color is the moon?',
// 		choices: ['blue', 'yellow', 'white'],
// 		rightChoice: 'white'
// 	}
// ]
// this would happen on click - inputFromUser is dynamic - we don't know what it will be
// var inputFromUser = 'yellow'
// if(inputFromUser === questions[0].rightChoice){
// 	console.log('it does match');
// } else {
// 	console.log('no match');
// }
// document.querySelector('.container').innerHTML = questions[0].question