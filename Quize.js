let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

function showCreateQuiz() {
    document.getElementById("createQuizSection").style.display = "block";
}

function addQuestion() {
    let questionsContainer = document.getElementById("questionsContainer");
    let questionHTML = `
        <div>
            <input type="text" placeholder="Enter Question" class="question">
            <input type="text" placeholder="Option 1" class="option">
            <input type="text" placeholder="Option 2" class="option">
            <input type="text" placeholder="Option 3" class="option">
            <input type="text" placeholder="Option 4" class="option">
            <input type="number" placeholder="Correct Answer (1-4)" class="answer">
        </div>`;
    questionsContainer.innerHTML += questionHTML;
}

function saveQuiz() {
    let quizTitle = document.getElementById("quizTitle").value;
    let questionElements = document.querySelectorAll(".question");
    let optionElements = document.querySelectorAll(".option");
    let answerElements = document.querySelectorAll(".answer");

    let quiz = {
        title: quizTitle,
        questions: []
    };

    for (let i = 0; i < questionElements.length; i++) {
        let question = questionElements[i].value;
        let options = [
            optionElements[i * 4].value,
            optionElements[i * 4 + 1].value,
            optionElements[i * 4 + 2].value,
            optionElements[i * 4 + 3].value
        ];
        let answer = parseInt(answerElements[i].value);

        quiz.questions.push({ question, options, answer });
    }

    quizData.push(quiz);
    alert("Quiz Saved Successfully!");
}

function startQuiz() {
    document.getElementById("quizSection").style.display = "block";
    document.getElementById("quizTitleDisplay").innerText = quizData[0].title;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < quizData[0].questions.length) {
        let questionData = quizData[0].questions[currentQuestionIndex];
        let questionHTML = `<h3>${questionData.question}</h3>`;
        for (let i = 0; i < 4; i++) {
            questionHTML += `<button onclick="checkAnswer(${i + 1})">${questionData.options[i]}</button>`;
        }
        document.getElementById("questionContainer").innerHTML = questionHTML;
    } else {
        showResults();
    }
}

function checkAnswer(selectedAnswer) {
    let correctAnswer = quizData[0].questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
    document.getElementById("scoreDisplay").innerText = `You scored ${score}/${quizData[0].questions.length}`;
}