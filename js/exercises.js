function createExerciseImage(imageName) {
    var img = document.createElement('img');
    img.className = 'exercise-image';
    img.src = 'images/' + imageName + '.png';
    img.alt = 'Иллюстрация к заданию';
    img.width = 200;
    img.height = 200;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onerror = function() {
        this.style.display = 'none';
        var placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.textContent = 'Картинка не загрузилась';
        this.parentNode.insertBefore(placeholder, this);
    };
    return img;
}

function renderExercise(exercise, container) {
    var exerciseDiv = document.createElement('div');
    exerciseDiv.className = 'exercise-container';
    exerciseDiv.setAttribute('data-exercise', currentExerciseData.index);

    var instruction = document.createElement('div');
    instruction.className = 'exercise-instruction';
    instruction.textContent = exercise.instruction;
    exerciseDiv.appendChild(instruction);

    if (exercise.type === 'multipleChoice') {
        var exIdx = currentExerciseData.index;
        var qIndex = getNextUnusedQuestion(exercise, exIdx);

        var q = exercise.questions[qIndex];

        var qDiv = document.createElement('div');
        qDiv.className = 'exercise-item';

        if (q.image) {
            qDiv.appendChild(createExerciseImage(q.image));
        }

        var qTitle = document.createElement('div');
        qTitle.className = 'exercise-question';
        qTitle.textContent = q.q;
        qDiv.appendChild(qTitle);

        var optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        q.options.forEach(function(opt, optIndex) {
            var label = document.createElement('label');
            label.className = 'option-label';

            var input = document.createElement('input');
            input.type = 'radio';
            input.name = 'mc_' + currentExerciseData.index;
            input.value = optIndex;

            input.addEventListener('change', function() {
                handleMultipleChoiceAnswer(exerciseDiv, q, optIndex, label, optionsDiv);
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(opt));
            optionsDiv.appendChild(label);
        });

        qDiv.appendChild(optionsDiv);
        exerciseDiv.appendChild(qDiv);
    } else if (exercise.type === 'imageChoice') {
        var exIdx = currentExerciseData.index;
        var qIndex = getNextUnusedQuestion(exercise, exIdx);

        var q = exercise.questions[qIndex];

        var qDiv = document.createElement('div');
        qDiv.className = 'exercise-item';

        qDiv.appendChild(createExerciseImage(q.image));

        var qTitle = document.createElement('div');
        qTitle.className = 'exercise-question';
        qTitle.textContent = 'Какой это цвет?';
        qDiv.appendChild(qTitle);

        var optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        q.options.forEach(function(opt, optIndex) {
            var label = document.createElement('label');
            label.className = 'option-label';

            var input = document.createElement('input');
            input.type = 'radio';
            input.name = 'img_' + currentExerciseData.index;
            input.value = optIndex;

            input.addEventListener('change', function() {
                handleMultipleChoiceAnswer(exerciseDiv, q, optIndex, label, optionsDiv);
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(opt));
            optionsDiv.appendChild(label);
        });

        qDiv.appendChild(optionsDiv);
        exerciseDiv.appendChild(qDiv);
    } else if (exercise.type === 'emojiChoice') {
        var exIdx = currentExerciseData.index;
        var qIndex = getNextUnusedQuestion(exercise, exIdx);

        var q = exercise.questions[qIndex];

        var qDiv = document.createElement('div');
        qDiv.className = 'exercise-item';

        var emojiDisplay = document.createElement('div');
        emojiDisplay.className = 'emoji-display';
        emojiDisplay.textContent = q.emoji;
        qDiv.appendChild(emojiDisplay);

        var qTitle = document.createElement('div');
        qTitle.className = 'exercise-question';
        qTitle.textContent = 'Какая это эмоция?';
        qDiv.appendChild(qTitle);

        var optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        q.options.forEach(function(opt, optIndex) {
            var label = document.createElement('label');
            label.className = 'option-label';

            var input = document.createElement('input');
            input.type = 'radio';
            input.name = 'emoji_' + currentExerciseData.index;
            input.value = optIndex;

            input.addEventListener('change', function() {
                handleMultipleChoiceAnswer(exerciseDiv, q, optIndex, label, optionsDiv);
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(opt));
            optionsDiv.appendChild(label);
        });

        qDiv.appendChild(optionsDiv);
        exerciseDiv.appendChild(qDiv);
    } else if (exercise.type === 'fillBlank') {
        var exIdx = currentExerciseData.index;
        var qIndex = getNextUnusedQuestion(exercise, exIdx);

        var q = exercise.questions[qIndex];

        var qDiv = document.createElement('div');
        qDiv.className = 'exercise-item';

        var qTitle = document.createElement('div');
        qTitle.className = 'exercise-question';
        qTitle.textContent = q.q;
        qDiv.appendChild(qTitle);

        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-input';
        input.placeholder = 'Введите ответ...';

        addFillBlankControls(exerciseDiv, qDiv, q, input);
    } else if (exercise.type === 'imageWord') {
        var exIdx = currentExerciseData.index;
        var qIndex = getNextUnusedQuestion(exercise, exIdx);

        var q = exercise.questions[qIndex];

        var qDiv = document.createElement('div');
        qDiv.className = 'exercise-item';

        var qTitle = document.createElement('div');
        qTitle.className = 'exercise-question';
        qTitle.textContent = 'Посмотрите на картинку и напишите слово:';
        qDiv.appendChild(qTitle);

        qDiv.appendChild(createExerciseImage(q.image));

        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-input';
        input.placeholder = 'Введите ответ...';

        addFillBlankControls(exerciseDiv, qDiv, q, input);
    } else if (exercise.type === 'matching') {
        var matchingContainer = document.createElement('div');
        matchingContainer.className = 'matching-container';

        var leftColumn = document.createElement('div');
        var rightColumn = document.createElement('div');
        var feedback = document.createElement('p');
        feedback.className = 'matching-feedback';
        feedback.setAttribute('role', 'status');
        feedback.setAttribute('aria-live', 'polite');

        var pairs = exercise.pairs;
        var rightItems = exercise.shuffledRight || shuffleArray(pairs);
        var matchedPairs = 0;
        var selectedLeft = null;
        var selectedRight = null;

        function clearSelection(item) {
            if (!item) return;
            item.classList.remove('selected', 'wrong');
            item.setAttribute('aria-pressed', 'false');
        }

        function selectMatchingItem(item, side) {
            if (item.disabled) return;

            if (side === 'left') {
                if (selectedLeft && selectedLeft !== item) clearSelection(selectedLeft);
                selectedLeft = item;
            } else {
                if (selectedRight && selectedRight !== item) clearSelection(selectedRight);
                selectedRight = item;
            }

            item.classList.add('selected');
            item.setAttribute('aria-pressed', 'true');
            if (!selectedLeft || !selectedRight) return;

            var isCorrect = selectedLeft.getAttribute('data-pair') === selectedRight.getAttribute('data-pair');
            if (isCorrect) {
                selectedLeft.classList.add('matched');
                selectedRight.classList.add('matched');
                selectedLeft.disabled = true;
                selectedRight.disabled = true;
                selectedLeft.setAttribute('aria-pressed', 'true');
                selectedRight.setAttribute('aria-pressed', 'true');
                matchedPairs += 1;
                feedback.textContent = 'Совпадение найдено.';

                if (matchedPairs === pairs.length) {
                    var timeTaken = Math.round((Date.now() - questionStartTime) / 1000);
                    saveProgress(currentTopic, currentExerciseData.original.type, true, timeTaken);
                    showResult(exerciseDiv, true, 'Все пары найдены.');
                } else {
                    showMascotFeedback(exerciseDiv, true, 'Верная пара! Отлично получается.');
                }
            } else {
                feedback.textContent = 'Эта пара не подходит.';
                showMascotFeedback(exerciseDiv, false, 'Эта пара не подходит. Попробуй другую!');
                selectedLeft.classList.add('wrong');
                selectedRight.classList.add('wrong');

                var previousLeft = selectedLeft;
                var previousRight = selectedRight;
                window.setTimeout(function() {
                    clearSelection(previousLeft);
                    clearSelection(previousRight);
                }, 600);
            }

            selectedLeft = null;
            selectedRight = null;
        }

        pairs.forEach(function(pair, index) {
            var leftItem = document.createElement('button');
            leftItem.type = 'button';
            leftItem.className = 'matching-item';
            leftItem.textContent = pair.left;
            leftItem.setAttribute('data-pair', index);
            leftItem.setAttribute('aria-pressed', 'false');
            leftItem.addEventListener('click', function() {
                selectMatchingItem(leftItem, 'left');
            });
            leftColumn.appendChild(leftItem);
        });

        rightItems.forEach(function(pair) {
            var originalIndex = pairs.indexOf(pair);
            var rightItem = document.createElement('button');
            rightItem.type = 'button';
            rightItem.className = 'matching-item';
            rightItem.textContent = pair.right;
            rightItem.setAttribute('data-pair', originalIndex);
            rightItem.setAttribute('aria-pressed', 'false');
            rightItem.addEventListener('click', function() {
                selectMatchingItem(rightItem, 'right');
            });
            rightColumn.appendChild(rightItem);
        });

        matchingContainer.appendChild(leftColumn);
        matchingContainer.appendChild(rightColumn);
        exerciseDiv.appendChild(matchingContainer);
        exerciseDiv.appendChild(feedback);
    } else if (exercise.type === 'audio') {
        var exIdx = currentExerciseData.index;
        var qIndex = getNextUnusedQuestion(exercise, exIdx);

        var q = exercise.questions[qIndex];

        var qDiv = document.createElement('div');
        qDiv.className = 'exercise-item';

        var qTitle = document.createElement('div');
        qTitle.className = 'exercise-question';
        qTitle.textContent = 'Послушайте и выберите правильный ответ:';
        qDiv.appendChild(qTitle);

        var audioBtn = document.createElement('button');
        audioBtn.className = 'audio-btn';
        audioBtn.textContent = 'Прослушать';
        audioBtn.onclick = function() {
            speakText(q.audio);
        };
        qDiv.appendChild(audioBtn);

        var optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        q.options.forEach(function(opt, optIndex) {
            var label = document.createElement('label');
            label.className = 'option-label';

            var input = document.createElement('input');
            input.type = 'radio';
            input.name = 'audio_' + currentExerciseData.index;
            input.value = optIndex;

            input.addEventListener('change', function() {
                handleMultipleChoiceAnswer(exerciseDiv, q, optIndex, label, optionsDiv);
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(opt));
            optionsDiv.appendChild(label);
        });

        qDiv.appendChild(optionsDiv);
        exerciseDiv.appendChild(qDiv);
    }

    container.appendChild(exerciseDiv);
}

function handleMultipleChoiceAnswer(exerciseDiv, q, selectedOptIndex, selectedLabel, optionsDiv) {
    var labels = optionsDiv.querySelectorAll('.option-label');
    labels.forEach(function(label) {
        label.classList.add('disabled');
        label.querySelector('input').disabled = true;
    });

    var isCorrect = selectedOptIndex === q.a;
    var timeTaken = Math.round((Date.now() - questionStartTime) / 1000);
    saveProgress(currentTopic, currentExerciseData.original.type, isCorrect, timeTaken);

    if (isCorrect) {
        selectedLabel.classList.add('correct-answer');
        showResult(exerciseDiv, true, 'Правильно.');
    } else {
        selectedLabel.classList.add('wrong-answer');
        labels[q.a].classList.add('correct-answer');
        showResult(exerciseDiv, false, 'Неправильно. Правильный ответ: ' + q.options[q.a]);
    }
}

function addFillBlankControls(exerciseDiv, qDiv, q, input) {
    var checkBtn = document.createElement('button');
    checkBtn.className = 'check-btn';
    checkBtn.textContent = 'Проверить';
    checkBtn.onclick = function() {
        if (input.value.trim() === '') {
            input.focus();
            return;
        }
        handleFillBlankAnswer(exerciseDiv, q, input, checkBtn);
    };

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            checkBtn.click();
        }
    });

    qDiv.appendChild(input);
    qDiv.appendChild(checkBtn);
    exerciseDiv.appendChild(qDiv);
}

function handleFillBlankAnswer(exerciseDiv, q, input, checkBtn) {
    if (input.dataset.processed === 'true') return;
    input.dataset.processed = 'true';
    
    input.disabled = true;
    if (checkBtn) checkBtn.disabled = true;
    var userAnswer = normalizeAnswer(input.value);
    var acceptedAnswers = q.a.map(function(ans) { return normalizeAnswer(ans); });
    var isCorrect = acceptedAnswers.indexOf(userAnswer) !== -1;
    var timeTaken = Math.round((Date.now() - questionStartTime) / 1000);
    
    saveProgress(currentTopic, currentExerciseData.original.type, isCorrect, timeTaken);

    if (isCorrect) {
        input.classList.add('correct');
        showResult(exerciseDiv, true, 'Правильно.');
    } else {
        input.classList.add('wrong');
        showResult(exerciseDiv, false, 'Неправильно. Правильный ответ: ' + q.a[0]);
    }
}

function showResult(exerciseDiv, isCorrect, message) {
    var existingResult = exerciseDiv.querySelector('.result');
    if (existingResult) existingResult.remove();

    var existingBtn = exerciseDiv.querySelector('.next-btn');
    if (existingBtn) existingBtn.remove();

    var result = document.createElement('div');
    result.className = 'result ' + (isCorrect ? 'correct' : 'incorrect');
    result.setAttribute('role', 'status');
    result.setAttribute('aria-live', 'polite');
    result.textContent = message;
    exerciseDiv.appendChild(result);
    showMascotFeedback(exerciseDiv, isCorrect);

    var nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = 'Следующее задание';
    nextBtn.onclick = function() {
        showNextExercise();
    };
    exerciseDiv.appendChild(nextBtn);
}