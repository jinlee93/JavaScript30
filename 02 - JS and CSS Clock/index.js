const hourEl = document.querySelector('.hour-hand');
const minEl = document.querySelector('.min-hand');
const secondEl = document.querySelector('.second-hand');

const intervalID = setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    hourEl.style = `transform: rotate(${hours % 12 * 30 + 90}deg);`
    minEl.style = `transform: rotate(${minutes % 60 * 6 + 90}deg);`
    secondEl.style = `transform: rotate(${seconds % 60 * 6 + 90}deg);`
}, 100);