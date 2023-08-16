var questions = [
    {
        question: "Inside which HTML Element do we put the JavaScript?",
        a: "<script>",
        b: "<js>",
        c: "<javascript>",
        d: "<scripting>",
        correct: "a",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function:myFunction()",
        b: "function = myFunction()",
        c: "function myFunction()",
        d: "myFunction()",
        correct: "c",
    },
    {
        question: "Where is the correct place to insert JavaScript",
        a: "the <body> section",
        b: "the <head> section",
        c: "Both the <head> section and the <body> section are correct",
        d: "Neither the <head> nor the <body> sections are correct",
        correct: "c",
    },
];

var questionEl = document.getElementById("question")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")

var nextButton = document.getElementById("nextbutton")

var currentQuestion = 0;
var score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    loadQuestion()
}

function loadQuestion() {
    questionEl.textContent = questions[currentQuestion].question
    answer1.textContent = questions[currentQuestion].a
    answer2.textContent = questions[currentQuestion].b
    answer3.textContent = questions[currentQuestion].c
    answer4.textContent = questions[currentQuestion].d
}

startQuiz()