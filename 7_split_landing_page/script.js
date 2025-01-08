const container = document.querySelector('.container');
const left = document.querySelector('.split.left');
const right = document.querySelector('.split.right');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    container.classList.remove('hover-right');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    container.classList.remove('hover-left');
});

container.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left', 'hover-right');
});
