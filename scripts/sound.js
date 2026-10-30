(function() {
    var audioContext = null;

    function isTouchDevice() {
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
        try {
            return window.matchMedia('(pointer: coarse)').matches;
        } catch (error) {
            return false;
        }
    }

    function getAudioContext() {
        if (typeof window === 'undefined') return null;
        var AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextConstructor) return null;

        try {
            if (!audioContext) audioContext = new AudioContextConstructor();
            if (audioContext.state === 'suspended') {
                var resumeResult = audioContext.resume();
                if (resumeResult && typeof resumeResult.catch === 'function') {
                    resumeResult.catch(function() {});
                }
            }
            return audioContext;
        } catch (error) {
            return null;
        }
    }

    function playTone(frequency, delay, duration, desktopVolume, mobileVolume) {
        var context = getAudioContext();
        if (!context) return;

        try {
            var start = context.currentTime + delay;
            var oscillator = context.createOscillator();
            var gain = context.createGain();
            var volume = isTouchDevice() ? mobileVolume : desktopVolume;

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(frequency, start);
            gain.gain.setValueAtTime(0.0001, start);
            gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
            gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
            oscillator.connect(gain);
            gain.connect(context.destination);
            oscillator.start(start);
            oscillator.stop(start + duration + 0.02);
        } catch (error) {
            return;
        }
    }

    function playClickSound() {
        playTone(520, 0, 0.055, 0.10, 0.22);
    }

    function playAnswerSound(isCorrect) {
        if (isCorrect) {
            playTone(660, 0, 0.075, 0.12, 0.25);
            playTone(880, 0.075, 0.095, 0.13, 0.27);
        } else {
            playTone(330, 0, 0.065, 0.11, 0.24);
            playTone(262, 0.065, 0.08, 0.10, 0.23);
        }
    }

    function findControl(target) {
        if (!target || typeof target.closest !== 'function') return null;
        return target.closest('button, .option-label');
    }

    function isAvailable(control) {
        return control &&
            !control.disabled &&
            control.getAttribute('aria-disabled') !== 'true' &&
            !control.classList.contains('disabled');
    }

    function animateControl(control) {
        control.classList.remove('is-pressed');
        void control.offsetWidth;
        control.classList.add('is-pressed');
        window.setTimeout(function() {
            control.classList.remove('is-pressed');
        }, 240);
    }

    if (typeof document !== 'undefined') {
        document.addEventListener('click', function(event) {
            if (!event.isTrusted) return;
            var control = findControl(event.target);
            if (!isAvailable(control)) return;
            animateControl(control);
            playClickSound();
        });
    }

    if (typeof window !== 'undefined') {
        window.playClickSound = playClickSound;
        window.playAnswerSound = playAnswerSound;
    }
})();