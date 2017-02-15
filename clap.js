(function () {
    var inEl = document.getElementById('inel');
    var outEl = document.getElementById('outel');
    var count = document.getElementById('count');
    var clap = function () {
        var tone = document.querySelector('.tone.selected').dataset.tone;
        var out = inEl.value.split(/\s+/).join(` \uD83D\uDC4F${tone} `);
        outEl.innerText = out;
        // Counts by unicode code point, not grapheme, which is how Twitter does it
        var outLength = 140 - [...out].length;
        count.innerText = outLength;
        if (outLength < 0) {
            count.classList.add('long');
        } else {
            count.classList.remove('long');
        }
    };
    var toneClick = function (e) {
        document.querySelector('.tone.selected').classList.remove('selected');
        e.target.classList.add('selected');
        clap();
    };
    Array.prototype.forEach.call(document.querySelectorAll('.tone'), function (el) {
        el.addEventListener('click', toneClick);
    });
    inEl.addEventListener('input', clap);
    inEl.focus();
})();
