var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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

var correctPoints = 10;
var maxQuestions = 10;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        return window.location.assign(/*.end.html*/);
    }

    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


choices.forEach(choice => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
});

availableQuestions.splice(questionIndex, 1);

acceptingAnswers = true;
};

choices.forEach(choice => {
    var selectChoice = e.target;
    var selectAnswer = selectChoice.dataset("number");
})




function clicked() {
    if (questions.question[0] === questions.choice1) {
       return getNewQuestion; 
    } 
};

startGame();