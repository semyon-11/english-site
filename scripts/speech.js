function initSpeech() {
    return 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';
}

function speakText(text) {
    if (!initSpeech()) {
        alert('Озвучивание не поддерживается в этом браузере');
        return;
    }
    if (!text) return;

    window.speechSynthesis.cancel();

    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.7;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
}
