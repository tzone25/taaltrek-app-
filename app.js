if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

const lessonData = [
    { question: "How do you say 'Hello'?", options: ["Hallo", "Dankie", "Ja", "Nee"], answer: "Hallo" },
    { question: "Select the word for 'Thank you'", options: ["Totsiens", "Dankie", "Asseblief", "Goeiemôre"], answer: "Dankie" },
    { question: "Translate: 'Yes'", options: ["Nee", "Dankie", "Ja", "Hond"], answer: "Ja" },
    { question: "How do you say 'Goodbye'?", options: ["Hallo", "Water", "Totsiens", "Nee"], answer: "Totsiens" },
    { question: "Translate: 'Please'", options: ["Dankie", "Asseblief", "Ja", "Hallo"], answer: "Asseblief" }
];

let currentQuestionIndex = 0;
let score = 0;

const screens = {
    home: document.getElementById('home-screen'),
    lesson: document.getElementById('lesson-screen'),
    result: document.getElementById('result-screen')
};

const startBtn = document.getElementById('start-btn');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const feedbackArea = document.getElementById('feedback-area');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const progressFill = document.getElementById('progress-fill');
const scoreText = document.getElementById('score-text');
const homeBtn = document.getElementById('home-btn');

function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function loadQuestion() {
    feedbackArea.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    const currentQ = lessonData[currentQuestionIndex];
    questionText.innerText = currentQ.question;
    progressFill.style.width = `${(currentQuestionIndex / lessonData.length) * 100}%`;

    currentQ.options.forEach(option => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.classList.add('option-btn');
        btn.onclick = () => checkAnswer(btn, option, currentQ.answer);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(clickedBtn, selected, correct) {
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selected === correct) {
        clickedBtn.classList.add('correct');
        feedbackText.innerText = "Correct! 🎉";
        score++;
    } else {
        clickedBtn.classList.add('wrong');
        feedbackText.innerText = `Incorrect. The answer is: ${correct}`;
        allBtns.forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });
    }
    
    feedbackArea.classList.remove('hidden');
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < lessonData.length) {
        loadQuestion();
    } else {
        progressFill.style.width = '100%';
        scoreText.innerText = score;
        showScreen('result');
    }
};

startBtn.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    showScreen('lesson');
    loadQuestion();
};

homeBtn.onclick = () => showScreen('home');
