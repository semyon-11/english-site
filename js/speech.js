function initSpeech() {
    if ('speechSynthesis' in window && !speechReady) {
        var testUtterance = new SpeechSynthesisUtterance('');
        testUtterance.volume = 0;
        testUtterance.rate = 0.7;
        testUtterance.pitch = 1.1;
        window.speechSynthesis.speak(testUtterance);
        speechReady = true;
    }
}



function speakText(text) {
    if (!('speechSynthesis' in window)) {
        alert('Аудио не поддерживается в этом браузере');
        return;
    }
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.7;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
}