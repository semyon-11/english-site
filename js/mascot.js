var mascotMessages = {
    correct: [
        'Ура! У тебя получилось!',
        'Здорово! Ты отлично справился!',
        'Вот это успех! Так держать!',
        'Супер! Ещё один шаг вперёд!',
        'Блестяще! Продолжай в том же духе!'
    ],
    incorrect: [
        'Не страшно — ошибки помогают учиться!',
        'Попробуй ещё раз: у тебя получится!',
        'Каждая попытка делает тебя сильнее!',
        'Ты уже учишься — это главное!',
        'Не сдавайся, шаг за шагом всё получится!'
    ]
};


function mountMascot(container, position, clearMessage) {
    if (!container) return;

    var companion = document.getElementById('mascotCompanion');
    if (!companion) return;

    var speech = document.getElementById('mascotSpeech');
    companion.className = 'mascot-companion mascot-position--' + (position || 'inline');

    if (clearMessage !== false && speech) {
        speech.textContent = '';
        speech.hidden = true;
        companion.classList.remove('is-correct', 'is-incorrect');
    }

    if (companion.parentNode !== container) {
        container.appendChild(companion);
    }

    void companion.offsetWidth;
    companion.classList.add('is-moving');
}


function showMascotFeedback(container, isCorrect, customMessage) {
    var companion = document.getElementById('mascotCompanion');
    var image = document.getElementById('mascotImage');
    var speech = document.getElementById('mascotSpeech');

    if (!companion || !image || !speech) return;

    if (typeof window !== 'undefined' && typeof window.playAnswerSound === 'function') {
        window.playAnswerSound(isCorrect);
    }

    if (container && companion.parentNode !== container) {
        mountMascot(container, 'exercise', false);
    }

    companion.classList.remove('is-correct', 'is-incorrect');
    void image.offsetWidth;
    companion.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');

    image.alt = isCorrect ? 'Тоби радуется' : 'Тоби поддерживает ученика';
    speech.textContent = customMessage || getMascotMessage(isCorrect);
    speech.hidden = false;
}

function getMascotMessage(isCorrect) {
    var messages = isCorrect ? mascotMessages.correct : mascotMessages.incorrect;
    return messages[Math.floor(Math.random() * messages.length)];
}
