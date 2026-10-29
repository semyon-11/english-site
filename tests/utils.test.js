const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const rootDir = path.resolve(__dirname, '..');
const utilsSource = fs.readFileSync(path.join(rootDir, 'js', 'utils.js'), 'utf8');

function createUtils() {
    const context = {};
    vm.runInNewContext('var usedQuestions = {};' + utilsSource, context);
    return context;
}

test('normalizeAnswer normalizes case, spaces and apostrophes', function() {
    const utils = createUtils();
    assert.equal(utils.normalizeAnswer('  DON’T   STOP  '), "don't stop");
    assert.equal(utils.normalizeAnswer('ice   cream'), 'ice cream');
});

test('shuffleArray does not mutate the original array', function() {
    const utils = createUtils();
    const source = [1, 2, 3, 4, 5];
    const shuffled = utils.shuffleArray(source);

    assert.notEqual(shuffled, source);
    assert.deepEqual(source, [1, 2, 3, 4, 5]);
    assert.deepEqual([...shuffled].sort(), [1, 2, 3, 4, 5]);
});

test('getNextUnusedQuestion does not repeat questions within one cycle', function() {
    const utils = createUtils();
    const exercise = { questions: [{}, {}, {}, {}] };
    const firstCycle = new Set();

    for (let index = 0; index < exercise.questions.length; index += 1) {
        firstCycle.add(utils.getNextUnusedQuestion(exercise, 0));
    }

    assert.equal(firstCycle.size, 4);
    const nextIndex = utils.getNextUnusedQuestion(exercise, 0);
    assert.ok(nextIndex >= 0 && nextIndex < 4);
});
