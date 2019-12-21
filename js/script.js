'use strict';

/***** popup popup-call *****/
const getPopupCall = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call');
  
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
getPopupCall();

/***** popup popup-discount *****/
const getPopupDiscount = () => {
  const discountBtn = document.querySelectorAll('.discount-btn'),
        popupDiscount = document.querySelector('.popup-discount');
  
  discountBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popupDiscount.style.display = 'block';
    })
  });
  
  popupDiscount.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close'))
      popupDiscount.style.display = 'none';
    else{
      target = target.closest('.popup-content');
      if (!target)
        popupDiscount.style.display = 'none';
    }
  });
};
getPopupDiscount();

/***** accordion *****/
const accordion = () => {
  const headingOneTwo = document.getElementById('headingOne-two'),
        collapseOnTwo = document.getElementById('collapseOne-two'),
        headingTwoTwo = document.getElementById('headingTwo-two'),
        collapseTwoTwo = document.getElementById('collapseTwo-two'),
        headingThreeTwo = document.getElementById('headingThree-two'),
        collapseThreeTwo = document.getElementById('collapseThree-two');
  
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