// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

// Database of all lessons
const allLessons = [
    {
        title: "Lesson 1: Basics",
        questions: [
            { question: "How do you say 'Hello'?", options: ["Hallo", "Dankie", "Ja", "Nee"], answer: "Hallo" },
            { question: "Select the word for 'Thank you'", options: ["Totsiens", "Dankie", "Asseblief", "Goeiemôre"], answer: "Dankie" },
            { question: "Translate: 'Yes'", options: ["Nee", "Dankie", "Ja", "Hond"], answer: "Ja" },
            { question: "How do you say 'Goodbye'?", options: ["Hallo", "Water", "Totsiens", "Nee"], answer: "Totsiens" },
            { question: "Translate: 'Please'", options: ["Dankie", "Asseblief", "Ja", "Hallo"], answer: "Asseblief" }
        ]
    },
    {
        title: "Lesson 2: Numbers",
        questions: [
            { question: "Translate: 'One'", options: ["Drie", "Twee", "Een", "Vyf"], answer: "Een" },
            { question: "Translate: 'Two'", options: ["Twee", "Vier", "Ses", "Tien"], answer: "Twee" },
            { question: "Translate: 'Three'", options: ["Drie", "Sewe", "Ag", "Nege"], answer: "Drie" },
            { question: "How do you say 'Four'?", options: ["Vyf", "Vier", "Nul", "Twee"], answer: "Vier" },
            { question: "Translate: 'Five'", options: ["Een", "Vyf", "Drie", "Tien"], answer: "Vyf" }
        ]
    },
    {
        title: "Lesson 3: Animals",
        questions: [
            { question: "Translate: 'Dog'", options: ["Kat", "Hond", "Voël", "Vis"], answer: "Hond" },
            { question: "Translate: 'Cat'", options: ["Muis", "Hond", "Kat", "Koei"], answer: "Kat" },
            { question: "Translate: 'Bird'", options: ["Voël", "Slang", "Vis", "Perd"], answer: "Voël" },
            { question: "How do you say 'Fish'?", options: ["Vis", "Kat", "Hond", "Vark"], answer: "Vis" },
            { question: "Translate: 'Horse'", options: ["Skaap", "Perd", "Bok", "Voël"], answer: "Perd" }
        ]
    }
];

let currentLesson = [];
let currentQuestionIndex = 0;
let score = 0;

// UI Elements
const screens = {
    home: document.getElementById('home-screen'),
    lesson: document.getElementById('lesson-screen'),
    result: document.getElementById('result-screen')
};

const lessonMenu = document.getElementById('lesson-menu');
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

// Generate Home Screen Menu
allLessons.forEach((lesson, index) => {
    const btn = document.createElement('button');
    btn.innerText = lesson.title;
    btn.classList.add('primary-btn');
    // Change button color slightly for variety
    if (index % 2 !== 0) btn.style.backgroundColor = "#2b6cb0"; 
    btn.onclick = () => startLesson(index);
    lessonMenu.appendChild(btn);
});

function startLesson(lessonIndex) {
    currentLesson = allLessons[lessonIndex].questions;
    currentQuestionIndex = 0;
    score = 0;
    showScreen('lesson');
    loadQuestion();
}

function loadQuestion() {
    feedbackArea.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    const currentQ = currentLesson[currentQuestionIndex];
    questionText.innerText = currentQ.question;
    progressFill.style.width = `${(currentQuestionIndex / currentLesson.length) * 100}%`;

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
    if (currentQuestionIndex < currentLesson.length) {
        loadQuestion();
    } else {
        progressFill.style.width = '100%';
        scoreText.innerText = `${score} / ${currentLesson.length}`;
        showScreen('result');
    }
};

homeBtn.onclick = () => showScreen('home');
