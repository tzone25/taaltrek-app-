if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

const allLessons = [
    // --- MODULE 1: BEGINNER ESSENTIALS ---
    { 
        id: "l1", level: "beginner", title: "1. Basics & Greetings", 
        vocab: [{af: "Hallo", en: "Hello"}, {af: "Ja", en: "Yes"}, {af: "Nee", en: "No"}, {af: "Dankie", en: "Thank you"}, {af: "Asseblief", en: "Please"}], 
        questions: [
            { type: "mcq", q: "Translate: 'Hello'", options: ["Hallo", "Ja", "Nee", "Dankie"], a: "Hallo" }, 
            { type: "type", q: "Type the Afrikaans word for 'Yes'", a: "Ja" }, 
            { type: "listen", q: "Type what you hear:", a: "Nee" }, 
            { type: "mcq", q: "Translate: 'Thank you'", options: ["Dankie", "Ja", "Hallo", "Asseblief"], a: "Dankie" },
            { type: "type", q: "Type the Afrikaans word for 'Please'", a: "Asseblief" }
        ] 
    },
    { 
        id: "l2", level: "beginner", title: "2. Goodbyes & Courtesy", 
        vocab: [{af: "Totsiens", en: "Goodbye"}, {af: "Goeiemôre", en: "Good morning"}, {af: "Goeienaand", en: "Good evening"}, {af: "Sien jou later", en: "See you later"}], 
        questions: [
            { type: "mcq", q: "Translate: 'Good morning'", options: ["Totsiens", "Goeiemôre", "Goeienaand", "Sien jou later"], a: "Goeiemôre" }, 
            { type: "type", q: "Type the Afrikaans word for 'Goodbye'", a: "Totsiens" }, 
            { type: "listen", q: "Type what you hear:", a: "Goeienaand" }, 
            { type: "mcq", q: "Translate: 'See you later'", options: ["Sien jou later", "Totsiens", "Goeiemôre", "Ja"], a: "Sien jou later" }
        ] 
    },
    { 
        id: "l3", level: "beginner", title: "3. Numbers 1 to 10", 
        vocab: [{af: "Een", en: "One"}, {af: "Twee", en: "Two"}, {af: "Drie", en: "Three"}, {af: "Vier", en: "Four"}, {af: "Vyf", en: "Five"}, {af: "Ses", en: "Six"}, {af: "Sewe", en: "Seven"}, {af: "Agt", en: "Eight"}], 
        questions: [
            { type: "mcq", q: "Translate: 'Three'", options: ["Een", "Twee", "Drie", "Vyf"], a: "Drie" }, 
            { type: "type", q: "Type the Afrikaans word for 'One'", a: "Een" }, 
            { type: "listen", q: "Type what you hear:", a: "Vier" }, 
            { type: "mcq", q: "Translate: 'Eight'", options: ["Agt", "Ses", "Sewe", "Vyf"], a: "Agt" }, 
            { type: "type", q: "Type the Afrikaans word for 'Six'", a: "Ses" }
        ] 
    },
    { 
        id: "l4", level: "beginner", title: "4. Colors & Shapes", 
        vocab: [{af: "Rooi", en: "Red"}, {af: "Blou", en: "Blue"}, {af: "Groen", en: "Green"}, {af: "Geel", en: "Yellow"}, {af: "Swart", en: "Black"}, {af: "Wit", en: "White"}], 
        questions: [
            { type: "mcq", q: "Translate: 'Blue'", options: ["Rooi", "Blou", "Groen", "Geel"], a: "Blou" }, 
            { type: "listen", q: "Type what you hear:", a: "Groen" }, 
            { type: "type", q: "Type the Afrikaans word for 'Red'", a: "Rooi" }, 
            { type: "mcq", q: "Translate: 'Black'", options: ["Wit", "Swart", "Geel", "Blou"], a: "Swart" },
            { type: "type", q: "Type the Afrikaans word for 'White'", a: "Wit" }
        ] 
    },
    { 
        id: "l5", level: "beginner", title: "5. Animals & Pets", 
        vocab: [{af: "Hond", en: "Dog"}, {af: "Kat", en: "Cat"}, {af: "Vis", en: "Fish"}, {af: "Voël", en: "Bird"}, {af: "Perd", en: "Horse"}, {af: "Leeu", en: "Lion"}], 
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Hond" }, 
            { type: "mcq", q: "Translate: 'Bird'", options: ["Hond", "Vis", "Voël", "Kat"], a: "Voël" }, 
            { type: "type", q: "Type the Afrikaans word for 'Cat'", a: "Kat" }, 
            { type: "mcq", q: "Translate: 'Horse'", options: ["Perd", "Leeu", "Voël", "Hond"], a: "Perd" },
            { type: "type", q: "Type the Afrikaans word for 'Lion'", a: "Leeu" }
        ] 
    },
    { 
        id: "l6", level: "beginner", title: "6. Food & Snacks", 
        vocab: [{af: "Kos", en: "Food"}, {af: "Brood", en: "Bread"}, {af: "Vleis", en: "Meat"}, {af: "Kaas", en: "Cheese"}, {af: "Appel", en: "Apple"}, {af: "Water", en: "Water"}], 
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'Bread'", a: "Brood" }, 
            { type: "mcq", q: "Translate: 'Cheese'", options: ["Kos", "Vleis", "Kaas", "Brood"], a: "Kaas" }, 
            { type: "listen", q: "Type what you hear:", a: "Appel" }, 
            { type: "type", q: "Type the Afrikaans word for 'Water'", a: "Water" },
            { type: "mcq", q: "Translate: 'Meat'", options: ["Vleis", "Kos", "Kaas", "Brood"], a: "Vleis" }
        ] 
    },
    { 
        id: "l7", level: "beginner", title: "7. Drinks & Beverages", 
        vocab: [{af: "Melk", en: "Milk"}, {af: "Koffie", en: "Coffee"}, {af: "Tee", en: "Tea"}, {af: "Bier", en: "Beer"}, {af: "Sap", en: "Juice"}], 
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Melk" }, 
            { type: "type", q: "Type the Afrikaans word for 'Tea'", a: "Tee" }, 
            { type: "mcq", q: "Translate: 'Coffee'", options: ["Water", "Tee", "Koffie", "Melk"], a: "Koffie" }, 
            { type: "type", q: "Type the Afrikaans word for 'Juice'", a: "Sap" },
            { type: "mcq", q: "Translate: 'Beer'", options: ["Bier", "Koffie", "Tee", "Melk"], a: "Bier" }
        ] 
    },

    // --- MODULE 2: INTERMEDIATE LIFE & CULTURE ---
    { 
        id: "l8", level: "intermediate", title: "8. Family Members", 
        vocab: [{af: "Ma", en: "Mother"}, {af: "Pa", en: "Father"}, {af: "Broer", en: "Brother"}, {af: "Suster", en: "Sister"}, {af: "Oupa", en: "Grandfather"}, {af: "Ouma", en: "Grandmother"}], 
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Broer" }, 
            { type: "mcq", q: "Translate: 'Sister'", options: ["Ma", "Pa", "Broer", "Suster"], a: "Suster" }, 
            { type: "type", q: "Type the Afrikaans word for 'Father'", a: "Pa" }, 
            { type: "mcq", q: "Translate: 'Grandfather'", options: ["Oupa", "Ouma", "Broer", "Pa"], a: "Oupa" },
            { type: "type", q: "Type the Afrikaans word for 'Grandmother'", a: "Ouma" }
        ] 
    },
    { 
        id: "l9", level: "intermediate", title: "9. Weather & Nature", 
        vocab: [{af: "Son", en: "Sun"}, {af: "Reën", en: "Rain"}, {af: "Wind", en: "Wind"}, {af: "Koud", en: "Cold"}, {af: "Warm", en: "Warm"}, {af: "Sneeu", en: "Snow"}], 
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'Rain'", a: "Reën" }, 
            { type: "mcq", q: "Translate: 'Cold'", options: ["Son", "Reën", "Wind", "Koud"], a: "Koud" }, 
            { type: "listen", q: "Type what you hear:", a: "Wind" }, 
            { type: "mcq", q: "Translate: 'Warm'", options: ["Koud", "Warm", "Son", "Reën"], a: "Warm" },
            { type: "type", q: "Type the Afrikaans word for 'Snow'", a: "Sneeu" }
        ] 
    },
    { 
        id: "l10", level: "intermediate", title: "10. Travel & Transport", 
        vocab: [{af: "Kar", en: "Car"}, {af: "Trein", en: "Train"}, {af: "Bus", en: "Bus"}, {af: "Vliegtuig", en: "Airplane"}, {af: "Straat", en: "Street"}], 
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Kar" }, 
            { type: "mcq", q: "Translate: 'Train'", options: ["Bus", "Trein", "Straat", "Kar"], a: "Trein" }, 
            { type: "type", q: "Type the Afrikaans word for 'Airplane'", a: "Vliegtuig" }, 
            { type: "mcq", q: "Translate: 'Bus'", options: ["Kar", "Trein", "Bus", "Straat"], a: "Bus" },
            { type: "type", q: "Type the Afrikaans word for 'Street'", a: "Straat" }
        ] 
    },
    { 
        id: "l11", level: "intermediate", title: "11. Time & Days", 
        vocab: [{af: "Vandag", en: "Today"}, {af: "Môre", en: "Tomorrow"}, {af: "Gister", en: "Yesterday"}, {af: "Tyd", en: "Time"}, {af: "Uur", en: "Hour"}], 
        questions: [
            { type: "mcq", q: "Translate: 'Today'", options: ["Vandag", "Môre", "Gister", "Tyd"], a: "Vandag" },
            { type: "type", q: "Type the Afrikaans word for 'Tomorrow'", a: "Môre" },
            { type: "listen", q: "Type what you hear:", a: "Gister" },
            { type: "mcq", q: "Translate: 'Time'", options: ["Uur", "Tyd", "Vandag", "Môre"], a: "Tyd" }
        ] 
    },
    { 
        id: "l12", level: "intermediate", title: "12. House & Home", 
        vocab: [{af: "Huis", en: "House"}, {af: "Deur", en: "Door"}, {af: "Venster", en: "Window"}, {af: "Kamer", en: "Room"}, {af: "Bed", en: "Bed"}], 
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'House'", a: "Huis" },
            { type: "mcq", q: "Translate: 'Door'", options: ["Deur", "Venster", "Kamer", "Bed"], a: "Deur" },
            { type: "listen", q: "Type what you hear:", a: "Venster" },
            { type: "type", q: "Type the Afrikaans word for 'Bed'", a: "Bed" }
        ] 
    },

    // --- MODULE 3: ADVANCED FLUENCY ---
    { 
        id: "l13", level: "advanced", title: "13. Emotions & Feelings", 
        vocab: [{af: "Gelukkig", en: "Happy"}, {af: "Sad", en: "Treurig"}, {af: "Kwaad", en: "Angry"}, {af: "Moeg", en: "Tired"}, {af: "Bang", en: "Scared"}], 
        questions: [
            { type: "mcq", q: "Translate: 'Happy'", options: ["Gelukkig", "Kwaad", "Moeg", "Bang"], a: "Gelukkig" },
            { type: "type", q: "Type the Afrikaans word for 'Tired'", a: "Moeg" },
            { type: "listen", q: "Type what you hear:", a: "Kwaad" },
            { type: "mcq", q: "Translate: 'Scared'", options: ["Bang", "Gelukkig", "Moeg", "Kwaad"], a: "Bang" }
        ] 
    },
    { 
        id: "l14", level: "advanced", title: "14. Actions & Verbs", 
        vocab: [{af: "Loop", en: "Walk"}, {af: "Hardloop", en: "Run"}, {af: "Eet", en: "Eat"}, {af: "Drink", en: "Drink"}, {af: "Slaap", en: "Sleep"}, {af: "Praat", en: "Speak"}], 
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'Run'", a: "Hardloop" },
            { type: "mcq", q: "Translate: 'Eat'", options: ["Loop", "Eet", "Slaap", "Praat"], a: "Eet" },
            { type: "listen", q: "Type what you hear:", a: "Slaap" },
            { type: "type", q: "Type the Afrikaans word for 'Speak'", a: "Praat" }
        ] 
    },
    { 
        id: "l15", level: "advanced", title: "15. School & Learning", 
        vocab: [{af: "Skool", en: "School"}, {af: "Boek", en: "Book"}, {af: "Pen", en: "Pen"}, {af: "Taal", en: "Language"}, {af: "Vraag", en: "Question"}], 
        questions: [
            { type: "mcq", q: "Translate: 'Book'", options: ["Skool", "Boek", "Pen", "Taal"], a: "Boek" },
            { type: "type", q: "Type the Afrikaans word for 'School'", a: "Skool" },
            { type: "listen", q: "Type what you hear:", a: "Taal" },
            { type: "mcq", q: "Translate: 'Question'", options: ["Vraag", "Pen", "Boek", "Skool"], a: "Vraag" }
        ] 
    },
    { 
        id: "l16", level: "advanced", title: "16. Shopping & Money", 
        vocab: [{af: "Winkel", en: "Shop"}, {af: "Geld", en: "Money"}, {af: "Prys", en: "Price"}, {af: "Duur", en: "Expensive"}, {af: "Goedkoop", en: "Cheap"}], 
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'Money'", a: "Geld" },
            { type: "mcq", q: "Translate: 'Shop'", options: ["Winkel", "Prys", "Duur", "Goedkoop"], a: "Winkel" },
            { type: "listen", q: "Type what you hear:", a: "Duur" },
            { type: "type", q: "Type the Afrikaans word for 'Cheap'", a: "Goedkoop" }
        ] 
    }
];

let userData = JSON.parse(localStorage.getItem('taaltrek_data')) || { stars: 24, completed: ["l1"] };
let currentLessonData = null;
let currentQuestionIndex = 0;
let sessionScore = 0;

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

// Matching Pairs Mini-Game
window.startMatchingGame = function() {
    showScreen('lesson');
    questionNumber.innerText = "Mini-Game: Matching Pairs";
    questionText.innerText = "Match the Afrikaans word with its English meaning!";
    progressFill.style.width = '100%';
    interactionArea.innerHTML = '<div id="game-board"></div>';
    
    const board = document.getElementById('game-board');
    let tiles = [
        { text: "Hallo", match: "Hello" }, { text: "Hello", match: "Hallo" },
        { text: "Ja", match: "Yes" }, { text: "Yes", match: "Ja" },
        { text: "Nee", match: "No" }, { text: "No", match: "Nee" },
        { text: "Dankie", match: "Thank you" }, { text: "Thank you", match: "Dankie" }
    ];
    
    tiles.sort(() => Math.random() - 0.5);
    let selectedTile = null;
    let matchedPairs = 0;

    tiles.forEach(item => {
        const tile = document.createElement('div');
        tile.classList.add('game-tile');
        tile.innerText = item.text;
        tile.onclick = () => {
            if (tile.classList.contains('matched') || tile.classList.contains('selected')) return;
            
            if (!selectedTile) {
                selectedTile = { element: tile, data: item };
                tile.classList.add('selected');
            } else {
                if (selectedTile.data.text !== item.text && selectedTile.data.match === item.text) {
                    selectedTile.element.classList.remove('selected');
                    selectedTile.element.classList.add('matched');
                    tile.classList.add('matched');
                    selectedTile = null;
                    matchedPairs++;
                    
                    if (matchedPairs === 4) {
                        userData.stars += 5;
                        localStorage.setItem('taaltrek_data', JSON.stringify(userData));
                        updateHeader();
                        setTimeout(() => {
                            alert("Congratulations! You won 5 bonus stars! 🎉");
                            returnHome();
                        }, 300);
                    }
                } else {
                    selectedTile.element.classList.add('wrong');
                    tile.classList.add('wrong');
                    setTimeout(() => {
                        selectedTile.element.classList.remove('selected', 'wrong');
                        tile.classList.remove('wrong');
                        selectedTile = null;
                    }, 500);
                }
            }
        };
        board.appendChild(tile);
    });
};

updateHeader();
