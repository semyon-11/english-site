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

const sectionNames = {
    grammar: 'Грамматика',
    reading: 'Чтение',
    vocabulary: 'Лексика'
};
