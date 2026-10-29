const content = {
    grammar: {
        toBe: {
            title: 'Глагол to be (am/is/are)',
            exercises: [
                {
                    type: 'multipleChoice',
                    instruction: 'Выберите правильную форму глагола to be',
                    questions: [
                        { q: 'I ___ a student', options: ['am', 'is', 'are'], a: 0 },
                        { q: 'She ___ my sister', options: ['am', 'is', 'are'], a: 1 },
                        { q: 'They ___ happy', options: ['am', 'is', 'are'], a: 2 },
                        { q: 'He ___ in the kitchen', options: ['am', 'is', 'are'], a: 1 },
                        { q: 'We ___ friends', options: ['am', 'is', 'are'], a: 2 },
                        { q: 'It ___ a cat', options: ['am', 'is', 'are'], a: 1 },
                        { q: 'You ___ my friend', options: ['am', 'is', 'are'], a: 2 },
                        { q: 'Anna and Misha ___ children', options: ['am', 'is', 'are'], a: 2 }
                    ]
                },
                {
                    type: 'fillBlank',
                    instruction: 'Вставьте am, is или are',
                    questions: [
                        { q: 'My name ___ Anna', a: ['is'] },
                        { q: 'I ___ seven years old', a: ['am'] },
                        { q: 'They ___ in the garden', a: ['are'] },
                        { q: 'She ___ my mummy', a: ['is'] },
                        { q: 'We ___ at home', a: ['are'] },
                        { q: 'It ___ a radio', a: ['is'] }
                    ]
                }
            ]
        },
        haveGot: {
            title: 'Конструкция have got / has got',
            exercises: [
                {
                    type: 'multipleChoice',
                    instruction: 'Выберите правильный ответ',
                    questions: [
                        { q: 'I ___ got a red ball', options: ['have', 'has', 'am'], a: 0 },
                        { q: 'She ___ got blue eyes', options: ['have', 'has', 'are'], a: 1 },
                        { q: 'They ___ got a dog', options: ['have', 'has', 'is'], a: 0 },
                        { q: 'He ___ got a teddy bear', options: ['have', 'has', 'are'], a: 1 },
                        { q: 'We ___ got a big house', options: ['have', 'has', 'is'], a: 0 },
                        { q: 'Dasha ___ got a doll', options: ['have', 'has', 'are'], a: 1 },
                        { q: 'Petya ___ got a toy soldier', options: ['have', 'has', 'is'], a: 1 }
                    ]
                },
                {
                    type: 'fillBlank',
                    instruction: 'Вставьте have got или has got',
                    questions: [
                        { q: 'My sister ___ ___ a doll', a: ['has got'] },
                        { q: 'I ___ ___ a bike', a: ['have got'] },
                        { q: 'Grandma ___ ___ a cat', a: ['has got'] },
                        { q: 'We ___ ___ a garden', a: ['have got'] },
                        { q: 'The teddy bear ___ ___ big eyes', a: ['has got'] }
                    ]
                }
            ]
        },
        pronouns: {
            title: 'Местоимения (I, you, he, she, it, we, they)',
            exercises: [
                {
                    type: 'multipleChoice',
                    instruction: 'Выберите правильное местоимение',
                    questions: [
                        { q: '___ am happy', options: ['I', 'He', 'She'], a: 0 },
                        { q: '___ is my brother Misha', options: ['I', 'He', 'They'], a: 1 },
                        { q: '___ are my friends', options: ['He', 'She', 'They'], a: 2 },
                        { q: '___ is a cat', options: ['It', 'He', 'I'], a: 0 },
                        { q: '___ are students', options: ['We', 'He', 'She'], a: 0 },
                        { q: '___ is my sister Dasha', options: ['She', 'He', 'They'], a: 0 },
                        { q: '___ is Anna', options: ['She', 'He', 'It'], a: 0 },
                        { q: '___ is Petya', options: ['He', 'She', 'It'], a: 0 }
                    ]
                },
                {
                    type: 'matching',
                    instruction: 'Соедините местоимения с их переводом',
                    pairs: [
                        { left: 'I', right: 'я' },
                        { left: 'He', right: 'он' },
                        { left: 'She', right: 'она' },
                        { left: 'It', right: 'оно (о предмете)' },
                        { left: 'We', right: 'мы' },
                        { left: 'They', right: 'они' }
                    ]
                }
            ]
        },
        plurals: {
            title: 'Множественное число',
            exercises: [
                {
                    type: 'multipleChoice',
                    instruction: 'Выберите правильную форму множественного числа',
                    questions: [
                        { q: 'one cat - two ___', options: ['cat', 'cats', "cat's"], a: 1 },
                        { q: 'one dog - two ___', options: ['dog', 'dogs', "dog's"], a: 1 },
                        { q: 'one box - two ___', options: ['box', 'boxs', 'boxes'], a: 2 },
                        { q: 'one child - two ___', options: ['childs', 'children', "child's"], a: 1 },
                        { q: 'one foot - two ___', options: ['foots', 'feet', "foot's"], a: 1 },
                        { q: 'one mouse - two ___', options: ['mouses', 'mice', "mouse's"], a: 1 },
                        { q: 'one man - two ___', options: ['mans', 'men', "man's"], a: 1 },
                        { q: 'one toy - two ___', options: ['toies', 'toys', 'toy'], a: 1 }
                    ]
                },
                {
                    type: 'fillBlank',
                    instruction: 'Напишите форму множественного числа',
                    questions: [
                        { q: 'apple - ___', a: ['apples'] },
                        { q: 'banana - ___', a: ['bananas'] },
                        { q: 'toy - ___', a: ['toys'] },
                        { q: 'mouse - ___', a: ['mice'] },
                        { q: 'foot - ___', a: ['feet'] },
                        { q: 'child - ___', a: ['children'] }
                    ]
                }
            ]
        },
        questions: {
            title: 'Вопросы',
            exercises: [
                {
                    type: 'multipleChoice',
                    instruction: 'Выберите правильное вопросительное слово',
                    questions: [
                        { q: '___ is your name?', options: ['What', 'Where', 'Who'], a: 0 },
                        { q: '___ old are you?', options: ['What', 'How', 'Where'], a: 1 },
                        { q: '___ is my ball?', options: ['What', 'Where', 'Who'], a: 1 },
                        { q: '___ you like chocolate?', options: ['Do', 'Are', 'Is'], a: 0 },
                        { q: '___ she got a sister?', options: ['Has', 'Have', 'Is'], a: 0 },
                        { q: '___ colour is the snake?', options: ['What', 'Where', 'How'], a: 0 },
                        { q: '___ is Petya? He is in the garden', options: ['What', 'Where', 'How'], a: 1 }
                    ]
                }
            ]
        },
        negatives: {
            title: 'Отрицательные предложения',
            exercises: [
                {
                    type: 'multipleChoice',
                    instruction: 'Выберите правильную отрицательную форму',
                    questions: [
                        { q: 'I am sad - I ___ sad', options: ["am not", 'is not', 'are not'], a: 0 },
                        { q: 'She is happy - She ___ happy', options: ['is not', 'am not', 'are not'], a: 0 },
                        { q: 'I have got a cat - I ___ got a cat', options: ["haven't", "hasn't", 'not'], a: 0 },
                        { q: 'He likes apples - He ___ like apples', options: ["don't", "doesn't", 'not'], a: 1 },
                        { q: 'They are here - They ___ here', options: ["aren't", "isn't", "am not"], a: 0 },
                        { q: 'Dasha ___ got a teddy bear (отрицание)', options: ["hasn't", "haven't", "isn't"], a: 0 }
                    ]
                },
                {
                    type: 'fillBlank',
                    instruction: 'Составьте отрицательные предложения (можно писать полностью или сокращённо)',
                    questions: [
                        { q: 'I am tired - I ___ tired', a: ['am not'] },
                        { q: 'They are here - They ___ here', a: ['are not', "aren't"] },
                        { q: 'She has got a dog - She ___ got a dog', a: ['has not', "hasn't"] },
                        { q: 'I have got a bike - I ___ got a bike', a: ['have not', "haven't"] },
                        { q: 'He is happy - He ___ happy', a: ['is not', "isn't"] },
                        { q: 'We are sad - We ___ sad', a: ['are not', "aren't"] }
                    ]
                }
            ]
        }
    },
    reading: {
        alphabet: {
            title: 'Алфавит (A-Z)',
            exercises: [
                {
                    type: 'caseMatching',
                    instruction: 'Соедините заглавные и строчные буквы'
                },
                {
                    type: 'audioAlphabet',
                    instruction: 'Послушайте букву и выберите её'
                }
            ]
        },
        blends: {
            title: 'Буквосочетания (sh, ch, th, ph, ck)',
            exercises: [
                {
                    type: 'audioBlends',
                    instruction: 'Послушайте слово и выберите буквосочетание, которое в нём есть'
                }
            ]
        },
        sounds: {
            title: 'Различия звуков (долгие и краткие гласные)',
            exercises: [
                {
                    type: 'multipleChoice',
                    instruction: 'Найдите слово с правильным звуком',
                    questions: [
                        { q: 'В каком слове долгий звук /i:/?', options: ['sit', 'see', 'six'], a: 1 },
                        { q: 'В каком слове краткий звук /e/?', options: ['bed', 'bee', 'beat'], a: 0 },
                        { q: 'В каком слове краткий звук /ae/?', options: ['cake', 'cat', 'car'], a: 1 },
                        { q: 'Долгий или краткий звук в слове "beat"?', options: ['долгий /i:/', 'краткий /i/'], a: 0 },
                        { q: 'Долгий или краткий звук в слове "sit"?', options: ['долгий /i:/', 'краткий /i/'], a: 1 },
                        { q: 'В каком слове звук /ou/?', options: ['hot', 'go', 'hat'], a: 1 },
                        { q: 'В каком слове звук /ai/?', options: ['bike', 'big', 'bit'], a: 0 },
                        { q: 'В каком слове звук /oi/?', options: ['boy', 'box', 'bone'], a: 0 }
                    ]
                },
                {
                    type: 'audioSounds',
                    instruction: 'Послушайте слово и выберите, какой в нём долгий или краткий звук'
                }
            ]
        },
        cAndK: {
            title: 'Буквы C и K',
            exercises: [
                {
                    type: 'multipleChoice',
                    instruction: 'Посмотрите на картинку и выберите C или K, чтобы заполнить пропуск в слове',
                    questions: [
                        { q: '___at', image: 'cat', options: ['C', 'K'], a: 0 },
                        { q: '___ite', image: 'kite', options: ['C', 'K'], a: 1 },
                        { q: '___ake', image: 'cake', options: ['C', 'K'], a: 0 },
                        { q: '___ey', image: 'key', options: ['C', 'K'], a: 1 },
                        { q: '___lock', image: 'clock', options: ['C', 'K'], a: 0 },
                        { q: '___ing', image: 'king', options: ['C', 'K'], a: 1 },
                        { q: '___ook', image: 'cook', options: ['C', 'K'], a: 0 },
                        { q: '___angaroo', image: 'kangaroo', options: ['C', 'K'], a: 1 }
                    ]
                }
            ]
        }
    },
    vocabulary: {
        family: {
            title: 'Семья',
            exercises: [
                {
                    type: 'matching',
                    instruction: 'Соедините слова с переводом',
                    pairs: [
                        { left: 'mummy', right: 'мама' },
                        { left: 'daddy', right: 'папа' },
                        { left: 'grandma', right: 'бабушка' },
                        { left: 'grandpa', right: 'дедушка' },
                        { left: 'brother', right: 'брат' },
                        { left: 'sister', right: 'сестра' }
                    ]
                },
                {
                    type: 'fillBlank',
                    instruction: 'Напишите перевод слова на английский',
                    questions: [
                        { q: 'мама - ___', a: ['mummy'] },
                        { q: 'папа - ___', a: ['daddy'] },
                        { q: 'бабушка - ___', a: ['grandma'] },
                        { q: 'дедушка - ___', a: ['grandpa'] },
                        { q: 'брат - ___', a: ['brother'] },
                        { q: 'сестра - ___', a: ['sister'] }
                    ]
                }
            ]
        },
        colors: {
            title: 'Цвета',
            exercises: [
                {
                    type: 'fillBlank',
                    instruction: 'Напишите цвет на английском',
                    questions: [
                        { q: 'Красное яблоко - ___ apple', a: ['red'] },
                        { q: 'Синее небо - ___ sky', a: ['blue'] },
                        { q: 'Зелёное дерево - ___ tree', a: ['green'] },
                        { q: 'Жёлтое солнце - ___ sun', a: ['yellow'] },
                        { q: 'Белый снег - ___ snow', a: ['white'] },
                        { q: 'Чёрная ночь - ___ night', a: ['black'] },
                        { q: 'Коричневый шоколад - ___ chocolate', a: ['brown'] }
                    ]
                },
                {
                    type: 'imageChoice',
                    instruction: 'Посмотрите на картинку и выберите цвет',
                    questions: [
                        { q: 'grass', image: 'grass', options: ['red', 'green', 'blue'], a: 1 },
                        { q: 'sky', image: 'sky', options: ['blue', 'yellow', 'red'], a: 0 },
                        { q: 'sun', image: 'sun', options: ['green', 'yellow', 'white'], a: 1 },
                        { q: 'snow', image: 'snow', options: ['black', 'white', 'brown'], a: 1 },
                        { q: 'chocolate', image: 'chocolate', options: ['brown', 'yellow', 'white'], a: 0 },
                        { q: 'night', image: 'night', options: ['white', 'black', 'yellow'], a: 1 }
                    ]
                }
            ]
        },
        numbers: {
            title: 'Числа (1-12)',
            exercises: [
                {
                    type: 'fillBlank',
                    instruction: 'Напишите число на английском',
                    questions: [
                        { q: 'Как сказать 1 по-английски?', a: ['one'] },
                        { q: 'Как сказать 5 по-английски?', a: ['five'] },
                        { q: 'Как сказать 10 по-английски?', a: ['ten'] },
                        { q: 'Как сказать 12 по-английски?', a: ['twelve'] },
                        { q: 'Как сказать 7 по-английски?', a: ['seven'] },
                        { q: 'Как сказать 3 по-английски?', a: ['three'] }
                    ]
                },
                {
                    type: 'audio',
                    instruction: 'Послушайте и выберите число',
                    questions: [
                        { q: '', audio: 'five', options: ['4', '5', '6'], a: 1 },
                        { q: '', audio: 'ten', options: ['9', '10', '11'], a: 1 },
                        { q: '', audio: 'twelve', options: ['11', '12', '10'], a: 1 },
                        { q: '', audio: 'seven', options: ['6', '7', '8'], a: 1 },
                        { q: '', audio: 'three', options: ['2', '3', '4'], a: 1 },
                        { q: '', audio: 'nine', options: ['8', '9', '10'], a: 1 }
                    ]
                },
                {
                    type: 'multipleChoice',
                    instruction: 'Выберите правильный ответ',
                    questions: [
                        { q: '5 + 3 = ?', options: ['seven', 'eight', 'nine'], a: 1 },
                        { q: 'Какое число идет после six?', options: ['five', 'seven', 'eight'], a: 1 },
                        { q: 'Какое число идет перед ten?', options: ['nine', 'eleven', 'twelve'], a: 0 },
                        { q: 'Сколько месяцев в году?', options: ['ten', 'eleven', 'twelve'], a: 2 },
                        { q: 'Сколько пальцев на одной руке?', options: ['four', 'five', 'six'], a: 1 },
                        { q: 'Какое число идет после eleven?', options: ['ten', 'twelve', 'nine'], a: 1 }
                    ]
                }
            ]
        },
        home: {
            title: 'Дом',
            exercises: [
                {
                    type: 'imageWord',
                    instruction: 'Посмотрите на картинку и напишите слово',
                    questions: [
                        { q: 'kitchen', image: 'kitchen', a: ['kitchen'] },
                        { q: 'bedroom', image: 'bedroom', a: ['bedroom'] },
                        { q: 'bathroom', image: 'bathroom', a: ['bathroom'] },
                        { q: 'living room', image: 'living-room', a: ['living room', 'living-room', 'livingroom'] },
                        { q: 'garden', image: 'garden', a: ['garden'] },
                        { q: 'table', image: 'table', a: ['table'] },
                        { q: 'chair', image: 'chair', a: ['chair'] },
                        { q: 'radio', image: 'radio', a: ['radio'] }
                    ]
                }
            ]
        },
        food: {
            title: 'Еда',
            exercises: [
                {
                    type: 'imageWord',
                    instruction: 'Посмотрите на картинку и напишите слово',
                    questions: [
                        { q: 'apple', image: 'apple', a: ['apple'] },
                        { q: 'banana', image: 'banana', a: ['banana'] },
                        { q: 'burger', image: 'burger', a: ['burger'] },
                        { q: 'chips', image: 'chips', a: ['chips'] },
                        { q: 'pizza', image: 'pizza', a: ['pizza'] },
                        { q: 'ice cream', image: 'ice-cream', a: ['ice cream', 'ice-cream', 'icecream'] },
                        { q: 'chocolate', image: 'chocolate', a: ['chocolate'] },
                        { q: 'sandwich', image: 'sandwich', a: ['sandwich'] }
                    ]
                }
            ]
        },
        animals: {
            title: 'Животные',
            exercises: [
                {
                    type: 'imageWord',
                    instruction: 'Посмотрите на картинку и напишите слово',
                    questions: [
                        { q: 'cat', image: 'cat', a: ['cat'] },
                        { q: 'dog', image: 'dog', a: ['dog'] },
                        { q: 'bird', image: 'bird', a: ['bird'] },
                        { q: 'fish', image: 'fish', a: ['fish'] },
                        { q: 'frog', image: 'frog', a: ['frog'] },
                        { q: 'horse', image: 'horse', a: ['horse'] },
                        { q: 'chimp', image: 'chimp', a: ['chimp'] },
                        { q: 'rabbit', image: 'rabbit', a: ['rabbit'] }
                    ]
                }
            ]
        },
        emotions: {
            title: 'Эмоции',
            exercises: [
                {
                    type: 'emojiChoice',
                    instruction: 'Какая это эмоция?',
                    questions: [
                        { emoji: '😊', options: ['happy', 'sad', 'angry'], a: 0 },
                        { emoji: '😢', options: ['happy', 'sad', 'tired'], a: 1 },
                        { emoji: '😡', options: ['happy', 'angry', 'sad'], a: 1 },
                        { emoji: '😴', options: ['tired', 'happy', 'excited'], a: 0 },
                        { emoji: '😄', options: ['sad', 'happy', 'tired'], a: 1 },
                        { emoji: '😨', options: ['happy', 'scared', 'angry'], a: 1 }
                    ]
                }
            ]
        }
    }
};

const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const letterWords = {
    'A': 'apple', 'B': 'ball', 'C': 'cat', 'D': 'dog', 'E': 'egg',
    'F': 'frog', 'G': 'girl', 'H': 'hat', 'I': 'ice cream', 'J': 'jam',
    'K': 'kite', 'L': 'lion', 'M': 'mouse', 'N': 'nose', 'O': 'orange',
    'P': 'pig', 'Q': 'queen', 'R': 'rabbit', 'S': 'sun', 'T': 'tree',
    'U': 'umbrella', 'V': 'van', 'W': 'window', 'X': 'fox', 'Y': 'yellow', 'Z': 'zoo'
};
const blendWords = {
    'sh': 'ship',
    'ch': 'cheese',
    'th': 'three',
    'ph': 'photo',
    'ck': 'clock'
};
const soundWords = [
    { word: 'see', sound: 'долгий /i:/' },
    { word: 'sit', sound: 'краткий /i/' },
    { word: 'beat', sound: 'долгий /i:/' },
    { word: 'bit', sound: 'краткий /i/' },
    { word: 'bed', sound: 'краткий /e/' },
    { word: 'bee', sound: 'долгий /i:/' },
    { word: 'cat', sound: 'краткий /ae/' },
    { word: 'cake', sound: 'долгий /ei/' },
    { word: 'hot', sound: 'краткий /o/' },
    { word: 'go', sound: 'долгий /ou/' },
    { word: 'bike', sound: 'долгий /ai/' },
    { word: 'big', sound: 'краткий /i/' },
    { word: 'boy', sound: '/oi/' },
    { word: 'box', sound: 'краткий /o/' }
];

let currentSection = '';
let currentTopic = '';
let navigationHistory = [];
let usedExercisesInCycle = [];
let usedQuestions = {};
let currentExerciseData = null;
let usedAudioLetters = [];
let usedAudioBlends = [];
let usedAudioSounds = [];
let speechReady = false;
let studentName = '';
let questionStartTime = null;

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
    
    var progress = JSON.parse(localStorage.getItem('progress') || '[]');
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
    return JSON.parse(localStorage.getItem('progress') || '[]');
}

function showProgress() {
    if (!getStudentName()) return;
    
    var progress = getProgress();
    var exercises = document.getElementById('exercises');
    var topicsList = document.getElementById('topicsList');
    var mainNav = document.getElementById('mainNav');
    
    mainNav.className = 'main-nav hidden';
    exercises.innerHTML = '';
    topicsList.innerHTML = '';
    
    document.getElementById('backBtn').textContent = 'На главную';
    document.getElementById('backBtn').className = 'back-btn';
    
    var title = document.createElement('h2');
    title.className = 'exercise-title';
    title.textContent = 'Мой прогресс';
    exercises.appendChild(title);
    var greeting = document.createElement('p');
    greeting.style.textAlign = 'center';
    greeting.style.fontSize = '1.2em';
    greeting.style.color = '#333';
    greeting.style.marginBottom = '20px';
    greeting.textContent = 'Ученик: ' + studentName;
    exercises.appendChild(greeting);
    
    var sections = {
        'grammar': {
            name: 'Грамматика',
            topics: {
                'toBe': 'Глагол to be',
                'haveGot': 'Have got / Has got',
                'pronouns': 'Местоимения',
                'plurals': 'Множественное число',
                'questions': 'Вопросы',
                'negatives': 'Отрицательные предложения'
            }
        },
        'reading': {
            name: 'Чтение',
            topics: {
                'alphabet': 'Алфавит',
                'blends': 'Буквосочетания',
                'sounds': 'Различия звуков',
                'cAndK': 'Буквы C и K'
            }
        },
        'vocabulary': {
            name: 'Лексика',
            topics: {
                'family': 'Семья',
                'colors': 'Цвета',
                'numbers': 'Числа',
                'home': 'Дом',
                'food': 'Еда',
                'animals': 'Животные',
                'emotions': 'Эмоции'
            }
        }
    };
    
    var hasAnyProgress = false;
    
    for (var sectionKey in sections) {
        var section = sections[sectionKey];
        var sectionDiv = document.createElement('div');
        sectionDiv.style.marginBottom = '30px';
        
        var sectionTitle = document.createElement('h3');
        sectionTitle.style.color = '#667eea';
        sectionTitle.style.fontSize = '1.4em';
        sectionTitle.style.marginBottom = '15px';
        sectionTitle.style.borderBottom = '2px solid #667eea';
        sectionTitle.style.paddingBottom = '5px';
        sectionTitle.textContent = section.name;
        sectionDiv.appendChild(sectionTitle);
        
        var statsDiv = document.createElement('div');
        statsDiv.className = 'progress-stats';
        
        var hasTopicsInSection = false;
        
        for (var topicKey in section.topics) {
            var topicProgress = progress.filter(function(p) { return p.topic === topicKey; });
            var total = topicProgress.length;
            var correct = topicProgress.filter(function(p) { return p.isCorrect; }).length;
            var incorrect = total - correct;
            
            if (total > 0) {
                hasAnyProgress = true;
                hasTopicsInSection = true;
                
                var card = document.createElement('div');
                card.className = 'stat-card';
                card.innerHTML = '<h3>' + section.topics[topicKey] + '</h3>' +
                    '<div style="font-size: 1.1em; margin-bottom: 8px;">Решено: ' + total + '</div>' +
                    '<div style="color: #28a745; font-weight: bold;">Правильных: ' + correct + '</div>' +
                    '<div style="color: #dc3545; font-weight: bold;">Неправильных: ' + incorrect + '</div>';
                statsDiv.appendChild(card);
            }
        }
        
        if (hasTopicsInSection) {
            sectionDiv.appendChild(statsDiv);
            exercises.appendChild(sectionDiv);
        }
    }
    
    if (!hasAnyProgress) {
        var noData = document.createElement('p');
        noData.style.textAlign = 'center';
        noData.style.fontSize = '1.2em';
        noData.style.color = '#666';
        noData.textContent = 'Вы ещё не выполнили ни одного задания';
        exercises.appendChild(noData);
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

function generateCaseMatchingExercise() {
    var shuffled = shuffleArray(allLetters);
    var selected = shuffled.slice(0, 7);
    var pairs = selected.map(function(l) { return { left: l, right: l.toLowerCase() }; });
    var shuffledRight = shuffleArray(pairs);
    return {
        type: 'matching',
        instruction: 'Соедините заглавные и строчные буквы',
        pairs: pairs,
        shuffledRight: shuffledRight
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

function showSection(section, fromBack) {
    if (!getStudentName()) return;
    if (!fromBack) navigationHistory.push('main');
    currentSection = section;
    var topicsList = document.getElementById('topicsList');
    var exercises = document.getElementById('exercises');
    var mainNav = document.getElementById('mainNav');

    mainNav.className = 'main-nav hidden';
    exercises.innerHTML = '';
    topicsList.innerHTML = '';

    var sectionTitle = document.createElement('h2');
    sectionTitle.className = 'exercise-title';
    var sectionNames = { grammar: 'Грамматика', reading: 'Чтение', vocabulary: 'Лексика' };
    sectionTitle.textContent = sectionNames[section];
    topicsList.appendChild(sectionTitle);

    var topics = content[section];
    for (var topic in topics) {
        if (topics.hasOwnProperty(topic)) {
            var btn = document.createElement('button');
            btn.className = 'topic-btn';
            btn.textContent = topics[topic].title;
            btn.setAttribute('data-topic', topic);
            btn.onclick = function() {
                var t = this.getAttribute('data-topic');
                showTopic(t);
            };
            topicsList.appendChild(btn);
        }
    }

    document.getElementById('backBtn').textContent = 'К списку разделов';
    document.getElementById('backBtn').className = 'back-btn';
}

function showTopic(topic) {
    navigationHistory.push(currentSection);
    currentTopic = topic;
    usedExercisesInCycle = [];
    usedQuestions = {};
    usedAudioLetters = [];
    usedAudioBlends = [];
    usedAudioSounds = [];

    var topicsList = document.getElementById('topicsList');
    var exercises = document.getElementById('exercises');

    topicsList.innerHTML = '';
    exercises.innerHTML = '';

    document.getElementById('backBtn').textContent = 'К списку тем';

    showNextExercise();
}

function showNextExercise() {
    var topicData = content[currentSection][currentTopic];
    var exercises = document.getElementById('exercises');
    exercises.innerHTML = '';

    if (usedExercisesInCycle.length >= topicData.exercises.length) {
        usedExercisesInCycle = [];
    }

    var allIndices = [];
    for (var i = 0; i < topicData.exercises.length; i++) {
        allIndices.push(i);
    }

    var availableIndices = allIndices.filter(function(idx) {
        return usedExercisesInCycle.indexOf(idx) === -1;
    });

    var randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    usedExercisesInCycle.push(randomIndex);

    var exercise = topicData.exercises[randomIndex];
    var exerciseToRender = exercise;

    if (exercise.type === 'caseMatching') {
        exerciseToRender = generateCaseMatchingExercise();
    } else if (exercise.type === 'audioAlphabet') {
        exerciseToRender = generateAudioAlphabetExercise();
    } else if (exercise.type === 'audioBlends') {
        exerciseToRender = generateAudioBlendsExercise();
    } else if (exercise.type === 'audioSounds') {
        exerciseToRender = generateAudioSoundsExercise();
    }

    currentExerciseData = { original: exercise, rendered: exerciseToRender, index: randomIndex };

    var topicTitle = document.createElement('h2');
    topicTitle.className = 'exercise-title';
    topicTitle.textContent = topicData.title;
    exercises.appendChild(topicTitle);

    questionStartTime = Date.now();
    renderExercise(exerciseToRender, exercises);
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
        if (!usedQuestions[exIdx]) {
            usedQuestions[exIdx] = [];
        }

        var allQuestionIndices = [];
        for (var i = 0; i < exercise.questions.length; i++) {
            allQuestionIndices.push(i);
        }

        var availableQuestionIndices = allQuestionIndices.filter(function(idx) {
            return usedQuestions[exIdx].indexOf(idx) === -1;
        });

        if (availableQuestionIndices.length === 0) {
            usedQuestions[exIdx] = [];
            availableQuestionIndices = allQuestionIndices.slice();
        }

        var qIndex = availableQuestionIndices[Math.floor(Math.random() * availableQuestionIndices.length)];
        usedQuestions[exIdx].push(qIndex);

        var q = exercise.questions[qIndex];

        var qDiv = document.createElement('div');
        qDiv.className = 'exercise-item';

        if (q.image) {
            var img = document.createElement('img');
            img.className = 'exercise-image';
            img.src = 'images/' + q.image + '.png';
            img.alt = 'Картинка к заданию';
            img.onerror = function() {
                this.style.display = 'none';
                var placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.textContent = 'Картинка не загрузилась';
                this.parentNode.insertBefore(placeholder, this);
            };
            qDiv.appendChild(img);
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
        if (!usedQuestions[exIdx]) {
            usedQuestions[exIdx] = [];
        }

        var allQuestionIndices = [];
        for (var i = 0; i < exercise.questions.length; i++) {
            allQuestionIndices.push(i);
        }

        var availableQuestionIndices = allQuestionIndices.filter(function(idx) {
            return usedQuestions[exIdx].indexOf(idx) === -1;
        });

        if (availableQuestionIndices.length === 0) {
            usedQuestions[exIdx] = [];
            availableQuestionIndices = allQuestionIndices.slice();
        }

        var qIndex = availableQuestionIndices[Math.floor(Math.random() * availableQuestionIndices.length)];
        usedQuestions[exIdx].push(qIndex);

        var q = exercise.questions[qIndex];

        var qDiv = document.createElement('div');
        qDiv.className = 'exercise-item';

        var img = document.createElement('img');
        img.className = 'exercise-image';
        img.src = 'images/' + q.image + '.png';
        img.alt = 'Картинка к заданию';
        img.onerror = function() {
            this.style.display = 'none';
            var placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.textContent = 'Картинка не загрузилась';
            this.parentNode.insertBefore(placeholder, this);
        };
        qDiv.appendChild(img);

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
        if (!usedQuestions[exIdx]) {
            usedQuestions[exIdx] = [];
        }

        var allQuestionIndices = [];
        for (var i = 0; i < exercise.questions.length; i++) {
            allQuestionIndices.push(i);
        }

        var availableQuestionIndices = allQuestionIndices.filter(function(idx) {
            return usedQuestions[exIdx].indexOf(idx) === -1;
        });

        if (availableQuestionIndices.length === 0) {
            usedQuestions[exIdx] = [];
            availableQuestionIndices = allQuestionIndices.slice();
        }

        var qIndex = availableQuestionIndices[Math.floor(Math.random() * availableQuestionIndices.length)];
        usedQuestions[exIdx].push(qIndex);

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
        if (!usedQuestions[exIdx]) {
            usedQuestions[exIdx] = [];
        }

        var allQuestionIndices = [];
        for (var i = 0; i < exercise.questions.length; i++) {
            allQuestionIndices.push(i);
        }

        var availableQuestionIndices = allQuestionIndices.filter(function(idx) {
            return usedQuestions[exIdx].indexOf(idx) === -1;
        });

        if (availableQuestionIndices.length === 0) {
            usedQuestions[exIdx] = [];
            availableQuestionIndices = allQuestionIndices.slice();
        }

        var qIndex = availableQuestionIndices[Math.floor(Math.random() * availableQuestionIndices.length)];
        usedQuestions[exIdx].push(qIndex);

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
        if (!usedQuestions[exIdx]) {
            usedQuestions[exIdx] = [];
        }

        var allQuestionIndices = [];
        for (var i = 0; i < exercise.questions.length; i++) {
            allQuestionIndices.push(i);
        }

        var availableQuestionIndices = allQuestionIndices.filter(function(idx) {
            return usedQuestions[exIdx].indexOf(idx) === -1;
        });

        if (availableQuestionIndices.length === 0) {
            usedQuestions[exIdx] = [];
            availableQuestionIndices = allQuestionIndices.slice();
        }

        var qIndex = availableQuestionIndices[Math.floor(Math.random() * availableQuestionIndices.length)];
        usedQuestions[exIdx].push(qIndex);

        var q = exercise.questions[qIndex];

        var qDiv = document.createElement('div');
        qDiv.className = 'exercise-item';

        var qTitle = document.createElement('div');
        qTitle.className = 'exercise-question';
        qTitle.textContent = 'Посмотрите на картинку и напишите слово:';
        qDiv.appendChild(qTitle);

        var img = document.createElement('img');
        img.className = 'exercise-image';
        img.src = 'images/' + q.image + '.png';
        img.alt = 'Картинка к заданию';
        img.onerror = function() {
            this.style.display = 'none';
            var placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.textContent = 'Картинка не загрузилась';
            this.parentNode.insertBefore(placeholder, this);
        };
        qDiv.appendChild(img);

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

        var pairs = exercise.pairs;
        var rightItems = exercise.shuffledRight || shuffleArray(pairs);

        pairs.forEach(function(pair, index) {
            var leftItem = document.createElement('div');
            leftItem.className = 'matching-item';
            leftItem.textContent = pair.left;
            leftItem.setAttribute('data-pair', index);
            leftItem.setAttribute('data-side', 'left');
            leftColumn.appendChild(leftItem);
        });

        rightItems.forEach(function(pair) {
            var originalIndex = pairs.indexOf(pair);
            var rightItem = document.createElement('div');
            rightItem.className = 'matching-item';
            rightItem.textContent = pair.right;
            rightItem.setAttribute('data-pair', originalIndex);
            rightItem.setAttribute('data-side', 'right');
            rightColumn.appendChild(rightItem);
        });

        matchingContainer.appendChild(leftColumn);
        matchingContainer.appendChild(rightColumn);
        exerciseDiv.appendChild(matchingContainer);

        var matchedPairs = 0;
        var selectedLeft = null;
        var selectedRight = null;

        setTimeout(function() {
            var items = matchingContainer.querySelectorAll('.matching-item');
            items.forEach(function(item) {
                item.onclick = function() {
                    if (this.classList.contains('matched')) return;

                    if (this.getAttribute('data-side') === 'left') {
                        if (selectedLeft) selectedLeft.classList.remove('selected');
                        selectedLeft = this;
                        this.classList.add('selected');
                    } else {
                        if (selectedRight) selectedRight.classList.remove('selected');
                        selectedRight = this;
                        this.classList.add('selected');
                    }

                    if (selectedLeft && selectedRight) {
                        if (selectedLeft.getAttribute('data-pair') === selectedRight.getAttribute('data-pair')) {
                            selectedLeft.classList.add('matched');
                            selectedRight.classList.add('matched');
                            matchedPairs++;

                            if (matchedPairs === pairs.length) {
                                var timeTaken = Math.round((Date.now() - questionStartTime) / 1000);
                                saveProgress(currentTopic, 'matching', true, timeTaken);
                                showResult(exerciseDiv, true, 'Отлично! Все пары найдены!');
                            }
                        } else {
                            selectedLeft.classList.add('wrong');
                            selectedRight.classList.add('wrong');
                            var sl = selectedLeft;
                            var sr = selectedRight;
                            setTimeout(function() {
                                sl.classList.remove('selected', 'wrong');
                                sr.classList.remove('selected', 'wrong');
                            }, 600);
                        }

                        selectedLeft = null;
                        selectedRight = null;
                    }
                };
            });
        }, 100);
    } else if (exercise.type === 'audio') {
        var exIdx = currentExerciseData.index;
        if (!usedQuestions[exIdx]) {
            usedQuestions[exIdx] = [];
        }

        var allQuestionIndices = [];
        for (var i = 0; i < exercise.questions.length; i++) {
            allQuestionIndices.push(i);
        }

        var availableQuestionIndices = allQuestionIndices.filter(function(idx) {
            return usedQuestions[exIdx].indexOf(idx) === -1;
        });

        if (availableQuestionIndices.length === 0) {
            usedQuestions[exIdx] = [];
            availableQuestionIndices = allQuestionIndices.slice();
        }

        var qIndex = availableQuestionIndices[Math.floor(Math.random() * availableQuestionIndices.length)];
        usedQuestions[exIdx].push(qIndex);

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
    saveProgress(currentTopic, 'multipleChoice', isCorrect, timeTaken);

    if (isCorrect) {
        selectedLabel.classList.add('correct-answer');
        showResult(exerciseDiv, true, 'Отлично! Правильно!');
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
    
    saveProgress(currentTopic, 'fillBlank', isCorrect, timeTaken);

    if (isCorrect) {
        input.classList.add('correct');
        showResult(exerciseDiv, true, 'Отлично! Правильно!');
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
    result.textContent = message;
    exerciseDiv.appendChild(result);

    var nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = 'Следующее задание';
    nextBtn.onclick = function() {
        showNextExercise();
    };
    exerciseDiv.appendChild(nextBtn);
}

function showMain() {
    document.getElementById('exercises').innerHTML = '';
    document.getElementById('topicsList').innerHTML = '';
    document.getElementById('mainNav').className = 'main-nav';
    document.getElementById('backBtn').className = 'back-btn hidden';
    currentSection = '';
    currentTopic = '';
    navigationHistory = [];
}

function goBack() {
    if (navigationHistory.length === 0) {
        showMain();
        return;
    }

    var prev = navigationHistory.pop();

    if (prev === 'main') {
        showMain();
    } else if (content[prev]) {
        showSection(prev, true);
    }
}

window.onload = function() {
    document.getElementById('mainNav').className = 'main-nav';
    document.getElementById('backBtn').className = 'back-btn hidden';
    initSpeech();
    
    if (!localStorage.getItem('studentName')) {
        document.getElementById('nameModal').classList.remove('hidden');
    } else {
        studentName = localStorage.getItem('studentName');
    }
};