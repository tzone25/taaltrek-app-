if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

// 10-Lesson Curriculum
const allLessons = [
    {
        id: "lesson_1", title: "1. Basics & Greetings",
        questions: [
            { question: "How do you say 'Hello'?", options: ["Hallo", "Dankie", "Ja", "Nee"], answer: "Hallo" },
            { question: "Select the word for 'Thank you'", options: ["Totsiens", "Dankie", "Asseblief", "Goeiemôre"], answer: "Dankie" },
            { question: "Translate: 'Yes'", options: ["Nee", "Dankie", "Ja", "Hond"], answer: "Ja" },
            { question: "How do you say 'Goodbye'?", options: ["Hallo", "Water", "Totsiens", "Nee"], answer: "Totsiens" },
            { question: "Translate: 'Please'", options: ["Dankie", "Asseblief", "Ja", "Hallo"], answer: "Asseblief" }
        ]
    },
    {
        id: "lesson_2", title: "2. Numbers 1-5",
        questions: [
            { question: "Translate: 'One'", options: ["Drie", "Twee", "Een", "Vyf"], answer: "Een" },
            { question: "Translate: 'Two'", options: ["Twee", "Vier", "Ses", "Tien"], answer: "Twee" },
            { question: "Translate: 'Three'", options: ["Drie", "Sewe", "Ag", "Nege"], answer: "Drie" },
            { question: "How do you say 'Four'?", options: ["Vyf", "Vier", "Nul", "Twee"], answer: "Vier" },
            { question: "Translate: 'Five'", options: ["Een", "Vyf", "Drie", "Tien"], answer: "Vyf" }
        ]
    },
    {
        id: "lesson_3", title: "3. Animals",
        questions: [
            { question: "Translate: 'Dog'", options: ["Kat", "Hond", "Voël", "Vis"], answer: "Hond" },
            { question: "Translate: 'Cat'", options: ["Muis", "Hond", "Kat", "Koei"], answer: "Kat" },
            { question: "Translate: 'Bird'", options: ["Voël", "Slang", "Vis", "Perd"], answer: "Voël" },
            { question: "How do you say 'Fish'?", options: ["Vis", "Kat", "Hond", "Vark"], answer: "Vis" },
            { question: "Translate: 'Horse'", options: ["Skaap", "Perd", "Bok", "Voël"], answer: "Perd" }
        ]
    },
    {
        id: "lesson_4", title: "4. Colors",
        questions: [
            { question: "Translate: 'Red'", options: ["Blou", "Rooi", "Groen", "Geel"], answer: "Rooi" },
            { question: "Translate: 'Blue'", options: ["Swart", "Wit", "Blou", "Rooi"], answer: "Blou" },
            { question: "Translate: 'Green'", options: ["Groen", "Geel", "Blou", "Bruin"], answer: "Groen" },
            { question: "How do you say 'Yellow'?", options: ["Rooi", "Geel", "Wit", "Swart"], answer: "Geel" },
            { question: "Translate: 'Black'", options: ["Swart", "Wit", "Grys", "Rooi"], answer: "Swart" }
        ]
    },
    {
        id: "lesson_5", title: "5. Food & Drink",
        questions: [
            { question: "Translate: 'Water'", options: ["Melk", "Koffie", "Water", "Tee"], answer: "Water" },
            { question: "Translate: 'Food'", options: ["Kos", "Brood", "Vleis", "Water"], answer: "Kos" },
            { question: "Translate: 'Bread'", options: ["Kaas", "Brood", "Kos", "Melk"], answer: "Brood" },
            { question: "How do you say 'Meat'?", options: ["Vleis", "Vis", "Kip", "Brood"], answer: "Vleis" },
            { question: "Translate: 'Milk'", options: ["Water", "Tee", "Koffie", "Melk"], answer: "Melk" }
        ]
    },
    {
        id: "lesson_6", title: "6. Family",
        questions: [
            { question: "Translate: 'Mother'", options: ["Pa", "Ma", "Broer", "Suster"], answer: "Ma" },
            { question: "Translate: 'Father'", options: ["Oupa", "Ouma", "Ma", "Pa"], answer: "Pa" },
            { question: "Translate: 'Brother'", options: ["Suster", "Broer", "Pa", "Kind"], answer: "Broer" },
            { question: "Translate: 'Sister'", options: ["Broer", "Ouma", "Suster", "Ma"], answer: "Suster" },
            { question: "Translate: 'Grandfather'", options: ["Oupa", "Pa", "Broer", "Ouma"], answer: "Oupa" }
        ]
    },
    {
        id: "lesson_7", title: "7. Common Verbs",
        questions: [
            { question: "Translate: 'To eat'", options: ["Drink", "Eet", "Slaap", "Loop"], answer: "Eet" },
            { question: "Translate: 'To drink'", options: ["Hardloop", "Sien", "Drink", "Eet"], answer: "Drink" },
            { question: "Translate: 'To sleep'", options: ["Slaap", "Loop", "Eet", "Lees"], answer: "Slaap" },
            { question: "Translate: 'To walk'", options: ["Loop", "Hardloop", "Drink", "Staan"], answer: "Loop" },
            { question: "Translate: 'To run'", options: ["Slaap", "Eet", "Loop", "Hardloop"], answer: "Hardloop" }
        ]
    },
    {
        id: "lesson_8", title: "8. Days of the Week",
        questions: [
            { question: "Translate: 'Monday'", options: ["Dinsdag", "Maandag", "Sondag", "Vrydag"], answer: "Maandag" },
            { question: "Translate: 'Tuesday'", options: ["Woensdag", "Dinsdag", "Saterdag", "Maandag"], answer: "Dinsdag" },
            { question: "Translate: 'Wednesday'", options: ["Donderdag", "Vrydag", "Woensdag", "Dinsdag"], answer: "Woensdag" },
            { question: "Translate: 'Thursday'", options: ["Donderdag", "Saterdag", "Sondag", "Vrydag"], answer: "Donderdag" },
            { question: "Translate: 'Friday'", options: ["Saterdag", "Vrydag", "Maandag", "Sondag"], answer: "Vrydag" }
        ]
    },
    {
        id: "lesson_9", title: "9. Feelings",
        questions: [
            { question: "Translate: 'Happy'", options: ["Hartseer", "Kwaad", "Bly", "Moeg"], answer: "Bly" },
            { question: "Translate: 'Sad'", options: ["Bly", "Hartseer", "Honger", "Moeg"], answer: "Hartseer" },
            { question: "Translate: 'Angry'", options: ["Kwaad", "Bly", "Moeg", "Dorst"], answer: "Kwaad" },
            { question: "Translate: 'Tired'", options: ["Moeg", "Kwaad", "Bly", "Hartseer"], answer: "Moeg" },
            { question: "Translate: 'Hungry'", options: ["Honger", "Moeg", "Kwaad", "Dorst"], answer: "Honger" }
        ]
    },
    {
        id: "lesson_10", title: "10. Travel",
        questions: [
            { question: "Translate: 'Car'", options: ["Trein", "Kar", "Fiets", "Bus"], answer: "Kar" },
            { question: "Translate: 'Train'", options: ["Kar", "Vliegtuig", "Trein", "Boot"], answer: "Trein" },
            { question: "Translate: 'Airplane'", options: ["Boot", "Vliegtuig", "Kar", "Trein"], answer: "Vliegtuig" },
            { question: "Translate: 'Street'", options: ["Pad", "Straat", "Dorp", "Stad"], answer: "Straat" },
            { question: "Translate: 'Ticket'", options: ["Kaartjie", "Geld", "Paspoort", "Tas"], answer: "Kaartjie" }
        ]
    }
];

let userData = JSON.parse(localStorage.getItem('taaltrek_data')) || { stars: 0, completed: [] };
let currentLessonData = null;
let currentQuestionIndex = 0;
let sessionScore = 0;
let lastSpokenWord = "";

const screens = { home: document.getElementById('home-screen'), lesson: document.getElementById('lesson-screen'), result: document.getElementById('result-screen') };
const totalStarsDisplay = document.getElementById('total-stars');
const lessonMenu = document.getElementById('lesson-menu');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const feedbackArea = document.getElementById('feedback-area');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const replayBtn = document.getElementById('replay-audio-btn');
const progressFill = document.getElementById('progress-fill');

// Text-to-Speech Function
function playAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'af-ZA'; // Sets language to Afrikaans
        utterance.rate = 0.9; // Slightly slower for learning
        window.speechSynthesis.speak(utterance);
    }
}

replayBtn.onclick = () => playAudio(lastSpokenWord);

function updateHeader() { totalStarsDisplay.innerText = userData.stars; }

function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function renderMenu() {
    lessonMenu.innerHTML = '';
    allLessons.forEach((lesson) => {
        const btn = document.createElement('button');
        btn.classList.add('primary-btn');
        if (userData.completed.includes(lesson.id)) {
            btn.innerText = `✅ ${lesson.title}`;
            btn.classList.add('completed');
        } else {
            btn.innerText = lesson.title;
        }
        btn.onclick = () => startLesson(lesson);
        lessonMenu.appendChild(btn);
    });
}

function startLesson(lesson) {
    currentLessonData = lesson;
    currentQuestionIndex = 0;
    sessionScore = 0;
    showScreen('lesson');
    loadQuestion();
}

function loadQuestion() {
    feedbackArea.classList.add('hidden');
    replayBtn.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    const currentQ = currentLessonData.questions[currentQuestionIndex];
    questionText.innerText = currentQ.question;
    progressFill.style.width = `${(currentQuestionIndex / currentLessonData.questions.length) * 100}%`;

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
    lastSpokenWord = correct;

    if (selected === correct) {
        clickedBtn.classList.add('correct');
        feedbackText.innerText = "Correct! 🎉";
        feedbackText.style.color = "#2f855a";
        sessionScore++;
    } else {
        clickedBtn.classList.add('wrong');
        feedbackText.innerText = `Answer: ${correct}`;
        feedbackText.style.color = "#c53030";
        allBtns.forEach(b => { if (b.innerText === correct) b.classList.add('correct'); });
    }
    
    // Automatically play the Afrikaans pronunciation
    playAudio(correct);
    
    replayBtn.classList.remove('hidden');
    feedbackArea.classList.remove('hidden');
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentLessonData.questions.length) {
        loadQuestion();
    } else {
        finishLesson();
    }
};

function finishLesson() {
    progressFill.style.width = '100%';
    userData.stars += sessionScore;
    if (!userData.completed.includes(currentLessonData.id) && sessionScore === currentLessonData.questions.length) {
        userData.completed.push(currentLessonData.id);
    }
    localStorage.setItem('taaltrek_data', JSON.stringify(userData));
    updateHeader();
    document.getElementById('score-text').innerText = `${sessionScore}/${currentLessonData.questions.length}`;
    document.getElementById('earned-stars').innerText = sessionScore;
    showScreen('result');
}

document.getElementById('home-btn').onclick = () => {
    renderMenu();
    showScreen('home');
};

updateHeader();
renderMenu();
