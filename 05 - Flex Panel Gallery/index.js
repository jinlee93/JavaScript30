const panelEls = document.querySelectorAll(".panel");
function handleClick () {
    const isOpen = this.classList.contains('open');
    if (isOpen) {
        this.classList.remove('open');
    } else {
        this.classList.add('open');
    }
}

panelEls.forEach((el) => {
    el.addEventListener('click', handleClick);
});
