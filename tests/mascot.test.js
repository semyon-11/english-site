const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const rootDir = path.resolve(__dirname, '..');

class FakeElement {
    constructor(tagName) {
        this.tagName = tagName;
        this.children = [];
        this.attributes = {};
        this.className = '';
        this.style = {};
        this.textContent = '';
        this.src = '';
        this.alt = '';
        this.offsetWidth = 1;
    }

    appendChild(child) {
        this.children.push(child);
        return child;
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    querySelector(selector) {
        const className = selector.slice(1);
        for (const child of this.children) {
            if (child.className.split(/\\s+/).includes(className)) return child;
            const nested = child.querySelector(selector);
            if (nested) return nested;
        }
        return null;
    }
}

test('маскот подключён в шапке и используется как иконка сайта', function() {
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
    const mascot = fs.readFileSync(path.join(rootDir, 'images', 'mascot.svg'), 'utf8');
    const favicon = fs.readFileSync(path.join(rootDir, 'images', 'favicon.svg'), 'utf8');

    assert.match(html, /images\\/favicon\\.svg/);
    assert.match(html, /images\\/mascot\\.svg/);
    assert.match(mascot, /viewBox="0 0 360 400"/);
    assert.match(favicon, /<svg[^>]+viewBox="0 0 128 128"/);
});

test('маскот меняет реакцию и сообщение, не создавая повторные блоки', function() {
    const source = fs.readFileSync(path.join(rootDir, 'js', 'mascot.js'), 'utf8');
    const document = { createElement: function(tagName) { return new FakeElement(tagName); } };
    const context = { document };
    vm.runInNewContext(source + '\\nglobalThis.__showMascotFeedback = showMascotFeedback;', context);

    const container = new FakeElement('div');
    context.__showMascotFeedback(container, true, 'Отличная работа!');
    let feedback = container.querySelector('.mascot-feedback');
    assert.ok(feedback);
    assert.match(feedback.className, /is-correct/);
    assert.equal(feedback.querySelector('.mascot-feedback-message').textContent, 'Отличная работа!');
    assert.equal(feedback.querySelector('.mascot-feedback-image').alt, 'Тото радуется');

    context.__showMascotFeedback(container, false, 'Ошибки помогают учиться!');
    feedback = container.querySelector('.mascot-feedback');
    assert.equal(container.children.length, 1);
    assert.match(feedback.className, /is-incorrect/);
    assert.equal(feedback.querySelector('.mascot-feedback-message').textContent, 'Ошибки помогают учиться!');
    assert.equal(feedback.querySelector('.mascot-feedback-image').alt, 'Тото поддерживает ученика');
});
