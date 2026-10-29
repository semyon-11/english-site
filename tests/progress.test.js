const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const rootDir = path.resolve(__dirname, '..');

function setup(storage) {
    const warning = { textContent: '' };
    const document = {
        getElementById: function(id) {
            if (id === 'storageWarning') return warning;
            return null;
        }
    };
    const source = [
        fs.readFileSync(path.join(rootDir, 'js/state.js'), 'utf8'),
        fs.readFileSync(path.join(rootDir, 'js/progress.js'), 'utf8'),
        'studentName = "Test Student"; globalThis.__api = { saveProgress, getProgress };'
    ].join('\n');
    const context = { localStorage: storage, document };
    vm.runInNewContext(source, context);
    return { api: context.__api, warning };
}

test('saveProgress stores exercise type and an ISO timestamp', function() {
    const values = {};
    const storage = {
        getItem: function(key) { return values[key] || null; },
        setItem: function(key, value) { values[key] = value; }
    };
    const app = setup(storage);

    assert.equal(app.api.saveProgress('toBe', 'audio', true, 4), true);
    const records = JSON.parse(values.progress);
    assert.equal(records[0].exerciseType, 'audio');
    assert.equal(records[0].isCorrect, true);
    assert.equal(Number.isNaN(Date.parse(records[0].timestamp)), false);
    assert.equal(records[0].timeTaken, 4);
});

test('saveProgress handles unavailable storage without throwing', function() {
    const storage = {
        getItem: function() { return null; },
        setItem: function() { throw new Error('storage disabled'); }
    };
    const app = setup(storage);

    assert.equal(app.api.saveProgress('toBe', 'fillBlank', false, 2), false);
    assert.match(app.warning.textContent, /не разрешает сохранять данные/i);
});
