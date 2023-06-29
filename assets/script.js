// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
var myQuestions = [
  // key

  {
    question: "Commonly used data types DO Not include",
    answers: ["strings", "booleans", "alerts", "numbers"],
    rightAnswer: "booleans",
  },
  {
    question:
      "The conditionn in an if / else statement is enclosed with _______.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    rightAnswer: "parenthesis",
  },
  {
    question: "Arrays in JacaScript can be used to store ______.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    rightAnswer: "all of the above",
  },
  {
    question: "string values must be enclosed within ______.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    rightAnswer: "curly brackets",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    rightAnswer: "for loops",
  },
];
var endGameArr = [];
// creating elements section
var start = document.querySelector(".start");
var body = document.body;
var main = document.getElementById("main");
var timerHeader = document.getElementById("timer");
var questions = document.createElement("h2");
var answersSec = document.createElement("section");
// var answersLi;
var answersUl = document.createElement("ul");
var nextBtn = document.createElement("button");

// var btnA = document.createElement("button");
// var btnB = document.createElement("button");
// var btnC = document.createElement("button");
// var btnD = document.createElement("button");
// var answerLi1 = document.createElement("li");
// var answerLi2 = document.createElement("li");
// var answerLi3 = document.createElement("li");
// var answerLi4 = document.createElement("li");
var index = 0;
var timerCount = 45;
var timer;
var initials;
// appending section

// body.appendChild(answersSec);
// answersSec.appendChild(answersUl);
// answersSec.appendChild(answersUl);
// answersUl.appendChild(answerLi1);
// answersUl.appendChild(answerLi2);
// answersUl.appendChild(answerLi3);
// answersUl.appendChild(answerLi4);

// attribute section
// answersUl.setAttribute("style", "list-type: none;") , hasAnswered
function correctAnswer(e) {
  if (e.target.textContent != myQuestions[index].rightAnswer) {
    timerCount -= 10;
  }
  console.log(e.target);
  index += 1;
  if (index >= myQuestions.length) {
    endGame();
    // return;
    lastPage();
    initialsForm();
  } else {
    askQuestions();
  }
}
function initialsForm(){
    initForm = document.createElement("input");
    initText = document.createElement("textarea");
    endForm = document.createElement("form")
    endForm.setAttribute("style", "display: flex;  height: 25px; justify-content: center;")
    initForm.setAttribute("type", "submit");
    initForm.setAttribute("value", "submit");
    endForm.appendChild(initText);
    endForm.appendChild(initForm);
    main.appendChild(endForm);
    console.log(endForm.textContent);
    var currentUser = {
        initials: endForm,
        score: timerCount
    }
    endGameArr.push(currentUser);
}
function lastPage() {
  main.innerHTML = "";
  timerHeader.innerHTML = "";
  gameover = document.createElement("h1");
  new1 = document.createElement("p");
  if(timerCount<0){
    timerCount=0;
  }
  new1.textContent = timerCount;
  gameover.textContent = "Game Over";
  gameover.setAttribute(
    "style",
    "display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 1rem auto;"
  );
  new1.setAttribute(
    "style",
    "display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 1rem auto;"
  );
  main.appendChild(gameover);
  main.appendChild(new1);
}
// function pauseTimer() {
  
// }
function startTimer() {
  var timerElement = document.createElement("h2");

  timer = setInterval(function () {
    timerCount -= 1;
    timerElement.textContent = timerCount;
    if(timerCount <=  0 || index>=myQuestions.length){
        clearInterval(timer);
        lastPage();
        initialsForm();
    }
    // if (timerCount <= 0){
    //     lastPage();
    // }
  }, 500);
  timerHeader.appendChild(timerElement);
  timerHeader.setAttribute(
    "style",
    "display: flex;"
  );
  if (index >= myQuestions.length) {
    clearInterval(timer);
  }
}
console.log(endGameArr);
function endGame() {
  // localStorage.setItem("storeName", value)
  if (timerCount > 0) {
    clearInterval(timer)
    main.innerHTML = "";
    var score = document.createElement("h1");
    score.textContent = "highscore:" + timerCount;
    // main.innerHTML = "<h1 style='text-align: center'>Score: </h1>"
    // todo get from localstorage before I set
    // parsing is for getting
    // stringify is setting
    // var currentUser = {
    //     initials: "initials",
    //     score: timerCount
    // }
    // endGameArr.push(currentUser);
  }

  // exampleArray = [{"RJ", 20}, {"CD", 35}]
  // localStorage.getItem("storeName")
  // localStorage.getItem("highScore")
  // var highScore = document.createElement("h2")
  // highScore.textContent = localStorage.getItem("highScores")
  // main.appendChild(highScore)
}

function askQuestions() {
  main.innerHTML = "";
  var questContainer = document.createElement("div");
//   main.setAttribute("style", "display: flex; flex-direction: row; margin: 1rem auto;")
  main.appendChild(questContainer);
  questContainer.setAttribute("class", "container");
  questContainer.setAttribute(
    "style",
    "display: flex; margin: 2rem auto; flex-direction: column; align-items: center; justify-content: center;"
  );
  var showQuestion = document.createElement("h2");
  showQuestion.textContent = myQuestions[index].question;
  questContainer.appendChild(showQuestion);
    //  showQuestion.setAttribute("style", "display: flex; flex-direction: column; ");
  // questContainer.setAttribute("style", "display: flex; text-align: left; margin: 1rem auto; padding-top: 0%;")
  for (let i = 0; i < 4; i++) {
    var answer = document.createElement("button");
    answer.setAttribute(
      "style",
      "background-color: blueviolet; width: 250px; margin: .5%;"
    );
    answer.textContent = myQuestions[index].answers[i];
    answer.addEventListener("click", (e) => {
      correctAnswer(e);
    });
    questContainer.appendChild(answer);
  }
  if(myQuestions.length >= 4){

  }
}
// padding: 2%; margin-left: 1%; margin-right: 1%;
function changeToQuestions() {
    
  document.querySelector(".content").innerHTML = '';
//   document
//     .querySelector(".content")
//     .setAttribute(
//       "style",
//       "height: 1px; width: 1px; position: absolute; left: 2000px;"
//     );
  document.querySelector(".game-name").hidden = true;
  document.querySelector(".rules").hidden = true;
  document.querySelector(".start").hidden = true;
  document.querySelector(".start-text").hidden = true;
  start.setAttribute("style", "display: none;");
  
}
console.log(window.start);
start.addEventListener("click", function (event) {
  event.stopPropagation();
  document.querySelector(".content").innerHTML="";
  document.querySelector(".content").hidden = true;
  startTimer();
//   changeToQuestions();

  askQuestions(index);
});

// function createAnswersQ1() {
//     answerLi1.textContent(myQuestions[0].answers[0]);
//     answerLi2.textContent, askQuestions(1)

//   // for(i = 0; i < myQuestions.answers.length; i++){
//   //     var answerLi = myQuestions.answers[i];
//   //     answerLi = document.createElement('li');
//   //     answerLi.innerHTML = myQuestions.answer[i];
//   //     answersUl.appendChild(answerLi);
//   // }
//   console.log(createAnswersLi());
//     for (i = 0; i < myQuestions.answers.length; i++){
//     answersLi.textContent(myQuestions.answers[i])

// }
// }
// content section

// function changeQuestions(){

// }

// answersUl.appendChild(createAnswersLi);

// myQuestions[0].answers[0] === myQuestions[0].rightAnswer;
// myQuestions[1].answers[1] === myQuestions[1].rightAnswer;
// myQuestions[2].answers[0] === myQuestions[2].rightAnswer;
// myQuestions[3].answers[3] === myQuestions[3].rightAnswer;
// myQuestions[4].answers[2] === myQuestions[4].rightAnswer;
// For the correct answer
