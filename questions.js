// Create questions for the quiz
var questions = [
    {
        questionText: "Commonly used data types DO NOT include which of the following:",
        choices: ["Booleans", "Numbers", "Strings", "Alerts"],
        rightChoice: "Alerts"
    },

    {
        questionText: "The condition in an if / else statement is enclosed within ______.",
        choices: ["Curly Brackets", "Quotes", "Parantheses", "Square Brackets"],
        rightChoice: "Parantheses"
    },

    {
        questionText: "Arrays in Javascript can be used to store ______.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        rightChoice: "All of the above"
    },

    {
        questionText: "",
        choices: [],
        rightChoice: 
    },

    {
        questionText: "",
        choices: [],
        rightChoice: 
    },
];

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