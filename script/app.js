const clickerOpen = document.querySelector('.clicker-open');
const clickerClose = document.querySelector('.clicker-close');
const navLinks = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav-btn');

clickerOpen.addEventListener('click', () => {
    navLinks.classList.add('active');
    navBtn.classList.add('active');
});

clickerClose.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navBtn.classList.remove('active');
});