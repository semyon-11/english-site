const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const rootDir = path.resolve(__dirname, '..');

class FakeElement {
    constructor(tagName, id) {
        this.tagName = tagName;
        this.id = id || '';
        this.children = [];
        this.attributes = {};
        this.className = '';
        this.style = {};
        this.textContent = '';
        this.src = '';
        this.alt = '';
        this.hidden = false;
        this.offsetWidth = 1;
        this.parentNode = null;
    }

    get classList() {
        const element = this;
        return {
            add: function() {
                const names = element.className.split(/\s+/).filter(Boolean);
                Array.from(arguments).forEach(function(name) {
                    if (!names.includes(name)) names.push(name);
                });
                element.className = names.join(' ');
            },
            remove: function() {
                const removed = Array.from(arguments);
                element.className = element.className.split(/\s+/).filter(function(name) {
                    return name && !removed.includes(name);
                }).join(' ');
            },
            contains: function(name) {
                return element.className.split(/\s+/).includes(name);
            }
        };
    }

    appendChild(child) {
        if (child.parentNode) {
            child.parentNode.children = child.parentNode.children.filter(function(item) {
                return item !== child;
            });
        }
        child.parentNode = this;
        this.children.push(child);
        return child;
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    querySelector(selector) {
        const className = selector.startsWith('.') ? selector.slice(1) : null;
        for (const child of this.children) {
            if (className && child.className.split(/\s+/).includes(className)) return child;
            const nested = child.querySelector(selector);
            if (nested) return nested;
        }
        return null;
    }
}

test('страница содержит одного постоянного Тоби и только основные элементы интерфейса', function() {
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
    const css = ['foundation.css', 'layout.css', 'components.css', 'mascot.css', 'motion.css', 'responsive.css'].map(function(file) {
        return fs.readFileSync(path.join(rootDir, 'css', file), 'utf8');
    }).join('\n');

    assert.equal((html.match(/id="mascotCompanion"/g) || []).length, 1);
    assert.equal((html.match(/id="mascotImage"/g) || []).length, 1);
    assert.equal((html.match(/src="images\/mascot\.svg"/g) || []).length, 1);
    assert.ok(!html.includes('welcome-panel'));
    assert.ok(!html.includes('welcome-tags'));
    assert.ok(!html.includes('header-note'));
    assert.ok(!html.includes('footer-note'));
    assert.ok(css.includes('color: #fff;'));
    assert.ok(css.includes('.topic-btn:hover'));
    assert.ok(css.includes('background: var(--teal-dark);'));
    assert.ok(!css.toLowerCase().includes('#667eea'));
    assert.ok(!css.toLowerCase().includes('#764ba2'));
});

test('Тоби перемещается между страницами и обновляет одну и ту же реплику', function() {
    const source = fs.readFileSync(path.join(rootDir, 'js', 'mascot.js'), 'utf8');
    const companion = new FakeElement('aside', 'mascotCompanion');
    const image = new FakeElement('img', 'mascotImage');
    const speech = new FakeElement('p', 'mascotSpeech');
    image.className = 'mascot-image';
    companion.appendChild(image);
    companion.appendChild(speech);

    const elements = {
        mascotCompanion: companion,
        mascotImage: image,
        mascotSpeech: speech
    };
    const document = {
        createElement: function(tagName) { return new FakeElement(tagName); },
        getElementById: function(id) { return elements[id] || null; }
    };
    const context = { document };
    vm.runInNewContext(source + '\nglobalThis.__mountMascot = mountMascot; globalThis.__showMascotFeedback = showMascotFeedback;', context);

    const home = new FakeElement('header');
    const topics = new FakeElement('div');
    const exercise = new FakeElement('div');
    const progress = new FakeElement('div');

    context.__mountMascot(home, 'home');
    assert.equal(companion.parentNode, home);
    context.__mountMascot(topics, 'topics');
    assert.equal(companion.parentNode, topics);
    assert.equal(home.children.length, 0);

    context.__mountMascot(exercise, 'exercise');
    context.__showMascotFeedback(exercise, true, 'Отличная работа!');
    assert.equal(companion.parentNode, exercise);
    assert.equal(speech.textContent, 'Отличная работа!');
    assert.ok(companion.classList.contains('is-correct'));
    assert.equal(exercise.children.filter(function(child) { return child === companion; }).length, 1);

    context.__showMascotFeedback(exercise, false, 'Ошибки помогают учиться!');
    assert.equal(speech.textContent, 'Ошибки помогают учиться!');
    assert.ok(companion.classList.contains('is-incorrect'));
    assert.equal(exercise.children.filter(function(child) { return child === companion; }).length, 1);

    context.__mountMascot(progress, 'progress');
    assert.equal(companion.parentNode, progress);
    assert.equal(exercise.children.length, 0);
    assert.equal(progress.children.filter(function(child) { return child === companion; }).length, 1);
    assert.equal(companion.querySelector('.mascot-image'), image);
    assert.equal(companion.children.filter(function(child) { return child === image; }).length, 1);
});

test('анимации Тоби учитывают настройку уменьшенного движения', function() {
    const css = ['mascot.css', 'motion.css', 'responsive.css'].map(function(file) {
        return fs.readFileSync(path.join(rootDir, 'css', file), 'utf8');
    }).join('\n');

    assert.ok(css.includes('@keyframes toby-idle'));
    assert.ok(css.includes('@keyframes toby-hop'));
    assert.ok(css.includes('@keyframes toby-celebrate'));
    assert.ok(css.includes('@keyframes toby-encourage'));
    assert.ok(css.includes('prefers-reduced-motion'));
});
