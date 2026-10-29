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

function showMascotFeedback(container, isCorrect, customMessage) {
    if (!container) return;

    var feedback = container.querySelector('.mascot-feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'mascot-feedback';

        var image = document.createElement('img');
        image.className = 'mascot-feedback-image';
        image.src = 'images/mascot.svg';
        image.width = 76;
        image.height = 86;
        image.decoding = 'async';

        var message = document.createElement('p');
        message.className = 'mascot-feedback-message';
        message.setAttribute('role', 'status');
        message.setAttribute('aria-live', 'polite');

        feedback.appendChild(image);
        feedback.appendChild(message);
        container.appendChild(feedback);
    }

    var imageElement = feedback.querySelector('.mascot-feedback-image');
    var messageElement = feedback.querySelector('.mascot-feedback-message');
    feedback.className = 'mascot-feedback ' + (isCorrect ? 'is-correct' : 'is-incorrect');
    imageElement.alt = isCorrect ? 'Тото радуется' : 'Тото поддерживает ученика';
    messageElement.textContent = customMessage || getMascotMessage(isCorrect);

    // Restart the small reaction animation when the same state occurs twice.
    imageElement.style.animation = 'none';
    void imageElement.offsetWidth;
    imageElement.style.animation = '';
}

function getMascotMessage(isCorrect) {
    var messages = isCorrect ? mascotMessages.correct : mascotMessages.incorrect;
    return messages[Math.floor(Math.random() * messages.length)];
}
