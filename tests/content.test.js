const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { loadProjectData, validateProjectData } = require('../scripts/validate-content');

const rootDir = path.resolve(__dirname, '..');

test('учебные данные и ссылки на изображения корректны', function() {
    const data = loadProjectData(rootDir);
    const result = validateProjectData(data, rootDir);

    assert.deepEqual(result.errors, []);
    assert.equal(result.stats.sectionCount, 3);
    assert.equal(result.stats.topicCount, 17);
    assert.ok(result.stats.exerciseCount > 0);
    assert.ok(result.stats.questionCount > 0);
});

test('генератор сопоставления проходит весь алфавит без повторов за цикл', function() {
    const scripts = ['js/content.js', 'js/state.js', 'js/utils.js', 'js/exercise-generators.js'];
    const source = scripts.map(function(file) {
        return fs.readFileSync(path.join(rootDir, file), 'utf8');
    }).join('\n') + `
        globalThis.__lettersSeen = (function() {
            var seen = new Set();
            var rounds = 0;
            while (seen.size < allLetters.length && rounds < 10) {
                var generated = generateCaseMatchingExercise();
                generated.pairs.forEach(function(pair) {
                    if (seen.has(pair.left)) throw new Error('Повтор буквы до завершения цикла');
                    seen.add(pair.left);
                });
                rounds += 1;
            }
            return seen.size;
        })();
    `;
    const sandbox = {};
    vm.runInNewContext(source, sandbox);

    assert.equal(sandbox.__lettersSeen, 26);
});
