'use strict';

/***** popup *****/
const popup = (btn, popupWindow) => {
  btn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popupWindow.style.display = 'block';
    })
  });
  
  popupWindow.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close'))
      popupWindow.style.display = 'none';
    else{
      target = target.closest('.popup-content');
      if (!target)
        popupWindow.style.display = 'none';
    }
  });
};

/***** popup popup-call *****/
const getPopupCall = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call');
  
  popup(callBtn, popupCall);
};
getPopupCall();

/***** popup popup-discount *****/
const getPopupDiscount = () => {
  const discountBtn = document.querySelectorAll('.discount-btn'),
        popupDiscount = document.querySelector('.popup-discount');
  
  popup(discountBtn, popupDiscount);
};
getPopupDiscount();

/***** popup popup-check *****/
const getPopupCheck = () => {
  const checkBtn = document.querySelectorAll('.check-btn'),
        popupCheck = document.querySelector('.popup-check');
  
  popup(checkBtn, popupCheck);
  
};
getPopupCheck();


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