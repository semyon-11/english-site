function showStorageWarning(message) {
    var warning = document.getElementById('storageWarning');
    if (warning) {
        warning.textContent = message || 'Браузер не разрешает сохранять данные. Приложением можно пользоваться, но прогресс не будет записываться.';
    }
}

function getStudentName() {
    if (studentName) return studentName;

    try {
        var savedName = localStorage.getItem('studentName');
        if (savedName) {
            studentName = savedName;
            return studentName;
        }
    } catch (error) {
        showStorageWarning();
    }

    var modal = document.getElementById('nameModal');
    if (modal) modal.classList.remove('hidden');
    return null;
}

function saveName() {
    var nameInput = document.getElementById('studentName');
    var name = nameInput.value.trim();
    var errorMessage = document.getElementById('nameError');

    if (!name) {
        if (errorMessage) errorMessage.textContent = 'Введите имя, чтобы продолжить.';
        nameInput.focus();
        return;
    }

    studentName = name;
    if (errorMessage) errorMessage.textContent = '';

    try {
        localStorage.setItem('studentName', name);
    } catch (error) {
        showStorageWarning();
    }

    document.getElementById('nameModal').classList.add('hidden');
}

function saveProgress(topic, exerciseType, isCorrect, timeTaken) {
    if (!studentName) {
        try {
            studentName = localStorage.getItem('studentName') || '';
        } catch (error) {
            showStorageWarning();
            return false;
        }
    }
    if (!studentName || !topic || !exerciseType) return false;

    try {
        var progress = getProgress();
        progress.push({
            name: studentName,
            topic: topic,
            exerciseType: exerciseType,
            isCorrect: Boolean(isCorrect),
            timestamp: new Date().toISOString(),
            timeTaken: Math.max(0, Number(timeTaken) || 0)
        });
        localStorage.setItem('progress', JSON.stringify(progress));
        return true;
    } catch (error) {
        showStorageWarning();
        return false;
    }
}

function getProgress() {
    try {
        var savedProgress = JSON.parse(localStorage.getItem('progress') || '[]');
        return Array.isArray(savedProgress)
            ? savedProgress.filter(function(item) {
                return item && typeof item === 'object';
            })
            : [];
    } catch (error) {
        showStorageWarning();
        return [];
    }
}

function showProgress() {
    var name = getStudentName();
    if (!name) return;

    studentName = name;
    mountMascot(document.querySelector('.site-header'), 'home');
    navigationHistory = [];
    currentSection = '';
    currentTopic = '';

    var progress = getProgress();
    var exercises = document.getElementById('exercises');
    var topicsList = document.getElementById('topicsList');
    var mainNav = document.getElementById('mainNav');

    mainNav.className = 'main-nav hidden';
    exercises.innerHTML = '';
    topicsList.innerHTML = '';

    var backBtn = document.getElementById('backBtn');
    backBtn.textContent = 'На главную';
    backBtn.className = 'back-btn';

    var heading = document.createElement('div');
    heading.className = 'section-heading progress-heading';

    var title = document.createElement('h2');
    title.className = 'exercise-title';
    title.textContent = 'Мой прогресс';
    heading.appendChild(title);
    mountMascot(heading, 'progress');
    exercises.appendChild(heading);

    var greeting = document.createElement('p');
    greeting.className = 'progress-greeting';
    var greetingLabel = document.createElement('span');
    greetingLabel.textContent = 'Ученик:';
    var greetingName = document.createElement('strong');
    greetingName.textContent = studentName;
    greeting.appendChild(greetingLabel);
    greeting.appendChild(greetingName);
    exercises.appendChild(greeting);

    var hasAnyProgress = false;

    Object.keys(content).forEach(function(sectionKey) {
        var topics = content[sectionKey];
        var sectionDiv = document.createElement('div');
        sectionDiv.className = 'progress-section';

        var sectionTitle = document.createElement('h3');
        sectionTitle.className = 'progress-section-title';
        sectionTitle.textContent = sectionNames[sectionKey] || sectionKey;
        sectionDiv.appendChild(sectionTitle);

        var statsDiv = document.createElement('div');
        statsDiv.className = 'progress-stats';
        var hasTopicsInSection = false;

        Object.keys(topics).forEach(function(topicKey) {
            var topicProgress = progress.filter(function(item) {
                return item.topic === topicKey;
            });
            var total = topicProgress.length;
            if (total === 0) return;

            hasAnyProgress = true;
            hasTopicsInSection = true;

            var correct = topicProgress.filter(function(item) {
                return item.isCorrect;
            }).length;
            var incorrect = total - correct;

            var card = document.createElement('div');
            card.className = 'stat-card';

            var cardTitle = document.createElement('h3');
            cardTitle.textContent = topics[topicKey].title;
            card.appendChild(cardTitle);

            var totalLine = document.createElement('div');
            totalLine.className = 'progress-count';
            totalLine.textContent = 'Решено: ' + total;
            card.appendChild(totalLine);

            var correctLine = document.createElement('div');
            correctLine.className = 'progress-correct';
            correctLine.textContent = 'Правильных: ' + correct;
            card.appendChild(correctLine);

            var incorrectLine = document.createElement('div');
            incorrectLine.className = 'progress-incorrect';
            incorrectLine.textContent = 'Неправильных: ' + incorrect;
            card.appendChild(incorrectLine);

            statsDiv.appendChild(card);
        });

        if (hasTopicsInSection) {
            sectionDiv.appendChild(statsDiv);
            exercises.appendChild(sectionDiv);
        }
    });

    if (!hasAnyProgress) {
        var noData = document.createElement('p');
        noData.className = 'progress-empty';
        noData.textContent = 'Вы ещё не выполнили ни одного задания';
        exercises.appendChild(noData);
    }
}
