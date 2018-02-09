const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
    const otherPanels = [...panels].filter(panel => panel !== this);
    otherPanels.forEach(panel => panel.classList.remove('open'));
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}


const addListenerClick = panel => panel.addEventListener('click', toggleOpen);
const addListenerTransition = panel => panel.addEventListener('transitionend', toggleActive);

panels.forEach(addListenerClick);
panels.forEach(addListenerTransition);