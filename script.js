const slider = document.querySelector('.slider');
const before = slider.querySelector('.before');
const beforeImage = before.querySelector('img');
const change = slider.querySelector('.change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
    let width = slider.offsetWidth;
    beforeImage.style.width = `${width}px`;
});

const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
};

body.addEventListener('mousedown', () => {
    isActive = true;
    console.log('down');
});

body.addEventListener('mouseup', () => {
    isActive = false;
    console.log('up');
});

body.addEventListener('mouseleave', () => {
    isActive = false;
});

body.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return;
    }

    let x = e.pageX;

    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
});