if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

const allLessons = [
    {
        id: "l1", title: "1. Basics",
        vocab: [{af: "Hallo", en: "Hello"}, {af: "Ja", en: "Yes"}, {af: "Nee", en: "No"}, {af: "Dankie", en: "Thank you"}],
        questions: [
            { type: "mcq", q: "Translate: 'Hello'", options: ["Hallo", "Ja", "Nee", "Dankie"], a: "Hallo" },
            { type: "type", q: "Type the Afrikaans word for 'Yes'", a: "Ja" },
            { type: "listen", q: "Type what you hear:", a: "Nee" },
            { type: "mcq", q: "Translate: 'Thank you'", options: ["Dankie", "Ja", "Hallo", "Nee"], a: "Dankie" },
            { type: "type", q: "Translate: 'Hello'", a: "Hallo" }
        ]
    },
    {
        id: "l2", title: "2. Greetings",
        vocab: [{af: "Totsiens", en: "Goodbye"}, {af: "Goeiemôre", en: "Good morning"}, {af: "Asseblief", en: "Please"}, {af: "Goed", en: "Good"}],
        questions: [
            { type: "mcq", q: "Translate: 'Good morning'", options: ["Totsiens", "Goeiemôre", "Goed", "Asseblief"], a: "Goeiemôre" },
            { type: "listen", q: "Type what you hear:", a: "Asseblief" },
            { type: "type", q: "Type the Afrikaans word for 'Goodbye'", a: "Totsiens" },
            { type: "mcq", q: "Translate: 'Good'", options: ["Goed", "Totsiens", "Ja", "Nee"], a: "Goed" },
            { type: "listen", q: "Type what you hear:", a: "Goeiemôre" }
        ]
    },
    {
        id: "l3", title: "3. Numbers 1-5",
        vocab: [{af: "Een", en: "One"}, {af: "Twee", en: "Two"}, {af: "Drie", en: "Three"}, {af: "Vier", en: "Four"}, {af: "Vyf", en: "Five"}],
        questions: [
            { type: "mcq", q: "Translate: 'Three'", options: ["Een", "Twee", "Drie", "Vyf"], a: "Drie" },
            { type: "type", q: "Type the Afrikaans word for 'One'", a: "Een" },
            { type: "listen", q: "Type what you hear:", a: "Vier" },
            { type: "mcq", q: "Translate: 'Five'", options: ["Vyf", "Vier", "Twee", "Een"], a: "Vyf" },
            { type: "type", q: "Type the Afrikaans word for 'Two'", a: "Twee" }
        ]
    },
    {
        id: "l4", title: "4. Animals",
        vocab: [{af: "Hond", en: "Dog"}, {af: "Kat", en: "Cat"}, {af: "Vis", en: "Fish"}, {af: "Voël", en: "Bird"}],
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Hond" },
            { type: "mcq", q: "Translate: 'Bird'", options: ["Hond", "Vis", "Voël", "Kat"], a: "Voël" },
            { type: "type", q: "Type the Afrikaans word for 'Cat'", a: "Kat" },
            { type: "mcq", q: "Translate: 'Fish'", options: ["Vis", "Kat", "Voël", "Hond"], a: "Vis" },
            { type: "listen", q: "Type what you hear:", a: "Voël" }
        ]
    },
    {
        id: "l5", title: "5. Food",
        vocab: [{af: "Kos", en: "Food"}, {af: "Brood", en: "Bread"}, {af: "Vleis", en: "Meat"}, {af: "Kaas", en: "Cheese"}],
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'Bread'", a: "Brood" },
            { type: "mcq", q: "Translate: 'Cheese'", options: ["Kos", "Vleis", "Kaas", "Brood"], a: "Kaas" },
            { type: "listen", q: "Type what you hear:", a: "Kos" },
            { type: "type", q: "Type the Afrikaans word for 'Meat'", a: "Vleis" },
            { type: "mcq", q: "Translate: 'Food'", options: ["Brood", "Kos", "Kaas", "Vleis"], a: "Kos" }
        ]
    },
    {
        id: "l6", title: "6. Drink",
        vocab: [{af: "Water", en: "Water"}, {af: "Melk", en: "Milk"}, {af: "Koffie", en: "Coffee"}, {af: "Tee", en: "Tea"}],
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Melk" },
            { type: "type", q: "Type the Afrikaans word for 'Tea'", a: "Tee" },
            { type: "mcq", q: "Translate: 'Coffee'", options: ["Water", "Tee", "Koffie", "Melk"], a: "Koffie" },
            { type: "type", q: "Type the Afrikaans word for 'Water'", a: "Water" },
            { type: "listen", q: "Type what you hear:", a: "Koffie" }
        ]
    },
    {
        id: "l7", title: "7. Colors",
        vocab: [{af: "Rooi", en: "Red"}, {af: "Blou", en: "Blue"}, {af: "Groen", en: "Green"}, {af: "Geel", en: "Yellow"}],
        questions: [
            { type: "mcq", q: "Translate: 'Blue'", options: ["Rooi", "Blou", "Groen", "Geel"], a: "Blou" },
            { type: "listen", q: "Type what you hear:", a: "Groen" },
            { type: "type", q: "Type the Afrikaans word for 'Red'", a: "Rooi" },
            { type: "mcq", q: "Translate: 'Yellow'", options: ["Geel", "Blou", "Groen", "Rooi"], a: "Geel" },
            { type: "type", q: "Type the Afrikaans word for 'Blue'", a: "Blou" }
        ]
    },
    {
        id: "l8", title: "8. Family",
        vocab: [{af: "Ma", en: "Mother"}, {af: "Pa", en: "Father"}, {af: "Broer", en: "Brother"}, {af: "Suster", en: "Sister"}],
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Broer" },
            { type: "mcq", q: "Translate: 'Sister'", options: ["Ma", "Pa", "Broer", "Suster"], a: "Suster" },
            { type: "type", q: "Type the Afrikaans word for 'Father'", a: "Pa" },
            { type: "mcq", q: "Translate: 'Mother'", options: ["Ma", "Broer", "Suster", "Pa"], a: "Ma" },
            { type: "listen", q: "Type what you hear:", a: "Suster" }
        ]
    },
    {
        id: "l9", title: "9. Weather",
        vocab: [{af: "Son", en: "Sun"}, {af: "Reën", en: "Rain"}, {af: "Wind", en: "Wind"}, {af: "Koud", en: "Cold"}],
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'Rain'", a: "Reën" },
            { type: "mcq", q: "Translate: 'Cold'", options: ["Son", "Reën", "Wind", "Koud"], a: "Koud" },
            { type: "listen", q: "Type what you hear:", a: "Wind" },
            { type: "type", q: "Type the Afrikaans word for 'Sun'", a: "Son" },
            { type: "mcq", q: "Translate: 'Wind'", options: ["Koud", "Son", "Wind", "Reën"], a: "Wind" }
        ]
    },
    {
        id: "l10", title: "10. Travel",
        vocab: [{af: "Kar", en: "Car"}, {af: "Trein", en: "Train"}, {af: "Bus", en: "Bus"}, {af: "Straat", en: "Street"}],
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Kar" },
            { type: "mcq", q: "Translate: 'Train'", options: ["Bus", "Trein", "Straat", "Kar"], a: "Trein" },
            { type: "type", q: "Type the Afrikaans word for 'Street'", a: "Straat" },
            { type: "mcq", q: "Translate: 'Bus'", options: ["Kar", "Trein", "Bus", "Straat"], a: "Bus" },
            { type: "listen", q: "Type what you hear:", a: "Trein" }
        ]
    },
    {
        id: "l11", title: "11. Time",
        vocab: [{af: "Dag", en: "Day"}, {af: "Nag", en: "Night"}, {af: "Vandag", en: "Today"}, {af: "Môre", en: "Tomorrow"}],
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'Today'", a: "Vandag" },
            { type: "mcq", q: "Translate: 'Night'", options: ["Dag", "Vandag", "Nag", "Môre"], a: "Nag" },
            { type: "listen", q: "Type what you hear:", a: "Môre" },
            { type: "type", q: "Type the Afrikaans word for 'Day'", a: "Dag" },
            { type: "mcq", q: "Translate: 'Tomorrow'", options: ["Môre", "Vandag", "Nag", "Dag"], a: "Môre" }
        ]
    },
    {
        id: "l12", title: "12. Verbs: Motion",
        vocab: [{af: "Loop", en: "Walk"}, {af: "Hardloop", en: "Run"}, {af: "Spring", en: "Jump"}, {af: "Staan", en: "Stand"}],
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Hardloop" },
            { type: "mcq", q: "Translate: 'Jump'", options: ["Loop", "Staan", "Spring", "Hardloop"], a: "Spring" },
            { type: "type", q: "Type the Afrikaans word for 'Walk'", a: "Loop" },
            { type: "mcq", q: "Translate: 'Stand'", options: ["Staan", "Spring", "Loop", "Hardloop"], a: "Staan" },
            { type: "listen", q: "Type what you hear:", a: "Loop" }
        ]
    },
    {
        id: "l13", title: "13. Verbs: Action",
        vocab: [{af: "Eet", en: "Eat"}, {af: "Drink", en: "Drink"}, {af: "Slaap", en: "Sleep"}, {af: "Werk", en: "Work"}],
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'Sleep'", a: "Slaap" },
            { type: "listen", q: "Type what you hear:", a: "Eet" },
            { type: "mcq", q: "Translate: 'Work'", options: ["Drink", "Werk", "Eet", "Slaap"], a: "Werk" },
            { type: "type", q: "Type the Afrikaans word for 'Drink'", a: "Drink" },
            { type: "mcq", q: "Translate: 'Eat'", options: ["Eet", "Slaap", "Werk", "Drink"], a: "Eet" }
        ]
    },
    {
        id: "l14", title: "14. Adjectives",
        vocab: [{af: "Groot", en: "Big"}, {af: "Klein", en: "Small"}, {af: "Mooi", en: "Pretty"}, {af: "Vinnig", en: "Fast"}],
        questions: [
            { type: "listen", q: "Type what you hear:", a: "Mooi" },
            { type: "mcq", q: "Translate: 'Fast'", options: ["Groot", "Vinnig", "Klein", "Mooi"], a: "Vinnig" },
            { type: "type", q: "Type the Afrikaans word for 'Small'", a: "Klein" },
            { type: "mcq", q: "Translate: 'Big'", options: ["Klein", "Groot", "Mooi", "Vinnig"], a: "Groot" },
            { type: "listen", q: "Type what you hear:", a: "Groot" }
        ]
    },
    {
        id: "l15", title: "15. Feelings",
        vocab: [{af: "Bly", en: "Happy"}, {af: "Hartseer", en: "Sad"}, {af: "Kwaad", en: "Angry"}, {af: "Moeg", en: "Tired"}],
        questions: [
            { type: "type", q: "Type the Afrikaans word for 'Angry'", a: "Kwaad" },
            { type: "mcq", q: "Translate: 'Happy'", options: ["Hartseer", "Kwaad", "Bly", "Moeg"], a: "Bly" },
            { type: "listen", q: "Type what you hear:", a: "Moeg" },
            { type: "type", q: "Type the Afrikaans word for 'Sad'", a: "Hartseer" },
            { type: "mcq", q: "Translate: 'Tired'", options: ["Moeg", "Bly", "Hartseer", "Kwaad"], a: "Moeg" }
        ]
    }
];

let userData = JSON.parse(localStorage.getItem('taaltrek_data')) || { stars: 0, completed: [] };
let currentLessonData = null;
let currentQuestionIndex = 0;
let sessionScore = 0;
let lastSpokenWord = "";

const screens = { home: document.getElementById('home-screen'), study: document.getElementById('study-screen'), lesson: document.getElementById('lesson-screen'), result: document.getElementById('result-screen') };
const totalStarsDisplay = document.getElementById('total-stars');
const lessonMenu = document.getElementById('lesson-menu');
const vocabList = document.getElementById('vocab-list');

// Interaction elements
const optionsContainer = document.getElementById('options-container');
const typingArea = document.getElementById('typing-area');
const typingInput = document.getElementById('typing-input');
const checkTypingBtn = document.getElementById('check-typing-btn');
const largePlayBtn = document.getElementById('large-play-btn');

const questionText = document.getElementById('question-text');
const feedbackArea = document.getElementById('feedback-area');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const replayBtn = document.getElementById('replay-audio-btn');
const progressFill = document.getElementById('progress-fill');

function playAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'af-ZA';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

largePlayBtn.onclick = () => playAudio(lastSpokenWord);
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
        btn.onclick = () => startStudyPhase(lesson);
        lessonMenu.appendChild(btn);
    });
}

function startStudyPhase(lesson) {
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
}

document.getElementById('start-quiz-btn').onclick = () => {
    currentQuestionIndex = 0;
    sessionScore = 0;
    showScreen('lesson');
    loadQuestion();
};

function loadQuestion() {
    feedbackArea.classList.add('hidden');
    replayBtn.classList.add('hidden');
    
    // Hide all input methods initially
    optionsContainer.classList.add('hidden');
    typingArea.classList.add('hidden');
    largePlayBtn.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    const currentQ = currentLessonData.questions[currentQuestionIndex];
    questionText.innerText = currentQ.q;
    lastSpokenWord = currentQ.a; // Store the answer for audio features
    progressFill.style.width = `${(currentQuestionIndex / currentLessonData.questions.length) * 100}%`;

    if (currentQ.type === 'mcq') {
        optionsContainer.classList.remove('hidden');
        currentQ.options.forEach(option => {
            const btn = document.createElement('button');
            btn.innerText = option;
            btn.classList.add('option-btn');
            btn.onclick = () => processAnswer(option, currentQ.a, btn);
            optionsContainer.appendChild(btn);
        });
    } else if (currentQ.type === 'type' || currentQ.type === 'listen') {
        typingArea.classList.remove('hidden');
        typingInput.value = '';
        typingInput.disabled = false;
        checkTypingBtn.disabled = false;
        setTimeout(() => typingInput.focus(), 100);

        if (currentQ.type === 'listen') {
            largePlayBtn.classList.remove('hidden');
            playAudio(currentQ.a); // Auto-play the word
        }
    }
}

// Handle Typing Submit
checkTypingBtn.onclick = () => {
    const userInput = typingInput.value.trim();
    if (!userInput) return;
    const currentQ = currentLessonData.questions[currentQuestionIndex];
    processAnswer(userInput.toLowerCase(), currentQ.a.toLowerCase(), null);
};

// Allow 'Enter' key to submit typing answer
typingInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !checkTypingBtn.disabled) {
        checkTypingBtn.click();
    }
});

// Allow 'Enter' key to click Next when feedback is shown
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !feedbackArea.classList.contains('hidden')) {
        nextBtn.click();
    }
});

function processAnswer(selected, correct, clickedBtn) {
    const isCorrect = selected === correct;
    
    // Disable inputs
    checkTypingBtn.disabled = true;
    typingInput.disabled = true;
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
        if (clickedBtn) clickedBtn.classList.add('correct');
        else typingInput.style.borderColor = "#48bb78";
        
        feedbackText.innerText = "Correct! 🎉";
        feedbackText.style.color = "#2f855a";
        sessionScore++;
    } else {
        if (clickedBtn) clickedBtn.classList.add('wrong');
        else typingInput.style.borderColor = "#f56565";
        
        // Show correct capitalization in the UI
        feedbackText.innerText = `Incorrect. Answer: ${lastSpokenWord}`;
        feedbackText.style.color = "#c53030";
        
        // Highlight correct button if in MCQ mode
        allBtns.forEach(b => { if (b.innerText.toLowerCase() === correct) b.classList.add('correct'); });
    }
    
    playAudio(lastSpokenWord);
    replayBtn.classList.remove('hidden');
    feedbackArea.classList.remove('hidden');
}

nextBtn.onclick = () => {
    typingInput.style.borderColor = "#cbd5e0"; // Reset input border
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
