const clickerOpen = document.querySelector('.clicker-open');
const clickerClose = document.querySelector('.clicker-close');
const navLinks = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav-btn');
const navLinkLI = document.querySelectorAll('.nav-links li');

clickerOpen.addEventListener('click', () => {
    navLinks.classList.add('active');
    navBtn.classList.add('active');
});

clickerClose.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navBtn.classList.remove('active');
});

const pathname = document.URL;

const path =  () => {
        navLinkLI.forEach(link => {
            if(pathname === link.firstElementChild.href){
                link.classList.add('active-link')
            }
        });
    }
path();