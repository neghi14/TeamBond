const selector = document.querySelector('#selector');
const selectorDiv = selector.parentElement;
const priceCardOne = document.querySelector('#priceCardOne');
const priceCardTwo = document.querySelector('#priceCardTwo');

selectorDiv.addEventListener('click', () => {
    if (selector.classList.contains('left') || priceCardTwo.classList.contains('hidden')) {
        selector.classList.remove('left');
        priceCardTwo.classList.remove('hidden');
        selector.classList.add('right');
        priceCardOne.classList.add('hidden');
    } else {
        selector.classList.remove('right')
        selector.classList.add('left');
        priceCardOne.classList.remove('hidden');
        priceCardTwo.classList.add('hidden');
    }
});



