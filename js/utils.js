function shuffleArray(arr) {
    var result = arr.slice();
    for (var i = result.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = result[i];
        result[i] = result[j];
        result[j] = temp;
    }
    return result;
}

function normalizeAnswer(text) {
    return String(text)
        .toLowerCase()
        .replace(/[\u2018\u2019\u02bc`\u00b4]/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
}

function getNextUnusedQuestion(exercise, exerciseIndex) {
    if (!exercise || !Array.isArray(exercise.questions) || exercise.questions.length === 0) {
        throw new Error('У упражнения должны быть непустые questions.');
    }
    if (!usedQuestions[exerciseIndex]) usedQuestions[exerciseIndex] = [];
    var availableIndices = exercise.questions
        .map(function(_, index) { return index; })
        .filter(function(index) { return usedQuestions[exerciseIndex].indexOf(index) === -1; });
    if (availableIndices.length === 0) {
        usedQuestions[exerciseIndex] = [];
        availableIndices = exercise.questions.map(function(_, index) { return index; });
    }
    var selectedIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    usedQuestions[exerciseIndex].push(selectedIndex);
    return selectedIndex;
}