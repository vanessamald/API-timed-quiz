// dom elements
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
var btnClickEl = document.getElementsByClassName("choice-container");
var questionNumber = document.getElementById("current-selection");
var userScore = document.getElementById("score");

// variables for quiz
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// array for quiz questions
let questions = [
  {
      question: "Which character has a twin?",
      choice1: "Phoebe",
      choice2: "CHOICE 2",
      choice3: "CHOICE 3",
      choice4: "CHOICE 4",
      answer: 1
  }, 

{
    question: "Which characted lost a toe during Thanksgiving?",
    choice1: "CHOICE 1",
    choice2: "Chandler",
    choice3: "CHOICE 3",
    choice4: "CHOICE 4",
    answer: 2
}, 
{
    question: "What is the name of Joey's agent?",
    choice1: "Estelle",
    choice2: "CHOICE 2",
    choice3: "CHOICE 3",
    choice4: "CHOICE 4",
    answer: 1
}, 
{
    question: "How many times has Ross been married?",
    choice1: "CHOICE 1",
    choice2: "CHOICE 2",
    choice3: "CHOICE 3",
    choice4: "4",
    answer: 4
}, 
{
    question: "What is the name of Rachel's assistant?",
    choice1: "CHOICE 1",
    choice2: "CHOICE 2",
    choice3: "Tag",
    choice4: "CHOICE 4",
    answer: 3
}, 
{
    question: "Why did Chandler spend Thanksgiving in a box?",
    choice1: "CHOICE 1",
    choice2: "He kissed Joey's girlfriend",
    choice3: "CHOICE 3",
    choice4: "CHOICE 4",
    answer: 2
}, 
{
    question: "What is Rachel's actual favorite movie?",
    choice1: "CHOICE 1",
    choice2: "Weekend at Bernie's",
    choice3: "CHOICE 3",
    choice4: "Dangerous Liaisons",
    answer: 2
}, 
{
    question: "Who was Monica's first kiss?",
    choice1: "CHOICE 1",
    choice2: "CHOICE 2",
    choice3: "Ross",
    choice4: "CHOICE 4",
    answer: 3
}, 
{
    question: "What is Chandler's middle name?",
    choice1: "Muriel",
    choice2: "CHOICE 2",
    choice3: "CHOICE 3",
    choice4: "CHOICE 4",
    answer: 1
}, 
{
    question: "Who was the first person to find out Monica and Chandler were dating?",
    choice1: "Gunther",
    choice2: "Rachel",
    choice3: "Ross",
    choice4: "Joey",
    answer: 4
}, 
];

// variables for points and amount of questions
var correctPoints = 10;
var maxQuestions = 10;

// function to start quiz
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

// function to get new question from available questions
function getNewQuestion() {
    // if there are no questions left
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        // use local storage to save the user's score
        localStorage.setItem('userRecentScore', score);
        // take user to end of quiz page
        return window.location.assign("quizover.html");
    }
    
    // iterate through available questions
    questionCounter++;
    // display what question user is on 

    questionNumber.innerText = questionCounter + "/" + maxQuestions; //CHECK ERROR HERE

    // display a random question from available questions
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question; //CHECK ERROR HERE
    
    choices.forEach(choice => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
});
    // this gets rid of question already used
availableQuestions.splice(questionIndex, 1);

acceptingAnswers = true;
};

// log the user's answers 
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        console.log(e.target);
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectChoice = e.target;
        var selectAnswer = selectChoice.dataset["number"];

        var userAnswer = 'incorrect';
        if (selectAnswer == currentQuestion.answer) {
            userAnswer = 'correct';
        
        // display total score at top of page for user
        if (userAnswer === 'correct') {
           totalScore (correctPoints);
        }
      
        // add class to user selection: green for correct and red for incorrect
        selectChoice.parentElement.classList.add(userAnswer);

        // set a timeout for added class 
        setTimeout (() => {
            selectChoice.parentElement.classList.remove(userAnswer);
            getNewQuestion();
        }, 1000);
            
        }
        console.log(userAnswer);
    

        //console.log(selectAnswer == currentQuestion.answer);
        
    });
    
})

function clicked() {
    if (questions.question[0] === questions.choice1) {
       return getNewQuestion; 
    } 
};

function totalScore(num) {
    score += num
    userScore.innerText = score;
}

startGame();

