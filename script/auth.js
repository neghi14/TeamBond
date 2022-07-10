const contactForm = document.querySelector('form');
const contactName = document.getElementById('name');
const contactEmail = document.getElementById('email');
//const contactMessage = document.getElementById('message');
const sendButton = document.querySelector('button');


contactForm.addEventListener('submit', e => {
    e.preventDefault();
})

contactName.addEventListener('input', () => {
    const warning = contactName.nextElementSibling;
    if (contactName.value === '') {
        contactName.classList.add('error');
        warning.classList.add('darkRed')
        warning.innerHTML = "Input a Valid name";
    }
    else {
        contactName.classList.remove('error');
        warning.classList.remove('darkRed');
        warning.classList.add('darkBlue');
        warning.innerHTML = "Looks good so far!";
    }
});
contactEmail.addEventListener('input', () => {
    const warning = contactEmail.nextElementSibling;
    if (contactEmail.value === '') {
        contactEmail.classList.add('error');
        warning.classList.add('darkRed')
        warning.innerHTML = "Input a Valid Email";
    }
    else {
        contactEmail.classList.remove('error');
        warning.classList.remove('darkRed');
        warning.classList.add('darkBlue');
        warning.innerHTML = "Looks good so far!";
    }
});
