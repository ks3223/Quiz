// mass with quests,options,results
let questionElement = document.getElementById("question");
quizContainer = document.querySelector('.quiz-container');
let questions = [
    {
        question: "Какое сейчас время года?",
        options: ["Зима", "Весна", "Лето", "Осень"],
        correctAnswer: "Весна"
    },
    {
        question: "Какой сейчас месяц?",
        options: ["Август", "Декабрь", "Апрель", "Февраль"],
        correctAnswer: "Апрель"
    },
    {
        question: "Какого числа день Победы?",
        options: ["29 Февраля", "1 Июня", "31 Октября", "9 Мая"],
        correctAnswer: "9 Мая"
    },
    {
        question: "Сколько секунд в 1 часу?",
        options: ["3600", "600", "60", "3200"],
        correctAnswer: "3600"
    }
];
let currentQuestion = 0;
let correctAnswers = 0;
let optionsElement = document.getElementById("options");
let resultElement = document.getElementById("result");
let title = document.querySelector('.title');


function displayQuestion() {
    questionElement.textContent = `Вопрос ${currentQuestion + 1}:${questions[currentQuestion].question}`
    optionsElement.innerHTML = "";
    let optionsArray = questions[currentQuestion].options;
    optionsArray.forEach((option) => {
        let button = document.createElement('button');//создаем элемент
        optionsElement.append(button);// добавить в блок
        button.classList.add('btn');// навесить класс
        button.textContent = option;// задать текст
    });
    optionsElement.addEventListener('click', (event) => {
        let currentAnswer = event.target.textContent;
        console.log(currentAnswer);
        nextQuestion(currentAnswer);
    }, { once: true })
}

function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    title.style.display = "none"
    resultElement.textContent = `У вас ${correctAnswers} правильных ответов из ${questions.length}`
}



displayQuestion();























