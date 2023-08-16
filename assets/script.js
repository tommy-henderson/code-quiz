// Click the start button
// timer starts and presented with a question
//if answer the question correctly, then moves on to the next question
// if answer incorrectly, it subtracts time from timer
// always says either wrong or right depending on answer

var questions = [
    {
        question: "Inside which HTML Element do we put the JavaScript?",
        answers: [
            {text: "<script>", correct: true},
            {text: "<js>", correct: false},
            {text: "<javascript>", correct: false},
            {text: "<scripting>", correct: false},
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            {text: "function:myFunction()", correct: false},
            {text: "function = myFunction()", correct: false},
            {text: "function myFunction()", correct: true},
            {text: "myFunction()", correct: false},
        ] 
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {text: "the <body> section", correct: false},
            {text: "the <head> section", correct: false},
            {text: "Both the <head> section and the <body> section are correct", correct: true},
            {text: "Neither the <head> nor the <body> sections are correct", correct: false},
        ] 
    },
]; 