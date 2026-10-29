const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadProjectData(rootDir = path.resolve(__dirname, '..')) {
    const sourcePath = path.join(rootDir, 'js', 'content.js');
    const source = fs.readFileSync(sourcePath, 'utf8');
    const sandbox = {};
    vm.runInNewContext(source + '\nglobalThis.__projectData = { content, allLetters, blendWords, soundWords, sectionNames };', sandbox, {
        filename: sourcePath
    });
    return sandbox.__projectData;
}

function validateProjectData(projectData, rootDir = path.resolve(__dirname, '..')) {
    const errors = [];
    const content = projectData && projectData.content;
    const imageNames = new Set();
    const stats = { sectionCount: 0, topicCount: 0, exerciseCount: 0, questionCount: 0, imageCount: 0 };

    function report(location, message) {
        errors.push(location + ': ' + message);
    }

    function isText(value) {
        return typeof value === 'string' && value.trim().length > 0;
    }

    function checkImage(name, location) {
        if (!isText(name) || name.includes('..') || name.includes('/')) {
            report(location, 'указано некорректное имя изображения');
            return;
        }
        imageNames.add(name);
        const extensions = ['png', 'webp', 'jpg', 'jpeg'];
        const exists = extensions.some(function(extension) {
            return fs.existsSync(path.join(rootDir, 'images', name + '.' + extension));
        });
        if (!exists) report(location, 'файл images/' + name + ' не найден');
    }

    function checkOptions(question, location, needsAudio) {
        if (!isText(question.q)) report(location, 'отсутствует текст вопроса');
        if (!Array.isArray(question.options) || question.options.length < 2 ||
            !question.options.every(isText)) {
            report(location, 'нужно не менее двух непустых вариантов ответа');
        } else if (!Number.isInteger(question.a) || question.a < 0 || question.a >= question.options.length) {
            report(location, 'индекс правильного ответа выходит за пределы options');
        }
        if (needsAudio && !isText(question.audio)) report(location, 'нет текста для озвучивания');
        if (question.image) checkImage(question.image, location);
    }

    if (!content || typeof content !== 'object') {
        report('content', 'не найден объект учебных данных');
        return { errors, stats };
    }

    const supportedTypes = new Set([
        'multipleChoice', 'fillBlank', 'matching', 'caseMatching',
        'audioAlphabet', 'audioBlends', 'audioSounds',
        'imageChoice', 'audio', 'imageWord', 'emojiChoice'
    ]);

    Object.keys(content).forEach(function(sectionName) {
        stats.sectionCount += 1;
        const topics = content[sectionName];
        if (!topics || typeof topics !== 'object' || Object.keys(topics).length === 0) {
            report(sectionName, 'раздел пуст');
            return;
        }

        Object.keys(topics).forEach(function(topicName) {
            stats.topicCount += 1;
            const topic = topics[topicName];
            const location = sectionName + '.' + topicName;
            if (!topic || !isText(topic.title)) report(location, 'у темы нет названия');
            if (!topic || !Array.isArray(topic.exercises) || topic.exercises.length === 0) {
                report(location, 'у темы нет заданий');
                return;
            }

            topic.exercises.forEach(function(exercise, exerciseIndex) {
                stats.exerciseCount += 1;
                const exerciseLocation = location + '.exercises[' + exerciseIndex + ']';
                if (!exercise || !supportedTypes.has(exercise.type)) {
                    report(exerciseLocation, 'неизвестный тип задания');
                    return;
                }
                if (!isText(exercise.instruction)) report(exerciseLocation, 'нет инструкции');

                if (exercise.type === 'matching') {
                    if (!Array.isArray(exercise.pairs) || exercise.pairs.length < 2) {
                        report(exerciseLocation, 'для matching нужно не менее двух пар');
                    } else {
                        const left = new Set();
                        const right = new Set();
                        exercise.pairs.forEach(function(pair, pairIndex) {
                            if (!pair || !isText(pair.left) || !isText(pair.right)) {
                                report(exerciseLocation + '.pairs[' + pairIndex + ']', 'у пары должны быть left и right');
                            } else {
                                if (left.has(pair.left) || right.has(pair.right)) {
                                    report(exerciseLocation + '.pairs[' + pairIndex + ']', 'значения должны быть уникальными');
                                }
                                left.add(pair.left);
                                right.add(pair.right);
                            }
                        });
                    }
                    return;
                }

                if (exercise.type === 'caseMatching' || exercise.type === 'audioAlphabet') {
                    if (!Array.isArray(projectData.allLetters) || projectData.allLetters.length !== 26) {
                        report(exerciseLocation, 'для генератора алфавита нужны 26 букв');
                    }
                    return;
                }
                if (exercise.type === 'audioBlends') {
                    if (!projectData.blendWords || Object.keys(projectData.blendWords).length < 2) {
                        report(exerciseLocation, 'нет данных для генератора буквосочетаний');
                    }
                    return;
                }
                if (exercise.type === 'audioSounds') {
                    if (!Array.isArray(projectData.soundWords) || projectData.soundWords.length < 2 ||
                        !projectData.soundWords.every(function(item) { return isText(item.word) && isText(item.sound); })) {
                        report(exerciseLocation, 'нет корректных данных для генератора звуков');
                    }
                    return;
                }

                if (!Array.isArray(exercise.questions) || exercise.questions.length === 0) {
                    report(exerciseLocation, 'нужен непустой массив questions');
                    return;
                }

                exercise.questions.forEach(function(question, questionIndex) {
                    stats.questionCount += 1;
                    const questionLocation = exerciseLocation + '.questions[' + questionIndex + ']';
                    if (!question || typeof question !== 'object') {
                        report(questionLocation, 'вопрос должен быть объектом');
                        return;
                    }

                    if (exercise.type === 'multipleChoice' || exercise.type === 'imageChoice') {
                        checkOptions(question, questionLocation, false);
                        if (exercise.type === 'imageChoice' && !question.image) {
                            report(questionLocation, 'для imageChoice нужно изображение');
                        }
                    } else if (exercise.type === 'audio') {
                        checkOptions(question, questionLocation, true);
                    } else if (exercise.type === 'emojiChoice') {
                        checkOptions(question, questionLocation, false);
                        if (!isText(question.emoji)) report(questionLocation, 'нет эмодзи');
                    } else if (exercise.type === 'fillBlank' || exercise.type === 'imageWord') {
                        if (!isText(question.q)) report(questionLocation, 'нет текста вопроса');
                        if (!Array.isArray(question.a) || question.a.length === 0 || !question.a.every(isText)) {
                            report(questionLocation, 'a должен содержать допустимые ответы');
                        }
                        if (exercise.type === 'imageWord') {
                            if (!question.image) report(questionLocation, 'для imageWord нужно изображение');
                            else checkImage(question.image, questionLocation);
                        } else if (question.image) {
                            checkImage(question.image, questionLocation);
                        }
                    }
                });
            });
        });
    });

    stats.imageCount = imageNames.size;
    return { errors, stats };
}

if (require.main === module) {
    const rootDir = path.resolve(__dirname, '..');
    const result = validateProjectData(loadProjectData(rootDir), rootDir);
    if (result.errors.length) {
        console.error('Проверка учебных данных не пройдена:');
        result.errors.forEach(function(message) { console.error('- ' + message); });
        process.exitCode = 1;
    } else {
        console.log('Проверка пройдена: ' + result.stats.topicCount + ' тем, ' +
            result.stats.exerciseCount + ' заданий, ' + result.stats.questionCount +
            ' вопросов, ' + result.stats.imageCount + ' изображений.');
    }
}

module.exports = { loadProjectData, validateProjectData };
