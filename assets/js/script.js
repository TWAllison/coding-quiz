// declare varibles
var startPageEl = document.querySelector('#start-page');
var startBtnEl = document.querySelector('#start-btn');
var questionsPageEl = document.querySelector('#questions');
var questionsEl = document.querySelector('#q');
var choicesEl = document.querySelector('#choices');
var endEl = document.querySelector('#end');
var scoreEL = document.querySelector('#score-total');
var submitBtnEl = document.querySelector('#submit');
var timeEl = document.querySelector('#time');
var initialsEL = document.querySelector('#initials');
var feedbackEl = document.querySelector('#feedback');
var time = 120;
var timerIntervalSet;
var currentQIndex = 0;

//create a questions array with answers 
var questionsArr = [

    {
        q: "Why do JavaScript and Java have similar name?",
        Choices: ["JavaScript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java", "None of the above"],
        answer: "JavaScript's syntax is loosely based on Java's"
    },

    {
        q: " What are variables used for in JavaScript Programs?",
        Choices: ["Storing numbers, dates, or other values", " Varying randomly", "Causing high-school algebra flashbacks", " None of the above"],
        answer: "Storing numbers, dates, or other values"
    },

    {
        q: " What should appear at the very end of your JavaScript?",
        Choices: ["The </script>", " The <script>", " The END statement", " None of the above"],
        answer: "The </script>"
    },

    {
        q: " ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        Choices: [" <SCRIPT>", "<BODY>", "<HEAD>", "<TITLE>",],
        answer: " <SCRIPT>"
    },

    {
        q: "What is the correct JavaScript syntax to write 'Hello World'?",
        Choices: ["System.out.println('Hello World')", " println ('Hello World')", " document.write('Hello World')", "response.write('Hello World')"],
        answer: " document.write('Hello World')"
    },

    {
        q: " Inside which HTML element do we put the JavaScript?",
        Choices: ["  <js>", " <scripting>", "<javascript>", " <script>"],
        answer: " <script>"
    },

    {
        q: "JavaScript entities start with _______ and end with _________.",
        Choices: ["Semicolon, colon", " Semicolon, Ampersand", " Ampersand, colon", " Ampersand, semicolon"],
        answer: " Ampersand, semicolon"
    },

    {
        q: " Which of the following is not considered a JavaScript operator?",
        Choices: ["new", "this", "delete", "typeof"],
        answer: "this"
    },

    {
        q: " Using _______ statement is how you test for a specific condition.",
        Choices: ["select", "if", "switch", "for"],
        answer: "if"
    },

    {
        q: " The syntax of a blur method in a button object is ______________",
        Choices: ["Blur()", " Blur(contrast)", "Blur(value)", " Blur(depth)"],
        answer: "Blur()"
    },

]

// start quiz function
var startQuiz = function () {
    startPageEl.style.display = "none";

    questionsPageEl.style.display = "block";

    timerInterval = setInterval(timeCountdown, 1000);

    // get questions
    getQuestion();
}
//get questions from array
var getQuestion = function () {
    var currentQuestion = questionsArr[currentQIndex];
    questionEl.textContent = currentQuestion.q;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {
        var choicesBtn = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = i + 1 + ". " + choice;

        choiceButton.onclick = questionclicked;

        choicesEl.appendChild(choicesBtn);
    });

}
//check answer function with scoring and feedback
var questionclicked = function () {
    //check if answer is correct
    if (this.value === questionsArr[currentQIndex].answer) {
        feedbackEl.textContent = "Correct!";
        time += 3;
    } else {
        time -= 10;

        if (time < 0) {
            time = 0;
        }
        timeEl.textContent = time;

        feedbackEl.textContent = "incorrect!";
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1500);

    currentQIndex++;

    if (currentQIndex === questionsArr.length) {
        endQuiz();
    } else {
        getQuestion();
    }
}
//end quiz
var endQuiz = function() {
    questionsPageEl.style.display = "none"; // hides questions page

    endEl.style.display = "block"; // show end page

    clearInterval(timerInterval);

    scoreEL.textContent = time;
}

var timerCountdown = function() {
    var initials = initialsEl.value;

    var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

    var newScore = {
        score: time,
        initials: initials
    };

    highscore.push(newScore);
    window.localStorage.setItem("highscore", JSON.stringify(highscore));

    window.location.href = "highscore.html";
}

startBtnEl.addEventListener("click", startQuiz);
submitBtnEl.addEventListener("click", saveHighscore);


//function for getting highscore info and set to local storage 


//eventlisteners