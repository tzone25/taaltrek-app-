if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

const allLessons = [
    // BEGINNER (Lessons 1 - 7)
    { id: "l1", level: "beginner", title: "1. Basics", vocab: [{af: "Hallo", en: "Hello"}, {af: "Ja", en: "Yes"}, {af: "Nee", en: "No"}, {af: "Dankie", en: "Thank you"}], questions: [{ type: "mcq", q: "Translate: 'Hello'", options: ["Hallo", "Ja", "Nee", "Dankie"], a: "Hallo" }, { type: "type", q: "Type the Afrikaans word for 'Yes'", a: "Ja" }, { type: "listen", q: "Type what you hear:", a: "Nee" }, { type: "mcq", q: "Translate: 'Thank you'", options: ["Dankie", "Ja", "Hallo", "Nee"], a: "Dankie" }, { type: "type", q: "Translate: 'Hello'", a: "Hallo" }] },
    { id: "l2", level: "beginner", title: "2. Greetings", vocab: [{af: "Totsiens", en: "Goodbye"}, {af: "Goeiemôre", en: "Good morning"}, {af: "Asseblief", en: "Please"}, {af: "Goed", en: "Good"}], questions: [{ type: "mcq", q: "Translate: 'Good morning'", options: ["Totsiens", "Goeiemôre", "Goed", "Asseblief"], a: "Goeiemôre" }, { type: "listen", q: "Type what you hear:", a: "Asseblief" }, { type: "type", q: "Type the Afrikaans word for 'Goodbye'", a: "Totsiens" }, { type: "mcq", q: "Translate: 'Good'", options: ["Goed", "Totsiens", "Ja", "Nee"], a: "Goed" }, { type: "listen", q: "Type what you hear:", a: "Goeiemôre" }] },
    { id: "l3", level: "beginner", title: "3. Numbers 1-5", vocab: [{af: "Een", en: "One"}, {af: "Twee", en: "Two"}, {af: "Drie", en: "Three"}, {af: "Vier", en: "Four"}, {af: "Vyf", en: "Five"}], questions: [{ type: "mcq", q: "Translate: 'Three'", options: ["Een", "Twee", "Drie", "Vyf"], a: "Drie" }, { type: "type", q: "Type the Afrikaans word for 'One'", a: "Een" }, { type: "listen", q: "Type what you hear:", a: "Vier" }, { type: "mcq", q: "Translate: 'Five'", options: ["Vyf", "Vier", "Twee", "Een"], a: "Vyf" }, { type: "type", q: "Type the Afrikaans word for 'Two'", a: "Twee" }] },
    { id: "l4", level: "beginner", title: "4. Animals", vocab: [{af: "Hond", en: "Dog"}, {af: "Kat", en: "Cat"}, {af: "Vis", en: "Fish"}, {af: "Voël", en: "Bird"}], questions: [{ type: "listen", q: "Type what you hear:", a: "Hond" }, { type: "mcq", q: "Translate: 'Bird'", options: ["Hond", "Vis", "Voël", "Kat"], a: "Voël" }, { type: "type", q: "Type the Afrikaans word for 'Cat'", a: "Kat" }, { type: "mcq", q: "Translate: 'Fish'", options: ["Vis", "Kat", "Voël", "Hond"], a: "Vis" }, { type: "listen", q: "Type what you hear:", a: "Voël" }] },
    { id: "l5", level: "beginner", title: "5. Food", vocab: [{af: "Kos", en: "Food"}, {af: "Brood", en: "Bread"}, {af: "Vleis", en: "Meat"}, {af: "Kaas", en: "Cheese"}], questions: [{ type: "type", q: "Type the Afrikaans word for 'Bread'", a: "Brood" }, { type: "mcq", q: "Translate: 'Cheese'", options: ["Kos", "Vleis", "Kaas", "Brood"], a: "Kaas" }, { type: "listen", q: "Type what you hear:", a: "Kos" }, { type: "type", q: "Type the Afrikaans word for 'Meat'", a: "Vleis" }, { type: "mcq", q: "Translate: 'Food'", options: ["Brood", "Kos", "Kaas", "Vleis"], a: "Kos" }] },
    { id: "l6", level: "beginner", title: "6. Drink", vocab: [{af: "Water", en: "Water"}, {af: "Melk", en: "Milk"}, {af: "Koffie", en: "Coffee"}, {af: "Tee", en: "Tea"}], questions: [{ type: "listen", q: "Type what you hear:", a: "Melk" }, { type: "type", q: "Type the Afrikaans word for 'Tea'", a: "Tee" }, { type: "mcq", q: "Translate: 'Coffee'", options: ["Water", "Tee", "Koffie", "Melk"], a: "Koffie" }, { type: "type", q: "Type the Afrikaans word for 'Water'", a: "Water" }, { type: "listen", q: "Type what you hear:", a: "Koffie" }] },
    { id: "l7", level: "beginner", title: "7. Colors", vocab: [{af: "Rooi", en: "Red"}, {af: "Blou", en: "Blue"}, {af: "Groen", en: "Green"}, {af: "Geel", en: "Yellow"}], questions: [{ type: "mcq", q: "Translate: 'Blue'", options: ["Rooi", "Blou", "Groen", "Geel"], a: "Blou" }, { type: "listen", q: "Type what you hear:", a: "Groen" }, { type: "type", q: "Type the Afrikaans word for 'Red'", a: "Rooi" }, { type: "mcq", q: "Translate: 'Yellow'", options: ["Geel", "Blou", "Groen", "Rooi"], a: "Geel" }, { type: "type", q: "Type the Afrikaans word for 'Blue'", a: "Blou" }] },

    // INTERMEDIATE (Lessons 8 - 14)
    { id: "l8", level: "intermediate", title: "8. Family", vocab: [{af: "Ma", en: "Mother"}, {af: "Pa", en: "Father"}, {af: "Broer", en: "Brother"}, {af: "Suster", en: "Sister"}], questions: [{ type: "listen", q: "Type what you hear:", a: "Broer" }, { type: "mcq", q: "Translate: 'Sister'", options: ["Ma", "Pa", "Broer", "Suster"], a: "Suster" }, { type: "type", q: "Type the Afrikaans word for 'Father'", a: "Pa" }, { type: "mcq", q: "Translate: 'Mother'", options: ["Ma", "Broer", "Suster", "Pa"], a: "Ma" }, { type: "listen", q: "Type what you hear:", a: "Suster" }] },
    { id: "l9", level: "intermediate", title: "9. Weather", vocab: [{af: "Son", en: "Sun"}, {af: "Reën", en: "Rain"}, {af: "Wind", en: "Wind"}, {af: "Koud", en: "Cold"}], questions: [{ type: "type", q: "Type the Afrikaans word for 'Rain'", a: "Reën" }, { type: "mcq", q: "Translate: 'Cold'", options: ["Son", "Reën", "Wind", "Koud"], a: "Koud" }, { type: "listen", q: "Type what you hear:", a: "Wind" }, { type: "type", q: "Type the Afrikaans word for 'Sun'", a: "Son" }, { type: "mcq", q: "Translate: 'Wind'", options: ["Koud", "Son", "Wind", "Reën"], a: "Wind" }] },
    { id: "l10", level: "intermediate", title: "10. Travel", vocab: [{af: "Kar", en: "Car"}, {af: "Trein", en: "Train"}, {af: "Bus", en: "Bus"}, {af: "Straat", en: "Street"}], questions: [{ type: "listen", q: "Type what you hear:", a: "Kar" }, { type: "mcq", q: "Translate: 'Train'", options: ["Bus", "Trein", "Straat", "Kar"], a: "Trein" }, { type: "type", q: "Type the Afrikaans word for 'Street'", a: "Straat" }, { type: "mcq", q: "Translate: 'Bus'", options: ["Kar", "Trein", "Bus", "Straat"], a: "Bus" }, { type: "listen", q: "Type what you hear:", a: "Trein" }] }
];

let userData = JSON.parse(localStorage.getItem('taaltrek_data')) || { stars: 24, completed: ["l1"] };
let currentLessonData = null;
let currentQuestionIndex = 0;
let sessionScore = 0;
let lastSpokenWord = "";

const screens = { 
    home: document.getElementById('main-screen'), 
    study: document.getElementById('study-screen'), 
    lesson: document.getElementById('lesson-screen'), 
    result: document.getElementById('result-screen') 
};

const xpDisplay = document.getElementById('xp-display');
const vocabList = document.getElementById('vocab-list');
const interactionArea = document.getElementById('interaction-area');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const feedbackArea = document.getElementById('feedback-area');
const feedbackText = document.getElementById('feedback-text');
const progressFill = document.getElementById('progress-fill');

function playAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'af-ZA';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

function updateHeader() { 
    if (xpDisplay) xpDisplay.innerText = `⭐ ${userData.stars}`; 
}

function showScreen(screenName) {
    Object.values(screens).forEach(s => {
        if (s) s.classList.remove('active');
    });
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
    }
}

window.switchTab = function(tabName) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    if (tabName === 'lessons') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('lessons-tab').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('games-tab').classList.add('active');
    }
};

window.startLesson = function(lessonNum) {
    const lesson = allLessons.find(l => l.id === `l${lessonNum}`);
    if (!lesson) {
        alert("This lesson is coming soon!");
        return;
    }
    currentLessonData = lesson;
    document.getElementById('study-title').innerText = lesson.title;
    vocabList.innerHTML = '';

    lesson.vocab.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('vocab-item');
        div.innerHTML = `
            <div class="vocab-text">
                <span class="vocab-afrikaans">${item.af}</span>
                <span class="vocab-english">${item.en}</span>
            </div>
            <button class="play-vocab-btn">🔊</button>
        `;
        div.querySelector('.play-vocab-btn').onclick = () => playAudio(item.af);
        vocabList.appendChild(div);
    });
    showScreen('study');
};

window.startQuiz = function() {
    currentQuestionIndex = 0;
    sessionScore = 0;
    showScreen('lesson');
    loadQuestion();
};

function loadQuestion() {
    feedbackArea.classList.add('hidden');
    interactionArea.innerHTML = '';
    
    const currentQ = currentLessonData.questions[currentQuestionIndex];
    questionNumber.innerText = `Question ${currentQuestionIndex + 1} of ${currentLessonData.questions.length}`;
    questionText.innerText = currentQ.q;
    lastSpokenWord = currentQ.a; 
    progressFill.style.width = `${((currentQuestionIndex) / currentLessonData.questions.length) * 100}%`;

    if (currentQ.type === 'mcq') {
        currentQ.options.forEach(option => {
            const btn = document.createElement('button');
            btn.innerText = option;
            btn.classList.add('option-btn');
            btn.onclick = () => processAnswer(option, currentQ.a, btn);
            interactionArea.appendChild(btn);
        });
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'typing-input';
        input.placeholder = 'Type your answer in Afrikaans...';
        
        const submitBtn = document.createElement('button');
        submitBtn.innerText = 'Check Answer';
        submitBtn.classList.add('primary-btn');
        submitBtn.style.marginTop = '10px';

        submitBtn.onclick = () => {
            const val = input.value.trim();
            if (!val) return;
            processAnswer(val, currentQ.a, null, input);
        };

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') submitBtn.click();
        });

        interactionArea.appendChild(input);
        interactionArea.appendChild(submitBtn);
        setTimeout(() => input.focus(), 100);

        if (currentQ.type === 'listen') {
            playAudio(currentQ.a);
        }
    }
}

function processAnswer(selected, correct, clickedBtn, inputElem) {
    const isCorrect = selected.trim().toLowerCase() === correct.trim().toLowerCase();
    
    const allBtns = interactionArea.querySelectorAll('button');
    allBtns.forEach(b => b.disabled = true);
    if (inputElem) inputElem.disabled = true;

    if (isCorrect) {
        if (clickedBtn) clickedBtn.classList.add('correct');
        if (inputElem) inputElem.classList.add('correct');
        feedbackText.innerText = "Correct! 🎉";
        feedbackText.style.color = "#007749";
        sessionScore++;
    } else {
        if (clickedBtn) clickedBtn.classList.add('wrong');
        if (inputElem) inputElem.style.borderColor = "#e03c31";
        feedbackText.innerText = `Incorrect. Correct answer: ${correct}`;
        feedbackText.style.color = "#e03c31";
        
        allBtns.forEach(b => { 
            if (b.innerText.trim().toLowerCase() === correct.trim().toLowerCase()) {
                b.classList.add('correct');
            } 
        });
    }
    
    playAudio(correct);
    feedbackArea.classList.remove('hidden');
}

window.nextQuestion = function() {
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
    if (!userData.completed.includes(currentLessonData.id)) {
        userData.completed.push(currentLessonData.id);
    }
    localStorage.setItem('taaltrek_data', JSON.stringify(userData));
    updateHeader();
    document.getElementById('result-stats').innerText = `You earned +${sessionScore} XP! Total Stars: ${userData.stars}`;
    showScreen('result');
}

window.returnHome = function() {
    showScreen('home');
};

window.startMatchingGame = function() {
    alert("Matching Pairs mini-game coming up next! Keep practicing your lessons to unlock more.");
};

updateHeader();
