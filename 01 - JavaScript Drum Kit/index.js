const keyDivs = document.querySelectorAll('div.key');

const removePlayingClass = (e) => {
    e.propertyName === 'transform' && e.target.classList.remove('playing');
}

keyDivs.forEach(div => {
    div.addEventListener('transitionend', removePlayingClass);
})

const keydownEvent = (event) => {
    const code = event.code;
    const divEl = document.querySelector(`div[data-key=${code}]`);
    const audioEl = document.querySelector(`audio[data-key=${code}]`);
    if (divEl) {
        divEl.classList.add('playing');
        audioEl.currentTime = 0;
        audioEl.play();
    }
}

document.body.addEventListener('keypress', keydownEvent);