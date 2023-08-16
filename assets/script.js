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
var result = document.getElementById("result")
var answerButtons = document.getElementById("answer-buttons")
var nextButton = document.getElementById("nextbutton")
var startQuiz = document.getElementById("startquiz")

var currentQuestion = 0;
var score = 0;
var time = 0;

function beginQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    loadQuestion()
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        questionEl.textContent = questions[currentQuestion].question
        answer1.textContent = questions[currentQuestion].a
        answer2.textContent = questions[currentQuestion].b
        answer3.textContent = questions[currentQuestion].c
        answer4.textContent = questions[currentQuestion].d
    } else {
        endQuiz()
    }
}

function checkAnswer() {
   /* if ((this) == (questions[currentQuestion].correct)) {
        result.textContent = "Correct";
    } else {
        time -= 10;
        result.textContent = "Wrong";
        if (time < 1) {
            endQuiz();
        }
    }
*/
    currentQuestion++;
    loadQuestion();
}

startQuiz.addEventListener("click", e => {
    beginQuiz()
})

answerButtons.addEventListener("click", checkAnswer)

