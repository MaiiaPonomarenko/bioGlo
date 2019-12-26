import popup from './popup';

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
        if (collapseTwo.classList.contains('in') || collapseThree.classList.contains('in') || collapseFour.classList.contains('in')){
          collapseTwo.classList.remove('in');
          collapseThree.classList.remove('in');
          collapseFour.classList.remove('in');
        }
      }
      else if (event.target.matches('.headingTwo')){
        collapseTwo.classList.toggle('in');
        if (collapseOne.classList.contains('in') || collapseThree.classList.contains('in') || collapseFour.classList.contains('in')){
          collapseOne.classList.remove('in');
          collapseThree.classList.remove('in');
          collapseFour.classList.remove('in');
        }
      }
      else if (event.target.matches('.headingThree')){
        collapseThree.classList.toggle('in');
        if (collapseTwo.classList.contains('in') || collapseOne.classList.contains('in') || collapseFour.classList.contains('in')){
          collapseTwo.classList.remove('in');
          collapseOne.classList.remove('in');
          collapseFour.classList.remove('in');
        }
      }
      else if (event.target.matches('.headingFour')){
        collapseFour.classList.toggle('in');
        if (collapseTwo.classList.contains('in') || collapseThree.classList.contains('in') || collapseOne.classList.contains('in')){
          collapseTwo.classList.remove('in');
          collapseThree.classList.remove('in');
          collapseOne.classList.remove('in');
        }
      }
    });
    
    for (let i = 0; i < constructBtn.length; i++){
      constructBtn[i].addEventListener('click', () => {
        if (i === 0){
          collapseTwo.classList.add('in');
          if (collapseOne.classList.contains('in') || collapseThree.classList.contains('in') || collapseFour.classList.contains('in')){
            collapseOne.classList.remove('in');
            collapseThree.classList.remove('in');
            collapseFour.classList.remove('in');
          }
        }
        else if (i === 1){
          collapseThree.classList.add('in');
          if (collapseTwo.classList.contains('in') || collapseOne.classList.contains('in') || collapseFour.classList.contains('in')){
            collapseTwo.classList.remove('in');
            collapseOne.classList.remove('in');
            collapseFour.classList.remove('in');
          }
        }
        
        else {
          collapseFour.classList.add('in');
          if (collapseTwo.classList.contains('in') || collapseThree.classList.contains('in') || collapseOne.classList.contains('in')){
            collapseTwo.classList.remove('in');
            collapseThree.classList.remove('in');
            collapseOne.classList.remove('in');
          }
        }
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
    });
    
    const result = () => {
      calcResultInput.value = septicTypePrice + (septicTypePrice * diamOne) + (septicTypePrice * numOfRingsOne) +  (septicTypePrice * diamTwo) + (septicTypePrice * numOfRingsTwo) + wellBottom;
      objCalc['Итого'] = calcResultInput.value;
    };
    
    popup(sendSale, popupDiscount);
    
    const errorMessage = "Ошибка отправки формы",
      loadMessage = 'Загрузка...',
      successMessage = 'Спасибо, мы скоро с Вами свяжемся!';
    
    const
      captureForm3 = document.getElementById('capture-form3'),
      captureFormName3 = document.getElementById('name_11'),
      captureFormPhone3 = document.getElementById('phone_11'),
      input = document.querySelectorAll('input');
    
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem; color: #85be32;`;
    
    captureForm3.addEventListener('submit', (event) => {
      event.preventDefault();
      if (captureFormName3.classList.contains('error') || captureFormPhone3.classList.contains('error')){
        return false;
      } else{
        captureForm3.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        
        const formData = new FormData(captureForm3);
        let address = {};
        for(let val of formData.entries()){
          address[val[0]] = val[1];
        }
        let body = Object.assign(address, objCalc);
        
        postData(body)
        .then ((response) => {
          if (response.status !== 200){
            input.forEach((item) => {item.value = '';});
            throw new Error ('status network not 200');
          }
          input.forEach((item) => {item.value = '';});
          statusMessage.textContent = successMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 3000);
          
        })
        .catch ((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
      }
      
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
    
    /*********************   *********************/
  };
  calc();
  
};

export default calcAccordion;