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
    {
        question: "How do you call a function named myFunction?",
        a: "myFunction()",
        b: "myFunction",
        c: "call myFunction()",
        d: "call function myFunction()",
        correct: "a",
    },
    {
        question: "Which of these if statements is correct?",
        a: "if (i==5)",
        b: "if i == 5 then",
        c: "if i = 5 then",
        d: "if i = 5",
        correct: "a",
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
var answered = ""
var timeEl = document.getElementById("timer")
var timeLeft = document.getElementById("timeleft")
var hsButton = document.getElementById("showhs")

var currentQuestion = 0;
var score = 0;
var secondsLeft = 60;
var timerInterval = null;

timeLeft.classList.add("hide");
answer1.classList.add("hide");
answer2.classList.add("hide");
answer3.classList.add("hide");
answer4.classList.add("hide");
result.classList.add("hide");

function beginQuiz() {
    currentQuestion = 0;
    score = 0;
    answer1.classList.remove("hide");
    answer2.classList.remove("hide");
    answer3.classList.remove("hide");
    answer4.classList.remove("hide");
    document.getElementById("numberCorrect").innerHTML = score;
    timeEl.classList.remove("hide")
    timeLeft.classList.remove("hide")
    numberCorrect.classList.remove("hide")
    result.classList.remove("hide")
    startQuiz.classList.add("hide")
    loadQuestion()
    setTime()
}

function endQuiz() {
    questionEl.textContent = "Quiz Complete"
    answer1.classList.add("hide");
    answer2.classList.add("hide");
    answer3.classList.add("hide");
    answer4.classList.add("hide");
    secondsLeft = 60;
    clearInterval(timerInterval);
    timeEl.classList.add("hide");
    timeLeft.classList.add("hide")
    startQuiz.classList.remove("hide")
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
    if (answered == questions[currentQuestion].correct) {
        score++;
        document.getElementById("numberCorrect").innerHTML = score;
    } else {
        secondsLeft -= 10;
        if (secondsLeft < 0) {
            endQuiz()
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

answer1.addEventListener("click", e => {
    answered = "a"
    checkAnswer()
})
answer2.addEventListener("click", e => {
    answered = "b"
    checkAnswer()
})
answer3.addEventListener("click", e => {
    answered = "c"
    checkAnswer()
})
answer4.addEventListener("click", e => {
    answered = "d"
    checkAnswer()
})

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        document.getElementById("timer").innerHTML = secondsLeft;
        if (secondsLeft < 0) {
            endQuiz()
        }
    }, 1000);
}

function setHighScore() {
    hsname = prompt("Enter name for highscore")
    localStorage.setItem("highscore", score)
    localStorage.setItem("hsname", hsname)
}

function showHighScore() {
    document.getElementById("highscore").innerHTML = "Current High Score is: " + localStorage.getItem("hsname") + " with: " + localStorage.getItem("highscore")
}

hsButton.addEventListener("click", e => {
    setHighScore()
    showHighScore()
})