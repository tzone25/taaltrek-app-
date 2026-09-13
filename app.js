if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

// Extended Course Data (Simulating 100+ style deep catalog with Dialogs & Slow Audio)
const allLessons = [
    { 
        id: "l1", level: "beginner", title: "1. Absolute Beginner Dialogue: Meeting Someone", 
        dialogue: [
            { af: "Hallo, hoe gaan dit?", en: "Hello, how are it? (How are you?)", speaker: "Jan" },
            { af: "Baie goed, dankie. En met jou?", en: "Very well, thank you. And with you?", speaker: "Sanna" },
            { af: "Ook goed, dankie.", en: "Also good, thank you.", speaker: "Jan" }
        ],
        vocab: [{af: "Hoe gaan dit?", en: "How are you?"}, {af: "Baie goed", en: "Very well"}, {af: "Ook goed", en: "Also good"}], 
        questions: [
            { type: "mcq", q: "Translate: 'Baie goed'", options: ["Very well", "Badly", "Thank you", "Goodbye"], a: "Very well" }, 
            { type: "type", q: "Type the Afrikaans for 'How are you?'", a: "Hoe gaan dit?" }, 
            { type: "listen", q: "Type what you hear:", a: "Ook goed" }
        ] 
    },
    { 
        id: "l2", level: "beginner", title: "2. Asking for Directions & Places", 
        dialogue: [
            { af: "Verskoon my, waar is die stasie?", en: "Excuse me, where is the station?", speaker: "Tourist" },
            { af: "Reguit an dan links.", en: "Straight ahead and then left.", speaker: "Local" }
        ],
        vocab: [{af: "Verskoon my", en: "Excuse me"}, {af: "Waar is", en: "Where is"}, {af: "Stasie", en: "Station"}, {af: "Links", en: "Left"}], 
        questions: [
            { type: "mcq", q: "Translate: 'Verskoon my'", options: ["Excuse me", "Thank you", "Good morning", "Yes"], a: "Excuse me" }, 
            { type: "type", q: "Type the Afrikaans word for 'Station'", a: "Stasie" }
        ] 
    }
    // Scale up easily with more modules...
];

let userData = JSON.parse(localStorage.getItem('taaltrek_data')) || { 
    stars: 24, 
    completed: ["l1"],
    weakWords: [] // SRS Smart Flashcard Queue
};

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

// --- Audio Engine with Speed Control (Normal / Slow) ---
function playAudio(text, slow = false) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop prior audio
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'af-ZA';
        utterance.rate = slow ? 0.6 : 0.95; // Slow down audio for native comprehension
        window.speechSynthesis.speak(utterance);
    }
}

// --- Voice Pronunciation & Comparison Tool ---
function recordPronunciation(targetWord, feedbackElementId) {
    const feedbackEl = document.getElementById(feedbackElementId);
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        feedbackEl.innerText = "Speech recognition is not supported in this browser. Try Chrome!";
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'af-ZA';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    feedbackEl.innerText = "🎤 Listening... Speak now!";
    feedbackEl.style.color = "#001489";

    recognition.start();

    recognition.onresult = function(event) {
        const spokenText = event.results[0][0].transcript.trim().toLowerCase();
        const targetClean = targetWord.trim().toLowerCase();
        
        if (spokenText === targetClean || targetClean.includes(spokenText)) {
            feedbackEl.innerText = `✅ Great job! You said: "${spokenText}"`;
            feedbackEl.style.color = "#007749";
            userData.stars += 1;
            updateHeader();
        } else {
            feedbackEl.innerText = `❌ Heard: "${spokenText}". Target was: "${targetWord}". Try again!`;
            feedbackEl.style.color = "#e03c31";
        }
    };

    recognition.onerror = function(event) {
        feedbackEl.innerText = "⚠️ Couldn't catch that clearly. Make sure mic permissions are allowed.";
        feedbackEl.style.color = "#e03c31";
    };
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
    } else if (tabName === 'flashcards') {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('flashcards-tab').classList.add('active');
        loadSmartFlashcards();
    } else {
        document.querySelectorAll('.tab-btn')[2].classList.add('active');
        document.getElementById('games-tab').classList.add('active');
    }
};

window.startLesson = function(lessonNum) {
    const lesson = allLessons.find(l => l.id === `l${lessonNum}`);
    if (!lesson) {
        alert("This deep-dive lesson is currently downloading from the core server!");
        return;
    }
    currentLessonData = lesson;
    document.getElementById('study-title').innerText = lesson.title;
    vocabList.innerHTML = '';

    // Render Audio Dialog Breakdown (Pod101 style)
    if (lesson.dialogue && lesson.dialogue.length > 0) {
        const dialogHeader = document.createElement('h3');
        dialogHeader.innerText = "💬 Line-by-Line Native Dialogue";
        dialogHeader.style.color = "#001489";
        dialogHeader.style.marginBottom = "8px";
        vocabList.appendChild(dialogHeader);

        lesson.dialogue.forEach((line, index) => {
            const dDiv = document.createElement('div');
            dDiv.classList.add('vocab-item');
            dDiv.style.background = "#f0f4f8";
            dDiv.innerHTML = `
                <div class="vocab-text">
                    <span style="font-size:0.75rem; font-weight:bold; color:#4a5568;">${line.speaker}:</span>
                    <span class="vocab-afrikaans">${line.af}</span>
                    <span class="vocab-english">${line.en}</span>
                </div>
                <div style="display:flex; gap:5px;">
                    <button class="play-vocab-btn" title="Normal Speed">🔊</button>
                    <button class="play-vocab-btn" title="Slow Native Audio" style="background:#e2e8f0;">🐢</button>
                </div>
                <div style="width:100%; margin-top:8px;">
                    <button class="play-vocab-btn" style="width:100%; background:#e6f4ea;" onclick="recordPronunciation('${line.af}', 'mic-feedback-${index}')">🎙️ Record & Compare</button>
                    <p id="mic-feedback-${index}" style="font-size:0.75rem; margin-top:4px; text-align:center; color:#718096;"></p>
                </div>
            `;
            const btns = dDiv.querySelectorAll('.play-vocab-btn');
            btns[0].onclick = () => playAudio(line.af, false);
            btns[1].onclick = () => playAudio(line.af, true);
            vocabList.appendChild(dDiv);
        });
    }

    // Render Vocabulary Slideshow List
    const vocabHeader = document.createElement('h3');
    vocabHeader.innerText = "📚 Key Vocabulary & Flashcards";
    vocabHeader.style.color = "#007749";
    vocabHeader.style.margin = "12px 0 8px 0";
    vocabList.appendChild(vocabHeader);

    lesson.vocab.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('vocab-item');
        div.innerHTML = `
            <div class="vocab-text">
                <span class="vocab-afrikaans">${item.af}</span>
                <span class="vocab-english">${item.en}</span>
            </div>
            <div style="display:flex; gap:5px;">
                <button class="play-vocab-btn">🔊</button>
                <button class="play-vocab-btn" style="background:#e2e8f0;">🐢</button>
            </div>
        `;
        const vBtns = div.querySelectorAll('.play-vocab-btn');
        vBtns[0].onclick = () => playAudio(item.af, false);
        vBtns[1].onclick = () => playAudio(item.af, true);
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
            btn.onclick = () => processAnswer(option, currentQ.a, btn, null, currentQ);
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
            processAnswer(val, currentQ.a, null, input, currentQ);
        };

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') submitBtn.click();
        });

        interactionArea.appendChild(input);
        interactionArea.appendChild(submitBtn);
        setTimeout(() => input.focus(), 100);

        if (currentQ.type === 'listen') {
            playAudio(currentQ.a, true); // Play slow audio for listening tests!
        }
    }
}

function processAnswer(selected, correct, clickedBtn, inputElem, questionObj) {
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
        
        // Log to Smart Flashcards weak queue for spaced repetition re-quizzing
        if (!userData.weakWords.includes(correct)) {
            userData.weakWords.push(correct);
            localStorage.setItem('taaltrek_data', JSON.stringify(userData));
        }

        allBtns.forEach(b => { 
            if (b.innerText.trim().toLowerCase() === correct.trim().toLowerCase()) {
                b.classList.add('correct');
            } 
        });
    }
    
    playAudio(correct, false);
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

// --- Smart Spaced-Repetition Flashcard Review Tab ---
function loadSmartFlashcards() {
    const container = document.getElementById('flashcard-queue');
    container.innerHTML = '';
    
    if (userData.weakWords.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#718096; margin-top:20px;">No weak words flagged yet! Miss questions in lessons to build your custom flashcard review deck.</p>`;
        return;
    }

    userData.weakWords.forEach((word, idx) => {
        const card = document.createElement('div');
        card.classList.add('vocab-item');
        card.innerHTML = `
            <div class="vocab-text">
                <span class="vocab-afrikaans">${word}</span>
                <span class="vocab-english">Spaced Repetition Target</span>
            </div>
            <button class="play-vocab-btn" onclick="playAudio('${word}', true)">🐢 Slow Audio</button>
            <button class="play-vocab-btn" style="background:#e03c31; color:white;" onclick="removeWeakWord(${idx})">Mastered ✓</button>
        `;
        container.appendChild(card);
    });
}

window.removeWeakWord = function(index) {
    userData.weakWords.splice(index, 1);
    localStorage.setItem('taaltrek_data', JSON.stringify(userData));
    loadSmartFlashcards();
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
        { text: "Hoe gaan dit?", match: "How are you?" }, { text: "How are you?", match: "Hoe gaan dit?" },
        { text: "Baie goed", match: "Very well" }, { text: "Very well", match: "Baie goed" },
        { text: "Stasie", match: "Station" }, { text: "Station", match: "Stasie" },
        { text: "Verskoon my", match: "Excuse me" }, { text: "Excuse me", match: "Verskoon my" }
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
