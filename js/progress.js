function getStudentName() {
    var name = localStorage.getItem('studentName');
    if (!name) {
        document.getElementById('nameModal').classList.remove('hidden');
        return null;
    }
    return name;
}

function saveName() {
    var nameInput = document.getElementById('studentName');
    var name = nameInput.value.trim();
    if (name) {
        studentName = name;
        localStorage.setItem('studentName', name);
        document.getElementById('nameModal').classList.add('hidden');
    } else {
        alert('Пожалуйста, введите имя');
    }
}

function saveProgress(topic, exerciseType, isCorrect, timeTaken) {
    if (!studentName) {
        studentName = localStorage.getItem('studentName');
    }
    if (!studentName) return;
    
    if (!topic) {
        topic = currentTopic;
    }
    if (!topic) return;
    
    var progress = getProgress();
    var now = new Date();
    var dateStr = now.toLocaleDateString('ru-RU');
    var timeStr = now.toLocaleTimeString('ru-RU');
    
    progress.push({
        name: studentName,
        topic: topic,
        exerciseType: exerciseType,
        isCorrect: isCorrect,
        date: dateStr,
        time: timeStr,
        timeTaken: timeTaken
    });
    
    localStorage.setItem('progress', JSON.stringify(progress));
}

function getProgress() {
    try {
        var savedProgress = JSON.parse(localStorage.getItem('progress') || '[]');
        return Array.isArray(savedProgress) ? savedProgress : [];
    } catch (error) {
        return [];
    }
}

function showProgress() {
    var name = getStudentName();
    if (!name) return;
    studentName = name;

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

    var title = document.createElement('h2');
    title.className = 'exercise-title';
    title.textContent = 'Мой прогресс';
    exercises.appendChild(title);

    var greeting = document.createElement('p');
    greeting.className = 'progress-greeting';
    greeting.textContent = 'Ученик: ' + studentName;
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
            var topicProgress = progress.filter(function(item) { return item.topic === topicKey; });
            var total = topicProgress.length;
            if (total === 0) return;
            hasAnyProgress = true;
            hasTopicsInSection = true;

            var correct = topicProgress.filter(function(item) { return item.isCorrect; }).length;
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