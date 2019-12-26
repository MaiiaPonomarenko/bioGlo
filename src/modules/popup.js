
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

export default popup;