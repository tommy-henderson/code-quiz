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
    {
        question: "How do you write Hello World in an alert box?",
        a: "msg('Hello World')",
        b: "msgBox('Hello World')",
        c: "alertBox('Hello World')",
        d: "alert('Hello World')",
        correct: "d",
    },
    {
        question: "Which operator is used to assign a variable?",
        a: "X",
        b: "*",
        c: "=",
        d: "-",
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
var startQuiz = document.getElementById("startquiz")
var numberCorrect = document.getElementById("numberCorrect");

var currentQuestion = 0;
var score = 0;
var time = 60;

function beginQuiz() {
    currentQuestion = 0;
    score = 0;
    answer1.hidden = false
    answer2.hidden = false
    answer3.hidden = false
    answer4.hidden = false
    numberCorrect = 0;
    loadQuestion()
}

function endQuiz() {
    questionEl.textContent = "Quiz Complete"
    answer1.hidden = true
    answer2.hidden = true
    answer3.hidden = true
    answer4.hidden = true
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

    if ((this) == (questions[currentQuestion].correct)) {
        result.textContent = numberCorrect++
    } else {
        time -= 10;
        if (time < 1) {
            endQuiz();
        }
    }

    currentQuestion++;
    loadQuestion();
    if (currentQuestion > currentQuestion.length) {
        endQuiz()
    }
}

startQuiz.addEventListener("click", e => {
    beginQuiz()
})

answerButtons.addEventListener("click", checkAnswer)

