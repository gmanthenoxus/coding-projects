const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
        correctAnswerIndex: 1  // Index of the correct answer
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswerIndex: 0  // Index of the correct answer
    },
    {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswerIndex: 1  // Index of the correct answer
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');

    // Load the current question
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Load the options
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);  // Pass the index to the checkAnswer function
        optionsElement.appendChild(button);
    });

    // Clear previous feedback
    feedbackElement.textContent = '';
}

function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');
    const questionAnswer = currentQuestion.correctAnswerIndex

    if (selectedIndex === questionAnswer) {
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = 'Incorrect. The correct answer is option ' + currentQuestion.options[questionAnswer];
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Display quiz completion message or handle completion logic
        document.getElementById('quiz-container').innerHTML = '<p>Quiz completed! You can add more logic here.</p>';
    }
}

// Initial question load
loadQuestion();
