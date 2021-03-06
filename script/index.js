const offersTwo = document.querySelector('#offersTwo');
const offersOne = document.querySelector('#offersOne');

const offerOne = document.querySelector('#offerOne');
const offerTwo = document.querySelector('#offerTwo');

const offerTextOne = document.querySelector('#offerTextOne');
const offerTextTwo = document.querySelector('#offerTextTwo');

offerOne.addEventListener('click', () => {
    if(offerOne.classList.contains('active-offer')){
        offerTwo.classList.remove('active-offer');
        offerTextTwo.classList.remove('r-h6', 'charcoal', 'active-offer-text');
    } else{
        offerOne.classList.add('active-offer');
        offerTextOne.classList.add('r-h6', 'charcoal', 'active-offer-text');
        offersTwo.classList.add('hidden')
        offerTwo.classList.remove('active-offer');
        offerTextTwo.classList.remove('r-h6', 'charcoal', 'active-offer-text');
        offersOne.classList.remove('hidden');
    }
});

offerTwo.addEventListener('click', () => {
    if(offerTwo.classList.contains('active-offer')){
        offerOne.classList.remove('active-offer')
        offerTextOne.classList.remove('r-h6', 'charcoal', 'active-offer-text');
    } else{
        offerTwo.classList.add('active-offer');
        offerTextTwo.classList.add('r-h6', 'charcoal', 'active-offer-text');
        offersOne.classList.add('hidden');
        offerOne.classList.remove('active-offer');
        offerTextOne.classList.remove('r-h6', 'charcoal', 'active-offer-text');
        offersTwo.classList.remove('hidden');
    }
});