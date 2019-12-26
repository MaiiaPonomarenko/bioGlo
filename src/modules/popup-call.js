import popup from './popup';

const getPopupCall = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
    popupCall = document.querySelector('.popup-call');
  
  popup(callBtn, popupCall);
};

export default getPopupCall;
