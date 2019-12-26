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
  const collapseOnTwo = document.getElementById('collapseOne-two'),
        collapseTwoTwo = document.getElementById('collapseTwo-two'),
        collapseThreeTwo = document.getElementById('collapseThree-two'),
        accordionTwo = document.getElementById('accordion-two');
  
  accordionTwo.addEventListener('click', () => {
    if (event.target.classList.contains('collapseOne-two')){
      collapseOnTwo.classList.toggle('in');
    }
    else if (event.target.classList.contains('collapseTwo-two')){
      collapseTwoTwo.classList.toggle('in');
    }
    else if (event.target.classList.contains('collapseThree-two')){
      collapseThreeTwo.classList.toggle('in');
    }
  });
};
accordion();

/***** more *****/
const more = () => {
  const addSentenceBtn = document.querySelector('.add-sentence-btn'),
        itemSentence = document.querySelectorAll('.item-sentence');
  
  addSentenceBtn.addEventListener('click', () => {
    itemSentence.forEach((item) => {
      if (item.classList.contains('hidden') || item.classList.contains('visible-sm-block')){
        item.classList.remove('visible-sm-block');
        item.classList.remove('hidden');
        addSentenceBtn.style.display = 'none';
      }
    })
  });
};
more();

/***** calc-accordion *****/
const calcAccordion = () => {
  
  const accordion = () => {
    const constructBtn = document.querySelectorAll('.construct-btn'),
      collapseOne = document.getElementById('collapseOne'),
      collapseTwo = document.getElementById('collapseTwo'),
      collapseThree = document.getElementById('collapseThree'),
      collapseFour = document.getElementById('collapseFour'),
      accordion = document.getElementById('accordion');
  
    accordion.addEventListener('click', () => {
      if (event.target.matches('.headingOne')){
        collapseOne.classList.toggle('in');
      }
      else if (event.target.matches('.headingTwo')){
        collapseTwo.classList.toggle('in');
      }
      else if (event.target.matches('.headingThree')){
        collapseThree.classList.toggle('in');
      }
      else if (event.target.matches('.headingFour')){
        collapseFour.classList.toggle('in');
      }
    });
  
    for (let i = 0; i < constructBtn.length; i++){
      constructBtn[i].addEventListener('click', () => {
        if (i === 0)
          collapseTwo.classList.add('in');
        else if (i === 1)
          collapseThree.classList.add('in');
        else
          collapseFour.classList.add('in');
      });
    }
  };
  accordion();
  
  const calc = () => {
    const calcResultInput = document.getElementById('calc-result'),
          myonoffswitch = document.getElementById('myonoffswitch'),
          myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
          diameterOne = document.querySelector('.diameter-one'),
          diameterTwo = document.querySelector('.diameter-two'),
          numberOfRingsOne = document.querySelector('.number-of-rings-one'),
          numberOfRingsTwo = document.querySelector('.number-of-rings-two'),
          secondWell = document.querySelector('.second-well'),
          sendSale = document.querySelectorAll('.send-sale'),
          popupDiscount = document.querySelector('.popup-discount');

    let septicTypePrice = 10000,
        diamOne = 0,
        numOfRingsOne = 0,
        diamTwo = 0,
        numOfRingsTwo = 0,
        wellBottom = 0;
    
    const objCalc = {};
    objCalc['Диаметр первого колодца'] = '1.4 метра';
    objCalc['Количество колец первого колодца'] = '1 штука';
    objCalc['Наличие днища'] = 'есть';
      
    secondWell.style.visibility = 'hidden';
    
    myonoffswitch.addEventListener('change', () => {
      if (myonoffswitch.checked){
        septicTypePrice = 10000;
        wellBottom = 1000;
        objCalc['Тип септика'] = 'Однокамерный';
        secondWell.style.visibility = 'hidden';
      }
      else{
        septicTypePrice = 15000;
        wellBottom = 2000;
        objCalc['Тип септика'] = 'Двухкамерный';
        objCalc['Диаметр второго колодца'] = '1.4 метра';
        objCalc['Количество колец второго колодца'] = '1 штука';
        secondWell.style.visibility = 'visible';
      }
  
      result();
    });
    
    diameterOne.addEventListener('change', () => {
      let typeValueDiameterOne = diameterOne.options[diameterOne.selectedIndex].value;
      if (typeValueDiameterOne === '2 метра'){
        diamOne = 0.2;
        objCalc['Диаметр первого колодца'] = '2 метра';
      } else{
        diamOne = 0;
        objCalc['Диаметр первого колодца'] = '1.4 метра';
      }
      result();
    });
    
    numberOfRingsOne.addEventListener('change', () => {
      let typeValueNumberOfRingsOne = numberOfRingsOne.options[numberOfRingsOne.selectedIndex].value;
      if (typeValueNumberOfRingsOne === '1 штука'){
        numOfRingsOne = 0;
        objCalc['Количество колец первого колодца'] = '1 штука';
      } else if (typeValueNumberOfRingsOne === '2 штуки'){
        numOfRingsOne = 0.3;
        objCalc['Количество колец первого колодца'] = '2 штуки';
      } else if (typeValueNumberOfRingsOne === '3 штуки'){
        numOfRingsOne = 0.5;
        objCalc['Количество колец первого колодца'] = '3 штуки';
      }
  
      result();
    });
    
    diameterTwo.addEventListener('change', () => {
      let typeValueDiameterTwo = diameterTwo.options[diameterTwo.selectedIndex].value;
      if (typeValueDiameterTwo === '2 метра'){
        diamTwo = 0.2;
        objCalc['Диаметр второго колодца'] = '2 метра';
      } else{
        diamTwo = 0;
        objCalc['Диаметр второго колодца'] = '1.4 метра';
      }
  
      result();
    });
    
    numberOfRingsTwo.addEventListener('change', () => {
      let typeValueNumberOfRingsTwo = numberOfRingsTwo.options[numberOfRingsTwo.selectedIndex].value;
      if (typeValueNumberOfRingsTwo === '1 штука'){
        numOfRingsTwo = 0;
        objCalc['Количество колец второго колодца'] = '1 штука';
      } else if (typeValueNumberOfRingsTwo === '2 штуки'){
        numOfRingsTwo = 0.3;
        objCalc['Количество колец второго колодца'] = '2 штуки';
      } else if (typeValueNumberOfRingsTwo === '3 штуки'){
        numOfRingsTwo = 0.5;
        objCalc['Количество колец второго колодца'] = '3 штуки';
      }
      result();
    });
  
    myonoffswitchTwo.addEventListener('change', () => {
      if (!myonoffswitchTwo.checked){
        wellBottom = 0;
        objCalc['Наличие днища'] = 'нет';
      }
      else {
        if (myonoffswitchTwo.checked && septicTypePrice === 10000) {
          wellBottom = 1000;
          objCalc['Наличие днища'] = 'есть';
        }
        else if (myonoffswitchTwo.checked && septicTypePrice === 15000) {
          wellBottom = 2000;
          objCalc['Наличие днища'] = 'есть';
        }
      }
      result();
      console.log(objCalc);
    });
    
    const result = () => {
      calcResultInput.value = septicTypePrice + (septicTypePrice * diamOne) + (septicTypePrice * numOfRingsOne) +  (septicTypePrice * diamTwo) + (septicTypePrice * numOfRingsTwo) + wellBottom;
      objCalc['Итого'] = calcResultInput.value;
    };
    
    popup(sendSale, popupDiscount);
  };
  calc();
  
};
calcAccordion();

/***** ajax *****/
const sendForm = () => {
  
  const errorMessage = "Ошибка отправки формы",
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо, мы скоро с Вами свяжемся!';
  
  const mainForm = document.querySelector('.main-form'),
        mainFormPhone = document.getElementById('phone_3'),
        captureForm = document.querySelector('.capture-form'),
        captureFormName = document.getElementById('name_2'),
        captureFormPhone = document.getElementById('phone_2'),
    
    form2 = document.getElementById('form2'),
    form3 = document.getElementById('form3'),
    input = document.querySelectorAll('input'),
    name1 = document.getElementById('form1-name'),
    phone1 = document.getElementById('form1-phone'),
    name2 = document.getElementById('form2-name'),
    phone2 = document.getElementById('form2-phone'),
    message = document.getElementById('form2-message'),
    name3 = document.getElementById('form3-name'),
    phone3 = document.getElementById('form3-phone');
  
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem; color: #85be32;`;
  
  const post = (selectForm) => {
    
    selectForm.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    
    const formData = new FormData(selectForm);
    let body = {};
    for(let val of formData.entries()){
      body[val[0]] = val[1];
    }
    postData(body)
    .then ((response) => {
      if (response.status !== 200){
        input.forEach((item) => {item.value = '';});
        throw new Error ('status network not 200');
      }
      input.forEach((item) => {item.value = '';});
      statusMessage.textContent = successMessage;
    })
    .catch ((error) => {
      statusMessage.textContent = errorMessage;
      console.error(error);
    });
  };
  
  /*подключение к mainForm*/
  mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (mainFormPhone.classList.contains('error')){
      return false;
    } else
      post(mainForm);
  });
  
  /*подключение к captureForm*/
  captureForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (captureFormName.classList.contains('error') || captureFormPhone.classList.contains('error')){
      return false;
    } else
      post(captureForm);
  });
  
  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };
};
sendForm();