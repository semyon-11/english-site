function generateCaseMatchingExercise() {
    var available = allLetters.filter(function(letter) {
        return usedMatchingLetters.indexOf(letter) === -1;
    });

    if (available.length === 0) {
        usedMatchingLetters = [];
        available = allLetters.slice();
    }

    var selected = shuffleArray(available).slice(0, Math.min(7, available.length));
    selected.forEach(function(letter) {
        usedMatchingLetters.push(letter);
    });

    var pairs = selected.map(function(letter) {
        return { left: letter, right: letter.toLowerCase() };
    });

    return {
        type: 'matching',
        instruction: 'Соедините заглавные и строчные буквы',
        pairs: pairs,
        shuffledRight: shuffleArray(pairs)
    };
}

function generateAudioAlphabetExercise() {
    var available = allLetters.filter(function(l) { return usedAudioLetters.indexOf(l) === -1; });
    if (available.length === 0) {
        usedAudioLetters = [];
        available = allLetters.slice();
    }
    var letter = available[Math.floor(Math.random() * available.length)];
    usedAudioLetters.push(letter);
    var options = [letter];
    while (options.length < 3) {
        var rand = allLetters[Math.floor(Math.random() * allLetters.length)];
        if (options.indexOf(rand) === -1) options.push(rand);
    }
    options = shuffleArray(options);
    return {
        type: 'audio',
        instruction: 'Послушайте букву и выберите её',
        questions: [{ q: '', audio: letter, options: options, a: options.indexOf(letter) }]
    };
}

function generateAudioBlendsExercise() {
    var blends = Object.keys(blendWords);
    var available = blends.filter(function(b) { return usedAudioBlends.indexOf(b) === -1; });
    if (available.length === 0) {
        usedAudioBlends = [];
        available = blends.slice();
    }
    var blend = available[Math.floor(Math.random() * available.length)];
    usedAudioBlends.push(blend);
    var word = blendWords[blend];
    var options = shuffleArray(blends.slice());
    return {
        type: 'audio',
        instruction: 'Послушайте слово и выберите буквосочетание, которое в нём есть',
        questions: [{ q: '', audio: word, options: options, a: options.indexOf(blend) }]
    };
}

function generateAudioSoundsExercise() {
    var available = soundWords.filter(function(s) { return usedAudioSounds.indexOf(s.word) === -1; });
    if (available.length === 0) {
        usedAudioSounds = [];
        available = soundWords.slice();
    }
    var item = available[Math.floor(Math.random() * available.length)];
    usedAudioSounds.push(item.word);
    var allSounds = ['долгий /i:/', 'краткий /i/', 'краткий /e/', 'краткий /ae/', 'долгий /ei/', 'краткий /o/', 'долгий /ou/', 'долгий /ai/', '/oi/'];
    var options = [item.sound];
    while (options.length < 3) {
        var rand = allSounds[Math.floor(Math.random() * allSounds.length)];
        if (options.indexOf(rand) === -1) options.push(rand);
    }
    options = shuffleArray(options);
    return {
        type: 'audio',
        instruction: 'Послушайте слово и выберите, какой в нём звук',
        questions: [{ q: '', audio: item.word, options: options, a: options.indexOf(item.sound) }]
    };
}