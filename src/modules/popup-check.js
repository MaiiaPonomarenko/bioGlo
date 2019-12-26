import popup from './popup';

const getPopupCheck = () => {
  const checkBtn = document.querySelectorAll('.check-btn'),
    popupCheck = document.querySelector('.popup-check');
  
  popup(checkBtn, popupCheck);
  
};

export default getPopupCheck;