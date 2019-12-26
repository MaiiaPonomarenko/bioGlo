
import popup from './popup';

const getPopupDiscount = () => {
  const discountBtn = document.querySelectorAll('.discount-btn'),
    popupDiscount = document.querySelector('.popup-discount');
  
  popup(discountBtn, popupDiscount);
};

export default getPopupDiscount;