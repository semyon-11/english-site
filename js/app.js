function showSection(section, fromBack) {
    if (!getStudentName()) return;
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
    sectionTitle.textContent = sectionNames[section];
    topicsList.appendChild(sectionTitle);

    var topics = content[section];
    for (var topic in topics) {
        if (topics.hasOwnProperty(topic)) {
            var btn = document.createElement('button');
            btn.className = 'topic-btn';
            btn.textContent = topics[topic].title;
            btn.setAttribute('data-topic', topic);
            btn.onclick = function() {
                var t = this.getAttribute('data-topic');
                showTopic(t);
            };
            topicsList.appendChild(btn);
        }
    }

    document.getElementById('backBtn').textContent = 'К списку разделов';
    document.getElementById('backBtn').className = 'back-btn';
}

function showTopic(topic) {
    navigationHistory.push(currentSection);
    currentTopic = topic;
    usedExercisesInCycle = [];
    usedQuestions = {};
    usedAudioLetters = [];
    usedAudioBlends = [];
    usedAudioSounds = [];

    var topicsList = document.getElementById('topicsList');
    var exercises = document.getElementById('exercises');

    topicsList.innerHTML = '';
    exercises.innerHTML = '';

    document.getElementById('backBtn').textContent = 'К списку тем';

    showNextExercise();
}

function showNextExercise() {
    var topicData = content[currentSection][currentTopic];
    var exercises = document.getElementById('exercises');
    exercises.innerHTML = '';

    if (usedExercisesInCycle.length >= topicData.exercises.length) {
        usedExercisesInCycle = [];
    }

    var allIndices = [];
    for (var i = 0; i < topicData.exercises.length; i++) {
        allIndices.push(i);
    }

    var availableIndices = allIndices.filter(function(idx) {
        return usedExercisesInCycle.indexOf(idx) === -1;
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

    currentExerciseData = { original: exercise, rendered: exerciseToRender, index: randomIndex };

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

    var prev = navigationHistory.pop();

    if (prev === 'main') {
        showMain();
    } else if (content[prev]) {
        showSection(prev, true);
    }
}

window.onload = function() {
    document.getElementById('mainNav').className = 'main-nav';
    document.getElementById('backBtn').className = 'back-btn hidden';
    initSpeech();
    
    if (!localStorage.getItem('studentName')) {
        document.getElementById('nameModal').classList.remove('hidden');
    } else {
        studentName = localStorage.getItem('studentName');
    }
};