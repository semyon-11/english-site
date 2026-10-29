function showSection(section, fromBack) {
    if (!getStudentName()) return;

    var topics = content[section];
    if (!topics) return;

    if (!fromBack) navigationHistory.push('main');
    currentSection = section;

    var topicsList = document.getElementById('topicsList');
    var exercises = document.getElementById('exercises');
    var mainNav = document.getElementById('mainNav');

    mainNav.className = 'main-nav hidden';
    exercises.innerHTML = '';
    topicsList.innerHTML = '';

    var sectionTitle = document.createElement('h2');
    sectionTitle.className = 'exercise-title';
    sectionTitle.textContent = sectionNames[section] || section;
    topicsList.appendChild(sectionTitle);

    Object.keys(topics).forEach(function(topic) {
        var button = document.createElement('button');
        button.className = 'topic-btn';
        button.type = 'button';
        button.textContent = topics[topic].title;
        button.setAttribute('data-topic', topic);
        button.addEventListener('click', function() {
            showTopic(topic);
        });
        topicsList.appendChild(button);
    });

    var backBtn = document.getElementById('backBtn');
    backBtn.textContent = 'К списку разделов';
    backBtn.className = 'back-btn';
}

function showTopic(topic) {
    var topics = content[currentSection];
    if (!topics || !topics[topic]) return;

    navigationHistory.push(currentSection);
    currentTopic = topic;
    usedExercisesInCycle = [];
    usedQuestions = {};
    usedAudioLetters = [];
    usedAudioBlends = [];
    usedAudioSounds = [];
    usedMatchingLetters = [];

    document.getElementById('topicsList').innerHTML = '';
    document.getElementById('exercises').innerHTML = '';
    document.getElementById('backBtn').textContent = 'К списку тем';

    showNextExercise();
}

function showNextExercise() {
    var topicData = content[currentSection] && content[currentSection][currentTopic];
    if (!topicData || !Array.isArray(topicData.exercises) || topicData.exercises.length === 0) return;

    var exercises = document.getElementById('exercises');
    exercises.innerHTML = '';

    if (usedExercisesInCycle.length >= topicData.exercises.length) {
        usedExercisesInCycle = [];
    }

    var allIndices = topicData.exercises.map(function(_, index) {
        return index;
    });
    var availableIndices = allIndices.filter(function(index) {
        return usedExercisesInCycle.indexOf(index) === -1;
    });
    var randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    usedExercisesInCycle.push(randomIndex);

    var exercise = topicData.exercises[randomIndex];
    var exerciseToRender = exercise;

    if (exercise.type === 'caseMatching') {
        exerciseToRender = generateCaseMatchingExercise();
    } else if (exercise.type === 'audioAlphabet') {
        exerciseToRender = generateAudioAlphabetExercise();
    } else if (exercise.type === 'audioBlends') {
        exerciseToRender = generateAudioBlendsExercise();
    } else if (exercise.type === 'audioSounds') {
        exerciseToRender = generateAudioSoundsExercise();
    }

    currentExerciseData = {
        original: exercise,
        rendered: exerciseToRender,
        index: randomIndex
    };

    var topicTitle = document.createElement('h2');
    topicTitle.className = 'exercise-title';
    topicTitle.textContent = topicData.title;
    exercises.appendChild(topicTitle);

    questionStartTime = Date.now();
    renderExercise(exerciseToRender, exercises);
}

function showMain() {
    document.getElementById('exercises').innerHTML = '';
    document.getElementById('topicsList').innerHTML = '';
    document.getElementById('mainNav').className = 'main-nav';
    document.getElementById('backBtn').className = 'back-btn hidden';
    currentSection = '';
    currentTopic = '';
    navigationHistory = [];
}

function goBack() {
    if (navigationHistory.length === 0) {
        showMain();
        return;
    }

    var previous = navigationHistory.pop();
    if (previous === 'main') {
        showMain();
    } else if (content[previous]) {
        showSection(previous, true);
    } else {
        showMain();
    }
}

function initializeApp() {
    var mainNav = document.getElementById('mainNav');
    mainNav.addEventListener('click', function(event) {
        var button = event.target.closest('[data-action]');
        if (!button) return;

        var action = button.getAttribute('data-action');
        if (action === 'progress') {
            showProgress();
        } else {
            showSection(action);
        }
    });

    document.getElementById('backBtn').addEventListener('click', goBack);
    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault();
        saveName();
    });

    initSpeech();

    if (!getStudentName()) {
        document.getElementById('nameModal').classList.remove('hidden');
        document.getElementById('studentName').focus();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
