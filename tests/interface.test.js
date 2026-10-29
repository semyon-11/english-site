const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const rootDir = path.resolve(__dirname, '..');

function read(file) {
    return fs.readFileSync(path.join(rootDir, file), 'utf8');
}

test('тихие звуки различаются для нажатий и ответов', function() {
    const source = read('js/sound.js');
    const contexts = [];

    class FakeAudioContext {
        constructor() {
            this.state = 'running';
            this.currentTime = 0;
            this.destination = {};
            this.oscillators = [];
            contexts.push(this);
        }

        createOscillator() {
            const oscillator = {
                frequency: {
                    value: null,
                    setValueAtTime: function(value) { this.value = value; }
                },
                connect: function() {},
                start: function() {},
                stop: function() {}
            };
            this.oscillators.push(oscillator);
            return oscillator;
        }

        createGain() {
            return {
                gain: {
                    setValueAtTime: function() {},
                    exponentialRampToValueAtTime: function() {}
                },
                connect: function() {}
            };
        }
    }

    const document = { addEventListener: function() {} };
    const window = {
        AudioContext: FakeAudioContext,
        setTimeout: function() {}
    };

    vm.runInNewContext(source, { window, document });
    window.playClickSound();
    assert.equal(contexts.length, 1);
    assert.deepEqual(contexts[0].oscillators.map(item => item.frequency.value), [520]);

    window.playAnswerSound(true);
    assert.deepEqual(contexts[0].oscillators.map(item => item.frequency.value), [520, 660, 880]);

    window.playAnswerSound(false);
    assert.deepEqual(contexts[0].oscillators.map(item => item.frequency.value), [520, 660, 880, 330, 262]);
});

test('касание добавляет класс анимации и запускает звук', function() {
    const source = read('js/sound.js');
    const listeners = {};
    const contexts = [];
    const added = [];
    const removed = [];

    class FakeAudioContext {
        constructor() {
            this.state = 'running';
            this.currentTime = 0;
            this.destination = {};
            this.oscillators = [];
            contexts.push(this);
        }

        createOscillator() {
            const oscillator = {
                frequency: { setValueAtTime: function(value) { oscillator.value = value; } },
                connect: function() {},
                start: function() {},
                stop: function() {}
            };
            this.oscillators.push(oscillator);
            return oscillator;
        }

        createGain() {
            return {
                gain: {
                    setValueAtTime: function() {},
                    exponentialRampToValueAtTime: function() {}
                },
                connect: function() {}
            };
        }
    }

    const classes = {
        add: function(name) { added.push(name); },
        remove: function(name) { removed.push(name); },
        contains: function() { return false; }
    };
    const button = {
        disabled: false,
        offsetWidth: 1,
        classList: classes,
        getAttribute: function() { return null; }
    };
    const target = { closest: function() { return button; } };
    const document = {
        addEventListener: function(name, callback) { listeners[name] = callback; }
    };
    const window = {
        AudioContext: FakeAudioContext,
        setTimeout: function(callback) {
            this.pendingTimeout = callback;
            return 1;
        }
    };

    vm.runInNewContext(source, { window, document });
    listeners.pointerdown({ target });

    assert.ok(added.includes('is-pressed'));
    assert.equal(contexts[0].oscillators.length, 1);
    window.pendingTimeout();
    assert.ok(removed.includes('is-pressed'));
});

test('шапка, меню и разделы выровнены по общей сетке', function() {
    const css = ['css/style.css', 'css/foundation.css', 'css/layout.css', 'css/components.css', 'css/mascot.css', 'css/motion.css', 'css/responsive.css'].map(read).join('\n');
    const html = read('index.html');
    const progress = read('js/progress.js');

    assert.ok(css.includes('.container {\n    width: min(100%, 1280px);'));
    assert.ok(css.includes('max-width: 1280px;'));
    assert.ok(css.includes('padding-right: 0;'));
    assert.ok(css.includes('@media (max-width: 620px)'));
    assert.ok(css.includes('@media (max-width: 370px)'));
    assert.ok(css.includes('@media (hover: none) and (pointer: coarse)'));
    assert.ok(css.includes('@keyframes tap-press'));
    assert.ok(css.includes('font-size: clamp(1.35rem, 2.5vw, 1.8rem);'));
    assert.ok(progress.includes('greetingName.textContent = studentName;'));
    assert.ok(html.includes('<script src="js/sound.js"></script>'));
});

test('страница остаётся рабочей, если браузер не поддерживает AudioContext', function() {
    const source = read('js/sound.js');
    const window = { setTimeout: function() {} };
    vm.runInNewContext(source, {
        window,
        document: { addEventListener: function() {} }
    });

    assert.doesNotThrow(function() {
        window.playClickSound();
        window.playAnswerSound(true);
        window.playAnswerSound(false);
    });
});
