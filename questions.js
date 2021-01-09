// variables
var questionIndex = 0;
var count = 80;
var score = 0;
var remainTimeEl = document.querySelector("#remainTime");
var startQuizEl = document.querySelector("#startQuiz");
var quizQuestionsEl = document.querySelector("#quizQuestions");
var quizChoicesEl = document.querySelector("#quizChoices");
var storeScoreEl = document.querySelector("#storeScores");
var scoreBoardEl = document.querySelector("#scoreBoard");
var buttonEl = document.createElement("div");

// Create questions for the quiz
var questions = [
    {
        questionText: "Commonly used data types DO NOT include which of the following:",
        choices: ["Booleans", "Numbers", "Strings", "Alerts"],
        rightChoice: "Alerts"
    },

    {
        questionText: "The condition in an if / else statement is enclosed within ______.",
        choices: ["Curly Brackets", "Quotes", "Parentheses", "Square Brackets"],
        rightChoice: "Parentheses"
    },

    {
        questionText: "Arrays in Javascript can be used to store ______.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        rightChoice: "All of the above"
    },

    {
        questionText: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["Curly Brackets", "Quotes", "Commas", "Parentheses"],
        rightChoice: "Quotes"
    },

    {
        questionText: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Terminal/Bash", "For loops", "Console log"],
        rightChoice: "Console log"
    },
];


// Add eventlistener to start button
startQuizEl.addEventListener("click", function () {
    startTimer()
    genQuizQuestions()
});

// function for timer to countdown to 0
function startTimer() {
    var timer = setInterval(function () {
        count--;
        remainTimeEl.textContent = "Time remaining = " + count + " seconds";
        if (count == 0) {
            clearInterval(timer);
            remainTimeEl.textContent = "Time remaining =  Time is up!";
        }
    }, 1000)
}
function genQuizQuestions() {
    // clear data
    startScreen.innerHTML = "";
    buttonEl.innerHTML = ""
    for (var i = 0; i < questions.length; i++) {

        var userQuestion = questions[questionIndex].questionText;
        var userChoices = questions[questionIndex].choices;
        quizQuestionsEl.innerHTML = "<h4>" + userQuestion + "</h4>";
        // quizChoicesEl.innerHTML = "<li>" + userChoices + "</li>";

    }
    userChoices.forEach(function (newItem) {
        var buttonItem = document.createElement("button");
        buttonItem.setAttribute("class", "choice-button");
        buttonItem.textContent = newItem;
        // console.log(buttonItem);
        quizChoicesEl.appendChild(buttonEl);
        buttonEl.appendChild(buttonItem);
    })

    // // click event for choice(s) to check answer
    // document.querySelectorAll(".choice-button").forEach(function (checkChoice) {
    //     // console.log(checkChoice);
    //     checkChoice.addEventListener("click", function () {
    //         let userSelect = checkChoice.innerText
    //         console.log(userSelect);
    //         if (userSelect === questions[questionIndex].rightChoice) {
    //             score++;
    //             console.log(score);
    //             alert("You are correct! The answer is 'Alerts'");
    //             questionIndex++;
    //         } else {
    //             count = count - 10;
    //         }
    //     })
    // })
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