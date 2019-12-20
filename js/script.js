'use strict';

/***** popup *****/
const getPopup = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call'),
        popupClose = document.querySelector('.popup-close');
  
  callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popupCall.style.display = 'block';
    })
  });

  popupCall.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close'))
      popupCall.style.display = 'none';
    else{
      target = target.closest('.popup-content');
      if (!target)
        popupCall.style.display = 'none';
    }
  });
};
getPopup();

/***** accordion *****/
const accordion = () => {
  const headingOneTwo = document.querySelector('#headingOne-two'),
        collapseOnTwo = document.querySelector('#collapseOne-two'),
        headingTwoTwo = document.querySelector('#headingTwo-two'),
        collapseTwoTwo = document.querySelector('#collapseTwo-two'),
        headingThreeTwo = document.querySelector('#headingThree-two'),
        collapseThreeTwo = document.querySelector('#collapseThree-two');
  
  headingOneTwo.addEventListener('click', () => {
    collapseOnTwo.classList.toggle('in');
  });
  headingTwoTwo.addEventListener('click', () => {
    collapseTwoTwo.classList.toggle('in');
  });
  headingThreeTwo.addEventListener('click', () => {
    collapseThreeTwo.classList.toggle('in');
  });
};
accordion();