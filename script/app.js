const clickerOpen = document.querySelector('.clicker-open');
const clickerClose = document.querySelector('.clicker-close');
const navLinks = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav-btn');

clickerOpen.addEventListener('click', () => {
    navLinks.classList.remove('hidden');
    navBtn.classList.remove('hidden');
});

clickerClose.addEventListener('click', () => {
    navLinks.classList.add('hidden');
    navBtn.classList.add('hidden');
})