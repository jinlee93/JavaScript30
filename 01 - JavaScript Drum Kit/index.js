const [divA, divS, divD, divF, divG, divH, divJ, divK, divL] = document.querySelectorAll('div.key');
const [audioA, audioS, audioD, audioF, audioG, audioH, audioJ, audioK, audioL] = document.querySelectorAll('audio');

const keydownEvent = (event) => {
    const key = event.key;
    if (key === 'a' || key === 'A') {
        divA.classList.add('playing');
        audioA.play().then(() => {
            divA.classList.remove('playing');
        })
    }
    if (key === 's' || key === 'S') {
        divS.classList.add('playing');
        audioS.play().then(() => {
            divS.classList.remove('playing');
        })
    }
    if (key === 'd' || key === 'D') {
        divD.classList.add('playing');
        audioD.play().then(() => {
            divD.classList.remove('playing');
        })
    }
    if (key === 'f' || key === 'F') {
        divF.classList.add('playing');
        audioF.play().then(() => {
            divF.classList.remove('playing');
        })
    }
    if (key === 'g' || key === 'G') {
        divG.classList.add('playing');
        audioG.play().then(() => {
            divG.classList.remove('playing');
        })
    }
    if (key === 'h' || key === 'H') {
        divH.classList.add('playing');
        audioH.play().then(() => {
            divH.classList.remove('playing');
        })
    }
    if (key === 'j' || key === 'J') {
        divJ.classList.add('playing');
        audioJ.play().then(() => {
            divJ.classList.remove('playing');
        })
    }
    if (key === 'k' || key === 'K') {
        divK.classList.add('playing');
        audioK.play().then(() => {
            divK.classList.remove('playing');
        })
    }
    if (key === 'l' || key === 'L') {
        divL.classList.add('playing');
        audioL.play().then(() => {
            divL.classList.remove('playing');
        })
    }
}

document.body.addEventListener('keypress', keydownEvent);