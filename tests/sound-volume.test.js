const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'sound.js'), 'utf8');

function runSound(isTouch) {
    const levels = [];

    class FakeAudioContext {
        constructor() {
            this.state = 'running';
            this.currentTime = 0;
            this.destination = {};
        }

        createOscillator() {
            return {
                type: '',
                frequency: { setValueAtTime: function() {} },
                connect: function() {},
                start: function() {},
                stop: function() {}
            };
        }

        createGain() {
            return {
                gain: {
                    setValueAtTime: function() {},
                    exponentialRampToValueAtTime: function(value) { if (value > 0.0001) levels.push(value); }
                },
                connect: function() {}
            };
        }
    }

    const window = {
        AudioContext: FakeAudioContext,
        matchMedia: function() { return { matches: isTouch }; },
        setTimeout: function() {}
    };
    const document = { addEventListener: function() {} };
    vm.runInNewContext(source, { window, document });

    window.playClickSound();
    window.playAnswerSound(true);
    window.playAnswerSound(false);
    return levels;
}

test('на телефоне звуки заметно громче, чем на компьютере', function() {
    const desktop = runSound(false);
    const mobile = runSound(true);

    assert.deepEqual(desktop, [0.035, 0.05, 0.055, 0.045, 0.04]);
    assert.deepEqual(mobile, [0.11, 0.13, 0.14, 0.12, 0.11]);
    assert.ok(mobile.every(function(level, index) { return level > desktop[index]; }));
});
