
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Madrid", correct: false},
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: true },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
           
            { text: "Gold", correct: false },
             { text: "Oxygen", correct: true },
            { text: "Silver", correct: false },
            { text: "Iron", correct: false }
        ]
    },
    {
        question: "What is the square root of 64?",
        answers: [
            
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "9", correct: false },
            { text: "8", correct: true },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "Thailand", correct: false },
            { text: "India", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which language is primarily spoken in Brazil?",
        answers: [
            { text: "Portuguese", correct: true },
            { text: "Spanish", correct: false },
            { text: "French", correct: false },
            { text: "English", correct: false }
        ]
    }
];

const QuestionElement = document.getElementById("Question");
const BtnBox = document.getElementById("btn-box");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;

function startQuiz () {
    currentIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentIndex];
    let QuestionNo = currentIndex + 1;
    QuestionElement.innerHTML = QuestionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        BtnBox.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAns);
    })

}

function resetState(){
 nextBtn.style.display = "none";
while(BtnBox.firstChild){
    BtnBox.removeChild(BtnBox.firstChild);
}
}

function selectAns(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true" ;
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(BtnBox.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
        nextBtn.style.display = "block"
    })
}

function showScore () {
    resetState();
    nextBtn.innerHTML = "Restart";
    QuestionElement.innerHTML = `Congratulations! You Scored ${score} Out of ${questions.length}.`;
    nextBtn.style.display = "block";
}

function handleNext () {
   currentIndex++;
   if(currentIndex < questions.length){
    showQuestion();
   }
   else{
    showScore();
   }
}

nextBtn.addEventListener("click" , () => {
    if(currentIndex < questions.length){
        handleNext();
    }
    else{
        startQuiz();
    }
})

startQuiz();