const tipOffButton = document.getElementById("start-button")
const questionContainerElement = document.getElementById
("question-container")
const questionElement = document.getElementById("question")
const answerElement = document.getElementById("answer-button")
const newQuestion = document.getElementById("next-button")
let shuffledQuestions, currentQuestionIndex

tipOffButton.addEventListener('click', tipOff)
newQuestion.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
function tipOff() {
    console.log('tipoff')
    tipOffButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 1)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    nextQuestion()
}

function nextQuestion() {
    resetGame()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {

    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("answer-button")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerElement.appendChild(button)
    })
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, selectedButton.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + .5) {
    newQuestion.classList.remove("hide")
    } else {
        newQuestion.innerText = "Restart"
        newQuestion.classList.remove("hide")
        tipOff()
    }

}

function setStatusClass(element, correct) {
clearStatusClass(element)
if (correct) {
    element.classList.add("correct")
} else {
    element.classList.add("wrong")
}
}

function clearStatusClass (element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function resetGame() {
    clearStatusClass(document.body)
    newQuestion.classList.add("hide")
    while (answerElement.firstChild) {
        answerElement.removeChild
        (answerElement.firstChild) 
        }
    }

const questions = [
    {
    question: "When Halo 3: ODST was unveiled in 2008, it had a different title. What was the game formally called?",
    answers: [
        {text: "Halo 3: Recon", correct: true },
        {text: "Halo 3: Phantom", correct: false },
        {text: "Halo 3: Helljumpers", correct: false},
        {text: "Halo 3: Guerilla", correct: false}
    ]
}, {
    question: "In what year was the original Sonic the Hedgehog game released?",
    answers: [
        {text: "1991", correct: true },
        {text: "1996", correct: false },
        {text: "1993", correct: false},
        {text: "1990", correct: false}
    ]
}, {
    question: "Which of these Counter-Strike maps is a bomb defuse scenario?",
    answers: [
        {text: "Havana", correct: false},
        {text: "Oilrig", correct: false },
        {text: "747", correct: false},
        {text: "Prodigy", correct: true}
    ]
}, {
    question: "What was the first game ever released that ran on the Source engine?",
    answers: [
        {text: "Counter-Strike: Source", correct: true },
        {text: "Half-Life 2", correct: false },
        {text: "Garry's Mod", correct: false},
        {text: "Team Fortress 2", correct: false}
    ]
}, {
    question: "How many controllers could a Nintendo GameCube have plugged in at one time?",
    answers: [
        {text: "8", correct: false },
        {text: "2", correct: false },
        {text: "4", correct: true},
        {text: "6", correct: false}
    ]
}, {
    question: "Shang Tsung is a playable character in Mortal Kombat XL",
    answers: [
        {text: "True", correct: false},
        {text: "False", correct: true }
    ]
}, {
    question: "In Pokemon Diamond, Pearl and Platinum, where can a Munchlax be found?",
    answers: [
        {text: "Honey Trees", correct: true },
        {text: "Trading with an NPC", correct: false },
        {text: "Grass on Route 209", correct: false},
        {text: "Wayward Cave", correct: false}
    ]
}, {
    question: "What year was the video game streaming platform TwitchTV founded?",
    answers: [
        {text: "2012", correct: false },
        {text: "2013", correct: false },
        {text: "2010", correct: false},
        {text: "2011", correct: true}
    ]
}, {
    question: "Which game was exclusive to Dreamcast?",
    answers: [
        {text: "Pen Pen TriIcelon", correct: true },
        {text: "Perfect Dark", correct: false },
        {text: "Tetrisphere", correct: false},
        {text: "Sonic Adventure", correct: false}
    ]
}, {
    question: "Which of the following Mario Kart 8 Deluxe items will NOT make you invincible?",
    answers: [
        {text: "Bullet Bill", correct: false },
        {text: "Star", correct: false },
        {text: "Boo", correct: false},
        {text: "Golden Mushroom", correct: true}
    ]
} 
       ]